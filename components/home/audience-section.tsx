import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { FACTORY_PHOTOS } from "@/lib/site"

const AUDIENCES = [
  {
    title: "For businesses and factories",
    body: "Cut your electricity bill with panels made for Indian rooftops. We help you choose the right panel for your roof and your budget.",
    points: ["Panels sized for factory and warehouse roofs", "Long-lasting glass on both sides", "One point of contact from quote to delivery"],
    href: "/products/commercial",
    cta: "See rooftop panels",
    photo: FACTORY_PHOTOS.busbarMacro,
  },
  {
    title: "For EPCs and installers",
    body: "Factory-direct pricing, steady supply and the paperwork your clients and lenders ask for, without chasing a middleman.",
    points: ["Test report shipped with every panel", "Eligible for government-backed projects", "Volume pricing for repeat orders"],
    href: "/products/utility",
    cta: "See project panels",
    photo: FACTORY_PHOTOS.floor,
  },
]

export function AudienceSection() {
  return (
    <section aria-labelledby="audience-heading" className="bg-muted py-20 md:py-28">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-4 md:px-6">
        <div className="flex max-w-2xl flex-col gap-4">
          <h2 id="audience-heading" className="font-sans text-3xl font-semibold tracking-tight text-forest text-balance md:text-4xl">
            Who we work with
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground text-pretty">
            Whether you are powering your own plant or building solar for your clients, we keep it simple.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {AUDIENCES.map((a) => (
            <article key={a.title} className="flex flex-col overflow-hidden rounded-3xl bg-background">
              <div className="relative aspect-[16/9]">
                <Image src={a.photo.src || "/placeholder.svg"} alt={a.photo.alt} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
              </div>
              <div className="flex flex-1 flex-col gap-5 p-6 md:p-8">
                <h3 className="font-sans text-2xl font-semibold text-forest">{a.title}</h3>
                <p className="leading-relaxed text-muted-foreground text-pretty">{a.body}</p>
                <ul className="flex flex-col gap-2">
                  {a.points.map((p) => (
                    <li key={p} className="flex items-start gap-3 leading-relaxed text-foreground">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sage" aria-hidden="true" />
                      {p}
                    </li>
                  ))}
                </ul>
                <Link
                  href={a.href}
                  className="mt-auto inline-flex items-center gap-2 pt-2 font-medium text-forest underline-offset-4 hover:underline"
                >
                  {a.cta} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
