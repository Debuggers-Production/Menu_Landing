import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export function CustomerRetentionArticle() {
  return (
    <article className="prose-slate max-w-none">
      <Helmet>
        <title>Customer Retention Strategies for Restaurants | MenuKit</title>
        <meta name="description" content="How to turn first-time visitors into loyal regulars with proven retention strategies." />
      </Helmet>
      <header className="mb-12 border-b border-slate-200 pb-8">
        <div className="flex items-center gap-4 text-sm font-semibold text-slate-500 mb-6">
          <Link to="/docs" className="hover:text-primary transition-colors">Documentation</Link>
          <span>/</span>
          <span className="text-primary">Growth</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-6">
          Customer Retention Strategies: Turning First-Time Visitors into Regulars
        </h1>
        <div className="flex items-center gap-4 text-sm text-slate-500">
          <div className="flex items-center gap-1.5">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            10 min read
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
          <li><a href="#why-retention" className="hover:text-primary transition-colors">Why Retention Matters More Than Acquisition</a></li>
          <li><a href="#strategy-experience" className="hover:text-primary transition-colors">Strategy 1: Deliver Consistent Experiences</a></li>
          <li><a href="#strategy-loyalty" className="hover:text-primary transition-colors">Strategy 2: Implement a Loyalty Program</a></li>
          <li><a href="#strategy-feedback" className="hover:text-primary transition-colors">Strategy 3: Act on Customer Feedback</a></li>
          <li><a href="#conclusion" className="hover:text-primary transition-colors">Conclusion</a></li>
        </ul>
      </div>

      <div className="space-y-12 text-slate-700 leading-relaxed text-lg">
        <section id="introduction">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Introduction</h2>
          <p className="mb-4">
            Attracting new customers to your restaurant is hard work. You run ads, optimize your Google Business profile, and perfect your storefront. But the true engine of growth for any successful restaurant isn't acquisition—it's retention. 
          </p>
        </section>

        <section id="why-retention">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Why Retention Matters More Than Acquisition</h2>
          <p className="mb-4">
            Studies show that increasing customer retention by just 5% can increase profits by 25% to 95%. A regular customer spends more per visit, recommends your restaurant to friends, and costs significantly less to market to than a new customer.
          </p>
        </section>

        <section id="strategy-experience">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Strategy 1: Deliver Consistent Experiences</h2>
          <p className="mb-4">
            A customer might forgive one bad meal, but they won't forgive a consistently chaotic experience. Ensure that wait times are managed, the food quality remains high, and staff are trained to be attentive. A seamless digital ordering system can significantly reduce errors and wait times, ensuring a predictable and pleasant visit every time.
          </p>
        </section>

        <section id="strategy-loyalty">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Strategy 2: Implement a Loyalty Program</h2>
          <p className="mb-4">
            Give customers a tangible reason to return. Whether it's a digital punch card ("Buy 9 coffees, get the 10th free") or a points-based system that unlocks exclusive items, loyalty programs gamify the dining experience and create a sense of belonging.
          </p>
        </section>

        <section id="strategy-feedback">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Strategy 3: Act on Customer Feedback</h2>
          <p className="mb-4">
            Customers want to feel heard. Actively solicit feedback through quick post-meal digital surveys. When customers see that their suggestions are implemented—like adding a new vegan option or fixing a drafty seating area—they develop a deeper emotional connection to your establishment.
          </p>
        </section>

        <section id="conclusion">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Conclusion</h2>
          <p className="mb-4">
            Retention isn't an accident; it's the result of deliberate strategies aimed at making the customer feel valued. By focusing on consistency, rewarding loyalty, and listening to feedback, you can build a thriving community of regulars.
          </p>
        </section>
      </div>
    </article>
  );
}
