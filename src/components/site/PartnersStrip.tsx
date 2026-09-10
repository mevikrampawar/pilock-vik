import { partners } from '@/data/content'

export function PartnersStrip() {
  const doubled = [...partners, ...partners]
  return (
    <section className="border-y border-border/60 bg-steel/40" aria-label="Partner brands">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-10 sm:px-6 lg:px-8">
        <p className="eyebrow flex items-center gap-3">
          <span aria-hidden className="inline-block size-1.5 rounded-full bg-brass" />
          Built on tested OEM platforms
        </p>
        <div
          className="marquee relative overflow-hidden"
          style={{
            maskImage:
              'linear-gradient(90deg, transparent, black 12%, black 88%, transparent)',
          }}
        >
          <div className="marquee-track flex w-max items-baseline gap-12 sm:gap-16">
            {doubled.map((brand, i) => (
              <span
                key={`${brand}-${i}`}
                className="display text-2xl font-semibold whitespace-nowrap text-muted-foreground/45 transition-colors hover:text-brass sm:text-3xl"
                aria-hidden={i >= partners.length}
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}