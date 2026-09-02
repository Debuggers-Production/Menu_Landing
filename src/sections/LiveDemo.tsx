import { motion } from 'framer-motion'
import { IoCheckmarkCircle } from 'react-icons/io5'
import SectionWrapper from '../components/SectionWrapper'
import heroCustomerMobile from '../assets/hero-customer-mobile.jpg'

export default function LiveDemo() {
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
              Customer Experience
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-display font-bold mb-6"
            >
              Instant QR{' '}
              <span className="gradient-text">Customer View</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-500 mb-8 leading-relaxed"
            >
              This is exactly what your guests experience when scanning your QR code. Fast, intuitive browsing, category filters, allergen and dietary labels with frictionless ordering.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="space-y-4"
            >
              {[
                'Zero app downloads — loads instantly in any mobile browser',
                'Organized by categories with search and dietary badges',
                'High-converting layout with real-time takeaway and dine-in modes',
                'Instant item customisations and multi-currency pricing',
              ].map((tip, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <IoCheckmarkCircle className="text-base" />
                  </div>
                  <span className="text-slate-700 text-sm font-medium">{tip}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Phone Mockup with Authentic Screenshot */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="w-[300px] sm:w-[330px] rounded-[44px] bg-slate-900 p-3 shadow-2xl border-4 border-slate-200">
              <div className="bg-[#F8FAFC] rounded-[34px] overflow-hidden text-left flex flex-col shadow-inner aspect-[9/19]">
                <img 
                  src={heroCustomerMobile} 
                  alt="MenuKit Public Mobile Menu View" 
                  className="w-full h-full object-cover block"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  )
}
