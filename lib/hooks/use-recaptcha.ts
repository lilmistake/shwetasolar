"use client"

import { useEffect, useState } from "react"
import { useRecaptchaContext } from "@/lib/contexts/recaptcha-context"

declare global {
  interface Window {
    grecaptcha: {
      ready: (callback: () => void) => void
      execute: (siteKey: string, options: { action: string }) => Promise<string>
    }
  }
}

export function useRecaptcha() {
  const [isReady, setIsReady] = useState(false)
  const { siteKey } = useRecaptchaContext()

  useEffect(() => {
    // Check if reCAPTCHA is already loaded
    if (window.grecaptcha) {
      window.grecaptcha.ready(() => {
        setIsReady(true)
      })
    }
  }, [])

  const executeRecaptcha = async (action: string): Promise<string | null> => {
    if (!siteKey) {
      console.error("reCAPTCHA site key is not configured")
      return null
    }

    if (!window.grecaptcha) {
      console.error("reCAPTCHA is not loaded")
      return null
    }

    try {
      const token = await window.grecaptcha.execute(siteKey, { action })
      return token
    } catch (error) {
      console.error("reCAPTCHA execution failed:", error)
      return null
    }
  }

  return { isReady, executeRecaptcha }
}
