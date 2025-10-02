# Film Find

A premium film lab directory web application for analog photographers. Built with Next.js 15, TypeScript, and Tailwind CSS.

## Design Philosophy

- **Monochrome aesthetic**: Black, white, and grays only—let film photography provide the color
- **Editorial typography**: Playfair Display (serif) for headlines, Inter (sans-serif) for body text
- **Brutalist-minimalist**: Ultra-clean, generous whitespace, functional but sophisticated
- **Film-first**: Designed specifically for the analog photography community

## Current Status: Phase 1 (Visual Foundation)

✅ Static homepage with hero, search UI, and featured labs  
✅ Lab listing page with CSV data integration  
✅ Monochrome design system with editorial typography  
✅ Responsive layout with mobile-first approach  
✅ Basic navigation and footer  

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Data**: CSV parsing with PapaParse
- **Fonts**: Google Fonts (Playfair Display, Inter)
- **Deployment**: Vercel-ready

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd film-find
```

2. Install dependencies:
```bash
npm install
```

3. Ensure the CSV data file is in the parent directory:
```
/Users/jacksteel/Desktop/Film Find/
├── au-film-labs-directory.csv  ← Data file
└── film-find/                   ← App directory
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
film-find/
├── app/
│   ├── layout.tsx          # Root layout with fonts
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Design system & Tailwind
│   ├── about/
│   │   └── page.tsx        # About page
│   └── labs/
│       ├── page.tsx        # Lab listing
│       └── [id]/
│           └── page.tsx    # Lab detail (stub)
├── components/
│   ├── Header.tsx          # Navigation
│   ├── Footer.tsx          # Footer
│   ├── LabCard.tsx         # Lab card component
│   └── PlaceholderImage.tsx # Image placeholder
├── lib/
│   ├── types.ts            # TypeScript interfaces
│   └── parseCsvData.ts     # CSV parser utility
└── public/
```

## Development Phases

### Phase 1: Visual Foundation ✅ (Current)
- Static homepage and lab listing
- Monochrome design system
- CSV data integration
- No authentication or filtering

### Phase 2: Search & Filter (Planned)
- Firebase setup and data migration
- Location-based search
- Service filtering and sorting
- Database integration

### Phase 3: Lab Details (Planned)
- Individual lab pages
- Full service details
- Sample scan galleries
- Contact information

### Phase 4: User Features (Planned)
- Google Authentication
- User reviews and ratings
- Favorite labs
- Sample scan uploads

### Phase 5: Image Management (Planned)
- Cloudinary or Firebase Storage
- Image optimization
- Gallery management

### Phase 6: Admin Panel (Planned)
- Lab approval workflow
- User management
- Content moderation

## Design System

### Colors (Monochrome)
- **White**: #FFFFFF
- **Black**: #000000
- **Grays**: 50, 100, 200, 300, 400, 500, 600, 700, 800, 900

### Typography
- **Headlines**: Playfair Display (serif, bold)
- **Body**: Inter (sans-serif, regular)
- **Labels**: Inter (sans-serif, medium, uppercase)

### Spacing
- Base grid: 8px
- Section padding: 16-32 units (128px-256px)
- Card gaps: 8 units (64px)

### Components
- **Buttons**: Brutalist borders, black/white variants
- **Cards**: 2px black border, shadow on hover
- **Inputs**: 2px black border, focus ring
- **Badges**: 1px border, uppercase labels

## Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Deployment (Vercel)

1. Push code to GitHub
2. Connect repository to Vercel
3. Vercel will auto-detect Next.js configuration
4. Deploy

**Note**: Ensure the CSV file path in `lib/parseCsvData.ts` is accessible in production, or migrate to Firebase in Phase 2.

## Data Source

Currently using `au-film-labs-directory.csv` with Australian film lab data including:
- Lab names, locations, contact info
- Services (C-41, E-6, B&W, etc.)
- Film formats (35mm, 120, large format)
- Pricing and turnaround times
- Special services and notes

## Contributing

This is Phase 1. Contributions and feedback welcome as we progress through development phases.

## License

Private project - All rights reserved

## Acknowledgments

- Inspired by analogica.app
- Designed for the film photography community
- Built with love for analog photography

---

**Current Phase**: 1 of 6  
**Last Updated**: October 2025
