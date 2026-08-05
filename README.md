# Rivr Website

Source of truth for the live public website at https://rivr.social.

This is the website, not the Global application. The website mirrors the public
information architecture and content of the former Squarespace site while using
the visual system of the live Global app: Inter typography, crystalline
light/dark backgrounds, translucent glass surfaces, and the shared RIVR palette.

## Routes

- `/` — overview and complete home-page narrative
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

Legacy Squarespace paths are retained as redirects in `nginx.conf`.
The page-by-page reference audit is recorded in `SQUARESPACE-PARITY.md`.

## Structure

- Page HTML files live at the repository root.
- `style.css` and `site.js` are shared by every page.
- `img/` contains self-hosted source imagery; production does not depend on
  Squarespace image URLs.
- `map-config.example.js` documents the deployment-only Mapbox embed setting;
  copy it to the ignored `map-config.js` and supply the production embed URL.
- `docker-compose.yml` and `nginx.conf` describe the production runtime.

## Local preview

Run `python3 -m http.server 8080` and open `http://localhost:8080`. For exact
extensionless-route behavior, run the Docker Compose service.

### Modern marketing draft

`draft/` is an isolated, single-page public marketing concept for
`https://draft.rivr.social`. It uses the three-altitude narrative frame—Rivr in
daily life, in community culture, and in the wider world—while keeping the
language direct enough for a general public audience.

Run `python3 -m http.server 8081 --directory draft` and open
`http://localhost:8081`. `draft-nginx.conf` and the `rivr-landing-draft`
Compose service define its independent production runtime; changes to that
service do not replace the main `rivr.social` files or container.

## Production

PeerMesh Core serves this repository through the `pmdl_rivr_landing` nginx
container behind Traefik. Deployment is an exact-file sync to the configured
landing-site directory followed by a container recreation only when nginx or
Compose configuration changes.
