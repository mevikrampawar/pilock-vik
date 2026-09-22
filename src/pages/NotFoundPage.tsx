import { NavLink } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

import { Button } from '@/components/ui/button'

/*
  NotFoundPage — the 404 stays on brand: a locked door, a gold rule, and a
  way home. Also the GitHub Pages SPA fallback for unknown hash routes.
*/
export function NotFoundPage() {
  return (
    <section className="bg-brand relative flex min-h-[60dvh] items-center overflow-hidden" aria-label="Page not found">
      <div className="glow-brass absolute inset-0" />
      <div className="relative mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start gap-6">
          <p className="eyebrow flex items-center gap-3">
            <span aria-hidden className="inline-block h-px w-8 bg-gold-500" />
            Error 404
          </p>
          <h1 className="display max-w-2xl text-5xl text-balance sm:text-6xl lg:text-7xl">
            This door is <span className="display-accent">locked.</span>
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            The page you&rsquo;re looking for doesn&rsquo;t exist — it may have
            moved or never been given a key. Head back to the front door.
          </p>
          <Button asChild size="lg" data-icon="inline-end">
            <NavLink to="/">
              Back home
              <ArrowRight data-icon="inline-end" />
            </NavLink>
          </Button>
        </div>
      </div>
    </section>
  )
}