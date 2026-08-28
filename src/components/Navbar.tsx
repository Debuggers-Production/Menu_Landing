import { useState, useEffect } from 'react'
import { APP_CONFIG } from '../config'
import { motion, AnimatePresence } from 'framer-motion'
import { HiOutlineMenuAlt3, HiOutlineX } from 'react-icons/hi'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import logo from "../assets/menukit-logo.svg";

const navLinks = [
  { label: 'Features', href: '/features', isRoute: true, sectionId: 'features' },
  { label: 'How It Works', href: '/how-it-works', isRoute: true, sectionId: 'how-it-works' },
  { label: 'Demo', href: '/demo', isRoute: true, sectionId: 'demo' },
  { label: 'Pricing', href: '/pricing', isRoute: true, sectionId: 'pricing' },
  { label: 'Discover', href: 'https://menukit.debuggerstechnologies.com/discover', isRoute: false },
  { label: 'Contact Us', href: '/contact', isRoute: true },
  { label: 'Learn', href: '/docs', isRoute: true },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, link: typeof navLinks[0]) => {
    if (link.sectionId && location.pathname === '/') {
      const element = document.getElementById(link.sectionId)
      if (element) {
        e.preventDefault()
        setMobileOpen(false)
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/80 backdrop-blur-xl border-b border-slate-200'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center group">
              <div className="w-12 h-12 flex items-center justify-center scale-110">
                <img src={logo} alt="MenuKit-Logo" className="w-full h-full" />
              </div>
              <span className="text-xl font-display font-bold text-slate-900">
                Menu<span className="gradient-text">Kit</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const isDiscover = link.label === 'Discover'
                const className = isDiscover
                  ? "px-4 py-1.5 text-sm font-bold text-primary hover:text-white transition-colors duration-200 rounded-lg bg-primary/10 hover:bg-primary border border-primary/20"
                  : "px-4 py-2 text-sm font-semibold text-slate-600 hover:text-primary transition-colors duration-200 rounded-lg hover:bg-black/5"

                return link.isRoute ? (
                  <Link
                    key={link.label}
                    to={link.href}
                    onClick={(e) => handleNavClick(e, link)}
                    className={className}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    className={className}
                  >
                    {link.label}
                  </a>
                )
              })}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <a href={APP_CONFIG.MAIN_APP_URL} className="shimmer-btn px-5 py-2.5 text-sm inline-block">
                Start Free
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden text-slate-900 p-2"
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <HiOutlineX size={24} /> : <HiOutlineMenuAlt3 size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const isDiscover = link.label === 'Discover'
                const className = isDiscover
                  ? "text-lg font-bold text-primary hover:text-orange-500 transition-colors py-3 border-b border-slate-200"
                  : "text-lg font-semibold text-slate-600 hover:text-primary transition-colors py-3 border-b border-slate-200"

                return link.isRoute ? (
                  <Link
                    key={link.label}
                    to={link.href}
                    onClick={(e) => {
                      if (link.sectionId && location.pathname === '/') {
                        handleNavClick(e, link)
                      } else {
                        setMobileOpen(false)
                      }
                    }}
                    className={className}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={className}
                  >
                    {link.label}
                  </a>
                )
              })}
              <div className="mt-6 flex flex-col gap-3">
                <a href={APP_CONFIG.MAIN_APP_URL} className="shimmer-btn px-6 py-3 text-base w-full text-center">
                  Start Free
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
