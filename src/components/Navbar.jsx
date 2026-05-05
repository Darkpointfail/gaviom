import { useEffect, useMemo, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { site } from '../data/content'
import { useScrollProgress } from '../hooks/useScrollProgress'
import { useScrollPosition } from '../context/ScrollContext.jsx'
import { useTranslation } from '../i18n/useTranslation.js'
import LanguageToggle from '../i18n/LanguageToggle.jsx'
import { getBookingLinkProps } from '../config/calendly.js'

export default function Navbar() {
  const bookingLink = getBookingLinkProps()
  const { pathname } = useLocation()
  const isHome = pathname === '/'
  const isBlog = pathname.startsWith('/blog')

  const { copy } = useTranslation()
  const scrollProgress = useScrollProgress()
  const { scroll: syncedScroll } = useScrollPosition()
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('services')

  const SECTION_LINKS = useMemo(
    () => [
      { id: 'services', label: copy.nav.services, to: '/#services' },
      { id: 'process', label: copy.nav.process, to: '/#process' },
      { id: 'realisations', label: copy.nav.work, to: '/#realisations' },
      { id: 'contact', label: copy.nav.contact, to: '/#contact' },
    ],
    [copy.nav],
  )

  useEffect(() => {
    const pickActive = () => {
      setScrolled(syncedScroll > 50)
      if (!isHome) return

      const marker = 140
      let current = SECTION_LINKS[0].id
      for (const link of SECTION_LINKS) {
        const el = document.getElementById(link.id)
        if (el) {
          const top = el.getBoundingClientRect().top
          if (top <= marker) current = link.id
        }
      }
      setActiveSection(current)
    }

    pickActive()
    window.addEventListener('resize', pickActive, { passive: true })
    return () => window.removeEventListener('resize', pickActive)
  }, [syncedScroll, isHome, SECTION_LINKS])

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled ? 'border-border bg-[rgba(5,5,8,0.85)]' : 'border-transparent bg-[rgba(5,5,8,0.65)]'
      } backdrop-blur-xl`}
      style={{ willChange: 'transform' }}
    >
      <div
        className="pointer-events-none absolute bottom-0 left-0 h-px origin-left bg-cyan/80"
        style={{
          transform: `scaleX(${scrollProgress})`,
          width: '100%',
          willChange: 'transform',
        }}
        aria-hidden
      />
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-4 md:gap-6 md:px-8">
        <Link
          to="/"
          className="shrink-0 font-display text-2xl tracking-wide text-white md:text-3xl"
        >
          {site.name}
          <span
            className="ml-1 inline-block h-2 w-2 animate-pulse rounded-full bg-cyan align-middle"
            aria-hidden
          />
        </Link>

        <nav
          className="hidden items-center gap-6 md:flex lg:gap-8"
          aria-label={copy.nav.ariaNav}
        >
          {SECTION_LINKS.map((link) => (
            <Link
              key={link.id}
              to={link.to}
              className="group relative font-body text-sm font-medium text-white/90"
            >
              {link.label}
              <span
                className={`absolute -bottom-1 left-0 h-[2px] origin-left bg-cyan transition-all duration-300 ${
                  isHome && activeSection === link.id
                    ? 'w-full'
                    : 'w-0 group-hover:w-full'
                }`}
              />
            </Link>
          ))}
          <Link
            to="/blog"
            className="group relative font-body text-sm font-medium text-white/90"
          >
            {copy.nav.blog}
            <span
              className={`absolute -bottom-1 left-0 h-[2px] origin-left bg-cyan transition-all duration-300 ${
                isBlog ? 'w-full' : 'w-0 group-hover:w-full'
              }`}
            />
          </Link>
        </nav>

        <div className="flex shrink-0 items-center gap-2 md:gap-3">
          <LanguageToggle />
          <a
            {...bookingLink}
            className="rounded border border-cyan px-3 py-2 font-mono text-[10px] uppercase tracking-wider text-cyan transition hover:bg-cyan/10 md:px-4 md:text-sm"
          >
            {copy.nav.cta}
          </a>
        </div>
      </div>
    </motion.header>
  )
}
