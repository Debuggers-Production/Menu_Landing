import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Footer from '../sections/Footer';

export function TermsOfServicePage() {
  return (
    <div className="relative min-h-screen bg-white">
      <Helmet>
        <title>Terms of Service | MenuKit</title>
      </Helmet>
      <Navbar />
      <main className="max-w-4xl mx-auto px-6 py-32 prose prose-slate">
        <h1>Terms of Service</h1>
        <p>Last updated: August 2026</p>
        <p>Welcome to MenuKit! By accessing or using our website and services, you agree to be bound by these Terms of Service.</p>
        <h2>Use of Services</h2>
        <p>You agree to use MenuKit only for lawful purposes and in accordance with these Terms. You are responsible for any activity that occurs under your account.</p>
        <h2>Intellectual Property</h2>
        <p>The Service and its original content, features, and functionality are and will remain the exclusive property of MenuKit and its licensors.</p>
        <h2>Termination</h2>
        <p>We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.</p>
        <h2>Contact Us</h2>
        <p>If you have any questions about these Terms, please contact us at:</p>
        <ul>
          <li>Email: debuggerstechs@gmail.com</li>
          <li>Phone: 8248692839</li>
        </ul>
      </main>
      <Footer />
    </div>
  );
}
