import { journey } from '@/data/content'
import { Reveal } from '@/components/site/Reveal'
import { SectionHeading } from '@/components/site/SectionHeading'

export function JourneySection() {
  return (
    <section className="py-20 sm:py-28" aria-label="Project journey">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="How it works"
            title={
              <>
                The journey of a <span className="display-accent">project.</span>
              </>
            }
            lede="Five steps, set up front so you always know what comes next — and what has been done. This is how a premium installation is actually run."
          />
        </Reveal>

        <ol className="mt-16 flex flex-col">
          {journey.map((step, i) => (
            <Reveal
              as="li"
              key={step.step}
              delay={i * 70}
              className={
                i > 0
                  ? 'flex flex-col gap-4 border-t border-border/60 py-8 lg:grid lg:grid-cols-[0.3fr_0.7fr_1.6fr] lg:items-baseline lg:gap-8'
                  : 'flex flex-col gap-4 py-8 lg:grid lg:grid-cols-[0.3fr_0.7fr_1.6fr] lg:items-baseline lg:gap-8'
              }
            >
              <span className="display text-4xl text-gold-500/80">{step.step}</span>
              <h3 className="display text-2xl sm:text-3xl">{step.title}</h3>
              <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
                {step.body}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}