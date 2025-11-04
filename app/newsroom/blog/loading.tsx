export default function Loading() {
  return (
    <div className="min-h-screen bg-cream pt-24 animate-pulse">
      {/* Hero Section Skeleton */}
      <section className="relative h-[600px] overflow-hidden bg-forest/20">
        <div className="relative h-full container mx-auto px-4 flex flex-col justify-center">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-5 w-24 bg-cream/30 rounded" />
              <span className="text-cream/60">›</span>
              <div className="h-5 w-16 bg-cream/30 rounded" />
            </div>
            <div className="h-16 w-3/4 bg-cream/30 rounded mb-6" />
            <div className="h-8 w-full max-w-3xl bg-cream/30 rounded" />
          </div>
        </div>
      </section>

      {/* Category Filter Skeleton */}
      <section className="border-b border-sage/20 bg-white">
        <div className="container mx-auto px-4 py-4">
          <div className="flex gap-2 flex-wrap">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="h-9 w-24 bg-sage/20 rounded" />
            ))}
          </div>
        </div>
      </section>

      {/* Content Skeleton */}
      <div className="container mx-auto px-4 py-16">
        <div className="mb-8">
          <div className="h-10 w-64 bg-sage/20 rounded mb-2" />
        </div>

        <div className="grid lg:grid-cols-5 gap-8 mb-20">
          {/* Featured Post Skeleton */}
          <div className="lg:col-span-3">
            <div className="overflow-hidden border-0 bg-white h-full rounded-2xl">
              <div className="h-[400px] bg-sage/20 rounded-t-2xl" />
              <div className="pb-8 px-8">
                <div className="h-6 w-24 bg-sage/20 rounded mb-4 mt-6" />
                <div className="h-8 w-full bg-sage/20 rounded mb-4" />
                <div className="h-6 w-3/4 bg-sage/20 rounded mb-2" />
                <div className="h-6 w-2/3 bg-sage/20 rounded mb-4" />
                <div className="flex items-center gap-4">
                  <div className="h-4 w-32 bg-sage/20 rounded" />
                  <div className="h-4 w-24 bg-sage/20 rounded" />
                </div>
              </div>
            </div>
          </div>

          {/* Popular Posts Skeleton */}
          <div className="lg:col-span-2 space-y-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="overflow-hidden border-0 bg-white rounded-xl">
                <div className="flex gap-0">
                  <div className="w-40 h-40 flex-shrink-0 bg-sage/20 rounded-l-xl" />
                  <div className="flex-1 min-w-0 pb-4 px-4 pt-4">
                    <div className="h-5 w-20 bg-sage/20 rounded mb-2" />
                    <div className="h-6 w-full bg-sage/20 rounded mb-2" />
                    <div className="h-4 w-3/4 bg-sage/20 rounded" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Articles Skeleton */}
        <div>
          <div className="h-10 w-48 bg-sage/20 rounded mb-8" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="overflow-hidden border-0 bg-white h-full rounded-xl">
                <div className="h-56 bg-sage/20 rounded-t-xl" />
                <div className="pb-6 px-6 pt-4">
                  <div className="h-6 w-24 bg-sage/20 rounded mb-3" />
                  <div className="h-6 w-full bg-sage/20 rounded mb-2" />
                  <div className="h-6 w-3/4 bg-sage/20 rounded mb-4" />
                  <div className="h-4 w-full bg-sage/20 rounded mb-2" />
                  <div className="h-4 w-2/3 bg-sage/20 rounded mb-4" />
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-4 w-20 bg-sage/20 rounded" />
                      <div className="h-4 w-16 bg-sage/20 rounded" />
                    </div>
                    <div className="h-4 w-4 bg-sage/20 rounded" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
