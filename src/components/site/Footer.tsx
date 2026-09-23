import { NavLink } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

import { Button } from '@/components/ui/button'

import { Logo } from '@/components/site/Logo'
import { Photo } from '@/components/site/Photo'
import { site } from '@/data/site'
import { serviceGroups } from '@/data/services'
import { media } from '@/data/media'

/*
  Footer — the brand's closing statement.
  Opens over a duotone photograph, then the ruled service/company/contact
  columns and the legal bar. Editorial, quiet, premium.
*/
export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border/60">
      {/* Closing statement — over a frame, not a flat surface. */}
      <Photo
        src={media.hero.src}
        alt=""
        grain
        className="relative min-h-[360px] sm:min-h-[420px]"
        aspect="auto"
        eager
      >
        <div className="flex flex-col gap-8 px-6 pb-14 pt-28 sm:px-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex max-w-2xl flex-col gap-4">
            <p className="spec text-gold-400">{site.tagline}</p>
            <h2 className="display max-w-xl text-4xl text-ivory-50 sm:text-5xl lg:text-6xl">
              One partner, from first consultation to{' '}
              <span className="display-accent text-gold-400">lifetime support.</span>
            </h2>
          </div>
          <Button asChild size="lg" className="w-fit" data-icon="inline-end">
            <NavLink to="/contact">
              {site.cta.primary}
              <ArrowUpRight data-icon="inline-end" />
            </NavLink>
          </Button>
        </div>
      </Photo>

      {/* Columns — wordmark, services, company, contact. */}
      <div className="bg-brand relative">
        <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 py-14 sm:grid-cols-2 lg:grid-cols-[1.5fr_1.1fr_0.8fr_1fr]">
            <div className="flex flex-col gap-5">
              <Logo />
              <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
                {site.positioning}
              </p>
              <p className="eyebrow text-gold-500">{site.category}</p>
            </div>

            <div>
              <h3 className="eyebrow mb-5 text-gold-500">Services</h3>
              <ul className="flex flex-col gap-2.5 text-sm">
                {serviceGroups.flatMap((group) =>
                  group.services.map((service) => (
                    <li key={service.slug}>
                      <NavLink
                        to={`/services/${service.slug}`}
                        className="text-muted-foreground transition-colors hover:text-gold-500"
                      >
                        {service.name}
                      </NavLink>
                    </li>
                  ))
                )}
              </ul>
            </div>

            <div>
              <h3 className="eyebrow mb-5 text-gold-500">Company</h3>
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
                      className="text-muted-foreground transition-colors hover:text-gold-500"
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="eyebrow mb-5 text-gold-500">Contact</h3>
              <ul className="flex flex-col gap-2.5 font-mono text-xs text-muted-foreground">
                <li>
                  <a
                    href={`mailto:${site.contact.email}`}
                    className="transition-colors hover:text-gold-500"
                  >
                    {site.contact.email}
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+16045550123"
                    className="transition-colors hover:text-gold-500"
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
              Photography on this site is licensed stock, pending owners&rsquo; photos.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}