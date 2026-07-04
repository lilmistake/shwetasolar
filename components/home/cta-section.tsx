import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Calculator } from "lucide-react"

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-[#020e06] pt-20 pb-40">
      {/* Bottom fade into the forest footer */}
      <div
        className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[#004636]"
        aria-hidden="true"
      />

      {/* Earth horizon — the "Built for Earth" payoff, curving up from below */}
      <div
        className="absolute left-1/2 -translate-x-1/2 pointer-events-none select-none"
        aria-hidden="true"
        style={{
          bottom: "-72%",
          width: "170%",
          aspectRatio: "1 / 1",
          borderRadius: "50%",
          background:
            "radial-gradient(circle at 50% 0%, rgba(169,180,137,0.22) 0%, rgba(0,70,54,0.55) 26%, rgba(2,14,6,0) 52%)",
        }}
      />
      {/* Bright atmospheric rim on the horizon */}
      <div
        className="absolute left-1/2 -translate-x-1/2 pointer-events-none select-none"
        aria-hidden="true"
        style={{
          bottom: "-72%",
          width: "170%",
          aspectRatio: "1 / 1",
          borderRadius: "50%",
          boxShadow: "0 0 60px 2px rgba(169,180,137,0.25), inset 0 2px 20px rgba(169,180,137,0.15)",
          borderTop: "1px solid rgba(169,180,137,0.35)",
        }}
      />

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 font-sans text-sm uppercase tracking-widest text-sage/70">Take the Next Step</p>
          <h2 className="mb-5 text-balance font-display text-4xl font-bold text-white md:text-5xl">
            Ready to Power Your Future?
          </h2>
          <p className="mx-auto mb-10 max-w-xl text-pretty font-sans leading-relaxed text-white/60">
            Join businesses across India making the switch to clean, reliable solar energy. Our team will size the right
            system for your needs and provide a transparent quote.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="rounded-full bg-sage px-8 text-base text-forest hover:bg-sage/90">
              <Link href="/contact">
                Get a Quote <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-2 border-sage/40 bg-transparent px-8 text-base text-sage hover:bg-sage hover:text-forest"
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
