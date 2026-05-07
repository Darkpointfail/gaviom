/** URL complète de votre page ou événement Calendly (ex. https://calendly.com/votre-org/appel-decouverte) */
function normalizeCalendlyUrl(raw) {
  if (typeof raw !== 'string') return ''
  const value = raw.trim()
  if (!value) return ''
  if (value.startsWith('http://') || value.startsWith('https://')) return value
  if (value.startsWith('calendly.com/') || value.startsWith('www.calendly.com/')) {
    return `https://${value}`
  }
  return ''
}

export const CALENDLY_BOOKING_URL = normalizeCalendlyUrl(
  import.meta.env.VITE_CALENDLY_URL,
)

const CALENDLY_WIDGET_SRC = 'https://assets.calendly.com/assets/external/widget.js'
export const CALENDLY_MODAL_EVENT = 'axiom:open-calendly'
export const CALENDLY_TRACK_EVENT_CLICK = 'book_call_clicked'
export const CALENDLY_TRACK_EVENT_SCHEDULED = 'book_call_scheduled'
export { CALENDLY_WIDGET_SRC }

export function getBookingHref(fallbackHash = '/#contact') {
  return CALENDLY_BOOKING_URL || fallbackHash
}

export function isCalendlyConfigured() {
  return CALENDLY_BOOKING_URL.length > 0
}

export function trackEvent(name, payload = {}) {
  if (typeof window === 'undefined') return
  window.dataLayer?.push({ event: name, ...payload })
  window.dispatchEvent(
    new CustomEvent('axiom:analytics-event', {
      detail: { name, payload },
    }),
  )
}

export function openCalendlyBooking(url) {
  if (typeof window === 'undefined') return
  trackEvent(CALENDLY_TRACK_EVENT_CLICK, { source: 'cta' })
  window.dispatchEvent(
    new CustomEvent(CALENDLY_MODAL_EVENT, {
      detail: { url },
    }),
  )
}

/** Props pour <a> : ouvre la modal Calendly si l’URL est définie */
export function getBookingLinkProps(fallbackHash = '/#contact') {
  const href = getBookingHref(fallbackHash)
  const external = href.startsWith('http')
  const onClick = external
    ? (e) => {
        e.preventDefault()
        openCalendlyBooking(href)
      }
    : undefined

  return {
    href,
    onClick,
    ...(external ? { rel: 'noopener noreferrer' } : {}),
  }
}
