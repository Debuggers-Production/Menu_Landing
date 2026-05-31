import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { IoCloseCircle, IoCheckmarkCircle } from 'react-icons/io5'
import { HiOutlinePrinter, HiOutlineCurrencyDollar, HiOutlineClock, HiOutlineTrash } from 'react-icons/hi'
import { MdOutlineQrCode2, MdOutlineUpdate, MdOutlineSentimentSatisfiedAlt } from 'react-icons/md'
import SectionWrapper from '../components/SectionWrapper'

const oldMethods = [
  { icon: HiOutlinePrinter, label: 'Printing Menus', desc: 'Expensive reprints every time prices change' },
  { icon: HiOutlineCurrencyDollar, label: 'Expensive Updates', desc: 'Hundreds spent on design and printing' },
  { icon: HiOutlineClock, label: 'Outdated Pricing', desc: 'Old prices confuse customers' },
  { icon: HiOutlineTrash, label: 'Wasted Paper', desc: 'Not eco-friendly at all' },
]

const newMethods = [
  { icon: MdOutlineQrCode2, label: 'QR Menus', desc: 'Instant access from any smartphone' },
  { icon: MdOutlineUpdate, label: 'Instant Updates', desc: 'Change prices and items in seconds' },
  { icon: MdOutlineSentimentSatisfiedAlt, label: 'Better Experience', desc: 'Modern, searchable, beautiful menus' },
]

export default function Problem() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <SectionWrapper id="problem" className="bg-grid">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium mb-6"
          >
            The Problem
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6"
          >
            Paper Menus Are <span className="gradient-text">Broken</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-subtext max-w-2xl mx-auto"
          >
            Restaurants waste thousands on printed menus that become outdated the moment prices change.
          </motion.p>
        </div>

        {/* Comparison Grid */}
        <div ref={ref} className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Old Method */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="glass-card p-8 relative overflow-hidden h-full">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500/50 to-red-500/0" />
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center">
                  <IoCloseCircle className="text-red-400 text-xl" />
                </div>
                <h3 className="text-xl font-display font-semibold text-red-400">Old Method</h3>
              </div>
              <div className="space-y-4">
                {oldMethods.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                    className="flex items-start gap-4 p-4 rounded-xl bg-red-500/[0.03] border border-red-500/10 hover:border-red-500/20 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <item.icon className="text-red-400 text-lg" />
                    </div>
                    <div>
                      <p className="font-medium text-white mb-1">{item.label}</p>
                      <p className="text-sm text-subtext">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* New Method */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            <div className="glass-card p-8 relative overflow-hidden h-full animated-border">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/50 to-primary/0" />
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <IoCheckmarkCircle className="text-primary text-xl" />
                </div>
                <h3 className="text-xl font-display font-semibold text-primary">MenuKit Way</h3>
              </div>
              <div className="space-y-4">
                {newMethods.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                    className="flex items-start gap-4 p-4 rounded-xl bg-primary/[0.03] border border-primary/10 hover:border-primary/20 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <item.icon className="text-primary text-lg" />
                    </div>
                    <div>
                      <p className="font-medium text-white mb-1">{item.label}</p>
                      <p className="text-sm text-subtext">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Result */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1, duration: 0.6 }}
                className="mt-6 p-4 rounded-xl bg-gradient-to-r from-primary/10 to-secondary/5 border border-primary/15"
              >
                <p className="text-sm text-primary font-medium">
                  ✨ Save 90% on menu costs. Update instantly. Delight customers.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  )
}
