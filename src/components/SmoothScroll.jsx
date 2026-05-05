import {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import { useLocation } from 'react-router-dom'
import Lenis from '@studio-freight/lenis'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { ScrollContext } from '../context/ScrollContext.jsx'
import { forceScrollTop } from '../utils/forceScrollTop.js'

gsap.registerPlugin(ScrollTrigger)

/**
 * Lenis sur la landing uniquement. Sur `/blog*` ou prefers-reduced-motion → scroll natif
 * (Lenis + SPA cassait l’affichage du blog).
 */
export default function SmoothScroll({ children }) {
  const { pathname, hash } = useLocation()
  const [scrollState, setScrollState] = useState({ progress: 0, scroll: 0 })
  const lenisRef = useRef(null)

  const value = useMemo(() => scrollState, [scrollState])

  const blogRoute = pathname.startsWith('/blog')
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const apply = () => setReducedMotion(mq.matches)
    apply()
    mq.addEventListener('change', apply)
    return () => mq.removeEventListener('change', apply)
  }, [])

  const useLenis = !reducedMotion && !blogRoute

  useLayoutEffect(() => {
    if (!hash) return

    const id = hash.replace('#', '')
    if (!id) return

    /** Après un F5 / reload, rester en haut de page (pas de scroll vers l’ancre). */
    const navEntry = performance.getEntriesByType('navigation')[0]
    if (navEntry?.type === 'reload') {
      forceScrollTop()
      return undefined
    }

    const scrollToTarget = () => {
      const el = document.getElementById(id)
      if (!el) return

      if (useLenis && lenisRef.current) {
        lenisRef.current.scrollTo(el, { offset: -88, duration: 0.85 })
      } else {
        const y = el.getBoundingClientRect().top + window.scrollY - 88
        window.scrollTo({
          top: Math.max(0, y),
          behavior: reducedMotion ? 'auto' : 'smooth',
        })
      }
    }

    // Laisse React/Route finir le rendu de la section avant de scroller.
    let raf2 = 0
    const raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(scrollToTarget)
    })

    return () => {
      cancelAnimationFrame(raf1)
      if (raf2) cancelAnimationFrame(raf2)
    }
  }, [hash, useLenis, reducedMotion])

  useLayoutEffect(() => {
    const lenis = lenisRef.current
    if (lenis) {
      lenis.scrollTo(0, { immediate: true })
      lenis.resize()
    } else {
      forceScrollTop()
    }
    const id = requestAnimationFrame(() => {
      lenisRef.current?.resize()
      ScrollTrigger.refresh()
    })
    return () => cancelAnimationFrame(id)
  }, [pathname])

  /** Scroll natif : blog, préférences utilisateur, ou absence de Lenis */
  useEffect(() => {
    if (useLenis) return undefined

    const isReload =
      performance.getEntriesByType('navigation')[0]?.type === 'reload'
    let cancelReloadStabilizeNative
    if (isReload) {
      const stabilize = () => forceScrollTop()
      const t1 = window.setTimeout(stabilize, 50)
      const t2 = window.setTimeout(stabilize, 250)
      cancelReloadStabilizeNative = () => {
        clearTimeout(t1)
        clearTimeout(t2)
      }
    }

    const update = () => {
      const doc = document.documentElement
      const max = doc.scrollHeight - window.innerHeight
      const y = window.scrollY
      setScrollState({
        scroll: y,
        progress: max > 0 ? y / max : 0,
      })
    }

    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update, { passive: true })
    update()

    const onClick = (e) => {
      const a = e.target.closest?.('a[href^="#"]')
      if (!a) return
      const href = a.getAttribute('href')
      if (!href || href === '#') return
      const el = document.querySelector(href)
      if (el) {
        e.preventDefault()
        el.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth' })
      }
    }
    document.addEventListener('click', onClick)

    return () => {
      cancelReloadStabilizeNative?.()
      document.removeEventListener('click', onClick)
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [useLenis, reducedMotion])

  useEffect(() => {
    if (!useLenis) {
      lenisRef.current = null
      return undefined
    }

    forceScrollTop()
    if (performance.getEntriesByType('navigation')[0]?.type === 'reload') {
      ScrollTrigger.clearScrollMemory('manual', true)
    }

    const lenis = new Lenis({
      // Réglage plus réactif pour se rapprocher du ressenti "natif" du blog.
      lerp: 0.2,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1,
      syncTouch: false,
    })

    lenisRef.current = lenis

    lenis.on('scroll', (e) => {
      ScrollTrigger.update()
      setScrollState({
        scroll: e.scroll,
        progress: e.progress,
      })
    })

    const tickerCb = (time) => {
      lenis.raf(time * 1000)
    }
    gsap.ticker.add(tickerCb)
    gsap.ticker.lagSmoothing(0)

    lenis.scrollTo(0, { immediate: true })
    lenis.resize()
    ScrollTrigger.refresh()

    /** Contenu/fonts qui arrivent après : Lenis avait pu partir d’un scroll résiduel. */
    const isReload =
      performance.getEntriesByType('navigation')[0]?.type === 'reload'
    let cancelReloadStabilize
    if (isReload) {
      const stabilize = () => {
        forceScrollTop()
        lenis.scrollTo(0, { immediate: true })
      }
      const t1 = window.setTimeout(stabilize, 50)
      const t2 = window.setTimeout(stabilize, 250)
      cancelReloadStabilize = () => {
        clearTimeout(t1)
        clearTimeout(t2)
      }
    }

    const onResize = () => {
      lenis.resize()
      ScrollTrigger.refresh()
    }
    window.addEventListener('resize', onResize, { passive: true })

    const onClick = (e) => {
      const a = e.target.closest?.('a[href^="#"]')
      if (!a) return
      const id = a.getAttribute('href')
      if (!id || id === '#') return
      const el = document.querySelector(id)
      if (el) {
        e.preventDefault()
        lenis.scrollTo(el, { offset: -88, duration: 0.85 })
      }
    }
    document.addEventListener('click', onClick)

    return () => {
      cancelReloadStabilize?.()
      document.removeEventListener('click', onClick)
      window.removeEventListener('resize', onResize)
      gsap.ticker.remove(tickerCb)
      lenisRef.current = null
      lenis.destroy()
      ScrollTrigger.refresh()
    }
  }, [useLenis])

  return (
    <ScrollContext.Provider value={value}>{children}</ScrollContext.Provider>
  )
}
