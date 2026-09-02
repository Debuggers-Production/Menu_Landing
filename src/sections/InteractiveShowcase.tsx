import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { IoQrCodeOutline, IoSearchOutline, IoRestaurantOutline, IoHandLeftOutline } from 'react-icons/io5'
import SectionWrapper from '../components/SectionWrapper'

const categories = [
  { name: 'All Menu (17)' },
  { name: 'Starters & Snacks' },
  { name: 'Main Course' },
  { name: 'Breads' },
  { name: 'Beverages' },
]

const menuItems = [
  { name: 'Chicken 65', price: '₹160.00', category: 'Starters', veg: false, isBestseller: true, desc: 'Crispy spicy fried chicken with curry leaves', img: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=300&auto=format&fit=crop&q=80' },
  { name: 'Paneer Tikka', price: '₹140.00', category: 'Starters', veg: true, isBestseller: false, desc: 'Charcoal grilled cottage cheese with aromatic spices', img: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=300&auto=format&fit=crop&q=80' },
  { name: 'Chicken Biryani', price: '₹190.00', category: 'Main Course', veg: false, isBestseller: true, desc: 'Fragrant basmati rice layered with tender spiced chicken', img: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=300&auto=format&fit=crop&q=80' },
  { name: 'Butter Naan', price: '₹45.00', category: 'Breads', veg: true, isBestseller: false, desc: 'Fluffy tandoor-baked flatbread glazed with melted butter', img: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=300&auto=format&fit=crop&q=80' },
  { name: 'Filter Coffee', price: '₹35.00', category: 'Beverages', veg: true, isBestseller: false, desc: 'Authentic frothy South Indian decoction coffee', img: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=300&auto=format&fit=crop&q=80' },
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
            See how your restaurant menu transforms into a high-converting digital experience.
          </motion.p>
        </div>

        {/* Menu Mockup */}
        <motion.div style={{ y: y1, scale }} className="max-w-lg mx-auto">
          <div className="glass-card overflow-hidden orange-glow rounded-[32px] border border-slate-200 shadow-2xl">
            {/* Restaurant Banner */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="relative h-44 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 overflow-hidden text-white p-6 flex flex-col justify-between"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-black uppercase tracking-wider bg-white/20 px-2.5 py-1 rounded-full backdrop-blur-sm">
                  ⚡ Takeaway & Dine-In Mode
                </span>
                <span className="text-[10px] bg-emerald-500 font-bold px-2.5 py-0.5 rounded-full shadow-xs">
                  Open Now
                </span>
              </div>
              <div className="flex items-end justify-between">
                <div>
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="text-2xl font-display font-black text-white flex items-center gap-2"
                  >
                    <IoRestaurantOutline className="text-white" /> Siva Hotel
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="text-xs text-orange-100 font-medium"
                  >
                    Authentic Multicuisine & South Indian Delicacies
                  </motion.p>
                </div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, type: 'spring' }}
                  className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 text-white text-xl shadow-md"
                >
                  <IoQrCodeOutline />
                </motion.div>
              </div>
            </motion.div>

            {/* Welcome Message */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="px-6 py-4 bg-primary/5 border-b border-black/5 flex items-center gap-2"
            >
              <IoHandLeftOutline className="text-primary text-lg shrink-0" />
              <p className="text-sm text-primary">Welcome! Explore our menu and enjoy your meal.</p>
            </motion.div>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="px-6 py-4"
            >
              <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-black/5 border border-black/10">
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
              className="px-6 pb-4 flex gap-2 overflow-x-auto scrollbar-none"
            >
              {categories.map((cat, i) => (
                <motion.button
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 + i * 0.05 }}
                  className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                    i === 0
                      ? 'bg-primary text-white shadow-xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {cat.name}
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
                  className="flex items-center justify-between p-3 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-md hover:border-primary/40 transition-all group"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <img 
                      src={item.img} 
                      alt={item.name} 
                      className="w-14 h-14 rounded-xl object-cover shrink-0 shadow-xs group-hover:scale-105 transition-transform" 
                    />
                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        {item.isBestseller && (
                          <span className="text-[9px] font-black uppercase text-orange-600 bg-orange-50 px-1.5 py-0.5 rounded">
                            ★ Bestseller
                          </span>
                        )}
                        <span className={`w-3 h-3 rounded-sm border ${item.veg ? 'border-emerald-600 bg-white' : 'border-red-600 bg-white'} flex items-center justify-center shrink-0`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${item.veg ? 'bg-emerald-600' : 'bg-red-600'}`} />
                        </span>
                      </div>
                      <p className="text-xs font-bold text-slate-900 group-hover:text-primary transition-colors truncate mt-0.5">
                        {item.name}
                      </p>
                      <p className="text-[10px] text-slate-400 truncate">{item.desc}</p>
                    </div>
                  </div>
                  <div className="text-right shrink-0 pl-2">
                    <span className="block text-xs font-black text-primary">{item.price}</span>
                    <button className="mt-1 px-2.5 py-1 rounded-lg bg-primary/10 text-primary text-[10px] font-bold group-hover:bg-primary group-hover:text-white transition-colors shadow-xs">
                      + Add
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
