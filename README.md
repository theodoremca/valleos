# ValleOS — Marketing Landing Page

The marketing site for **ValleOS**, a dispatch operating system for small trucking
companies — one that knows when a load loses money, and won't let anyone dispatch
illegally.

The page is built around the decisions the product supports, not a feature list:

1. **Load economics** — gross rate vs deadhead, fuel, driver pay and fixed cost,
   ending in an Accept / Caution / Reject verdict with reasons and confidence.
2. **Dispatch readiness** — carrier, truck, driver, hours: all four verified, or
   the dispatch is blocked and the screen names why.
3. **Execution to payment** — live loads, detention while it runs, POD on a
   24-hour clock, invoices that only open when the proof is reviewed.

Product facts, status vocabulary, and every number shown in the UI fragments come
from the ValleOS MVP screen flows: https://valleos-screens.vercel.app/

## Stack

- Next.js (App Router, static output) + TypeScript
- Tailwind CSS v4 (design tokens in `app/globals.css` `@theme`)
- No animation or UI libraries — reveal/count-up primitives are hand-rolled
  (`components/primitives`), ~0 kB of external JS beyond React/Next.

## Structure

```
app/                    layout (fonts, metadata), page, global styles/tokens
components/
  chrome/               Nav, Footer
  sections/             one file per page section, in page order
  ui/                   product-UI fragments (cards, panels, phone, showcase)
  primitives/           Reveal, CountUp, useInView, Logo, Cta, SectionHead
lib/blur.ts             generated blur placeholders for next/image
public/img/             photography (Pexels, free license)
```

## Develop

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static production build
npm run lint
```

## Editing guidance

- **Accuracy over hype.** The product is an MVP. Don't advertise capabilities the
  screen flows don't show (no load-board search, factoring, payroll, IFTA, broker
  portals…). The Integrations section lists these as deliberately-not-included.
- **State vocabulary is brand.** go / caution / reject / stale / proposed /
  manual / AI-draft colors mirror the product. Keep them consistent
  (`components/ui/StateChip.tsx`, tokens in `globals.css`).
- **The AI never books.** Copy must always pair AI capability with human
  approval. "AI recommends. You decide."
