import Link from "next/link";
import PlaceholderImage from "@/components/PlaceholderImage";
import LabCard from "@/components/LabCard";
import { getFeaturedLabs } from "@/lib/parseCsvData";

const quickFilters = [
  "Develop",
  "Scan", 
  "Print",
  "Push/Pull",
  "E6",
  "C41"
];

export default async function Home() {
  const featuredLabs = await getFeaturedLabs();

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gray-50 border-b-2 border-black">
        <div className="container-wide section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Hero Text */}
            <div className="space-y-8 order-2 lg:order-1">
              <h1 className="text-hero">
                Find Your Film Lab
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed max-w-xl">
                Discover curated film labs for developing, scanning, and printing 
                your analog photography. Premium services, expert craftsmanship.
              </p>
              <Link href="/labs" className="btn-primary inline-block">
                Browse Directory
              </Link>
            </div>

            {/* Hero Image */}
            <div className="order-1 lg:order-2">
              <PlaceholderImage 
                aspectRatio="photo"
                label="Film Photography Lab"
                className="w-full border-2 border-black"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="bg-white border-b-2 border-black">
        <div className="container-narrow section-padding">
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-section-title">
                Search Labs
              </h2>
              <p className="text-body text-gray-600 max-w-2xl mx-auto">
                Find film labs by location, services, or specialty
              </p>
            </div>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="Enter city or state..."
                  className="input-field flex-1"
                  disabled
                />
                <Link href="/labs" className="btn-primary">
                  Search
                </Link>
              </div>
              <p className="text-xs text-gray-500 mt-2 text-center">
                Search functionality coming in Phase 2
              </p>
            </div>

            {/* Quick Filters */}
            <div className="flex flex-wrap justify-center gap-3">
              {quickFilters.map((filter) => (
                <button 
                  key={filter}
                  className="btn-ghost service-badge"
                  disabled
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Labs */}
      <section className="bg-white section-padding">
        <div className="container-wide">
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-section-title">
                Featured Labs
              </h2>
              <p className="text-body text-gray-600 max-w-2xl mx-auto">
                Hand-picked film labs known for exceptional quality and service
              </p>
            </div>

            {/* Featured Labs Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredLabs.map((lab) => (
                <LabCard key={lab.id} lab={lab} featured />
              ))}
            </div>

            {/* View All Link */}
            <div className="text-center pt-8">
              <Link href="/labs" className="btn-secondary">
                View All Labs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Film Find Section */}
      <section className="bg-gray-50 border-t-2 border-black section-padding">
        <div className="container-narrow">
          <div className="text-center space-y-8">
            <h2 className="text-section-title">
              Why Film Find?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
              {/* Feature 1 */}
              <div className="space-y-4">
                <div className="w-16 h-16 mx-auto bg-black flex items-center justify-center">
                  <span className="text-white text-2xl font-serif">✓</span>
                </div>
                <h3 className="text-xl font-serif font-semibold">
                  Curated Selection
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Only the best film labs make our directory. We verify quality, 
                  service, and expertise.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="space-y-4">
                <div className="w-16 h-16 mx-auto bg-black flex items-center justify-center">
                  <span className="text-white text-2xl font-serif">○</span>
                </div>
                <h3 className="text-xl font-serif font-semibold">
                  Detailed Information
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Pricing, turnaround times, services, and sample scans—everything 
                  you need to decide.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="space-y-4">
                <div className="w-16 h-16 mx-auto bg-black flex items-center justify-center">
                  <span className="text-white text-2xl font-serif">★</span>
                </div>
                <h3 className="text-xl font-serif font-semibold">
                  Community Reviews
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Real reviews from film photographers. See sample scans from 
                  actual customers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
