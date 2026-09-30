#!/usr/bin/env python3
"""Static checks for the site. Run before every deploy:

    python3 scripts/check_site.py

Checks, for every HTML page in the repository:
  * every local href/src resolves the way nginx.conf resolves it;
  * every in-page and cross-page #fragment has a matching id;
  * no inline style attribute or <style> block (the CSP is style-src 'self');
  * site pages mount the shared header and footer and declare a known page key;
and, across the site:
  * page photography stays within the size budget;
  * every indexable page has a unique title, a description, a rivr.social canonical,
    social tags and JSON-LD, and sitemap.xml lists exactly the indexable routes.
"""
import html.parser
import json
import pathlib
import re
import sys

REPO_ROOT = pathlib.Path(__file__).resolve().parent.parent
SITE_DIR = REPO_ROOT
PAGE_IMAGE_DIR = SITE_DIR / "assets" / "pages"
PAGE_IMAGE_BUDGET_BYTES = 600 * 1024
CANONICAL_ORIGIN = "https://rivr.social"
INDEXABLE_ROUTES = ["index", "features", "membership", "about", "team", "vision", "blog", "contact", "bioregion-map", "getstarted", "privacy", "terms"]
TITLE_MAX_CHARS = 70
DESCRIPTION_CHARS = (70, 175)
REQUIRED_SOCIAL_TAGS = ("og:title", "og:description", "og:url", "og:image", "twitter:card")
# Study pages keep their own chrome; every other page uses the shared one.
STUDY_DIRS = ("concepts", "integrated")
# Served from the deployment host only; see map-config.example.js.
DEPLOY_ONLY_FILES = {"/map-config.js"}
SHARED_CHROME_MARKERS = ("data-site-header", "data-site-footer")
NAV_SOURCE = SITE_DIR / "site.js"
# Text that is not page copy: scripts, styles, and the document title.
SKIPPED_TEXT_TAGS = {"script", "style", "title"}


class PageParser(html.parser.HTMLParser):
    """Collects what the checks need from one HTML document."""

    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.links = []
        self.ids = set()
        self.inline_styles = []
        self.style_blocks = 0
        self.body_attrs = {}
        self.attr_names = set()
        self.text = []
        self.title = ""
        self.metas = {}
        self.canonical = None
        self.json_ld = []
        self._skip_depth = 0
        self._in_title = False
        self._in_json_ld = False

    def handle_starttag(self, tag, attrs):
        attr_map = dict(attrs)
        self.attr_names.update(attr_map)
        if tag == "body":
            self.body_attrs = attr_map
        if tag == "style":
            self.style_blocks += 1
        if tag == "title":
            self._in_title = True
        if tag == "meta" and attr_map.get("content") is not None:
            self.metas[attr_map.get("name") or attr_map.get("property") or ""] = attr_map["content"]
        if tag == "link" and attr_map.get("rel") == "canonical":
            self.canonical = attr_map.get("href")
        if tag == "script" and attr_map.get("type") == "application/ld+json":
            self._in_json_ld = True
            self.json_ld.append("")
        if tag in SKIPPED_TEXT_TAGS:
            self._skip_depth += 1
        if "id" in attr_map:
            self.ids.add(attr_map["id"])
        if "style" in attr_map:
            self.inline_styles.append(f"<{tag} style=\"{attr_map['style']}\">")
        for name in ("href", "src"):
            if attr_map.get(name):
                self.links.append(attr_map[name])
        for name in ("alt", "value"):
            if attr_map.get(name) and attr_map.get("type") != "hidden":
                self.text.append(attr_map[name])

    def handle_endtag(self, tag):
        if tag in SKIPPED_TEXT_TAGS and self._skip_depth:
            self._skip_depth -= 1
        if tag == "title":
            self._in_title = False
        if tag == "script":
            self._in_json_ld = False

    def handle_data(self, data):
        if self._in_title:
            self.title += data
        if self._in_json_ld:
            self.json_ld[-1] += data
        if not self._skip_depth and data.strip():
            self.text.append(data)


