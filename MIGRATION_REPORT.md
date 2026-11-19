# Supabase → Node.js/SQLite migration report

## Replaced in the new server path

- Supabase Auth flow: replaced with a single local administrator record, bcrypt password hash, opaque SQLite-backed session, HttpOnly cookie, SameSite policy, CSRF token, same-origin checks, login throttling, and protected Express routes.
- Supabase PostgREST content calls: replaced by prepared SQLite queries and Express REST endpoints for projects, skills, certificates, education, experience, profile, and messages.
- Supabase Storage: replaced by organized local upload directories, Multer limits/MIME and file-signature checks, safe random filenames, reference-checked deletion, and controlled file serving.
- Public content reads/contact submissions: handled by the same-origin Express API, filtered for publication/visibility and backed by SQLite.

## Repository content to migrate

The dashboard's **Import existing projects** action idempotently imports the source-controlled project catalogue and its project descriptions, repository URLs, categories, statuses, skills, profile details, the existing education record, and IEEE certificate. It copies mapped owner-supplied screenshots and supplied profile/certificate/CV files into the persistent uploads directory. Original source files remain untouched.

## Not migrated / manual steps

- No Supabase project credentials, live database export, or Storage export were available in this repository. Remote-only records and uploaded files could not be backed up or migrated. Export them from Supabase before decommissioning any deployed project.
- DNS for `registry.npmjs.org` resolves, npm uses the default registry and has no configured proxy, but HTTPS requests time out/reset (`curl` timeout, Node `UND_ERR_CONNECT_TIMEOUT`, npm `ECONNRESET`). Express/SQLite dependencies are unmet, the custom server startup fails at `Cannot find module 'express'`, and `package-lock.json` has not yet been regenerated. Restore approved registry access, then run `npm install` before starting or verifying Express.
- The current hosting provider is not identifiable from the repository. Deploy only to an always-on Node host with persistent disk.
- Legacy Supabase API/source files are retained until the new server is installed and end-to-end verified, per the non-destructive migration requirement. The new custom server handles the dashboard's same-origin API requests; remove the legacy files only after verifying the replacement on the deployment target.

## Verification status

- Frontend lint: passes.
- Existing Next production build: passes.
- New CommonJS backend files: pass Node syntax checks.
- Live Express/SQLite/auth/upload/CRUD and persistence tests: blocked because required npm packages could not be installed in this environment. The custom backend startup was attempted and failed on missing `express` as expected from the unmet dependencies.
