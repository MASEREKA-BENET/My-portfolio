# Self-managed Node.js + SQLite setup

## Runtime requirements

This is still the existing Next.js 15 portfolio, served by a custom Express + Next Node process. It is not a static export and must run on a persistent Node host. The repository contains no provider-specific deployment configuration, so the current hosting provider cannot be confirmed. Use a VM/VPS or a Node service with a persistent disk/volume (for example, a suitable Render/Railway/Fly.io service). Do not deploy this configuration to static hosting or an ephemeral/serverless filesystem.

## Install and configure

The environment currently cannot reach `registry.npmjs.org`: DNS lookup succeeds, npm is configured for the default `https://registry.npmjs.org/` with no proxy override, but HTTPS requests time out/reset (`curl` timed out, Node fetch returned `UND_ERR_CONNECT_TIMEOUT`, and `npm ping` returned `ECONNRESET`). This indicates outbound registry connectivity is blocked/reset in the execution environment, not an incorrect npm registry setting. Dependencies and the lockfile still need to be resolved from a network-enabled machine before the server can start. From the project directory run:

```sh
npm install
```

If this machine should have internet access, check VPN/firewall/proxy policy and retry. If your organization requires a registry mirror, set it only to the approved registry, for example `npm config set registry https://<approved-registry>/`; do not disable TLS verification.

The runtime dependencies are `express`, `better-sqlite3`, `bcrypt`, `multer`, `zod`, `express-rate-limit`, and `helmet`. `npm install` will update `package-lock.json` for those dependencies.

Copy `.env.example` to `.env` and configure:

- `NODE_ENV=development` locally; `NODE_ENV=production` on the host.
- `PORT` and `HOST` as required by the host.
- `PORTFOLIO_DATA_DIR` to a persistent writable directory/volume. It stores `portfolio.sqlite` and uploads.
- `TRUST_PROXY=1` only when requests come through a trusted reverse proxy that overwrites forwarded headers.
- Optional `PORTFOLIO_ORIGIN` when server-side project detail lookups need a fixed public origin.

Then initialize the database and create the sole administrator in an interactive terminal:

```sh
npm run db:migrate
npm run admin:create
npm run dev
```

`admin:create` prompts for email and a hidden password, enforces a minimum 12-character password, stores a bcrypt hash, and refuses to create a second administrator. No admin credentials are stored in source or environment files.

## Existing content migration

After logging into `/admin`, go to **Projects → Import existing projects**. The idempotent import copies the existing source project records, skill groups, profile, current education record, and IEEE certificate into SQLite. It copies the real project screenshots, portrait, certificate, and CV into organized directories under `PORTFOLIO_DATA_DIR/uploads`; it does not delete or alter the original assets in the repository. Existing slugs/records are preserved on repeat imports.

The repository does not contain credentials or an export of a deployed Supabase database. Therefore, this import covers the existing source-controlled portfolio data only. If a live Supabase project contains newer dashboard edits, export and back up those records and files from Supabase before retiring that project; those remote-only changes cannot be retrieved from this checkout.

## Start and deploy

```sh
npm run build
npm start
```

Run one continuously available Node process and mount durable storage at `PORTFOLIO_DATA_DIR`. Set `NODE_ENV=production`, terminate TLS at the host/reverse proxy, and configure the host to pass the public `Host` header through. The app sets Secure, HttpOnly session cookies in production. Keep the data volume private; only referenced public assets are served without an administrator session.

## Backups and restore

```sh
npm run db:backup
```

This writes a SQLite-consistent backup in the data directory. Also back up `PORTFOLIO_DATA_DIR/uploads` because database rows reference those files. Store backups outside the live volume. To restore, stop the service, restore the chosen SQLite backup as `portfolio.sqlite`, restore the matching uploads tree, then restart. Test restoration on a staging copy periodically.

## API

The custom Express server owns `/api/*`; the existing dashboard calls remain same-origin. Public routes expose only published projects and visible skills/certificates/education/experience. `/api/admin/*` requires the SQLite-backed administrator session. State-changing requests require matching same-origin `Origin` and CSRF token checks. Login and contact submissions are rate limited.
