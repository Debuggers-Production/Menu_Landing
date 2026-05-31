import { useMemo } from 'react'
import { motion } from 'framer-motion'
import SectionWrapper from '../components/SectionWrapper'

function Particle() {
  const style = useMemo(() => ({
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    width: `${3 + Math.random() * 5}px`,
    height: `${3 + Math.random() * 5}px`,
    '--tx': `${(Math.random() - 0.5) * 50}px`,
    '--ty': `${-60 - Math.random() * 80}px`,
    '--duration': `${4 + Math.random() * 4}s`,
    '--delay': `${Math.random() * 4}s`,
  } as React.CSSProperties), [])

  return (
    <div
      className="absolute rounded-full bg-primary/30 animate-particle"
      style={style}
    />
  )
}

export default function FinalCTA() {
  return (
    <SectionWrapper className="relative">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg via-primary/[0.03] to-bg" />

      {/* Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 30 }).map((_, i) => (
          <Particle key={i} />
        ))}
      </div>

      {/* Glowing Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[150px] animate-cta-orb" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 100 }}
            className="w-20 h-20 rounded-3xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-8"
            style={{ boxShadow: '0 20px 60px rgba(255, 107, 0, 0.3)' }}
          >
            <span className="text-3xl">🚀</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold mb-6 leading-tight">
            Ready To Modernize
            <br />
            <span className="gradient-text">Your Restaurant Menu?</span>
          </h2>

          <p className="text-lg md:text-xl text-subtext max-w-2xl mx-auto mb-12 leading-relaxed">
            Join thousands of restaurants already using MenuKit. Set up takes less than 5 minutes and it's completely free to start.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="https://menukit.debuggers.co.in"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="shimmer-btn px-10 py-5 text-lg font-semibold min-w-[220px] inline-block"
            >
              Start Free →
            </motion.a>
            <motion.a
              href="https://menukit.debuggers.co.in"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="outline-btn px-10 py-5 text-lg font-semibold min-w-[220px] inline-block"
            >
              Book a Demo
            </motion.a>
          </div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-subtext"
          >
            <span className="flex items-center gap-2">
              <span className="text-green-400">✓</span> Free forever plan
            </span>
            <span className="flex items-center gap-2">
              <span className="text-green-400">✓</span> No credit card required
            </span>
            <span className="flex items-center gap-2">
              <span className="text-green-400">✓</span> Setup in 5 minutes
            </span>
          </motion.div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
