import { NavLink } from 'react-router-dom'

import { Logo } from '@/components/site/Logo'
import { site } from '@/data/site'
import { serviceGroups } from '@/data/services'

/*
  Footer — brand block, full service index, company links, and contact
  channels. Stays on the brand surface (`bg-blueprint` dark ink in dark
  mode, warm paper in light mode) to anchor the end of every page.
*/
export function Footer() {
  return (
    <footer className="bg-blueprint border-t border-border/60">
      <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_0.8fr_1fr]">
          {/* Brand block — mark, positioning, category callout. */}
          <div className="flex flex-col gap-5">
            <Logo />
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              {site.positioning}
            </p>
            <p className="eyebrow">
              S/N 001 — {site.category}
            </p>
          </div>

          {/* Every service, grouped for one-click navigation. */}
          <div>
            <h3 className="eyebrow mb-4">Services</h3>
            <ul className="flex flex-col gap-2 text-sm">
              {serviceGroups.flatMap((group) =>
                group.services.map((service) => (
                  <li key={service.slug}>
                    <NavLink
                      to={`/services/${service.slug}`}
                      className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {service.name}
                    </NavLink>
                  </li>
                ))
              )}
            </ul>
          </div>

          {/* Company pages. */}
          <div>
            <h3 className="eyebrow mb-4">Company</h3>
            <ul className="flex flex-col gap-2 text-sm">
              {[
                { label: 'Services', to: '/services' },
                { label: 'About', to: '/about' },
                { label: 'Portfolio', to: '/portfolio' },
                { label: 'Contact', to: '/contact' },
              ].map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact channels — mono, unmistakably machine-readable. */}
          <div>
            <h3 className="eyebrow mb-4">Contact</h3>
            <ul className="flex flex-col gap-2 font-mono text-xs text-muted-foreground">
              <li>
                <a
                  href={`mailto:${site.contact.email}`}
                  className="transition-colors hover:text-foreground"
                >
                  {site.contact.email}
                </a>
              </li>
              <li>
                <a
                  href="tel:+16045550123"
                  className="transition-colors hover:text-foreground"
                >
                  {site.contact.phone}
                </a>
              </li>
              <li className="pt-1">{site.contact.serviceArea}</li>
            </ul>
          </div>
        </div>

        {/* Legal line + copyright. */}
        <div className="mt-12 flex flex-col gap-3 border-t border-border/60 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <p className="font-mono text-[11px] tracking-wide text-muted-foreground/70">
              © {new Date().getFullYear()} {site.legalName}. All rights reserved.
            </p>
            <NavLink
              to="/privacy"
              className="font-mono text-[11px] tracking-wide text-muted-foreground/70 transition-colors hover:text-foreground"
            >
              Privacy
            </NavLink>
            <NavLink
              to="/terms"
              className="font-mono text-[11px] tracking-wide text-muted-foreground/70 transition-colors hover:text-foreground"
            >
              Terms
            </NavLink>
          </div>
          <p className="font-mono text-[11px] tracking-wide text-muted-foreground/70">
            {site.tagline} — every project, to the standard.
          </p>
        </div>
      </div>
    </footer>
  )
}