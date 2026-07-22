#!/usr/bin/env bash
set -euo pipefail

project_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
fixture_root="$(mktemp -d)"
fake_bin="$fixture_root/bin"
mkdir -p "$fake_bin"

cat > "$fake_bin/curl" <<'FAKE_CURL'
#!/usr/bin/env bash
set -euo pipefail

arguments=" $* "
follow_redirects=0
for argument in "$@"; do
  if [[ "$argument" == -*L* ]]; then
    follow_redirects=1
  fi
done
test "$follow_redirects" = "1"
[[ "$arguments" == *" --resolve agapehn.org:80:127.0.0.1 "* ]]
[[ "$arguments" == *" --resolve agapehn.org:443:127.0.0.1 "* ]]

if [[ "${FAKE_CURL_FAIL:-0}" == "1" ]]; then
  exit 22
fi

printf '<title>Ministerio Internacional Ágape | En esta casa, cabemos todos</title>\n'
for _ in {1..20000}; do
  printf 'homepage-content-padding\n'
done
FAKE_CURL
chmod +x "$fake_bin/curl"

install_root="$fixture_root/install"
mkdir -p "$install_root/releases" "$install_root/shared" "$fixture_root/payload"
printf 'healthy\n' > "$fixture_root/payload/index.html"

release_a="aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa-100-1"
archive_a="$install_root/shared/.incoming-$release_a.tar.gz"
stale_release="dddddddddddddddddddddddddddddddddddddddd-90-1"
stale_archive="$install_root/shared/.incoming-$stale_release.tar.gz"
stale_directory="$install_root/releases/.incoming-$stale_release"
preserved_archive="$install_root/shared/.incoming-keep-me.tar.gz"
preserved_directory="$install_root/releases/.incoming-keep-me"
printf 'interrupted upload\n' > "$stale_archive"
mkdir "$stale_directory"
printf 'partial extraction\n' > "$stale_directory/partial.txt"
printf 'unrelated file\n' > "$preserved_archive"
mkdir "$preserved_directory"
tar -C "$fixture_root/payload" -czf "$archive_a" .
bash "$project_root/scripts/install-release.sh" "$install_root" "$release_a"
test -f "$install_root/releases/$release_a/index.html"
test ! -e "$archive_a"
test ! -e "$install_root/releases/.incoming-$release_a"
test ! -e "$stale_archive"
test ! -e "$stale_directory"
test -f "$preserved_archive"
test -d "$preserved_directory"

release_b="bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb-101-1"
archive_b="$install_root/shared/.incoming-$release_b.tar.gz"
printf 'not a gzip archive\n' > "$archive_b"
if bash "$project_root/scripts/install-release.sh" "$install_root" "$release_b" >/dev/null 2>&1; then
  printf 'Expected invalid archive installation to fail.\n' >&2
  exit 1
fi
test ! -e "$archive_b"
test ! -e "$install_root/releases/.incoming-$release_b"
test ! -e "$install_root/releases/$release_b"

activate_root="$fixture_root/activate"
mkdir -p "$activate_root/releases" "$activate_root/shared"
for index in {1..7}; do
  mkdir "$activate_root/releases/old-$index"
  touch -t "2026010${index}0000" "$activate_root/releases/old-$index"
done
release_c="cccccccccccccccccccccccccccccccccccccccc-102-1"
mkdir "$activate_root/releases/$release_c"
printf 'healthy\n' > "$activate_root/releases/$release_c/index.html"
ln -s "releases/old-7" "$activate_root/current"

PATH="$fake_bin:$PATH" bash "$project_root/scripts/activate-release.sh" \
  "$activate_root" "$release_c" "agapehn.org"
test "$(readlink "$activate_root/current")" = "releases/$release_c"
test "$(find "$activate_root/releases" -mindepth 1 -maxdepth 1 -type d | wc -l | tr -d ' ')" = "5"

rollback_root="$fixture_root/rollback"
mkdir -p "$rollback_root/releases/previous" "$rollback_root/releases/$release_c" "$rollback_root/shared"
printf 'healthy\n' > "$rollback_root/releases/$release_c/index.html"
ln -s "releases/previous" "$rollback_root/current"

if FAKE_CURL_FAIL=1 PATH="$fake_bin:$PATH" bash \
  "$project_root/scripts/activate-release.sh" \
  "$rollback_root" "$release_c" "agapehn.org" >/dev/null 2>&1; then
  printf 'Expected failed health check to reject activation.\n' >&2
  exit 1
fi
test "$(readlink "$rollback_root/current")" = "releases/previous"

printf 'Release script tests passed.\n'
