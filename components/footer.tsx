import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MessageCircle } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-forest text-cream">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Image
              src="/images/logo.webp"
              alt="Shweta Solar"
              width={160}
              height={50}
              className="h-10 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-sm text-cream/80 mb-4">
              Leading manufacturer of high-efficiency solar panels. Powering India's renewable energy future.
            </p>
            <div className="flex gap-4">
              <Link
                href="https://www.facebook.com/people/Shweta-Solar/61580012213135/"
                target="_blank"
                className="hover:text-sage transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.instagram.com/shwetasolar/"
                target="_blank"
                className="hover:text-sage transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/shweta-solar-system/"
                target="_blank"
                className="hover:text-sage transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="https://x.com/shwetasolar" target="_blank" className="hover:text-sage transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-sage transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products/mono-perc" className="hover:text-sage transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/investors" className="hover:text-sage transition-colors">
                  Investors
                </Link>
              </li>
              <li>
                <Link href="/sustainability" className="hover:text-sage transition-colors">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link href="/newsroom" className="hover:text-sage transition-colors">
                  Newsroom
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4">Our Products</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/products/mono-perc" className="hover:text-sage transition-colors">
                  Mono PERC Panels
                </Link>
              </li>
              <li>
                <Link href="/products/topcon" className="hover:text-sage transition-colors">
                  TopCon Panels
                </Link>
              </li>
              <li>
                <Link href="/products/hjt" className="hover:text-sage transition-colors">
                  HJT Panels
                </Link>
              </li>
              <li>
                <Link href="/resources/calculator" className="hover:text-sage transition-colors">
                  Solar Calculator
                </Link>
              </li>
              <li>
                <Link href="/resources/downloads" className="hover:text-sage transition-colors">
                  Downloads
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <a href="mailto:admin@shwetasolar.in" className="hover:text-sage transition-colors">
                  admin@shwetasolar.in
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <a href="tel:18001204771200" className="hover:text-sage transition-colors">
                  1800 120 477120
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MessageCircle className="h-4 w-4 mt-0.5 flex-shrink-0 text-[#25D366]" />
                <a
                  href="https://wa.me/919289969501"
                  target="_blank"
                  className="hover:text-sage transition-colors"
                  rel="noreferrer"
                >
                  Chat on WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-cream/20 mt-8 pt-8 text-center text-sm text-cream/80">
          <p>&copy; {new Date().getFullYear()} Shweta Solar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
