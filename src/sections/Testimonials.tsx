import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { IoStarSharp, IoPersonOutline, IoRestaurantOutline, IoCafeOutline, IoFastFoodOutline } from 'react-icons/io5'
import SectionWrapper from '../components/SectionWrapper'

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Owner, Spice Garden',
    text: 'Menukit has completely transformed how we serve our customers. No more reprinting menus every time we change a price. Our customers love the modern experience!',
    rating: 5,
    avatar: <IoRestaurantOutline />,
  },
  {
    name: 'Rahul Mehta',
    role: 'Manager, The Curry House',
    text: "We saved over ₹50,000 in the first year alone by switching to QR menus. The setup took less than 10 minutes and our staff absolutely loves the analytics dashboard.",
    rating: 5,
    avatar: <IoPersonOutline />,
  },
  {
    name: 'Anita Patel',
    role: 'Owner, Green Bowl Café',
    text: "The veg/non-veg filter is a game changer for our diverse menu. Customers can instantly find what they're looking for. Best investment we've made this year!",
    rating: 5,
    avatar: <IoCafeOutline />,
  },
  {
    name: 'Vikram Singh',
    role: 'Director, Royal Feast',
    text: 'The themes are stunning and our restaurant now feels truly premium. Guests often compliment the beautiful menu design. Highly recommend to any restaurant owner!',
    rating: 5,
    avatar: <IoPersonOutline />,
  },
  {
    name: 'Kavitha Nair',
    role: 'Founder, Chai & More',
    text: "Being able to update our seasonal specials instantly without any printing costs is incredible. Menukit pays for itself within the first month!",
    rating: 5,
    avatar: <IoFastFoodOutline />,
  },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <SectionWrapper className="bg-grid">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6"
          >
            Testimonials
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6"
          >
            Loved by{' '}
            <span className="gradient-text">Restaurants</span>
          </motion.h2>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-3xl mx-auto">
          <div className="glass-card p-8 md:p-12 relative overflow-hidden min-h-[280px]">
            {/* Background glow */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full blur-[80px]" />

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: testimonials[active].rating }).map((_, i) => (
                    <IoStarSharp key={i} className="text-primary text-lg" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-lg md:text-xl text-slate-900/90 leading-relaxed mb-8 font-light italic">
                  "{testimonials[active].text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-2xl">
                    {testimonials[active].avatar}
                  </div>
                  <div>
                    <p className="font-display font-semibold text-slate-900">{testimonials[active].name}</p>
                    <p className="text-sm text-slate-500">{testimonials[active].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`transition-all duration-300 rounded-full ${
                  i === active
                    ? 'w-8 h-2 bg-primary'
                    : 'w-2 h-2 bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
