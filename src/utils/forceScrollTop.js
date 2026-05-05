/** Remonte le viewport au tout premier pixel (sans smooth), cross-navigateurs. */
export function forceScrollTop() {
  if (typeof window === 'undefined') return
  window.scrollTo(0, 0)
  const { documentElement } = document
  documentElement.scrollTop = 0
  document.documentElement.scrollLeft = 0
  document.body.scrollTop = 0
}

export function disableBrowserScrollRestore() {
  if (typeof window !== 'undefined' && 'scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual'
  }
}
