import Link from "next/link";
import PlaceholderImage from "./PlaceholderImage";
import { Lab } from "@/lib/types";
import { getLabImage } from "@/lib/images";

interface LabCardProps {
  lab: Lab;
  featured?: boolean;
}

export default function LabCard({ lab, featured = false }: LabCardProps) {
  // Calculate price range inline (client-safe)
  const calculatePriceRange = (lab: Lab): string => {
    const prices = [
      lab.developOnly35mm,
      lab.developScan35mm,
      lab.developHiRes35mm,
    ].filter(Boolean);

    if (prices.length === 0) return '$$';

    const numericPrices = prices
      .map(p => {
        const match = p.match(/\d+/);
        return match ? parseInt(match[0]) : 0;
      })
      .filter(n => n > 0);

    if (numericPrices.length === 0) return '$$';

    const avgPrice = numericPrices.reduce((a, b) => a + b, 0) / numericPrices.length;

    if (avgPrice < 15) return '$';
    if (avgPrice < 25) return '$$';
    return '$$$';
  };

  const priceRange = calculatePriceRange(lab);
  const primaryServices = lab.services.slice(0, 3);

  return (
    <article className="card group">
      {/* Lab Image */}
      <PlaceholderImage 
        aspectRatio={featured ? "photo" : "cinema"}
        src={getLabImage(lab.id)}
        alt={`${lab.name} - Film lab in ${lab.city}, ${lab.state}`}
        className="w-full"
      />

      {/* Card Content */}
      <div className="p-6 space-y-4">
        {/* Lab Name */}
        <h3 className="text-card-title group-hover:text-gray-700 transition-colors">
          {lab.name}
        </h3>

        {/* Location */}
        <p className="text-label text-gray-600">
          {lab.city}, {lab.state}
        </p>

        {/* Services */}
        {primaryServices.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {primaryServices.map((service, index) => (
              <span key={index} className="service-badge">
                {service}
              </span>
            ))}
          </div>
        )}

        {/* Footer: Price & Link */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
          <span className="text-sm font-sans font-bold">
            {priceRange}
          </span>
          <Link 
            href={`/labs/${lab.id}`}
            className="text-sm font-sans font-medium uppercase tracking-wide hover:underline"
          >
            View Details →
          </Link>
        </div>
      </div>
    </article>
  );
}

