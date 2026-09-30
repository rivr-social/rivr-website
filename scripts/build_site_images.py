#!/usr/bin/env python3
"""Build the optimized page photography the site serves.

Every `/assets/pages/<dir>/<name>.webp` referenced by a page is derived from
the full-resolution source at `img/<dir>/<name>.*`. Run from anywhere:

    python3 scripts/build_site_images.py

Requires Pillow. Existing outputs are rebuilt only when the source is newer.
"""
import pathlib
import re
import sys

from PIL import Image

REPO_ROOT = pathlib.Path(__file__).resolve().parent.parent
SITE_DIR = REPO_ROOT
SOURCE_DIR = REPO_ROOT / "img"
OUTPUT_DIR = SITE_DIR / "assets" / "pages"
PAGE_IMAGE_PATTERN = re.compile(r"/assets/pages/([a-z0-9-]+)/([a-z0-9-]+)\.webp")
MAX_LONG_EDGE_PX = 1800
WEBP_QUALITY = 80
WEBP_METHOD = 6


class MissingSourceError(Exception):
    """A page references a photograph that has no source under img/."""


def referenced_images(site_dir):
    """Return the sorted (dir, name) pairs every top-level page references."""
    found = set()
    for page in sorted(site_dir.glob("*.html")):
        found.update(PAGE_IMAGE_PATTERN.findall(page.read_text(encoding="utf-8")))
    return sorted(found)


def source_for(directory, name):
    """Locate the single source file for one referenced photograph."""
    matches = sorted((SOURCE_DIR / directory).glob(f"{name}.*"))
    if not matches:
        raise MissingSourceError(f"no source for /assets/pages/{directory}/{name}.webp: expected {SOURCE_DIR / directory / name}.*")
    return matches[0]


def build_image(source, output):
    """Write one resized WebP. Returns False when the output is already current."""
    if output.exists() and output.stat().st_mtime >= source.stat().st_mtime:
        return False
    output.parent.mkdir(parents=True, exist_ok=True)
    with Image.open(source) as image:
        converted = image.convert("RGB")
        converted.thumbnail((MAX_LONG_EDGE_PX, MAX_LONG_EDGE_PX), Image.LANCZOS)
        converted.save(output, "WEBP", quality=WEBP_QUALITY, method=WEBP_METHOD)
    return True


def main():
    built = 0
    images = referenced_images(SITE_DIR)
    for directory, name in images:
        try:
            source = source_for(directory, name)
        except MissingSourceError as error:
            print(f"error: {error}", file=sys.stderr)
            return 1
        output = OUTPUT_DIR / directory / f"{name}.webp"
        if build_image(source, output):
            built += 1
            print(f"built {output.relative_to(REPO_ROOT)} ({output.stat().st_size // 1024} KB) from {source.relative_to(REPO_ROOT)}")
    print(f"{len(images)} page images referenced, {built} built, {len(images) - built} already current")
    return 0


if __name__ == "__main__":
    sys.exit(main())
