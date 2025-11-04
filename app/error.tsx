"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { AlertTriangle, RefreshCw, Home } from "lucide-react"
import Link from "next/link"

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream via-sage/10 to-cream flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-forest/10 mb-6">
            <AlertTriangle className="h-12 w-12 text-forest" />
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-forest mb-4">Something Went Wrong</h1>
          <div className="h-2 w-32 bg-olive mx-auto rounded-full mb-8" />
          <p className="text-lg md:text-xl text-olive max-w-lg mx-auto leading-relaxed mb-4">
            We encountered an unexpected error. Don't worry, our team has been notified and we're working on it.
          </p>
          {error.message && (
            <div className="bg-sage/10 border border-sage/20 rounded-lg p-4 max-w-lg mx-auto mb-8">
              <p className="text-sm text-forest font-mono">{error.message}</p>
            </div>
          )}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button onClick={reset} size="lg" className="bg-forest text-cream hover:bg-olive">
            <RefreshCw className="mr-2 h-5 w-5" />
            Try Again
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-forest text-forest hover:bg-sage/20 bg-transparent"
          >
            <Link href="/">
              <Home className="mr-2 h-5 w-5" />
              Go Home
            </Link>
          </Button>
        </div>

        <div className="mt-12 pt-8 border-t border-sage/20">
          <p className="text-olive mb-4">Need immediate assistance?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="mailto:admin@shwetasolar.in"
              className="text-forest hover:text-olive transition-colors font-medium"
            >
              admin@shwetasolar.in
            </a>
            <span className="hidden sm:inline text-sage">|</span>
            <a href="tel:18001204771200" className="text-forest hover:text-olive transition-colors font-medium">
              1800 120 477120
            </a>
            <span className="hidden sm:inline text-sage">|</span>
            <a
              href="https://wa.me/919289969501"
              target="_blank"
              rel="noopener noreferrer"
              className="text-forest hover:text-olive transition-colors font-medium"
            >
              WhatsApp Support
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
