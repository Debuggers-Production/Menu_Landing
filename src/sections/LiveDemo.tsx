import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { IoSearchOutline, IoChevronBack, IoRestaurantOutline } from 'react-icons/io5'
import { MdOutlineLocalPizza, MdOutlineLunchDining, MdOutlineSetMeal, MdOutlineCake, MdOutlineLocalDrink } from 'react-icons/md'
import SectionWrapper from '../components/SectionWrapper'

const demoCategories = [
  { name: 'All', Icon: IoRestaurantOutline },
  { name: 'Pizza', Icon: MdOutlineLocalPizza },
  { name: 'Burgers', Icon: MdOutlineLunchDining },
  { name: 'Salads', Icon: MdOutlineSetMeal },
  { name: 'Drinks', Icon: MdOutlineLocalDrink },
  { name: 'Desserts', Icon: MdOutlineCake },
]

const demoItems: Record<string, Array<{ name: string; price: string; desc: string; veg: boolean; Icon: any }>> = {
  All: [
    { name: 'Margherita Pizza', price: '$12.99', desc: 'Fresh mozzarella, basil, tomato sauce', veg: true, Icon: MdOutlineLocalPizza },
    { name: 'Classic Burger', price: '$14.99', desc: 'Angus beef, lettuce, tomato, cheese', veg: false, Icon: MdOutlineLunchDining },
    { name: 'Greek Salad', price: '$9.99', desc: 'Feta cheese, olives, fresh vegetables', veg: true, Icon: MdOutlineSetMeal },
    { name: 'Iced Latte', price: '$5.99', desc: 'Smooth espresso with cold milk', veg: true, Icon: MdOutlineLocalDrink },
  ],
  Pizza: [
    { name: 'Margherita Pizza', price: '$12.99', desc: 'Fresh mozzarella, basil, tomato sauce', veg: true, Icon: MdOutlineLocalPizza },
    { name: 'Pepperoni Pizza', price: '$14.99', desc: 'Loaded pepperoni with mozzarella', veg: false, Icon: MdOutlineLocalPizza },
    { name: 'Veggie Supreme', price: '$13.99', desc: 'Bell peppers, mushrooms, olives', veg: true, Icon: MdOutlineLocalPizza },
  ],
  Burgers: [
    { name: 'Classic Burger', price: '$14.99', desc: 'Angus beef, lettuce, tomato, cheese', veg: false, Icon: MdOutlineLunchDining },
    { name: 'Veggie Burger', price: '$12.99', desc: 'Plant-based patty with avocado', veg: true, Icon: MdOutlineLunchDining },
    { name: 'BBQ Bacon Burger', price: '$16.99', desc: 'Crispy bacon, BBQ sauce, cheddar', veg: false, Icon: MdOutlineLunchDining },
  ],
  Salads: [
    { name: 'Greek Salad', price: '$9.99', desc: 'Feta cheese, olives, fresh vegetables', veg: true, Icon: MdOutlineSetMeal },
    { name: 'Caesar Salad', price: '$10.99', desc: 'Romaine, parmesan, croutons', veg: true, Icon: MdOutlineSetMeal },
  ],
  Drinks: [
    { name: 'Iced Latte', price: '$5.99', desc: 'Smooth espresso with cold milk', veg: true, Icon: MdOutlineLocalDrink },
    { name: 'Fresh Orange Juice', price: '$4.99', desc: 'Freshly squeezed oranges', veg: true, Icon: MdOutlineLocalDrink },
    { name: 'Mango Smoothie', price: '$6.99', desc: 'Fresh mango with yogurt', veg: true, Icon: MdOutlineLocalDrink },
  ],
  Desserts: [
    { name: 'Tiramisu', price: '$8.99', desc: 'Classic Italian coffee dessert', veg: true, Icon: MdOutlineCake },
    { name: 'Chocolate Lava Cake', price: '$9.99', desc: 'Warm chocolate with vanilla ice cream', veg: true, Icon: MdOutlineCake },
  ],
}

