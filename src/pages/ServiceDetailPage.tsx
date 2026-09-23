import { Link, NavLink, useParams } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, Check, Clock, FileCheck2, ShieldCheck } from 'lucide-react'

import { PageHeader } from '@/components/site/PageHeader'
import { Photo } from '@/components/site/Photo'
import { Reveal } from '@/components/site/Reveal'
import { CalloutCTA } from '@/components/site/CalloutCTA'
import { NotFoundPage } from '@/pages/NotFoundPage'
import { allServices } from '@/data/services'
import { serviceMedia, media } from '@/data/media'
import { site } from '@/data/site'

/*
  ServiceDetailPage — the universal service template.
  Photo hero → intro → integration examples → partner brands → CTA → related
  services. All service pages share this layout, sourced from services data.
*/
export function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const service = allServices.find((s) => s.slug === slug)

  if (!service) {
    return <NotFoundPage />
  }

  // Related services = siblings elsewhere in the catalog, excluding this one.
  const related = allServices
    .filter((s) => s.slug !== service.slug)
    .slice(0, 3)

  const heroImage = serviceMedia[service.slug]

  return (
    <>
      <PageHeader
        eyebrow={service.flagship ? 'Flagship · Electronic Access' : 'Our Services'}
        title={service.name}
        lede={service.tagline}
        image={heroImage}
        note="Photography is licensed stock for review."
      />

      <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <nav aria-label="Breadcrumb" className="mb-10">
          <Link
            to="/services"
            className="font-display text-sm font-light italic text-gold-500 transition-colors hover:text-foreground"
          >
            ← All services
          </Link>
        </nav>

        <div className="grid gap-14 lg:grid-cols-[1.5fr_1fr]">
          {/* Main column — intro + integrations. */}
          <div className="flex flex-col gap-14">
            <Reveal className="flex flex-col gap-4">
              <p className="eyebrow flex items-center gap-3 text-gold-500">
                <span aria-hidden className="inline-block h-px w-6 bg-gold-500" />
                Overview
              </p>
              <p className="max-w-2xl text-lg leading-relaxed text-foreground/90">
                {service.intro}
              </p>
            </Reveal>

            <Reveal className="flex flex-col gap-6">
              <h2 className="display text-3xl">
                Integrated with everything <span className="display-accent">around it.</span>
              </h2>
              <ul className="flex flex-col border-t border-border/60">
                {service.integrations.map((integration, i) => (
                  <li
                    key={integration}
                    className={
                      i > 0
                        ? 'flex items-start gap-4 border-b border-border/60 py-5'
                        : 'flex items-start gap-4 border-b border-border/60 py-5'
                    }
                  >
                    <Check className="mt-0.5 size-4 shrink-0 text-gold-500" />
                    <span className="text-sm leading-relaxed">{integration}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            {/* Trust cues — delivery promises tied to this service. */}
            <Reveal className="grid gap-px overflow-hidden border border-border/60 bg-border/60 sm:grid-cols-3">
              {[
                { icon: ShieldCheck, label: 'Accountable', body: 'One partner, full responsibility.' },
                { icon: FileCheck2, label: 'Documented', body: 'Tested, labelled, as-built.' },
                { icon: Clock, label: 'Supported', body: 'Responsive service after handover.' },
              ].map((cue) => (
                <div
                  key={cue.label}
                  className="flex flex-col gap-4 bg-card p-6 transition-colors hover:bg-secondary"
                >
                  <cue.icon className="size-5 text-gold-500" />
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
            <Reveal className="flex flex-col gap-6 border border-border/60 bg-card p-7">
              <p className="eyebrow flex items-center gap-3 text-gold-500">
                <span aria-hidden className="inline-block h-px w-6 bg-gold-500" />
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
              <p className="spec border-t border-border/60 pt-5">
                Selected OEM platforms prove the ecosystem — verified status
                with each brand is confirmed per project.
              </p>
            </Reveal>

            <Reveal delay={100}>
              <Photo
                src={media.standard.src}
                alt=""
                aspect="4 / 3"
                className="relative"
              >
                <div className="flex flex-col gap-4 p-6">
                  <p className="spec text-gold-400">Next step</p>
                  <h2 className="display text-2xl text-ivory-50">
                    Consult with <span className="display-accent text-gold-400">us.</span>
                  </h2>
                  <p className="text-sm leading-relaxed text-ivory-50/85">
                    Walk through your spaces with an integrator who owns the
                    outcome. {site.responsePromise}
                  </p>
                  <NavLink
                    to="/contact"
                    className="mt-2 inline-flex w-fit items-center justify-center gap-2 bg-gold-500 px-4 py-2.5 text-sm font-medium text-navy-950 transition-colors hover:bg-gold-600"
                  >
                    Start your project
                    <ArrowRight className="size-4" />
                  </NavLink>
                </div>
              </Photo>
            </Reveal>
          </aside>
        </div>

        {/* Related services. */}
        <Reveal className="mt-20 border-t border-border/60 pt-14">
          <div className="flex items-end justify-between gap-6">
            <h2 className="display text-3xl">
              Keep <span className="display-accent">exploring.</span>
            </h2>
            <Link
              to="/services"
              className="font-display text-sm font-light italic text-gold-500 transition-colors hover:text-foreground"
            >
              All services
            </Link>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {related.map((s) => (
              <NavLink
                key={s.slug}
                to={`/services/${s.slug}`}
                className="group flex flex-col"
              >
                <Photo
                  src={serviceMedia[s.slug] ?? media.families['security-access'].src}
                  alt=""
                  aspect="16 / 10"
                  wash={false}
                  grain={false}
                  imgClassName="transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
                <span className="flex items-start justify-between gap-4 border-x border-b border-border/60 bg-card p-5">
                  <span className="flex flex-col gap-1.5">
                    <span className="display text-xl">{s.shortName}</span>
                    <span className="text-sm leading-relaxed text-muted-foreground">
                      {s.tagline}
                    </span>
                  </span>
                  <ArrowUpRight className="mt-1 size-4 shrink-0 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold-500" />
                </span>
              </NavLink>
            ))}
          </div>
        </Reveal>
      </div>

      <CalloutCTA />
    </>
  )
}