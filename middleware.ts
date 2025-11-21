import { updateSession } from "@/lib/supabase/middleware"
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/admin")) {
    return await updateSession(request)
  }

  // For all other routes, just pass through
  return NextResponse.next()
}

export const config = {
  matcher: ["/admin/:path*"],
}
