import { useScrollPosition } from '../context/ScrollContext.jsx'

export function useScrollProgress() {
  const { progress } = useScrollPosition()
  return progress
}
