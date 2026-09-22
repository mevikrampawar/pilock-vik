import { NavLink } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

import { Button } from '@/components/ui/button'

import { Logo } from '@/components/site/Logo'
import { site } from '@/data/site'
import { serviceGroups } from '@/data/services'

/*
  Footer — the brand's closing statement on the navy surface.
  A serif call-to-action line, then rule-divided service/company/contact
  columns, then the legal bar. Editorial, quiet, premium.
*/
export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border/60">
      <div className="bg-brand absolute inset-0" />
      <div className="glow-brass pointer-events-none absolute inset-x-0 bottom-0 h-72" />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Closing statement — the short version of the promise. */}
        <div className="flex flex-col gap-8 border-b border-border/60 py-16 sm:py-20 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex max-w-2xl flex-col gap-4">
            <p className="eyebrow">{site.tagline}</p>
            <h2 className="display max-w-xl text-4xl sm:text-5xl lg:text-6xl">
              One partner, from first consultation to <span className="display-accent">lifetime support.</span>
            </h2>
          </div>
          <Button asChild size="lg" className="w-fit" data-icon="inline-end">
            <NavLink to="/contact">
              {site.cta.primary}
              <ArrowUpRight data-icon="inline-end" />
            </NavLink>
          </Button>
        </div>

        {/* Columns — wordmark, services, company, contact. */}
        <div className="grid gap-12 py-14 sm:grid-cols-2 lg:grid-cols-[1.5fr_1.1fr_0.8fr_1fr]">
          <div className="flex flex-col gap-5">
            <Logo />
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              {site.positioning}
            </p>
            <p className="eyebrow">
              {site.category}
            </p>
          </div>

          <div>
            <h3 className="eyebrow mb-5">Services</h3>
            <ul className="flex flex-col gap-2.5 text-sm">
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

          <div>
            <h3 className="eyebrow mb-5">Company</h3>
            <ul className="flex flex-col gap-2.5 text-sm">
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

          <div>
            <h3 className="eyebrow mb-5">Contact</h3>
            <ul className="flex flex-col gap-2.5 font-mono text-xs text-muted-foreground">
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
              <li className="pt-1 leading-relaxed">{site.contact.serviceArea}</li>
            </ul>
          </div>
        </div>

        {/* Legal bar. */}
        <div className="flex flex-col gap-3 border-t border-border/60 py-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-5">
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