import {
  FileCheck,
  Headset,
  Layers,
  Ruler,
  Scale,
  ShieldCheck,
  type LucideIcon,
} from 'lucide-react'

import { standard } from '@/data/content'
import { Reveal } from '@/components/site/Reveal'
import { SectionHeading } from '@/components/site/SectionHeading'

const icons: Record<string, LucideIcon> = {
  'shield-check': ShieldCheck,
  'file-check': FileCheck,
  layers: Layers,
  headset: Headset,
  scale: Scale,
  ruler: Ruler,
}

export function StandardBand() {
  return (
    <section
      className="bg-blueprint relative overflow-hidden border-y border-border/60 bg-ink py-20 sm:py-28"
      aria-label="The PI Standard"
    >
      <div className="glow-brass pointer-events-none absolute inset-x-0 top-0 h-72" />
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Our Standard"
            title={
              <>
                No statistics. A <span className="text-brass">standard.</span>
              </>
            }
            lede="New companies don’t need invented numbers — they need proof you can audit. These six commitments are the PI Standard on every single project, from first consultation to lifetime support."
          />
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border/60 bg-border/60 sm:grid-cols-2 lg:grid-cols-3">
          {standard.map((item, i) => {
            const Icon = icons[item.icon]
            return (
              <Reveal
                key={item.title}
                delay={(i % 3) * 90}
                className="flex flex-col gap-4 bg-card p-7 transition-colors duration-300 hover:bg-steel-2"
              >
                <span className="flex size-11 items-center justify-center rounded-lg border border-brass/25 bg-brass-soft">
                  <Icon className="size-5 text-brass" />
                </span>
                <div className="flex flex-col gap-2">
                  <h3 className="display text-xl sm:text-2xl">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}