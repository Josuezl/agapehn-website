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
assert_contains "public/admin/config.yml" "preview: false"
assert_contains ".github/workflows/deploy-production.yml" "cron: '17 * * * *'"
assert_contains ".github/workflows/deploy-production.yml" "environment: production"
assert_contains ".github/workflows/deploy-production.yml" "persist-credentials: false"
assert_contains ".github/workflows/deploy-production.yml" "actions/checkout@d23441a48e516b6c34aea4fa41551a30e30af803"
assert_contains ".github/workflows/deploy-production.yml" "actions/setup-node@249970729cb0ef3589644e2896645e5dc5ba9c38"
# Contract verifies a literal workflow expression.
# shellcheck disable=SC2016
assert_contains ".github/workflows/deploy-production.yml" 'release_id="${GITHUB_SHA}-${GITHUB_RUN_ID}-${GITHUB_RUN_ATTEMPT}"'
assert_contains ".github/workflows/deploy-production.yml" "StrictHostKeyChecking=yes"
assert_contains ".github/workflows/deploy-production.yml" 'bash tests/export-health.sh out'
assert_contains ".github/workflows/deploy-production.yml" 'bash tests/export-health-test.sh'
assert_contains ".github/workflows/deploy-production.yml" 'bash tests/admin-theme-test.sh'
assert_contains ".github/workflows/deploy-production.yml" 'bash tests/release-scripts-test.sh'
assert_contains ".github/workflows/deploy-production.yml" 'bash -s --'
assert_contains ".github/dependabot.yml" 'package-ecosystem: github-actions'
assert_contains "scripts/activate-release.sh" 'current.next'
assert_contains "scripts/activate-release.sh" 'current.rollback'
assert_contains "scripts/activate-release.sh" 'Health check failed'
# Contract verifies literal remote-script text.
# shellcheck disable=SC2016
assert_contains "scripts/activate-release.sh" '--resolve "$healthcheck_host:443:127.0.0.1"'
# Contract verifies literal remote-script text.
# shellcheck disable=SC2016
assert_contains "scripts/activate-release.sh" 'rm -rf -- "$candidate_real"'
assert_contains "scripts/install-release.sh" 'trap cleanup EXIT'

test -f "scripts/install-release.sh"
test -f "scripts/activate-release.sh"

printf 'Deployment contract passed.\n'
