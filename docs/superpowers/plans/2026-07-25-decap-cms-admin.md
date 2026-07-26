# Informática HN CMS and Ágape Admin Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a direct-publishing event editor at `agapehn.org/admin` and a reusable GitHub OAuth Worker at `cms-auth.informaticahn.com` without adding a database.

**Architecture:** Ágape serves Decap CMS as static assets and stores event content as validated JSON in the same GitHub repository as the site. A separate private repository under the `informatica-hn` organization contains a Cloudflare Worker that performs GitHub OAuth for an explicit list of client origins.

**Tech Stack:** Next.js 14 static export, TypeScript, Decap CMS, GitHub OAuth, Cloudflare Workers, Vitest, Wrangler

## Global Constraints

- The Ágape editor publishes directly to `main`.
- No database or runtime application server is added to Ágape.
- GitHub and Cloudflare secrets must never be committed or printed.
- OAuth accepts only explicitly allowlisted HTTPS origins.
- Existing unrelated local changes in `components/Logo.tsx` and `public/Galeria/fondo1.jpeg` must remain untouched.
- Existing GitHub Actions atomic VPS deployment remains the production path.

---

### Task 1: Move event content to CMS-editable JSON

**Files:**
- Create: `content/current-event.json`
- Create: `lib/event-content.ts`
- Create: `tests/event-content.test.mjs`
- Modify: `components/events/EventSection.tsx`
- Modify: `app/page.tsx`
- Delete: `data/current-event.ts`
- Modify: `package.json`

**Interfaces:**
- Produces: `EventContent`, `parseEventContent(value: unknown): EventContent`
- Consumes: `content/current-event.json`

- [ ] **Step 1: Write a failing validation test**

Create tests that load a JavaScript validation module and assert:

```js
assert.equal(parseEventContent(validEvent).title, 'Inextinguible Camp 2026')
assert.throws(() => parseEventContent({ ...validEvent, images: [] }))
assert.throws(() => parseEventContent({ ...validEvent, registrationUrl: 'http://example.com' }))
assert.throws(() => parseEventContent({ ...validEvent, images: ['/Galeria/photo.jpg'] }))
```

- [ ] **Step 2: Run the test and verify the missing-module failure**

Run:

```bash
npm run test:event-content
```

Expected: failure because the validation module does not exist.

- [ ] **Step 3: Implement the JSON contract and typed adapter**

Create `content/current-event.json` with the currently published event. Implement validation for non-empty strings, at least one `/Eventos/` image, and an HTTPS registration URL. Export the parsed event for the page.

- [ ] **Step 4: Replace the TypeScript data object**

Import the validated JSON adapter from `app/page.tsx`, preserve the existing `EventSection` props, and delete `data/current-event.ts`.

- [ ] **Step 5: Run validation and production build**

Run:

```bash
npm run test:event-content
npm run build
```

Expected: both exit with status 0.

### Task 2: Add the static Decap admin

**Files:**
- Create: `public/admin/index.html`
- Create: `public/admin/config.yml`
- Create: `tests/admin-export.sh`
- Modify: `package.json`

**Interfaces:**
- Consumes: `content/current-event.json`
- Produces: `/admin/`, `/admin/config.yml`

- [ ] **Step 1: Write a failing export contract**

The shell test must require:

```text
out/admin/index.html
out/admin/config.yml
out/content/current-event.json
```

It must also verify that `config.yml` contains:

```yaml
repo: Josuezl/agapehn-website
branch: main
publish_mode: simple
base_url: https://cms-auth.informaticahn.com
```

- [ ] **Step 2: Run the contract and verify failure**

Run:

```bash
bash tests/admin-export.sh out
```

Expected: failure because the admin export does not exist.

- [ ] **Step 3: Add Decap CMS files**

`index.html` loads a pinned Decap CMS release. `config.yml` defines one file collection with fields for label, title, description, date, price, registration URL, and a list of images. Configure:

```yaml
media_folder: public/Eventos
public_folder: /Eventos
```

- [ ] **Step 4: Include content JSON in the static export**

Ensure the build copies `content/current-event.json` into `out/content/current-event.json` so the Decap GitHub backend edits the tracked source file while the export contract can verify it.

- [ ] **Step 5: Build and verify**

