"use client"

import { useSearchParams } from "next/navigation"
import { FAMILIES, SEGMENTS } from "@/lib/products"

const selectClass =
  "h-12 w-full rounded-xl border border-input bg-background px-3 text-sm text-foreground focus-visible:border-ring focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"

function Options() {
  return (
    <>
      <option value="">Not sure yet</option>
      {SEGMENTS.map((s) => (
        <optgroup key={s.slug} label={`${s.shortName} · ${s.powerRange}`}>
          {FAMILIES.filter((f) => f.segment === s.slug).map((f) => (
            <option key={f.model} value={f.model}>
              {f.model} ({f.minW}–{f.maxW} W)
            </option>
          ))}
        </optgroup>
      ))}
    </>
  )
}

export function ProductSelect({ id = "product" }: { id?: string }) {
  const requested = useSearchParams().get("product") ?? ""
  const initial = FAMILIES.some((f) => f.model === requested) ? requested : ""
  return (
    <select key={initial} id={id} name="product" defaultValue={initial} className={selectClass}>
      <Options />
    </select>
  )
}

/** Rendered while search params resolve, so the field never jumps in. */
export function ProductSelectFallback({ id = "product" }: { id?: string }) {
  return (
    <select id={id} name="product" defaultValue="" className={selectClass}>
      <Options />
    </select>
  )
}
