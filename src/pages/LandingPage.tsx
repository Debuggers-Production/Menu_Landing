import { useEffect, useRef } from 'react'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Helmet } from 'react-helmet-async'
import Navbar from '../components/Navbar'
import Hero from '../sections/Hero'
import Problem from '../sections/Problem'
import HowItWorks from '../sections/HowItWorks'
import Features from '../sections/Features'
import InteractiveShowcase from '../sections/InteractiveShowcase'
import LiveDemo from '../sections/LiveDemo'
import Benefits from '../sections/Benefits'
import Testimonials from '../sections/Testimonials'
import Pricing from '../sections/Pricing'
import FAQ from '../sections/FAQ'
import FinalCTA from '../sections/FinalCTA'
import Footer from '../sections/Footer'
import MouseSpotlight from '../components/MouseSpotlight'

gsap.registerPlugin(ScrollTrigger)

export function LandingPage() {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })
    lenisRef.current = lenis

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    // Sync Lenis with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update)
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })
    gsap.ticker.lagSmoothing(0)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <div className="relative min-h-screen bg-bg overflow-hidden">
      <Helmet>
        <title>MenuKit | Interactive Digital Menus for Modern Restaurants</title>
        <meta name="description" content="MenuKit helps restaurants increase sales and customer retention with beautiful digital menus, QR ordering, and powerful analytics." />
      </Helmet>
      <MouseSpotlight />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Pricing />
        <Problem />
        <HowItWorks />
        <InteractiveShowcase />
        <LiveDemo />
        <Benefits />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
