# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Three audiences arrive at the same page and read it differently; all three are confirmed as primary, and none may be designed away:

- **Direct clients and founders** — business owners evaluating whether Kevin can take a system and own it end to end. They read outcomes, reliability, and scope of ownership before they read stack.
- **Hiring managers and CTOs** — evaluating Kevin for a senior or lead engineering role. They read stack depth, architectural scope, and evidence of leading rather than executing.
- **Recruiters and talent sourcers** — skimming for role fit, stack keywords, availability, location, and timezone. They spend the least time and need the facts to be findable without reading prose.

The job all three are doing is the same: deciding, in one visit, whether Kevin is worth a conversation.

## Product Purpose

A personal portfolio for Kevin Ren B. Pallado that establishes him as a senior fullstack developer and systems builder who owns whole systems rather than assigned tickets.

Success is **credibility for a role conversation**: the visitor finishes the site taking him seriously as a senior/lead candidate or an ownership-level contractor. The site frequently backs an application, referral, or introduction that is already in motion — it is a proof-of-work reference more than a cold conversion funnel. Contact is by email (`kevin.pallado97@gmail.com`); there is no form, no scheduler, and no lead capture.

## Positioning

The claim is ownership of the layers underneath the interface — data models, APIs, business logic, integrations, and the workflows a business actually runs on — rather than feature delivery inside someone else's architecture.

What a neighboring portfolio could not truthfully copy: production systems that have been in continuous operation for years under Kevin's ownership (Quansys since 2019, LondonFoster since 2021), across unrelated industries — real estate, racket sports, accounting/fuel retail, education, ecommerce, grant writing, marine charter, and B2B lead generation. The range is evidence that the skill is systems, not a single vertical.

## Operating Context

- Kevin works from Cagayan de Oro, Philippines (UTC+8) and is open to remote engagements.
- Current posture is **both**: genuinely open to full-time senior/lead roles *and* to select contract projects. The site must not force a choice between the two, and neither framing may crowd the other out.
- The site is read on desktop and phone, often in a short skim between other tabs, and frequently reached from a link someone else shared.
- Roles held across the portfolio span solo build, full ownership, project lead, co-founder, and contributor — the distinction is real and is recorded per project.

## Capabilities and Constraints

- Next.js 16 (App Router) with React 19, TypeScript, Tailwind CSS v4, shadcn/base-ui primitives, and `lucide-react` icons. GSAP with ScrollSmoother and ScrollTrigger drives scroll motion. Deployed on Vercel with Vercel Analytics.
- Content is static and lives in `data/projects.ts` (projects, industries, skills) and `lib/site.ts` (canonical site facts: name, role, email, location, description). There is no CMS, no database, and no backend.
- Routes: `/` (single-scroll home), `/projects` (full archive), `/projects/[slug]` (detail, statically generated). Metadata, OpenGraph/Twitter images, `robots.ts`, `sitemap.ts`, and Person structured data are already in place.
- Site URL resolves from `NEXT_PUBLIC_SITE_URL`, else `VERCEL_PROJECT_PRODUCTION_URL`, else localhost — never hardcode a domain.
- Project screenshots live in `public/projects/` as PNG dashboard captures; `public/profile.jpeg` is the only photograph of Kevin.
- `viewport.colorScheme` is currently `light` only; there is no dark mode.
- Terminology: "systems builder" and "fullstack developer" are the self-description in use. Per-project `role` strings ("Full ownership", "Project Lead", "Co-founder · Contributor", "Contributor", "Built solo") are factual and must not be inflated.
- **Verification:** the year and stack fields on BaSC ePortal, Landers Superstore, Zen Marine Charter, and Zen Intent have been confirmed by Kevin (2026-09-26). Any new project whose facts are unconfirmed must set `unverified: true` in `data/projects.ts` until they are checked.

## Brand Commitments

- Name: **Kevin Ren B. Pallado**, shortened to **Kevin Pallado**. The brand mark is the wordmark **KP.** — the period is part of it.
- Stated role line: "Fullstack developer · systems builder".
- Voice is plain, direct, and understated. Claims are specific and verifiable; the writing avoids salesmanship and superlatives. Existing copy ("Less handoff. More ownership.", "Have a real problem worth solving?", "Made with intention.") is the register to match.
- Contact is email only: `kevin.pallado97@gmail.com`.

## Evidence on Hand

Real, shippable evidence already in the repository:

- Eight real projects with names, years, roles, one-liners, descriptions, stacks, and screenshots in `data/projects.ts` + `public/projects/`. Six carry live public URLs: LondonFoster (`office.londonfoster.org`), Racketa (`racketa.app`), Quansys (`quansys.apexfuelstation.com`), BaSC ePortal (`bsc.iclique.online`), Landers (`landers.ph`), Zen Marine Charter (`zenmarinecharter.com`), Zen Intent (`zenintent.io`).
- Longevity is itself evidence: Quansys running since 2019, LondonFoster since 2021.
- A photograph of Kevin (`public/profile.jpeg`) and the KP. icon (`app/icon.svg`, `app/apple-icon.png`).
- Everything currently committed to this repository is cleared for display and may be expanded on.

Absences that must never be invented: there are **no testimonials, no client quotes, no named references, no metrics, no case-study outcomes, no revenue or user numbers, no awards, no press, and no certifications**. There is no résumé or CV file in the repo. Kevin's employment history beyond these project entries is not recorded here. Future work must not fabricate any of these, and must not imply a metric by phrasing ("trusted by", "millions of", "X% faster") that no data supports.

## Product Principles

1. **Ownership is the claim.** Every surface should make visible that Kevin designs and runs whole systems, not that he is available for tasks.
2. **Specific beats impressive.** Real project names, real years, real stacks, real roles. A verifiable detail outranks a confident adjective — and an unverified field stays unverified.
3. **Both doors stay open.** Role-seeking and project-seeking visitors must both find their path; neither posture may be designed out of the site.
4. **A skim must still land.** A recruiter reading for thirty seconds and a CTO reading for five minutes should both leave with the same correct impression.
5. **Range proves the skill.** Eight industries is the argument. Work that flattens the portfolio into one vertical weakens the positioning.

## Accessibility & Inclusion

No product-specific standard has been established with the user. The existing implementation already commits to a baseline that future work must not regress: semantic landmarks with `aria-labelledby` on every section, a labeled primary nav, a `<noscript>` fallback that forces scroll-reveal content visible, and `alt` text on every project image. Motion is decorative and must remain non-essential to comprehension.
