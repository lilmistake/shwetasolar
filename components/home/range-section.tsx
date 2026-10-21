import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Reveal } from "@/components/topcon/reveal"
import { SEGMENTS, type SegmentSlug } from "@/lib/products"

const CARD_COPY: Record<SegmentSlug, { title: string; text: string; image: { src: string; alt: string } }> = {
  residential: {
    title: "Homes & small rooftops",
    text: "Lighter, compact panels that fit tight roofs and qualify for PM Surya Ghar.",
    image: { src: "/images/stock/home-rooftop.png", alt: "Solar panels on the terrace of a modern home" },
  },
  commercial: {
    title: "Factories & businesses",
    text: "High output per panel, still easy for two people to carry onto a roof.",
    image: { src: "/images/factory/topcon-module-on-line.jpg", alt: "Finished commercial solar panel on the production line" },
  },
  utility: {
    title: "Solar farms",
    text: "Our most powerful panels, made for ground-mount plants and trackers.",
    image: { src: "/images/stock/utility-solar-farm.png", alt: "Rows of solar panels across a large solar farm" },
  },
}

export function RangeSection() {
  return (
    <section aria-labelledby="range-heading" className="bg-muted py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="flex max-w-2xl flex-col gap-4">
            <p className="text-sm font-medium text-muted-foreground">Our panels</p>
            <h2 id="range-heading" className="text-balance text-4xl font-semibold text-foreground md:text-5xl">
              One technology. Sized for every project.
            </h2>
          </div>
          <Link href="/products" className="inline-flex items-center gap-2 text-sm font-medium text-primary">
            View all panels
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </Link>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {SEGMENTS.map((segment, i) => {
            const copy = CARD_COPY[segment.slug]
            return (
              <Reveal key={segment.slug} delay={i * 0.1}>
                <Link
                  href={`/products/${segment.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-3xl bg-card transition-shadow duration-500 hover:shadow-2xl"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={copy.image.src}
                      alt={copy.image.alt}
                      fill
                      sizes="(min-width: 768px) 400px, 100vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-xs font-medium text-foreground backdrop-blur">
                      {segment.powerRange}
                    </span>
                  </div>
                  <div className="flex flex-1 items-start justify-between gap-4 p-6">
                    <div className="flex flex-col gap-2">
                      <h3 className="text-xl font-semibold text-card-foreground">{copy.title}</h3>
                      <p className="leading-relaxed text-muted-foreground">{copy.text}</p>
                    </div>
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-border transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <ArrowUpRight className="size-4" aria-hidden="true" />
                      <span className="sr-only">View {copy.title} panels</span>
                    </span>
                  </div>
                </Link>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
