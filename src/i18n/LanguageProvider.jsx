import {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { LanguageContext } from './context.js'
import { dictionary } from './dictionary.js'

const STORAGE_KEY = 'axiom-lang'

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(() => {
    if (typeof window === 'undefined') return 'fr'
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === 'en' || saved === 'fr') return saved
    const nav = navigator.language || ''
    return nav.toLowerCase().startsWith('fr') ? 'fr' : 'en'
  })

  const setLang = useCallback((next) => {
    setLangState(next === 'en' ? 'en' : 'fr')
  }, [])

  const copy = dictionary[lang]

  useEffect(() => {
    document.documentElement.lang = lang === 'fr' ? 'fr' : 'en'
    localStorage.setItem(STORAGE_KEY, lang)

    const metaDescription =
      lang === 'fr'
        ? 'Automatisez vos opérations. Scalez votre business. GAVIOM — agents IA, automatisation et intégrations métier.'
        : 'Automate your operations. Scale your business. GAVIOM — AI agents, automation, and business integrations.'
    const el = document.querySelector('meta[name="description"]')
    if (el) el.setAttribute('content', metaDescription)

    document.title = 'GAVIOM — AI Studio'
  }, [lang])

  const value = useMemo(
    () => ({
      lang,
      setLang,
      copy,
    }),
    [lang, setLang, copy],
  )

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  )
}
