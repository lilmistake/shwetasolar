import Image from "next/image"
import { TESTIMONIALS } from "@/lib/topcon/constants"
import { SectionCta } from "@/components/topcon/cta-buttons"

const PROJECTS = [
  { src: "/images/real/commercial-rooftop.jpg", alt: "Commercial rooftop solar array", caption: "C&I rooftop" },
  { src: "/images/real/apartment-rooftop.jpg", alt: "Apartment building with rooftop solar", caption: "Residential society" },
  { src: "/images/real/solar-farm.jpg", alt: "Ground-mounted solar farm", caption: "Ground-mount project" },
  { src: "/images/real/home-roof-closeup.jpg", alt: "Solar panels on a home roof", caption: "Home rooftop" },
]

export function Testimonials() {
  return (
    <section id="projects" className="bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-olive">Projects &amp; customers</p>
        <h2 className="mt-3 text-balance font-display text-4xl font-bold leading-none text-forest md:text-6xl">
          Installed across India.
        </h2>

        <ul className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
          {PROJECTS.map((p) => (
            <li key={p.src} className="relative aspect-square overflow-hidden rounded-xl">
              <Image src={p.src} alt={p.alt} fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover" />
              <span className="absolute bottom-2 left-2 rounded-md bg-forest px-2 py-1 text-xs font-medium text-cream">
                {p.caption}
              </span>
            </li>
          ))}
        </ul>

        <ul className="mt-8 grid gap-4 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <li key={t.org} className="flex flex-col rounded-xl border border-border bg-card p-6">
              <blockquote className="flex-1 text-pretty leading-relaxed text-forest">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <p className="mt-5 text-sm">
                <span className="font-semibold text-forest">{t.name}</span>
                <span className="text-muted-foreground"> · {t.org}</span>
              </p>
            </li>
          ))}
        </ul>

        <SectionCta source="testimonials" prompt="Join them — get your quote in 24 hours." />
      </div>
    </section>
  )
}
