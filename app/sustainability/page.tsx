import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Check, Droplets, Factory, Leaf, Recycle, Sun, TreePine } from "lucide-react"
import { PageHero } from "@/components/site/page-hero"
import { Reveal } from "@/components/topcon/reveal"
import { ClosingCta } from "@/components/home/closing-cta"

export const metadata: Metadata = {
  title: "Sustainability - Our Environmental Commitment & Green Initiatives",
  description:
    "Discover Shweta Solar's sustainability initiatives: renewable-powered manufacturing, material recovery, zero waste goals, and our path to carbon neutrality.",
  alternates: { canonical: "/sustainability" },
  openGraph: {
    title: "Shweta Solar Sustainability - Carbon Neutral Solar Manufacturing",
    description:
      "Sustainable solar manufacturing with circular economy practices, water conservation, reforestation programs, and a commitment to carbon neutrality.",
  },
}

const INITIATIVES = [
  {
    icon: Sun,
    title: "Renewable energy",
    text: "Our facilities run on renewable sources, including our own rooftop solar, keeping our carbon footprint low.",
  },
  {
    icon: Recycle,
    title: "Circular economy",
    text: "A recycling program recovers 95% of materials from manufacturing waste and end-of-life panels.",
  },
  {
    icon: Droplets,
    title: "Water conservation",
    text: "Closed-loop water recycling cuts consumption by 80% across our production lines.",
  },
  {
    icon: Factory,
    title: "Zero waste manufacturing",
    text: "92% of waste is already diverted from landfill. Our goal is zero waste to landfill by 2026.",
  },
  {
    icon: TreePine,
    title: "Reforestation",
    text: "For every megawatt we produce, we plant 1,000 trees with local communities.",
  },
  {
    icon: Leaf,
    title: "Responsible supply chain",
    text: "We work with suppliers who meet strict environmental standards, from raw material to delivery.",
  },
]

const IMPACT = [
  { value: "2.5M+", label: "Tonnes of CO₂ offset annually" },
  { value: "95%", label: "Material recovery rate" },
  { value: "500K+", label: "Trees planted" },
  { value: "80%", label: "Less water used" },
]

const CARBON_STEPS = [
  "Renewable energy for all manufacturing and office facilities",
  "Electric vehicles for logistics and employee transport",
  "Carbon offset projects, including reforestation",
  "Optimised supply chain logistics to cut transport emissions",
]

const GOALS = [
  { title: "Fully circular", text: "Zero waste and 100% recyclable products." },
  { title: "Carbon negative", text: "Remove more CO₂ than our operations emit." },
  { title: "1 million trees", text: "Planted across India through our reforestation program." },
  { title: "Zero water waste", text: "Closed-loop systems with no freshwater consumption." },
]

export default function SustainabilityPage() {
  return (
    <>
      <PageHero
        eyebrow="Sustainability"
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Sustainability", path: "/sustainability" },
        ]}
        title="Clean energy, made cleanly."
        intro="Making solar panels should not cost the planet. We build sustainability into our factory, our supply chain and our products."
        image={{
          src: "/solar-panels-on-green-factory-roof-with-trees.jpg",
          alt: "Solar panels on a factory roof surrounded by trees",
        }}
      />

      <section aria-labelledby="initiatives-heading" className="bg-background py-16 md:py-24">
        <div className="mx-auto flex max-w-7xl flex-col gap-12 px-4 md:px-6">
          <Reveal className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="flex max-w-2xl flex-col gap-4">
              <p className="text-sm font-medium text-muted-foreground">Our initiatives</p>
              <h2 id="initiatives-heading" className="text-balance text-4xl font-semibold text-foreground md:text-5xl">
                Responsibility at every step of the line.
              </h2>
            </div>
            <p className="max-w-md text-pretty leading-relaxed text-muted-foreground">
              The move to renewable energy has to come with sustainable manufacturing. These are the programs that make
              that real at Shweta Solar.
            </p>
          </Reveal>

          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {INITIATIVES.map(({ icon: Icon, title, text }, i) => (
              <Reveal
                as="li"
                key={title}
                delay={0.06 + i * 0.05}
                className="flex flex-col gap-10 rounded-3xl border border-border bg-muted p-7"
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

      <section aria-labelledby="impact-heading" className="bg-background pb-16 md:pb-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <Reveal className="flex flex-col gap-12 rounded-3xl bg-forest p-8 text-primary-foreground md:p-14">
            <h2 id="impact-heading" className="max-w-xl text-balance text-3xl font-semibold md:text-4xl">
              Our environmental impact so far
            </h2>
            <dl className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
              {IMPACT.map((m) => (
                <div key={m.label} className="flex flex-col gap-2 border-t border-primary-foreground/20 pt-5">
                  <dt className="order-2 text-sm leading-relaxed text-primary-foreground/70">{m.label}</dt>
                  <dd className="order-1 text-4xl font-semibold md:text-5xl">{m.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="carbon-heading" className="bg-background pb-16 md:pb-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 md:px-6 lg:grid-cols-2 lg:gap-20">
          <Reveal className="relative isolate min-h-80 overflow-hidden rounded-3xl">
            <Image
              src="/green-factory-with-solar-panels.jpg"
              alt="Shweta Solar facility with rooftop solar panels"
              fill
              sizes="(min-width: 1024px) 600px, 100vw"
              className="object-cover"
            />
          </Reveal>
          <Reveal delay={0.1} className="flex flex-col justify-center gap-6">
            <p className="text-sm font-medium text-muted-foreground">Carbon neutrality</p>
            <h2 id="carbon-heading" className="text-balance text-4xl font-semibold text-foreground md:text-5xl">
              Carbon neutral across all operations by 2027.
            </h2>
            <ul className="flex flex-col gap-4">
              {CARBON_STEPS.map((step) => (
                <li key={step} className="flex gap-3">
                  <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-muted text-primary">
                    <Check className="size-3.5" aria-hidden="true" />
                  </span>
                  <span className="leading-relaxed text-foreground">{step}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="goals-heading" className="border-t border-border bg-background py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 md:px-6 lg:grid-cols-3">
          <Reveal className="flex flex-col gap-4">
            <p className="text-sm font-medium text-muted-foreground">Looking ahead</p>
            <h2 id="goals-heading" className="text-balance text-4xl font-semibold text-foreground">
              Our 2030 goals
            </h2>
            <Link
              href="/resources/calculator"
              className="group mt-2 inline-flex items-center gap-2 text-sm font-semibold text-foreground"
            >
              Calculate your own CO₂ savings
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
          </Reveal>
          <dl className="grid gap-x-10 sm:grid-cols-2 lg:col-span-2">
            {GOALS.map((g, i) => (
              <Reveal key={g.title} delay={0.06 + i * 0.05} className="flex flex-col gap-2 border-t border-border py-6">
                <dt className="text-xl font-semibold text-foreground">{g.title}</dt>
                <dd className="leading-relaxed text-muted-foreground">{g.text}</dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      <ClosingCta />
    </>
  )
}
