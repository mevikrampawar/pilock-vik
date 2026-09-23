import type { ComponentProps, CSSProperties, ReactNode } from 'react'

import { cn } from '@/lib/utils'
import { asset } from '@/data/media'

/*
  Photo — one art-directed frame. Puts any image or video clip through
  the brand's photographic treatment: navy wash, unified grade, film grain,
  optional ken-burns drift. Markup stays in the page; this component owns
  the treatment rules.
*/

type PhotoProps = {
  src: string
  alt?: string
  video?: boolean
  /** Extra attrs for <video> (e.g. poster). */
  videoProps?: ComponentProps<'video'>
  aspect?: string
  className?: string
  imgClassName?: string
  /** Content layered above the wash (captions, labels). */
  children?: ReactNode
  /** Unify the colour palette across stock frames. */
  grade?: boolean
  /** Slow cinematic drift (hero). */
  kenburns?: boolean
  grain?: boolean
  /** Navy wash at the bottom for legible overlay text. */
  wash?: boolean
  eager?: boolean
  style?: CSSProperties
  imgStyle?: CSSProperties
}

export function Photo({
  src,
  alt = '',
  video = false,
  videoProps,
  aspect,
  className,
  imgClassName,
  children,
  grade = true,
  kenburns = false,
  grain = true,
  wash = true,
  eager = false,
  style,
  imgStyle,
}: PhotoProps) {
  return (
    <figure
      className={cn('media', grain && 'grain', kenburns && 'kenburns', className)}
      style={{ aspectRatio: aspect, ...style }}
    >
      {video ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          disablePictureInPicture
          tabIndex={-1}
          className={cn(grade && 'media-grade', imgClassName)}
          preload={eager ? 'auto' : 'metadata'}
          {...videoProps}
          poster={videoProps?.poster ? asset(videoProps.poster) : undefined}
        >
          <source src={asset(src)} type="video/mp4" />
        </video>
      ) : (
        <img
          src={asset(src)}
          alt={alt}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          className={cn(grade && 'media-grade', imgClassName)}
          style={imgStyle}
        />
      )}
      {wash && <i className="media-wash absolute inset-0 block" aria-hidden />}
      {children && (
        <figcaption className="relative z-10 flex h-full flex-col justify-end">
          {children}
        </figcaption>
      )}
    </figure>
  )
}