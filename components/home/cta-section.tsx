import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary via-accent to-primary">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6 text-balance">
          Ready to Power Your Future?
        </h2>
        <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto text-pretty">
          Join thousands of businesses across India making the switch to clean, reliable solar energy.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-lg px-8"
          >
            <Link href="/contact">
              Get a Quote <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8 bg-transparent"
          >
            <Link href="/resources/calculator">Calculate Savings</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
