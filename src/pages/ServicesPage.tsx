import { NavLink } from 'react-router-dom'
import { ArrowRight, ArrowUpRight } from 'lucide-react'

import { PageHeader } from '@/components/site/PageHeader'
import { Photo } from '@/components/site/Photo'
import { Reveal } from '@/components/site/Reveal'
import { CalloutCTA } from '@/components/site/CalloutCTA'
import { serviceGroups, flagshipService, allServices } from '@/data/services'
import { media, serviceMedia } from '@/data/media'

/*
  ServicesPage — the full catalog index.
  Families open with a photographic plate, then list each discipline as a
  photo-topped tile. The flagship offer is stated first, plainly.
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
        image={media.families['security-access'].src}
        note="Photography is licensed stock for review."
      />

      {/* Flagship callout — the offer the PI Locks name stands on. */}
      {flagshipService && (
        <section className="border-b border-border/60" aria-label="Flagship service">
          <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
            <Reveal className="grid gap-8 lg:grid-cols-[1.4fr_0.6fr] lg:items-end">
              <div className="flex flex-col gap-5">
                <p className="spec w-fit border border-gold-500/40 px-2 py-1 text-gold-500">
                  The PI Locks specialty
                </p>
                <h2 className="display max-w-xl text-4xl sm:text-5xl">
                  {flagshipService.name}
                </h2>
                <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
                  {flagshipService.intro}
                </p>
              </div>
              <NavLink to={`/services/${flagshipService.slug}`} className="link-arrow w-fit">
                View service
                <ArrowRight className="size-4" />
              </NavLink>
            </Reveal>
          </div>
        </section>
      )}

      {/* Each service family as its own anchored section. */}
      {serviceGroups.map((group, groupIndex) => {
        const family = media.families[group.key as keyof typeof media.families]
        return (
          <section
            key={group.key}
            id={group.key}
            className={groupIndex > 0 ? 'border-t border-border/60' : undefined}
            aria-label={group.name}
          >
            <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
              <Reveal className="grid gap-10 lg:grid-cols-[0.14fr_1fr_0.9fr] lg:items-center lg:gap-10">
                <span className="display text-4xl text-gold-500/80">
                  {group['S/N'].replace('S/N ', '')}
                </span>
                <div className="flex flex-col gap-4">
                  <p className="eyebrow flex items-center gap-3 text-gold-500">
                    <span aria-hidden className="inline-block h-px w-6 bg-gold-500" />
                    {group.label}
                  </p>
                  <h2 className="display text-3xl sm:text-4xl">{group.name}</h2>
                  <p className="max-w-2xl text-muted-foreground">{group.blurb}</p>
                </div>
                <Photo
                  src={family.src}
                  alt={group.name}
                  aspect="4 / 3"
                  className="hidden photo-frame relative lg:block"
                >
                  <p className="spec self-start p-3 text-ivory-50/70">{family.caption}</p>
                </Photo>
              </Reveal>

              <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {group.services.map((service, i) => (
                  <Reveal
                    key={service.slug}
                    delay={(i % 3) * 80}
                    className="group flex flex-col"
                  >
                    <NavLink to={`/services/${service.slug}`} className="flex h-full flex-col">
                      <Photo
                        src={serviceMedia[service.slug] ?? media.families['security-access'].src}
                        alt=""
                        aspect="16 / 10"
                        imgClassName="transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                      >
                        <span className="absolute right-3 top-3 z-10 flex size-9 items-center justify-center border border-ivory-50/30 bg-navy-900/40 backdrop-blur-sm">
                          <ArrowUpRight className="size-4 text-gold-400" />
                        </span>
                      </Photo>
                      <div className="flex flex-1 flex-col justify-between gap-3 border-x border-b border-border/60 bg-card p-6 transition-colors duration-500 group-hover:bg-secondary/80">
                        <div className="flex flex-col gap-2">
                          <div className="flex items-center justify-between gap-4">
                            <h3 className="display text-2xl sm:text-3xl">
                              {service.name}
                            </h3>
                          </div>
                          <p className="text-sm leading-relaxed text-muted-foreground">
                            {service.tagline}
                          </p>
                        </div>
                        <span className="mt-4 inline-flex items-center gap-2 font-display text-sm font-light italic text-gold-500">
                          Read more
                          <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                        </span>
                      </div>
                    </NavLink>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        )
      })}

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
            <NavLink to="/contact" className="link-arrow w-fit">
              Consult with us
              <ArrowRight className="size-4" />
            </NavLink>
          </Reveal>
        </div>
      </section>

      <CalloutCTA 
        imageSrc="media/blueprint.jpg" 
        video={false} 
        heading={
          <>
            Ready to <span className="display-accent text-gold-400">get specific?</span>
          </>
        }
      />
    </>
  )
}