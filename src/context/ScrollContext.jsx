import { createContext, useContext } from 'react'

/** Valeurs synchronisées avec Lenis (scroll animé = même source que ScrollTrigger) */
export const ScrollContext = createContext({
  progress: 0,
  scroll: 0,
})

export function useScrollPosition() {
  return useContext(ScrollContext)
}
