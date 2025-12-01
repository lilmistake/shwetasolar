import { NextResponse } from "next/server"

export async function GET() {
  const siteKey = "6Lde6uorAAAAAB_fwxNOcTembn96Nov2AkIzJvNU"

  return NextResponse.json({ siteKey })
}
