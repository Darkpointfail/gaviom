import { createContext } from 'react'
import { dictionary } from './dictionary.js'

export const LanguageContext = createContext({
  lang: 'fr',
  setLang: () => {},
  copy: dictionary.fr,
})
