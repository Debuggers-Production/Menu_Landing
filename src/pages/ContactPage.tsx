import { Helmet } from 'react-helmet-async'
import Navbar from '../components/Navbar'
import Footer from '../sections/Footer'
import { Mail, Phone } from 'lucide-react'

export function ContactPage() {
  return (
    <div className="relative min-h-screen bg-slate-50 overflow-hidden font-sans">
      <Helmet>
        <title>Contact Support | MenuKit</title>
        <meta name="description" content="Contact MenuKit support for any queries or help." />
      </Helmet>
      
      <Navbar />
      
      <main className="pt-32 pb-24 px-6 max-w-7xl mx-auto min-h-[80vh]">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 text-center">
            Contact Support
          </h1>
          <p className="text-lg text-slate-600 mb-12 text-center max-w-2xl mx-auto">
            Have questions about MenuKit? Need technical assistance? We're here to help. Reach out to our support team and we'll get back to you as soon as possible.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {/* Email Contact */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center transition-transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-6">
                <Mail size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Email Us</h3>
              <p className="text-slate-600 mb-4">
                For general queries and technical support.
              </p>
              <a 
                href="mailto:debuggerstechs@gmail.com" 
                className="text-blue-600 font-semibold text-lg hover:underline"
              >
                debuggerstechs@gmail.com
              </a>
            </div>

            {/* Phone Contact */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center transition-transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-green-50 text-green-600 rounded-full flex items-center justify-center mb-6">
                <Phone size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Call Us</h3>
              <p className="text-slate-600 mb-4">
                Available Monday to Friday, 9am - 6pm.
              </p>
              <a 
                href="tel:+918248692839" 
                className="text-green-600 font-semibold text-lg hover:underline"
              >
                +91 8248692839
              </a>
            </div>
          </div>
          
        </div>
      </main>

      <Footer />
    </div>
  )
}
