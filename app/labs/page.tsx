import LabCard from "@/components/LabCard";
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
              From C-41 to E-6, black and white to large format—find the perfect lab for your film.
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

      {/* Filter Notice (Phase 1) */}
      <section className="border-b border-gray-200 bg-white">
        <div className="container-wide py-4">
          <p className="text-sm text-gray-500 text-center">
            Showing all labs • Filtering and sorting coming in Phase 2
          </p>
        </div>
      </section>

      {/* Labs Grid */}
      <section className="container-wide section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {labs.map((lab) => (
            <LabCard key={lab.id} lab={lab} />
          ))}
        </div>

        {/* Empty State (shouldn't happen with CSV data) */}
        {labs.length === 0 && (
          <div className="text-center py-24">
            <h3 className="text-2xl font-serif font-semibold mb-4">
              No labs found
            </h3>
            <p className="text-gray-600">
              Check back soon as we add more labs to our directory.
            </p>
          </div>
        )}
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

