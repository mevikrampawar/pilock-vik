import { Link, NavLink, useParams } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, Check, Clock, FileCheck2, ShieldCheck } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

import { PageHeader } from '@/components/site/PageHeader'
import { Reveal } from '@/components/site/Reveal'
import { CalloutCTA } from '@/components/site/CalloutCTA'
import { NotFoundPage } from '@/pages/NotFoundPage'
import { allServices } from '@/data/services'
import { site } from '@/data/site'

/*
  ServiceDetailPage — the universal service template.
  Hero → intro → integration examples → partner brands → CTA → related
  services. All nine service pages share this single layout, sourced from
  the services data file (src/data/services.ts).
*/
export function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const service = allServices.find((s) => s.slug === slug)

  if (!service) {
    return <NotFoundPage />
  }

  // Related services = siblings in the same family, excluding this one.
  const related = allServices
    .filter((s) => s.slug !== service.slug)
    .slice(0, 3)

  return (
    <>
      <PageHeader
        eyebrow={service.flagship ? 'Flagship · Electronic Access' : 'Our Services'}
        title={service.name}
        lede={service.tagline}
      />

      <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <nav aria-label="Breadcrumb" className="mb-10">
          <Link
            to="/services"
            className="font-mono text-xs tracking-[0.18em] text-muted-foreground uppercase transition-colors hover:text-foreground"
          >
            ← All services
          </Link>
        </nav>

        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr]">
          {/* Main column — intro + integrations. */}
          <div className="flex flex-col gap-12">
            <Reveal className="flex flex-col gap-4">
              <p className="eyebrow flex items-center gap-3">
                <span aria-hidden className="inline-block size-1.5 rounded-full bg-brass" />
                Overview
              </p>
              <p className="max-w-2xl text-lg leading-relaxed text-foreground/90">
                {service.intro}
              </p>
            </Reveal>

            <Reveal className="flex flex-col gap-6">
              <h2 className="display text-3xl">Integrated with everything around it</h2>
              <ul className="flex flex-col gap-px overflow-hidden rounded-2xl border border-border/60 bg-border/60">
                {service.integrations.map((integration) => (
                  <li
                    key={integration}
                    className="flex items-start gap-3 bg-card p-5 transition-colors hover:bg-steel"
                  >
                    <Check className="mt-0.5 size-4 shrink-0 text-brass" />
                    <span className="text-sm leading-relaxed">{integration}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            {/* Trust cues — delivery promises tied to this service. */}
            <Reveal className="grid gap-4 sm:grid-cols-3">
              {[
                { icon: ShieldCheck, label: 'Accountable', body: 'One partner, full responsibility.' },
                { icon: FileCheck2, label: 'Documented', body: 'Tested, labelled, as-built.' },
                { icon: Clock, label: 'Supported', body: 'Responsive service after handover.' },
              ].map((cue) => (
                <div
                  key={cue.label}
                  className="flex flex-col gap-3 rounded-xl border border-border/60 bg-card p-5"
                >
                  <cue.icon className="size-5 text-brass" />
                  <div className="flex flex-col gap-1">
                    <span className="display text-lg">{cue.label}</span>
                    <span className="text-xs leading-relaxed text-muted-foreground">
                      {cue.body}
                    </span>
                  </div>
                </div>
              ))}
            </Reveal>
          </div>

          {/* Aside — partner brands + consult CTA. */}
          <aside className="flex flex-col gap-8 lg:sticky lg:top-24 lg:self-start">
            <Reveal className="flex flex-col gap-5 rounded-2xl border border-border/70 bg-card p-7">
              <p className="eyebrow flex items-center gap-3">
                <span aria-hidden className="inline-block size-1.5 rounded-full bg-brass" />
                Built on
              </p>
              {service.partners.length > 0 ? (
                <ul className="flex flex-col">
                  {service.partners.map((brand, i) => (
                    <li
                      key={brand}
                      className={i > 0 ? 'border-t border-border/60 pt-3 mt-3' : undefined}
                    >
                      <span className="display text-2xl">{brand}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Specified around your requirements and the platforms that fit
                  them — independent of any single manufacturer.
                </p>
              )}
              <Separator />
              <p className="text-xs leading-relaxed text-muted-foreground">
                Selected OEM platforms prove the ecosystem — verified status with
                each brand is confirmed per project.
              </p>
            </Reveal>

            <Reveal delay={100} className="flex flex-col gap-4 rounded-2xl border border-brass/25 bg-blueprint p-7">
              <p className="eyebrow">Next step</p>
              <h2 className="display text-2xl">Consult with us</h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Walk through your spaces with an integrator who owns the outcome.
                {site.responsePromise}
              </p>
              <Button asChild data-icon="inline-end">
                <NavLink to="/contact">
                  Start your project
                  <ArrowRight data-icon="inline-end" />
                </NavLink>
              </Button>
            </Reveal>
          </aside>
        </div>

        {/* Related services. */}
        <Reveal className="mt-20 border-t border-border/60 pt-14">
          <div className="flex items-end justify-between gap-6">
            <h2 className="display text-3xl">Keep exploring</h2>
            <Link
              to="/services"
              className="font-mono text-xs tracking-[0.18em] text-brass uppercase transition-colors hover:text-foreground"
            >
              All services
            </Link>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {related.map((s) => (
              <NavLink
                key={s.slug}
                to={`/services/${s.slug}`}
                className="group flex items-start justify-between gap-4 rounded-2xl border border-border/70 bg-card p-6 transition-colors duration-300 hover:border-brass/30"
              >
                <span className="flex flex-col gap-2">
                  <span className="display text-xl">{s.shortName}</span>
                  <span className="text-sm leading-relaxed text-muted-foreground">
                    {s.tagline}
                  </span>
                </span>
                <ArrowUpRight className="mt-1 size-4 shrink-0 text-muted-foreground transition-all duration-300 group-hover:text-brass group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </NavLink>
            ))}
          </div>
        </Reveal>
      </div>

      <CalloutCTA />
    </>
  )
}