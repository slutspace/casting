# Casting / NY

A New York-style casting house front-end for creators, performers, agencies,
and clients. Editorial design language inspired by IMG, Wilhelmina,
The Cut, and Vogue. Built as the public + authenticated marketing surface
for the platform described in the architecture brief (`casting.adult` —
Hated By Many&nbsp;LLC).

This is the **app surface** only. It is the layer that talks to the API
backed by the wallet, ledger, payout router, 2257 vault, DMCA system, and the
hosting plane (R2 + Cloudflare edge worker + KMS) detailed in the
architecture document.

## Stack

- **Next.js 14 (App Router)** — file-based routing, RSC, static export-ready
- **TypeScript (strict)** — full type coverage across data, components, pages
- **Tailwind CSS** — utility classes, with a small editorial design system
  layered on top (`src/app/globals.css`)
- **Google Fonts** — Playfair Display (serif), Inter (sans), JetBrains Mono
- **No client-side JS** beyond what RSC requires — every page is a Server
  Component by default

## Routes

| Path                       | Purpose                                                    |
| -------------------------- | ---------------------------------------------------------- |
| `/`                        | Landing — hero, manifesto, numbers, roster, briefs, press  |
| `/talent`                  | Roster directory (filterable in MVP UI)                    |
| `/talent/[handle]`         | Individual creator profile · static-generated per creator  |
| `/casting-calls`           | Live casting calls index                                   |
| `/casting-calls/[slug]`    | Casting call detail · static-generated per brief           |
| `/agency`                  | The house · talent + client value props                    |
| `/clients`                 | Client tiering (Studio · House · Atelier)                  |
| `/concierge`               | Private commissions intake                                 |
| `/journal`                 | The house journal — essays and field notes                 |
| `/dashboard`               | Creator dashboard — KPIs, library, bookings, audit log     |
| `/apply`                   | Roster application (4-step form)                           |
| `/sign-in`                 | Member sign-in (password + WebAuthn + SSO)                 |
| `/not-found`               | Editorial 404                                              |
| `/robots.txt`              | Disallow-all (matches the architectural posture)           |

## Design System

The aesthetic is "Manhattan editorial": ivory bone background (`#f6f5f2`),
deep ink (`#0a0a0a`), a single restrained accent (`oxblood / rouge`), and
generous whitespace.

- **Display type** — Playfair Display, very tight tracking (`-0.02em`),
  generous size scale up to clamp(4rem, 14vw, 18rem)
- **Eyebrow type** — JetBrains Mono, 11px, uppercase, 0.32em tracking
- **Body type** — Inter, snug leading
- **Imagery** — grayscale by default, color reveal on hover, no rounded
  corners, hard editorial crops

Component primitives:

- `<SiteHeader>`, `<SiteFooter>` — global chrome
- `<Section>` — eyebrow + display title + description grid
- `<TalentCard>` — roster card with portrait + tagline
- `<CastingRow>` — listings row with status accent
- `<Ticker>` — scrolling marquee strip

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (28 prerendered pages)
npm run start    # serve production build
npm run lint
```

## Notes

- All data in `src/lib/data.ts` is illustrative seed data. In production this
  is replaced by a typed API client to the platform services.
- `metadata.robots = noindex` is set in the root layout — this front-end
  matches the "non-indexable" architectural posture by default. Marketing
  pages can selectively re-enable indexing per page if desired.
- Imagery uses `images.unsplash.com` placeholders; configured in
  `next.config.mjs`.
- Strict TypeScript, ESLint via `next/core-web-vitals`, and Tailwind only.

## Folder structure

```
src/
├── app/
│   ├── (each route directory)/page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   ├── not-found.tsx
│   └── robots.ts
├── components/
│   ├── casting-row.tsx
│   ├── section.tsx
│   ├── site-footer.tsx
│   ├── site-header.tsx
│   ├── talent-card.tsx
│   └── ticker.tsx
└── lib/
    ├── data.ts
    └── types.ts
```
