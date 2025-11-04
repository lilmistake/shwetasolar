import type React from "react"
import { createClient } from "@/lib/supabase/server"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { LogOut, LayoutDashboard } from "lucide-react"

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = await createClient()

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser()

  // Allow access to login and unauthorized pages
  if (error || !user || user.email !== "admin@shwetasolar.in") {
    return <>{children}</>
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50">
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <Link href="/admin/dashboard" className="flex items-center gap-2 font-bold text-xl">
                <LayoutDashboard className="h-6 w-6 text-orange-600" />
                <span>Admin Panel</span>
              </Link>
              <div className="hidden md:flex items-center gap-4">
                <Link href="/admin/social" className="text-sm hover:text-orange-600 transition-colors">
                  Social Media
                </Link>
                <Link href="/admin/news" className="text-sm hover:text-orange-600 transition-colors">
                  News
                </Link>
                <Link href="/admin/gallery" className="text-sm hover:text-orange-600 transition-colors">
                  Event Albums
                </Link>
                <Link href="/admin/settings" className="text-sm hover:text-orange-600 transition-colors">
                  Settings
                </Link>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">
                View Site
              </Link>
              <form action="/api/auth/signout" method="post">
                <Button variant="outline" size="sm" type="submit">
                  <LogOut className="mr-2 h-4 w-4" />
                  Sign Out
                </Button>
              </form>
            </div>
          </div>
        </div>
      </nav>
      <main>{children}</main>
    </div>
  )
}
