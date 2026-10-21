import Image from "next/image"
import { Mail } from "lucide-react"
import { Reveal } from "@/components/topcon/reveal"

const TEAM = [
  { name: "Sandeep Sharma", role: "Director", email: "sandeep.sharma@shwetasolar.in", photo: "/images/team/sandeep-sharma.jpg" },
  { name: "Mohit Chaudhary", role: "Vice President", email: "mohit.chaudhary@shwetasolar.in", photo: "/images/team/mohit-chaudhary.jpg" },
  { name: "Rohit Garg", role: "Operations Head", email: "rohit.garg@shwetasolar.in", photo: "/images/team/rohit-garg.jpg" },
  { name: "Abhishek Garg", role: "Business Development Head", email: "abhishek.garg@shwetasolar.in", photo: "/images/team/abhishek-garg.jpg" },
  { name: "Yukta Garg", role: "Accounts Head", email: "yukta.garg@shwetasolar.in", photo: "/images/team/yukta-garg.jpg" },
]

export function TeamSection() {
  return (
    <section aria-labelledby="team-heading" className="bg-background py-24 md:py-32">
      <div className="mx-auto flex max-w-7xl flex-col gap-14 px-4 md:px-6">
        <Reveal className="flex max-w-2xl flex-col gap-4">
          <p className="text-sm font-medium text-muted-foreground">Our team</p>
          <h2 id="team-heading" className="text-balance text-4xl font-semibold text-foreground md:text-6xl">
            The people you&apos;ll work with.
          </h2>
          <p className="text-pretty leading-relaxed text-muted-foreground">
            For orders, OEM projects and commercial questions, talk directly to the people who run Shweta Solar day to
            day.
          </p>
        </Reveal>

        <ul className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:grid-cols-5">
          {TEAM.map((person, i) => (
            <Reveal as="li" key={person.name} delay={i * 0.06} className="group flex flex-col gap-4">
              <div className="relative isolate aspect-[4/5] overflow-hidden rounded-3xl bg-muted">
                <Image
                  src={person.photo}
                  alt={`Portrait of ${person.name}`}
                  fill
                  sizes="(min-width: 1024px) 240px, (min-width: 768px) 33vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-lg font-semibold text-foreground">{person.name}</h3>
                <p className="text-sm text-muted-foreground">{person.role}</p>
                <a
                  href={`mailto:${person.email}`}
                  className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                >
                  <Mail className="size-4" aria-hidden="true" />
                  Email
                  <span className="sr-only">{person.name}</span>
                </a>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
