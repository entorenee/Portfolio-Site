// @flow
import { useEffect, useState } from 'react'

function useMediaQuery(): { isMobile: boolean } {
  const [isMobile, setIsMobile] = useState(false)

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    const handleSizeChange = ({ matches }: MediaQueryListEvent) =>
      setIsMobile(matches)

    // Window does not exist on SSR
    if (typeof window !== 'undefined') {
      const mql = window.matchMedia('(max-width: 650px)')
      mql.addListener(handleSizeChange)
      setIsMobile(mql.matches) // Set initial state in DOM

      return () => mql.removeListener(handleSizeChange)
    }
  }, [])

  return { isMobile }
}

export default useMediaQuery
