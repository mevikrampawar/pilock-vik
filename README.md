# PI Locks — Website (playground)

**Playground for the premium UI/UX rework. The client-shared live site lives
in the production repo:** <https://github.com/mevikrampawar/PI_Locks>. The
existing repo is NOT touched from here — all changes happen in this repo
(`pilock-vik`) until the client signs off.

Playground deploy: <https://mevikrampawar.github.io/pilock-vik/>

## The rework — "Midnight & Brass"

A complete UI/UX rework responding to client feedback. The brief: the site
must carry character, because in this industry character is the definition of
trust. Design direction was absorbed from the reference sites
(stranddev.com — editorial premium; ICT / Mircom / Record — enterprise trust;
Miwa Lock — product craft) and the client's brand photo.

- **Colour** (from the client photo): deep navy `#011c3a` + gold `#efa905`.
- **Typography:** Fraunces (editorial serif display, optical sizing) +
  Geist (body) + IBM Plex Mono (spec labels).
- **Layout:** rule-based editorial grids, numbered section indices, generous
  whitespace, an honest "auditable numbers" band (counted live from the
  catalog — no invented statistics).
- **Stack/shape unchanged:** Vite + React + TypeScript, HashRouter for Pages,
  shadcn/ui + Tailwind v4, light/dark themes (midnight navy is the default).

## Pages

| Route              | Purpose                                                        |
| ------------------ | -------------------------------------------------------------- |
| `/`                | Brand landing: editorial hero, auditable numbers, partners, services index, standard, journey |
| `/services`        | Full service catalog, three families (11 disciplines)          |
| `/services/:slug`  | One template reused by every service page                      |
| `/about`           | Mission, founding story, PI Standard, team role slots          |
| `/portfolio`       | Capability showcase by sector (Tabs + scope Accordion)         |
| `/contact`         | Direct channels + scoping form (composes a mailto)             |
| `/privacy` `/terms`| Legal pages                                                    |
| `*`                | 404 (also the GitHub Pages SPA fallback)                       |

## Editing content

All site copy lives in three data files, so nobody has to touch JSX:

- `src/data/site.ts` — name, tagline, positioning, contact details
- `src/data/services.ts` — the services, groups, partners, integrations
- `src/data/content.ts` — partner strip, PI Standard, journey, sectors

The logo, emblem, and design tokens are in `src/components/site/` and
`src/index.css`.

> Brand truth rules (per the PI Locks content profile): no fabricated
> statistics, years-in-business, testimonials, or certifications. The
> "Our Standard" band replaces a numbers band on purpose; the numbers band
> on the home page counts only real values from the live catalog. OEM
> platform status stays "verified per project" until confirmed with the
> client.

## Commands

```bash
npm run dev       # local dev server
npm run build     # type-check + production build → dist/
npm run lint      # oxlint
npm run preview   # serve the built site locally
```

## Deploy

Push to `main`. `.github/workflows/deploy.yml` builds with `npm ci` and
publishes `dist/` to GitHub Pages. The site lives at `/pilock-vik/` — set by
`vite.config.ts` `base` and `public/404.html`, matching this playground repo.