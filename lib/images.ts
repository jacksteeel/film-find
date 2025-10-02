/**
 * Image management for Film Find
 * 
 * Default: Generic film lab image from Unsplash
 * Custom images can be added per lab by placing them in /public/labs/
 */

// Generic film lab image from Unsplash (high quality, darkroom/film photography theme)
export const DEFAULT_LAB_IMAGE = 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&q=80';
// Alternative options:
// https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80 (film cameras)
// https://images.unsplash.com/photo-1606925797300-0b35e9d1794e?w=800&q=80 (darkroom)

/**
 * Get image URL for a lab
 * Priority: custom image > default image
 */
export function getLabImage(labId: string): string {
  // Check if custom image exists
  // Format: /labs/{labId}.jpg or /labs/{labId}.webp
  // For now, return default. Custom images can be added to /public/labs/
  
  // Future: Check if file exists in public/labs/
  // if (customImageExists(labId)) {
  //   return `/labs/${labId}.jpg`;
  // }
  
  return DEFAULT_LAB_IMAGE;
}

/**
 * Get featured image for hero sections
 */
export function getFeaturedImage(): string {
  return 'https://images.unsplash.com/photo-1606925797300-0b35e9d1794e?w=1200&q=80';
}

/**
 * Image optimization config for Next.js
 */
export const imageConfig = {
  domains: ['images.unsplash.com'],
  formats: ['image/webp', 'image/avif'],
};

