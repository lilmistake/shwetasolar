import Image from "next/image"
import { Reveal } from "@/components/topcon/reveal"

const DIRECTORS = [
  { name: "Vinod Sharma", role: "Managing Director", photo: "/images/vinod-sharma.jpg" },
  { name: "Sanjay Garg", role: "Director", photo: "/images/sanjay-garg.jpg" },
]

export function DirectorsSection() {
  return (
    <section aria-labelledby="board-heading" className="bg-background pb-24 md:pb-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <Reveal className="flex flex-col gap-8 border-t border-border pt-12 md:flex-row md:items-center md:justify-between">
          <h2 id="board-heading" className="text-sm font-medium text-muted-foreground">
            Board of directors
          </h2>
          <ul className="flex flex-col gap-6 sm:flex-row sm:gap-12">
            {DIRECTORS.map((d) => (
              <li key={d.name} className="flex items-center gap-4">
                <div className="relative size-14 shrink-0 overflow-hidden rounded-full bg-muted">
                  <Image src={d.photo} alt={`Portrait of ${d.name}`} fill sizes="56px" className="object-cover object-top" />
                </div>
                <div className="flex flex-col">
                  <p className="font-semibold text-foreground">{d.name}</p>
                  <p className="text-sm text-muted-foreground">{d.role}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
