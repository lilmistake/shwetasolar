import Link from "next/link"
import { ArrowUpRight, Download } from "lucide-react"
import { COMPLETE_DATASHEET } from "@/lib/products"

const PATHS = [
  { href: "/products/commercial", title: "Business rooftops", body: "Factories, warehouses, schools and offices." },
  { href: "/products/utility", title: "Solar farms", body: "Ground-mounted and large open-land projects." },
  { href: "/products/residential", title: "Homes and small systems", body: "House rooftops, solar pumps and small setups." },
]

export function RangeSection() {
  return (
    <section aria-labelledby="range-heading" className="bg-background py-20 md:py-28">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 md:px-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="flex max-w-2xl flex-col gap-4">
            <h2 id="range-heading" className="font-sans text-3xl font-semibold tracking-tight text-forest text-balance md:text-4xl">
              Find the right panel for your project
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground text-pretty">
              Tell us where it&apos;s going. Our team will recommend the best fit.
            </p>
          </div>
          <a
            href={COMPLETE_DATASHEET}
            className="inline-flex items-center gap-2 self-start font-medium text-olive underline-offset-4 hover:underline md:self-auto"
          >
            <Download className="h-4 w-4" aria-hidden="true" />
            Technical datasheets
          </a>
        </div>

        <ul className="grid gap-4 md:grid-cols-3">
          {PATHS.map((p) => (
            <li key={p.href}>
              <Link
                href={p.href}
                className="group flex h-full flex-col gap-3 rounded-3xl border border-border p-6 transition-colors hover:border-forest md:p-8"
              >
                <span className="flex items-center justify-between gap-4">
                  <span className="font-sans text-xl font-semibold text-forest">{p.title}</span>
                  <ArrowUpRight
                    className="h-5 w-5 text-olive transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </span>
                <span className="leading-relaxed text-muted-foreground">{p.body}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
