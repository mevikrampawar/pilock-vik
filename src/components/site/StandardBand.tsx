import { Photo } from '@/components/site/Photo'
import { Reveal } from '@/components/site/Reveal'
import { standard } from '@/data/content'
import { media } from '@/data/media'

/*
  StandardBand — the anchor of the brand's proof, on the midnight surface.
  A photographic plate of the hardware alongside the six commitments as
  ruled rows with gold indices. Auditable, editorial, physical.
*/
export function StandardBand() {
  return (
    <section
      className="bg-brand relative overflow-hidden border-y border-border/60 py-20 sm:py-28"
      aria-label="The PI Standard"
    >
      <div className="glow-brass pointer-events-none absolute inset-x-0 top-0 h-80" />
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-20">
          <Reveal className="flex flex-col gap-8">
            <Photo
              src={media.standard.src}
              alt="White security cameras and smart devices on a dark surface"
              aspect="4 / 5"
              className="photo-frame relative order-1"
            />
            <div className="order-2 flex flex-col gap-6">
              <p className="eyebrow flex items-center gap-3 text-gold-500">
                <span aria-hidden className="inline-block h-px w-6 bg-gold-500" />
                The PI Standard
              </p>
              <h2 className="display max-w-md text-4xl sm:text-5xl">
                No statistics. A <span className="display-accent">standard.</span>
              </h2>
              <p className="max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
                New companies don&rsquo;t need invented numbers — they need
                proof you can audit. These six commitments hold on every
                project, from first consultation to lifetime support.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120} className="lg:pt-2">
            <ul className="flex flex-col">
              {standard.map((item, i) => (
                <Reveal
                  key={item.title}
                  as="li"
                  className={
                    i > 0
                      ? 'flex flex-col gap-2 border-t border-border/50 py-6 sm:flex-row sm:items-baseline sm:gap-8'
                      : 'flex flex-col gap-2 py-6 sm:flex-row sm:items-baseline sm:gap-8'
                  }
                >
                  <span className="spec w-16 shrink-0 text-gold-500">
                    P.I. {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="flex flex-col gap-1.5 sm:flex-row sm:gap-8">
                    <h3 className="display text-xl sm:w-64 sm:shrink-0">
                      {item.title}
                    </h3>
                    <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
                      {item.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </ul>
            <p className="spec mt-6 border-l border-gold-500/40 pl-4 text-muted-foreground/80">
              Hardware shown is licensed stock — owners&rsquo; installation
              photography follows as projects complete.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}