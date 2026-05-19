# wearwhere-landing

Public landing page for **WearWhere** — a Europe-first, event-aware fashion app.

This site exists to give Awin advertisers, App Store reviewers, future
beta testers, and press a polished, honest artefact they can inspect.
It is **deliberately separate** from the Expo mobile app repository.

> **Tagline:** What to wear. Where to go.
> **Status:** Beta in development. Not yet on the App Store. No public
> feed, no marketplace, no checkout.

---

## Project posture

- **Public proof artefact.** Mirrors the plan in the Expo repo's
  [`docs/PUBLIC_LANDING_PAGE_PLAN.md`](../wearwhere_app/docs/PUBLIC_LANDING_PAGE_PLAN.md)
  and the per-application checklist in
  [`docs/AWIN_APPROVAL_PLAYBOOK.md`](../wearwhere_app/docs/AWIN_APPROVAL_PLAYBOOK.md).
- **No backend** in v1. Static-first, mobile-first, Vercel-ready.
- **No analytics / cookies / tracking pixels** in v1.
- **No fake claims.** No "as seen on", no fake testimonials, no fake
  brand partnerships, no fake App Store badges, no fake live stock or
  prices.
- **Mocks are clearly labelled** as `Beta interface preview` everywhere
  they appear.

## Stack

- **Next.js 16** App Router (TypeScript)
- **Tailwind CSS v4** with brand-system tokens defined in
  [`src/app/globals.css`](src/app/globals.css)
- **next/font** — Playfair Display (display) + Inter (body)
- **No** external UI kits, no `framer-motion`, no analytics SDKs.

## Brand tokens

Defined as Tailwind `@theme` colors:

| Token            | Value     | Use                                  |
| ---------------- | --------- | ------------------------------------ |
| `--color-ink`    | `#141414` | Primary text, dark surfaces          |
| `--color-ivory`  | `#F6F1EA` | Page background                      |
| `--color-coral`  | `#FF6A4A` | Single primary CTA, accent highlight |
| `--color-sage`   | `#7D8F7A` | Metadata, eyebrow labels             |
| `--color-mist`   | `#D9D5CE` | Borders, dividers, subtle fills      |

Use these directly: `bg-ivory`, `text-ink`, `bg-coral`, etc.

## Routes

- `/` — homepage (hero, how it works, what it considers, app previews,
  for brands, affiliate disclosure, beta CTA).
- `/privacy` — plain-language privacy policy for the beta.
- `/terms` — plain-language beta terms.
- `/contact` — mailto-first contact page (no backend form in v1).

## Local development

```bash
npm install
npm run dev
```

Opens at <http://localhost:3000>.

## Build

```bash
npm run build
npm start
```

## Lint

```bash
npm run lint
```

## Deploy to Vercel

This project is configured to deploy out-of-the-box to Vercel.

1. Push this folder to its own Git repository (do **not** commit it
   inside the Expo app repo).
2. In the Vercel dashboard, **Add New → Project**, import the repo.
3. Framework Preset: **Next.js** (auto-detected).
4. Build Command: `next build` (default).
5. Output: `.next` (default).
6. Root Directory: leave as repo root.
7. No environment variables are required for v1.
8. Deploy. Add the custom domain (e.g. `wearwhere.app`) under
   **Settings → Domains**.

Vercel CLI (optional):

```bash
npm i -g vercel
vercel             # preview
vercel --prod      # production
```

## Relationship to the Expo mobile app

The Expo app lives in a **separate repository** (`wearwhere_app`). This
landing page never imports mobile app code, never shares Supabase
credentials, and is updated on its own cadence. The two repos
intentionally do not share a monorepo so App Store builds aren't
coupled to web releases.

If a section of this page needs to reflect a mobile-app feature, copy
the behaviour by hand — do not symlink or alias paths.

## What not to add (without a follow-up task)

- A live product feed or affiliate-link page.
- Brand logos of advertisers who have not approved WearWhere.
- Cookie banners, analytics tags, or third-party tracking.
- A real contact form backend (Resend / Loops can come later; v1 stays
  mailto-only).
- Localisation. English-only at launch.

## Contact

`erdemcisse98@icloud.com`
