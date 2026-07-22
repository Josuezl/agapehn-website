# Agape HN VPS Migration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Move `agapehn.org` from Vercel to the DigitalOcean VPS with an atomic static deployment, hourly YouTube content refreshes, HTTPS, health checks, and a reversible DNS cutover.

**Architecture:** GitHub Actions builds a Next.js static export and publishes only `out/` to `/srv/www/agapehn/releases/$GITHUB_SHA-$GITHUB_RUN_ID-$GITHUB_RUN_ATTEMPT`. Nginx serves the atomic `current` symlink, while a repository-specific `deploy-agape` account and SSH key isolate deployment access. An hourly scheduled workflow rebuilds the site so YouTube-derived content remains fresh without running Node.js on the 1 GB VPS.

**Tech Stack:** Next.js 14 App Router, TypeScript, GitHub Actions, OpenSSH, Nginx, Certbot, Ubuntu 24.04.

## Global Constraints

- Preserve the existing local modifications to `components/Logo.tsx` and `public/Galeria/fondo1.jpeg`.
- Treat the GitHub token formerly embedded in the `origin` URL as compromised; do not reuse it and revoke it in GitHub.
- Build on GitHub Actions or the local workstation, never on the VPS.
- Do not print private deployment keys or GitHub secrets.
- Do not change DNS until the site passes local, VPS HTTP, and asset health checks.
- Keep the Vercel project available until HTTPS and external checks pass after DNS propagation.
- Retain the five newest VPS releases and prune only validated older release directories after a successful content health check.
- The contact form behavior is unchanged by this migration; it currently acknowledges submission in the browser without sending data to a backend.
- Upgrade Next.js from vulnerable `14.2.3` to patched `14.2.35`; the static export must not expose a Next.js server runtime.

---

### Task 1: Establish the static-deployment contract

**Files:**
- Create: `tests/deployment-contract.sh`
- Modify: `next.config.js`
- Modify: `app/layout.tsx`
- Modify: `app/page.tsx`
- Modify: `lib/youtube.ts`
- Modify: `package.json`
- Modify: `package-lock.json`
- Create: `.eslintrc.json`

**Interfaces:**
- Consumes: existing App Router pages and build-time YouTube fetches
- Produces: a self-contained `out/` tree with canonical production metadata and no Vercel runtime dependency

- [ ] **Step 1: Write the failing deployment contract**

Create `tests/deployment-contract.sh` with assertions that require:

```bash
#!/usr/bin/env bash
set -euo pipefail

assert_contains() {
  local file="$1"
  local value="$2"
  rg --fixed-strings --quiet -- "$value" "$file" || {
    printf 'Expected %s to contain: %s\n' "$file" "$value" >&2
    exit 1
  }
}

assert_absent() {
  local file="$1"
  local value="$2"
  if rg --fixed-strings --quiet -- "$value" "$file"; then
    printf 'Expected %s not to contain: %s\n' "$file" "$value" >&2
    exit 1
  fi
}

assert_contains next.config.js "output: 'export'"
assert_contains next.config.js 'trailingSlash: true'
assert_contains next.config.js 'unoptimized: true'
assert_contains app/layout.tsx "metadataBase: new URL('https://agapehn.org')"
assert_absent app/layout.tsx '@vercel/analytics'
assert_absent app/page.tsx 'export const revalidate'
assert_absent lib/youtube.ts 'next: { revalidate: 3600 }'
assert_absent package.json '@vercel/analytics'
assert_contains package.json '"next": "14.2.35"'
assert_contains .eslintrc.json '"next/core-web-vitals"'

printf 'Deployment contract passed.\n'
```

- [ ] **Step 2: Run the contract and verify the expected failure**

Run:

```bash
bash tests/deployment-contract.sh
```

Expected: failure because `next.config.js` does not yet contain `output: 'export'`.

- [ ] **Step 3: Implement the minimal static-export configuration**

Set `output: 'export'`, `trailingSlash: true`, and `images.unoptimized: true` in `next.config.js`. Add `metadataBase: new URL('https://agapehn.org')` to the root metadata, remove the Vercel Analytics component/import and dependency, and remove ISR-only `revalidate` declarations/options. Upgrade Next.js to `14.2.35` and create `.eslintrc.json` extending `next/core-web-vitals` so CI linting is non-interactive. Keep YouTube fetches in server code so they run at build time; their refresh cadence is supplied by the scheduled workflow in Task 2.

- [ ] **Step 4: Run the contract and application checks**

Run:

```bash
set -euo pipefail
bash tests/deployment-contract.sh
npm run lint
npm run build
test -f out/index.html
test -f out/mensajes/index.html
test -f out/og-image.jpg
```

