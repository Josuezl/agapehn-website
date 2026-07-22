#!/usr/bin/env bash
set -euo pipefail

site_root="${1:-out}"

required_files=(
  index.html
  nosotros/index.html
  visita/index.html
  mensajes/index.html
  iglesias/index.html
  contacto/index.html
  og-image.jpg
)

for file in "${required_files[@]}"; do
  if [[ ! -f "$site_root/$file" ]]; then
    printf 'Missing exported file: %s\n' "$site_root/$file" >&2
    exit 1
  fi
done

if ! grep -Fq '<title>Ministerio Internacional Ágape' "$site_root/index.html"; then
  printf 'Exported homepage does not contain the production title.\n' >&2
  exit 1
fi

youtube_count="$((
  $(
    (grep -oF 'https://www.youtube.com/watch?v=' "$site_root/index.html" || true) |
      wc -l |
      tr -d ' '
  )
))"

if (( youtube_count < 12 )); then
  printf 'Expected at least 12 YouTube videos in the homepage export; found %d.\n' \
    "$youtube_count" >&2
  exit 1
fi

printf 'Export health passed with %d YouTube video links.\n' "$youtube_count"
