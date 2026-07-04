"use client"

import Link from "next/link"
import Image from "next/image"

// Deterministic star positions — no hydration mismatch
const STARS = Array.from({ length: 180 }, (_, i) => ({
  id: i,
  cx: ((i * 137.508 + 23) % 100).toFixed(3),
  cy: ((i * 97.31 + 11) % 100).toFixed(3),
  r: i % 5 === 0 ? 1.2 : i % 3 === 0 ? 0.8 : 0.45,
  opacity: (0.2 + ((i * 0.618) % 0.65)).toFixed(2),
}))

export function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "#020e06" }}
    >
      {/* ── Star field ── */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none select-none"
        aria-hidden="true"
      >
        {STARS.map((s) => (
          <circle
            key={s.id}
            cx={`${s.cx}%`}
            cy={`${s.cy}%`}
            r={s.r}
            fill="white"
            opacity={s.opacity}
          />
        ))}
      </svg>

      {/* ── Globe — right half ── */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 pointer-events-none select-none"
        style={{
          right: "clamp(-180px, -8vw, -60px)",
          transform: "translateY(-50%)",
          width: "clamp(400px, 54vw, 820px)",
          height: "clamp(400px, 54vw, 820px)",
        }}
      >
        {/* Far glow */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              "radial-gradient(circle, transparent 44%, rgba(0,70,54,0.18) 62%, transparent 80%)",
            animation: "globe-breathe 7s ease-in-out infinite",
          }}
        />

        {/* Globe sphere */}
        <div
          className="absolute rounded-full overflow-hidden"
          style={{
            inset: "9%",
            background:
              "radial-gradient(circle at 36% 34%, #0e4f34 0%, #004636 32%, #002d22 62%, #011208 100%)",
            boxShadow:
              "inset -22px -22px 60px rgba(0,0,0,0.85), inset 10px 10px 30px rgba(169,180,137,0.06), 0 0 90px rgba(0,70,54,0.45), 0 0 200px rgba(0,70,54,0.18)",
          }}
        >
          {/* Continent shapes */}
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full"
            style={{ opacity: 0.28 }}
          >
            <ellipse cx="34" cy="28" rx="13" ry="8" fill="#A9B489" />
            <ellipse cx="56" cy="43" rx="17" ry="6.5" fill="#5E7153" />
            <ellipse cx="27" cy="57" rx="7" ry="11" fill="#A9B489" />
            <ellipse cx="70" cy="26" rx="9" ry="5.5" fill="#5E7153" />
            <ellipse cx="73" cy="64" rx="11" ry="7" fill="#A9B489" />
            <ellipse cx="44" cy="74" rx="15" ry="4.5" fill="#5E7153" />
            <ellipse cx="60" cy="78" rx="8" ry="4" fill="#A9B489" />
          </svg>

          {/* Terminator line (day/night) */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(105deg, transparent 48%, rgba(0,0,0,0.55) 62%)",
            }}
          />
        </div>

        {/* Atmosphere rim */}
        <div
          className="absolute rounded-full"
          style={{
            inset: "9%",
            boxShadow:
              "0 0 28px 6px rgba(169,180,137,0.12), 0 0 8px 2px rgba(169,180,137,0.2)",
            borderRadius: "50%",
          }}
        />

        {/* Orbit ring 1 — equatorial, slow */}
        <div
          className="absolute inset-0"
          style={{ animation: "orbit1 26s linear infinite" }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <ellipse
              cx="50" cy="50" rx="48" ry="13"
              fill="none"
              stroke="#A9B489"
              strokeWidth="0.35"
              opacity="0.4"
              strokeDasharray="4 6"
            />
            {/* Satellite dot */}
            <circle cx="98" cy="50" r="1.5" fill="#A9B489" opacity="0.95" />
            <circle cx="98" cy="50" r="3" fill="#A9B489" opacity="0.2" />
          </svg>
        </div>

        {/* Orbit ring 2 — tilted, medium */}
        <div
          className="absolute inset-0"
          style={{ animation: "orbit2 40s linear infinite reverse" }}
        >
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full"
            style={{ transform: "rotate(-42deg)" }}
          >
            <ellipse
              cx="50" cy="50" rx="47" ry="16"
              fill="none"
              stroke="#5E7153"
              strokeWidth="0.3"
              opacity="0.35"
              strokeDasharray="2 8"
            />
            <circle cx="97" cy="50" r="1.1" fill="#5E7153" opacity="0.9" />
          </svg>
        </div>

        {/* Orbit ring 3 — polar, slowest */}
        <div
          className="absolute inset-0"
          style={{ animation: "orbit3 58s linear infinite" }}
        >
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full"
            style={{ transform: "rotate(68deg)" }}
          >
            <ellipse
              cx="50" cy="50" rx="46" ry="10"
              fill="none"
              stroke="white"
              strokeWidth="0.25"
              opacity="0.18"
              strokeDasharray="1 9"
            />
            <circle cx="96" cy="50" r="0.9" fill="white" opacity="0.65" />
          </svg>
        </div>

        {/* Solar panel — subtle, perspective-skewed, bottom-right of globe */}
        <div
          className="absolute"
          style={{
            bottom: "8%",
            right: "4%",
            width: "36%",
            transform: "perspective(500px) rotateY(-22deg) rotateX(10deg)",
            opacity: 0.45,
            maskImage:
              "linear-gradient(135deg, transparent 0%, black 50%)",
            WebkitMaskImage:
              "linear-gradient(135deg, transparent 0%, black 50%)",
          }}
        >
          <Image
            src="/solar-panel-hero.png"
            alt=""
            width={280}
            height={190}
            className="w-full h-auto object-contain drop-shadow-2xl"
            priority
          />
        </div>
      </div>

      {/* ── Left content ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-14 pt-32 pb-28 md:py-0">
        <div className="max-w-[560px]">

          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-8">
            <span className="block h-px w-8" style={{ background: "#A9B489" }} />
            <span
              className="font-sans text-xs tracking-[0.22em] uppercase"
              style={{ color: "#A9B489" }}
            >
              Shweta Solar &middot; Since 2010
            </span>
          </div>

          {/* Headline */}
          <h1
            className="font-display text-white leading-[1.0] tracking-tight mb-7 text-balance"
            style={{ fontSize: "clamp(3rem, 5.5vw, 5.2rem)" }}
          >
            Energy Born
            <br />
            <span style={{ color: "#A9B489" }}>From the Stars.</span>
            <br />
            Built for Earth.
          </h1>

          {/* Body */}
          <p
            className="font-sans text-white/55 leading-relaxed mb-10 text-pretty"
            style={{ fontSize: "clamp(0.95rem, 1.3vw, 1.08rem)" }}
          >
            India&apos;s leading solar panel manufacturer — 1.2 GW annual
            capacity, delivering high-efficiency Mono PERC and TopCon panels
            engineered for decades of reliable performance.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-16">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-7 py-3.5 font-sans font-semibold text-sm tracking-wide border transition-all duration-200"
              style={{
                background: "#004636",
                color: "#ffffff",
                borderColor: "#A9B489",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement
                el.style.background = "#A9B489"
                el.style.color = "#004636"
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement
                el.style.background = "#004636"
                el.style.color = "#ffffff"
              }}
            >
              Explore Products
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
                <path d="M2 6.5h9M8 3l3.5 3.5L8 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 font-sans font-medium text-sm tracking-wide border transition-all duration-200"
              style={{
                background: "transparent",
                color: "rgba(255,255,255,0.65)",
                borderColor: "rgba(255,255,255,0.18)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement
                el.style.borderColor = "#A9B489"
                el.style.color = "#A9B489"
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement
                el.style.borderColor = "rgba(255,255,255,0.18)"
                el.style.color = "rgba(255,255,255,0.65)"
              }}
            >
              Get a Quote
            </Link>
          </div>

          {/* Telemetry strip */}
          <div className="flex flex-wrap gap-x-8 gap-y-4">
            {[
              { label: "Annual Capacity", value: "1.2 GW" },
              { label: "Warranty", value: "25 Yrs" },
              { label: "Experience", value: "40+ Yrs" },
            ].map((stat) => (
              <div key={stat.label} className="flex items-center gap-3">
                <div
                  className="w-px h-8 shrink-0"
                  style={{ background: "rgba(169,180,137,0.35)" }}
                />
                <div>
                  <span
                    className="block font-sans text-[10px] tracking-[0.2em] uppercase mb-0.5"
                    style={{ color: "rgba(169,180,137,0.55)" }}
                  >
                    {stat.label}
                  </span>
                  <span
                    className="block font-display text-white"
                    style={{ fontSize: "1.15rem" }}
                  >
                    {stat.value}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <div
          className="w-px h-12"
          style={{
            background: "linear-gradient(to bottom, rgba(169,180,137,0.6), transparent)",
            animation: "scroll-line 2s ease-in-out infinite",
          }}
        />
        <span
          className="font-sans text-[9px] tracking-[0.25em] uppercase"
          style={{ color: "rgba(169,180,137,0.4)" }}
        >
          Scroll
        </span>
      </div>

      {/* ── Keyframes ── */}
      <style>{`
        @keyframes orbit1 {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes orbit2 {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes orbit3 {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes globe-breathe {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.75; }
        }
        @keyframes scroll-line {
          0%   { opacity: 1; transform: scaleY(1); transform-origin: top; }
          100% { opacity: 0; transform: scaleY(0); transform-origin: top; }
        }
      `}</style>
    </section>
  )
}
