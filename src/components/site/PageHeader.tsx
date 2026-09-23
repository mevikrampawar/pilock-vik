import type { ReactNode } from 'react'

import { KeywayEmblem } from '@/components/site/KeywayEmblem'
import { Photo } from '@/components/site/Photo'

/*
  PageHeader — shared interior hero.
  With an image it becomes a full-bleed photograph overlaid with the page
  title. Without one it falls back to the midnight surface with a faint
  keyway watermark. Either way: serif italic eyebrow, big display H1.
*/
type PageHeaderProps = {
  eyebrow: string
  title: ReactNode
  lede?: string
  /** Photo subject. Presence switches the header to the photographic mode. */
  image?: string
  /** Optional provenance note, e.g. a licensed-stock disclosure. */
  note?: string
  emblem?: boolean
}

export function PageHeader({ eyebrow, title, lede, image, note, emblem = true }: PageHeaderProps) {
  if (image) {
    return (
      <section className="relative" aria-label="Page header">
        <Photo
          src={image}
          alt=""
          grain
          className="hero-stage flex items-end"
          aspect="auto"
          eager
        >
          <div className="mx-auto w-full max-w-7xl px-4 pb-12 pt-28 sm:px-6 sm:pb-16 lg:px-8">
            <p className="spec flex items-center gap-3 text-gold-400">
              <span aria-hidden className="inline-block h-px w-8 bg-gold-400" />
              {eyebrow}
            </p>
            <h1 className="display mt-5 max-w-3xl text-5xl text-ivory-50 text-balance sm:text-6xl lg:text-7xl">
              {title}
            </h1>
            {lede && (
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-ivory-50/85 sm:text-lg">
                {lede}
              </p>
            )}
            {note && <p className="spec mt-6 text-ivory-50/55">{note}</p>}
          </div>
        </Photo>
      </section>
    )
  }

  return (
    <section className="bg-brand relative overflow-hidden pt-24" aria-label="Page header">
      <div className="glow-brass absolute inset-x-0 -top-20 h-72" />
      {emblem && (
        <KeywayEmblem className="pointer-events-none absolute -right-16 -top-20 hidden w-72 opacity-25 lg:block" />
      )}
      <div className="relative mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <p className="eyebrow flex items-center gap-3 text-gold-500">
          <span aria-hidden className="inline-block h-px w-8 bg-gold-500" />
          {eyebrow}
        </p>
        <h1 className="display mt-5 max-w-3xl text-5xl text-balance sm:text-6xl lg:text-7xl">
          {title}
        </h1>
        {lede && (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {lede}
          </p>
        )}
      </div>
    </section>
  )
}