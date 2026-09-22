import { partners } from '@/data/content'

export function PartnersStrip() {
  const doubled = [...partners, ...partners]
  return (
    <section className="border-b border-border/60 bg-secondary/40" aria-label="Partner brands">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-7 px-4 py-12 sm:px-6 lg:px-8">
        <p className="eyebrow flex items-center gap-3">
          <span aria-hidden className="inline-block h-px w-6 bg-gold-500" />
          Built on tested OEM platforms — verified per project
        </p>
        <div
          className="marquee relative overflow-hidden"
          style={{
            maskImage:
              'linear-gradient(90deg, transparent, black 12%, black 88%, transparent)',
          }}
        >
          <div className="marquee-track flex w-max items-baseline gap-14 sm:gap-20">
            {doubled.map((brand, i) => (
              <span
                key={`${brand}-${i}`}
                className="display text-2xl font-light whitespace-nowrap text-muted-foreground/55 transition-colors hover:text-gold-500 sm:text-3xl"
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