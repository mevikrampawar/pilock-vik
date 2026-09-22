import { NavLink } from 'react-router-dom'
import { ArrowRight, ArrowUpRight } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

import { PageHeader } from '@/components/site/PageHeader'
import { Reveal } from '@/components/site/Reveal'
import { CalloutCTA } from '@/components/site/CalloutCTA'
import { serviceGroups, flagshipService, allServices } from '@/data/services'

/*
  ServicesPage — the full catalog index.
  Families as numbered editorial sections with the flagship called out,
  then a free-consultation line anchored to the flagship offer.
*/
export function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Services"
        title={
          <>
            The catalog, by <span className="display-accent">system family.</span>
          </>
        }
        lede={`${allServices.length} disciplines across three families — installed, programmed, commissioned, and documented to the same standard.`}
      />

      {/* Flagship callout — the offer the PI Locks name stands on. */}
      {flagshipService && (
        <section className="border-b border-border/60" aria-label="Flagship service">
          <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
            <Reveal className="grid gap-8 lg:grid-cols-[1.4fr_0.6fr] lg:items-end">
              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-4">
                  <Badge className="w-fit font-mono text-[10px] tracking-[0.16em] uppercase">
                    The PI Locks specialty
                  </Badge>
                </div>
                <h2 className="display max-w-xl text-4xl sm:text-5xl">
                  {flagshipService.name}
                </h2>
                <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
                  {flagshipService.intro}
                </p>
              </div>
              <Button asChild size="lg" className="w-fit" data-icon="inline-end">
                <NavLink to={`/services/${flagshipService.slug}`}>
                  View service
                  <ArrowRight data-icon="inline-end" />
                </NavLink>
              </Button>
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
            <Reveal className="grid gap-6 lg:grid-cols-[0.14fr_1fr] lg:items-start lg:gap-10">
              <span className="display text-4xl text-gold-500/80">
                {group['S/N'].replace('S/N ', '')}
              </span>
              <div className="flex flex-col gap-4">
                <p className="eyebrow flex items-center gap-3">
                  <span aria-hidden className="inline-block h-px w-6 bg-gold-500" />
                  {group.label}
                </p>
                <h2 className="display text-3xl sm:text-4xl">{group.name}</h2>
                <p className="max-w-2xl text-muted-foreground">{group.blurb}</p>
              </div>
            </Reveal>

            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              {group.services.map((service, i) => (
                <Reveal
                  key={service.slug}
                  delay={(i % 2) * 90}
                  className="group flex flex-col justify-between gap-6 border border-border/60 bg-card p-7 transition-colors duration-300 hover:border-gold-500/40"
                >
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="display text-2xl sm:text-3xl">
                        {service.name}
                      </h3>
                      <ArrowUpRight className="size-5 shrink-0 text-muted-foreground transition-all duration-300 group-hover:text-gold-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {service.tagline}
                    </p>
                  </div>
                  <NavLink
                    to={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.18em] text-gold-500 uppercase transition-colors hover:text-foreground"
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
      <section className="border-t border-border/60 bg-secondary/40 py-16 sm:py-20" aria-label="Free consultation">
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