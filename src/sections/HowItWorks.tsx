import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { IoStorefrontOutline, IoQrCodeOutline } from 'react-icons/io5'
import { BiFoodMenu } from 'react-icons/bi'
import { MdOutlineColorLens, MdOutlinePhoneIphone, MdOutlineRocketLaunch } from 'react-icons/md'
import SectionWrapper from '../components/SectionWrapper'

const steps = [
  { icon: IoStorefrontOutline, title: 'Create Shop', desc: 'Set up your restaurant profile in seconds', color: 'from-primary to-secondary' },
  { icon: BiFoodMenu, title: 'Add Menu', desc: 'Add your dishes, prices, and categories', color: 'from-secondary to-accent' },
  { icon: MdOutlineColorLens, title: 'Customize Design', desc: 'Choose themes and branding that match your vibe', color: 'from-accent to-primary' },
  { icon: IoQrCodeOutline, title: 'Generate QR', desc: 'Get a unique QR code for your restaurant', color: 'from-primary to-accent' },
  { icon: MdOutlinePhoneIphone, title: 'Customers Scan', desc: 'Guests scan the QR code at their table', color: 'from-secondary to-primary' },
  { icon: MdOutlineRocketLaunch, title: 'Menu Opens Instantly', desc: 'Beautiful digital menu loads in under 2 seconds', color: 'from-accent to-secondary' },
]

export default function HowItWorks() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <SectionWrapper id="how-it-works">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6"
          >
            How It Works
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6"
          >
            From Setup to{' '}
            <span className="gradient-text">Serving</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-subtext max-w-2xl mx-auto"
          >
            Get your digital menu running in just 6 simple steps. It takes less than 5 minutes.
          </motion.p>
        </div>

        {/* Timeline */}
        <div ref={ref} className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-white/5 md:-translate-x-px">
            <motion.div
              initial={{ height: '0%' }}
              animate={isInView ? { height: '100%' } : {}}
              transition={{ duration: 2, ease: 'easeOut' }}
              className="w-full bg-gradient-to-b from-primary via-secondary to-accent"
            />
          </div>

          {/* Steps */}
          <div className="space-y-12 md:space-y-16">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className={`relative flex items-start gap-6 md:gap-12 ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Step Number */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}
                    style={{ boxShadow: '0 8px 30px rgba(255, 107, 0, 0.2)' }}
                  >
                    <step.icon className="text-white text-2xl" />
                  </motion.div>
                </div>

                {/* Content */}
                <div className={`ml-28 md:ml-0 md:w-[calc(50%-60px)] ${i % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'}`}>
                  <div className="glass-card glass-card-hover p-6">
                    <div className="flex items-center gap-2 mb-2 md:justify-start">
                      <span className="text-xs text-primary font-semibold tracking-wider uppercase">Step {i + 1}</span>
                    </div>
                    <h3 className="text-xl font-display font-semibold text-white mb-2">{step.title}</h3>
                    <p className="text-sm text-subtext">{step.desc}</p>
                  </div>
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden md:block md:w-[calc(50%-60px)]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
