import type { ReactNode } from 'react'

import { KeywayEmblem } from '@/components/site/KeywayEmblem'

/*
  PageHeader — shared hero band for interior pages: mono eyebrow,
  display H1, optional lede, and a watermark emblem on the right.
*/
type PageHeaderProps = {
  eyebrow: string
  title: ReactNode
  lede?: string
  emblem?: boolean
}

export function PageHeader({ eyebrow, title, lede, emblem = true }: PageHeaderProps) {
  return (
    <section className="bg-blueprint relative overflow-hidden" aria-label="Page header">
      <div className="glow-brass absolute inset-x-0 -top-16 h-64" />
      {emblem && (
        <KeywayEmblem className="pointer-events-none absolute -right-16 -top-20 hidden w-72 opacity-30 lg:block" />
      )}
      <div className="relative mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <p className="eyebrow flex items-center gap-3">
          <span aria-hidden className="inline-block size-1.5 rounded-full bg-brass" />
          {eyebrow}
        </p>
        <h1 className="display mt-4 max-w-3xl text-5xl text-balance sm:text-6xl lg:text-7xl">
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