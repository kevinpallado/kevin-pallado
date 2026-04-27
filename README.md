# Kevin Pallado — Portfolio

A minimalist developer portfolio built with Next.js 15, deployed on Vercel.

## Stack

- **Framework**: Next.js 15 (App Router) + React 19
- **Language**: TypeScript (strict)
- **Styling**: Plain CSS (custom design tokens)
- **Fonts**: Geist + Geist Mono (via `next/font`)
- **Images**: `next/image` (AVIF/WebP)
- **Deploy**: Vercel

## Local development

```bash
npm install
npm run dev
```

Visit http://localhost:3000.

## Build & verify

```bash
npm run typecheck
npm run lint
npm run build
```

## Deploy to Vercel

1. Push this repo to GitHub.
2. In Vercel: **New Project → Import → Next.js** (auto-detected).
3. Set the production domain (e.g. `kevinpallado.dev`).
4. If you change the canonical URL, update `app/lib/data.ts` (`SITE.url`) and `public/robots.txt`.

That's it — no env vars required.

## Security

The site is locked down at the edge via `next.config.ts` headers:

| Header | Value |
| --- | --- |
| `Content-Security-Policy` | `default-src 'self'`, `script-src 'self'`, `frame-ancestors 'none'`, no third-party origins |
| `Strict-Transport-Security` | `max-age=63072000; includeSubDomains; preload` |
| `X-Content-Type-Options` | `nosniff` |
| `X-Frame-Options` | `DENY` |
| `Referrer-Policy` | `strict-origin-when-cross-origin` |
| `Permissions-Policy` | camera/mic/geolocation/payment all denied |
| `Cross-Origin-Opener-Policy` | `same-origin` |
| `Cross-Origin-Resource-Policy` | `same-origin` |

External links open with `rel="noopener noreferrer"`. There are no third-party scripts, no analytics, and no client-side fetches — all content is statically rendered.

## Editing content

All content lives in two files:

- `app/lib/data.ts` — site metadata, projects, experience, skills, nav.
- `app/lib/case-studies.tsx` — featured case studies (Quansys, LondonFoster). JSX lives here so summaries can use `<strong>` and `<em>`.

Replace the resume by overwriting `public/Kevin-Pallado-Resume.pdf`.
Screenshots live in `public/assets/`.

## Project structure

```
app/
  components/   React components (Nav, Hero, About, CaseStudies, Projects, Experience, Skills, Contact, Footer, Reveal)
  lib/          Data, types, icons
  globals.css   Design tokens + section styles
  layout.tsx    Root layout, metadata, JSON-LD Person schema
  page.tsx      Single-page composition
  sitemap.ts    /sitemap.xml
  opengraph-image.tsx  /opengraph-image (1200×630)
public/
  assets/       Case-study screenshots
  Kevin-Pallado-Resume.pdf
  robots.txt
next.config.ts  Security headers
vercel.json     Vercel framework hint
```
