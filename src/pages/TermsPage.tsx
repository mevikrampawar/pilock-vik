import { PageHeader } from '@/components/site/PageHeader'

/*
  TermsPage — plain-language terms for using the site.
  Covers content accuracy, IP, and liability for a static marketing site.
*/
export function TermsPage() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Terms of use" />
      <section className="mx-auto w-full max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="flex flex-col gap-8 text-sm leading-relaxed text-muted-foreground">
          <section className="flex flex-col gap-3">
            <h2 className="display text-2xl text-foreground">Purpose of this site</h2>
            <p>
              This website describes the services PI Locks provides: electronic
              access, security, and communications systems for institutional,
              commercial, and residential clients. Content is provided for
              information and inquiry purposes.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="display text-2xl text-foreground">Accuracy</h2>
            <p>
              We work to keep what we publish accurate and up to date, but make
              no warranty that content is error-free. Partner and capability
              claims reflect current system offerings; specific certifications
              and dealer statuses are confirmed per project.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="display text-2xl text-foreground">Intellectual property</h2>
            <p>
              All text, graphics, logos, and design on this site are the property
              of PI Locks or its partners and may not be reproduced without
              permission. Trademarks of OEM partners belong to their respective
              owners.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="display text-2xl text-foreground">Liability</h2>
            <p>
              Nothing on this site constitutes a binding offer or quote. Engagements
              begin only through an agreed proposal. To the fullest extent
              permitted by law, PI Locks is not liable for reliance on site content.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="display text-2xl text-foreground">Changes</h2>
            <p>
              We may update these terms as the business and site evolve. Continued
              use of this site constitutes acceptance of the current terms.
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