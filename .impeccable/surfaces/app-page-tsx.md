---
version: 1
slug: "app-page-tsx"
primary_target: "app/page.tsx"
related_targets: ["app/projects/page.tsx","app/projects/[slug]/page.tsx"]
---

# Surface brief — kevinpallado portfolio (`/`, `/projects`, `/projects/[slug]`)

## Scope and mode

Whole-site replacement visual world. Visitor mode: **Persuade**. Three co-primary audiences (direct clients/founders, hiring managers/CTOs, recruiters) reading one page for one decision: is this person worth a conversation. Action is email; there is no form.

Confirmed in the ask round: scale figures drawn from real client systems are permitted at order-of-magnitude accuracy ("1,300+ agents"), never exact client currency. Dashboard screenshots appear **small and restrained as evidence**, never as hero imagery. Two named failure modes: looking like every dev portfolio, and sounding like a pitch.

## Direction contract

**THESIS.** Kevin's product is the layer underneath — data models, APIs, integrations — and the one thing a screenshot can never show is what connects to what. This site is a patch bay: labelled jacks, and a cord you can trace from a system to the services it runs on. It refuses the category's card grid of screenshot thumbnails, which shows eight surfaces and zero architecture, and it refuses the near-black-plus-neon "technical" costume that grid usually wears.

**OWN-WORLD.** A light machine-room ground (equipment grey-green #DDE0DA, designation-strip bone #F2F1EA) with **charcoal rack panels** (#1E2022) banding across it as committed full-bleed fields — recognisable with all content removed as rack units stacked in a frame. Brass (#B08D3F) is the jack ferrule and is reserved for connection points only. Cord red (#C0392B) is reserved for one meaning: a live, patched connection. Ink #16181A. One type family, Archivo variable, worked across its width and weight axes: expanded heavy for panel legends, condensed caps tightly tracked for designation strips, normal for body, tabular lining figures for every number. No monospace anywhere — Dymo and engraved panel legends are condensed gothics, not typewriter faces, and mono here would be the dev-portfolio costume the brief rules out. Components are panel units, designation strips, jacks, cords, meter readings, and brass-bezelled inset monitors.

**STORY.** The visitor understands within one viewport that Kevin builds the connective layer, not screens. They come to believe it because the connections are specific and checkable — Stripe into Quansys, Claude and OpenAI into Grantable, GoHighLevel into Zen Marine — and because the oldest cord has been patched since 2019. They act by taking the open line: the unpatched jack at the end of the bay.

**FIRST VIEWPORT.** Full-bleed charcoal rack panel on the grey-green ground. Upper left, an engraved designation strip: KEVIN REN B. PALLADO / FULLSTACK DEVELOPER · SYSTEMS BUILDER. The panel carries two labelled rows of brass jacks: the upper row is SYSTEMS (eight, one per project), the lower row is SERVICES (Stripe, AWS, Claude API, PostgreSQL, MySQL, GoHighLevel, Laravel, Next.js). On load exactly one cord is patched — Quansys to its services, the oldest line, in service since 2019 — drawn with real catenary sag and animating in once. At the far right of the bay sits the primary action as its own jack, labelled OPEN LINE, cord dangling and unpatched: availability is an empty jack, not a status pill. Meter readings sit beside jacks carrying scale figures.

**FORM.** The Patch Bay — the operator's cord board and studio patch panel. Candidate 1 of my grounded list, offered as IMPECCABLE'S PICK against the roll's assigned Fixture Board and chosen by the user over it. Seed key **f97a5d42**, re-roll round 1, resolved `model-pick`, code-led.

Donations carried from the round's declined challengers, applied to this world:
- *from the collider event display* — confidence is drawn, not footnoted: the four unverified `// TODO: confirm` stack entries render as half-weight dashed cords, visibly provisional rather than silently asserted.
- *from the zine explainer* — a leader line ties a claim to its evidence; a scale figure points at the inset monitor that proves it.
- *from the luminescent understory* — exactly one element holds maximum contrast at any scroll position: the patched cord is the only saturated thing on screen.
- *from the industrial quote grammar* — every region carries its literal name on a designation strip. No unlabelled sections, no decorative headers; wayfinding is reading.

**FINISH.** unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Signature interaction and motion grammar

Patching. Focusing or hovering a SYSTEM jack animates cords out to every SERVICE jack it connects to, drawn as SVG paths with genuine catenary droop, settling with an exponential ease-out and a small terminal sag. Releasing unpatches them. Keyboard reaches every jack and patching is the focus state, so the interaction is not pointer-only. One authored moment, orchestrated once; `prefers-reduced-motion` renders cords already patched and still. Nothing loops.

## Constraints that bind the build

Preserve every product fact in `data/projects.ts` and `lib/site.ts`, all three routes, metadata, OG/Twitter images, sitemap, robots, Person JSON-LD, the noscript reveal fallback, and per-project `role` strings exactly as written. No testimonials, metrics, press, or claims beyond PRODUCT.md's Evidence on Hand. Craft floor bans in force against the incumbent's own habits: no eyebrow or kicker above any heading, no 01/02/03 section numbering, no card grid as page structure.

## Unresolved

The four `// TODO: confirm` year and stack fields stay unverified and ship visibly provisional until Kevin confirms them.
