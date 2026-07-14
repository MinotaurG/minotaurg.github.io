# CLAUDE.md

## Project

**MinotaurG** — Personal engineering portfolio website. Full Greek mythological identity, bold & expressive design, dark palette. This is the hiring-focused site showcasing engineering depth across multiple languages and domains.

Separate from Elevate Strategy (agency site at ~/Developer/agency-website) which remains client-facing for SMBs.

## Commands

```bash
pnpm dev          # Start dev server — localhost:3000
pnpm build        # Production build
pnpm lint         # ESLint
```

Package manager: **pnpm** (install deps with `pnpm install` if node_modules missing).

## Architecture

**Next.js 16 App Router** with Tailwind v4 and Framer Motion.

### Design Brief

- **Identity:** MinotaurG — the Minotaur as central symbol. Labyrinth motifs, mythic language.
- **Theme:** Full Greek mythology identity. Not subtle nods — this IS the brand personality.
- **Tone:** Bold & expressive — big type, strong colors, animated elements, personality-forward. Memorable and energetic.
- **Palette:** Dark base. Accent colors TBD (consider gold/bronze for Greek tie-in, or something more electric to match "bold & expressive").
- **Typography:** Big, confident headings. Consider display/serif for titles, mono for code/technical details.

### Content Strategy

This is a **hybrid portfolio** — weighted toward demonstrating engineering caliber, but also shows client delivery capability.

#### Projects to showcase (engineering-first):

1. **ChessLens** — Chess analysis + weakness tracking + personalized puzzles from your own games. TypeScript monorepo (web + server + shared). Full product spec, multi-platform (web + mobile planned).
2. **Chess Analyzer** — Lichess sync, pattern detection, training engine. Rust workspace (core + web crates). Systems engineering.
3. **Mellow Nova** — Personal finance mobile app. Bank statement ingestion, spending breakdown, bills tracking, AI chat. React Native (Expo), local-first.
4. **JobAgent** — AI-powered job search automation. Go rules engine + Python AI orchestrator. Polyglot systems design.
5. **Medusa Plugins (OSS)** — 3 published npm packages for Indian e-commerce:
   - `@minotaurg/medusa-payment-razorpay` — UPI, cards, wallets, net banking
   - `@minotaurg/medusa-fulfillment-shiprocket` — multi-courier shipping
   - `medusa-payment-cod` — Cash on Delivery
6. **fb-flat-finder** — Facebook Marketplace flat scraper with ML classification & fine-tuning. Python (Playwright, Flask, HuggingFace).
7. **ctx** — Project context tracker for AI chat continuity. Rust CLI, published via Homebrew.

#### Client work (reframed as "I built this end-to-end"):

1. **SD18 Store** — Full sports e-commerce platform (Medusa v2 + Next.js). Includes the 3 OSS plugins built specifically for this.
2. **Siddhidatri Website** — Corporate website with admin panel, careers, leadership, CSR pages. Next.js + Sanity.
3. **finder.io (500apps)** — SEO growth 300→900 signups/mo. Custom ML model (Python, NLP, NeuralProphet) for keyword analysis and traffic forecasting. Took product from mid-tier to #1 in a 40-product suite.
4. **Mulyam Jewels** — D2C jewelry storefront. React SPA, Vite, mobile-first.

#### Stats/proof points:

- 3 published open-source npm packages
- 5+ languages in production (TypeScript, Rust, Go, Python, Java)
- Mobile (React Native) + Web + CLI + Systems (Rust)
- Competitive engineering program selection (top 0.5% of 14,000) — don't name "ATLAS" or "Amazon" unless user decides otherwise

### Sitemap (proposed):

```
/                   — Hero + project highlights + stats
/projects           — Full project grid
/projects/[slug]    — Individual project deep-dive
/work               — Client delivery case studies
/about              — Engineering identity, background, skills
/contact            — Get in touch
```

## Version-Specific Gotchas

- **Tailwind v4** — No `tailwind.config.ts`. Config lives in CSS via `@theme inline` and `@utility`. No `@tailwind` directives, no `@apply` with custom classes.
- **Next.js 16 dynamic routes** — `params` is `Promise<{ slug: string }>` and must be awaited.

## Git / Deploy

- Repo: `MinotaurG/minotaurg.github.io`
- Deploy target: Vercel (or GitHub Pages — TBD)
- Branch strategy: `main` for production

## Writing Style

- Never use em dashes in any content. Use commas, periods, or restructure.
- Voice: Confident, direct, slightly mythic. Not corporate. Not cringe.
- Show don't tell — let project complexity speak for itself, don't over-explain credentials.

## Owner

Aditya Shubham (@MinotaurG)
- GitHub: github.com/MinotaurG
- Languages: TypeScript, Rust, Go, Python, Java, Shell
- Also runs Elevate Strategy (digital agency for sports/lifestyle brands)
