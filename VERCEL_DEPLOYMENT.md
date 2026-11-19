# Vercel deployment guide

This portfolio uses Next.js with source-controlled content and static project data. It has no database, CMS, file uploads, or server-side API routes.

## Run locally

```sh
npm install
npm run dev
```

For a production build:

```sh
npm run build
npm start
```

## Deploy to Vercel

Import the repository into Vercel and use the detected Next.js defaults:

- Framework preset: **Next.js**
- Build command: `npm run build`
- Install command: `npm install`
- Output directory: leave the Vercel default

No database credentials or environment variables are required. Optionally set `NEXT_PUBLIC_SITE_URL` to the canonical production URL for Open Graph metadata; Vercel’s deployment URL is used when it is not set. Project pages are generated from `src/data/projects.ts`; profile, skills, services, and certificate details are in `src/data/portfolio.ts`. Public images and documents are in `public/`.

To update content, edit those source files (and add assets under `public/`), then commit and deploy the changes. There is no browser-based admin interface.

The contact form validates its fields and opens a prefilled email draft addressed to the published email address. The visitor must send the draft from their email application; this site does not store or transmit messages.
