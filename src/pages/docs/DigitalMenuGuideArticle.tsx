import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export function DigitalMenuGuideArticle() {
  return (
    <article className="prose-slate max-w-none">
      <Helmet>
        <title>The Ultimate Digital Menu Guide | MenuKit</title>
        <meta name="description" content="Everything you need to know about switching your restaurant to a digital menu." />
      </Helmet>
      <header className="mb-12 border-b border-slate-200 pb-8">
        <div className="flex items-center gap-4 text-sm font-semibold text-slate-500 mb-6">
          <Link to="/docs" className="hover:text-primary transition-colors">Documentation</Link>
          <span>/</span>
          <span className="text-primary">Digital Menus</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-6">
          The Ultimate Digital Menu Guide: How to Make the Switch
        </h1>
        <div className="flex items-center gap-4 text-sm text-slate-500">
          <div className="flex items-center gap-1.5">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            15 min read
          </div>
          <span className="w-1 h-1 rounded-full bg-slate-300"></span>
          <div>Updated August 2026</div>
        </div>
      </header>

      {/* Table of Contents */}
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-12">
        <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">Table of Contents</h3>
        <ul className="space-y-3 text-sm font-medium text-slate-600">
          <li><a href="#introduction" className="hover:text-primary transition-colors">Introduction</a></li>
          <li><a href="#what-is-it" className="hover:text-primary transition-colors">What is a Digital Menu?</a></li>
          <li><a href="#getting-started" className="hover:text-primary transition-colors">Getting Started: The First Steps</a></li>
          <li><a href="#design-tips" className="hover:text-primary transition-colors">Design Tips for High Conversion</a></li>
          <li><a href="#launching" className="hover:text-primary transition-colors">Launching Your New Menu</a></li>
          <li><a href="#conclusion" className="hover:text-primary transition-colors">Conclusion</a></li>
        </ul>
      </div>

      <div className="space-y-12 text-slate-700 leading-relaxed text-lg">
        <section id="introduction">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Introduction</h2>
          <p className="mb-4">
            Transitioning from paper to digital is one of the most impactful operational changes a modern restaurant can make. But how exactly do you make the switch without disrupting your business? This guide covers everything you need to know.
          </p>
        </section>

        <section id="what-is-it">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">What is a Digital Menu?</h2>
          <p className="mb-4">
            Unlike a simple PDF hosted on a website, a true digital menu is an interactive, mobile-optimized interface. It allows customers to browse categories, view high-quality images, filter by dietary requirements, and, in some cases, place orders and pay directly from their smartphones.
          </p>
        </section>

        <section id="getting-started">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Getting Started: The First Steps</h2>
          <p className="mb-4">
            The first step is choosing the right platform. Look for a solution that offers easy menu updates, robust analytics, and reliable hosting. Once chosen, audit your current menu. This is the perfect time to trim underperforming items and focus on your most profitable, popular dishes.
          </p>
        </section>

        <section id="design-tips">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Design Tips for High Conversion</h2>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Use Professional Photography:</strong> Visuals sell. Invest in high-quality photos for your signature dishes.</li>
            <li><strong>Keep Descriptions Concise:</strong> Mobile screens are small. Get straight to the delicious details without overwhelming the reader.</li>
            <li><strong>Highlight Upsells:</strong> Use features like "Chef's Recommendations" or "Popular Add-ons" to naturally guide customers toward higher-margin items.</li>
          </ul>
        </section>

        <section id="launching">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Launching Your New Menu</h2>
          <p className="mb-4">
            Roll out your new digital menu systematically. Place clear, well-designed QR codes on tables and near the entrance. Train your staff to briefly explain how to use the menu as they seat guests. Ensure your Wi-Fi is reliable, as customers will need a connection to load the menu quickly.
          </p>
        </section>

        <section id="conclusion">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Conclusion</h2>
          <p className="mb-4">
            Switching to a digital menu requires upfront effort, but the long-term benefits in operational efficiency, increased order values, and customer satisfaction are undeniable. Welcome to the future of dining.
          </p>
        </section>
      </div>
    </article>
  );
}
