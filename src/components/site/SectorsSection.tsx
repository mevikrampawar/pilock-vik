import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

import { sectors } from '@/data/content'
import { Reveal } from '@/components/site/Reveal'
import { SectionHeading } from '@/components/site/SectionHeading'

export function SectorsSection() {
  return (
    <section
      className="border-b border-border/60 bg-secondary/40 py-20 sm:py-28"
      aria-label="Sectors"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Sectors"
            title={
              <>
                Built for the places that{' '}
                <span className="display-accent">can&rsquo;t fail.</span>
              </>
            }
            lede="We build for the environments where systems simply have to work — capability, not client references. What we deliver in each."
          />
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden border border-border/60 bg-border/60 sm:grid-cols-2 lg:grid-cols-4">
          {sectors.map((sector, i) => (
            <Reveal
              key={sector.key}
              delay={(i % 4) * 80}
              className="group flex flex-col gap-6 bg-card p-7 transition-colors duration-300 hover:bg-secondary"
            >
              <div className="flex items-start justify-between">
                <span className="display text-3xl text-gold-500/80">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <ArrowUpRight className="size-4 text-muted-foreground transition-all duration-300 group-hover:text-gold-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="display text-2xl sm:text-3xl">{sector.name}</h3>
                <p className="text-sm text-muted-foreground">{sector.short}</p>
              </div>
              <div className="flex flex-wrap gap-1.5 border-t border-border/50 pt-5">
                {sector.systems.map((system) => (
                  <span
                    key={system}
                    className="rounded-full border border-border/60 px-2.5 py-1 font-mono text-[10px] tracking-wide uppercase text-muted-foreground"
                  >
                    {system}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12">
          <Link
            to="/portfolio"
            className="group inline-flex items-center gap-2 font-mono text-sm tracking-wide text-gold-500 transition-colors hover:text-foreground"
          >
            See typical scopes by sector
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}