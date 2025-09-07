#!/data/data/com.termux/files/usr/bin/bash
set -e

echo "=================================="
echo "   YOUNITE Phase 1 Diagnostics"
echo "=================================="

check_command() {
  if command -v "$1" >/dev/null 2>&1; then
    echo "✅ $1 installed: $($1 --version 2>/dev/null || echo ok)"
  else
    echo "❌ $1 not found. Please install it."
  fi
}

# 1. Node & NPM
echo -e "\n[1] Checking Node & NPM..."
check_command node
check_command npm

# 2. Expo CLI (local via npx) & EAS CLI
echo -e "\n[2] Checking Expo & EAS..."
npx expo --version && echo "✅ Expo CLI available" || echo "❌ Expo CLI missing"
check_command eas

# 3. Git identity
echo -e "\n[3] Checking Git identity..."
NAME=$(git config --get user.name || true)
EMAIL=$(git config --get user.email || true)
if [ -n "$NAME" ] && [ -n "$EMAIL" ]; then
  echo "✅ Git identity set: $NAME <$EMAIL>"
else
  echo "❌ Git identity not set. Use:"
  echo "   git config --global user.name \"adzry\""
  echo "   git config --global user.email \"adzrysapie@gmail.com\""
fi

# 4. Git remote
echo -e "\n[4] Checking Git remote..."
REMOTE=$(git remote get-url origin 2>/dev/null || true)
if [[ "$REMOTE" == *"adzry/younite.git"* ]]; then
  echo "✅ Git remote set correctly: $REMOTE"
else
  echo "❌ Git remote not set or incorrect. Use:"
  echo "   git remote add origin https://github.com/adzry/younite.git"
fi

# 5. PAT check (dry-run)
echo -e "\n[5] Checking GitHub PAT access (dry-run)..."
if [ -n "$GITHUB_PAT" ]; then
  if git ls-remote https://adzry:$GITHUB_PAT@github.com/adzry/younite.git >/dev/null 2>&1; then
    echo "✅ PAT works for GitHub repo access"
  else
    echo "❌ PAT invalid or missing scopes. Ensure 'repo' access."
  fi
else
  echo "❌ GITHUB_PAT not set. Export it first: export GITHUB_PAT=yourtoken"
fi

# 6. Expo doctor
echo -e "\n[6] Running Expo Doctor..."
if npx expo doctor; then
  echo "✅ Expo project healthy"
else
  echo "❌ Expo doctor found issues"
fi

# 7. Run Jest tests
echo -e "\n[7] Running test suite..."
if npm test; then
  echo "✅ All tests passed"
else
  echo "❌ Tests failed"
fi

# 8. Dry-run EAS build
echo -e "\n[8] Dry-run EAS Android build (preview profile)..."
if eas build --platform android --profile preview --non-interactive; then
  echo "✅ Dry-run EAS build succeeded"
else
  echo "❌ EAS build failed. Check logs."
fi

echo -e "\n=================================="
echo " Diagnostics completed"
echo "=================================="
