import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Download, FileText } from "lucide-react"
import { Breadcrumbs } from "@/components/site/breadcrumbs"
import { COMPLETE_DATASHEET, FAMILIES, RANGE_SUMMARY, SEGMENTS } from "@/lib/products"
import { FACTORY_PHOTOS, SITE } from "@/lib/site"

export const metadata: Metadata = {
  title: "TOPCon Solar Panel Datasheets (PDF Download)",
  description: `Download Shweta Solar n-type TOPCon module datasheets: residential, commercial, utility and the complete ${RANGE_SUMMARY.minW}–${RANGE_SUMMARY.maxW} W range. Electrical, mechanical and warranty specifications.`,
  alternates: { canonical: "/resources/downloads" },
}

const DOCS = [
  {
    title: "Complete range datasheet",
    body: `All ${FAMILIES.length} module families, ${RANGE_SUMMARY.minW}–${RANGE_SUMMARY.maxW} W, in one document.`,
    href: COMPLETE_DATASHEET,
    featured: true,
  },
  ...SEGMENTS.map((s) => ({
    title: `${s.name} datasheet`,
    body: `${s.powerRange} · ${s.summary}`,
    href: s.datasheet,
    featured: false,
  })),
]

export default function DownloadsPage() {
  return (
    <>
      <section className="bg-background pt-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:px-6 md:py-20 lg:grid-cols-5 lg:items-end">
          <div className="flex flex-col gap-6 lg:col-span-3">
            <Breadcrumbs
              items={[
                { name: "Home", path: "/" },
                { name: "Datasheets", path: "/resources/downloads" },
              ]}
            />
            <h1 className="font-semibold tracking-tight text-5xl leading-[1.05] text-forest text-balance md:text-6xl">
              Module datasheets
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
              Electrical ratings, mechanical drawings, packing and warranty terms for every Shweta Solar TOPCon module.
              Free to download, no sign-up.
            </p>
          </div>
          <div className="relative hidden aspect-[4/3] overflow-hidden rounded-3xl lg:col-span-2 lg:block">
            <Image src={FACTORY_PHOTOS.busbarMacro.src} alt={FACTORY_PHOTOS.busbarMacro.alt} fill sizes="40vw" className="object-cover" />
          </div>
        </div>
      </section>

      <section aria-label="Datasheet downloads" className="bg-muted py-16 md:py-20">
        <ul className="mx-auto grid max-w-7xl gap-4 px-4 md:grid-cols-2 md:px-6">
          {DOCS.map((d) => (
            <li key={d.href} className={d.featured ? "md:col-span-2" : undefined}>
              <a
                href={d.href}
                download
                className={`group flex h-full items-center gap-5 rounded-2xl p-6 transition-colors md:p-8 ${
                  d.featured ? "bg-forest text-primary-foreground hover:bg-olive" : "bg-card hover:bg-background"
                }`}
              >
                <span
                  className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl ${
                    d.featured ? "bg-white/10 text-sage" : "bg-muted text-forest"
                  }`}
                >
                  <FileText className="h-6 w-6" aria-hidden="true" />
                </span>
                <span className="flex min-w-0 flex-1 flex-col gap-1">
                  <span className={`font-semibold tracking-tight text-2xl ${d.featured ? "" : "text-forest"}`}>{d.title}</span>
                  <span className={`text-sm leading-relaxed ${d.featured ? "text-white/75" : "text-muted-foreground"}`}>
                    {d.body}
                  </span>
                </span>
                <span className="flex items-center gap-2 text-sm font-semibold">
                  <Download className="h-4 w-4" aria-hidden="true" />
                  <span className="hidden sm:inline">PDF</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-background py-16">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 md:flex-row md:items-center md:px-6">
          <div className="flex flex-col gap-2">
            <h2 className="font-semibold tracking-tight text-3xl text-forest">Need a PAN file or test report?</h2>
            <p className="text-muted-foreground">Our engineering team shares simulation files and project documents on request.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="rounded-full bg-forest px-6 py-3.5 font-semibold text-primary-foreground transition-colors hover:bg-olive">
              Contact sales
            </Link>
            <a href={SITE.phoneHref} className="rounded-full border border-forest px-6 py-3.5 font-semibold text-forest transition-colors hover:bg-forest hover:text-primary-foreground">
              {SITE.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
