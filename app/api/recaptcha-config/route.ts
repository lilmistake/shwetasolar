import { NextResponse } from "next/server"

export async function GET() {
  const siteKey = process.env.RECAPTCHA_SITE_KEY

  if (!siteKey) {
    return NextResponse.json({ error: "reCAPTCHA not configured" }, { status: 500 })
  }

  return NextResponse.json({ siteKey })
}
