import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Reveal } from "@/components/topcon/reveal"
import { FACTORY_PHOTOS } from "@/lib/site"

const STEPS = [
  { title: "Built by robots", text: "Cells are cut, placed and soldered by automated machines for perfect consistency." },
  { title: "Scanned for hidden cracks", text: "Every panel is imaged before and after sealing, so flaws never leave the plant." },
  { title: "Tested one by one", text: "Each panel is power-tested and ships with its own report and serial number." },
]

export function FactorySection() {
  return (
    <section aria-labelledby="factory-heading" className="bg-primary py-24 text-primary-foreground md:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-4 md:px-6 lg:grid-cols-5 lg:gap-16">
        <Reveal className="flex flex-col gap-10 lg:col-span-2">
          <div className="flex flex-col gap-4">
            <p className="text-sm font-medium text-secondary">Inside our factory</p>
            <h2 id="factory-heading" className="text-balance text-4xl font-semibold md:text-5xl">
              Made by machines. Checked by people.
            </h2>
            <p className="text-pretty leading-relaxed text-primary-foreground/75">
              Our fully automated line in Uttar Pradesh builds every panel to the same exact standard, then our quality
              team signs it off.
            </p>
          </div>

          <ol className="flex flex-col">
            {STEPS.map((step) => (
              <li key={step.title} className="flex flex-col gap-1 border-t border-primary-foreground/15 py-5">
                <h3 className="text-lg font-semibold">{step.title}</h3>
                <p className="leading-relaxed text-primary-foreground/70">{step.text}</p>
              </li>
            ))}
          </ol>

          <Link href="/about" className="group inline-flex items-center gap-2 text-sm font-medium">
            About our company
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </Reveal>

        <div className="grid grid-cols-2 gap-4 lg:col-span-3">
          <Reveal className="relative col-span-2 aspect-[16/9] overflow-hidden rounded-3xl">
            <Image
              src={FACTORY_PHOTOS.floor.src}
              alt={FACTORY_PHOTOS.floor.alt}
              fill
              sizes="(min-width: 1024px) 720px, 100vw"
              className="object-cover transition-transform duration-1000 ease-out hover:scale-105"
            />
          </Reveal>
          <Reveal delay={0.1} className="relative aspect-square overflow-hidden rounded-3xl">
            <Image
              src={FACTORY_PHOTOS.gripper.src}
              alt={FACTORY_PHOTOS.gripper.alt}
              fill
              sizes="(min-width: 1024px) 360px, 50vw"
              className="object-cover transition-transform duration-1000 ease-out hover:scale-105"
            />
          </Reveal>
          <Reveal delay={0.2} className="relative aspect-square overflow-hidden rounded-3xl">
            <Image
              src={FACTORY_PHOTOS.inspection.src}
              alt={FACTORY_PHOTOS.inspection.alt}
              fill
              sizes="(min-width: 1024px) 360px, 50vw"
              className="object-cover transition-transform duration-1000 ease-out hover:scale-105"
            />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
