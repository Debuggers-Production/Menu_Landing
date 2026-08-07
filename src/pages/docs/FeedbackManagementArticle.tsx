import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export function FeedbackManagementArticle() {
  return (
    <article className="prose-slate max-w-none">
      <Helmet>
        <title>Restaurant Feedback Management Guide | MenuKit</title>
        <meta name="description" content="Learn how to effectively collect, manage, and leverage customer feedback to improve your restaurant operations." />
      </Helmet>
      <header className="mb-12 border-b border-slate-200 pb-8">
        <div className="flex items-center gap-4 text-sm font-semibold text-slate-500 mb-6">
          <Link to="/docs" className="hover:text-primary transition-colors">Documentation</Link>
          <span>/</span>
          <span className="text-primary">Customer Experience</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-6">
          Feedback Management Guide: Turning Reviews into Revenue
        </h1>
        <div className="flex items-center gap-4 text-sm text-slate-500">
          <div className="flex items-center gap-1.5">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            9 min read
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
          <li><a href="#importance" className="hover:text-primary transition-colors">The Importance of Private Feedback</a></li>
          <li><a href="#collection" className="hover:text-primary transition-colors">How to Collect Meaningful Feedback</a></li>
          <li><a href="#responding" className="hover:text-primary transition-colors">Responding to Reviews (The Right Way)</a></li>
          <li><a href="#conclusion" className="hover:text-primary transition-colors">Conclusion</a></li>
        </ul>
      </div>

      <div className="space-y-12 text-slate-700 leading-relaxed text-lg">
        <section id="introduction">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Introduction</h2>
          <p className="mb-4">
            In the hospitality industry, feedback is a gift. Whether it's a glowing 5-star review or a constructive complaint about cold soup, customer opinions dictate your restaurant's online reputation and future foot traffic. Managing this feedback effectively is crucial for sustained success.
          </p>
        </section>

        <section id="importance">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">The Importance of Private Feedback</h2>
          <p className="mb-4">
            The worst kind of feedback is the kind you never hear directly. If a customer has a bad experience and leaves without saying a word, they are likely to vent their frustrations publicly on Yelp or Google. By providing a private, direct channel for feedback (like a digital survey linked to your QR menu), you can catch unhappy customers before they leave the building, allowing management to apologize and rectify the situation privately.
          </p>
        </section>

        <section id="collection">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">How to Collect Meaningful Feedback</h2>
          <p className="mb-4">
            Make leaving feedback frictionless. Long, multi-page surveys will be ignored. Instead, ask 2-3 targeted questions right at the end of the digital checkout process. For example: "How was the temperature of your food?" or "Did your server greet you promptly?" Offering a small incentive, like a 5% discount on their next visit, dramatically increases response rates.
          </p>
        </section>

        <section id="responding">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Responding to Reviews (The Right Way)</h2>
          <p className="mb-4">
            Always respond to public reviews, both positive and negative. For positive reviews, a simple "Thank you, we're glad you enjoyed your visit!" shows you care. For negative reviews, never get defensive. Apologize for the specific issue, explain what steps you are taking to fix it, and offer to discuss the matter further offline. This demonstrates professionalism to anyone reading the review in the future.
          </p>
        </section>

        <section id="conclusion">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Conclusion</h2>
          <p className="mb-4">
            Feedback is a continuous loop. Collect it actively, respond to it gracefully, and most importantly, use the insights to genuinely improve your restaurant's operations. A complaint handled well often creates a more loyal customer than a flawless visit.
          </p>
        </section>
      </div>
    </article>
  );
}
