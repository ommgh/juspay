import { useEffect, useState } from "react";

export function useMediaQuery(query: string, defaultMatch = false) {
  const [matches, setMatches] = useState(defaultMatch);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;

    const mql = window.matchMedia(query);
    const handler = (e: MediaQueryListEvent) => setMatches(e.matches);

    setMatches(mql.matches);

    if ("addEventListener" in mql) {
      mql.addEventListener("change", handler);
      return () => mql.removeEventListener("change", handler);
    } else {
      // @ts-expect-error - legacy
      mql.addListener(handler);
      return () => {
        // @ts-expect-error - legacy
        mql.removeListener(handler);
      };
    }
  }, [query]);

  return matches;
}

export function useIsMobile(breakpointPx = 1024) {
  return useMediaQuery(`(max-width: ${breakpointPx}px)`);
}
