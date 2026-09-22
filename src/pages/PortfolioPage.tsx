import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import { PageHeader } from '@/components/site/PageHeader'
import { Reveal } from '@/components/site/Reveal'
import { StandardBand } from '@/components/site/StandardBand'
import { CalloutCTA } from '@/components/site/CalloutCTA'
import { sectors, provenPackages } from '@/data/content'

/*
  PortfolioPage — capability showcase, not client references.
  Vertical filter tabs describe what we build per sector; the "typical
  scope" accordions name the systems. Real case studies replace these
  modules as projects complete, always with client permission.
*/
export function PortfolioPage() {
  return (
    <>
      <PageHeader
        eyebrow="Portfolio"
        title={
          <>
            Selected work &amp; <span className="display-accent">capabilities.</span>
          </>
        }
        lede="We publish case studies as installations complete — never invented. Until then, here is exactly what we build in each sector."
      />

      <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8" aria-label="Capability showcase">
        <Tabs defaultValue={sectors[0]?.key}>
          <TabsList className="mb-10 flex w-full flex-wrap justify-start gap-1">
            {sectors.map((sector) => (
              <TabsTrigger key={sector.key} value={sector.key}>
                {sector.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {sectors.map((sector, i) => (
            <TabsContent key={sector.key} value={sector.key} className="mt-0 flex flex-col gap-10">
              <Reveal className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-start">
                {/* What we build per vertical. */}
                <div className="flex flex-col gap-5 border border-border/60 bg-card p-8 sm:p-10">
                  <p className="eyebrow">Sector 0{i + 1}</p>
                  <h2 className="display text-4xl sm:text-5xl">{sector.name}</h2>
                  <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
                    {sector.short}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {sector.systems.map((system) => (
                      <span
                        key={system}
                        className="rounded-full border border-border/60 px-3 py-1.5 font-mono text-[11px] tracking-wide uppercase text-muted-foreground"
                      >
                        {system}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Typical scope, expandable. */}
                <div className="flex flex-col gap-5">
                  <h3 className="eyebrow flex items-center gap-3">
                    <span aria-hidden className="inline-block h-px w-6 bg-gold-500" />
                    Typical scope
                  </h3>
                  <Reveal delay={100}>
                    <Accordion type="single" collapsible className="w-full border border-border/60 bg-card px-6">
                      {(provenPackages[sector.key]?.systems ?? sector.systems).map(
                        (system) => (
                          <AccordionItem key={system} value={system}>
                            <AccordionTrigger className="text-left text-sm font-medium">
                              {system}
                            </AccordionTrigger>
                            <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                              Delivered on proven OEM platforms, fully programmed,
                              commissioned, and documented before handover — to
                              the PI Standard described below.
                            </AccordionContent>
                          </AccordionItem>
                        )
                      )}
                    </Accordion>
                  </Reveal>
                </div>
              </Reveal>
            </TabsContent>
          ))}
        </Tabs>
      </section>

      {/* First-projects frame — honest empty state until case studies exist. */}
      <section className="border-y border-border/60 bg-secondary/40 py-16 sm:py-20" aria-label="Upcoming case studies">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="flex flex-col items-start gap-5 border border-dashed border-border bg-card p-8 sm:p-12">
            <p className="eyebrow">Case studies</p>
            <h2 className="display text-3xl sm:text-4xl">
              The first projects will <span className="display-accent">land here.</span>
            </h2>
            <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
              As installations complete and clients grant permission, the
              showcase modules above become real case studies — project type,
              systems deployed, and location. Until then, the PI Standard band
              below is the anchor of our proof.
            </p>
          </Reveal>
        </div>
      </section>

      <StandardBand />
      <CalloutCTA />
    </>
  )
}