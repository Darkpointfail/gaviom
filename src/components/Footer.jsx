import { Link } from 'react-router-dom'
import { site } from '../data/content'
import { useTranslation } from '../i18n/useTranslation.js'

export default function Footer() {
  const { copy } = useTranslation()

  return (
    <footer className="border-t border-border bg-bg px-4 py-16 md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div>
          <Link to="/" className="inline-block font-display text-4xl text-white hover:text-white">
            {site.name}
            <span className="text-cyan">.</span>
          </Link>
          <p className="mt-2 font-mono text-xs text-muted">{copy.footer.todoNote}</p>
        </div>
        <div className="flex flex-wrap gap-10 font-body text-sm text-muted">
          <div className="flex flex-col gap-3">
            <span className="font-mono text-xs uppercase tracking-wider text-white">
              {copy.footer.navHeading}
            </span>
            <Link to="/#services" className="hover:text-white">
              {copy.nav.services}
            </Link>
            <Link to="/#process" className="hover:text-white">
              {copy.nav.process}
            </Link>
            <Link to="/#realisations" className="hover:text-white">
              {copy.nav.work}
            </Link>
            <Link to="/blog" className="hover:text-white">
              {copy.nav.blog}
            </Link>
            <Link to="/#contact" className="hover:text-white">
              {copy.nav.contact}
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            <span className="font-mono text-xs uppercase tracking-wider text-white">
              {copy.footer.legalHeading}
            </span>
            <a href="#" className="hover:text-white">
              {copy.footer.legalNotice}
            </a>
            <a href="#" className="hover:text-white">
              {copy.footer.privacy}
            </a>
          </div>
        </div>
      </div>
      <p className="mx-auto mt-14 max-w-7xl font-mono text-xs text-muted">
        © {new Date().getFullYear()} {site.name}. {copy.footer.rights}
      </p>
    </footer>
  )
}
