import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { token } = await request.json()

    const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`

    const response = await fetch(verifyUrl, {
      method: "POST",
    })

    const data = await response.json()

    return NextResponse.json({
      success: data.success,
      score: data.score,
    })
  } catch (error) {
    return NextResponse.json({ success: false, error: "Verification failed" }, { status: 500 })
  }
}
