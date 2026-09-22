import { NavLink } from 'react-router-dom'
import { ArrowRight, ArrowUpRight } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

import { KeywayEmblem } from '@/components/site/KeywayEmblem'
import { Reveal } from '@/components/site/Reveal'
import { SectionHeading } from '@/components/site/SectionHeading'
import { PartnersStrip } from '@/components/site/PartnersStrip'
import { StandardBand } from '@/components/site/StandardBand'
import { JourneySection } from '@/components/site/JourneySection'
import { SectorsSection } from '@/components/site/SectorsSection'
import { CalloutCTA } from '@/components/site/CalloutCTA'
import { site } from '@/data/site'
import { serviceGroups, allServices } from '@/data/services'
import { partners, engagements, sectors } from '@/data/content'

// The client's service families, stated as they talk about them.
const capabilities = [
  'Access Control',
  'CCTV',
  'Intercom & Entry',
  'Voice / Data',
  'Audio / Video',
  'Automatic Doors',
]

/* ---------------------------------------------------------------------------
  Hero — the brand's opening statement. A serif line on the navy surface,
  the keyway emblem drawing itself in gold, and the client's capability
  families stated plainly. Quiet, confident, premium.
-------------------------------------------------------------------------- */
function Hero() {
  return (
    <section className="bg-brand relative overflow-hidden" aria-label="Introduction">
      <div className="glow-brass absolute inset-0" />

      <div className="relative mx-auto grid w-full max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:gap-8 lg:px-8 lg:py-28">
        <div className="flex flex-col items-start gap-8">
          <p className="eyebrow hero-veil flex items-center gap-3">
            <span aria-hidden className="inline-block h-px w-8 bg-gold-500" />
            {site.category}
          </p>

          <h1 className="display hero-veil max-w-xl text-6xl text-balance sm:text-7xl lg:text-[5.5rem] [animation-delay:120ms]">
            The standard behind every{' '}
            <span className="display-accent">secure door.</span>
          </h1>

          <p className="hero-veil max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg [animation-delay:240ms]">
            {site.positioning}
          </p>

          <div className="hero-veil flex flex-col gap-3 sm:flex-row [animation-delay:360ms]">
            <Button asChild size="lg" data-icon="inline-end">
              <NavLink to="/contact">
                {site.cta.primary}
                <ArrowRight data-icon="inline-end" />
              </NavLink>
            </Button>
            <Button asChild size="lg" variant="outline">
              <NavLink to="/services">{site.cta.secondary}</NavLink>
            </Button>
          </div>

          {/* Capability strip — the systems this company installs end to end. */}
          <ul className="hero-veil mt-2 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[11px] tracking-[0.18em] text-muted-foreground uppercase [animation-delay:480ms]">
            {capabilities.map((capability, i) => (
              <li key={capability} className="flex items-center gap-5">
                <span className={i === 0 ? 'text-gold-500' : undefined}>
                  {capability}
                </span>
                {i < capabilities.length - 1 && (
                  <span aria-hidden className="inline-block h-3 w-px bg-border" />
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Signature emblem — slow glow, self-drawing gold ring. */}
        <div className="relative mx-auto flex w-full max-w-lg items-center justify-center lg:max-w-none">
          <div className="glow-brass absolute inset-0 m-auto aspect-square size-[115%]" />
          <KeywayEmblem animated className="relative w-full max-w-[360px] lg:max-w-[440px]" />
        </div>
      </div>
    </section>
  )
}

/* ---------------------------------------------------------------------------
  Auditable band — the reference site leads with numbers; so do we, but only
  with numbers anyone can count from this very page. No invented statistics.
-------------------------------------------------------------------------- */
function AuditableBand() {
  const figures = [
    { value: serviceGroups.length, unit: '', label: 'System families' },
    { value: allServices.length, unit: '', label: 'Disciplines, end to end' },
    { value: sectors.length, unit: '', label: 'Sectors served' },
    { value: partners.length, unit: '', label: 'OEM platforms, verified per project' },
  ]

  return (
    <section className="border-b border-border/60" aria-label="By the numbers">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid divide-y divide-border/60 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
          {figures.map((figure, i) => (
            <Reveal
              key={figure.label}
              delay={i * 80}
              className="flex flex-col gap-2 py-8 pr-6 sm:py-10 lg:pl-8 lg:first:pl-0"
            >
              <span className="display text-5xl text-gold-500">
                {String(figure.value).padStart(2, '0')}
                {figure.unit}
              </span>
              <span className="font-mono text-[11px] tracking-[0.16em] text-muted-foreground uppercase">
                {figure.label}
              </span>
            </Reveal>
          ))}
        </div>
        <p className="border-t border-border/60 py-4 font-mono text-[10px] tracking-[0.18em] text-muted-foreground/70 uppercase">
          Counted from this site&rsquo;s live catalog — nothing invented.
        </p>
      </div>
    </section>
  )
}

/* ---------------------------------------------------------------------------
  Services section (home) — the catalog as an editorial index: each family is
  a numbered, ruled block with its disciplines listed beneath.
-------------------------------------------------------------------------- */
function ServicesSection() {
  return (
    <section className="py-20 sm:py-28" aria-label="Our services">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="What we do"
            title={
              <>
                One partner for the{' '}
                <span className="display-accent">whole building.</span>
              </>
            }
            lede="Security, communications, and the backbone behind them — every service installed to the same standard, and every system able to talk to the rest."
          />
        </Reveal>

        <div className="mt-16 flex flex-col">
          {serviceGroups.map((group, groupIndex) => (
            <Reveal
              key={group.key}
              as="section"
              className={groupIndex > 0 ? 'border-t border-border/60 pt-14' : undefined}
            >
              <div className="grid gap-8 lg:grid-cols-[0.14fr_1.1fr_0.9fr] lg:gap-10">
                <span className="display text-4xl text-gold-500/80">
                  {group['S/N'].replace('S/N ', '')}
                </span>
                <div className="flex flex-col gap-3">
                  <h3 className="display text-3xl">{group.name}</h3>
                  <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
                    {group.blurb}
                  </p>
                </div>

                <ul className="flex flex-col lg:mt-2">
                  {group.services.map((service, i) => (
                    <li
                      key={service.slug}
                      className={i > 0 ? 'border-t border-border/40' : undefined}
                    >
                      <NavLink
                        to={`/services/${service.slug}`}
                        className="group flex items-center justify-between gap-4 py-3.5 transition-colors"
                      >
                        <span className="flex items-center gap-3">
                          <span className="display text-xl text-balance">
                            {service.shortName}
                          </span>
                          {service.flagship && (
                            <Badge className="w-fit font-mono text-[9px] tracking-[0.16em] uppercase">
                              Flagship
                            </Badge>
                          )}
                        </span>
                        <span className="flex items-center gap-3">
                          <span className="hidden text-sm text-muted-foreground sm:block">
                            {service.tagline}
                          </span>
                          <ArrowUpRight className="size-4 shrink-0 text-muted-foreground transition-all duration-300 group-hover:text-gold-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </span>
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------------------------------------------------------------------------
  Engagements section — the ways clients work with PI Locks, as ruled rows.
-------------------------------------------------------------------------- */
function EngagementsSection() {
  return (
    <section className="border-y border-border/60 bg-secondary/40 py-20 sm:py-28" aria-label="Engagement types">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Ways to work"
            title={
              <>
                Consult, build, retrofit, or{' '}
                <span className="display-accent">maintain.</span>
              </>
            }
            lede="However a project starts — with an idea, a drawing, an existing building, or an aging system — the finish is always the same."
          />
        </Reveal>

        <div className="mt-14 flex flex-col">
          {engagements.map((item, i) => (
            <Reveal
              key={item.name}
              delay={(i % 4) * 60}
              className={
                i > 0
                  ? 'flex flex-col gap-3 border-t border-border/60 py-7 sm:flex-row sm:items-baseline sm:gap-8'
                  : 'flex flex-col gap-3 py-7 sm:flex-row sm:items-baseline sm:gap-8'
              }
            >
              <span className="eyebrow w-28 shrink-0">
                MODE {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="display text-2xl sm:w-64 sm:shrink-0 sm:text-3xl">
                {item.name}
              </h3>
              <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
                {item.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function HomePage() {
  return (
    <>
      <Hero />
      <AuditableBand />
      <PartnersStrip />
      <ServicesSection />
      <StandardBand />
      <JourneySection />
      <EngagementsSection />
      <SectorsSection />
      <CalloutCTA />
    </>
  )
}