import { NavLink } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

import { Button } from '@/components/ui/button'

import { PageHeader } from '@/components/site/PageHeader'
import { Reveal } from '@/components/site/Reveal'
import { SectionHeading } from '@/components/site/SectionHeading'
import { PartnersStrip } from '@/components/site/PartnersStrip'
import { KeywayEmblem } from '@/components/site/KeywayEmblem'
import { CalloutCTA } from '@/components/site/CalloutCTA'
import { site } from '@/data/site'
import { standard } from '@/data/content'

/*
  Team — role-based profiles per the content profile. Names are confirmed
  directly with clients, so roles carry the positioning instead.
*/
const team = [
  {
    role: 'Founder & Lead',
    body: 'Sets the standard, runs the pipeline, and owns every handover personally.',
  },
  {
    role: 'Project Lead',
    body: 'Designs the build, coordinates the trades, and drives each milestone to completion.',
  },
  {
    role: 'Service & Support',
    body: 'Keeps systems running after handover — responsive, logged, and accountable.',
  },
]

/*
  AboutPage — mission, founding story, the PI Standard, the team, and the
  partner ecosystem. Positioning-led, never fabrication.
*/
export function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Company"
        title={
          <>
            The standard, set <span className="display-accent">in full.</span>
          </>
        }
        lede="A team of experienced integrators who took on the job of running every installation to a premium finish — and stuck to it."
      />

      {/* Mission + founding story. */}
      <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8" aria-label="Who we are">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <p className="eyebrow flex items-center gap-3">
                <span aria-hidden className="inline-block h-px w-6 bg-gold-500" />
                Founding story
              </p>
              <h2 className="display text-4xl sm:text-5xl">
                A higher bar for systems <span className="display-accent">installation.</span>
              </h2>
            </div>
            <div className="flex flex-col gap-4 text-base leading-relaxed text-muted-foreground">
              <p>
                PI Locks was founded to set a higher bar for systems
                installation — a team of experienced integrators who take full
                accountability for design, installation, commissioning, and
                support, delivered to a premium standard on every project.
              </p>

              {/* The "PI" promise — what "premium" actually means here. */}
              <blockquote className="border-l-2 border-gold-500 bg-card px-6 py-6">
                <p className="text-sm leading-relaxed text-foreground/90">
                  “What does premium mean here? The system arrives fully
                  designed, installed, tested, documented, and commissioned —
                  ready to use on day one, and backed by responsive service long
                  after handover. No half-finished installations. No loose ends.
                  That&rsquo;s the PI Locks standard.”
                </p>
              </blockquote>
            </div>
          </Reveal>

          <Reveal delay={120} className="flex justify-center">
            <div className="relative flex items-center justify-center p-8">
              <div className="glow-brass absolute inset-0 m-auto aspect-square size-[120%]" />
              <KeywayEmblem className="relative w-full max-w-sm" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* The PI Standard — six commitments, no invented numbers. */}
      <section className="bg-brand border-y border-border/60 py-20 sm:py-28" aria-label="The PI Standard">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Our Standard"
              title={
                <>
                  Auditable proof, not <span className="display-accent">statistics.</span>
                </>
              }
              lede="A new company doesn’t need invented numbers — it needs a standard anyone can check. These six commitments hold on every project."
            />
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {standard.map((item, i) => (
              <Reveal
                key={item.title}
                delay={(i % 2) * 90}
                className="flex flex-col gap-3 border border-border/60 bg-card p-7 transition-colors duration-300 hover:bg-secondary"
              >
                <span className="eyebrow">P.I. {String(i + 1).padStart(2, '0')}</span>
                <h3 className="display text-2xl">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team roles. */}
      <section className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8" aria-label="Team">
        <Reveal>
          <SectionHeading
            eyebrow="The team"
            title={
              <>
                Roles we hold <span className="display-accent">the line with.</span>
              </>
            }
            lede="Every engagement is owned end to end — one accountable set of names, from first site visit to years later."
          />
        </Reveal>
        <div className="mt-14 flex flex-col">
          {team.map((member, i) => (
            <Reveal
              key={member.role}
              delay={i * 80}
              className={
                i > 0
                  ? 'flex flex-col gap-3 border-t border-border/60 py-7 sm:flex-row sm:items-baseline sm:gap-8'
                  : 'flex flex-col gap-3 py-7 sm:flex-row sm:items-baseline sm:gap-8'
              }
            >
              <span className="display w-56 shrink-0 text-xl text-gold-500 sm:text-2xl">
                {member.role}
              </span>
              <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
                {member.body}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <PartnersStrip />

      {/* Work with us CTA. */}
      <section className="border-t border-border/60 py-16" aria-label="Work with us">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-start gap-6 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="flex max-w-2xl flex-col gap-3">
            <h2 className="display text-4xl sm:text-5xl">
              Work with a partner who owns the <span className="display-accent">outcome.</span>
            </h2>
            <p className="text-muted-foreground">
              {site.responsePromise}
            </p>
          </div>
          <Button asChild size="lg" data-icon="inline-end">
            <NavLink to="/contact">
              Work with us
              <ArrowRight data-icon="inline-end" />
            </NavLink>
          </Button>
        </div>
      </section>

      <CalloutCTA />
    </>
  )
}