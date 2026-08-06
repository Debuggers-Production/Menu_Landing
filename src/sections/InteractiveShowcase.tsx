import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { IoQrCodeOutline, IoSearchOutline } from 'react-icons/io5'
import SectionWrapper from '../components/SectionWrapper'

const categories = ['🍕 Pizza', '🍔 Burgers', '🥗 Salads', '🍝 Pasta', '🍰 Desserts', '🥤 Drinks']

const menuItems = [
  { name: 'Margherita Pizza', price: '$12.99', category: 'Pizza', veg: true, emoji: '🍕' },
  { name: 'Classic Burger', price: '$14.99', category: 'Burgers', veg: false, emoji: '🍔' },
  { name: 'Caesar Salad', price: '$9.99', category: 'Salads', veg: true, emoji: '🥗' },
  { name: 'Penne Arrabbiata', price: '$13.99', category: 'Pasta', veg: true, emoji: '🍝' },
  { name: 'Tiramisu', price: '$8.99', category: 'Desserts', veg: true, emoji: '🍰' },
  { name: 'BBQ Chicken Wings', price: '$11.99', category: 'Burgers', veg: false, emoji: '🍗' },
]

export default function InteractiveShowcase() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.95])

  return (
    <SectionWrapper className="overflow-visible">
      <div ref={containerRef} className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6"
          >
            Showcase
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6"
          >
            Watch Your Menu{' '}
            <span className="gradient-text">Come Alive</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-500 max-w-2xl mx-auto"
          >
            See how your restaurant menu transforms into a beautiful digital experience.
          </motion.p>
        </div>

        {/* Menu Mockup */}
        <motion.div style={{ y: y1, scale }} className="max-w-lg mx-auto">
          <div className="glass-card overflow-hidden orange-glow">
            {/* Restaurant Banner */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="relative h-48 bg-gradient-to-br from-primary/30 via-secondary/20 to-bg overflow-hidden"
            >
              <div className="absolute inset-0 bg-grid opacity-20" />
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[rgba(255,255,255,0.03)] to-transparent" />
              <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between">
                <div>
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="text-2xl font-display font-bold text-slate-900"
                  >
                    🍽️ Bella Cucina
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="text-sm text-slate-900/60"
                  >
                    Authentic Italian Restaurant
                  </motion.p>
                </div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, type: 'spring' }}
                  className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/10"
                >
                  <IoQrCodeOutline className="text-slate-900 text-2xl" />
                </motion.div>
              </div>
            </motion.div>

            {/* Welcome Message */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="px-6 py-4 bg-primary/5 border-b border-white/5"
            >
              <p className="text-sm text-primary">👋 Welcome! Explore our menu and enjoy your meal.</p>
            </motion.div>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="px-6 py-4"
            >
              <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/10">
                <IoSearchOutline className="text-slate-500" />
                <span className="text-sm text-slate-500">Search for dishes...</span>
              </div>
            </motion.div>

            {/* Categories */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="px-6 pb-4 flex gap-2 overflow-x-auto scrollbar-hide"
            >
              {categories.map((cat, i) => (
                <motion.button
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 + i * 0.05 }}
                  className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-all ${
                    i === 0
                      ? 'bg-primary text-slate-900 font-medium'
                      : 'bg-white/5 text-slate-500 hover:bg-white/10'
                  }`}
                >
                  {cat}
                </motion.button>
              ))}
            </motion.div>

            {/* Menu Items */}
            <div className="px-6 pb-6 space-y-3">
              {menuItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.9 + i * 0.08 }}
                  className="flex items-center justify-between p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-white/10 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{item.emoji}</span>
                    <div>
                      <p className="text-sm font-medium text-slate-900 group-hover:text-primary transition-colors">
                        {item.name}
                      </p>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className={`w-3 h-3 rounded-sm ${item.veg ? 'border-2 border-green-500' : 'border-2 border-red-500'}`}>
                          <span className={`block w-1.5 h-1.5 rounded-full mx-auto mt-[1px] ${item.veg ? 'bg-green-500' : 'bg-red-500'}`} />
                        </span>
                        <span className="text-xs text-slate-500">{item.category}</span>
                      </div>
                    </div>
                  </div>
                  <span className="text-sm font-semibold text-primary">{item.price}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
