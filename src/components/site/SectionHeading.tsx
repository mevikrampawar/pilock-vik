import type { ReactNode } from 'react'

import { cn } from '@/lib/utils'

type SectionHeadingProps = {
  eyebrow: string
  title: ReactNode
  lede?: string
  align?: 'left' | 'center'
  className?: string
}

/*
  SectionHeading — the editorial section intro: a gold rule + mono eyebrow,
  a serif display title, and an optional lede. Quiet, with plenty of air.
*/
export function SectionHeading({
  eyebrow,
  title,
  lede,
  align = 'left',
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'flex flex-col gap-5',
        align === 'center' && 'items-center text-center',
        className
      )}
    >
      <p className="eyebrow flex items-center gap-3">
        <span aria-hidden className="inline-block h-px w-6 bg-gold-500" />
        {eyebrow}
      </p>
      <h2 className="display max-w-2xl text-4xl sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {lede && (
        <p
          className={cn(
            'max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg',
            align === 'center' && 'mx-auto'
          )}
        >
          {lede}
        </p>
      )}
    </div>
  )
}