import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionWrapper from '../components/SectionWrapper'

interface CounterProps {
  target: number
  suffix: string
  label: string
  prefix?: string
  delay?: number
}

function AnimatedCounter({ target, suffix, label, prefix = '', delay = 0 }: CounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return

    const timer = setTimeout(() => {
      let start = 0
      const duration = 2000
      const startTime = Date.now()

      const animate = () => {
        const elapsed = Date.now() - startTime
        const progress = Math.min(elapsed / duration, 1)
        // Ease out cubic
        const eased = 1 - Math.pow(1 - progress, 3)
        const current = Math.floor(eased * target)

        setCount(current)
        if (progress < 1) requestAnimationFrame(animate)
      }

      requestAnimationFrame(animate)
    }, delay)

    return () => clearTimeout(timer)
  }, [isInView, target, delay])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: delay / 1000, duration: 0.6 }}
      className="glass-card glass-card-hover p-8 text-center group"
    >
      <div className="text-5xl md:text-6xl font-display font-bold gradient-text mb-3">
        {prefix}{count}{suffix}
      </div>
      <p className="text-subtext text-sm">{label}</p>
    </motion.div>
  )
}

const metrics = [
  { target: 90, suffix: '%', label: 'Less Printing Costs', prefix: '', delay: 0 },
  { target: 5, suffix: ' Min', label: 'Quick Setup Time', prefix: '', delay: 200 },
  { target: 999, suffix: '+', label: 'Unlimited Menu Changes', prefix: '', delay: 400 },
  { target: 24, suffix: '/7', label: 'Always Available', prefix: '', delay: 600 },
]

export default function Benefits() {
  return (
    <SectionWrapper>
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6"
          >
            Benefits
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6"
          >
            Numbers That{' '}
            <span className="gradient-text">Speak</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-subtext max-w-2xl mx-auto"
          >
            Real impact for real restaurants. See why thousands are making the switch.
          </motion.p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {metrics.map((metric, i) => (
            <AnimatedCounter key={i} {...metric} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
