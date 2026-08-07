import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Footer from '../sections/Footer';

export function PrivacyPolicyPage() {
  return (
    <div className="relative min-h-screen bg-white">
      <Helmet>
        <title>Privacy Policy | MenuKit</title>
      </Helmet>
      <Navbar />
      <main className="max-w-4xl mx-auto px-6 py-32 prose prose-slate">
        <h1>Privacy Policy</h1>
        <p>Last updated: August 2026</p>
        <p>This Privacy Policy describes how MenuKit collects, uses, and discloses your information when you use our website and services.</p>
        <h2>Information We Collect</h2>
        <p>We collect information you provide directly to us when you create an account, update your profile, use our interactive digital menus, or communicate with us.</p>
        <h2>How We Use Your Information</h2>
        <p>We use the information we collect to provide, maintain, and improve our services, as well as to communicate with you about updates and offers.</p>
        <h2>Contact Us</h2>
        <p>If you have any questions about this Privacy Policy, please contact us at:</p>
        <ul>
          <li>Email: debuggerstechs@gmail.com</li>
          <li>Phone: 8248692839</li>
        </ul>
      </main>
      <Footer />
    </div>
  );
}
