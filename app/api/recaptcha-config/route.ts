import { NextResponse } from "next/server"

export async function GET() {
  // This is safe because site keys are designed to be public
  const siteKey = "6Lde6uorAAAAAJp3jMWTOndLVqJ6k1BgXjOmJSJq"

  return NextResponse.json({ siteKey })
}
