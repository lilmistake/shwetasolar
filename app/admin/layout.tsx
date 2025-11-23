import type React from "react"
import { createClient } from "@/lib/supabase/server"

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
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50 pt-20">
      <main>{children}</main>
    </div>
  )
}
