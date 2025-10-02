import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b-2 border-black bg-white sticky top-0 z-50">
      <nav className="container-wide py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <h1 className="text-2xl md:text-3xl font-serif font-bold tracking-tight hover:text-gray-700 transition-colors">
              Film Find
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-sm font-sans font-medium tracking-wide uppercase hover:text-gray-600 transition-colors"
            >
              Search
            </Link>
            <Link 
              href="/labs" 
              className="text-sm font-sans font-medium tracking-wide uppercase hover:text-gray-600 transition-colors"
            >
              Browse
            </Link>
            <Link 
              href="/about" 
              className="text-sm font-sans font-medium tracking-wide uppercase hover:text-gray-600 transition-colors"
            >
              About
            </Link>
            <button 
              disabled
              className="text-sm font-sans font-medium tracking-wide uppercase text-gray-400 cursor-not-allowed"
              title="Coming in Phase 4"
            >
              Sign In
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            aria-label="Menu"
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 6h16M4 12h16M4 18h16" 
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden mt-4 pt-4 border-t border-gray-200 hidden">
          <div className="flex flex-col space-y-4">
            <Link 
              href="/" 
              className="text-sm font-sans font-medium tracking-wide uppercase hover:text-gray-600 transition-colors"
            >
              Search
            </Link>
            <Link 
              href="/labs" 
              className="text-sm font-sans font-medium tracking-wide uppercase hover:text-gray-600 transition-colors"
            >
              Browse
            </Link>
            <Link 
              href="/about" 
              className="text-sm font-sans font-medium tracking-wide uppercase hover:text-gray-600 transition-colors"
            >
              About
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

