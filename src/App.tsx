import { Route, Routes } from 'react-router-dom'

import { Layout } from '@/components/site/Layout'

import { HomePage } from '@/pages/HomePage'
import { ServicesPage } from '@/pages/ServicesPage'
import { ServiceDetailPage } from '@/pages/ServiceDetailPage'
import { AboutPage } from '@/pages/AboutPage'
import { PortfolioPage } from '@/pages/PortfolioPage'
import { ContactPage } from '@/pages/ContactPage'
import { PrivacyPage } from '@/pages/PrivacyPage'
import { TermsPage } from '@/pages/TermsPage'
import { NotFoundPage } from '@/pages/NotFoundPage'

import { LoadingScreen } from '@/components/site/LoadingScreen'

/*
  Route table — every page is a route under the shared Layout
  (header + page transition + footer). Unknown paths fall through
  to the 404 page, which is also the GitHub Pages SPA fallback.
*/
export default function App() {
  return (
    <>
      <LoadingScreen />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="services/:slug" element={<ServiceDetailPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="portfolio" element={<PortfolioPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="privacy" element={<PrivacyPage />} />
          <Route path="terms" element={<TermsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  )
}