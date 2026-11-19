# Legacy Supabase setup (retained for migration reference)

The active target architecture is now the self-managed Node.js + SQLite backend. Follow [`SELF_HOSTED_SETUP.md`](./SELF_HOSTED_SETUP.md) instead. Supabase source files are being retained until the new server is installed and end-to-end verified.

1. Create a Supabase project and apply `supabase/migrations/001_portfolio_cms.sql` in the SQL Editor.
2. In **Authentication → Providers**, keep Email enabled and disable public sign-ups. In **Authentication → URL Configuration**, add the deployed site URL and `/admin/login` redirect URL.
3. Create the one administrator user from the Supabase dashboard (Authentication → Users → Add user). Set `ADMIN_EMAIL` to that account's email and set an initial password privately; require a password change after first sign-in using the Supabase recovery flow.
4. Copy `.env.example` to `.env.local` and fill in the project URL, publishable/anon key, and authorized administrator email. Never put a service-role key in this project.
5. The migration creates the `portfolio-assets` Storage bucket with an 8 MB size limit and image/PDF MIME allowlist. Storage is public-read for portfolio asset URLs; writes and deletes are admin-only. Keep private files (for example confidential documents) out of this bucket.
6. Run `npm run dev`, open `/admin/login`, and sign in with the provisioned administrator account. There is no registration screen.

The Admin Users table is deliberately populated by an authorized operator, not by public signup. After creating the Auth user, add its UUID once in the SQL Editor:

```sql
insert into public.admin_users (user_id)
select id from auth.users where lower(email) = lower('you@example.com');
```

The application checks the configured `ADMIN_EMAIL` on every admin request, stores access/refresh tokens in HTTP-only cookies, and sends database requests with the signed-in user's access token. RLS remains the authoritative data boundary. Set up a Supabase Auth password reset email template/redirect to `/admin/login` for password recovery.

## Existing content

The existing portfolio data and local project screenshots remain intact in `src/data` and `public`. After applying the migration and signing in, open **Projects → Import existing projects** once. This idempotently imports the existing 11 project records, preserves their slugs, original repository URLs and owner-supplied screenshot paths, and marks the existing public items published/featured so the current homepage remains populated. It also seeds the portfolio's existing skill groups, profile/contact details, education record, and IEEE certificate when those CMS tables are empty. Existing project slugs are left untouched on repeat imports. Profile, skills, certificates, education and experience can then be managed in their dashboard sections; changes appear on the public portfolio. Existing contact submissions were not persisted by the former mailto-only form and cannot be recovered.

Projects support drafts, publishing, featuring, ordering, a private preview, multi-image upload, thumbnail previews and gallery reordering/removal. Skills, certificates, education, experience and profile support add/edit/delete, visibility and ordering where applicable. Messages can be read, archived and deleted. Uploaded assets use the public `portfolio-assets` bucket. Settings lists unreferenced files only; the server rechecks every stored project, certificate and profile reference before allowing permanent deletion.

## Deployment

Deploy the existing Next.js app to a Node-compatible Next hosting provider (for example Vercel), configure the three environment variables in the hosting environment, apply the SQL migration to the production Supabase project, create and authorize the single admin user, and deploy. Do not use static export: admin API routes and server-set cookies require a server runtime. Ensure the production domain is present in Supabase Auth URL allowlists and use HTTPS.
