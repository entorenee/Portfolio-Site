import { useEffect, useState } from 'react'

interface HookReturn {
  isMobile: boolean
}

function useMediaQuery(): HookReturn {
  const [isMobile, setIsMobile] = useState(false)

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    const handleSizeChange = ({ matches }: MediaQueryListEvent): void =>
      setIsMobile(matches)

    // Window does not exist on SSR
    if (typeof window !== 'undefined') {
      const mql = window.matchMedia('(max-width: 650px)')
      mql.addListener(handleSizeChange)
      setIsMobile(mql.matches) // Set initial state in DOM

      return (): void => mql.removeListener(handleSizeChange)
    }
  }, [])

  return { isMobile }
}

export default useMediaQuery
