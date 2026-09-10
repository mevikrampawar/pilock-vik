import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

import { Badge } from '@/components/ui/badge'

import { sectors } from '@/data/content'
import { Reveal } from '@/components/site/Reveal'
import { SectionHeading } from '@/components/site/SectionHeading'

export function SectorsSection() {
  return (
    <section
      className="border-t border-border/60 bg-steel/30 py-20 sm:py-28"
      aria-label="Sectors"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Sectors"
            title="Built for the places that can’t fail"
            lede="We build for the environments where systems simply have to work — capability, not client references. What we deliver in each."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {sectors.map((sector, i) => (
            <Reveal
              key={sector.key}
              delay={(i % 4) * 80}
              className="group flex flex-col gap-5 rounded-2xl border border-border/60 bg-card p-6 transition-colors duration-300 hover:border-brass/30"
            >
              <div className="flex items-center justify-between">
                <span className="eyebrow">SECTOR</span>
                <ArrowUpRight className="size-4 text-muted-foreground transition-all duration-300 group-hover:text-brass group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="display text-2xl sm:text-3xl">{sector.name}</h3>
                <p className="text-sm text-muted-foreground">{sector.short}</p>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {sector.systems.map((system) => (
                  <Badge key={system} variant="outline" className="font-mono text-[11px] font-normal uppercase tracking-wide">
                    {system}
                  </Badge>
                ))}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12">
          <Link
            to="/portfolio"
            className="group inline-flex items-center gap-2 font-mono text-sm tracking-wide text-brass transition-colors hover:text-foreground"
          >
            See typical scopes by sector
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}