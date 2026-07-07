# rivr-website

The rivr.social landing site — a static page in the style of classic Apple
print advertisements (Garamond, paper white, six-band rainbow), carrying the
original Rivr site's copy and structure.

## Contents

- `index.html` — the landing page (self-contained: inline CSS, Google Fonts)
- `terms.html`, `privacy.html` — required for Stripe business verification;
  keep the footer links to them intact
- `docker-compose.yml` — how it's served in production

## Deploy

Production serves this via nginx behind Traefik on the RIVR main host:

```sh
rsync -a index.html terms.html privacy.html \
  root@178.156.185.116:/opt/docker-lab/sites/rivr-landing/html/
```

No build step, no restart needed — nginx serves the files directly.
DNS: `rivr.social` + `www` are DNS-only A records to the main host;
TLS is Let's Encrypt via Traefik (`certresolver=letsencrypt`).

## History

Previous incarnations: a Squarespace site (design reference for the current
copy/structure) and a Next.js/Vercel build (in git history before this
commit).