def parse(path):
    parser = PageParser()
    parser.feed(path.read_text(encoding="utf-8"))
    return parser


def normalize(text):
    """Collapse whitespace and punctuation variants so copy can be compared."""
    return re.sub(r"\s+", " ", text.replace(" ", " ")).strip()


def resolve(url_path):
    """Map a URL path to the file nginx.conf serves, or None."""
    relative = url_path.lstrip("/")
    candidates = [SITE_DIR / relative, SITE_DIR / f"{relative}.html", SITE_DIR / relative / "index.html"]
    if relative == "":
        candidates = [SITE_DIR / "index.html"]
    for candidate in candidates:
        if candidate.is_file():
            return candidate
    return None


def site_js_links():
    """Local hrefs the shared header and footer inject."""
    source = NAV_SOURCE.read_text(encoding="utf-8")
    return sorted(set(re.findall(r'"(/[^"\s]*)"', source)) - {"/"}) + ["/"]


def check_links(page, links, parsed_by_file, errors, check_fragments=True):
    for link in links:
        if re.match(r"^(https?:|mailto:|data:)", link):
            continue
        path, _, fragment = link.partition("#")
        path = path.split("?")[0]
        if path in DEPLOY_ONLY_FILES:
            continue
        if path and not path.startswith("/"):
            errors.append(f"{page}: relative link {link!r}; use a root-relative path")
            continue
        target = resolve(path) if path else SITE_DIR / page
        if target is None:
            errors.append(f"{page}: {link!r} does not resolve to a file in the site")
            continue
        if check_fragments and fragment and target.suffix == ".html":
            target_page = parsed_by_file.get(target)
            rendered_by_script = target_page is not None and fragment == "main"
            if target_page is not None and fragment not in target_page.ids and not rendered_by_script:
                errors.append(f"{page}: {link!r} points at a missing id #{fragment}")


def check_site_page(page, parsed, nav_pages, errors):
    for marker in SHARED_CHROME_MARKERS:
        if marker not in parsed.attr_names:
            errors.append(f"{page}: missing shared chrome placeholder [{marker}]")
    key = parsed.body_attrs.get("data-page")
    if page != "404.html" and not key:
        errors.append(f"{page}: <body> has no data-page key")
    if key in nav_pages and nav_pages[key] != "/" + page.removesuffix(".html"):
        errors.append(f"{page}: data-page={key!r} but the nav sends that key to {nav_pages[key]!r}")


def check_seo(route, parsed, seen_titles, errors):
    """Every indexable page carries a unique title, a description, a canonical, social tags, and valid JSON-LD."""
    page = f"{route}.html"
    title = normalize(parsed.title)
    if not title or len(title) > TITLE_MAX_CHARS:
        errors.append(f"{page}: title missing or longer than {TITLE_MAX_CHARS} characters: {title!r}")
    if title in seen_titles:
        errors.append(f"{page}: title duplicates {seen_titles[title]}: {title!r}")
    seen_titles[title] = page
    description = parsed.metas.get("description", "")
    if not DESCRIPTION_CHARS[0] <= len(description) <= DESCRIPTION_CHARS[1]:
        errors.append(f"{page}: description is {len(description)} characters; expected {DESCRIPTION_CHARS[0]}-{DESCRIPTION_CHARS[1]}")
    expected = CANONICAL_ORIGIN + ("/" if route == "index" else f"/{route}")
    if parsed.canonical != expected:
        errors.append(f"{page}: canonical is {parsed.canonical!r}, expected {expected!r}")
    if "noindex" in parsed.metas.get("robots", ""):
        errors.append(f"{page}: indexable page carries noindex")
    for tag in REQUIRED_SOCIAL_TAGS:
        if not parsed.metas.get(tag):
            errors.append(f"{page}: missing <meta> {tag}")
    if parsed.metas.get("og:url") != expected:
        errors.append(f"{page}: og:url is {parsed.metas.get('og:url')!r}, expected {expected!r}")
    for image_tag in ("og:image", "twitter:image"):
        image = parsed.metas.get(image_tag, "")
        if image.startswith(CANONICAL_ORIGIN) and resolve(image[len(CANONICAL_ORIGIN):]) is None:
            errors.append(f"{page}: {image_tag} {image!r} is not a file in the site")
    if not parsed.json_ld:
        errors.append(f"{page}: no JSON-LD structured data")
    for block in parsed.json_ld:
        try:
            data = json.loads(block)
        except json.JSONDecodeError as error:
            errors.append(f"{page}: JSON-LD does not parse: {error}")
            continue
        if data.get("@context") != "https://schema.org" or not data.get("@graph"):
            errors.append(f"{page}: JSON-LD needs @context https://schema.org and a @graph")


