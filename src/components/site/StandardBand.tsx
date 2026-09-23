import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Photo } from '@/components/site/Photo'
import { Reveal } from '@/components/site/Reveal'
import { standard } from '@/data/content'
import { media } from '@/data/media'

export function StandardBand() {
  const containerRef = useRef<HTMLElement>(null)

  return (
    <section
      ref={containerRef}
      className="bg-brand relative overflow-hidden border-y border-border/60"
      aria-label="The PI Standard"
    >
      <div className="glow-brass pointer-events-none absolute inset-x-0 top-0 h-80" />
      
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-20 pb-32">
          
          {/* Sticky left panel */}
          <div className="lg:sticky lg:top-32 lg:h-[calc(100vh-16rem)] flex flex-col gap-8 pt-20 sm:pt-28">
            <Reveal className="flex flex-col gap-6 order-2 lg:order-1">
              <p className="eyebrow flex items-center gap-3 text-gold-500">
                <span aria-hidden className="inline-block h-px w-6 bg-gold-500" />
                The PI Standard
              </p>
              <h2 className="display max-w-md text-4xl sm:text-5xl">
                No statistics. A <span className="display-accent">standard.</span>
              </h2>
              <p className="max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg text-balance">
                New companies don&rsquo;t need invented numbers — they need
                proof you can audit. These six commitments hold on every
                project, from first consultation to lifetime support.
              </p>
            </Reveal>

            <Reveal className="order-1 lg:order-2">
              <Photo
                src={media.standard.src}
                alt="White security cameras and smart devices on a dark surface"
                aspect="4 / 5"
                className="photo-frame relative w-full h-[40vh] lg:h-auto"
              />
            </Reveal>
          </div>

          {/* Scrolling right panel */}
          <div className="lg:pt-32 pb-20 sm:pb-28">
            <ul className="flex flex-col gap-32">
              {standard.map((item, i) => (
                <ListItem key={item.title} item={item} index={i} />
              ))}
            </ul>
            <p className="spec mt-24 border-l border-gold-500/40 pl-4 text-muted-foreground/80">
              Hardware shown is licensed stock — owners&rsquo; installation
              photography follows as projects complete.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function ListItem({ item, index }: { item: any; index: number }) {
  const ref = useRef<HTMLLIElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center center'],
  })
  
  const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1])
  const y = useTransform(scrollYProgress, [0, 1], [40, 0])

  return (
    <motion.li
      ref={ref}
      style={{ opacity, y }}
      className="flex flex-col gap-4 border-t border-border/50 pt-8 sm:flex-row sm:items-baseline sm:gap-8 will-change-transform"
    >
      <span className="spec w-16 shrink-0 text-gold-500">
        P.I. {String(index + 1).padStart(2, '0')}
      </span>
      <div className="flex flex-col gap-2 sm:gap-4">
        <h3 className="display text-2xl sm:text-3xl">
          {item.title}
        </h3>
        <p className="max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
          {item.body}
        </p>
      </div>
    </motion.li>
  )
}
