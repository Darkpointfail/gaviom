import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { createPortal } from 'react-dom'
import {
  CALENDLY_MODAL_EVENT,
  CALENDLY_TRACK_EVENT_SCHEDULED,
  CALENDLY_WIDGET_SRC,
  trackEvent,
} from '../config/calendly.js'

let calendlyScriptPromise
let calendlyCssInjected = false
const CALENDLY_WIDGET_CSS = 'https://assets.calendly.com/assets/external/widget.css'

function loadCalendlyWidgetScript() {
  if (typeof window === 'undefined') return Promise.resolve(false)
  if (window.Calendly?.initInlineWidget) return Promise.resolve(true)
  if (calendlyScriptPromise) return calendlyScriptPromise

  if (!calendlyCssInjected && !document.querySelector(`link[href="${CALENDLY_WIDGET_CSS}"]`)) {
    const css = document.createElement('link')
    css.rel = 'stylesheet'
    css.href = CALENDLY_WIDGET_CSS
    document.head.appendChild(css)
    calendlyCssInjected = true
  }

  calendlyScriptPromise = new Promise((resolve) => {
    const existing = document.querySelector(`script[src="${CALENDLY_WIDGET_SRC}"]`)
    if (existing) {
      existing.addEventListener('load', () => resolve(Boolean(window.Calendly)), {
        once: true,
      })
      existing.addEventListener('error', () => resolve(false), { once: true })
      return
    }

    const script = document.createElement('script')
    script.src = CALENDLY_WIDGET_SRC
    script.async = true
    script.onload = () => resolve(Boolean(window.Calendly))
    script.onerror = () => resolve(false)
    document.body.appendChild(script)
  })

  return calendlyScriptPromise
}

function fallbackOpen(url) {
  window.open(url, '_blank', 'noopener,noreferrer')
}

export default function CalendlyModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [bookingUrl, setBookingUrl] = useState('')
  const [isLoaded, setIsLoaded] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    const onOpen = (event) => {
      const url = event?.detail?.url
      if (!url) return
      setBookingUrl(url)
      setIsLoaded(false)
      setIsOpen(true)
    }

    window.addEventListener(CALENDLY_MODAL_EVENT, onOpen)
    return () => window.removeEventListener(CALENDLY_MODAL_EVENT, onOpen)
  }, [])

  useEffect(() => {
    if (!isOpen) return undefined

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKeydown = (e) => {
      if (e.key === 'Escape') setIsOpen(false)
    }
    document.addEventListener('keydown', onKeydown)

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', onKeydown)
    }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen || !bookingUrl) return undefined

    let cancelled = false
    const mountNode = containerRef.current

    const mountCalendly = async () => {
      const loaded = await loadCalendlyWidgetScript()
      if (cancelled) return

      if (!loaded || !window.Calendly?.initInlineWidget || !mountNode) {
        fallbackOpen(bookingUrl)
        setIsOpen(false)
        return
      }

      mountNode.innerHTML = ''
      window.Calendly.initInlineWidget({
        url: bookingUrl,
        parentElement: mountNode,
      })

      // Force un rendu plein format dans notre modal custom.
      const iframe = mountNode.querySelector('iframe')
      if (iframe) {
        iframe.style.width = '100%'
        iframe.style.height = '100%'
        iframe.style.minHeight = '100%'
        iframe.style.border = '0'
      }
      setIsLoaded(true)
    }

    void mountCalendly()

    return () => {
      cancelled = true
      if (mountNode) mountNode.innerHTML = ''
    }
  }, [isOpen, bookingUrl])

  useEffect(() => {
    const onMessage = (event) => {
      if (event.origin !== 'https://calendly.com') return
      const calendlyEvent = event?.data?.event
      if (calendlyEvent === 'calendly.event_scheduled') {
        trackEvent(CALENDLY_TRACK_EVENT_SCHEDULED, { source: 'calendly_modal' })
      }
    }
    window.addEventListener('message', onMessage)
    return () => window.removeEventListener('message', onMessage)
  }, [])

  if (typeof document === 'undefined') return null

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[120] flex items-center justify-center p-3 md:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
        >
          <button
            type="button"
            aria-label="Close Calendly modal"
            className="absolute inset-0 bg-black/75 backdrop-blur-md"
            onClick={() => setIsOpen(false)}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            className="relative z-[1] h-[88svh] w-full max-w-6xl overflow-hidden rounded-2xl border border-border bg-surface shadow-[0_20px_120px_rgba(26,79,191,0.15)] md:h-[84svh]"
            initial={{ opacity: 0, scale: 0.96, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 8 }}
            transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
          >
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute right-3 top-3 z-[2] rounded border border-border bg-bg/95 px-3 py-1 font-mono text-xs text-muted transition hover:border-accent/60 hover:text-fg"
            >
              Fermer
            </button>

            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(26,79,191,0.08),transparent_45%),radial-gradient(circle_at_80%_100%,rgba(26,79,191,0.1),transparent_55%)]" />

            <div
              ref={containerRef}
              className="relative h-full w-full bg-surface"
            />

            {!isLoaded && (
              <div className="pointer-events-none absolute inset-0 grid place-items-center bg-surface/95">
                <p className="font-mono text-sm text-muted">Chargement Calendly...</p>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  )
}
