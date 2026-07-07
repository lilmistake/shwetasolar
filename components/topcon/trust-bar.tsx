const HIGHLIGHTS = [
  "N-Type TOPCon Technology",
  "Up to 24.5% Efficiency",
  "Glass-to-Glass Bifacial",
  "600W+ Module Power",
  "30-Year Performance Warranty",
  "Low Light Performance",
  "Zero PID Degradation",
  "Made in India",
  "Anti-Reflective Coating",
  "Extreme Weather Rated",
  "Industrial & Commercial Grade",
  "Dealer & EPC Direct Supply",
]

export function TrustBar() {
  return (
    <section aria-label="Product highlights" className="border-y border-border bg-muted/60 py-6">
      <p className="mb-4 text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
        Next-generation solar technology
      </p>
      <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
        <div className="flex w-max animate-marquee items-center gap-4 pr-4">
          {[...HIGHLIGHTS, ...HIGHLIGHTS].map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="flex shrink-0 items-center gap-2 rounded-full border border-forest/15 bg-background px-5 py-2 text-sm font-medium text-forest"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-sage" aria-hidden />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
