import { BadgeIndianRupee, Truck, Headset, Factory } from "lucide-react"

const REASONS = [
  {
    icon: BadgeIndianRupee,
    title: "Direct-from-manufacturer pricing",
    body: "Buy from the factory floor, not a reseller — sharper pricing on every module and container.",
  },
  {
    icon: Truck,
    title: "Faster dispatch across North India",
    body: "Manufacturing near Delhi means shorter lead times and lower freight for northern projects.",
  },
  {
    icon: Headset,
    title: "Dedicated account manager",
    body: "A responsive point of contact and after-sales support — not a ticket queue.",
  },
  {
    icon: Factory,
    title: "1.2 GW manufacturing capacity",
    body: "Scale to supply utility, C&I and dealer volumes with reliable, repeatable output.",
  },
]

export function WhyUs() {
  return (
    <section id="why-us" className="bg-forest text-cream">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold md:text-4xl">Why choose Shweta Solar</h2>
          <p className="mt-4 text-pretty text-cream/80">
            A leaner, more responsive Indian manufacturer — built to move faster than the giants.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {REASONS.map((r) => (
            <div key={r.title} className="rounded-2xl border border-cream/15 bg-cream/5 p-6">
              <r.icon className="h-7 w-7 text-amber-400" aria-hidden="true" />
              <h3 className="mt-4 text-base font-semibold">{r.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-cream/80">{r.body}</p>
            </div>
          ))}
        </div>

        {/* Social proof — capacity/credential stat band (no fabricated testimonials) */}
        <div className="mt-14 grid gap-6 rounded-2xl border border-cream/15 bg-cream/5 p-8 text-center sm:grid-cols-3">
          <div>
            <div className="text-3xl font-bold text-amber-400 md:text-4xl">1.2 GW</div>
            <div className="mt-1 text-sm text-cream/80">Annual manufacturing capacity</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-amber-400 md:text-4xl">30 Yr</div>
            <div className="mt-1 text-sm text-cream/80">Performance warranty</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-amber-400 md:text-4xl">Pan-India</div>
            <div className="mt-1 text-sm text-cream/80">Supply & logistics reach</div>
          </div>
        </div>
      </div>
    </section>
  )
}
