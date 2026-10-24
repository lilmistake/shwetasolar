import { CLIENT_LOGOS, MW_SUPPLIED } from "@/lib/topcon/constants"

const FACTS = [
  { value: "1.2 GW", label: "Annual factory capacity" },
  { value: MW_SUPPLIED, label: "Modules supplied" },
  { value: "BIS", label: "IS 14286 certified" },
  { value: "ALMM", label: "List-I enlisted" },
]

export function TrustBar() {
  return (
    <section aria-label="Why buyers trust Shweta Solar" className="border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-8 md:px-6 md:py-10">
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-4">
          {FACTS.map((f) => (
            <div key={f.label} className="bg-background px-4 py-5 text-center">
              <dt className="sr-only">{f.label}</dt>
              <dd className="font-display text-3xl font-bold leading-none text-forest md:text-4xl">{f.value}</dd>
              <dd className="mt-2 text-xs text-muted-foreground md:text-sm">{f.label}</dd>
            </div>
          ))}
        </dl>

        <p className="mt-8 text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Supplying EPCs, distributors and C&amp;I projects across India
        </p>
        <ul className="mt-4 grid grid-cols-3 gap-3 md:grid-cols-6">
          {CLIENT_LOGOS.map((name, i) => (
            <li
              key={`${name}-${i}`}
              className="flex h-12 items-center justify-center rounded-lg border border-dashed border-border px-2 text-center text-xs font-semibold uppercase tracking-wide text-muted-foreground"
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
