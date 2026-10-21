import Image from "next/image"
import { Check } from "lucide-react"
import { FACTORY_PHOTOS, SITE } from "@/lib/site"
import { QUALITY_POINTS } from "@/lib/products"

const GALLERY = [FACTORY_PHOTOS.symmetry, FACTORY_PHOTOS.gripperClose, FACTORY_PHOTOS.cellStrings, FACTORY_PHOTOS.vacuum]

export function FactorySection() {
  return (
    <section aria-labelledby="factory-heading" className="bg-forest py-20 text-primary-foreground md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 md:px-6 lg:grid-cols-12 lg:gap-16">
        <div className="flex flex-col gap-6 lg:col-span-5 lg:sticky lg:top-28 lg:self-start">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-sage">Inside the line</p>
          <h2 id="factory-heading" className="font-display text-4xl uppercase text-balance md:text-5xl">
            Automated from cell to crate
          </h2>
          <p className="text-lg leading-relaxed text-white/80 text-pretty">
            Our {SITE.capacity} line runs robotic stringers with machine-vision alignment, so every half-cut TOPCon cell
            is placed, soldered and inspected the same way, module after module.
          </p>
          <ul className="flex flex-col gap-3">
            {QUALITY_POINTS.map((point) => (
              <li key={point} className="flex gap-3">
                <Check className="mt-1 h-4 w-4 shrink-0 text-sage" aria-hidden="true" />
                <span className="leading-relaxed text-white/90">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-2 gap-4 lg:col-span-7">
          {GALLERY.map((photo, i) => (
            <figure
              key={photo.src}
              className={`relative overflow-hidden rounded-2xl ${i === 0 ? "col-span-2 aspect-[16/9]" : "aspect-square"}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes={i === 0 ? "(min-width: 1024px) 55vw, 100vw" : "(min-width: 1024px) 27vw, 50vw"}
                className="object-cover"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
