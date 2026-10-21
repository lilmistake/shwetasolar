import Image from "next/image"
import { Reveal } from "@/components/topcon/reveal"
import { FACTORY_PHOTOS } from "@/lib/site"

const FACTS = [
  { value: "1.2 GW", label: "Annual module capacity" },
  { value: "100%", label: "Modules tested before dispatch" },
  { value: "30 yr", label: "Performance warranty" },
  { value: "ALMM", label: "List-I enlisted, BIS licensed" },
]

export function AboutHero() {
  return (
    <section aria-labelledby="about-heading" className="bg-background pb-16 pt-32 md:pb-24 md:pt-40">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-4 md:gap-16 md:px-6">
        <Reveal className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex max-w-3xl flex-col gap-5">
            <p className="text-sm font-medium text-muted-foreground">About Shweta Solar</p>
            <h1 id="about-heading" className="text-balance text-5xl font-semibold text-foreground md:text-7xl">
              Solar modules, built in the heart of NCR.
            </h1>
          </div>
          <p className="max-w-md text-pretty text-lg leading-relaxed text-muted-foreground">
            We manufacture high-efficiency TOPCon modules at our fully automated plant in Hapur, Uttar Pradesh, for EPCs,
            developers and solar brands across India.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="relative isolate aspect-[4/3] overflow-hidden rounded-3xl md:aspect-[21/9]">
          <Image
            src={FACTORY_PHOTOS.floor.src}
            alt={FACTORY_PHOTOS.floor.alt}
            fill
            priority
            sizes="(min-width: 1280px) 1232px, 100vw"
            className="object-cover"
          />
        </Reveal>

        <dl className="grid grid-cols-2 gap-x-6 gap-y-10 border-t border-border pt-10 md:grid-cols-4">
          {FACTS.map((fact, i) => (
            <Reveal key={fact.label} delay={0.15 + i * 0.06} className="flex flex-col gap-2">
              <dt className="order-2 text-sm leading-relaxed text-muted-foreground">{fact.label}</dt>
              <dd className="order-1 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">{fact.value}</dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  )
}
