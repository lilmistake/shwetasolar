import Image from "next/image"
import { Factory, ScanLine, SunMedium } from "lucide-react"
import { Reveal } from "@/components/topcon/reveal"
import { CountUp } from "@/components/topcon/count-up"
import { FACTORY_PHOTOS } from "@/lib/site"

const REASONS = [
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
        <Reveal className="flex max-w-2xl flex-col gap-4">
          <p className="text-sm font-medium text-muted-foreground">Why Shweta Solar</p>
          <h2 id="reasons-heading" className="text-balance text-4xl font-semibold text-foreground md:text-6xl">
            Panels you can count on, for decades.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-4 md:grid-cols-3 md:grid-rows-2">
          <Reveal className="group relative isolate flex min-h-[26rem] flex-col justify-end overflow-hidden rounded-3xl p-8 text-primary-foreground md:col-span-2 md:row-span-2 md:p-12">
            <Image
              src={FACTORY_PHOTOS.busbarMacro.src}
              alt=""
              fill
              sizes="(min-width: 768px) 800px, 100vw"
              className="-z-20 object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-105"
            />
            <div
              className="absolute inset-0 -z-10 bg-gradient-to-tr from-forest via-forest/70 to-forest/10"
              aria-hidden="true"
            />
            <p className="text-sm font-medium text-sage">Performance warranty</p>
            <p className="mt-2 text-7xl font-semibold tracking-tight md:text-9xl">
              <CountUp to={30} suffix="" />
              <span className="text-4xl md:text-6xl"> years</span>
            </p>
            <h3 className="mt-6 max-w-md text-balance text-2xl font-semibold md:text-3xl">Built to last 30 years.</h3>
            <p className="mt-3 max-w-md text-pretty leading-relaxed text-primary-foreground/75">
              Our panels keep producing at least 87% of their power after three decades, and we put that in writing.
            </p>
          </Reveal>

          {REASONS.slice(0, 2).map(({ icon: Icon, title, text }, i) => (
            <Reveal
              key={title}
              delay={0.1 + i * 0.08}
              className="group flex flex-col justify-between gap-8 rounded-3xl border border-border bg-muted p-8 transition-colors duration-500 hover:border-primary hover:bg-primary hover:text-primary-foreground"
            >
              <span className="flex size-12 items-center justify-center rounded-2xl bg-background text-primary">
                <Icon className="size-6" aria-hidden="true" />
              </span>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="leading-relaxed text-muted-foreground transition-colors duration-500 group-hover:text-primary-foreground/75">
                  {text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {REASONS.slice(2).map(({ icon: Icon, title, text }) => (
          <Reveal
            key={title}
            delay={0.1}
            className="mt-4 flex flex-col gap-6 rounded-3xl border border-border bg-muted p-8 md:flex-row md:items-center md:justify-between"
          >
            <div className="flex items-center gap-5">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-background text-primary">
                <Icon className="size-6" aria-hidden="true" />
              </span>
              <h3 className="text-xl font-semibold text-foreground">{title}</h3>
            </div>
            <p className="max-w-xl leading-relaxed text-muted-foreground">{text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
