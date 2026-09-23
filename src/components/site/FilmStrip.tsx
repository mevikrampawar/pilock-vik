import type { ComponentProps } from 'react'

import { cn } from '@/lib/utils'
import { Photo } from '@/components/site/Photo'

type FilmStripItem = {
  src: string
  alt?: string
  tag?: string
  caption?: string
  aspect?: string
}

type FilmStripProps = {
  items: FilmStripItem[]
  frames?: boolean
  className?: string
  containerClassName?: string
  captionClassName?: string
} & Pick<ComponentProps<'div'>, 'aria-label'>

/*
  FilmStrip — a swipeable contact-sheet band. Each still is a framed plate
  with a tiny mono tag and a serif caption, evoking a photographer's tapeback
  rather than a product grid.
*/
export function FilmStrip({
  items,
  frames = true,
  className,
  containerClassName,
  captionClassName,
  'aria-label': ariaLabel,
}: FilmStripProps) {
  return (
    <div
      className={cn('film-scroll', className)}
      aria-label={ariaLabel ?? 'Photographic contact sheet'}
    >
      {items.map((item, i) => (
        <figure
          key={`${item.src}-${i}`}
          className={cn('film-item flex flex-col gap-3', containerClassName)}
        >
          <Photo
            src={item.src}
            alt={item.alt ?? ''}
            aspect={item.aspect ?? '4 / 5'}
            wash={false}
            grain={false}
            imgClassName="transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            className={cn(frames && 'photo-frame')}
          />
          <figcaption
            className={cn(
              'flex flex-col gap-1.5 px-1',
              frames ? 'text-center' : undefined,
              captionClassName
            )}
          >
            {item.tag && <span className="spec">{item.tag}</span>}
            {item.caption && (
              <span className="display text-lg text-balance">{item.caption}</span>
            )}
          </figcaption>
        </figure>
      ))}
    </div>
  )
}