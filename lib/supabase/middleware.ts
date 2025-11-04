import { createServerClient } from "@supabase/ssr"
import { NextResponse, type NextRequest } from "next/server"

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value))
          supabaseResponse = NextResponse.next({
            request,
          })
          cookiesToSet.forEach(({ name, value, options }) => supabaseResponse.cookies.set(name, value, options))
        },
      },
    },
  )

  const {
    data: { user },
  } = await supabase.auth.getUser()

  // Check if accessing admin routes
  if (request.nextUrl.pathname.startsWith("/admin")) {
    // If not logged in, redirect to admin login
    if (!user) {
      const url = request.nextUrl.clone()
      url.pathname = "/admin/login"
      return NextResponse.redirect(url)
    }

    // If logged in but not admin@shwetasolar.in, redirect to unauthorized page
    if (user.email !== "admin@shwetasolar.in") {
      const url = request.nextUrl.clone()
      url.pathname = "/admin/unauthorized"
      return NextResponse.redirect(url)
    }
  }

  return supabaseResponse
}
