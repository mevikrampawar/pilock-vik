import { standard } from '@/data/content'
import { Reveal } from '@/components/site/Reveal'

/*
  StandardBand — the anchor of the brand's proof, on the navy surface.
  A serif pull-quote for the "no invented numbers" argument, then the six
  commitments as ruled rows with gold P.I. indices. Editorial, auditable.
*/
export function StandardBand() {
  return (
    <section
      className="bg-brand relative overflow-hidden border-y border-border/60 py-20 sm:py-28"
      aria-label="The PI Standard"
    >
      <div className="glow-brass pointer-events-none absolute inset-x-0 top-0 h-80" />
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-start lg:gap-20">
          <div className="flex flex-col gap-6">
            <p className="eyebrow flex items-center gap-3">
              <span aria-hidden className="inline-block h-px w-6 bg-gold-500" />
              The PI Standard
            </p>
            <h2 className="display max-w-md text-4xl sm:text-5xl">
              No statistics. A <span className="display-accent">standard.</span>
            </h2>
            <p className="max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
              New companies don&rsquo;t need invented numbers — they need proof
              you can audit. These six commitments hold on every project, from
              first consultation to lifetime support.
            </p>
          </div>

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
                <span className="eyebrow w-16 shrink-0">
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
        </Reveal>
      </div>
    </section>
  )
}