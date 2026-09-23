import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

import { Photo } from '@/components/site/Photo'
import { Reveal } from '@/components/site/Reveal'
import { SectionHeading } from '@/components/site/SectionHeading'
import { sectors } from '@/data/content'
import { media } from '@/data/media'

/*
  SectorsSection — every sector is a photograph with an index, a name, and
  the systems named beneath on hover. Proof of scope, framed like plates.
*/
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

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {sectors.map((sector, i) => {
            const shot = media.sectors[sector.key as keyof typeof media.sectors]
            return (
              <Reveal
                key={sector.key}
                delay={(i % 4) * 80}
                as="div"
                className="group relative"
              >
                <Link to="/portfolio" className="block">
                  <Photo
                    src={shot.src}
                    alt={shot.alt}
                    aspect="3 / 4"
                    imgClassName="transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                  >
                    <div className="flex flex-col gap-2 p-5">
                      <div className="flex items-center justify-between">
                        <span className="spec text-gold-400">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <ArrowUpRight className="size-4 text-ivory-50/70 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold-400" />
                      </div>
                      <h3 className="display mt-6 text-2xl text-ivory-50">
                        {sector.name}
                      </h3>
                      <p className="text-sm leading-relaxed text-ivory-50/80">
                        {sector.short}
                      </p>
                      <ul className="mt-3 hidden flex-col gap-1.5 border-t border-ivory-50/15 pt-3 md:flex">
                        {sector.systems.slice(0, 3).map((system) => (
                          <li key={system} className="font-display text-xs font-light italic text-ivory-50/70">
                            {system}
                          </li>
                        ))}
                        {sector.systems.length > 3 && (
                          <li className="spec text-gold-400">
                            +{sector.systems.length - 3} more
                          </li>
                        )}
                      </ul>
                    </div>
                  </Photo>
                </Link>
              </Reveal>
            )
          })}
        </div>

        <Reveal className="mt-12">
          <Link to="/portfolio" className="link-arrow">
            See typical scopes by sector
            <ArrowUpRight className="size-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}