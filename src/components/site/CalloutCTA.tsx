import { NavLink } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

import { Photo } from '@/components/site/Photo'
import { Reveal } from '@/components/site/Reveal'
import { site } from '@/data/site'
import { media } from '@/data/media'

interface CalloutCTAProps {
  imageSrc?: string
  video?: boolean
  posterSrc?: string
  heading?: React.ReactNode
}

export function CalloutCTA({ 
  imageSrc = media.film.corridor.src, 
  video = true, 
  posterSrc = media.film.corridor.poster,
  heading
}: CalloutCTAProps = {}) {
  const defaultHeading = (
    <>
      Start your <span className="display-accent text-gold-400">technology journey.</span>
    </>
  )

  return (
    <section role="region" aria-label="Get started" className="relative">
      <Photo
        src={imageSrc}
        video={video}
        videoProps={video ? { poster: posterSrc } : undefined}
        grain
        className="min-h-[560px] sm:min-h-[620px]"
        aspect="auto"
      >
        <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-end px-4 pb-16 pt-28 sm:px-6 sm:pb-20 lg:px-8">
          <Reveal className="flex max-w-3xl flex-col items-start gap-6">
            <p className="spec flex items-center gap-3 text-gold-400">
              <span aria-hidden className="inline-block h-px w-8 bg-gold-400" />
              {site.tagline}
            </p>
            <h2 className="display max-w-2xl text-5xl text-ivory-50 text-balance sm:text-6xl lg:text-7xl">
              {heading || defaultHeading}
            </h2>
            <p className="max-w-2xl text-base leading-relaxed text-ivory-50/85 sm:text-lg">
              Tell us about your building and its people. We&rsquo;ll scope the
              right systems, price them honestly, and deliver to the standard —
              one partner, start to finish.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <NavLink
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-gold-500 px-5 py-3 text-sm font-medium text-navy-950 transition-colors hover:bg-gold-600"
              >
                {site.cta.primary}
                <ArrowRight className="size-4" />
              </NavLink>
              <NavLink
                to="/services"
                className="link-arrow text-ivory-50"
              >
                Explore Services
                <ArrowRight className="size-4" />
              </NavLink>
            </div>
            <p className="spec text-ivory-50/55">
              {site.responsePromise} · Media is licensed stock.
            </p>
          </Reveal>
        </div>
      </Photo>
    </section>
  )
}