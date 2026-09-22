import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { ThemeProvider } from 'next-themes'
import { Toaster } from 'sonner'

import '@fontsource-variable/geist'
import './index.css'
import App from './App.tsx'

/*
  App entry — wires routing, theming, and toasts for the whole SPA.
  HashRouter keeps deep links working on GitHub Pages (no server rewrites).
  ThemeProvider class-api drives the `.dark` class used by the CSS.
*/
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      disableTransitionOnChange={false}
    >
      <HashRouter>
        <App />
      </HashRouter>
      <Toaster position="bottom-right" richColors closeButton />
    </ThemeProvider>
  </StrictMode>,
)