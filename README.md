# Rivr Website

Source of truth for the public website at https://rivr.social, and for its
staging copy at https://draft.rivr.social.

This is the website, not the Rivr application. It carries the public
information architecture of the former Squarespace site with the product-led
marketing page as the home, on one visual system: the dark crystalline field,
the liquid-glass surfaces the Rivr app uses for its panels, Inter typography,
and the shared header and footer that `site.js` renders into every page's
`[data-site-header]` and `[data-site-footer]` placeholders.

## Routes

- `/` — products, how it flows, Rivr Pay, comparison, plus the full home
  narrative (mission, in-app features, memberships, map, vision, team, FAQ)
- `/features` — product features and roadmap
- `/membership` — membership types and FlowPass
- `/about` — mission, history, and expansion
- `/team` — team and affiliates
- `/vision` — economic and cultural vision
- `/blog` — current coming-soon blog surface
- `/contact` — contact form
- `/bioregion-map` — interactive map
- `/getstarted` — current app entry points
- `/privacy` and `/terms` — legal pages
- `/concepts/` and `/integrated/` — design studies with their own chrome, kept
  out of search

Legacy Squarespace paths are retained as redirects in `nginx.conf`. The
page-by-page reference audit is recorded in `SQUARESPACE-PARITY.md`.

## Structure

- Page HTML files live at the repository root.
- `style.css` — tokens, the glass system, header, buttons, and the home
  narrative sections; `pages.css` — the components every other page is built
  from (`.page-hero`, `.page-section`, `.glass-card`, `.media-card`,
  `.cta-band`, forms, legal).
- `site.js` — shared chrome, menu, scroll state, mail forms, map embed;
  `home.js` — the home page's product deck, dialog, comparison, and flow.
- `assets/` — shared imagery and the social card; `assets/pages/<dir>/<name>.webp`
  is page photography generated from `img/<dir>/<name>.*` by
  `python3 scripts/build_site_images.py` (Pillow; long edge 1800px, WebP
  quality 80). `img/` keeps the full-resolution sources.
- `map-config.example.js` documents the deployment-only Mapbox embed setting;
  the host supplies the ignored `map-config.js`.
- `docker-compose.yml`, `nginx.conf`, and `draft-nginx.conf` describe the two
  production runtimes. `draft-nginx.conf` adds `X-Robots-Tag: noindex` so the
  draft host never competes with rivr.social.

## Search

Every indexable page carries a unique title and description, a canonical URL
on `https://rivr.social`, Open Graph and Twitter tags, and JSON-LD
(Organization, WebSite, SoftwareApplication and FAQPage on the home page;
WebPage and BreadcrumbList elsewhere). `robots.txt` and `sitemap.xml` list the
twelve public routes.

## Local preview

Run `python3 -m http.server 8080` and open `http://localhost:8080`. For exact
extensionless-route behavior, redirects, the 404 page, and the CSP (which
allows only same-origin stylesheets, so no inline styles), run the Docker
Compose service.

## Checks

`python3 scripts/check_site.py` runs before every deploy: every link and
fragment resolves, no inline styles, shared chrome on every page, unique titles
and descriptions, rivr.social canonicals, social tags and JSON-LD on every
indexable page, a sitemap that lists exactly the indexable routes, and page
photography inside its size budget.

## Production

PeerMesh Core serves this repository through the `pmdl_rivr_landing` nginx
container behind Traefik, and the same files through `pmdl_rivr_landing_draft`
for the draft host. `scripts/deploy.sh live` and `scripts/deploy.sh draft` run
the checks, sync exactly the served files, install the nginx configuration in
place, test and reload nginx, snapshot the release, and record the deployed
revision on the host.
