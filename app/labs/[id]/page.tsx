import { notFound } from "next/navigation";
import Link from "next/link";
import PlaceholderImage from "@/components/PlaceholderImage";
import { getLabsData } from "@/lib/parseCsvData";
import { getLabImage } from "@/lib/images";

export async function generateStaticParams() {
  const labs = await getLabsData();
  return labs.map((lab) => ({
    id: lab.id,
  }));
}

export default async function LabDetailPage({ 
  params 
}: { 
  params: Promise<{ id: string }> 
}) {
  const { id } = await params;
  
  // Get all labs and find the specific one
  const labs = await getLabsData();
  const lab = labs.find(l => l.id === id);

  if (!lab) {
    notFound();
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="border-b-2 border-black">
        <div className="container-wide py-16">
          <Link 
            href="/labs"
            className="inline-flex items-center text-sm font-sans font-medium hover:underline mb-6"
          >
            ← Back to Directory
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Lab Image */}
            <PlaceholderImage
              aspectRatio="photo"
              src={getLabImage(lab.id)}
              alt={`${lab.name} - Film lab`}
              className="w-full border-2 border-black"
            />

            {/* Lab Info */}
            <div className="space-y-8">
              <div>
                <h1 className="text-hero mb-4">{lab.name}</h1>
                <p className="text-xl text-gray-600">
                  {lab.city}, {lab.state}
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-3 pb-8 border-b-2 border-black">
                {lab.website && (
                  <div>
                    <span className="text-sm font-sans font-medium uppercase tracking-wide text-gray-500">Website</span>
                    <a 
                      href={lab.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-base hover:underline mt-1"
                    >
                      {lab.website}
                    </a>
                  </div>
                )}
                
                {lab.email && (
                  <div>
                    <span className="text-sm font-sans font-medium uppercase tracking-wide text-gray-500">Email</span>
                    <a 
                      href={`mailto:${lab.email}`}
                      className="block text-base hover:underline mt-1"
                    >
                      {lab.email}
                    </a>
                  </div>
                )}
                
                {lab.phone && (
                  <div>
                    <span className="text-sm font-sans font-medium uppercase tracking-wide text-gray-500">Phone</span>
                    <a 
                      href={`tel:${lab.phone}`}
                      className="block text-base hover:underline mt-1"
                    >
                      {lab.phone}
                    </a>
                  </div>
                )}

                {lab.address && (
                  <div>
                    <span className="text-sm font-sans font-medium uppercase tracking-wide text-gray-500">Address</span>
                    <p className="text-base mt-1">{lab.address}</p>
                  </div>
                )}
              </div>

              {/* Quick Info */}
              <div className="grid grid-cols-2 gap-4">
                {lab.turnaround && (
                  <div className="bg-gray-50 border border-gray-300 p-4">
                    <span className="text-xs font-sans font-medium uppercase tracking-wide text-gray-500">Turnaround</span>
                    <p className="text-base font-semibold mt-1">{lab.turnaround}</p>
                  </div>
                )}
                
                {lab.mailIn && (
                  <div className="bg-gray-50 border border-gray-300 p-4">
                    <span className="text-xs font-sans font-medium uppercase tracking-wide text-gray-500">Mail-In</span>
                    <p className="text-base font-semibold mt-1">{lab.mailIn}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services & Pricing */}
      <section className="container-wide section-padding">
        <div className="max-w-4xl">
          <h2 className="text-section-title mb-8">Services & Pricing</h2>
          
          <div className="space-y-6">
            {/* Services */}
            <div>
              <h3 className="text-xl font-serif font-semibold mb-4">Film Processing</h3>
              <div className="flex flex-wrap gap-2">
                {lab.services.map((service, index) => (
                  <span key={index} className="service-badge">
                    {service}
                  </span>
                ))}
              </div>
            </div>

            {/* Formats */}
            {lab.formats.length > 0 && (
              <div>
                <h3 className="text-xl font-serif font-semibold mb-4">Formats Supported</h3>
                <div className="flex flex-wrap gap-2">
                  {lab.formats.map((format, index) => (
                    <span key={index} className="service-badge">
                      {format}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Pricing */}
            <div className="bg-gray-50 border-2 border-black p-6 space-y-4">
              <h3 className="text-xl font-serif font-semibold">35mm Pricing</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {lab.developOnly35mm && (
                  <div>
                    <span className="text-sm font-sans font-medium uppercase tracking-wide text-gray-500">Develop Only</span>
                    <p className="text-lg font-semibold mt-1">{lab.developOnly35mm}</p>
                  </div>
                )}
                
                {lab.developScan35mm && (
                  <div>
                    <span className="text-sm font-sans font-medium uppercase tracking-wide text-gray-500">Develop + Scan</span>
                    <p className="text-lg font-semibold mt-1">{lab.developScan35mm}</p>
                  </div>
                )}
                
                {lab.developHiRes35mm && (
                  <div>
                    <span className="text-sm font-sans font-medium uppercase tracking-wide text-gray-500">Develop + Hi-Res</span>
                    <p className="text-lg font-semibold mt-1">{lab.developHiRes35mm}</p>
                  </div>
                )}
                
                {lab.developPrint35mm && (
                  <div>
                    <span className="text-sm font-sans font-medium uppercase tracking-wide text-gray-500">Develop + Print</span>
                    <p className="text-lg font-semibold mt-1">{lab.developPrint35mm}</p>
                  </div>
                )}
              </div>

              {lab.expressService && (
                <div className="pt-4 border-t border-gray-300">
                  <span className="text-sm font-sans font-medium uppercase tracking-wide text-gray-500">Express Service</span>
                  <p className="text-base mt-1">{lab.expressService}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Special Services & Notes */}
      {(lab.specialServices || lab.notes) && (
        <section className="container-wide pb-24">
          <div className="max-w-4xl">
            {lab.specialServices && (
              <div className="mb-8">
                <h2 className="text-2xl font-serif font-semibold mb-4">Special Services</h2>
                <p className="text-base text-gray-700 leading-relaxed">{lab.specialServices}</p>
              </div>
            )}
            
            {lab.notes && (
              <div>
                <h2 className="text-2xl font-serif font-semibold mb-4">Additional Notes</h2>
                <p className="text-base text-gray-700 leading-relaxed">{lab.notes}</p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Back to Directory CTA */}
      <section className="border-t-2 border-black bg-gray-50">
        <div className="container-narrow py-16 text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">
            Explore More Labs
          </h2>
          <p className="text-gray-600 mb-6">
            Discover other film labs in Australia
          </p>
          <Link href="/labs" className="btn-primary">
            View All Labs
          </Link>
        </div>
      </section>
    </div>
  );
}
