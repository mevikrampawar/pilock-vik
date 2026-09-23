import { Globe, Mail, MapPin, PhoneCall } from 'lucide-react'

import { PageHeader } from '@/components/site/PageHeader'
import { Reveal } from '@/components/site/Reveal'
import { site } from '@/data/site'
import { media } from '@/data/media'

// Response channel cards.
const channels = [
  {
    label: 'Email',
    value: site.contact.email,
    href: `mailto:${site.contact.email}`,
    icon: Mail,
  },
  {
    label: 'Phone',
    value: site.contact.phone,
    href: 'tel:+16045550123',
    icon: PhoneCall,
  },
  {
    label: 'Service area',
    value: site.contact.serviceArea,
    icon: MapPin,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/company/pilocks',
    href: site.contact.linkedin,
    icon: Globe,
  },
]

/*
  ContactPage — "Get in touch" with direct channels. We rely on standard
  communication rather than scoping forms.
*/
export function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Get in touch"
        lede="Reach out to discuss your building and its people. We’ll scope the right systems and price them honestly."
        image={media.contact.src}
      />

      <section className="mx-auto w-full max-w-5xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8" aria-label="Contact options">
        <Reveal className="flex flex-col items-center text-center mb-16">
          <h2 className="display text-3xl sm:text-4xl">Direct communication.</h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            We prefer a direct conversation. Reach out via any of the channels below, and we will get back to you promptly to start planning your project.
          </p>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
          {channels.map((channel, i) => (
            <Reveal key={channel.label} delay={i * 50}>
              <div className="flex flex-col items-start gap-5 border border-white/10 bg-card p-8 transition-colors hover:bg-secondary/40 h-full">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-sm border border-gold-500/25 bg-gold-500/10">
                  <channel.icon className="size-5 text-gold-500" />
                </span>
                <div className="flex flex-col gap-1.5 mt-2">
                  <span className="eyebrow">{channel.label}</span>
                  {channel.href ? (
                    <a
                      href={channel.href}
                      target={channel.href.startsWith('http') ? '_blank' : undefined}
                      rel="noreferrer"
                      className="font-mono text-base text-foreground transition-colors hover:text-gold-500"
                    >
                      {channel.value}
                    </a>
                  ) : (
                    <span className="font-mono text-base text-foreground">
                      {channel.value}
                    </span>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200} className="mt-16 text-center">
          <p className="spec text-muted-foreground border-t border-white/10 pt-8 inline-block px-12">
            {site.responsePromise}
          </p>
        </Reveal>
      </section>
    </>
  )
}
