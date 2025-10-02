# Film Find - Visual Design Reference

## Design Philosophy Achieved

✅ **Monochrome Only** - Pure black (#000000), white (#FFFFFF), and 9 shades of gray  
✅ **Editorial Typography** - Playfair Display (serif headlines) + Inter (sans-serif body)  
✅ **Ultra-Clean Whitespace** - 8px base grid, generous section padding (128-256px)  
✅ **Brutalist-Minimalist** - 2px black borders, sharp edges, minimal shadows  
✅ **Film-First** - Placeholder rectangles for future film photography imagery  

---

## Page-by-Page Breakdown

### 1. Homepage (`/`)

**Hero Section**
```
┌─────────────────────────────────────────────────────────┐
│ [Placeholder: Film Photography Lab]  │  FIND YOUR      │
│ Large 4:3 placeholder rectangle       │  FILM LAB       │
│ Light gray background                 │                 │
│ Subtle border                         │  [Tagline]      │
│                                       │  [Browse CTA]   │
└─────────────────────────────────────────────────────────┘
```

**Search Section**
- Centered heading: "Search Labs" (Playfair Display, 3xl-5xl)
- Large input field with 2px black border
- "Search" button (black background, white text)
- Quick filter pills below (C-41, E-6, Develop, etc.)

**Featured Labs**
- Grid: 3 columns desktop, 2 tablet, 1 mobile
- Each card: Placeholder image + lab name + location + services
- Brutalist borders with hover shadow effect

**Why Film Find**
- 3-column feature grid
- Icons: ✓, ○, ★ (in black squares)
- Clean typography hierarchy

---

### 2. Lab Directory (`/labs`)

**Header**
```
Film Lab Directory
Discover 24 premium film labs across Australia...

[24 Labs Listed] [5 States Covered] [18 Mail-In Services]
```

**Grid Layout**
```
┌──────────┐ ┌──────────┐ ┌──────────┐
│[Image]   │ │[Image]   │ │[Image]   │
│Lab Name  │ │Lab Name  │ │Lab Name  │
│Location  │ │Location  │ │Location  │
│[C-41][E6]│ │[C-41][BW]│ │[E6][C-41]│
│$$        │ │$$$       │ │$         │
└──────────┘ └──────────┘ └──────────┘
```

**Features**:
- Responsive grid (3/2/1 columns)
- Each card has 2px black border
- Hover effect: 8px shadow offset
- Service badges with 1px borders
- Price indicators ($, $$, $$$)

---

### 3. About Page (`/about`)

**Structure**:
- Hero section with centered title
- Mission statement (2-column text layout)
- Placeholder image (cinema aspect ratio)
- "What Makes Us Different" section
- Development roadmap (Phase 1-6)

**Roadmap Visual**:
```
[1] Phase 1: Foundation ✅
[2] Phase 2: Search & Filter
[3] Phase 3: Lab Details
[4] Phase 4: User Features
```

---

## Typography System

### Playfair Display (Serif - Headlines)
```
.text-hero
→ 3rem (mobile) to 4.5rem (desktop)
→ font-bold, tight leading
→ Used for: Page titles, hero headlines

.text-section-title
→ 1.875rem to 3rem
→ font-bold, tight leading
→ Used for: Section headings

.text-card-title
→ 1.25rem to 1.5rem
→ font-semibold
→ Used for: Card titles, lab names
```

### Inter (Sans-Serif - Body)
```
.text-body
→ 1rem base size
→ font-regular, relaxed leading
→ Used for: Paragraphs, descriptions

.text-label
→ 0.875rem
→ font-medium, wide tracking
→ Used for: Labels, metadata, badges

Buttons
→ 0.875rem-1rem
→ font-semibold, uppercase, wide tracking
```

---

## Color Palette (Monochrome)

```css
/* Pure extremes */
white: #FFFFFF
black: #000000

/* Gray scale (9 levels) */
gray-50:  #FAFAFA  /* Lightest backgrounds */
gray-100: #F5F5F5  /* Placeholder backgrounds */
gray-200: #E5E5E5  /* Subtle borders */
gray-300: #D4D4D4  /* Placeholder borders */
gray-400: #A3A3A3  /* Disabled text */
gray-500: #737373  /* Secondary text */
gray-600: #525252  /* Body text (dark) */
gray-700: #404040  /* Hover states */
gray-800: #262626  /* Almost black */
gray-900: #171717  /* Darkest */
```

---

## Component Library

### Buttons
```
.btn-primary
→ Black background, white text
→ 2px black border
→ Uppercase, semibold, wide tracking
→ Hover: Slightly lighter background

.btn-secondary
→ White background, black text
→ 2px black border
→ Hover: Light gray background

.btn-ghost
→ Transparent background
→ No border
→ Hover: Gray background
```

### Cards
```
.card
→ White background
→ 2px black border
→ Hover: 8px shadow (offset bottom-right)
→ Transition: all 200ms

Structure:
┌────────────────────┐
│ [Image]            │
│ ────────────────── │
│ [Title]            │
│ [Subtitle]         │
│ [Badges]           │
│ ────────────────── │
│ [Price] [Link →]   │
└────────────────────┘
```

### Service Badges
```
.service-badge
→ White background
→ 1px black border
→ Uppercase text
→ Small size (0.75rem)
→ Tight padding (px-3 py-1)

Examples: [C-41] [E-6] [B&W] [DEVELOP]
```

### Input Fields
```
.input-field
→ White background
→ 2px black border
→ Black text
→ Gray placeholder
→ Focus: 2px ring offset
```

### Placeholders
```
PlaceholderImage component
→ Light gray background (#F5F5F5)
→ 1px gray border (#D4D4D4)
→ Optional centered label (uppercase, small, gray)
→ Aspect ratios: cinema (16:9), photo (4:3), square (1:1)

Usage:
<PlaceholderImage 
  aspectRatio="cinema"
  label="Lab Photography"
/>
```

---

## Layout System

### Containers
```
.container-wide
→ max-width: 80rem (1280px)
→ Horizontal padding: 1rem (mobile) to 2rem (desktop)
→ Used for: Most pages

.container-narrow
→ max-width: 56rem (896px)
→ Used for: Text-heavy pages (About)
```

### Section Padding
```
.section-padding
→ py-16 (mobile)
→ py-24 (tablet)
→ py-32 (desktop)

Translates to: 128px-256px vertical spacing
```

### Grid Layouts
```
Homepage Featured Labs:
grid-cols-1 md:grid-cols-2 lg:grid-cols-3
gap-8 (64px)

Lab Directory:
grid-cols-1 md:grid-cols-2 lg:grid-cols-3
gap-8 (64px)
```

---

## Responsive Breakpoints

```
sm:  640px   (Mobile landscape)
md:  768px   (Tablet)
lg:  1024px  (Desktop)
xl:  1280px  (Large desktop)
```

### Mobile-First Examples

**Hero Text**:
- Mobile: text-5xl (3rem)
- Tablet: text-6xl (3.75rem)
- Desktop: text-7xl (4.5rem)

**Grid Columns**:
- Mobile: 1 column
- Tablet: 2 columns
- Desktop: 3 columns

**Navigation**:
- Mobile: Hamburger menu (placeholder)
- Desktop: Full horizontal menu

---

## Spacing Philosophy

### 8px Base Grid
All spacing uses multiples of 8px:
- 0.5 = 4px (rare, fine adjustments)
- 1 = 8px
- 2 = 16px
- 3 = 24px
- 4 = 32px
- 6 = 48px
- 8 = 64px
- 12 = 96px
- 16 = 128px
- 24 = 192px
- 32 = 256px

### Generous Whitespace
- Between sections: 96px-256px
- Between cards: 64px
- Within cards: 16-24px
- Around text: 32-48px

---

## Brutalist Elements

1. **Sharp Borders**: Always 2px, pure black, no border-radius
2. **Hard Shadows**: Only on hover, 8px offset (not blur)
3. **High Contrast**: Pure black on white, or inverse
4. **No Gradients**: Solid colors only
5. **Geometric**: Rectangles, squares, clean lines
6. **Functional**: Form follows function

---

## Animation & Interaction

### Transitions
```css
transition-all /* For hover effects */
duration-200    /* 200ms for most interactions */
```

### Hover States
```
Cards:        → 8px shadow offset
Buttons:      → Background lightens/darkens
Links:        → Underline or color change
Service Badges: → (None - static)
```

---

## Accessibility

✅ Semantic HTML (header, nav, main, footer, article, section)  
✅ Proper heading hierarchy (h1 → h2 → h3)  
✅ Alt text placeholders for images  
✅ Focus states on interactive elements  
✅ High contrast (black on white)  
✅ Keyboard navigation support  

---

## What's NOT Included (Phase 1)

❌ Real film photography images (placeholders only)  
❌ Functional search/filtering  
❌ Individual lab detail pages  
❌ User authentication  
❌ Reviews and ratings  
❌ Image uploads  
❌ Mobile hamburger menu functionality  

These will be added in Phases 2-6.

---

## Visual Inspiration

**Referenced**:
- analogica.app (structure, simplicity)
- Vogue magazine (editorial typography)
- Monocle magazine (clean sans-serif)
- Brutalist web design (borders, layout)
- Film photography aesthetics (monochrome, grain)

**Achieved**:
✅ Premium feel without color
✅ Editorial quality typography
✅ Functional minimalism
✅ Film photography focus
✅ Professional yet approachable

---

## Performance Notes

- Static generation for homepage
- Server-side rendering for lab listing
- Optimized Google Fonts (preload)
- Minimal JavaScript (Next.js hydration only)
- No external dependencies beyond React/Next.js
- Fast page loads (<1s LCP target)

---

**Status**: Phase 1 Visual Foundation Complete ✅  
**Design System**: Fully Implemented  
**Ready For**: Phase 2 (Firebase & Search)

