const CERTS = [
  "BIS Certified",
  "IEC 61215",
  "IEC 61730",
  "ALMM Listed",
  "ISO 9001",
  "IEC 61701 (Salt Mist)",
  "PID Resistant",
  "Made in India",
]

export function TrustBar() {
  return (
    <section aria-label="Certifications and standards" className="border-y border-border bg-muted/60 py-6">
      <p className="mb-4 text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
        Certified &amp; compliant to global standards
      </p>
      <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
        <div className="flex w-max animate-marquee items-center gap-4 pr-4">
          {[...CERTS, ...CERTS].map((cert, i) => (
            <span
              key={`${cert}-${i}`}
              className="flex shrink-0 items-center gap-2 rounded-full border border-forest/15 bg-background px-5 py-2 text-sm font-medium text-forest"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-sage" aria-hidden />
              {cert}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
