import { Buffer } from 'buffer'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import './index.css'
import App from './App.jsx'
import SmoothScroll from './components/SmoothScroll.jsx'
import { LanguageProvider } from './i18n/LanguageProvider.jsx'
import {
  disableBrowserScrollRestore,
  forceScrollTop,
} from './utils/forceScrollTop.js'

globalThis.Buffer = Buffer

function shouldSkipForceTop() {
  return (
    window.location.pathname === '/' && window.location.hash.length > 1
  )
}

/** Dès le bootstrap : pas de scroll restauré par le navigateur + forcage haut de page (Lenis lisait parfois un scroll résiduel). */
if (typeof window !== 'undefined') {
  disableBrowserScrollRestore()
  if (!shouldSkipForceTop()) {
    forceScrollTop()
  }

  /** Après mise en cache / restauration d’état hors bfcache, le viewport peut encore sauter plus tard. */
  window.addEventListener('pageshow', (event) => {
    if (event.persisted) return
    disableBrowserScrollRestore()
    if (!shouldSkipForceTop()) {
      forceScrollTop()
    }
  })

  window.addEventListener('load', () => {
    if (shouldSkipForceTop()) return
    forceScrollTop()
    requestAnimationFrame(() => {
      forceScrollTop()
      requestAnimationFrame(forceScrollTop)
    })
  })
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <SmoothScroll>
          <LanguageProvider>
            <App />
          </LanguageProvider>
        </SmoothScroll>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>,
)
