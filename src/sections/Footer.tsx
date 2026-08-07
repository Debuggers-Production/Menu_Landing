import { Link } from 'react-router-dom';
import { IoLogoTwitter, IoLogoInstagram, IoLogoLinkedin, IoLogoGithub } from 'react-icons/io5'
import logo from "../assets/menukit-logo.svg";

const footerLinks = {
  Product: [
    { name: 'Features', href: '#' },
    { name: 'Pricing', href: '#' },
    { name: 'Demo', href: '#' }
  ],
  Company: [
    { name: 'About', href: '#' },
    { name: 'Contact', href: 'mailto:debuggerstechs@gmail.com' }
  ],
  Resources: [
    { name: 'Documentation', href: '/docs' },
    { name: 'Help Center', href: '#' }
  ],
}

const socialLinks = [
  { icon: IoLogoTwitter, href: '#', label: 'Twitter' },
  { icon: IoLogoInstagram, href: '#', label: 'Instagram' },
  { icon: IoLogoLinkedin, href: '#', label: 'LinkedIn' },
  { icon: IoLogoGithub, href: '#', label: 'GitHub' },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-16">
          {/* Brand */}
          <div className="col-span-2">
            <a href="#" className="flex items-center mb-4">
              <div className="w-12 h-12 flex items-center justify-center scale-110">
                <img src={logo} alt="MenuKit-Logo" className="w-full h-full" />
              </div>
              <span className="text-xl font-display font-bold text-slate-900">
                Menu<span className="gradient-text">Kit</span>
              </span>
            </a>
            <p className="text-sm text-slate-500 leading-relaxed mb-6 max-w-xs">
              Transform your restaurant menu into a beautiful digital experience. QR-powered, instant updates, zero hassle.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl bg-black/5 flex items-center justify-center text-slate-500 hover:text-primary hover:bg-primary/10 transition-all duration-200"
                >
                  <social.icon className="text-lg" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-display font-semibold text-slate-900 mb-4">{category}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.name}>
                    {link.href.startsWith('/') ? (
                      <Link
                        to={link.href}
                        className="text-sm text-slate-500 hover:text-slate-900 transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="text-sm text-slate-500 hover:text-slate-900 transition-colors duration-200"
                      >
                        {link.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} MenuKit. A product by <a href="https://debuggers.co.in" target="_blank" rel="noopener noreferrer" className="text-slate-900 hover:text-primary transition-colors font-medium">Debuggers</a>. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
