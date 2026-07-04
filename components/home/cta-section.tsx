import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Calculator } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 bg-sage relative overflow-hidden">
      {/* Subtle horizontal rule from section above */}
      <div className="absolute top-0 left-0 right-0 h-px bg-forest/20" />

      {/* Large faint display text watermark */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        aria-hidden="true"
      >
        <span className="font-display text-[20vw] font-bold text-forest/[0.04] whitespace-nowrap leading-none">
          SOLAR
        </span>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
          {/* Left copy */}
          <div className="max-w-xl">
            <p className="text-forest/60 text-sm tracking-widest uppercase font-sans mb-3">Take the Next Step</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-forest mb-4 text-balance">
              Ready to Power Your Future?
            </h2>
            <p className="text-forest/70 font-sans leading-relaxed text-pretty">
              Join businesses across India making the switch to clean, reliable solar energy. Our team will size the
              right system for your needs and provide a transparent quote.
            </p>
          </div>

          {/* Right buttons */}
          <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
            <Button
              asChild
              size="lg"
              className="bg-forest text-white hover:bg-forest/80 text-base px-8 rounded-full"
            >
              <Link href="/contact">
                Get a Quote <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-forest/30 text-forest hover:bg-forest hover:text-white text-base px-8 rounded-full bg-transparent"
            >
              <Link href="/resources/calculator">
                <Calculator className="mr-2 h-5 w-5" />
                Calculate Savings
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
