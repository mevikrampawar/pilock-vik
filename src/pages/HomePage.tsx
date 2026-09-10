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
import { serviceGroups } from '@/data/services'
import { engagements } from '@/data/content'

/* ---------------------------------------------------------------------------
  Hero — the brand's opening statement. Keyway emblem draws itself on load,
  then the headline, positioning line, CTAs, and capability strip rise in.
--------------------------------------------------------------------------- */
function Hero() {
  return (
    <section
      className="bg-blueprint relative overflow-hidden"
      aria-label="Introduction"
    >
      {/* Soft brass atmosphere behind the emblem. */}
      <div className="glow-brass absolute inset-0" />

      <div className="relative mx-auto grid w-full max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-8 lg:px-8 lg:py-24">
        <div className="flex flex-col items-start gap-7">
          <p className="eyebrow hero-veil flex items-center gap-3">
            <span aria-hidden className="inline-block size-1.5 rounded-full bg-brass" />
            S/N 001 — {site.category}
          </p>

          <h1 className="display hero-veil text-6xl text-balance sm:text-7xl lg:text-8xl [animation-delay:120ms]">
            Premium.
            <br />
            Secure.
            <br />
            <span className="text-brass">Delivered.</span>
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

          {/* Capability strip — the families this company installs end to end. */}
          <ul className="hero-veil mt-2 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[11px] tracking-[0.2em] text-muted-foreground uppercase [animation-delay:480ms]">
            <li className="flex items-center gap-6">
              <span className="text-brass">Access</span>
              <span aria-hidden className="hairline inline-block h-3 w-px bg-border" />
            </li>
            <li className="flex items-center gap-6">
              <span>CCTV</span>
              <span aria-hidden className="hairline inline-block h-3 w-px bg-border" />
            </li>
            <li className="flex items-center gap-6">
              <span>Intercom</span>
              <span aria-hidden className="hairline inline-block h-3 w-px bg-border" />
            </li>
            <li>Telephony</li>
            <li>PA</li>
            <li>Nursecall</li>
          </ul>
        </div>

        {/* Signature emblem — slow glow, self-drawing brass ring. */}
        <div className="relative mx-auto flex w-full max-w-lg items-center justify-center lg:max-w-none">
          <div className="glow-brass absolute inset-0 m-auto aspect-square size-[115%]" />
          <KeywayEmblem animated className="relative w-full max-w-[360px] lg:max-w-[440px]" />
        </div>
      </div>
    </section>
  )
}

/* ---------------------------------------------------------------------------
  Services section (home) — the full catalog as three group cards.
--------------------------------------------------------------------------- */
function ServicesSection() {
  return (
    <section className="py-20 sm:py-28" aria-label="Our services">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="What we do"
            title="One partner for the whole building"
            lede="Security, communications, and the backbone behind them — every service installed to the same premium standard, and every system able to talk to the rest."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {serviceGroups.map((group, groupIndex) => (
            <Reveal
              key={group.key}
              delay={groupIndex * 100}
              className="flex flex-col rounded-2xl border border-border/70 bg-card"
            >
              <div className="flex flex-col gap-3 border-b border-border/70 p-6">
                <p className="eyebrow">{group['S/N']} — {group.label}</p>
                <h3 className="display text-3xl">{group.name}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {group.blurb}
                </p>
              </div>

              <ul className="flex flex-1 flex-col">
                {group.services.map((service, i) => (
                  <li
                    key={service.slug}
                    className={i > 0 ? 'border-t border-border/70' : undefined}
                  >
                    <NavLink
                      to={`/services/${service.slug}`}
                      className="group flex items-start justify-between gap-4 p-6 transition-colors hover:bg-steel"
                    >
                      <span className="flex flex-col gap-2">
                        <span className="flex items-center gap-2">
                          <span className="display text-xl text-balance">
                            {service.shortName}
                          </span>
                          {service.flagship && (
                            <Badge className="font-mono text-[10px] tracking-[0.14em] uppercase">
                              Flagship
                            </Badge>
                          )}
                        </span>
                        <span className="text-sm leading-relaxed text-muted-foreground">
                          {service.tagline}
                        </span>
                      </span>
                      <ArrowUpRight className="mt-1 size-4 shrink-0 text-muted-foreground transition-all duration-300 group-hover:text-brass group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </NavLink>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------------------------------------------------------------------------
  Engagements section — the four ways clients work with PI Locks.
--------------------------------------------------------------------------- */
function EngagementsSection() {
  return (
    <section className="border-t border-border/60 bg-steel/30 py-20 sm:py-28" aria-label="Engagement types">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Ways to work"
            title="Consult, build, retrofit, or maintain"
            lede="However a project starts — with an idea, a drawing, an existing building, or an aging system — the finish is always the same."
          />
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border/60 bg-border/60 sm:grid-cols-2 lg:grid-cols-4">
          {engagements.map((item, i) => (
            <Reveal
              key={item.name}
              delay={(i % 4) * 80}
              className="flex flex-col gap-3 bg-card p-7 transition-colors duration-300 hover:bg-steel-2"
            >
              <span className="eyebrow">MODE {String(i + 1).padStart(2, '0')}</span>
              <h3 className="display text-2xl">{item.name}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
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