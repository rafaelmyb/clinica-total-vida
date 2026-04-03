# Clínica Total Vida — site (fase 1)

Institutional site built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS v4**.

## Stack decisions

| Topic | Choice |
|-------|--------|
| Router | **App Router** (`src/app/`) |
| Styling | Tailwind v4 with `@theme` tokens in `src/app/globals.css` |
| Fonts | `next/font`: Geist (body/UI), Cormorant Garamond (serif for headings where needed) |

Theme colors are named for the clinic (burgundy + gold), Dr. Potthyer (bronze/gold), and Dra. Quiele (taupe + rose gold), aligned with the product brief; exact tones may be refined when brand PNGs are sampled in later tasks.

## Routes (phase 1)

| Path | Purpose |
|------|---------|
| `/` | Institucional da clínica |
| `/doutor-potthyer-vieira` | Dr. Potthyer Vieira |
| `/doutora-quiele-vieira` | Dra. Quiele Vieira |

Canonical URLs may change after client confirmation (see PRD).

## Release checklist (phase 1)

- **Build:** `npm run build` must complete without TypeScript or compile errors.
- **Smoke:** open all three routes from the header; confirm internal links and `tel:+556932154275` on contact CTAs.
- **a11y (basic):** one `h1` per page; section headings use `h2`/`h3` in logical order; images have non-empty `alt`; tab through links and buttons — focus ring should be visible (global `focus-visible` rule in `globals.css`).

## Client / content pendências (from PRD)

| Item | Status |
|------|--------|
| Biografias completas (Dr. e Dra.), CRM, formação | Placeholder copy on professional pages — replace when approved |
| E-mail e WhatsApp institucionais | Not in briefing — not shown; add when provided |
| Mapa embutido (Google Maps) | Not implemented — address text only |
| Horário sábado/domingo | Neutral copy on clinic page; confirm with clinic |
| Licença de uso das imagens | Confirm before production deploy |

Additional PNGs can be copied from the repo asset folders into `public/images/...` using the same filenames as the source files.

## Public assets

Static files live under `public/images/<area>/` using **the same numeric filenames** as the source folders at the repo root (`clinica-images/`, `doutor-potthyer-vieira/`, `doutora-quiele-vieira/`). URLs are stable in dev and production (e.g. `/images/clinica/2.png`).

Use `next/image` with explicit `width` / `height` (or `fill` + sized parent), meaningful `alt`, and responsive `sizes` for large PNGs. Paths and alt text are centralized in `src/lib/site-images.ts`.

**Licensing:** confirm rights to use provided photography and logos before go-live (see PRD dependencies).

## Scripts

```bash
npm run dev    # development server — http://localhost:3000
npm run build  # production build
npm run start  # run production server (after build)
npm run lint   # ESLint
```

## Docs

Product and task breakdown: `../docs/clinica-total-vida-site/` (repository root).
