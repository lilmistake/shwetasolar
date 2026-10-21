import { BadgeCheck } from "lucide-react"

const ITEMS = [
  "BIS certified",
  "ALMM List-I approved",
  "IEC 61215 tested",
  "IEC 61730 safety rated",
  "NABL-accredited lab testing",
  "Made in India",
]

export function TrustStrip() {
  return (
    <section aria-label="Certifications" className="border-y border-border bg-background py-8 md:mt-24">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 md:flex-row md:items-center md:gap-10 md:px-6">
        <p className="shrink-0 text-sm font-medium text-muted-foreground">Certified to Indian and global standards</p>
        <div className="relative flex-1 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]">
          <ul className="flex w-max animate-marquee gap-10">
            {[...ITEMS, ...ITEMS].map((item, i) => (
              <li
                key={`${item}-${i}`}
                aria-hidden={i >= ITEMS.length}
                className="flex items-center gap-2 whitespace-nowrap text-sm font-medium text-foreground"
              >
                <BadgeCheck className="size-4 text-secondary" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