export default function LiveDemo() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedItem, setSelectedItem] = useState<typeof demoItems['All'][0] | null>(null)

  const items = demoItems[activeCategory] || demoItems['All']
  const filteredItems = searchQuery
    ? items.filter((item) => item.name.toLowerCase().includes(searchQuery.toLowerCase()))
    : items

  return (
    <SectionWrapper id="demo" className="bg-grid">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6"
            >
              Interactive Demo
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-display font-bold mb-6"
            >
              Try It{' '}
              <span className="gradient-text">Right Now</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-500 mb-8 leading-relaxed"
            >
              This is exactly how your customers will experience your menu. Click on categories, search for items, and see how smooth and beautiful it feels.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="space-y-4"
            >
              {[
                'Click categories to filter menu items',
                'Search for specific dishes',
                'Tap on items to see details',
              ].map((tip, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary text-xs font-bold">{i + 1}</span>
                  </div>
                  <span className="text-slate-500 text-sm">{tip}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="phone-frame w-[320px]">
              <div className="phone-screen relative">
                {/* Status Bar */}
                <div className="flex items-center justify-between px-6 pt-3 pb-2">
                  <span className="text-[10px] text-slate-900/50 font-medium">9:41</span>
                  <div className="flex items-center gap-1">
                    <div className="w-3.5 h-2 rounded-sm bg-black/50" />
                    <div className="w-4 h-2 rounded-sm border border-black/50 relative">
                      <div className="absolute inset-[1px] right-[2px] bg-green-400 rounded-[1px]" />
                    </div>
                  </div>
                </div>

                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[30px] bg-black rounded-b-2xl" />

                <AnimatePresence mode="wait">
                  {selectedItem ? (
                    /* Item Detail View */
                    <motion.div
                      key="detail"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 0.3 }}
                      className="p-4"
                    >
                      <button
                        onClick={() => setSelectedItem(null)}
                        className="flex items-center gap-1 text-primary text-sm mb-4 hover:opacity-80"
                      >
                        <IoChevronBack /> Back
                      </button>
                      <div className="text-center mb-6">
                        <span className="text-6xl mb-4 flex justify-center text-slate-300"><selectedItem.Icon /></span>
                        <h3 className="text-xl font-display font-bold text-slate-900 mb-1">
                          {selectedItem.name}
                        </h3>
                        <p className="text-sm text-slate-500 mb-3">{selectedItem.desc}</p>
                        <p className="text-2xl font-bold text-primary">{selectedItem.price}</p>
                      </div>
                      <div className="flex items-center justify-center gap-2 mb-4">
                        <span className={`px-2 py-1 rounded text-xs ${selectedItem.veg ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'}`}>
                          {selectedItem.veg ? '🟢 Vegetarian' : '🔴 Non-Veg'}
                        </span>
                      </div>
                      <button className="w-full py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-slate-900 font-medium text-sm">
                        Add to Order
                      </button>
                    </motion.div>
                  ) : (
                    /* Menu View */
                    <motion.div
                      key="menu"
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 50 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Header */}
                      <div className="px-4 py-3 border-b border-black/5">
                        <h3 className="text-lg font-display font-bold text-slate-900 flex items-center gap-1.5"><IoRestaurantOutline className="text-primary"/> Bella Cucina</h3>
                        <p className="text-[10px] text-slate-500">Open now · Italian Restaurant</p>
                      </div>

                      {/* Search */}
                      <div className="px-4 py-3">
                        <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-black/5 border border-black/10">
                          <IoSearchOutline className="text-slate-500 text-sm" />
                          <input
                            type="text"
                            placeholder="Search dishes..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="bg-transparent text-xs text-slate-900 placeholder:text-slate-500 outline-none w-full"
                          />
                        </div>
                      </div>

                      {/* Categories */}
                      <div className="px-4 pb-3 flex gap-1.5 overflow-x-auto scrollbar-hide">
                        {demoCategories.map((cat) => (
                          <button
                            key={cat.name}
                            onClick={() => {
                              setActiveCategory(cat.name)
                              setSearchQuery('')
                            }}
                              className={`px-3 py-1.5 rounded-full text-[11px] whitespace-nowrap transition-all flex items-center gap-1 ${
                                activeCategory === cat.name
                                  ? 'bg-primary text-slate-900 font-medium'
                                  : 'bg-black/5 text-slate-500 hover:bg-black/10'
                              }`}
                            >
                              <cat.Icon className={activeCategory === cat.name ? "text-slate-900" : "text-slate-500"} /> {cat.name}
                            </button>
                        ))}
                      </div>

                      {/* Items */}
                      <div className="px-4 pb-6 space-y-2 max-h-[300px] overflow-y-auto">
                        <AnimatePresence mode="popLayout">
                          {filteredItems.map((item, i) => (
                            <motion.button
                              key={item.name}
                              layout
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, scale: 0.9 }}
                              transition={{ delay: i * 0.05, duration: 0.3 }}
                              onClick={() => setSelectedItem(item)}
                              className="w-full flex items-center gap-3 p-3 rounded-xl bg-black/[0.02] border border-black/5 hover:bg-black/[0.05] transition-all text-left"
                            >
                              <span className="text-2xl text-slate-400 p-2 bg-black/5 rounded-lg border border-black/5"><item.Icon /></span>
                              <div className="flex-1 min-w-0">
                                <p className="text-xs font-medium text-slate-900 truncate">{item.name}</p>
                                <p className="text-[10px] text-slate-500 truncate">{item.desc}</p>
                              </div>
                              <div className="text-right flex-shrink-0">
                                <p className="text-xs font-semibold text-primary">{item.price}</p>
                                <span className={`inline-block w-2 h-2 rounded-full mt-1 ${item.veg ? 'bg-green-400' : 'bg-red-400'}`} />
                              </div>
                            </motion.button>
                          ))}
                        </AnimatePresence>
                        {filteredItems.length === 0 && (
                          <p className="text-center text-xs text-slate-500 py-6">No items found</p>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  )
}
