import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

import { Reveal } from '@/components/site/Reveal'
import { FilmStrip } from '@/components/site/FilmStrip'
import { Photo } from '@/components/site/Photo'
import { SectionHeading } from '@/components/site/SectionHeading'
import { PartnersStrip } from '@/components/site/PartnersStrip'
import { StandardBand } from '@/components/site/StandardBand'
import { JourneySection } from '@/components/site/JourneySection'
import { SectorsSection } from '@/components/site/SectorsSection'
import { CalloutCTA } from '@/components/site/CalloutCTA'
import { site } from '@/data/site'
import { serviceGroups, allServices } from '@/data/services'
import { partners, sectors, engagements } from '@/data/content'
import { media } from '@/data/media'

// The client's service families, stated as they talk about them.

/* ---------------------------------------------------------------------------
  Hero — the opening frame. Full-bleed photography after dark, the brand
  statement set over it in serif, and the capability families declared
  plainly beneath. Ride, drift, descend.
-------------------------------------------------------------------------- */
function Hero() {
  return (
    <section className="relative h-svh w-full flex flex-col justify-end" aria-label="Introduction">
      <Photo
        src={media.hero.src}
        alt=""
        kenburns
        grain
        className="absolute inset-0"
        aspect="auto"
        eager
      />
      {/* Heavy contrast gradient specifically for the hero to ensure text legibility */}
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-navy-950/95 via-navy-950/40 to-transparent pointer-events-none" aria-hidden />
      
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-20 sm:pb-32 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="display hero-veil text-[2.75rem] text-ivory-50 text-balance leading-[1.05] sm:text-6xl lg:text-[5.5rem] [animation-delay:120ms]">
            The standard behind every{' '}
            <span className="display-accent text-gold-400">secure door.</span>
          </h1>
          <p className="hero-veil mt-6 max-w-xl text-base leading-relaxed text-ivory-50/80 sm:text-lg [animation-delay:240ms]">
            {site.positioning}
          </p>
          <div className="hero-veil mt-10 flex flex-col gap-4 sm:flex-row sm:items-center [animation-delay:360ms]">
            <NavLink
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-gold-500 px-6 py-4 text-[15px] font-medium text-navy-950 transition-colors hover:bg-gold-600 shadow-xl"
            >
              {site.cta.primary}
              <ArrowRight className="size-4" />
            </NavLink>
            <NavLink
              to="/services"
              className="link-arrow self-start sm:self-auto ml-2 text-ivory-50 hover:text-gold-400"
            >
              Explore Services
              <ArrowRight className="size-4" />
            </NavLink>
          </div>
        </div>
      </div>

      {/* Scroll cue. */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 [animation-delay:600ms] hero-veil">
        <span className="font-mono text-[10px] tracking-widest text-ivory-50/50 uppercase">Scroll</span>
        <span className="block h-12 w-px bg-gradient-to-b from-gold-400/60 to-transparent" aria-hidden />
      </div>
    </section>
  )
}

/* ---------------------------------------------------------------------------
  Contact sheet — the craft, in plates. Photographic proof of the trade:
  readers, cameras, optics. Placeholder stock until owners' photography.
-------------------------------------------------------------------------- */
function ContactSheetSection() {
  return (
    <section className="py-20 sm:py-28" aria-label="The craft, up close">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="The craft, up close"
            title={
              <>
                Hardware you can <span className="display-accent">almost hear.</span>
              </>
            }
            lede="Readers, cameras, and optics — the quiet objects this business lives among. Every one installed to a documented, finished standard."
          />
        </Reveal>

        <Reveal delay={100} className="mt-14">
          <FilmStrip
            items={media.contactSheet.map((item) => ({
              src: item.src,
              alt: item.alt,
              tag: item.tag,
              caption: item.caption,
            }))}
          />
        </Reveal>
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
    <section className="border-y border-border/60 bg-secondary/40" aria-label="By the numbers">
      <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {figures.map((figure, i) => (
            <Reveal
              key={figure.label}
              delay={i * 80}
              className="flex flex-col gap-1.5"
            >
              <span className="display text-5xl text-gold-500">
                {String(figure.value).padStart(2, '0')}
                {figure.unit}
              </span>
              <span className="max-w-40 text-sm leading-snug text-muted-foreground">
                {figure.label}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceItem({ service, isFirst }: { service: any; isFirst: boolean }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <li
      className={isFirst ? undefined : 'border-t border-border/60'}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
    >
      <NavLink
        to={`/services/${service.slug}`}
        className="group flex flex-col gap-2 py-5 sm:py-6"
      >
        <div className="flex items-center justify-between gap-4">
          <span className="flex items-center gap-3">
            <span className="display text-xl sm:text-2xl text-balance transition-colors group-hover:text-gold-500">
              {service.shortName}
            </span>
            {service.flagship && (
              <span className="spec border border-gold-500/40 px-1.5 py-0.5 text-gold-500">
                Flagship
              </span>
            )}
          </span>
          <ArrowUpRight className="size-5 shrink-0 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold-500" />
        </div>
        
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <span className="block pt-2 text-base leading-[1.8] text-muted-foreground sm:max-w-md">
                {service.tagline}
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </NavLink>
    </li>
  )
}

/* ---------------------------------------------------------------------------
  Services section (home) — each family is a photographic plate: a frame on
  the left, the family's disciplines as a quiet letterpress list on the right.
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

        <div className="mt-16 flex flex-col gap-20">
          {serviceGroups.map((group, groupIndex) => {
            const family = media.families[
              group.key as keyof typeof media.families
            ]
            return (
              <Reveal
                key={group.key}
                className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16"
              >
                {/* Photographic plate. */}
                <div className={groupIndex % 2 === 1 ? 'lg:order-2' : undefined}>
                  <NavLink to={`/services#${group.key}`} className="group block">
                    <Photo
                      src={family.src}
                      alt={group.name}
                      aspect="4 / 3"
                      imgClassName="transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      className="photo-frame relative"
                    >
                      <span className="absolute right-3 top-3 z-10 flex size-10 items-center justify-center border border-ivory-50/30 bg-navy-900/40 backdrop-blur-sm">
                        <ArrowUpRight className="size-4 text-gold-400" />
                      </span>
                    </Photo>
                    <p className="spec mt-3 text-muted-foreground/80">{family.caption}</p>
                  </NavLink>
                </div>

                {/* Letterpress list. */}
                <div className={groupIndex % 2 === 1 ? 'lg:order-1' : undefined}>
                  <div className="flex flex-col gap-4">
                    <p className="display text-4xl text-gold-500/70">
                      {group['S/N'].replace('S/N ', '')}
                    </p>
                    <h3 className="display text-4xl sm:text-5xl">{group.name}</h3>
                    <p className="max-w-lg text-base leading-relaxed text-muted-foreground">
                      {group.blurb}
                    </p>
                  </div>
                  <ul className="mt-8 flex flex-col">
                    {group.services.map((service, i) => (
                      <ServiceItem key={service.slug} service={service} isFirst={i === 0} />
                    ))}
                  </ul>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ---------------------------------------------------------------------------
  Craft film — a quiet cinematic clip: a hand, a key, a locking door.
-------------------------------------------------------------------------- */
function CraftFilm() {
  return (
    <section className="bg-brand relative overflow-hidden py-20 sm:py-28" aria-label="The standard on film">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal className="flex flex-col items-start gap-5">
            <p className="eyebrow flex items-center gap-3 text-gold-500">
              <span aria-hidden className="inline-block h-px w-8 bg-gold-500" />
              On film
            </p>
            <h2 className="display max-w-lg text-4xl text-balance sm:text-5xl">
              The last thing a client <span className="display-accent">touches.</span>
            </h2>
            <p className="max-w-md text-base leading-relaxed text-muted-foreground">
              Every handover ends with a door that opens exactly when it
              should — and stays shut exactly when it must. That is the
              standard, and it is the same for all eleven disciplines.
            </p>
            <NavLink to="/about" className="link-arrow">
              Read the standard
              <ArrowUpRight className="size-4" />
            </NavLink>
          </Reveal>

          <Reveal delay={100}>
            <Photo
              src={media.film.craft.src}
              video
              videoProps={{ poster: media.film.craft.poster }}
              aspect="16 / 10"
              className="photo-frame relative"
            >
              <p className="spec self-start px-4 pb-4 text-ivory-50/70">
                {media.film.craft.caption}
              </p>
            </Photo>
          </Reveal>
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
    <section className="py-20 sm:py-28" aria-label="Engagement types">
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
              <span className="display text-lg text-gold-500/90">
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
      <ContactSheetSection />
      <AuditableBand />
      <PartnersStrip />
      <ServicesSection />
      <CraftFilm />
      <StandardBand />
      <JourneySection />
      <EngagementsSection />
      <SectorsSection />
      <CalloutCTA />
    </>
  )
}