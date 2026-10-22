import type { Metadata } from "next"
import { ArrowDown, FileText } from "lucide-react"
import { PageHero } from "@/components/site/page-hero"
import { Reveal } from "@/components/topcon/reveal"
import { ClosingCta } from "@/components/home/closing-cta"
import { COMPLETE_DATASHEET, FAMILIES, RANGE_SUMMARY, SEGMENTS } from "@/lib/products"

export const metadata: Metadata = {
  title: "Downloads: TOPCon Solar Panel Datasheets (PDF)",
  description: `Download Shweta Solar n-type TOPCon module datasheets: residential, commercial, utility and the complete ${RANGE_SUMMARY.minW}–${RANGE_SUMMARY.maxW} W range. Electrical, mechanical and warranty specifications.`,
  alternates: { canonical: "/resources/downloads" },
}

const DOCS = SEGMENTS.map((s) => ({
  title: `${s.name} modules`,
  meta: s.powerRange,
  body: s.summary,
  href: s.datasheet,
}))

export default function DownloadsPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Downloads", path: "/resources/downloads" },
        ]}
        title="Downloads"
        intro="Electrical ratings, mechanical drawings, packing and warranty terms for every Shweta Solar TOPCon module. Free to download, no sign-up."
      />

      <section aria-label="Datasheet downloads" className="bg-background pb-16 md:pb-24">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 md:px-6">
          <Reveal>
            <a
              href={COMPLETE_DATASHEET}
              download
              className="group flex flex-col gap-8 rounded-3xl bg-forest p-8 text-primary-foreground transition-colors hover:bg-olive md:flex-row md:items-end md:justify-between md:p-12"
            >
              <div className="flex flex-col gap-4">
                <span className="text-sm font-medium text-primary-foreground/70">Complete range · PDF</span>
                <span className="text-balance text-3xl font-semibold md:text-5xl">
                  Every module, {RANGE_SUMMARY.minW}–{RANGE_SUMMARY.maxW} W
                </span>
                <span className="max-w-lg text-pretty leading-relaxed text-primary-foreground/75">
                  All {FAMILIES.length} module families in one document, with full electrical and mechanical
                  specifications.
                </span>
              </div>
              <span className="inline-flex h-12 shrink-0 items-center gap-2 self-start rounded-full bg-sage px-6 text-sm font-semibold text-forest md:self-auto">
                Download
                <ArrowDown className="size-4 transition-transform group-hover:translate-y-0.5" aria-hidden="true" />
              </span>
            </a>
          </Reveal>

          <ul className="grid gap-4 md:grid-cols-3">
            {DOCS.map((d, i) => (
              <Reveal as="li" key={d.href} delay={0.06 + i * 0.06}>
                <a
                  href={d.href}
                  download
                  className="group flex h-full flex-col gap-10 rounded-3xl border border-border bg-muted p-7 transition-colors hover:border-foreground/30"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="flex size-12 items-center justify-center rounded-2xl bg-background text-primary">
                      <FileText className="size-6" aria-hidden="true" />
                    </span>
                    <span className="text-sm font-medium text-muted-foreground">{d.meta}</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-xl font-semibold text-foreground">{d.title}</span>
                    <span className="text-sm leading-relaxed text-muted-foreground">{d.body}</span>
                  </div>
                  <span className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-foreground">
                    Download PDF
                    <ArrowDown className="size-4 transition-transform group-hover:translate-y-0.5" aria-hidden="true" />
                  </span>
                </a>
              </Reveal>
            ))}
          </ul>

          <p className="pt-4 text-sm text-muted-foreground">
            Need a PAN file, test report or project documents? Our engineering team shares them on request.
          </p>
        </div>
      </section>

      <ClosingCta />
    </>
  )
}
