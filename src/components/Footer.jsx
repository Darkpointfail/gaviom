import { Link, useLocation } from 'react-router-dom'
import { site } from '../data/content'
import { CONTACT_EMAIL, LINKEDIN_URL } from '../config/site.js'
import { useTranslation } from '../i18n/useTranslation.js'
import { getBookingLinkProps } from '../config/calendly.js'

export default function Footer() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'
  const { copy } = useTranslation()
  const bookingLink = getBookingLinkProps()
  const f = copy.footer

  const sectionLink = (hashId, className, children) =>
    isHome ? (
      <a href={`#${hashId}`} className={className}>
        {children}
      </a>
    ) : (
      <Link to={{ pathname: '/', hash: hashId }} className={className}>
        {children}
      </Link>
    )

  const linkMuted = 'text-muted transition-colors hover:text-fg'

  return (
    <footer className="border-t border-white/[0.06] bg-bg px-4 py-16 md:px-8 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="flex w-full flex-col items-center gap-12 lg:flex-row lg:justify-center lg:gap-x-6 xl:gap-x-10">
          <nav
            aria-label={f.colServices}
            className="w-full max-w-[13rem] shrink-0 text-center lg:text-left"
          >
            <span className="font-mono text-xs uppercase tracking-wider text-fg">
              {f.colServices}
            </span>
            <div className="mt-4 flex flex-col gap-2.5 font-body text-sm">
              {sectionLink('services', linkMuted, f.serviceAudit)}
              {sectionLink('services', linkMuted, f.serviceTransform)}
              {sectionLink('formations', linkMuted, f.serviceTraining)}
            </div>
          </nav>

          <div className="shrink-0 px-2 text-center sm:px-4 lg:px-6 xl:px-8">
            <Link
              to="/"
              className="inline-block font-display text-2xl text-fg transition-colors hover:text-accent"
            >
              {site.name}{' '}
              <span className="font-body text-base font-light text-muted">{site.advisory}</span>
            </Link>
            <p className="mx-auto mt-3 max-w-sm font-body text-sm leading-relaxed text-muted md:max-w-md">
              {f.tagline}
            </p>
          </div>

          <div className="w-full max-w-[13rem] shrink-0 text-center lg:text-right">
            <span className="font-mono text-xs uppercase tracking-wider text-fg">
              {f.colContact}
            </span>
            <div className="mt-4 flex flex-col gap-2.5 font-body text-sm">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-fg transition-colors hover:text-accent lg:text-right"
              >
                {CONTACT_EMAIL}
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${linkMuted} lg:text-right`}
              >
                {f.linkedinLabel}
              </a>
              <a
                {...bookingLink}
                className="font-medium text-accent transition-colors hover:text-[#4a7aef] lg:text-right"
              >
                {f.bookCall}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/[0.06] pt-8 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
          <p className="text-center font-body text-xs text-muted sm:text-left">
            © {new Date().getFullYear()} {site.name} {site.advisory}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-1 font-body text-xs text-muted sm:justify-end">
            <a href="#" className="text-muted transition-colors hover:text-fg">
              {f.legalNotice}
            </a>
            <span className="px-2 text-white/25" aria-hidden>
              ·
            </span>
            <a href="#" className="text-muted transition-colors hover:text-fg">
              {f.privacy}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