Run:

```bash
npm run build
bash tests/admin-export.sh out
```

Expected: both exit with status 0.

### Task 3: Create the reusable OAuth Worker project

**Files in private repository `informatica-hn/cms-auth`:**
- Create: `package.json`
- Create: `wrangler.jsonc`
- Create: `src/index.ts`
- Create: `src/state.ts`
- Create: `test/index.test.ts`
- Create: `.gitignore`
- Create: `README.md`

**Interfaces:**
- Produces: `GET /auth`, `GET /callback`, `GET /health`
- Requires secrets: `GITHUB_CLIENT_ID`, `GITHUB_CLIENT_SECRET`, `STATE_SECRET`

- [ ] **Step 1: Create the private GitHub repository**

Create `informatica-hn/cms-auth` as private and clone it into a separate local directory.

- [ ] **Step 2: Write failing Worker tests**

Tests must cover:

```text
GET /health returns 200 without secrets
GET /auth rejects an unknown site_id
GET /auth creates signed state for https://agapehn.org
GET /callback rejects missing, invalid, and expired state
callback response uses the validated CMS origin as targetOrigin
```

- [ ] **Step 3: Run tests and verify failure**

Run:

```bash
npm test
```

Expected: failure because the Worker implementation does not exist.

- [ ] **Step 4: Implement signed OAuth state**

Use Web Crypto HMAC SHA-256. State contains the normalized origin, nonce, and expiration no longer than ten minutes. Compare signatures without early exit.

- [ ] **Step 5: Implement Worker routes**

`/auth` redirects to GitHub OAuth. `/callback` exchanges the code server-side and returns the Decap-compatible popup response with an exact target origin. `/health` exposes no configuration or secret data.

- [ ] **Step 6: Run tests and static checks**

Run:

```bash
npm test
npm run typecheck
```

Expected: both exit with status 0.

- [ ] **Step 7: Commit and push the private Worker repository**

Use:

```text
feat(auth): add reusable Decap GitHub OAuth worker
```

### Task 4: Register GitHub OAuth and deploy Worker

**External resources:**
- GitHub organization OAuth app
- Cloudflare Worker
- Cloudflare Custom Domain

**Interfaces:**
- Callback: `https://cms-auth.informaticahn.com/callback`
- CMS origin: `https://agapehn.org`

- [ ] **Step 1: Register the organization OAuth application**

Use:

```text
Application name: Informática HN CMS
Homepage URL: https://informaticahn.com
Callback URL: https://cms-auth.informaticahn.com/callback
```

- [ ] **Step 2: Deploy Worker code**

Deploy the committed Worker and verify the default Workers URL returns 200 at `/health`.

- [ ] **Step 3: Add encrypted secrets**

Store the OAuth client ID, client secret, and a generated state-signing secret as Cloudflare Worker secrets. Do not copy secret values into source files, terminal logs, documentation, or chat.

- [ ] **Step 4: Attach Custom Domain**

Attach `cms-auth.informaticahn.com` as a Worker Custom Domain. Cloudflare creates DNS and TLS automatically.

- [ ] **Step 5: Verify production Worker**

Run:

```bash
curl -fsS https://cms-auth.informaticahn.com/health
```

Expected: status 200 and a minimal health payload.

### Task 5: Publish and verify Ágape admin

**Files:**
- Commit all Ágape files from Tasks 1 and 2.

- [ ] **Step 1: Run full verification**

Run:

```bash
npm run test:event-content
npm run lint
npm run build
bash tests/admin-export.sh out
bash tests/export-health.sh out
```

- [ ] **Step 2: Commit and push Ágape changes**

Use:

```text
feat(cms): add direct-publishing event admin
```

- [ ] **Step 3: Verify GitHub Actions deployment**

Confirm the production workflow succeeds and `https://agapehn.org/admin/` loads the CMS login.

- [ ] **Step 4: Add the Ágape editor account**

Invite the completed GitHub account as a collaborator with write access only to `Josuezl/agapehn-website`.

- [ ] **Step 5: Run the end-to-end publishing test**

Sign in through `agapehn.org/admin`, make a harmless event-content edit, publish, confirm the GitHub commit and successful deployment, then restore the intended content through the same panel.
