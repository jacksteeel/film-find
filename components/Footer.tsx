import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t-2 border-black bg-white mt-24">
      <div className="container-wide py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="col-span-1">
            <h3 className="text-xl font-serif font-bold mb-4">Film Find</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Your curated directory of premium film labs for analog photography.
            </p>
          </div>

          {/* Directory */}
          <div>
            <h4 className="text-sm font-sans font-bold uppercase tracking-wide mb-4">
              Directory
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/labs" className="text-gray-600 hover:text-black transition-colors">
                  Browse Labs
                </Link>
              </li>
              <li>
                <Link href="/" className="text-gray-600 hover:text-black transition-colors">
                  Search
                </Link>
              </li>
              <li>
                <span className="text-gray-400 cursor-not-allowed">Submit a Lab</span>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-sans font-bold uppercase tracking-wide mb-4">
              Resources
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-black transition-colors">
                  About
                </Link>
              </li>
              <li>
                <span className="text-gray-400 cursor-not-allowed">Film Guides</span>
              </li>
              <li>
                <span className="text-gray-400 cursor-not-allowed">Help Center</span>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-sans font-bold uppercase tracking-wide mb-4">
              Legal
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="text-gray-400 cursor-not-allowed">Privacy Policy</span>
              </li>
              <li>
                <span className="text-gray-400 cursor-not-allowed">Terms of Service</span>
              </li>
              <li>
                <span className="text-gray-400 cursor-not-allowed">Contact</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-600">
              &copy; {new Date().getFullYear()} Film Find. All rights reserved.
            </p>
            <p className="text-xs text-gray-500">
              Phase 1: Static MVP
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

