"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import { ChevronDown, Menu, Phone, X } from "lucide-react"
import { SITE } from "@/lib/site"
import { SEGMENTS } from "@/lib/products"

type NavLink = { label: string; href: string; description?: string }
type NavItem = { label: string; href?: string; children?: NavLink[] }

const NAV: NavItem[] = [
  {
    label: "Products",
    children: [
      { label: "Full TOPCon range", href: "/products", description: "All 10 module families, 395–725 W" },
      ...SEGMENTS.map((s) => ({ label: s.shortName, href: `/products/${s.slug}`, description: s.powerRange })),
      { label: "TOPCon for dealers & EPCs", href: "/topcon", description: "Bulk pricing and quotes" },
    ],
  },
  {
    label: "Company",
    children: [
      { label: "About us", href: "/about" },
      { label: "Sustainability", href: "/sustainability" },
      { label: "Board of directors", href: "/investors/board" },
      { label: "Policies", href: "/investors/policies" },
    ],
  },
  {
    label: "Newsroom",
    children: [
      { label: "Overview", href: "/newsroom" },
      { label: "News", href: "/newsroom/news" },
      { label: "Blog", href: "/newsroom/blog" },
      { label: "Gallery", href: "/newsroom/gallery" },
    ],
  },
  {
    label: "Resources",
    children: [
      { label: "Datasheets", href: "/resources/downloads" },
      { label: "Solar calculator", href: "/resources/calculator" },
    ],
  },
  { label: "Contact", href: "/contact" },
]

export function Navigation() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setOpenMenu(null)
  }, [pathname])

  const open = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setOpenMenu(label)
  }
  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setOpenMenu(null), 150)
  }

  const isActive = (item: NavItem) =>
    item.href ? pathname === item.href : item.children?.some((c) => pathname === c.href || pathname.startsWith(`${c.href}/`))

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b bg-background/95 backdrop-blur transition-shadow ${
        scrolled ? "border-border shadow-sm" : "border-transparent"
      }`}
    >
      <nav aria-label="Main" className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-4 md:px-6">
        <Link href="/" className="shrink-0" aria-label={`${SITE.name} home`}>
          <Image src="/images/logo.webp" alt={SITE.name} width={150} height={56} priority className="h-11 w-auto" />
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => (
            <li
              key={item.label}
              className="relative"
              onMouseEnter={() => item.children && open(item.label)}
              onMouseLeave={() => item.children && scheduleClose()}
            >
              {item.href ? (
                <Link
                  href={item.href}
                  className={`flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-olive ${
                    isActive(item) ? "text-olive" : "text-forest"
                  }`}
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  type="button"
                  aria-expanded={openMenu === item.label}
                  aria-haspopup="true"
                  onClick={() => setOpenMenu(openMenu === item.label ? null : item.label)}
                  onFocus={() => open(item.label)}
                  className={`flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-olive ${
                    isActive(item) ? "text-olive" : "text-forest"
                  }`}
                >
                  {item.label}
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${openMenu === item.label ? "rotate-180" : ""}`}
                    aria-hidden="true"
                  />
                </button>
              )}

              {item.children && openMenu === item.label && (
                <div className="absolute left-0 top-full pt-2" onMouseEnter={() => open(item.label)} onMouseLeave={scheduleClose}>
                  <ul className="w-72 rounded-xl border border-border bg-card p-2 shadow-xl animate-in fade-in slide-in-from-top-1 duration-150">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="flex flex-col rounded-lg px-3 py-2.5 transition-colors hover:bg-muted"
                          onBlur={(e) => {
                            if (!e.currentTarget.closest("ul")?.contains(e.relatedTarget as Node)) scheduleClose()
                          }}
                        >
                          <span className="text-sm font-medium text-forest">{child.label}</span>
                          {child.description && <span className="text-xs text-olive">{child.description}</span>}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={SITE.phoneHref}
            className="flex items-center gap-2 text-sm font-medium text-forest transition-colors hover:text-olive"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            <span className="whitespace-nowrap">{SITE.phoneDisplay}</span>
          </a>
          <Link
            href="/contact"
            className="rounded-full bg-forest px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-olive"
          >
            Get a quote
          </Link>
        </div>

        <button
          type="button"
          className="rounded-md p-2 text-forest lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {mobileOpen && (
        <div id="mobile-menu" className="max-h-[calc(100dvh-5rem)] overflow-y-auto border-t border-border bg-background lg:hidden">
          <ul className="flex flex-col px-4 py-2">
            {NAV.map((item) => (
              <li key={item.label} className="border-b border-border last:border-0">
                {item.href ? (
                  <Link href={item.href} className="block py-3.5 font-medium text-forest">
                    {item.label}
                  </Link>
                ) : (
                  <>
                    <button
                      type="button"
                      onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                      aria-expanded={mobileExpanded === item.label}
                      className="flex w-full items-center justify-between py-3.5 font-medium text-forest"
                    >
                      {item.label}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${mobileExpanded === item.label ? "rotate-180" : ""}`}
                        aria-hidden="true"
                      />
                    </button>
                    {mobileExpanded === item.label && (
                      <ul className="flex flex-col gap-1 pb-3 pl-3">
                        {item.children?.map((child) => (
                          <li key={child.href}>
                            <Link href={child.href} className="block py-2 text-sm text-olive">
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                )}
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-3 px-4 pb-6 pt-2">
            <a
              href={SITE.phoneHref}
              className="flex items-center justify-center gap-2 rounded-full border border-forest py-3 font-medium text-forest"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {SITE.phoneDisplay}
            </a>
            <Link href="/contact" className="rounded-full bg-forest py-3 text-center font-semibold text-primary-foreground">
              Get a quote
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
