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
    <footer className="relative overflow-hidden border-t border-white/5">
      {/* Closing statement — over a frame, not a flat surface. */}
      <Photo
        src={media.hero.src}
        alt=""
        grain
        className="relative min-h-[400px] sm:min-h-[480px]"
        aspect="auto"
        eager
      >
        <div className="flex flex-col gap-8 px-6 pb-16 pt-32 sm:px-12 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex max-w-2xl flex-col gap-5">
            <p className="spec flex items-center gap-3 text-gold-400">
              <span aria-hidden className="inline-block h-px w-6 bg-gold-400" />
              {site.tagline}
            </p>
            <h2 className="display max-w-xl text-5xl text-ivory-50 text-balance sm:text-6xl lg:text-7xl leading-[1.05]">
              One partner, from first consultation to{' '}
              <span className="display-accent text-gold-400">lifetime support.</span>
            </h2>
          </div>
          <Button asChild size="lg" className="w-fit mb-2 bg-ivory-50 text-navy-950 hover:bg-ivory-100 px-8 py-6 text-base shadow-2xl" data-icon="inline-end">
            <NavLink to="/contact">
              {site.cta.primary}
              <ArrowUpRight data-icon="inline-end" className="ml-2 size-5" />
            </NavLink>
          </Button>
        </div>
      </Photo>

      {/* Columns — wordmark, services, company, contact. */}
      <div className="bg-navy-950 relative">
        <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 py-20 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <div className="flex flex-col gap-6">
              <Logo />
              <p className="max-w-xs text-[15px] leading-[1.8] text-ivory-50/60">
                {site.positioning}
              </p>
            </div>

            <div className="flex flex-col gap-5">
              <h3 className="font-display text-sm font-light italic text-gold-500">Services</h3>
              <ul className="flex flex-col gap-3.5 text-[15px]">
                {serviceGroups.flatMap((group) =>
                  group.services.map((service) => (
                    <li key={service.slug}>
                      <NavLink
                        to={`/services/${service.slug}`}
                        className="text-ivory-50/60 transition-colors hover:text-gold-400"
                      >
                        {service.name}
                      </NavLink>
                    </li>
                  ))
                )}
              </ul>
            </div>

            <div className="flex flex-col gap-5">
              <h3 className="font-display text-sm font-light italic text-gold-500">Company</h3>
              <ul className="flex flex-col gap-3.5 text-[15px]">
                {[
                  { label: 'Services', to: '/services' },
                  { label: 'About', to: '/about' },
                  { label: 'Portfolio', to: '/portfolio' },
                  { label: 'Contact', to: '/contact' },
                ].map((item) => (
                  <li key={item.to}>
                    <NavLink
                      to={item.to}
                      className="text-ivory-50/60 transition-colors hover:text-gold-400"
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-5">
              <h3 className="font-display text-sm font-light italic text-gold-500">Contact</h3>
              <ul className="flex flex-col gap-4 font-mono text-[13px] text-ivory-50/60">
                <li>
                  <a
                    href={`mailto:${site.contact.email}`}
                    className="transition-colors hover:text-gold-400"
                  >
                    {site.contact.email}
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+16045550123"
                    className="transition-colors hover:text-gold-400"
                  >
                    {site.contact.phone}
                  </a>
                </li>
                <li className="leading-relaxed opacity-70">{site.contact.serviceArea}</li>
              </ul>
            </div>
          </div>

          {/* Legal bar. */}
          <div className="flex flex-col border-t border-white/10 py-8 sm:flex-row sm:items-center sm:justify-between gap-6">
            <div className="flex items-center gap-6">
              <p className="font-sans text-[13px] text-ivory-50/40">
                © {new Date().getFullYear()} {site.legalName}. All rights reserved.
              </p>
              <div className="h-4 w-px bg-white/10 hidden sm:block"></div>
              <NavLink
                to="/privacy"
                className="font-sans text-[13px] text-ivory-50/40 transition-colors hover:text-gold-400"
              >
                Privacy
              </NavLink>
              <NavLink
                to="/terms"
                className="font-sans text-[13px] text-ivory-50/40 transition-colors hover:text-gold-400"
              >
                Terms
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}