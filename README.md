# PI Locks — Website

Premium website for **PI Locks** — electronic access, security &
communications systems. Single-page-architecture React SPA hosted on
GitHub Pages.

Live: <https://mevikrampawar.github.io/PI_Locks/>

## Stack

- **Vite + React + TypeScript** (React 19, HashRouter for deep links on Pages)
- **shadcn/ui** (radix base, `nova` style) — open-source UI components
- **Tailwind CSS v4** — semantic tokens, light + dark themes
- **next-themes** — theme toggle with flash-free first paint
- **react-hook-form + zod** — contact form validation
- **sonner** — toasts

## Pages

| Route              | Purpose                                                        |
| ------------------ | -------------------------------------------------------------- |
| `/`                | Brand landing page: hero, partners, services, standard, journey |
| `/services`        | Full service catalog, three families                           |
| `/services/:slug`  | One template reused by all 9 service pages                     |
| `/about`           | Mission, founding story, PI Standard, team role slots          |
| `/portfolio`       | Capability showcase by sector (Tabs + scope Accordion)         |
| `/contact`         | Direct channels + scoping form (composes a mailto)             |
| `/privacy` `/terms`| Legal pages                                                    |
| `*`                | 404 (also the GitHub Pages SPA fallback)                       |

## Editing content

All site copy lives in three data files, so nobody has to touch JSX:

- `src/data/site.ts` — name, tagline, positioning, contact details
- `src/data/services.ts` — the 9 services, groups, partners, integrations
- `src/data/content.ts` — partner strip, PI Standard, journey, sectors

The logo, emblem, and design tokens are in `src/components/site/` and
`src/index.css`.

> Brand truth rules (per the PI Locks content profile): no fabricated
> statistics, years-in-business, testimonials, or certifications. The
> "Our Standard" band replaces a numbers band on purpose.

## Commands

```bash
npm run dev       # local dev server
npm run build     # type-check + production build → dist/
npm run lint      # oxlint
npm run preview   # serve the built site locally
```

## Deploy

Push to `main`. `.github/workflows/deploy.yml` builds with `npm ci` and
publishes `dist/` to GitHub Pages via the Actions deployment (no separate
branch needed). The site lives at `/PI_Locks/` — set by `vite.config.ts`
`base`, and `public/404.html` rewrites any deep link into a hash route.