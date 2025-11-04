"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import { Menu, X, ChevronDown, MessageCircle, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    href: "/about",
    submenu: [
      { label: "Overview", href: "/about#overview" },
      { label: "Mission & Vision", href: "/about#mission" },
      { label: "Leadership", href: "/about#leadership" },
    ],
  },
  {
    label: "Products",
    href: "#",
    submenu: [
      { label: "Mono PERC", href: "/products/mono-perc" },
      { label: "TopCon", href: "/products/topcon" },
      { label: "HJT", href: "/products/hjt" },
    ],
  },
  {
    label: "Investors",
    href: "/investors",
    submenu: [
      { label: "Board of Directors", href: "/investors/board" },
      { label: "Policies", href: "/investors/policies" },
    ],
  },
  { label: "Sustainability", href: "/sustainability" },
  {
    label: "Newsroom",
    href: "/newsroom",
    submenu: [
      { label: "News", href: "/newsroom/news" },
      { label: "Blog", href: "/newsroom/blog" },
      { label: "Gallery", href: "/newsroom/gallery" },
    ],
  },
  {
    label: "Resources",
    href: "#",
    submenu: [{ label: "Solar Calculator", href: "/resources/calculator" }],
  },
  { label: "Contact", href: "/contact" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)
  const [mobileOpenSubmenus, setMobileOpenSubmenus] = useState<string[]>([])
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setOpenSubmenu(label)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenSubmenu(null)
    }, 300)
  }

  const toggleMobileSubmenu = (label: string) => {
    setMobileOpenSubmenus((prev) => (prev.includes(label) ? prev.filter((item) => item !== label) : [...prev, label]))
  }

  return (
    <nav
      aria-label="Main navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-cream/98 backdrop-blur-md shadow-lg" : "bg-cream/90 backdrop-blur-sm shadow-md"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/images/logo.webp" alt="Shweta Solar" width={180} height={60} className="h-12 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center gap-4">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => item.submenu && handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                {item.href === "#" ? (
                  <span className="text-forest hover:text-olive transition-colors font-medium flex items-center gap-1 cursor-default text-sm">
                    {item.label}
                    {item.submenu && <ChevronDown className="h-4 w-4" aria-hidden="true" />}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="text-forest hover:text-olive transition-colors font-medium flex items-center gap-1 text-sm"
                  >
                    {item.label}
                    {item.submenu && <ChevronDown className="h-4 w-4" aria-hidden="true" />}
                  </Link>
                )}

                {item.submenu && openSubmenu === item.label && (
                  <div
                    className="absolute top-full left-0 pt-2"
                    onMouseEnter={() => handleMouseEnter(item.label)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="bg-white shadow-2xl rounded-lg py-2 min-w-[240px] border border-sage/20">
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.label}
                          href={subitem.href}
                          className="block px-6 py-3 text-forest hover:bg-sage/10 hover:text-olive transition-all font-medium"
                        >
                          {subitem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <Button asChild className="bg-forest text-cream hover:bg-olive">
              <Link href="/contact">Get Quote</Link>
            </Button>

            <a
              href="tel:18001204771200"
              className="flex items-center gap-2 border-2 border-forest text-forest font-semibold px-4 py-2 rounded-lg hover:bg-forest hover:text-cream transition-all"
            >
              <Phone className="h-4 w-4" />
              <span className="text-sm whitespace-nowrap">1800 120 477120</span>
            </a>
          </div>

          <button
            className="xl:hidden text-forest"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="xl:hidden bg-cream border-t border-sage/20 shadow-lg">
          <div className="container mx-auto px-6 py-4 max-h-[80vh] overflow-y-auto">
            <a
              href="tel:18001204771200"
              className="flex items-center justify-center gap-2 border-2 border-forest text-forest font-bold px-5 py-3 rounded-lg hover:bg-forest hover:text-cream transition-all mb-4"
            >
              <Phone className="h-5 w-5" />
              <span>1800 120 477120</span>
            </a>

            {navItems.map((item) => (
              <div key={item.label} className="border-b border-sage/10 last:border-0">
                {item.submenu ? (
                  <div>
                    <button
                      onClick={() => toggleMobileSubmenu(item.label)}
                      className="w-full flex items-center justify-between py-3 text-forest hover:text-olive transition-colors font-medium"
                      aria-expanded={mobileOpenSubmenus.includes(item.label)}
                    >
                      {item.label}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${mobileOpenSubmenus.includes(item.label) ? "rotate-180" : ""}`}
                        aria-hidden="true"
                      />
                    </button>
                    {mobileOpenSubmenus.includes(item.label) && (
                      <div className="pl-4 pb-2 space-y-1">
                        {item.submenu.map((subitem) => (
                          <Link
                            key={subitem.label}
                            href={subitem.href}
                            className="block py-2 text-olive hover:text-forest transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {subitem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="block py-3 text-forest hover:text-olive transition-colors font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <Button
              asChild
              className="w-full mt-4 bg-[#25D366] text-white hover:bg-[#20BA5A] flex items-center justify-center gap-2"
            >
              <a
                href="https://wa.me/919289969501"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <MessageCircle className="h-5 w-5" />
                Chat on WhatsApp
              </a>
            </Button>
            <Button asChild className="w-full mt-3 bg-forest text-cream hover:bg-olive">
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                Get Quote
              </Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
