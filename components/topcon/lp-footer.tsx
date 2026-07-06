import Image from "next/image"
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone } from "lucide-react"
import { LOGO_SRC, PHONE_DISPLAY, PHONE_HREF, SALES_EMAIL, SOCIALS } from "@/lib/topcon/constants"

export function LpFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-3">
        <div>
          <Image src={LOGO_SRC || "/placeholder.svg"} alt="Shweta Solar" width={150} height={40} className="h-9 w-auto" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Indian manufacturer of high-efficiency N-Type TOPCon glass-to-glass bifacial solar modules.
          </p>
        </div>

        <div className="text-sm">
          <h3 className="font-semibold text-forest">Contact</h3>
          <ul className="mt-3 space-y-2 text-muted-foreground">
            <li>
              <a href={PHONE_HREF} className="inline-flex items-center gap-2 hover:text-forest">
                <Phone className="h-4 w-4" aria-hidden="true" />
                {PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <a href={`mailto:${SALES_EMAIL}`} className="inline-flex items-center gap-2 hover:text-forest">
                <Mail className="h-4 w-4" aria-hidden="true" />
                {SALES_EMAIL}
              </a>
            </li>
          </ul>
        </div>

        <div className="text-sm">
          <h3 className="font-semibold text-forest">Follow</h3>
          <div className="mt-3 flex gap-3">
            <a href={SOCIALS.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-muted-foreground hover:text-forest">
              <Facebook className="h-5 w-5" />
            </a>
            <a href={SOCIALS.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-muted-foreground hover:text-forest">
              <Instagram className="h-5 w-5" />
            </a>
            <a href={SOCIALS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-forest">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href={SOCIALS.x} target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="text-muted-foreground hover:text-forest">
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto max-w-6xl px-4 py-4 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Shweta Solar. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
