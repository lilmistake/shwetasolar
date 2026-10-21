import Image from "next/image"
import { Reveal } from "@/components/topcon/reveal"

const LEADERSHIP = [
  { name: "Vinod Sharma", photo: "/images/vinod-sharma.jpg" },
  { name: "Sanjay Garg", photo: "/images/sanjay-garg.jpg" },
]

export function DirectorsSection() {
  return (
    <section aria-labelledby="leadership-heading" className="bg-background pb-24 md:pb-32">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 md:px-6">
        <Reveal className="flex flex-col gap-3 border-t border-border pt-12">
          <h2 id="leadership-heading" className="text-sm font-medium text-muted-foreground">
            Leadership
          </h2>
        </Reveal>

        <ul className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:grid-cols-5">
          {LEADERSHIP.map((person, i) => (
            <Reveal as="li" key={person.name} delay={i * 0.06} className="group flex flex-col gap-4">
              <div className="relative isolate aspect-[4/5] overflow-hidden rounded-3xl bg-muted">
                <Image
                  src={person.photo || "/placeholder.svg"}
                  alt={`Portrait of ${person.name}`}
                  fill
                  sizes="(min-width: 1024px) 240px, (min-width: 768px) 33vw, 50vw"
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <h3 className="text-lg font-semibold text-foreground">{person.name}</h3>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
