#!/usr/bin/env bash
set -euo pipefail

assert_contains() {
  local file="$1"
  local value="$2"

  if ! rg --fixed-strings --quiet -- "$value" "$file"; then
    printf 'Expected %s to contain: %s\n' "$file" "$value" >&2
    exit 1
  fi
}

assert_absent() {
  local file="$1"
  local value="$2"

  if rg --fixed-strings --quiet -- "$value" "$file"; then
    printf 'Expected %s not to contain: %s\n' "$file" "$value" >&2
    exit 1
  fi
}

assert_contains "next.config.js" "output: 'export'"
assert_contains "next.config.js" "trailingSlash: true"
assert_contains "next.config.js" "unoptimized: true"
assert_contains "app/layout.tsx" "metadataBase: new URL('https://agapehn.org')"
assert_absent "app/layout.tsx" "@vercel/analytics"
assert_absent "app/page.tsx" "export const revalidate"
assert_absent "lib/youtube.ts" "next: { revalidate: 3600 }"
assert_absent "package.json" "@vercel/analytics"
assert_contains "package.json" '"next": "14.2.35"'
assert_contains ".eslintrc.json" '"next/core-web-vitals"'
assert_contains ".github/workflows/deploy-production.yml" "cron: '17 * * * *'"
assert_contains ".github/workflows/deploy-production.yml" "environment: production"
assert_contains ".github/workflows/deploy-production.yml" "persist-credentials: false"
assert_contains ".github/workflows/deploy-production.yml" 'release_id="${GITHUB_SHA}-${GITHUB_RUN_ID}-${GITHUB_RUN_ATTEMPT}"'
assert_contains ".github/workflows/deploy-production.yml" "StrictHostKeyChecking=yes"
assert_contains ".github/workflows/deploy-production.yml" 'current.next'
assert_contains ".github/workflows/deploy-production.yml" 'current.rollback'
assert_contains ".github/workflows/deploy-production.yml" 'Health check failed'

printf 'Deployment contract passed.\n'
