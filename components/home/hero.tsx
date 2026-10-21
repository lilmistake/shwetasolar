import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Phone } from "lucide-react"
import { FACTORY_PHOTOS, SITE } from "@/lib/site"

const ASSURANCES = ["Made in India", "On the government-approved ALMM list", "30-year performance warranty"]

export function Hero() {
  return (
    <section className="bg-background pt-28 md:pt-32">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 pb-16 md:px-6 md:pb-24 lg:grid-cols-12 lg:gap-14">
        <div className="flex flex-col gap-6 lg:col-span-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <p className="text-sm font-medium text-olive">Solar module manufacturer, {SITE.region}</p>
          <h1 className="font-sans text-4xl font-semibold leading-tight tracking-tight text-forest text-balance md:text-6xl">
            Solar panels you can build a business on
          </h1>
          <p className="max-w-lg text-lg leading-relaxed text-muted-foreground text-pretty">
            We make solar panels for factory rooftops, commercial buildings and large solar projects. Buy direct from
            the people who build them, with a test report for every single panel.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3.5 font-medium text-primary-foreground transition-colors hover:bg-olive"
            >
              Get a quote <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <a
              href={SITE.phoneHref}
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3.5 font-medium text-forest transition-colors hover:border-forest"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              Talk to sales
            </a>
          </div>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 pt-4 text-sm text-muted-foreground">
            {ASSURANCES.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-sage" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl lg:col-span-6 animate-in fade-in duration-1000">
          <Image
            src={FACTORY_PHOTOS.moduleOnLine.src || "/placeholder.svg"}
            alt={FACTORY_PHOTOS.moduleOnLine.alt}
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}
