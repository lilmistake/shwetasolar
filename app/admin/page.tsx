import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"

export default async function AdminPage() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  // If user is authenticated and is admin, redirect to dashboard
  if (user && user.email === "admin@shwetasolar.in") {
    redirect("/admin/dashboard")
  }

  // Otherwise redirect to login
  redirect("/admin/login")
}
