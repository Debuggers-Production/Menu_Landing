import { Helmet } from 'react-helmet-async'
import Navbar from '../components/Navbar'
import Footer from '../sections/Footer'
import LiveDemoSection from '../sections/LiveDemo'

export function DemoPage() {
  return (
    <div className="relative min-h-screen bg-slate-50 overflow-hidden font-sans">
      <Helmet>
        <title>Live Demo | MenuKit</title>
        <meta name="description" content="Try the live demo of MenuKit and see how easy it is to manage your digital menu." />
      </Helmet>
      
      <Navbar />
      
      <main className="pt-24 pb-24">
        <LiveDemoSection />
      </main>

      <Footer />
    </div>
  )
}
