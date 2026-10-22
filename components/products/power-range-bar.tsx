import { RANGE_SUMMARY } from "@/lib/products"

export function PowerRangeBar({
  minW,
  maxW,
  showScale = true,
  tone = "default",
}: {
  minW: number
  maxW: number
  showScale?: boolean
  tone?: "default" | "inverse"
}) {
  const span = RANGE_SUMMARY.maxW - RANGE_SUMMARY.minW
  const left = ((minW - RANGE_SUMMARY.minW) / span) * 100
  const width = Math.max(((maxW - minW) / span) * 100, 2)
  const inverse = tone === "inverse"

  return (
    <div className="flex flex-col gap-2">
      <div
        className={`relative h-2 w-full overflow-hidden rounded-full ${inverse ? "bg-primary-foreground/15" : "bg-border"}`}
        role="img"
        aria-label={`${minW} to ${maxW} watts, within the full ${RANGE_SUMMARY.minW} to ${RANGE_SUMMARY.maxW} watt range`}
      >
        <span
          className={`absolute inset-y-0 rounded-full ${inverse ? "bg-primary-foreground" : "bg-primary"}`}
          style={{ left: `${left}%`, width: `${width}%` }}
        />
      </div>
      {showScale && (
        <div
          className={`flex justify-between text-xs ${inverse ? "text-primary-foreground/60" : "text-muted-foreground"}`}
          aria-hidden="true"
        >
          <span>{RANGE_SUMMARY.minW} W</span>
          <span>{RANGE_SUMMARY.maxW} W</span>
        </div>
      )}
    </div>
  )
}
