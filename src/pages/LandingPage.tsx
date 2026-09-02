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
import LiveDemo from '../sections/LiveDemo'
import Benefits from '../sections/Benefits'
// import Testimonials from '../sections/Testimonials'
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
      duration: 0.8,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.1,
      touchMultiplier: 1.5,
    })
    lenisRef.current = lenis

    lenis.on('scroll', ScrollTrigger.update)

    const updateTicker = (time: number) => {
      lenis.raf(time * 1000)
    }

    gsap.ticker.add(updateTicker)
    gsap.ticker.lagSmoothing(500, 33)

    return () => {
      gsap.ticker.remove(updateTicker)
      lenis.destroy()
    }
  }, [])

  return (
    <div className="relative min-h-screen bg-whiteg overflow-hidden">
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
        <LiveDemo />
        <Benefits />
        {/* <Testimonials /> */}
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
