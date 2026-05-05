import { useTranslation } from './useTranslation.js'

export default function LanguageToggle() {
  const { lang, setLang, copy } = useTranslation()

  return (
    <div
      className="flex items-center gap-0.5 rounded border border-border/80 bg-bg/60 px-1 py-1 font-mono text-[10px] uppercase tracking-wider backdrop-blur-sm md:text-xs"
      role="group"
      aria-label={copy.lang.aria}
    >
      <button
        type="button"
        onClick={() => setLang('fr')}
        className={`rounded px-2 py-1 transition md:px-2.5 ${
          lang === 'fr'
            ? 'bg-cyan/15 text-cyan'
            : 'text-muted hover:text-white'
        }`}
      >
        {copy.lang.fr}
      </button>
      <button
        type="button"
        onClick={() => setLang('en')}
        className={`rounded px-2 py-1 transition md:px-2.5 ${
          lang === 'en'
            ? 'bg-cyan/15 text-cyan'
            : 'text-muted hover:text-white'
        }`}
      >
        {copy.lang.en}
      </button>
    </div>
  )
}
