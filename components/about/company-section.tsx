import Image from "next/image"
import { Bot, Cpu, Layers, Truck } from "lucide-react"
import { Reveal } from "@/components/topcon/reveal"
import { FACTORY_PHOTOS } from "@/lib/site"

const CAPABILITIES = [
  {
    icon: Bot,
    title: "Fully automated",
    text: "Automated stringing, lamination and testing lines, backed by in-house R&D.",
  },
  {
    icon: Cpu,
    title: "Monitored at every step",
    text: "AI-based yield and quality monitoring follows each module down the line.",
  },
  {
    icon: Layers,
    title: "Ready for what's next",
    text: "Dedicated lines for Mono PERC and n-type TOPCon, with HJT-ready capacity.",
  },
  {
    icon: Truck,
    title: "Fast dispatch",
    text: "On the Hapur–Ghaziabad corridor, with quick road access to every part of India.",
  },
]

export function CompanySection() {
  return (
    <section aria-labelledby="company-heading" className="bg-background py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 md:px-6 lg:grid-cols-2 lg:gap-20">
        <Reveal className="flex flex-col gap-6">
          <p className="text-sm font-medium text-muted-foreground">Who we are</p>
          <h2 id="company-heading" className="text-balance text-4xl font-semibold text-foreground md:text-5xl">
            A modern manufacturer, built for partners.
          </h2>
          <div className="flex flex-col gap-4 text-pretty leading-relaxed text-muted-foreground">
            <p>
              Shweta Solar combines modern technology, quality products and professional service to speed up
              India&apos;s move to clean energy. We supply reliable modules for commercial, industrial and utility
              projects, and work as a manufacturing partner for solar brands.
            </p>
            <p>
              From the first conversation to commissioning, we keep our process transparent and our performance
              dependable, so our partners can plan with confidence.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="relative isolate min-h-80 overflow-hidden rounded-3xl">
          <Image
            src={FACTORY_PHOTOS.twinHeads.src}
            alt={FACTORY_PHOTOS.twinHeads.alt}
            fill
            sizes="(min-width: 1024px) 600px, 100vw"
            className="object-cover"
          />
        </Reveal>

        <ul className="grid gap-4 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
          {CAPABILITIES.map(({ icon: Icon, title, text }, i) => (
            <Reveal
              as="li"
              key={title}
              delay={0.1 + i * 0.06}
              className="flex flex-col gap-6 rounded-3xl border border-border bg-muted p-7"
            >
              <span className="flex size-12 items-center justify-center rounded-2xl bg-background text-primary">
                <Icon className="size-6" aria-hidden="true" />
              </span>
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold text-foreground">{title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{text}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
