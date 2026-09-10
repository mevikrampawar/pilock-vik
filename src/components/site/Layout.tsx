import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'

import { Header } from '@/components/site/Header'
import { Footer } from '@/components/site/Footer'

/*
  ScrollToTop — resets scroll position to the top whenever the route
  changes, so navigating between pages never lands mid-page.
*/
export function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])
  return null
}

/*
  Layout — the shared app shell. A keyed, animated wrapper around the
  routed page gives every navigation a soft fade/rise transition.
*/
export function Layout() {
  const { pathname } = useLocation()
  return (
    <div className="flex min-h-dvh flex-col bg-background">
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <div key={pathname} className="page-fade">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  )
}