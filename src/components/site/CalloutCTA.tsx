import { NavLink } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

import { Button } from '@/components/ui/button'

import { KeywayEmblem } from '@/components/site/KeywayEmblem'
import { Reveal } from '@/components/site/Reveal'
import { site } from '@/data/site'

export function CalloutCTA() {
  return (
    <section aria-label="Get started" className="bg-brand relative overflow-hidden">
      <div className="glow-brass absolute inset-x-0 bottom-0 h-96" />
      <KeywayEmblem className="pointer-events-none absolute -right-24 -top-24 size-96 opacity-30" />

      <div className="relative mx-auto flex w-full max-w-7xl flex-col items-start gap-8 px-4 py-20 sm:px-6 sm:py-28 lg:items-center lg:px-8 lg:text-center">
        <Reveal className="flex flex-col items-start gap-6 lg:items-center">
          <p className="eyebrow flex items-center gap-3">
            <span aria-hidden className="inline-block h-px w-8 bg-gold-500" />
            {site.tagline}
          </p>
          <h2 className="display max-w-3xl text-5xl text-balance sm:text-6xl lg:text-7xl">
            Start your <span className="display-accent">technology journey.</span>
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Tell us about your building and its people. We&rsquo;ll scope the
            right systems, price them honestly, and deliver to the standard —
            one partner, start to finish.
          </p>
        </Reveal>
        <Reveal delay={120} className="flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg" data-icon="inline-end">
            <NavLink to="/contact">
              {site.cta.primary}
              <ArrowRight data-icon="inline-end" />
            </NavLink>
          </Button>
          <Button asChild size="lg" variant="outline" data-icon="inline-end">
            <NavLink to="/services">
              Explore Services
              <ArrowRight data-icon="inline-end" />
            </NavLink>
          </Button>
        </Reveal>
        <Reveal delay={200}>
          <p className="font-mono text-[11px] tracking-[0.2em] text-muted-foreground uppercase">
            {site.responsePromise}
          </p>
        </Reveal>
      </div>
    </section>
  )
}