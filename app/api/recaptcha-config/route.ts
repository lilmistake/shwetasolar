import { NextResponse } from "next/server"
import { RECAPTCHA_SITE_KEY } from "@/lib/config/recaptcha"

export async function GET() {
  return NextResponse.json({ siteKey: RECAPTCHA_SITE_KEY })
}
