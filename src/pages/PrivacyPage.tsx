import { PageHeader } from '@/components/site/PageHeader'

/*
  PrivacyPage — what we collect and why, in plain language.
  Generic boilerplate consistent with a static marketing site that only
  captures what a visitor voluntarily submits through the contact form.
*/
export function PrivacyPage() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Privacy policy" />
      <section className="mx-auto w-full max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="flex flex-col gap-8 text-sm leading-relaxed text-muted-foreground">
          <section className="flex flex-col gap-3">
            <h2 className="display text-2xl text-foreground">What we collect</h2>
            <p>
              This website does not track you. We host on GitHub Pages and may
              load fonts from Google Fonts, which process standard, anonymized
              request data such as IP address and user agent.
            </p>
            <p>
              The only information we hold about you is what you choose to send:
              the details you enter into the contact form — name, company, email,
              and phone. That information is used solely to respond to your
              inquiry.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="display text-2xl text-foreground">How we use it</h2>
            <p>
              Your details are used to reply to your message, prepare a scope or
              proposal if asked, and nothing else. We do not sell, rent, or share
              your information with third parties for marketing.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="display text-2xl text-foreground">Retention & your rights</h2>
            <p>
              We keep inquiry records only as long as reasonably needed to serve
              you. You may request a copy of the information we hold about you,
              correction, or deletion at any time by writing to the email address
              on our contact page.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="display text-2xl text-foreground">Changes</h2>
            <p>
              If this policy changes, we will update this page. Significant
              changes will be noted here with a revision date.
            </p>
          </section>

          <p className="font-mono text-[11px] tracking-wide text-muted-foreground/70">
            Last updated: September 2026
          </p>
        </div>
      </section>
    </>
  )
}