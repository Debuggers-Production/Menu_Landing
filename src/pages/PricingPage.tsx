import { Helmet } from 'react-helmet-async'
import Navbar from '../components/Navbar'
import Footer from '../sections/Footer'
import PricingSection from '../sections/Pricing'

export function PricingPage() {
  return (
    <div className="relative min-h-screen bg-slate-50 overflow-hidden font-sans">
      <Helmet>
        <title>Pricing | MenuKit</title>
        <meta name="description" content="View the pricing plans for MenuKit. Start for free and grow your restaurant." />
      </Helmet>
      
      <Navbar />
      
      <main className="pt-24 pb-24">
        <PricingSection />
      </main>

      <Footer />
    </div>
  )
}
