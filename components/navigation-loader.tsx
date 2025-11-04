"use client"

import { useEffect, useState } from "react"
import { usePathname, useSearchParams } from "next/navigation"
import { Loader2 } from "lucide-react"

export function NavigationLoader() {
  const [isLoading, setIsLoading] = useState(false)
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    setIsLoading(false)
  }, [pathname, searchParams])

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const link = target.closest("a")

      if (link && link.href && !link.href.startsWith("#") && !link.target) {
        const url = new URL(link.href)
        // Only show loader for internal navigation
        if (url.origin === window.location.origin && url.pathname !== pathname) {
          setIsLoading(true)
        }
      }
    }

    document.addEventListener("click", handleClick)
    return () => document.removeEventListener("click", handleClick)
  }, [pathname])

  if (!isLoading) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/20 backdrop-blur-sm"
      role="status"
      aria-live="polite"
      aria-label="Loading page"
    >
      <div className="bg-white rounded-full p-4 shadow-2xl">
        <Loader2 className="h-8 w-8 text-forest animate-spin" aria-hidden="true" />
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  )
}
