import { Helmet } from 'react-helmet-async'
import Navbar from '../components/Navbar'
import Footer from '../sections/Footer'
import HowItWorksSection from '../sections/HowItWorks'

export function HowItWorksPage() {
  return (
    <div className="relative min-h-screen bg-slate-50 overflow-hidden font-sans">
      <Helmet>
        <title>How It Works | MenuKit</title>
        <meta name="description" content="Learn how MenuKit transforms your restaurant menu into a beautiful digital experience." />
      </Helmet>
      
      <Navbar />
      
      <main className="pt-24 pb-24">
        <HowItWorksSection />
      </main>

      <Footer />
    </div>
  )
}
