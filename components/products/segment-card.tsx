import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import type { Segment } from "@/lib/products"

export function SegmentCard({ segment: s, compact = false }: { segment: Segment; compact?: boolean }) {
  return (
    <Link
      href={`/products/${s.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card transition-colors hover:border-foreground/30"
    >
      <div className={`relative overflow-hidden ${compact ? "aspect-[16/9]" : "aspect-[4/3]"}`}>
        <Image
          src={s.image.src || "/placeholder.svg"}
          alt={s.image.alt}
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <span className="absolute left-4 top-4 rounded-full bg-background px-3 py-1.5 text-xs font-semibold text-foreground">
          {s.powerRange}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-semibold text-foreground">{s.name}</h3>
          <ArrowUpRight
            className="size-5 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground"
            aria-hidden="true"
          />
        </div>
        {!compact && <p className="text-pretty text-sm leading-relaxed text-muted-foreground">{s.summary}</p>}
      </div>
    </Link>
  )
}