Expected: contract and lint pass, build completes, and all three exported files exist.

- [ ] **Step 5: Serve and smoke-test the export locally**

Run a temporary static server from `out/`, then check all public routes and representative assets:

```bash
npx --yes serve out --listen 4173
curl -fsS http://127.0.0.1:4173/ >/dev/null
curl -fsS http://127.0.0.1:4173/nosotros/ >/dev/null
curl -fsS http://127.0.0.1:4173/visita/ >/dev/null
curl -fsS http://127.0.0.1:4173/mensajes/ >/dev/null
curl -fsS http://127.0.0.1:4173/iglesias/ >/dev/null
curl -fsS http://127.0.0.1:4173/contacto/ >/dev/null
curl -fsS http://127.0.0.1:4173/og-image.jpg >/dev/null
```

Expected: every request returns HTTP 200.

### Task 2: Add the atomic GitHub Actions deployment

**Files:**
- Create: `.github/workflows/deploy-production.yml`
- Create: `.github/dependabot.yml`
- Create: `docs/deployment-vps.md`
- Create: `scripts/install-release.sh`
- Create: `scripts/activate-release.sh`
- Create: `tests/export-health.sh`
- Create: `tests/export-health-test.sh`
- Create: `tests/release-scripts-test.sh`
- Modify: `tests/deployment-contract.sh`

**Interfaces:**
- Consumes GitHub Environment secrets: `VPS_HOST`, `VPS_PORT`, `VPS_USER`, `VPS_SSH_KEY`, `VPS_KNOWN_HOSTS`, `DEPLOY_PATH`
- Produces: manual, push-to-main, and hourly deployments with atomic activation and rollback

- [ ] **Step 1: Extend the failing contract for workflow safeguards**

Require the workflow to contain `environment: production`, `cron: '17 * * * *'`, `persist-credentials: false`, `StrictHostKeyChecking=yes`, `GITHUB_SHA`, `current.next`, and the rollback health-check branch. Run the contract and verify that it fails because the workflow is absent.

- [ ] **Step 2: Create `.github/workflows/deploy-production.yml`**

The workflow must:

1. Trigger on pushes to `main`, `workflow_dispatch`, and `schedule` at minute 17 of every hour.
2. Use one non-cancelling `production` concurrency group.
3. Check out without persisting GitHub credentials.
4. Run `npm ci`, the deployment contract, script behavior tests, lint, build, and exported-route/YouTube-content checks.
5. Store the SSH key and verified host-key line in runner-temporary files with mode `600`.
6. Set `release_id="$GITHUB_SHA-$GITHUB_RUN_ID-$GITHUB_RUN_ATTEMPT"` so scheduled rebuilds of the same commit publish refreshed YouTube content.
7. Upload a compressed archive to `/srv/www/agapehn/shared/.incoming-$release_id.tar.gz`; `scripts/install-release.sh` checks disk capacity, cleans failed or stale incoming state using exact release-name and direct-parent validation, and renames the extracted directory only after validation.
8. Atomically switch `current`, follow HTTP/HTTPS locally with both ports resolved to `127.0.0.1`, validate the production title, and restore the previous symlink if content validation fails.
9. After successful validation, keep the newest five releases and delete only older directories proven to be direct children of `/srv/www/agapehn/releases` and not the active target.
10. Pin third-party Actions to full commit SHAs and let Dependabot propose reviewed updates.

- [ ] **Step 3: Document operations in `docs/deployment-vps.md`**

Document the production URL, GitHub Environment secrets, `/srv/www/agapehn` layout, hourly YouTube refresh behavior, five-release retention, local and remote content health checks, rollback command, DNS/HTTPS cutover, and the fact that the current contact form has no delivery backend.

- [ ] **Step 4: Validate YAML and the complete contract**

Run:

```bash
ruby -e "require 'yaml'; YAML.load_file('.github/workflows/deploy-production.yml')"
bash tests/deployment-contract.sh
```

Expected: YAML parses and the contract prints `Deployment contract passed.`

- [ ] **Step 5: Commit only migration-owned files**

Run:

```bash
git add next.config.js app/layout.tsx app/page.tsx lib/youtube.ts package.json package-lock.json .eslintrc.json tests/deployment-contract.sh .github/workflows/deploy-production.yml docs/deployment-vps.md docs/superpowers/plans/2026-07-21-agapehn-vps-migration.md
git diff --cached --check
git commit -m "ci(deploy): add atomic VPS deployment"
```

Expected: the existing `components/Logo.tsx` and `public/Galeria/fondo1.jpeg` changes are not staged by this command.

