// @flow
import { useEffect, useState } from 'react';

function useMediaQuery(): { isMobile: boolean } {
  if (typeof window === 'undefined') return { isMobile: false };

  const mql = window.matchMedia('(max-width: 650px)');
  const [isMobile, setIsMobile] = useState(mql.matches);

  const handleSizeChange = ({ matches }: MediaQueryListEvent) => setIsMobile(matches);

  useEffect(() => {
    mql.addListener(handleSizeChange);

    return () => mql.removeListener(handleSizeChange);
  }, []);

  return { isMobile };
}

export default useMediaQuery;
