import Image from "next/image"
import { FACTORY_PHOTOS, SITE } from "@/lib/site"

const STORY = [
  { photo: FACTORY_PHOTOS.gripper, caption: "Robots place every cell, so no two panels are built differently." },
  { photo: FACTORY_PHOTOS.stringerDark, caption: "Cameras inspect each panel for hidden cracks before and after sealing." },
  { photo: FACTORY_PHOTOS.inspection, caption: "A final check and a power test, then it's packed with its own report." },
]

export function FactorySection() {
  return (
    <section aria-labelledby="factory-heading" className="bg-muted py-20 md:py-28">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-4 md:px-6">
        <div className="flex max-w-2xl flex-col gap-4">
          <h2 id="factory-heading" className="font-sans text-3xl font-semibold tracking-tight text-forest text-balance md:text-4xl">
            See where your panels are made
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground text-pretty">
            Our automated plant in {SITE.region} builds every panel the same careful way. Here is what happens before
            one reaches your site.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {STORY.map(({ photo, caption }) => (
            <figure key={photo.src} className="flex flex-col gap-4">
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
                <Image src={photo.src || "/placeholder.svg"} alt={photo.alt} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
              </div>
              <figcaption className="leading-relaxed text-foreground text-pretty">{caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
