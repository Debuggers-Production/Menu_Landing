import { useEffect, useRef } from 'react'
import { APP_CONFIG } from '../config'
import { motion, useScroll, useTransform } from 'framer-motion'
import { gsap } from 'gsap'
import { HiOutlinePlay } from 'react-icons/hi'
import { IoQrCodeOutline, IoRestaurantOutline, IoFastFoodOutline } from 'react-icons/io5'
import { BiFoodMenu } from 'react-icons/bi'
import { MdOutlineDeliveryDining } from 'react-icons/md'

const floatingCards = [
  { icon: IoQrCodeOutline, label: 'QR Menu', color: 'from-primary to-secondary', x: '8%', y: '20%', delay: 0 },
  { icon: IoRestaurantOutline, label: 'Dine In', color: 'from-secondary to-accent', x: '85%', y: '25%', delay: 0.3 },
  { icon: IoFastFoodOutline, label: 'Burger', color: 'from-accent to-primary', x: '12%', y: '70%', delay: 0.6 },
  { icon: BiFoodMenu, label: 'Menu', color: 'from-primary to-accent', x: '88%', y: '65%', delay: 0.9 },
  { icon: MdOutlineDeliveryDining, label: 'Delivery', color: 'from-secondary to-primary', x: '75%', y: '85%', delay: 1.2 },
]

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const headlineRef = useRef<HTMLHeadingElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.85])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150])

  useEffect(() => {
    if (!headlineRef.current) return

    // Animate headline words
    const words = headlineRef.current.querySelectorAll('.word')
    gsap.fromTo(
      words,
      { y: 80, opacity: 0, rotateX: -40 },
      {
        y: 0,
        opacity: 1,
        rotateX: 0,
        duration: 1,
        stagger: 0.08,
        ease: 'power3.out',
        delay: 0.3,
      }
    )
  }, [])

  return (
    <motion.div
      ref={containerRef}
      style={{ scale: heroScale, opacity: heroOpacity, y: heroY }}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Mesh Background */}
      <div className="absolute inset-0 mesh-gradient" />
      <div className="absolute inset-0 bg-grid opacity-40" />

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[120px] animate-orb1" />
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-secondary/8 blur-[100px] animate-orb2" />

      {/* Floating Cards */}
      <div className="absolute inset-0 hidden lg:block">
        {floatingCards.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: card.delay + 0.8, duration: 0.6, ease: 'backOut' }}
            className="absolute"
            style={{ left: card.x, top: card.y }}
          >
            <div
              className="glass-card p-4 flex items-center gap-3 cursor-default hover:bg-white/8 transition-colors animate-float-card"
              style={{ animationDuration: `${5 + i * 0.5}s` }}
            >
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center`}>
                <card.icon className="text-slate-900 text-lg" />
              </div>
              <span className="text-sm font-medium text-slate-900/80">{card.label}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center pt-24">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-sm text-primary font-medium">Now in Public Beta</span>
        </motion.div>

        {/* Headline */}
        <h1
          ref={headlineRef}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold leading-[0.95] tracking-tight mb-8"
          style={{ perspective: '800px' }}
        >
          <span className="word inline-block">Turn </span>
          <span className="word inline-block">Every </span>
          <span className="word inline-block">Table </span>
          <br className="hidden sm:block" />
          <span className="word inline-block">Into </span>
          <span className="word inline-block">A </span>
          <span className="word inline-block gradient-text">Digital </span>
          <span className="word inline-block gradient-text">Menu </span>
          <br className="hidden sm:block" />
          <span className="word inline-block gradient-text">Experience</span>
        </h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Create beautiful QR-powered restaurant menus in minutes.{' '}
          <span className="text-slate-900/70">No printing. No app downloads.</span>{' '}
          Update your menu anytime.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href={APP_CONFIG.MAIN_APP_URL} className="shimmer-btn px-8 py-4 text-lg font-semibold min-w-[200px] inline-block text-center">
            Start Free
          </a>
          <a href={`${APP_CONFIG.MAIN_APP_URL}/discover`} className="outline-btn px-8 py-4 text-lg font-semibold min-w-[200px] flex items-center justify-center gap-2" style={{ borderColor: 'rgba(249,115,22,0.5)', color: '#f97316' }}>
            <IoRestaurantOutline className="text-xl" />
            Explore Shops
          </a>
          <button className="outline-btn px-8 py-4 text-lg font-semibold min-w-[200px] flex items-center justify-center gap-2">
            <HiOutlinePlay className="text-xl" />
            Watch Demo
          </button>
        </motion.div>

        {/* Dashboard Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 1.8, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 relative max-w-4xl mx-auto"
        >
          <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-secondary/10 to-primary/20 rounded-3xl blur-2xl" />
          <div className="relative glass-card p-2 orange-glow">
            <div className="bg-[#111111] rounded-2xl overflow-hidden">
              {/* Mockup Header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="px-4 py-1 rounded-lg bg-white/5 text-xs text-slate-500">
                    menukit.debuggers.co.in
                  </div>
                </div>
              </div>

              {/* Mockup Body */}
              <div className="p-6 min-h-[300px] md:min-h-[400px]">
                {/* Top Bar */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="h-4 w-40 bg-white/10 rounded mb-2" />
                    <div className="h-3 w-24 bg-white/5 rounded" />
                  </div>
                  <div className="flex gap-2">
                    <div className="px-3 py-1.5 rounded-lg bg-primary/20 text-primary text-xs font-medium">
                      + Add Item
                    </div>
                    <div className="px-3 py-1.5 rounded-lg bg-white/5 text-xs text-slate-500">
                      Preview
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                  {[
                    { label: 'Total Scans', value: '2,847', trend: '+12%' },
                    { label: 'Menu Items', value: '48', trend: '+3' },
                    { label: 'Active QRs', value: '12', trend: '100%' },
                    { label: 'Avg. Time', value: '3.2m', trend: '+8%' },
                  ].map((stat, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 2.2 + i * 0.1 }}
                      className="p-3 rounded-xl bg-white/[0.03] border border-white/5"
                    >
                      <p className="text-[10px] text-slate-500 mb-1">{stat.label}</p>
                      <p className="text-lg font-semibold text-slate-900">{stat.value}</p>
                      <p className="text-[10px] text-green-400">{stat.trend}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Menu Items */}
                <div className="space-y-2">
                  {['🍕 Margherita Pizza', '🍔 Classic Burger', '🥗 Caesar Salad'].map(
                    (item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 2.6 + i * 0.1 }}
                        className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/5"
                      >
                        <span className="text-sm text-slate-900/80">{item}</span>
                        <div className="flex items-center gap-3">
                          <span className="text-sm text-primary font-medium">$12.99</span>
                          <div className="w-8 h-4 rounded-full bg-primary/30 relative">
                            <div className="absolute right-0.5 top-0.5 w-3 h-3 rounded-full bg-primary" />
                          </div>
                        </div>
                      </motion.div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
          className="mt-16 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-slate-500">Scroll to explore</span>
          <div
            className="w-6 h-10 rounded-full border border-white/20 flex items-start justify-center pt-2 animate-[scroll-bounce_1.5s_infinite]"
          >
            <div className="w-1 h-2 rounded-full bg-primary" />
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
