import Image from "next/image"
import { Reveal } from "@/components/topcon/reveal"

const TEAM = [
  { name: "Sandeep Sharma", email: "sandeep.sharma@shwetasolar.in", photo: "/images/team/portrait-sandeep-sharma.jpg" },
  {
    name: "Mohit Chaudhary",
    email: "mohit.chaudhary@shwetasolar.in",
    photo: "/images/team/portrait-mohit-chaudhary.jpg",
  },
  { name: "Yukta Garg", email: "yukta.garg@shwetasolar.in", photo: "/images/team/portrait-yukta-garg.jpg" },
  { name: "Rohit Garg", email: "rohit.garg@shwetasolar.in", photo: "/images/team/portrait-rohit-garg.jpg" },
  { name: "Abhishek Garg", email: "abhishek.garg@shwetasolar.in", photo: "/images/team/portrait-abhishek-garg.jpg" },
]

export function TeamSection() {
  return (
    <section aria-labelledby="team-heading" className="bg-muted/40 py-16 md:py-24">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 md:px-6">
        <Reveal className="flex max-w-2xl flex-col gap-3">
          <p className="text-sm font-medium text-muted-foreground">Our team</p>
          <h2 id="team-heading" className="text-balance text-3xl font-semibold text-foreground md:text-4xl">
            The people you&apos;ll work with.
          </h2>
          <p className="text-pretty leading-relaxed text-muted-foreground">
            For orders, OEM projects and commercial questions, write directly to the people who run Shweta Solar day to
            day.
          </p>
        </Reveal>

        <ul className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-5">
          {TEAM.map((person, i) => (
            <Reveal as="li" key={person.name} delay={i * 0.05}>
              <a href={`mailto:${person.email}`} className="group flex flex-col gap-3">
                <div className="relative isolate aspect-[4/5] overflow-hidden rounded-2xl bg-muted">
                  <Image
                    src={person.photo || "/placeholder.svg"}
                    alt={`Portrait of ${person.name}`}
                    fill
                    sizes="(min-width: 1024px) 240px, (min-width: 640px) 33vw, 50vw"
                    quality={90}
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="flex min-w-0 flex-col gap-0.5">
                  <h3 className="text-base font-semibold text-foreground">{person.name}</h3>
                  <span className="truncate text-sm text-muted-foreground transition-colors group-hover:text-primary">
                    {person.email}
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
