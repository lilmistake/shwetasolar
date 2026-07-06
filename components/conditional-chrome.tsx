"use client"

import type { ReactNode } from "react"
import { usePathname } from "next/navigation"

// Routes that are standalone (paid-ads landing pages) and must NOT show the
// global site navigation, footer or floating widgets.
const STANDALONE_PREFIXES = ["/topcon"]

function useIsStandalone() {
  const pathname = usePathname()
  return STANDALONE_PREFIXES.some((p) => pathname === p || pathname?.startsWith(`${p}/`))
}

/** Hides global site chrome (nav, footer, floats) on standalone landing routes. */
export function ConditionalChrome({ children }: { children: ReactNode }) {
  if (useIsStandalone()) return null
  return <>{children}</>
}

/** Wraps content in the shared <main> for normal pages; standalone pages own their own <main>. */
export function ConditionalMain({ children }: { children: ReactNode }) {
  if (useIsStandalone()) return <>{children}</>
  return (
    <main id="main-content" className="min-h-screen">
      {children}
    </main>
  )
}
