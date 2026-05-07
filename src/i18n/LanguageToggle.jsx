import { useTranslation } from './useTranslation.js'

export default function LanguageToggle() {
  const { lang, setLang, copy } = useTranslation()

  return (
    <div
      className="flex items-center gap-0.5 rounded border border-border bg-surface px-1 py-1 font-mono text-[10px] uppercase tracking-wider md:text-xs"
      role="group"
      aria-label={copy.lang.aria}
    >
      <button
        type="button"
        onClick={() => setLang('fr')}
        className={`rounded px-2 py-1 transition md:px-2.5 ${
          lang === 'fr'
            ? 'bg-accent-soft text-accent'
            : 'text-muted hover:text-fg'
        }`}
      >
        {copy.lang.fr}
      </button>
      <button
        type="button"
        onClick={() => setLang('en')}
        className={`rounded px-2 py-1 transition md:px-2.5 ${
          lang === 'en'
            ? 'bg-accent-soft text-accent'
            : 'text-muted hover:text-fg'
        }`}
      >
        {copy.lang.en}
      </button>
    </div>
  )
}
