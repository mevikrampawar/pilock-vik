import { useState } from 'react'
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
  Header — sticky, glassy app bar with an editorial nav: quiet text links,
  a gold hairline under the active page, theme toggle and a gold CTA.
  Mobile: theme toggle + hamburger that opens a Sheet with full-width links.
*/
export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        <NavLink to="/" aria-label="PI Locks — home" className="shrink-0 py-2">
          <Logo />
        </NavLink>

        <nav className="hidden items-stretch self-stretch lg:flex" aria-label="Primary">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  'relative flex items-center px-4 font-mono text-[12px] uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-foreground',
                  isActive && 'text-foreground'
                )
              }
            >
              {({ isActive }) => (
                <>
                  {item.label}
                  {isActive && (
                    <span
                      aria-hidden
                      className="absolute inset-x-4 bottom-0 h-[2px] bg-gold-500"
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <div className="hidden lg:block">
            <Button asChild data-icon="inline-end">
              <NavLink to="/contact">
                {site.cta.primary}
                <ArrowRight data-icon="inline-end" />
              </NavLink>
            </Button>
          </div>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="outline" size="icon" aria-label="Open menu">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[320px]">
              <SheetTitle className="sr-only">PI Locks navigation</SheetTitle>
              <nav className="flex flex-col gap-1 pt-6" aria-label="Mobile">
                {[{ label: 'Home', to: '/' }, ...nav].map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      cn(
                        'display text-3xl rounded-md px-3 py-3 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground',
                        isActive && 'text-foreground'
                      )
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
              </nav>
              <div className="mt-6 border-t pt-6">
                <Button asChild className="w-full" data-icon="inline-end">
                  <NavLink to="/contact" onClick={() => setOpen(false)}>
                    {site.cta.primary}
                    <ArrowRight data-icon="inline-end" />
                  </NavLink>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}