import Image from "next/image";

interface PlaceholderImageProps {
  aspectRatio?: "cinema" | "photo" | "square";
  label?: string;
  className?: string;
  src?: string;
  alt?: string;
}

export default function PlaceholderImage({ 
  aspectRatio = "cinema", 
  label,
  className = "",
  src,
  alt = "Film lab photography"
}: PlaceholderImageProps) {
  const aspectClass = {
    cinema: "aspect-cinema",
    photo: "aspect-photo",
    square: "aspect-square",
  }[aspectRatio];

  // If image src is provided, use Next Image
  if (src) {
    return (
      <div className={`${aspectClass} relative overflow-hidden border border-gray-300 ${className}`}>
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    );
  }

  // Fallback to placeholder
  return (
    <div 
      className={`${aspectClass} bg-gray-100 border border-gray-300 flex items-center justify-center ${className}`}
    >
      {label && (
        <span className="text-xs font-sans font-medium text-gray-400 uppercase tracking-widest">
          {label}
        </span>
      )}
    </div>
  );
}

