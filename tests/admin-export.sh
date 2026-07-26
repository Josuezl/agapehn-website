#!/usr/bin/env bash
set -euo pipefail

project_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
export_root="${1:-$project_root/out}"
admin_root="$export_root/admin"

test -f "$admin_root/index.html"
test -f "$admin_root/config.yml"
test -f "$export_root/content/current-event.json"

grep -q 'decap-cms@3.12.2' "$admin_root/index.html"
grep -q 'repo: Josuezl/agapehn-website' "$admin_root/config.yml"
grep -q 'branch: main' "$admin_root/config.yml"
grep -q 'publish_mode: simple' "$admin_root/config.yml"
grep -q 'base_url: https://cms-auth.informaticahn.com' "$admin_root/config.yml"
grep -q 'file: content/current-event.json' "$admin_root/config.yml"
grep -q 'media_folder: public/Eventos' "$admin_root/config.yml"

printf 'Admin export tests passed.\n'
