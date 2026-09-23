import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { ArrowRight, Menu } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet'

import { Logo } from '@/components/site/Logo'
import { ThemeToggle } from '@/components/site/ThemeToggle'
import { cn } from '@/lib/utils'
import { site } from '@/data/site'

// Primary navigation — mirrored between the desktop bar and mobile sheet.
const nav = [
  { label: 'Services', to: '/services' },
  { label: 'About', to: '/about' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Contact', to: '/contact' },
]

/*
  Header — floats over the hero photograph (transparent, ivory type), then
  condenses to a frosted midnight bar once the page scrolls. The active page
  gets a gold slash; the CTA is a quiet hairline button rather than a UI-kit
  pill. Mobile: theme toggle + menu into a Sheet.
*/
export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        scrolled
          ? 'border-b border-white/10 bg-navy-950/95 backdrop-blur-3xl saturate-150 shadow-2xl py-1'
          : 'border-b border-transparent bg-transparent py-3'
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        <NavLink
          to="/"
          aria-label="PI Locks — home"
          className="shrink-0 py-2 [&_.text-muted-foreground]:text-ivory-50/70"
        >
          <Logo markClassName="[&_svg]:stroke-ivory-50/90" />
        </NavLink>

        <nav className="hidden items-stretch self-stretch lg:flex" aria-label="Primary">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  'relative flex items-center gap-2 px-4 font-display text-[15px] font-light tracking-wide text-ivory-50/75 transition-colors hover:text-ivory-50',
                  isActive && 'text-ivory-50'
                )
              }
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <span aria-hidden className="h-3 w-px bg-gold-400" />
                  )}
                  {item.label}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <ThemeToggle />
          <NavLink
            to="/contact"
            className="hidden items-center gap-2 border border-gold-400/50 px-3.5 py-1.5 font-display text-sm font-light italic text-gold-400 transition-colors hover:border-gold-400 hover:text-ivory-50 lg:inline-flex"
          >
            {site.cta.primary}
            <ArrowRight className="size-3.5" />
          </NavLink>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button
                variant="outline"
                size="icon"
                aria-label="Open menu"
                className="border-ivory-50/30 bg-transparent text-ivory-50 hover:bg-ivory-50/10"
              >
                <Menu className="size-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full border-l border-white/10 bg-navy-950 sm:w-[400px]">
              <SheetTitle className="sr-only">PI Locks navigation</SheetTitle>
              <div className="flex h-full flex-col">
                <nav className="flex flex-1 flex-col justify-center gap-6 pt-12" aria-label="Mobile">
                  {[{ label: 'Home', to: '/' }, ...nav].map((item) => (
                    <NavLink
                      key={item.to}
                      to={item.to}
                      onClick={() => setOpen(false)}
                      className={({ isActive }) =>
                        cn(
                          'display text-4xl px-6 transition-colors hover:text-gold-400',
                          isActive ? 'text-gold-500' : 'text-ivory-50/80'
                        )
                      }
                    >
                      {item.label}
                    </NavLink>
                  ))}
                </nav>
                <div className="mt-6 border-t border-white/10 p-6">
                  <Button asChild size="lg" className="w-full" data-icon="inline-end">
                    <NavLink to="/contact" onClick={() => setOpen(false)}>
                      {site.cta.primary}
                      <ArrowRight data-icon="inline-end" />
                    </NavLink>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}