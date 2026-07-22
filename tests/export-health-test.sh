#!/usr/bin/env bash
set -euo pipefail

project_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
fixture_root="$(mktemp -d)"

mkdir -p \
  "$fixture_root/nosotros" \
  "$fixture_root/visita" \
  "$fixture_root/mensajes" \
  "$fixture_root/iglesias" \
  "$fixture_root/contacto"

for file in \
  index.html \
  nosotros/index.html \
  visita/index.html \
  mensajes/index.html \
  iglesias/index.html \
  contacto/index.html \
  og-image.jpg; do
  : > "$fixture_root/$file"
done

if bash "$project_root/tests/export-health.sh" "$fixture_root" >/dev/null 2>&1; then
  printf 'Expected export health to reject missing YouTube content.\n' >&2
  exit 1
fi

{
  printf '<title>Ministerio Internacional Ágape | En esta casa, cabemos todos</title>\n'
  for index in {1..12}; do
    printf '<a href="https://www.youtube.com/watch?v=video%06d">Video</a>\n' "$index"
  done
} > "$fixture_root/index.html"

bash "$project_root/tests/export-health.sh" "$fixture_root"

printf 'Export health tests passed.\n'
