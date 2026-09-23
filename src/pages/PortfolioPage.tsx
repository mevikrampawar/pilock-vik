import { useState } from 'react'
import { ChevronRight, TriangleAlert } from 'lucide-react'

import { PageHeader } from '@/components/site/PageHeader'
import { Photo } from '@/components/site/Photo'
import { Reveal } from '@/components/site/Reveal'
import { CalloutCTA } from '@/components/site/CalloutCTA'
import { sectors, provenPackages } from '@/data/content'
import { media } from '@/data/media'

/*
  PortfolioPage — a case-work index, honestly framed.
  With no completed client work to photograph yet, the page leads with the
  capability each sector receives: a photographic plate, the named systems,
  and the deliverables we produce there. Real project photography becomes
  the lead once projects complete.
*/
export function PortfolioPage() {
  const [activeKey, setActiveKey] = useState(sectors[0].key)
  const sector = sectors.find((s) => s.key === activeKey) ?? sectors[0]
  const shot = media.sectors[activeKey as keyof typeof media.sectors]

  const proven = provenPackages[activeKey]

  return (
    <>
      <PageHeader
        eyebrow="Case Studies"
        title={
          <>
            The sectors we <span className="display-accent">serve.</span>
          </>
        }
        lede="Every project raises the same question — what must this building's systems do, for the people inside it? The capability we deliver in each sector, stated plainly."
        image={media.sectors.commercial.src}
        note="Sector photography is licensed stock for review."
      />

      <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        {/* Sector switch — a ruled index, not a tab box. */}
        <nav
          aria-label="Sector"
          className="flex flex-wrap border-b border-border/60"
        >
          {sectors.map((s) => {
            const active = s.key === activeKey
            return (
              <button
                key={s.key}
                type="button"
                onClick={() => setActiveKey(s.key)}
                className={
                  active
                    ? 'group -mb-px flex items-center gap-3 border-b-2 border-gold-500 px-5 py-4 text-left transition-colors'
                    : 'group -mb-px flex items-center gap-3 border-b-2 border-transparent px-5 py-4 text-left text-muted-foreground transition-colors hover:text-foreground'
                }
                aria-current={active ? 'true' : undefined}
              >
                <span className="spec text-gold-500">
                  {String(sectors.findIndex((x) => x.key === s.key) + 1).padStart(2, '0')}
                </span>
                <span
                  className={
                    active
                      ? 'display text-2xl text-foreground sm:text-3xl'
                      : 'display text-2xl sm:text-3xl'
                  }
                >
                  {s.name}
                </span>
              </button>
            )
          })}
        </nav>

        {/* Active sector — plate on the left, delivery details on the right. */}
        <div key={activeKey} className="mt-12 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <Reveal className="flex flex-col gap-6">
            <Photo
              src={shot.src}
              alt={shot.alt}
              aspect="4 / 3"
              className="photo-frame relative"
            >
              <p className="spec self-start p-4 text-ivory-50/70">
                {sector.name} — {shot.alt}. (Licensed stock)
              </p>
            </Photo>

            <div className="flex flex-col gap-4">
              <h2 className="display text-3xl sm:text-4xl">
                {sector.name}
              </h2>
              <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
                {sector.short}
              </p>
            </div>

            {proven && (
              <div className="flex flex-col gap-4 border-l border-gold-500/40 pl-5">
                <p className="spec text-gold-500">Proven package</p>
                <ul className="flex flex-col gap-2">
                  {proven.systems.map((system) => (
                    <li
                      key={system}
                      className="flex items-start gap-3 text-sm leading-relaxed"
                    >
                      <ChevronRight className="mt-0.5 size-3.5 shrink-0 text-gold-500" />
                      {system}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </Reveal>

          <div className="flex flex-col gap-10">
            <Reveal delay={80} className="flex flex-col gap-6">
              <p className="eyebrow flex items-center gap-3 text-gold-500">
                <span aria-hidden className="inline-block h-px w-6 bg-gold-500" />
                Named systems
              </p>
              <div className="flex flex-wrap gap-2.5">
                {sector.systems.map((system) => (
                  <span
                    key={system}
                    className="border border-border/70 bg-card px-4 py-2.5 font-display text-sm font-light italic text-foreground/85"
                  >
                    {system}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={160} className="flex flex-col gap-6">
              <p className="eyebrow flex items-center gap-3 text-gold-500">
                <span aria-hidden className="inline-block h-px w-6 bg-gold-500" />
                Deliverables
              </p>
              <ul className="flex flex-col border-t border-border/60">
                {[
                  'Full design, installation, programming, and commissioning',
                  'As-built documentation and operator handover',
                  'Staff training and responsive service support',
                  'A single accountable partner across all systems',
                ].map((item, i) => (
                  <li
                    key={item}
                    className={
                      'flex items-center gap-3 border-b border-border/60 py-4 text-sm leading-relaxed'
                    }
                  >
                    <span className="spec w-8 shrink-0 text-gold-500">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>

        {/* Honest note — real photography lands as projects complete. */}
        <Reveal className="mt-16 flex items-start gap-4 border border-border/60 bg-secondary/40 p-6 sm:p-8">
          <TriangleAlert className="mt-0.5 size-5 shrink-0 text-gold-500" />
          <div className="flex flex-col gap-2">
            <p className="display text-xl">
              Photography of completed projects is on its way.
            </p>
            <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
              We&rsquo;re not inventing a portfolio — these sector plates are
              licensed stock marks until owners&rsquo; project photography
              lands. That choice keeps the first real case studies honest.
            </p>
          </div>
        </Reveal>
      </div>

      <CalloutCTA />
    </>
  )
}