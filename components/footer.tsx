import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, Mail, MessageCircle, Phone, Twitter } from "lucide-react"
import { SITE } from "@/lib/site"
import { COMPLETE_DATASHEET, SEGMENTS } from "@/lib/products"

const COLUMNS = [
  {
    title: "Products",
    links: [
      { label: "Full TOPCon range", href: "/products" },
      ...SEGMENTS.map((s) => ({ label: `${s.shortName} modules`, href: `/products/${s.slug}` })),
      { label: "Dealer & EPC quotes", href: "/topcon" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About us", href: "/about" },
      { label: "Sustainability", href: "/sustainability" },
      { label: "Board of directors", href: "/investors/board" },
      { label: "Policies", href: "/investors/policies" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Datasheets", href: "/resources/downloads" },
      { label: "Solar calculator", href: "/resources/calculator" },
      { label: "News", href: "/newsroom/news" },
      { label: "Blog", href: "/newsroom/blog" },
      { label: "Gallery", href: "/newsroom/gallery" },
    ],
  },
]

const SOCIAL = [
  { label: "Facebook", href: SITE.social.facebook, icon: Facebook },
  { label: "Instagram", href: SITE.social.instagram, icon: Instagram },
  { label: "LinkedIn", href: SITE.social.linkedin, icon: Linkedin },
  { label: "X", href: SITE.social.x, icon: Twitter },
]

export function Footer() {
  return (
    <footer className="bg-forest text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="flex flex-col gap-6 lg:col-span-4">
            <Image
              src="/images/logo.webp"
              alt={SITE.name}
              width={150}
              height={56}
              className="h-11 w-auto self-start brightness-0 invert"
            />
            <p className="max-w-sm text-sm leading-relaxed text-white/75">
              n-type TOPCon bifacial glass–glass modules from 395 W to 725 W, manufactured at our {SITE.capacity} plant in{" "}
              {SITE.region}.
            </p>
            <a
              href={COMPLETE_DATASHEET}
              className="self-start rounded-full border border-white/30 px-4 py-2 text-sm font-medium transition-colors hover:bg-white hover:text-forest"
            >
              Download complete range datasheet (PDF)
            </a>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-5">
            {COLUMNS.map((col) => (
              <div key={col.title} className="flex flex-col gap-4">
                <h2 className="font-display text-lg uppercase tracking-wider text-sage">{col.title}</h2>
                <ul className="flex flex-col gap-2.5 text-sm">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="text-white/80 transition-colors hover:text-white">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-4 lg:col-span-3">
            <h2 className="font-display text-lg uppercase tracking-wider text-sage">Talk to sales</h2>
            <ul className="flex flex-col gap-3 text-sm">
              <li>
                <a href={SITE.phoneHref} className="flex items-center gap-2.5 text-white/80 hover:text-white">
                  <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
                  {SITE.phoneDisplay} (toll-free)
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} className="flex items-center gap-2.5 text-white/80 hover:text-white">
                  <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
                  {SITE.email}
                </a>
              </li>
              <li>
                <a
                  href={SITE.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-white/80 hover:text-white"
                >
                  <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                  WhatsApp {SITE.whatsappDisplay}
                </a>
              </li>
            </ul>
            <ul className="mt-2 flex gap-2">
              {SOCIAL.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${SITE.name} on ${label}`}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 transition-colors hover:bg-white hover:text-forest"
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-white/15 pt-6 text-xs text-white/60 md:flex-row md:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {SITE.legalName}. All rights reserved.
          </p>
          <p>Specifications per Shweta Solar datasheets, Feb 2026. Subject to change without notice.</p>
        </div>
      </div>
    </footer>
  )
}
