import { PHONE_DISPLAY, SALES_EMAIL } from "@/lib/topcon/constants"
import { CallLink } from "@/components/topcon/cta-buttons"

export function LpFooter() {
  return (
    <footer className="border-t border-cream/10 bg-forest text-cream/65">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 text-xs md:flex-row md:items-center md:justify-between md:px-6">
        <p>© {new Date().getFullYear()} Shweta Solar System Pvt. Ltd. · Manufacturing near Delhi, India</p>
        <p className="flex flex-wrap gap-x-4 gap-y-1">
          <CallLink source="footer" className="hover:text-cream">
            {PHONE_DISPLAY}
          </CallLink>
          <a href={`mailto:${SALES_EMAIL}`} className="hover:text-cream">
            {SALES_EMAIL}
          </a>
          <a href="/privacy" className="hover:text-cream">
            Privacy
          </a>
        </p>
      </div>
    </footer>
  )
}
