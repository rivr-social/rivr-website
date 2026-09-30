#!/usr/bin/env bash
# Deploy the site to the PeerMesh Core host.
#
#   scripts/deploy.sh live    -> https://rivr.social        (html/, nginx.conf, pmdl_rivr_landing)
#   scripts/deploy.sh draft   -> https://draft.rivr.social  (draft/, draft-nginx.conf, pmdl_rivr_landing_draft)
#
# Runs the static checks, stages exactly the files nginx serves, syncs them,
# keeps the host's deployment-only map-config.js, installs the nginx
# configuration in place (same inode, so the bind mount sees it), tests and
# reloads nginx, snapshots the release, and records the source revision.
set -euo pipefail

TARGET="${1:-}"
HOST="${RIVR_LANDING_HOST:-root@178.156.185.116}"
REMOTE_ROOT="/opt/docker-lab/sites/rivr-landing"
REPO_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
STAGE="$(mktemp -d)"
trap 'rm -rf "$STAGE"' EXIT

case "$TARGET" in
  live)  REMOTE_DIR="html";  NGINX_CONF="nginx.conf";       CONTAINER="pmdl_rivr_landing";       REV_FILE="DEPLOYED_SOURCE_REV" ;;
  draft) REMOTE_DIR="draft"; NGINX_CONF="draft-nginx.conf"; CONTAINER="pmdl_rivr_landing_draft"; REV_FILE="DRAFT_DEPLOYED_SOURCE_REV" ;;
  *) echo "usage: scripts/deploy.sh live|draft" >&2; exit 2 ;;
esac

cd "$REPO_ROOT"
python3 scripts/check_site.py

REVISION="$(git rev-parse --short HEAD)"
if [ -n "$(git status --porcelain)" ]; then REVISION="${REVISION}+uncommitted"; fi
STAMP="$(date -u +%Y%m%dT%H%M%SZ)"

# Exactly what nginx serves: pages, shared assets, the studies, the legacy img/ tree.
rsync -a --exclude .DS_Store \
  --include '/*.html' --include '/*.css' --include '/*.js' --include '/favicon.png' \
  --include '/robots.txt' --include '/sitemap.xml' --include '/*.txt' \
  --include '/assets/***' --include '/concepts/***' --include '/integrated/***' --include '/img/***' \
  --exclude '/map-config.js' --exclude '/map-config.example.js' --exclude '*' \
  ./ "$STAGE/"

ssh "$HOST" "set -e; cd $REMOTE_ROOT; mkdir -p backups releases; cp -a $REMOTE_DIR backups/pre-$STAMP-$REMOTE_DIR; cp -a $NGINX_CONF backups/pre-$STAMP-$NGINX_CONF"
rsync -az --delete --exclude map-config.js "$STAGE/" "$HOST:$REMOTE_ROOT/$REMOTE_DIR/"
scp -q "$NGINX_CONF" "$HOST:$REMOTE_ROOT/$NGINX_CONF.new"
ssh "$HOST" "set -e; cd $REMOTE_ROOT
  [ -f $REMOTE_DIR/map-config.js ] || cp html/map-config.js $REMOTE_DIR/map-config.js
  cat $NGINX_CONF.new > $NGINX_CONF; rm $NGINX_CONF.new
  docker exec $CONTAINER nginx -t
  docker exec $CONTAINER nginx -s reload
  echo '$REVISION $STAMP' > $REV_FILE
  cp -a $REMOTE_DIR releases/$REMOTE_DIR-$STAMP-$REVISION
  echo \"deployed $TARGET at $REVISION ($STAMP); backup backups/pre-$STAMP-$REMOTE_DIR\""
