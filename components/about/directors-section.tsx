import Image from "next/image"
import { Reveal } from "@/components/topcon/reveal"

const LEADERSHIP = [
  {
    name: "Vinod Sharma",
    photo: "/images/leadership/vinod-sharma.webp",
    line: "25+ years building solar modules, from a small start-up to a 300 MW plant.",
  },
  {
    name: "Sanjay Garg",
    photo: "/images/leadership/sanjay-garg.webp",
    line: "Four decades of building businesses on one rule: the client's profit comes first.",
  },
]

export function DirectorsSection() {
  return (
    <section aria-labelledby="leadership-heading" className="bg-background py-24 md:py-32">
      <div className="mx-auto flex max-w-7xl flex-col gap-14 px-4 md:px-6">
        <Reveal className="flex max-w-2xl flex-col gap-4">
          <p className="text-sm font-medium text-muted-foreground">Leadership</p>
          <h2 id="leadership-heading" className="text-balance text-4xl font-semibold text-foreground md:text-6xl">
            Guided by experience.
          </h2>
        </Reveal>

        <ul className="grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8">
          {LEADERSHIP.map((person, i) => (
            <Reveal as="li" key={person.name} delay={i * 0.08} className="group flex flex-col gap-5">
              <div className="relative isolate aspect-square overflow-hidden rounded-3xl bg-muted">
                <Image
                  src={person.photo || "/placeholder.svg"}
                  alt={`Portrait of ${person.name}`}
                  fill
                  sizes="(min-width: 1024px) 440px, (min-width: 640px) 50vw, 100vw"
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl font-semibold text-foreground">{person.name}</h3>
                <p className="text-pretty leading-relaxed text-muted-foreground">{person.line}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
