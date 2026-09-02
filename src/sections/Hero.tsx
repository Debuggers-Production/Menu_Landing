import { useEffect, useRef } from 'react'
import { APP_CONFIG } from '../config'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { HiOutlinePlay } from 'react-icons/hi'
import { IoQrCodeOutline, IoRestaurantOutline, IoFastFoodOutline } from 'react-icons/io5'
import { BiFoodMenu } from 'react-icons/bi'
import { MdOutlineDeliveryDining } from 'react-icons/md'
import heroMerchantDesktop from '../assets/hero-merchant-desktop.png'
import heroCustomerMobile from '../assets/hero-customer-mobile.jpg'

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

  useEffect(() => {
    if (!headlineRef.current) return

    // Animate headline words
    const words = headlineRef.current.querySelectorAll('.word')
    gsap.fromTo(
      words,
      { y: 60, opacity: 0, rotateX: -30 },
      {
        y: 0,
        opacity: 1,
        rotateX: 0,
        duration: 0.8,
        stagger: 0.06,
        ease: 'power3.out',
        delay: 0.2,
      }
    )
  }, [])

  return (
    <div
      ref={containerRef}
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
              className="glass-card p-4 flex items-center gap-3 cursor-default hover:bg-white/40 transition-colors animate-float-card"
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

        {/* Authentic Multi-Device Showcase (Direct Desktop & Mobile Screenshots) */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 1.8, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 relative max-w-6xl mx-auto"
        >
          {/* Ambient Glow */}
          <div className="absolute -inset-6 bg-gradient-to-r from-primary/30 via-orange-500/20 to-primary/30 rounded-[40px] blur-3xl opacity-70 pointer-events-none" />

          <div className="relative">
            {/* 1. DESKTOP MERCHANT DASHBOARD IMAGE CONTAINER */}
            <div className="bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 text-left">
              {/* Browser Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-100/90 border-b border-slate-200">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                </div>
                <div className="px-4 py-1 rounded-full bg-white border border-slate-200 text-xs font-medium text-slate-500 flex items-center gap-2 shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  menukit.debuggerstechnologies.com/dashboard
                </div>
                <div className="w-12" />
              </div>

              {/* Direct Desktop Portal Image */}
              <div className="w-full bg-[#F8FAFC] overflow-hidden">
                <img 
                  src={heroMerchantDesktop} 
                  alt="MenuKit Merchant Portal Dashboard" 
                  className="w-full h-auto object-cover block"
                />
              </div>
            </div>

            {/* 2. FLOATING REAL MOBILE PUBLIC MENU VIEW (Customer Experience) */}
            <motion.div
              initial={{ opacity: 0, x: 40, y: 30 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 2.2, duration: 0.8 }}
              className="absolute -bottom-8 -right-2 sm:-right-4 md:right-6 w-[260px] sm:w-[290px] md:w-[320px] rounded-[36px] bg-slate-900 p-2.5 shadow-2xl border-4 border-white hidden sm:block z-30"
            >
              <div className="bg-[#F8FAFC] rounded-[28px] overflow-hidden text-left flex flex-col shadow-inner aspect-[9/19]">
                <img 
                  src={heroCustomerMobile} 
                  alt="MenuKit Public Mobile Menu View" 
                  className="w-full h-full object-cover block"
                />
              </div>
            </motion.div>
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
            className="w-6 h-10 rounded-full border border-black/20 flex items-start justify-center pt-2 animate-[scroll-bounce_1.5s_infinite]"
          >
            <div className="w-1 h-2 rounded-full bg-primary" />
          </div>
        </motion.div>
      </div>
    </div>
  )
}

