import { Outlet, Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import logo from '../assets/menukit-logo.svg';

export function ExploreLayout() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col">
      {/* Navbar specific for Explore */}
      <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-1 group">
            <div className="w-10 h-10 flex items-center justify-center scale-110 group-hover:scale-105 transition-transform">
              <img src={logo} alt="MenuKit" className="w-full h-full" />
            </div>
            <span className="text-xl font-bold text-slate-900 ml-1 tracking-tight hidden sm:block">
              Menu<span className="text-primary">Kit</span>
            </span>
          </Link>
          
          {/* Main search bar in header */}
          <div className="flex-1 max-w-lg mx-4">
            <div className="relative group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors" size={18} />
              <input 
                type="text" 
                placeholder="Search restaurants, cuisines, dishes..." 
                className="w-full bg-slate-100 border-none rounded-full py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all outline-none"
              />
            </div>
          </div>

          <nav className="flex items-center gap-3">
            <Link to="/explore" className="text-sm font-semibold text-slate-600 hover:text-primary transition-colors hidden sm:block">Explore</Link>
          </nav>
        </div>
      </header>
      
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>
      
      <footer className="bg-white border-t border-slate-200 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6"><img src={logo} alt="MenuKit" className="w-full h-full grayscale opacity-50" /></div>
            <span className="text-slate-500 font-medium text-sm">© 2026 MenuKit. All rights reserved.</span>
          </div>
          <div className="flex gap-6 text-sm text-slate-500 font-medium">
            <Link to="/docs" className="hover:text-primary">Documentation</Link>
            <Link to="/" className="hover:text-primary">For Restaurants</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
