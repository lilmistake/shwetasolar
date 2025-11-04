"use client"

import { createContext, useContext, type ReactNode } from "react"

interface RecaptchaContextType {
  siteKey: string
}

const RecaptchaContext = createContext<RecaptchaContextType | null>(null)

export function RecaptchaProvider({
  children,
  siteKey,
}: {
  children: ReactNode
  siteKey: string
}) {
  return <RecaptchaContext.Provider value={{ siteKey }}>{children}</RecaptchaContext.Provider>
}

export function useRecaptchaContext() {
  const context = useContext(RecaptchaContext)
  if (!context) {
    throw new Error("useRecaptchaContext must be used within RecaptchaProvider")
  }
  return context
}
