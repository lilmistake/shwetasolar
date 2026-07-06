"use client"

import { useEffect, useRef, useState } from "react"
import { useInView } from "framer-motion"

interface CountUpProps {
  to: number
  from?: number
  decimals?: number
  duration?: number
  prefix?: string
  suffix?: string
  className?: string
}

export function CountUp({
  to,
  from = 0,
  decimals = 0,
  duration = 1600,
  prefix = "",
  suffix = "",
  className,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const [value, setValue] = useState(from)

  useEffect(() => {
    if (!inView) return
    let raf = 0
    const start = performance.now()
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      // easeOutCubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(from + (to - from) * eased)
      if (progress < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, from, to, duration])

  return (
    <span ref={ref} className={className}>
      {prefix}
      {value.toLocaleString("en-IN", { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}
      {suffix}
    </span>
  )
}
