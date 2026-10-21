import { Reveal } from "@/components/topcon/reveal"

const VALUES = [
  { title: "Integrity above all", text: "Honesty, transparency and accountability in every transaction." },
  { title: "Innovation at scale", text: "Steady investment in R&D and advanced cell technology." },
  { title: "Client-first", text: "We measure our success by the growth and profitability of our partners." },
  { title: "Financial discipline", text: "Every order is planned and executed with care and precision." },
  { title: "A legacy of trust", text: "Decades of experience in building businesses that last." },
]

export function ValuesSection() {
  return (
    <section aria-labelledby="values-heading" className="bg-forest py-24 text-primary-foreground md:py-32">
      <div className="mx-auto flex max-w-7xl flex-col gap-16 px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-20">
          <Reveal className="flex flex-col gap-4">
            <p className="text-sm font-medium text-sage">Our mission</p>
            <h2 id="values-heading" className="text-balance text-3xl font-semibold md:text-5xl">
              Energy people can depend on.
            </h2>
            <p className="max-w-lg text-pretty leading-relaxed text-primary-foreground/75">
              We make going solar simple by removing barriers, proving performance and showing that clean power is a
              smart business decision.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="flex flex-col gap-4">
            <p className="text-sm font-medium text-sage">Our vision</p>
            <p className="text-balance text-3xl font-semibold md:text-5xl">A brighter future, made in India.</p>
            <p className="max-w-lg text-pretty leading-relaxed text-primary-foreground/75">
              To help businesses move forward and communities thrive with clean, reliable solar energy, across India and
              beyond.
            </p>
          </Reveal>
        </div>

        <ul className="grid gap-px overflow-hidden rounded-3xl bg-primary-foreground/10 sm:grid-cols-2 lg:grid-cols-5">
          {VALUES.map((value, i) => (
            <Reveal as="li" key={value.title} delay={i * 0.06} className="flex flex-col gap-3 bg-forest p-7">
              <h3 className="text-lg font-semibold">{value.title}</h3>
              <p className="text-sm leading-relaxed text-primary-foreground/70">{value.text}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
