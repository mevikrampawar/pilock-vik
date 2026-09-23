import { useRef, type ComponentProps, type CSSProperties, type ReactNode } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { cn } from '@/lib/utils'
import { asset } from '@/data/media'

type PhotoProps = {
  src: string
  alt?: string
  video?: boolean
  videoProps?: ComponentProps<'video'>
  aspect?: string
  className?: string
  imgClassName?: string
  children?: ReactNode
  grade?: boolean
  kenburns?: boolean
  grain?: boolean
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
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  // Subtle scroll-linked parallax (scale down and slightly translate)
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1.15])
  const y = useTransform(scrollYProgress, [0, 1], ['-5%', '5%'])

  return (
    <figure
      ref={containerRef}
      className={cn(
        'media overflow-hidden relative aspect-square md:aspect-auto',
        grain && 'grain',
        kenburns && 'kenburns',
        className
      )}
      style={{ aspectRatio: aspect, ...style }}
    >
      <motion.div
        className="absolute inset-0 size-full"
        style={{ scale, y }}
        transition={{ ease: 'linear' }}
      >
        {video ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            disablePictureInPicture
            tabIndex={-1}
            className={cn('size-full object-cover', grade && 'media-grade', imgClassName)}
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
            className={cn('size-full object-cover', grade && 'media-grade', imgClassName)}
            style={imgStyle}
          />
        )}
      </motion.div>
      {wash && <i className="media-wash absolute inset-0 block pointer-events-none" aria-hidden />}
      {children && (
        <figcaption className="relative z-10 flex h-full flex-col justify-end pointer-events-none">
          {children}
        </figcaption>
      )}
    </figure>
  )
}
