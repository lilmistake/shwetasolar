import { ATTRIBUTION_KEYS, type Attribution } from "@/lib/topcon/constants"

const STORAGE_KEY = "topcon_attribution"

/**
 * Read UTM / click-id params from the URL and keep them for the session, so a visitor
 * who lands from an ad and navigates around still submits with the original attribution.
 */
export function captureAttribution(): Attribution {
  if (typeof window === "undefined") return {}

  const params = new URLSearchParams(window.location.search)
  const fromUrl: Attribution = {}
  for (const key of ATTRIBUTION_KEYS) {
    const value = params.get(key)
    if (value) fromUrl[key] = value.slice(0, 200)
  }

  let stored: Attribution = {}
  try {
    stored = JSON.parse(sessionStorage.getItem(STORAGE_KEY) || "{}")
  } catch {
    stored = {}
  }

  const merged = Object.keys(fromUrl).length ? fromUrl : stored
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(merged))
  } catch {
    // Storage can be unavailable (private mode); attribution still works for this page view.
  }
  return merged
}
