#!/usr/bin/env bash
# Submit the sitemap's URLs to IndexNow (Bing, Yandex, Naver, Seznam, Yep share it).
# Run after `scripts/deploy.sh live`.
set -euo pipefail
HOST="rivr.social"
KEY="9f1ae9a111011ba9801288d33b9a84c9"
REPO_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
URLS="$(grep -o '<loc>[^<]*</loc>' "$REPO_ROOT/sitemap.xml" | sed 's/<[^>]*>//g' | python3 -c 'import json,sys; print(json.dumps([l.strip() for l in sys.stdin if l.strip()]))')"
curl -sS -o /dev/null -w "IndexNow: HTTP %{http_code}\n" -X POST "https://api.indexnow.org/indexnow" \
  -H "Content-Type: application/json; charset=utf-8" \
  -d "{\"host\":\"$HOST\",\"key\":\"$KEY\",\"keyLocation\":\"https://$HOST/$KEY.txt\",\"urlList\":$URLS}"
