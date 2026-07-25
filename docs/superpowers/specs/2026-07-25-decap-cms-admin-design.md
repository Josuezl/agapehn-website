# Informática HN CMS and Ágape Admin Design

## Goal

Provide a non-technical event editor at `https://agapehn.org/admin/` without
adding a database or an application server to the Ágape website. The same
authentication infrastructure must support future Informática HN clients while
keeping each client's repository and permissions isolated.

## User Experience

The Ágape editor signs in with an individual GitHub account and sees one
collection named `Evento actual`. The editor can change:

- Event label
- Event title
- Description
- Date
- Price
- Registration URL
- Event images and their order

Selecting `Publish` commits directly to `main`. The existing GitHub Actions
workflow builds the static export and deploys it atomically to the VPS. No
review or approval step is included.

## Repository and Permission Model

`informatica-hn` is the agency organization. A private repository named
`cms-auth` owns the reusable OAuth Worker.

Ágape remains in `Josuezl/agapehn-website` initially. The Ágape editor receives
write access only to that repository. Future clients receive separate GitHub
accounts and access only to their respective repositories. Accounts and
credentials are never shared between clients.

## Ágape Content Architecture

Decap CMS is served as static files under `public/admin/`:

- `index.html` loads Decap CMS.
- `config.yml` configures the GitHub backend, direct publishing, media uploads,
  and the single event file.

The event source moves from executable TypeScript to
`content/current-event.json`. The existing React presentation imports this JSON
through a typed adapter. Event images remain under `public/Eventos/`.

The JSON contract contains:

```json
{
  "label": "Próximo evento",
  "title": "Inextinguible Camp 2026",
  "description": "Descripción del evento",
  "date": "16 - 18 de octubre de 2026",
  "price": "Entrada: L1,200",
  "images": ["/Eventos/example.jpeg"],
  "registrationUrl": "https://forms.gle/example"
}
```

The build validates required strings, requires at least one image, accepts only
local `/Eventos/` image paths, and requires an HTTPS registration URL.

## Authentication Architecture

`cms-auth.informaticahn.com` is a Cloudflare Worker Custom Domain. Cloudflare
creates its DNS record and TLS certificate.

The Worker exposes:

- `GET /auth`: starts GitHub OAuth for an allowlisted CMS origin.
- `GET /callback`: exchanges the authorization code and returns the token to
  the Decap popup using the protocol expected by Decap CMS.
- `GET /health`: returns a non-sensitive health response.

The Worker stores `GITHUB_CLIENT_ID`, `GITHUB_CLIENT_SECRET`, and a signed-state
secret as encrypted Cloudflare secrets. Secrets are never committed.

The Worker accepts only explicitly allowlisted origins, starting with:

- `https://agapehn.org`
- `https://www.agapehn.org`

OAuth state is signed, short-lived, and tied to the requesting origin. Callback
responses set a strict target origin rather than broadcasting tokens.

## GitHub OAuth

The OAuth application belongs to the `informatica-hn` organization.

- Homepage URL: `https://informaticahn.com`
- Callback URL: `https://cms-auth.informaticahn.com/callback`

The client secret is copied once into Cloudflare Workers secrets and is not
stored locally or in chat.

## Deployment

The Worker is deployed independently from its private repository. Its Custom
Domain is `cms-auth.informaticahn.com`.

The Ágape admin files deploy through the existing GitHub Actions workflow. A
content publication from Decap is therefore equivalent to a normal commit to
`main` and receives the same build, health check, atomic activation, and
rollback behavior.

## Failure Handling

- Invalid event content fails the build before deployment.
- A failed deployment leaves the previous VPS release active.
- OAuth requests from unknown origins are rejected.
- Missing Worker secrets prevent Worker deployment.
- Removing an editor's repository access immediately prevents future
  publications.

## Verification

- Unit tests cover event-content validation and OAuth state validation.
- Worker tests cover allowed origins, rejected origins, expired state, and
  health response without using live GitHub.
- The Ágape production build confirms `/admin/index.html`,
  `/admin/config.yml`, event JSON, and media are exported.
- A final manual test uses a temporary authorized GitHub account to edit and
  publish the event from `agapehn.org/admin/`.