### Task 3: Prepare an isolated VPS deployment boundary

**Files on VPS:**
- Create: `/home/deploy-agape/.ssh/authorized_keys`
- Create: `/srv/www/agapehn/releases/`
- Create: `/srv/www/agapehn/shared/`

**Interfaces:**
- Consumes: a new repository-specific Ed25519 public key
- Produces: non-sudo `deploy-agape` access limited by Unix ownership to the Agape site tree

- [ ] **Step 1: Re-audit existing targets before mutation**

Run over the trusted root connection:

```bash
id deploy-agape || true
find /srv/www/agapehn -maxdepth 2 -printf '%M %u:%g %p -> %l\n' 2>/dev/null || true
test -e /etc/nginx/sites-available/agapehn.org && sed -n '1,240p' /etc/nginx/sites-available/agapehn.org || true
```

Expected: establish whether the account, directory, or Nginx file already exists; do not overwrite an unexpected target.

- [ ] **Step 2: Generate a repository-specific key in a temporary directory**

Run locally:

```bash
migration_key_dir="$(mktemp -d)"
ssh-keygen -t ed25519 -a 100 -C github-actions-agapehn -f "$migration_key_dir/deploy_agape" -N ''
```

Keep the private key only long enough to upload it to the GitHub `production` Environment.

- [ ] **Step 3: Create the account and directories**

Run on the VPS:

```bash
useradd --create-home --shell /bin/bash deploy-agape
gpasswd --delete deploy-agape sudo 2>/dev/null || true
install -d -m 700 -o deploy-agape -g deploy-agape /home/deploy-agape/.ssh
install -d -m 2750 -o deploy-agape -g www-data /srv/www/agapehn
install -d -m 2750 -o deploy-agape -g www-data /srv/www/agapehn/releases
install -d -m 2750 -o deploy-agape -g www-data /srv/www/agapehn/shared
```

Append the new public key as exactly one line to `authorized_keys`, then set ownership `deploy-agape:deploy-agape` and mode `600`.

- [ ] **Step 4: Verify isolation**

Run:

```bash
id deploy-agape
sudo -l -U deploy-agape
sudo -u deploy-agape test -w /srv/www/agapehn/releases
sudo -u deploy-agape test ! -w /srv/www/mediheart/releases
sudo -u deploy-agape test ! -w /srv/www/dr-manuel-espinoza/releases
sudo -u deploy-agape test ! -w /etc/nginx
```

Expected: `deploy-agape` can write only its site release tree, has no sudo commands, and cannot change other sites or Nginx.

### Task 4: Publish the initial release and Nginx virtual host

**Files on VPS:**
- Create: `/srv/www/agapehn/releases/bootstrap-$(git rev-parse HEAD)/`
- Create symlink: `/srv/www/agapehn/current`
- Create: `/etc/nginx/sites-available/agapehn.org`
- Create symlink: `/etc/nginx/sites-enabled/agapehn.org`

**Interfaces:**
- Consumes: locally verified `out/` and the repository-specific SSH key
- Produces: an HTTP virtual host reachable by IP with `Host: agapehn.org`

- [ ] **Step 1: Transfer a bootstrap release without changing DNS**

Stream the local `out/` tree through the repository key into an incoming directory, rename it to `bootstrap-$(git rev-parse HEAD)`, and atomically set `/srv/www/agapehn/current`.

- [ ] **Step 2: Create the Nginx server block**

Use:

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name agapehn.org www.agapehn.org;

    root /srv/www/agapehn/current;
    index index.html;

    access_log /var/log/nginx/agapehn.org.access.log;
    error_log /var/log/nginx/agapehn.org.error.log;

    location / {
        try_files $uri $uri.html $uri/ =404;
    }

    location ~* \.(?:css|js|jpg|jpeg|png|gif|svg|webp|ico|woff2?|mp4)$ {
        expires 7d;
        add_header Cache-Control "public, immutable";
        try_files $uri =404;
    }
}
```

- [ ] **Step 3: Validate and reload safely**

Run:

```bash
nginx -t
systemctl reload nginx
curl -fsS -H 'Host: agapehn.org' http://127.0.0.1/ >/dev/null
curl -fsS -H 'Host: agapehn.org' http://127.0.0.1/mensajes/ >/dev/null
curl -fsS -H 'Host: agapehn.org' http://127.0.0.1/og-image.jpg >/dev/null
```

Expected: valid Nginx configuration and HTTP 200 for the homepage, messages page, and OG image.

- [ ] **Step 4: Verify host resources and unrelated sites**

Run checks for `systemctl --failed`, Nginx status, ports, memory, swap, disk, plus HTTP host-header requests for `medihearthn.com` and `drmanuelespinoza.com`.

Expected: no new failed service, ports 22/80/443 remain available, healthy resources, and both existing sites continue returning HTTP 200.

### Task 5: Configure GitHub and prove automated deployment

**External configuration:**
- GitHub repository: `Josuezl/agapehn-website`
- GitHub Environment: `production`
- Secrets: `VPS_HOST`, `VPS_PORT`, `VPS_USER`, `VPS_SSH_KEY`, `VPS_KNOWN_HOSTS`, `DEPLOY_PATH`

**Interfaces:**
- Consumes: verified VPS host key and the temporary repository-specific private key
- Produces: a successful workflow-created release and atomic activation

- [ ] **Step 1: Revoke the exposed personal access token**

In GitHub settings, revoke the credential that had been embedded in the repository's old `origin` URL. Confirm that `git remote -v` shows only `https://github.com/Josuezl/agapehn-website.git`.

