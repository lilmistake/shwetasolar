import { Factory, ScanLine, ShieldCheck, SunMedium } from "lucide-react"
import { Reveal } from "@/components/topcon/reveal"

const REASONS = [
  {
    icon: ShieldCheck,
    title: "Built to last 30 years",
    text: "Our panels keep producing at least 87% of their power after three decades, and we put that in writing.",
  },
  {
    icon: SunMedium,
    title: "Power from both sides",
    text: "Glass on the front and back catches reflected light too, so you get extra energy from the same space.",
  },
  {
    icon: Factory,
    title: "Made in India",
    text: "Built in Uttar Pradesh and government-approved, so our panels qualify for subsidy and public projects.",
  },
  {
    icon: ScanLine,
    title: "Nothing ships untested",
    text: "Every single panel is scanned and power-tested before it leaves the factory.",
  },
]

export function ReasonsSection() {
  return (
    <section aria-labelledby="reasons-heading" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <Reveal className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
          <p className="text-sm font-medium text-muted-foreground">Why Shweta Solar</p>
          <h2 id="reasons-heading" className="text-balance text-4xl font-semibold text-foreground md:text-5xl">
            Panels you can count on, for decades.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {REASONS.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 0.08} className="group flex flex-col gap-5 bg-background p-8">
              <span className="flex size-12 items-center justify-center rounded-2xl bg-muted transition-colors duration-300 group-hover:bg-primary">
                <Icon
                  className="size-6 text-primary transition-colors duration-300 group-hover:text-primary-foreground"
                  aria-hidden="true"
                />
              </span>
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold text-foreground">{title}</h3>
                <p className="leading-relaxed text-muted-foreground">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
