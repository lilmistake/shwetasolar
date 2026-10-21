import { Reveal } from "@/components/topcon/reveal"

const DIRECTORS = [
  {
    name: "Vinod Sharma",
    role: "Managing Director",
    years: "25 years",
    text: "in solar, from a ₹35,000 start-up in 2000 to running a 300 MW module plant. He leads technology, production and quality.",
  },
  {
    name: "Sanjay Garg",
    role: "Director",
    years: "40 years",
    text: "building businesses across FMCG and real estate in 20 states. He brings financial discipline and a client-first way of working.",
  },
]

const MILESTONES = [
  { date: "2025", title: "Shweta Solar founded", text: "Two leaders join forces to build a 1.2 GW plant in the NCR." },
  { date: "Jan 2026", title: "Plant commissioned", text: "Fully automated line at Pilkhwa, Hapur starts production." },
  { date: "Jul 2026", title: "Type testing complete", text: "Safety and performance reports issued for every family." },
  { date: "Sep 2026", title: "BIS licensed, ALMM listed", text: "93 models approved and enlisted on ALMM List-I." },
]

export function StorySection() {
  return (
    <section aria-labelledby="story-heading" className="border-t border-border bg-background py-24 md:py-32">
      <div className="mx-auto flex max-w-7xl flex-col gap-16 px-4 md:gap-20 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal className="flex flex-col gap-6">
            <p className="text-sm font-medium text-muted-foreground">Who we are</p>
            <h2 id="story-heading" className="text-balance text-4xl font-semibold text-foreground md:text-6xl">
              A new company with decades behind it.
            </h2>
            <blockquote className="mt-4 flex flex-col gap-4 border-l-2 border-secondary pl-6">
              <p className="text-pretty text-xl leading-relaxed text-foreground md:text-2xl">
                {"\u201CThe profit is yours and the loss is ours.\u201D"}
              </p>
              <footer className="text-sm text-muted-foreground">Sanjay Garg, Director</footer>
            </blockquote>
          </Reveal>

          <ul className="flex flex-col">
            {DIRECTORS.map((d, i) => (
              <li key={d.name} className="border-t border-border py-8 first:border-t-0 first:pt-0 lg:first:pt-2">
                <Reveal delay={0.1 + i * 0.1} className="flex flex-col gap-3">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="text-xl font-semibold text-foreground">{d.name}</h3>
                    <span className="text-sm text-muted-foreground">{d.role}</span>
                  </div>
                  <p className="text-pretty leading-relaxed text-muted-foreground">
                    <span className="font-semibold text-primary">{d.years}</span> {d.text}
                  </p>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>

        <ol className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {MILESTONES.map((m, i) => (
            <li key={m.title} className="relative">
              {i < MILESTONES.length - 1 && (
                <span
                  className="absolute left-0 top-[0.4375rem] hidden h-px bg-border lg:-right-6 lg:block"
                  aria-hidden="true"
                />
              )}
              <Reveal delay={i * 0.1} className="relative flex flex-col gap-3">
                <span
                  className={
                    i === MILESTONES.length - 1
                      ? "relative size-3.5 rounded-full bg-primary ring-4 ring-primary/20"
                      : "relative size-3.5 rounded-full border-2 border-primary bg-background"
                  }
                  aria-hidden="true"
                />
                <p className="mt-2 text-sm font-medium text-secondary">{m.date}</p>
                <h3 className="text-lg font-semibold text-foreground">{m.title}</h3>
                <p className="text-pretty text-sm leading-relaxed text-muted-foreground">{m.text}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
