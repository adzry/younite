#!/usr/bin/env bash
set -euo pipefail
f="assets/fallback.png"
if [ ! -f "$f" ]; then
  echo "::error title=Assets::fallback.png missing"; exit 1
fi
# Verify PNG header (magic number 89 50 4E 47 0D 0A 1A 0A)
head -c 8 "$f" | od -An -t x1 | tr -d ' \n' | grep -qi '^89504e470d0a1a0a$' || {
  echo "::error title=Assets::fallback.png not a valid PNG"; exit 1;
}
echo "::notice title=Assets::fallback.png validated OK"
