import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'
import { z } from 'zod'
import { ArrowRight, Globe, Mail, MapPin, PhoneCall } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from '@/components/ui/field'

import { PageHeader } from '@/components/site/PageHeader'
import { Reveal } from '@/components/site/Reveal'
import { site } from '@/data/site'

/*
  Contact form schema — validated with zod, then composed into a
  pre-filled mailto link. Static hosting (GitHub Pages) has no backend,
  so the form hands off to the visitor's email app with everything
  already written for them.
*/
const schema = z.object({
  name: z.string().min(2, 'Please tell us your name.'),
  company: z.string().optional(),
  email: z.string().email('That email address doesn’t look right.'),
  phone: z.string().optional(),
  projectType: z.string().min(1, 'Choose a project type.'),
  timeline: z.string().optional(),
  message: z.string().min(10, 'A few more details helps us respond well.'),
})

type FormValues = z.infer<typeof schema>

// Response channel cards on the left rail.
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

const projectTypes = [
  'General inquiry',
  'Security & Access',
  'Telecom & Low Voltage',
  'Infrastructure & Design',
  'Multiple / full-stack',
]

const timelines = [
  'Just gathering information',
  'Inside the next 3 months',
  'Inside the next 6 months',
  'This year',
]

/*
  ContactPage — "Get in touch" with direct channels, a scoping form,
  and the response promise. The form composes a mailto and confirms
  via toast.
*/
export function ContactPage() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<FormValues>({ resolver: zodResolver(schema) })

  function onSubmit(values: FormValues) {
    const subject = `Project inquiry — ${values.name} (${values.projectType})`
    const body = [
      `Name: ${values.name ?? '—'}`,
      `Company: ${values.company || '—'}`,
      `Email: ${values.email ?? '—'}`,
      `Phone: ${values.phone || '—'}`,
      `Project type: ${values.projectType ?? '—'}`,
      `Timeline: ${values.timeline || '—'}`,
      '',
      'Message:',
      values.message,
    ].join('\n')

    window.location.assign(
      `mailto:${site.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    )
    toast.success('Opening your email app — the message is pre-filled.')
    reset()
  }

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Get in touch"
        lede="Tell us about your building and its people. We’ll scope the right systems and price them honestly."
      />

      <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8" aria-label="Contact options">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Left rail — direct channels. */}
          <Reveal className="flex flex-col gap-5">
            {channels.map((channel) => (
              <div
                key={channel.label}
                className="flex items-start gap-4 rounded-2xl border border-border/70 bg-card p-6 transition-colors duration-300 hover:border-brass/30"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-brass/25 bg-brass-soft">
                  <channel.icon className="size-4 text-brass" />
                </span>
                <div className="flex flex-col gap-1">
                  <span className="eyebrow">{channel.label}</span>
                  {channel.href ? (
                    <a
                      href={channel.href}
                      target={channel.href.startsWith('http') ? '_blank' : undefined}
                      rel="noreferrer"
                      className="font-mono text-sm text-foreground transition-colors hover:text-brass"
                    >
                      {channel.value}
                    </a>
                  ) : (
                    <span className="font-mono text-sm text-foreground">
                      {channel.value}
                    </span>
                  )}
                </div>
              </div>
            ))}

            <p className="font-mono text-[11px] tracking-[0.2em] text-muted-foreground uppercase">
              {site.responsePromise}
            </p>
          </Reveal>

          {/* Right rail — scoping form. */}
          <Reveal delay={100}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-7 rounded-2xl border border-border/70 bg-card p-7 sm:p-9"
              aria-label="Project inquiry form"
            >
              <div className="flex flex-col gap-2">
                <h2 className="display text-3xl">Scope your project</h2>
                <p className="text-sm text-muted-foreground">
                  A few details now save a whole meeting — everything below is
                  pre-filled into your email app.
                </p>
              </div>

              <FieldGroup className="grid gap-x-6 sm:grid-cols-2 sm:[&>*:last-child]:col-span-2">
                <Field>
                  <FieldLabel htmlFor="name">Full name</FieldLabel>
                  <Input id="name" placeholder="Jane Smith" aria-invalid={!!errors.name} data-invalid={!!errors.name} {...register('name')} />
                  <FieldError errors={[errors.name]} />
                </Field>

                <Field>
                  <FieldLabel htmlFor="company">Company</FieldLabel>
                  <Input id="company" placeholder="Organization (optional)" {...register('company')} />
                </Field>

                <Field>
                  <FieldLabel htmlFor="email">Work email</FieldLabel>
                  <Input id="email" type="email" placeholder="jane@company.com" aria-invalid={!!errors.email} data-invalid={!!errors.email} {...register('email')} />
                  <FieldError errors={[errors.email]} />
                </Field>

                <Field>
                  <FieldLabel htmlFor="phone">Phone</FieldLabel>
                  <Input id="phone" type="tel" placeholder="+1 (000) 000-0000" {...register('phone')} />
                </Field>

                <Field>
                  <FieldLabel htmlFor="project-type">Project type</FieldLabel>
                  <Controller
                    name="projectType"
                    control={control}
                    render={({ field }) => (
                      <Select onValueChange={field.onChange} value={field.value ?? ''}>
                        <SelectTrigger id="project-type" aria-invalid={!!errors.projectType} data-invalid={!!errors.projectType} className="min-h-8">
                          <SelectValue placeholder="Select a project type" />
                        </SelectTrigger>
                        <SelectContent>
                          {projectTypes.map((type) => (
                            <SelectItem key={type} value={type}>
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                  />
                  <FieldDescription>Not sure? Pick general inquiry.</FieldDescription>
                  <FieldError errors={[errors.projectType]} />
                </Field>

                <Field>
                  <FieldLabel htmlFor="timeline">Timeline</FieldLabel>
                  <Controller
                    name="timeline"
                    control={control}
                    render={({ field }) => (
                      <Select onValueChange={field.onChange} value={field.value ?? ''}>
                        <SelectTrigger id="timeline" className="min-h-8">
                          <SelectValue placeholder="Select a timeline (optional)" />
                        </SelectTrigger>
                        <SelectContent>
                          {timelines.map((timeline) => (
                            <SelectItem key={timeline} value={timeline}>
                              {timeline}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                  />
                </Field>

                <Field>
                  <FieldLabel htmlFor="message">Your project</FieldLabel>
                  <Textarea
                    id="message"
                    rows={5}
                    placeholder="Spaces, systems, current pain points — anything that helps us scope well."
                    aria-invalid={!!errors.message}
                    data-invalid={!!errors.message}
                    {...register('message')}
                  />
                  <FieldError errors={[errors.message]} />
                </Field>
              </FieldGroup>

              <Button type="submit" size="lg" className="w-full sm:w-auto" data-icon="inline-end">
                Let’s scope your project
                <ArrowRight data-icon="inline-end" />
              </Button>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  )
}