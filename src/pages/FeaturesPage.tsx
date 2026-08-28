import { Helmet } from 'react-helmet-async'
import Navbar from '../components/Navbar'
import Footer from '../sections/Footer'
import FeaturesSection from '../sections/Features'

export function FeaturesPage() {
  return (
    <div className="relative min-h-screen bg-slate-50 overflow-hidden font-sans">
      <Helmet>
        <title>Features | MenuKit</title>
        <meta name="description" content="Explore the powerful features of MenuKit, including digital menus, QR ordering, and analytics." />
      </Helmet>
      
      <Navbar />
      
      <main className="pt-24 pb-24">
        <FeaturesSection />
      </main>

      <Footer />
    </div>
  )
}