- [ ] **Step 2: Verify the VPS host key through the trusted root session**

Compare `ssh-keygen -lf /etc/ssh/ssh_host_ed25519_key.pub` on the VPS with a fresh `ssh-keyscan -t ed25519 45.55.90.164` result. Store the matching public host-key line as `VPS_KNOWN_HOSTS`.

- [ ] **Step 3: Create the environment and secrets**

Use GitHub CLI after authenticating the `Josuezl` account:

```bash
gh api --method PUT repos/Josuezl/agapehn-website/environments/production
gh secret set VPS_HOST --env production --body '45.55.90.164' --repo Josuezl/agapehn-website
gh secret set VPS_PORT --env production --body '22' --repo Josuezl/agapehn-website
gh secret set VPS_USER --env production --body 'deploy-agape' --repo Josuezl/agapehn-website
gh secret set VPS_SSH_KEY --env production --repo Josuezl/agapehn-website < "$migration_key_dir/deploy_agape"
gh secret set VPS_KNOWN_HOSTS --env production --repo Josuezl/agapehn-website < "$migration_key_dir/known_hosts"
gh secret set DEPLOY_PATH --env production --body '/srv/www/agapehn' --repo Josuezl/agapehn-website
```

- [ ] **Step 4: Remove the temporary private key after upload**

Delete only the validated `migration_key_dir` temporary directory after verifying the secrets exist by name with `gh secret list --env production --repo Josuezl/agapehn-website`. The private values must never be displayed.

- [ ] **Step 5: Push and verify the workflow**

Push the migration commit to `main`, watch the `Deploy production` run, and verify that `/srv/www/agapehn/current` points to a release beginning with the pushed commit SHA. Confirm the workflow health check succeeds and the current Vercel-served public site remains unchanged.

### Task 6: Cut DNS over and enable HTTPS

**External configuration:**
- Apex: `agapehn.org`
- WWW: `www.agapehn.org`
- VPS IPv4: `45.55.90.164`

**Interfaces:**
- Consumes: proven HTTP deployment and access to the authoritative DNS provider
- Produces: public HTTPS traffic served by the VPS with Vercel retained as temporary rollback

- [ ] **Step 1: Record rollback DNS and lower TTL**

Record the current apex and WWW values before mutation. Lower the applicable TTL to 300 seconds and wait one previous-TTL interval if the provider requires it.

- [ ] **Step 2: Change only web records**

Set the apex A record to `45.55.90.164` and set WWW to either an A record at `45.55.90.164` or a CNAME to `agapehn.org`. Preserve MX, TXT, CAA, and all unrelated records.

- [ ] **Step 3: Verify DNS convergence over HTTP**

Check authoritative and public resolvers until both names return `45.55.90.164`, then verify HTTP by apex and WWW. If site checks fail, restore the recorded Vercel values.

- [ ] **Step 4: Issue the certificate and redirect to HTTPS**

Run on the VPS:

```bash
certbot --nginx -d agapehn.org -d www.agapehn.org
nginx -t
systemctl reload nginx
certbot renew --dry-run
```

Expected: a valid certificate for both names, HTTP redirects to HTTPS, and the renewal dry run succeeds.

- [ ] **Step 5: Run end-to-end verification**

Verify all six routes, the OG image, JavaScript/CSS assets, a representative local image/video, and a YouTube thumbnail. Confirm `server: nginx`, valid TLS, no mixed content, no new browser console errors, and HTTP 200 for both unrelated VPS sites.

- [ ] **Step 6: Observe before retiring Vercel**

Keep Vercel intact for at least one successful scheduled hourly deployment and one external HTTPS verification window. Remove the old Vercel domain binding only after the rollback window is explicitly closed.
