import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const ARTICLES = [
  {
    title: "Restaurant Customer Experience Problems",
    slug: "restaurant-customer-experience",
    description: "Why restaurants lose customers and how modern tech solves it.",
    category: "Customer Experience"
  },
  {
    title: "Restaurant Menu Problems & Solutions",
    slug: "restaurant-menu-problems",
    description: "Common issues with traditional menus and digital solutions.",
    category: "Menu Management"
  },
  {
    title: "Customer Retention Strategies",
    slug: "customer-retention-for-restaurants",
    description: "How to turn first-time visitors into loyal regulars.",
    category: "Growth"
  },
  {
    title: "The Ultimate Digital Menu Guide",
    slug: "digital-menu-guide",
    description: "Everything you need to know about switching to a digital menu.",
    category: "Digital Menus"
  },
  {
    title: "QR Code Menu Benefits",
    slug: "qr-menu-benefits",
    description: "Why top restaurants are adopting QR ordering systems.",
    category: "Digital Menus"
  },
  {
    title: "Feedback Management Guide",
    slug: "restaurant-feedback-management",
    description: "How to collect, manage, and leverage customer reviews.",
    category: "Customer Experience"
  }
];

export function DocsIndexPage() {
  return (
    <div>
      <Helmet>
        <title>MenuKit Documentation & Guides | Grow Your Restaurant</title>
        <meta name="description" content="Learn how to increase restaurant customer retention, solve menu problems, and grow your business with MenuKit's comprehensive guides and resources." />
      </Helmet>
      <div className="mb-12">
        <h1 className="text-4xl font-black text-slate-900 tracking-tight mb-4">Menukit Education Hub</h1>
        <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
          Discover guides, insights, and strategies to improve your restaurant operations, elevate customer experience, and drive growth.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {ARTICLES.map((article) => (
          <Link 
            key={article.slug} 
            to={`/docs/${article.slug}`}
            className="group block bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300"
          >
            <span className="inline-block text-[10px] font-bold text-primary uppercase tracking-widest bg-primary/10 px-2 py-1 rounded-md mb-4">
              {article.category}
            </span>
            <h2 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors mb-2">
              {article.title}
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              {article.description}
            </p>
            <div className="mt-6 flex items-center text-sm font-bold text-primary">
              Read Guide <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
