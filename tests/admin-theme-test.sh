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

assert_contains "public/admin/index.html" 'href="/admin/admin-theme.css"'
assert_contains "public/admin/admin-theme.css" 'section[class*="StyledAuthenticationPage"]'
assert_contains "public/admin/admin-theme.css" 'Panel administrativo Ágape'
assert_contains "public/admin/admin-theme.css" 'button[class*="LoginButton"]'

printf 'Admin theme tests passed.\n'
