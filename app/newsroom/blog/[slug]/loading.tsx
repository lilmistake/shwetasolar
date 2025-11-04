export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cream to-white pt-24 animate-pulse">
      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumb Skeleton */}
        <div className="flex items-center gap-2 mb-8">
          <div className="h-4 w-20 bg-sage/20 rounded" />
          <span className="text-sage/40">›</span>
          <div className="h-4 w-16 bg-sage/20 rounded" />
          <span className="text-sage/40">›</span>
          <div className="h-4 w-32 bg-sage/20 rounded" />
        </div>

        {/* Back Button Skeleton */}
        <div className="h-10 w-32 bg-sage/20 rounded mb-8" />

        <div className="grid lg:grid-cols-[280px_1fr] xl:grid-cols-[280px_1fr_320px] gap-8 xl:gap-12">
          {/* Left Sidebar - TOC Skeleton */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 bg-white rounded-xl p-6 shadow-sm border border-sage/10">
              <div className="h-6 w-32 bg-sage/20 rounded mb-6" />
              <div className="space-y-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="h-4 bg-sage/20 rounded" style={{ width: `${60 + i * 8}%` }} />
                ))}
              </div>
            </div>
          </aside>

          {/* Main Content Skeleton */}
          <article className="min-w-0 max-w-4xl">
            <div className="mb-10">
              <div className="h-6 w-24 bg-sage/20 rounded mb-4" />
              <div className="h-12 w-full bg-sage/20 rounded mb-4" />
              <div className="h-10 w-3/4 bg-sage/20 rounded mb-6" />

              <div className="flex flex-wrap items-center gap-6 mb-8">
                <div className="h-5 w-32 bg-sage/20 rounded" />
                <div className="h-5 w-28 bg-sage/20 rounded" />
                <div className="h-5 w-24 bg-sage/20 rounded" />
              </div>
            </div>

            {/* Featured Image Skeleton */}
            <div className="h-96 bg-sage/20 rounded-2xl mb-12" />

            {/* Key Takeaways Skeleton */}
            <div className="bg-sage/10 rounded-2xl p-8 mb-12 border-l-4 border-sage/30">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-sage/20 rounded-full flex-shrink-0" />
                <div className="flex-1 space-y-3">
                  <div className="h-7 w-40 bg-sage/20 rounded mb-4" />
                  <div className="h-4 w-full bg-sage/20 rounded" />
                  <div className="h-4 w-5/6 bg-sage/20 rounded" />
                  <div className="h-4 w-full bg-sage/20 rounded" />
                </div>
              </div>
            </div>

            {/* Content Skeleton */}
            <div className="bg-white rounded-2xl p-8 md:p-12 lg:p-16 shadow-sm border border-sage/10 space-y-4">
              <div className="h-6 w-full bg-sage/20 rounded" />
              <div className="h-6 w-full bg-sage/20 rounded" />
              <div className="h-6 w-5/6 bg-sage/20 rounded" />
              <div className="h-32 w-full bg-sage/20 rounded my-8" />
              <div className="h-6 w-full bg-sage/20 rounded" />
              <div className="h-6 w-full bg-sage/20 rounded" />
              <div className="h-6 w-3/4 bg-sage/20 rounded" />
            </div>
          </article>

          {/* Right Sidebar Skeleton */}
          <aside className="hidden xl:block space-y-8">
            {/* CTA Card Skeleton */}
            <div className="bg-sage/20 rounded-xl p-6 h-80" />

            {/* Recent Articles Skeleton */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-sage/10">
              <div className="h-6 w-32 bg-sage/20 rounded mb-4" />
              <div className="space-y-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex gap-4 pb-4 border-b border-sage/10 last:border-0">
                    <div className="w-20 h-20 bg-sage/20 rounded flex-shrink-0" />
                    <div className="flex-1 space-y-2">
                      <div className="h-4 w-full bg-sage/20 rounded" />
                      <div className="h-4 w-3/4 bg-sage/20 rounded" />
                      <div className="h-3 w-20 bg-sage/20 rounded" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Related Articles Skeleton */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-sage/10">
              <div className="h-6 w-36 bg-sage/20 rounded mb-4" />
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex gap-4 pb-4 border-b border-sage/10 last:border-0">
                    <div className="w-24 h-24 bg-sage/20 rounded flex-shrink-0" />
                    <div className="flex-1 space-y-2">
                      <div className="h-4 w-16 bg-sage/20 rounded" />
                      <div className="h-4 w-full bg-sage/20 rounded" />
                      <div className="h-4 w-2/3 bg-sage/20 rounded" />
                      <div className="h-3 w-20 bg-sage/20 rounded" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Explore More Skeleton */}
            <div className="bg-sage/5 rounded-xl p-6 border border-sage/20">
              <div className="h-6 w-28 bg-sage/20 rounded mb-4" />
              <div className="space-y-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-12 w-full bg-sage/20 rounded" />
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
