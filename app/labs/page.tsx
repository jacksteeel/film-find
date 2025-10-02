import LabSearch from "@/components/LabSearch";
import { getLabsData } from "@/lib/parseCsvData";

export default async function LabsPage() {
  const labs = await getLabsData();

  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="border-b-2 border-black bg-gray-50">
        <div className="container-wide py-16">
          <div className="space-y-4">
            <h1 className="text-hero">
              Film Lab Directory
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              Discover {labs.length} premium film labs across Australia. 
              Search, filter, and find the perfect lab for your film.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="mt-12 flex flex-wrap gap-8">
            <div className="space-y-1">
              <div className="text-3xl font-serif font-bold">{labs.length}</div>
              <div className="text-sm text-gray-600 uppercase tracking-wide">Labs Listed</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl font-serif font-bold">
                {new Set(labs.map(l => l.state)).size}
              </div>
              <div className="text-sm text-gray-600 uppercase tracking-wide">States Covered</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl font-serif font-bold">
                {labs.filter(l => l.mailIn === 'Yes').length}
              </div>
              <div className="text-sm text-gray-600 uppercase tracking-wide">Mail-In Services</div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="container-wide section-padding">
        <LabSearch labs={labs} />
      </section>

      {/* CTA Section */}
      <section className="border-t-2 border-black bg-gray-50">
        <div className="container-narrow section-padding">
          <div className="text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-serif font-bold">
              Don't see your favorite lab?
            </h2>
            <p className="text-body text-gray-600 max-w-xl mx-auto">
              We're constantly expanding our directory. Lab submissions and user-generated 
              content will be available in Phase 4.
            </p>
            <button 
              disabled
              className="btn-secondary opacity-50 cursor-not-allowed"
            >
              Submit a Lab (Coming Soon)
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

