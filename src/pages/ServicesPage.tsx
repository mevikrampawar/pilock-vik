import { NavLink } from 'react-router-dom'
import { ArrowRight, ArrowUpRight } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

import { PageHeader } from '@/components/site/PageHeader'
import { Reveal } from '@/components/site/Reveal'
import { CalloutCTA } from '@/components/site/CalloutCTA'
import { serviceGroups, flagshipService } from '@/data/services'

/*
  ServicesPage — the full catalog index.
  Groups are broken into anchored sections with an eponymous flagship
  card, then a free-consultation callout anchored to the flagship offer.
*/
export function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Services"
        title="The catalog, by system family"
        lede="Nine disciplines across three families — installed, programmed, commissioned, and documented to the same premium standard."
      />

      {/* Flagship callout — the offer the PI Locks name stands on. */}
      {flagshipService && (
        <section className="border-t border-border/60 bg-steel/30" aria-label="Flagship service">
          <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <Reveal className="group relative overflow-hidden rounded-2xl border border-brass/25 bg-card p-8 sm:p-10">
              <div className="glow-brass absolute inset-x-0 -top-10 h-48" />
              <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex flex-col gap-4">
                  <Badge className="w-fit font-mono text-[10px] tracking-[0.16em] uppercase">
                    The PI Locks specialty
                  </Badge>
                  <h2 className="display text-4xl sm:text-5xl">
                    {flagshipService.name}
                  </h2>
                  <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
                    {flagshipService.intro}
                  </p>
                </div>
                <Button asChild size="lg" className="shrink-0" data-icon="inline-end">
                  <NavLink to={`/services/${flagshipService.slug}`}>
                    View service
                    <ArrowRight data-icon="inline-end" />
                  </NavLink>
                </Button>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* Each service family as its own anchored section. */}
      {serviceGroups.map((group, groupIndex) => (
        <section
          key={group.key}
          id={group.key}
          className={groupIndex > 0 ? 'border-t border-border/60' : undefined}
          aria-label={group.name}
        >
          <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
            <Reveal className="flex flex-col gap-4">
              <p className="eyebrow flex items-center gap-3">
                <span aria-hidden className="inline-block size-1.5 rounded-full bg-brass" />
                {group['S/N']} — {group.label}
              </p>
              <h2 className="display text-3xl sm:text-4xl">{group.name}</h2>
              <p className="max-w-2xl text-muted-foreground">{group.blurb}</p>
            </Reveal>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {group.services.map((service, i) => (
                <Reveal
                  key={service.slug}
                  delay={(i % 2) * 100}
                  className="group flex flex-col justify-between gap-6 rounded-2xl border border-border/70 bg-card p-7 transition-colors duration-300 hover:border-brass/30"
                >
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="display text-2xl sm:text-3xl">
                        {service.name}
                      </h3>
                      <ArrowUpRight className="size-5 shrink-0 text-muted-foreground transition-all duration-300 group-hover:text-brass group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {service.tagline}
                    </p>
                  </div>
                  <NavLink
                    to={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.18em] text-brass uppercase transition-colors hover:text-foreground"
                  >
                    Read more
                    <ArrowRight className="size-3.5" />
                  </NavLink>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Not sure what you need? Consult first — free design consultation. */}
      <section className="border-t border-border/60 bg-steel/30 py-16 sm:py-20" aria-label="Free consultation">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex max-w-2xl flex-col gap-3">
              <h2 className="display text-3xl sm:text-4xl">
                Not sure what you need?
              </h2>
              <p className="text-muted-foreground">
                Start with a free design consultation. We scope the systems,
                price them honestly, and hand you options — no obligation.
              </p>
            </div>
            <Button asChild size="lg" data-icon="inline-end">
              <NavLink to="/contact">
                Consult with us
                <ArrowRight data-icon="inline-end" />
              </NavLink>
            </Button>
          </Reveal>
        </div>
      </section>

      <CalloutCTA />
    </>
  )
}