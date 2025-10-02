interface PlaceholderImageProps {
  aspectRatio?: "cinema" | "photo" | "square";
  label?: string;
  className?: string;
}

export default function PlaceholderImage({ 
  aspectRatio = "cinema", 
  label,
  className = "" 
}: PlaceholderImageProps) {
  const aspectClass = {
    cinema: "aspect-cinema",
    photo: "aspect-photo",
    square: "aspect-square",
  }[aspectRatio];

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

