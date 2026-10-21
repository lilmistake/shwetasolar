import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { SEGMENTS, familiesFor } from "@/lib/products"

export function RangeSection() {
  return (
    <section aria-labelledby="range-heading" className="bg-background py-20 md:py-28">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-4 md:px-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="flex max-w-2xl flex-col gap-3">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-olive">The range</p>
            <h2 id="range-heading" className="font-display text-4xl uppercase text-forest text-balance md:text-5xl">
              One technology, sized for every roof and field
            </h2>
          </div>
          <Link href="/products" className="font-medium text-forest underline-offset-4 hover:underline">
            Compare all module families
          </Link>
        </div>

        <ul className="grid gap-6 md:grid-cols-3">
          {SEGMENTS.map((segment) => {
            const families = familiesFor(segment.slug)
            return (
              <li key={segment.slug}>
                <Link
                  href={`/products/${segment.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-xl"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={segment.image.src}
                      alt={segment.image.alt}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-4 p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex flex-col gap-1">
                        <h3 className="font-display text-2xl uppercase text-forest">{segment.shortName}</h3>
                        <p className="font-display text-4xl text-olive">{segment.powerRange}</p>
                      </div>
                      <ArrowUpRight
                        className="h-6 w-6 shrink-0 text-forest transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        aria-hidden="true"
                      />
                    </div>
                    <p className="leading-relaxed text-muted-foreground">{segment.summary}</p>
                    <p className="mt-auto border-t border-border pt-4 text-sm text-olive">
                      {families.map((f) => f.model).join(" · ")}
                    </p>
                  </div>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
