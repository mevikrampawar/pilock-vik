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
            title="The journey of a project"
            lede="Five steps, set up front so you always know what comes next — and what has been done. This is how a premium installation is actually run."
          />
        </Reveal>

        <ol className="mt-14 grid gap-6 lg:grid-cols-5 lg:gap-0">
          {journey.map((step, i) => (
            <Reveal
              as="li"
              key={step.step}
              delay={i * 90}
              className="group relative flex flex-col gap-4 lg:px-5 lg:first:pl-0 lg:last:pr-0"
            >
              {i < journey.length - 1 && (
                <span
                  aria-hidden
                  className="absolute right-0 top-6 hidden h-px w-full bg-gradient-to-r from-border via-border to-transparent lg:block"
                />
              )}
              <span className="eyebrow font-semibold">{step.step}</span>
              <h3 className="display text-2xl">{step.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {step.body}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}