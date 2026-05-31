import { motion } from 'framer-motion'
import { IoQrCodeOutline, IoLogoTwitter, IoLogoInstagram, IoLogoLinkedin, IoLogoGithub } from 'react-icons/io5'

const footerLinks = {
  Product: ['Features', 'Pricing', 'Demo', 'Templates', 'API'],
  Company: ['About', 'Blog', 'Careers', 'Press', 'Contact'],
  Resources: ['Documentation', 'Help Center', 'Community', 'Status', 'Changelog'],
  Legal: ['Privacy', 'Terms', 'Cookies', 'Licenses'],
}

const socialLinks = [
  { icon: IoLogoTwitter, href: '#', label: 'Twitter' },
  { icon: IoLogoInstagram, href: '#', label: 'Instagram' },
  { icon: IoLogoLinkedin, href: '#', label: 'LinkedIn' },
  { icon: IoLogoGithub, href: '#', label: 'GitHub' },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-16">
          {/* Brand */}
          <div className="col-span-2">
            <a href="#" className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <IoQrCodeOutline className="text-white text-xl" />
              </div>
              <span className="text-xl font-display font-bold text-white">
                Menu<span className="gradient-text">Kit</span>
              </span>
            </a>
            <p className="text-sm text-subtext leading-relaxed mb-6 max-w-xs">
              Transform your restaurant menu into a beautiful digital experience. QR-powered, instant updates, zero hassle.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-subtext hover:text-primary hover:bg-primary/10 transition-all duration-200"
                >
                  <social.icon className="text-lg" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-display font-semibold text-white mb-4">{category}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-subtext hover:text-white transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-subtext">
            © {new Date().getFullYear()} MenuKit. A product by <a href="https://debuggers.co.in" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors font-medium">Debuggers</a>. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-subtext hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-subtext hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
