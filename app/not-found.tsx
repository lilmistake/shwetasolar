import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, Search } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cream via-sage/10 to-cream flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        <div className="mb-8">
          <h1 className="font-display text-9xl md:text-[12rem] font-bold text-forest mb-4">404</h1>
          <div className="h-2 w-32 bg-olive mx-auto rounded-full mb-8" />
          <h2 className="font-display text-3xl md:text-5xl font-bold text-forest mb-4">Page Not Found</h2>
          <p className="text-lg md:text-xl text-olive max-w-lg mx-auto leading-relaxed">
            The page you're looking for seems to have wandered off the grid. Let's get you back on track.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button asChild size="lg" className="bg-forest text-cream hover:bg-olive">
            <Link href="/">
              <Home className="mr-2 h-5 w-5" />
              Go Home
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-forest text-forest hover:bg-sage/20 bg-transparent"
          >
            <Link href="/contact">
              <Search className="mr-2 h-5 w-5" />
              Contact Support
            </Link>
          </Button>
        </div>

        <div className="mt-12 pt-8 border-t border-sage/20">
          <p className="text-olive mb-4">Quick Links:</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/products/mono-perc" className="text-forest hover:text-olive transition-colors font-medium">
              Products
            </Link>
            <Link href="/about" className="text-forest hover:text-olive transition-colors font-medium">
              About Us
            </Link>
            <Link href="/sustainability" className="text-forest hover:text-olive transition-colors font-medium">
              Sustainability
            </Link>
            <Link href="/resources/calculator" className="text-forest hover:text-olive transition-colors font-medium">
              Solar Calculator
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
