import { notFound } from "next/navigation";

export default function LabDetailPage({ params }: { params: { id: string } }) {
  // Phase 1: Stub page - will be implemented in Phase 3
  return (
    <div className="bg-white">
      <section className="container-narrow section-padding">
        <div className="text-center space-y-6">
          <h1 className="text-hero">
            Lab Details
          </h1>
          <p className="text-xl text-gray-600">
            Individual lab pages will be available in Phase 3
          </p>
          <a 
            href="/labs"
            className="btn-secondary inline-block"
          >
            ← Back to Directory
          </a>
        </div>
      </section>
    </div>
  );
}

