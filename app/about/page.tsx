import PlaceholderImage from "@/components/PlaceholderImage";

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="border-b-2 border-black bg-gray-50">
        <div className="container-narrow py-24">
          <h1 className="text-hero text-center mb-8">
            About Film Find
          </h1>
          <p className="text-xl text-gray-600 text-center max-w-2xl mx-auto leading-relaxed">
            Your curated directory of premium film labs for analog photography
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="container-narrow section-padding">
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="space-y-6">
            <h2 className="text-section-title">
              Our Mission
            </h2>
            <div className="text-body text-gray-700 space-y-4 leading-relaxed">
              <p>
                Film Find exists to connect analog photographers with exceptional film labs. 
                In an era where film photography is experiencing a renaissance, finding reliable, 
                high-quality processing services shouldn't be difficult.
              </p>
              <p>
                We've curated a comprehensive directory of film labs, providing detailed 
                information about services, pricing, turnaround times, and specialties. 
                Whether you shoot C-41, E-6, black and white, or experimental processes, 
                we help you find the perfect lab for your work.
              </p>
            </div>
          </div>

          {/* Image */}
          <PlaceholderImage 
            aspectRatio="cinema"
            label="Darkroom Equipment"
            className="border-2 border-black"
          />

          <div className="space-y-6">
            <h2 className="text-section-title">
              What Makes Us Different
            </h2>
            <div className="text-body text-gray-700 space-y-4 leading-relaxed">
              <p>
                Unlike generic business directories, Film Find is built specifically for 
                the film photography community. We understand the nuances of different 
                processing services, the importance of scanner quality, and the value 
                of expert color correction.
              </p>
              <p>
                Our directory includes detailed service breakdowns, actual pricing, 
                turnaround times, and—coming soon—user reviews with sample scans. 
                We're transparent about what each lab offers so you can make informed decisions.
              </p>
            </div>
          </div>

          {/* Development Phases */}
          <div className="space-y-6 pt-12 border-t-2 border-black">
            <h2 className="text-section-title">
              Development Roadmap
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-black text-white flex items-center justify-center font-serif font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-serif font-semibold mb-2">
                    Phase 1: Foundation (Current)
                  </h3>
                  <p className="text-sm text-gray-600">
                    Static homepage, lab listings, and core design system
                  </p>
                </div>
              </div>

              <div className="flex gap-4 opacity-60">
                <div className="flex-shrink-0 w-12 h-12 border-2 border-black flex items-center justify-center font-serif font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-serif font-semibold mb-2">
                    Phase 2: Search & Filter
                  </h3>
                  <p className="text-sm text-gray-600">
                    Firebase integration, location search, service filtering
                  </p>
                </div>
              </div>

              <div className="flex gap-4 opacity-60">
                <div className="flex-shrink-0 w-12 h-12 border-2 border-black flex items-center justify-center font-serif font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-serif font-semibold mb-2">
                    Phase 3: Lab Details
                  </h3>
                  <p className="text-sm text-gray-600">
                    Individual lab pages with full service details and galleries
                  </p>
                </div>
              </div>

              <div className="flex gap-4 opacity-60">
                <div className="flex-shrink-0 w-12 h-12 border-2 border-black flex items-center justify-center font-serif font-bold">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-serif font-semibold mb-2">
                    Phase 4: User Features
                  </h3>
                  <p className="text-sm text-gray-600">
                    Google Auth, reviews, favorites, and sample scan uploads
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