def check_sitemap_and_robots(errors):
    sitemap = SITE_DIR / "sitemap.xml"
    robots = SITE_DIR / "robots.txt"
    if not robots.is_file() or "Sitemap: " + CANONICAL_ORIGIN + "/sitemap.xml" not in robots.read_text(encoding="utf-8"):
        errors.append("robots.txt is missing or does not point at the sitemap")
    if not sitemap.is_file():
        errors.append("sitemap.xml is missing")
        return
    listed = re.findall(r"<loc>([^<]+)</loc>", sitemap.read_text(encoding="utf-8"))
    expected = [CANONICAL_ORIGIN + ("/" if route == "index" else f"/{route}") for route in INDEXABLE_ROUTES]
    for url in expected:
        if url not in listed:
            errors.append(f"sitemap.xml: missing {url}")
    for url in listed:
        if url not in expected:
            errors.append(f"sitemap.xml: lists {url}, which is not an indexable route")


def check_images(errors):
    for image in sorted(PAGE_IMAGE_DIR.rglob("*.webp")):
        size = image.stat().st_size
        if size > PAGE_IMAGE_BUDGET_BYTES:
            errors.append(f"{image.relative_to(SITE_DIR)}: {size // 1024} KB exceeds the {PAGE_IMAGE_BUDGET_BYTES // 1024} KB budget")


def main():
    errors = []
    pages = sorted(page for page in SITE_DIR.rglob("*.html") if ".git" not in page.parts)
    parsed_by_file = {page: parse(page) for page in pages}
    nav_source = NAV_SOURCE.read_text(encoding="utf-8")
    nav_pages = dict(re.findall(r'page: "([a-z-]+)", href: "(/[a-z-]*)"', nav_source))

    for page, parsed in parsed_by_file.items():
        name = str(page.relative_to(SITE_DIR))
        # Study pages render their sections with scripts, so only their paths are checked.
        check_links(name, parsed.links, parsed_by_file, errors, check_fragments=not name.startswith(STUDY_DIRS))
        if parsed.style_blocks:
            errors.append(f"{name}: {parsed.style_blocks} <style> block(s); the CSP allows only same-origin stylesheets")
        for style in parsed.inline_styles:
            errors.append(f"{name}: inline style blocked by the CSP: {style}")
        if not name.startswith(STUDY_DIRS):
            check_site_page(name, parsed, nav_pages, errors)

    check_links("site.js", site_js_links(), parsed_by_file, errors)

    seen_titles = {}
    for route in INDEXABLE_ROUTES:
        if (SITE_DIR / f"{route}.html").is_file():
            check_seo(route, parsed_by_file[SITE_DIR / f"{route}.html"], seen_titles, errors)
        else:
            errors.append(f"indexable route /{route} has no page")
    check_sitemap_and_robots(errors)
    check_images(errors)

    for error in errors:
        print(f"FAIL {error}")
    print(f"{len(pages)} pages, {sum(len(p.links) for p in parsed_by_file.values())} links, {len(INDEXABLE_ROUTES)} indexable routes checked: {'FAILED, ' + str(len(errors)) + ' problem(s)' if errors else 'all checks passed'}")
    return 1 if errors else 0


if __name__ == "__main__":
    sys.exit(main())
