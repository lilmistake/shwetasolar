// Control characters (except tab/newline) and invisible bidi/zero-width characters
// are stripped so they can't be used to spoof or break the email layout.
const UNSAFE_CHARS = /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F\u200B-\u200F\u202A-\u202E\u2066-\u2069]/g

/** Trim, drop unsafe characters and cap length. Keeps newlines for multi-line fields. */
export function cleanText(value: unknown, max: number): string {
  if (typeof value !== "string") return ""
  return value.replace(UNSAFE_CHARS, "").replace(/\r\n?/g, "\n").trim().slice(0, max)
}

/** Single-line variant: newlines collapse to spaces so values are safe in email headers like Subject. */
export function cleanLine(value: unknown, max: number): string {
  return cleanText(value, max).replace(/\s+/g, " ")
}

/** Escape a value for safe insertion into email HTML. */
export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
}

/** Escaped HTML with line breaks preserved. */
export function htmlBlock(value: string): string {
  return escapeHtml(value).replace(/\n/g, "<br>")
}

export const isValidEmail = (email: string) => /^[^\s@<>"',;]+@[^\s@<>"',;]+\.[^\s@<>"',;]+$/.test(email)

/** Only digits, spaces and + - ( ) are allowed, so phone values are safe inside a tel: link. */
export const cleanPhone = (value: unknown) => cleanLine(value, 30).replace(/[^\d+\-() ]/g, "")
