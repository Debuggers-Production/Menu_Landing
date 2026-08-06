import { motion } from 'framer-motion'
import {
  IoQrCodeOutline,
  IoSearchOutline,
  IoPhonePortraitOutline,
  IoColorPaletteOutline,
  IoLanguageOutline,
  IoMapOutline,
} from 'react-icons/io5'
import {
  MdOutlinePreview,
  MdOutlineUpdate,
  MdOutlineImage,
  MdOutlineWavingHand,
  MdOutlineAnalytics,
  MdOutlineFilterList,
} from 'react-icons/md'
import SectionWrapper from '../components/SectionWrapper'

const features = [
  { icon: IoMapOutline, title: 'Global Store Discovery', desc: 'Allow hungry customers to find your restaurant on an interactive map and explore your best deals.', span: 'md:col-span-4 lg:col-span-2', color: 'from-accent to-secondary' },
  { icon: IoQrCodeOutline, title: 'QR Code Generation', desc: 'Generate unique, scannable QR codes for each table or location instantly.', span: 'md:col-span-2', color: 'from-primary to-secondary' },
  { icon: MdOutlinePreview, title: 'Live Menu Preview', desc: 'See real-time changes as you build your menu.', span: '', color: 'from-secondary to-accent' },
  { icon: MdOutlineUpdate, title: 'Unlimited Updates', desc: 'Change prices, items, and categories anytime.', span: '', color: 'from-accent to-primary' },
  { icon: MdOutlineImage, title: 'Food Image Uploads', desc: 'Beautiful high-res food photography to entice customers.', span: '', color: 'from-primary to-accent' },
  { icon: IoSearchOutline, title: 'Searchable Menus', desc: 'Customers find their favorites instantly with built-in search.', span: '', color: 'from-secondary to-primary' },
  { icon: MdOutlineFilterList, title: 'Veg/Non-Veg Filters', desc: 'One-tap dietary filters for a personalized experience.', span: 'md:col-span-2', color: 'from-accent to-secondary' },
  { icon: MdOutlineWavingHand, title: 'Welcome Messages', desc: 'Greet customers with personalized welcome screens.', span: '', color: 'from-primary to-secondary' },
  { icon: MdOutlineAnalytics, title: 'Analytics Dashboard', desc: 'Track scans, popular items, and customer behavior.', span: 'md:col-span-2', color: 'from-secondary to-accent' },
  { icon: IoPhonePortraitOutline, title: 'Mobile Optimized', desc: 'Perfect experience on every screen size.', span: '', color: 'from-accent to-primary' },
  { icon: IoLanguageOutline, title: 'Multi-Language Support', desc: 'Customers can translate your menu to their native language instantly.', span: 'md:col-span-2', color: 'from-primary to-secondary' },
  { icon: IoColorPaletteOutline, title: 'Beautiful Themes', desc: 'Choose from stunning templates that match your brand.', span: 'md:col-span-2', color: 'from-secondary to-accent' },
]

export default function Features() {
  return (
    <SectionWrapper id="features" className="bg-grid">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6"
          >
            Features
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6"
          >
            Everything You{' '}
            <span className="gradient-text">Need</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-500 max-w-2xl mx-auto"
          >
            Packed with powerful features to make your restaurant menu digital, beautiful, and effortless.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.05, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{
                y: -6,
                transition: { duration: 0.3 },
              }}
              className={`group relative glass-card p-6 cursor-default overflow-hidden ${feature.span}`}
            >
              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className={`absolute -inset-1 bg-gradient-to-br ${feature.color} opacity-[0.06] blur-xl`} />
              </div>

              {/* Animated border on hover */}
              <div className="absolute inset-0 rounded-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className={`absolute inset-0 rounded-[20px] p-px bg-gradient-to-br ${feature.color} opacity-20`} style={{
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                }} />
              </div>

              <div className="relative z-10">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="text-slate-900 text-xl" />
                </div>
                <h3 className="text-lg font-display font-semibold text-slate-900 mb-2 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
