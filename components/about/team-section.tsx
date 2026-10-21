import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { Reveal } from "@/components/topcon/reveal"

const TEAM = [
  {
    name: "Sandeep Sharma",
    email: "sandeep.sharma@shwetasolar.in",
    photo: "/images/team/sandeep-sharma.jpg",
    focus: "42% 30%",
  },
  {
    name: "Mohit Chaudhary",
    email: "mohit.chaudhary@shwetasolar.in",
    photo: "/images/team/mohit-chaudhary.jpg",
    focus: "66% 40%",
  },
  { name: "Yukta Garg", email: "yukta.garg@shwetasolar.in", photo: "/images/team/yukta-garg.png", focus: "50% 30%" },
  { name: "Rohit Garg", email: "rohit.garg@shwetasolar.in", photo: "/images/team/rohit-garg.webp", focus: "68% 30%" },
  {
    name: "Abhishek Garg",
    email: "abhishek.garg@shwetasolar.in",
    photo: "/images/team/abhishek-garg.jpg",
    focus: "55% 25%",
  },
]

export function TeamSection() {
  return (
    <section aria-labelledby="team-heading" className="bg-muted/40 py-24 md:py-32">
      <div className="mx-auto flex max-w-7xl flex-col gap-14 px-4 md:px-6">
        <Reveal className="flex max-w-2xl flex-col gap-4">
          <p className="text-sm font-medium text-muted-foreground">Our team</p>
          <h2 id="team-heading" className="text-balance text-4xl font-semibold text-foreground md:text-5xl">
            The people you&apos;ll work with.
          </h2>
          <p className="text-pretty leading-relaxed text-muted-foreground">
            For orders, OEM projects and commercial questions, write directly to the people who run Shweta Solar day to
            day.
          </p>
        </Reveal>

        <ul className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM.map((person, i) => (
            <Reveal as="li" key={person.name} delay={i * 0.06}>
              <a href={`mailto:${person.email}`} className="group flex flex-col gap-4">
                <div className="relative isolate aspect-[4/5] overflow-hidden rounded-3xl bg-muted">
                  <Image
                    src={person.photo || "/placeholder.svg"}
                    alt={`Portrait of ${person.name}`}
                    fill
                    sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
                    style={{ objectPosition: person.focus }}
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex min-w-0 flex-col gap-1">
                    <h3 className="text-xl font-semibold text-foreground">{person.name}</h3>
                    <span className="truncate text-sm text-muted-foreground transition-colors group-hover:text-primary">
                      {person.email}
                    </span>
                  </div>
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-border text-foreground transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                    <ArrowUpRight className="size-4" aria-hidden="true" />
                    <span className="sr-only">Email {person.name}</span>
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
