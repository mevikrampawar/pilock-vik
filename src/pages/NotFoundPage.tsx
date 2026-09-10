import { NavLink } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

import { Button } from '@/components/ui/button'

import { KeywayEmblem } from '@/components/site/KeywayEmblem'

/*
  NotFoundPage — 404. Doubles as the GitHub Pages SPA fallback: any deep
  link that doesn't exist lands here gracefully instead of a browser error.
*/
export function NotFoundPage() {
  return (
    <section className="bg-blueprint relative flex min-h-[60dvh] items-center overflow-hidden" aria-label="Page not found">
      <div className="glow-brass absolute inset-0" />
      <KeywayEmblem className="pointer-events-none absolute -right-20 -top-24 size-80 opacity-30" />

      <div className="relative mx-auto flex w-full max-w-7xl flex-col items-start gap-7 px-4 py-20 sm:px-6 lg:px-8">
        <p className="eyebrow flex items-center gap-3">
          <span aria-hidden className="inline-block size-1.5 rounded-full bg-brass" />
          Error 404
        </p>
        <h1 className="display text-6xl text-balance sm:text-7xl lg:text-8xl">
          This door is <span className="text-brass">locked.</span>
        </h1>
        <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          The page you’re looking for doesn’t exist or has moved. Let’s get you
          back through the right door.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg" data-icon="inline-end">
            <NavLink to="/">
              Back to home
              <ArrowRight data-icon="inline-end" />
            </NavLink>
          </Button>
          <Button asChild size="lg" variant="outline">
            <NavLink to="/services">Explore services</NavLink>
          </Button>
        </div>
      </div>
    </section>
  )
}