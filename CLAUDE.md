# ValleOS landing page

Marketing site for ValleOS (dispatch OS for small trucking companies).
Next.js App Router + Tailwind v4, fully static, no extra dependencies.

Source of truth for product facts: https://valleos-screens.vercel.app/
(MVP screen flows). Do not invent product capabilities beyond those screens;
the AI drafts but never books; readiness failures block with no override.

- Design tokens: `app/globals.css` `@theme` (ink/night/bone neutrals + the
  product state palette: go, caution, reject, stale, proposed, manual, ai).
- Sections live in `components/sections/*` in page order; product-UI fragments
  in `components/ui/*`; motion primitives in `components/primitives/*`.
- Numbers in UI fragments are lifted from the real screens (RM-2408 economics,
  E12 readiness, F5 AI drafts, H2 invoice). Keep them internally consistent.
- `npm run dev` / `npm run build` / `npm run lint`. Launch config for the
  browser preview: `.claude/launch.json` (name: valleos).
