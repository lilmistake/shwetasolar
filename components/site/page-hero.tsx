import Image from "next/image"
import type { ReactNode } from "react"
import { Reveal } from "@/components/topcon/reveal"
import { Breadcrumbs } from "@/components/site/breadcrumbs"

type Crumb = { name: string; path: string }

export function PageHero({
  eyebrow,
  title,
  intro,
  crumbs,
  image,
  actions,
}: {
  eyebrow: string
  title: ReactNode
  intro?: ReactNode
  crumbs?: Crumb[]
  image?: { src: string; alt: string }
  actions?: ReactNode
}) {
  return (
    <section aria-labelledby="page-heading" className="bg-background pb-12 pt-28 md:pb-16 md:pt-36">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 md:gap-14 md:px-6">
        <Reveal className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex max-w-3xl flex-col gap-5">
            {crumbs ? <Breadcrumbs items={crumbs} /> : <p className="text-sm font-medium text-muted-foreground">{eyebrow}</p>}
            <h1 id="page-heading" className="text-balance text-5xl font-semibold text-foreground md:text-7xl">
              {title}
            </h1>
          </div>
          {(intro || actions) && (
            <div className="flex max-w-md flex-col gap-6">
              {intro && <p className="text-pretty text-lg leading-relaxed text-muted-foreground">{intro}</p>}
              {actions}
            </div>
          )}
        </Reveal>

        {image && (
          <Reveal delay={0.1} className="relative isolate aspect-[4/3] overflow-hidden rounded-3xl md:aspect-[21/9]">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority
              sizes="(min-width: 1280px) 1232px, 100vw"
              className="object-cover"
            />
          </Reveal>
        )}
      </div>
    </section>
  )
}
