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
    image: { src: "/images/stock/industrial-rooftop-aerial.png", alt: "Solar panels across a factory rooftop" },
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
            <h2 id="range-heading" className="text-balance text-4xl font-semibold text-foreground md:text-6xl">
              One technology. Sized for every project.
            </h2>
          </div>
          <Link
            href="/products"
            className="group inline-flex h-11 w-fit items-center gap-2 rounded-full border border-foreground/15 px-5 text-sm font-semibold text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            View all panels
            <ArrowUpRight
              className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </Link>
        </Reveal>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {SEGMENTS.map((segment, i) => {
            const copy = CARD_COPY[segment.slug]
            return (
              <Reveal key={segment.slug} delay={i * 0.1}>
                <Link
                  href={`/products/${segment.slug}`}
                  className="group relative isolate flex aspect-[3/4] flex-col justify-between overflow-hidden rounded-3xl p-6 text-primary-foreground"
                >
                  <Image
                    src={copy.image.src}
                    alt={copy.image.alt}
                    fill
                    sizes="(min-width: 768px) 400px, 100vw"
                    className="-z-10 object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                  />
                  <div
                    className="absolute inset-0 -z-10 bg-gradient-to-t from-forest via-forest/40 to-forest/10 transition-opacity duration-500 group-hover:opacity-90"
                    aria-hidden="true"
                  />

                  <div className="flex items-start justify-between gap-4">
                    <span className="rounded-full bg-primary-foreground/15 px-3 py-1 text-xs font-medium backdrop-blur">
                      {segment.powerRange}
                    </span>
                    <span className="flex size-11 items-center justify-center rounded-full bg-primary-foreground text-forest transition-transform duration-500 group-hover:rotate-45">
                      <ArrowUpRight className="size-5" aria-hidden="true" />
                    </span>
                  </div>

                  <div className="flex flex-col gap-2 transition-transform duration-500 ease-out md:translate-y-10 md:group-hover:translate-y-0">
                    <h3 className="text-2xl font-semibold">{copy.title}</h3>
                    <p className="text-pretty leading-relaxed text-primary-foreground/80 transition-opacity duration-500 md:opacity-0 md:group-hover:opacity-100">
                      {copy.text}
                    </p>
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
