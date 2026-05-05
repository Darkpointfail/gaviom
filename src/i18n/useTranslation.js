import { useContext } from 'react'
import { LanguageContext } from './context.js'

export function useTranslation() {
  return useContext(LanguageContext)
}
