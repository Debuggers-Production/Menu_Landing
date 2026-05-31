import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { IoCheckmarkCircle } from 'react-icons/io5'
import SectionWrapper from '../components/SectionWrapper'

export default function Pricing() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <SectionWrapper id="pricing" className="bg-grid">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6"
          >
            Special Offer
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6"
          >
            Don't Pay Like <span className="text-red-500 line-through decoration-red-500/50">Others</span>
            <br />
            <span className="gradient-text">It's Completely Free!</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-subtext max-w-2xl mx-auto"
          >
            Other platforms charge hundreds of dollars for a digital menu. We are giving it away for free to early adopters. Grab it now before we introduce paid plans!
          </motion.p>
        </div>

        {/* Pricing Cards */}
        <div ref={ref} className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-center">
          
          {/* Competitor / Old Way */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-300"
          >
            <h3 className="text-xl font-display font-bold text-subtext mb-2">Other Solutions</h3>
            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-4xl font-bold text-white/50">$99</span>
              <span className="text-subtext">/month</span>
            </div>
            <ul className="space-y-4 mb-8">
              {['Limited menu items', 'Basic templates', 'Setup fees included', 'Hidden charges'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-subtext">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500/50" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="w-full py-3 rounded-xl border border-white/10 text-center text-subtext cursor-not-allowed">
              Too Expensive
            </div>
          </motion.div>

          {/* MenuKit Free Tier */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8 relative overflow-hidden animated-border orange-glow scale-105"
          >
            <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold uppercase tracking-wider animate-pulse">
              Limited Time
            </div>
            <h3 className="text-2xl font-display font-bold text-primary mb-2">MenuKit Early Access</h3>
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-5xl font-bold text-white">$0</span>
              <span className="text-subtext">forever</span>
            </div>
            <p className="text-sm text-primary mb-6 font-medium">Grab it now before prices change!</p>
            
            <ul className="space-y-4 mb-8">
              {[
                'Unlimited menu items',
                'All premium templates',
                'Instant updates',
                'Analytics dashboard',
                'Zero setup fees'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-white">
                  <IoCheckmarkCircle className="text-primary text-xl flex-shrink-0" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <a href="https://menukit.debuggers.co.in" className="shimmer-btn w-full py-4 rounded-xl text-center font-bold text-lg block">
              Claim Your Free Account Now
            </a>
          </motion.div>

        </div>
      </div>
    </SectionWrapper>
  )
}
