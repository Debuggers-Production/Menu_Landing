import { Outlet, Link } from 'react-router-dom';
import logo from '../assets/menukit-logo.svg';

export function DocsLayout() {
  return (
    <div className="relative min-h-screen bg-white text-slate-900 font-sans">
      {/* We use a simplified header to avoid the dark landing page styling clashing, but we can reuse the logo */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-1 group">
            <div className="w-10 h-10 flex items-center justify-center scale-110 group-hover:scale-105 transition-transform">
              <img src={logo} alt="MenuKit" className="w-full h-full" />
            </div>
            <span className="text-xl font-bold text-slate-900 ml-1 tracking-tight">
              Menu<span className="text-primary">Kit</span>
            </span>
            <span className="text-[10px] font-bold bg-primary/10 text-primary px-2 py-0.5 rounded-md ml-2 uppercase tracking-wider">DOCS</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/docs" className="text-sm font-semibold text-slate-600 hover:text-primary transition-colors">All Articles</Link>
            <a href="https://menukit.debuggers.co.in/login" className="text-sm font-bold text-white bg-slate-900 hover:bg-slate-800 px-4 py-2 rounded-lg transition-colors">Dashboard</a>
          </nav>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <Outlet />
      </main>

      <footer className="bg-slate-50 border-t border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm font-medium text-slate-500">
            © {new Date().getFullYear()} Menukit. Empowering modern restaurants.
          </p>
        </div>
      </footer>
    </div>
  );
}
