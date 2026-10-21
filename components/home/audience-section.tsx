import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"
import { Reveal } from "@/components/topcon/reveal"

const AUDIENCES = [
  {
    eyebrow: "For businesses & factories",
    title: "Cut your power bill with panels made to last.",
    points: [
      "More power from limited roof space",
      "30-year performance warranty",
      "Approved for subsidy and net-metering projects",
    ],
    cta: { label: "See rooftop panels", href: "/products/commercial" },
    image: { src: "/images/stock/industrial-rooftop-aerial.png", alt: "Factory rooftop solar installation" },
  },
  {
    eyebrow: "For EPCs & installers",
    title: "A supplier you can plan projects around.",
    points: [
      "1.2 GW a year for steady, on-time supply",
      "Every panel ships with its own test report",
      "Pricing, datasheets and dispatch from one team",
    ],
    cta: { label: "Partner with us", href: "/topcon" },
    image: { src: "/images/stock/epc-installers.png", alt: "Installers mounting a solar panel on a rooftop" },
  },
]

export function AudienceSection() {
  return (
    <section aria-labelledby="audience-heading" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <Reveal className="flex max-w-2xl flex-col gap-4">
          <p className="text-sm font-medium text-muted-foreground">Who we work with</p>
          <h2 id="audience-heading" className="text-balance text-4xl font-semibold text-foreground md:text-5xl">
            Built for the people who build solar.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {AUDIENCES.map((a, i) => (
            <Reveal key={a.eyebrow} delay={i * 0.1}>
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={a.image.src}
                    alt={a.image.alt}
                    fill
                    sizes="(min-width: 768px) 600px, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-6 p-6 md:p-8">
                  <div className="flex flex-col gap-3">
                    <p className="text-sm font-medium text-muted-foreground">{a.eyebrow}</p>
                    <h3 className="text-balance text-2xl font-semibold text-card-foreground md:text-3xl">{a.title}</h3>
                  </div>
                  <ul className="flex flex-col gap-3">
                    {a.points.map((p) => (
                      <li key={p} className="flex items-start gap-3 leading-relaxed text-card-foreground">
                        <span className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-muted">
                          <Check className="size-3 text-primary" aria-hidden="true" />
                        </span>
                        {p}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={a.cta.href}
                    className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-primary"
                  >
                    {a.cta.label}
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
