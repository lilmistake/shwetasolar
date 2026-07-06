import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-3xl bg-forest px-6 py-16 md:px-16 md:py-20 text-center shadow-xl">
          {/* Subtle imagery */}
          <div className="absolute inset-0 opacity-15" aria-hidden="true">
            <Image
              src="/solar-panels-on-green-factory-roof-with-trees.jpg"
              alt=""
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-cream mb-6 text-balance">
              Ready to Power Your Future?
            </h2>
            <p className="text-xl text-cream/85 mb-8 text-pretty">
              Join thousands of businesses across India making the switch to clean, reliable solar energy.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="bg-sage text-forest hover:bg-sage/90 text-lg px-8">
                <Link href="/contact">
                  Get a Quote <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-cream text-cream hover:bg-cream hover:text-forest text-lg px-8 bg-transparent"
              >
                <Link href="/resources/calculator">Calculate Savings</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
