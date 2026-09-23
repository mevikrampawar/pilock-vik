import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import { journey } from '@/data/content'
import { Reveal } from '@/components/site/Reveal'
import { SectionHeading } from '@/components/site/SectionHeading'

export function JourneySection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

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

        <div className="mt-16 flex flex-col">
          {journey.map((step, i) => {
            const isOpen = openIndex === i
            return (
              <Reveal
                key={step.step}
                delay={i * 70}
                className={
                  i > 0
                    ? 'border-t border-border/60'
                    : ''
                }
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="group flex w-full items-center justify-between gap-4 py-8 text-left outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-6 sm:gap-10">
                    <span className="display text-4xl text-gold-500/80 transition-colors group-hover:text-gold-500">
                      {step.step}
                    </span>
                    <h3 className="display text-2xl sm:text-3xl transition-colors group-hover:text-gold-400">
                      {step.title}
                    </h3>
                  </div>
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-full border border-border/60 transition-colors group-hover:border-gold-500/50 group-hover:bg-gold-500/10">
                    {isOpen ? (
                      <Minus className="size-5 text-gold-500" />
                    ) : (
                      <Plus className="size-5 text-muted-foreground transition-colors group-hover:text-gold-400" />
                    )}
                  </div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-8 pl-[4.5rem] sm:pl-[6.5rem] max-w-3xl text-base sm:text-lg leading-[1.8] text-muted-foreground">
                        {step.body}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
