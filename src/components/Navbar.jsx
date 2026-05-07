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
      { id: 'services', label: copy.nav.services },
      { id: 'process', label: copy.nav.process },
      { id: 'realisations', label: copy.nav.work },
      { id: 'formations', label: copy.nav.formations },
      { id: 'contact', label: copy.nav.contact },
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
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-500 ${
        scrolled
          ? 'border-white/[0.08] bg-bg/80 shadow-lux-sm'
          : 'border-white/[0.05] bg-bg/65'
      } backdrop-blur-2xl backdrop-saturate-150`}
      style={{ willChange: 'transform' }}
    >
      <div
        className="pointer-events-none absolute bottom-0 left-0 h-px origin-left bg-accent/80"
        style={{
          transform: `scaleX(${scrollProgress})`,
          width: '100%',
          willChange: 'transform',
        }}
        aria-hidden
      />
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-4 md:gap-6 md:px-8">
        <Link to="/" className="shrink-0 flex items-baseline gap-1 md:gap-1.5">
          <span className="font-display text-xl tracking-tight text-fg md:text-2xl">
            {site.name}
          </span>
          <span className="font-body text-sm font-light text-muted">{site.advisory}</span>
        </Link>

        <nav
          className="hidden items-center gap-5 md:flex lg:gap-7"
          aria-label={copy.nav.ariaNav}
        >
          {SECTION_LINKS.map((link) =>
            isHome ? (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="group relative font-body text-sm font-medium text-fg/90"
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-[2px] origin-left bg-accent transition-all duration-300 ${
                    activeSection === link.id ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </a>
            ) : (
              <Link
                key={link.id}
                to={{ pathname: '/', hash: link.id }}
                className="group relative font-body text-sm font-medium text-fg/90"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 origin-left bg-accent transition-all duration-300 group-hover:w-full" />
              </Link>
            ),
          )}
          <Link
            to="/blog"
            className="group relative font-body text-sm font-medium text-fg/90"
          >
            {copy.nav.blog}
            <span
              className={`absolute -bottom-1 left-0 h-[2px] origin-left bg-accent transition-all duration-300 ${
                isBlog ? 'w-full' : 'w-0 group-hover:w-full'
              }`}
            />
          </Link>
        </nav>

        <div className="flex shrink-0 items-center gap-2 md:gap-3">
          <LanguageToggle />
          <a
            {...bookingLink}
            className="rounded-lg border border-accent/80 bg-accent px-3 py-2 font-body text-[10px] font-medium uppercase tracking-wider text-white shadow-lux-sm transition hover:bg-[#4a7aef] hover:shadow-lux md:px-4 md:text-sm md:normal-case md:tracking-normal"
          >
            {copy.nav.cta}
          </a>
        </div>
      </div>
    </motion.header>
  )
}
