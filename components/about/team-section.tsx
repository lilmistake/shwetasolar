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
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Reveal as="li" className="flex">
            <div className="flex min-h-48 w-full flex-col justify-between gap-6 rounded-3xl bg-primary p-6 text-primary-foreground">
              <p className="text-sm font-medium opacity-80">Our team</p>
              <div className="flex flex-col gap-2">
                <h2 id="team-heading" className="text-balance text-2xl font-semibold md:text-3xl">
                  The people you&apos;ll work with.
                </h2>
                <p className="text-pretty text-sm leading-relaxed opacity-80">
                  For orders, OEM projects and commercial questions, write to them directly.
                </p>
              </div>
            </div>
          </Reveal>

          {TEAM.map((person, i) => {
            const [local, domain] = person.email.split("@")
            return (
              <Reveal as="li" key={person.name} delay={(i + 1) * 0.06} className="flex">
                <a
                  href={`mailto:${person.email}`}
                  className="group flex min-h-48 w-full overflow-hidden rounded-3xl border border-border bg-card transition-colors hover:border-primary"
                >
                  <div className="relative isolate w-2/5 shrink-0 overflow-hidden bg-muted">
                    <Image
                      src={person.photo || "/placeholder.svg"}
                      alt={`Portrait of ${person.name}`}
                      fill
                      sizes="(min-width: 1024px) 160px, (min-width: 640px) 20vw, 40vw"
                      style={{ objectPosition: person.focus }}
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                  <div className="flex min-w-0 flex-1 flex-col justify-between gap-4 p-5">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-pretty text-lg font-semibold leading-snug text-card-foreground">
                        {person.name}
                      </h3>
                      <ArrowUpRight
                        className="size-4 shrink-0 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
                        aria-hidden="true"
                      />
                    </div>
                    <p className="flex flex-col text-sm leading-snug text-muted-foreground transition-colors group-hover:text-primary">
                      <span className="sr-only">Email: </span>
                      <span className="truncate">{local}</span>
                      <span className="truncate">@{domain}</span>
                    </p>
                  </div>
                </a>
              </Reveal>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
