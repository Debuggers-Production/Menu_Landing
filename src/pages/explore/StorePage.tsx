import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { MapPin, Clock, Phone, Globe, Star, ExternalLink, ShieldCheck, Tag, ArrowRight, ArrowLeft } from 'lucide-react';

interface ShopData {
  id: string;
  name: string;
  slug: string;
  description?: string;
  logo_url?: string;
  banner_url?: string;
  address?: string;
  phone?: string;
  opening_time?: string;
  closing_time?: string;
  category?: string;
  city?: string;
  area?: string;
}

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image_url: string;
  is_veg: boolean;
}

interface Category {
  id: string;
  name: string;
  items: MenuItem[];
}

interface Discount {
  id: string;
  code: string;
  description: string;
  discount_percent: number;
  discount_type?: string;
  title?: string;
  discount_value?: number;
}

export function StorePage() {
  const { slug } = useParams();
  const [shop, setShop] = useState<ShopData | null>(null);
  const [topItems, setTopItems] = useState<MenuItem[]>([]);
  const [discounts, setDiscounts] = useState<Discount[]>([]);
  const [otherShops, setOtherShops] = useState<ShopData[]>([]);
  const [loading, setLoading] = useState(true);

  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8002/api/v1';
  const MAIN_APP_URL = import.meta.env.VITE_MAIN_APP_URL || 'https://menukit.debuggers.co.in';
  const discoverLink = `${MAIN_APP_URL}/discover/stores`;

  useEffect(() => {
    async function fetchStoreData() {
      try {
        setLoading(true);
        // 1. Fetch Shop by Slug
        const shopRes = await fetch(`${API_URL}/public/shops/by-slug/${slug}`);
        if (!shopRes.ok) throw new Error('Shop not found');
        const shopData = await shopRes.json();
        setShop(shopData);

        const shopId = shopData.id;

        // 2. Fetch Menu & Discounts in parallel
        const [menuRes, discRes, othersRes] = await Promise.all([
          fetch(`${API_URL}/public/shop/${shopId}/menu?limit=3`),
          fetch(`${API_URL}/public/shop/${shopId}/discounts?limit=3`),
          fetch(`${API_URL}/public/shops?limit=3`)
        ]);

        if (menuRes.ok) {
          const categories: Category[] = await menuRes.json();
          const allItems = categories.flatMap(c => c.items);
          setTopItems(allItems.slice(0, 3)); // Grab top 3
        }

        if (discRes.ok) {
          setDiscounts(await discRes.json());
        }

        if (othersRes.ok) {
          const others = await othersRes.json();
          setOtherShops(others.filter((s: ShopData) => s.id !== shopId).slice(0, 3));
        }

      } catch (error) {
        console.error("Error fetching store:", error);
      } finally {
        setLoading(false);
      }
    }

    if (slug) {
      fetchStoreData();
    }
  }, [slug, API_URL]);

  if (loading) {
    return (
      <div className="animate-pulse max-w-6xl mx-auto py-12 px-4">
        <div className="h-[400px] bg-slate-200 rounded-3xl w-full mb-8"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-4">
            <div className="h-40 bg-slate-200 rounded-2xl w-full"></div>
            <div className="h-40 bg-slate-200 rounded-2xl w-full"></div>
          </div>
          <div className="h-80 bg-slate-200 rounded-2xl w-full"></div>
        </div>
      </div>
    );
  }

  if (!shop) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mb-6">
          <MapPin size={40} className="text-slate-300" />
        </div>
        <h1 className="text-3xl font-black text-slate-900 mb-2">Store Not Found</h1>
        <p className="text-slate-500 mb-8 max-w-md">We couldn't find the restaurant you were looking for. It might have been removed or the URL is incorrect.</p>
        <a href={discoverLink} className="bg-primary text-white font-bold px-6 py-3 rounded-full hover:bg-orange-600 transition-colors">
          Explore Other Restaurants
        </a>
      </div>
    );
  }

  const orderLink = `${MAIN_APP_URL}/shop/${shop.id}`;

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <Helmet>
        <title>{shop.name} {shop.city ? `- Order in ${shop.city}` : ''} | MenuKit</title>
        <meta name="description" content={`View the full menu for ${shop.name}${shop.area ? ` in ${shop.area}` : ''}. ${shop.description || 'Order online easily with MenuKit.'}`} />
      </Helmet>
      
      {/* Dynamic Header Banner */}
      <div className="relative w-full h-[450px]">
        <img 
          src={shop.banner_url || "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=2000&q=80"} 
          alt={shop.name} 
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
        
        {/* Navigation Breadcrumb inside banner */}
        <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-10 max-w-6xl mx-auto w-full">
          <a href={discoverLink} className="flex items-center gap-2 text-white/80 hover:text-white bg-black/20 hover:bg-black/40 backdrop-blur px-4 py-2 rounded-full transition-all text-sm font-medium">
            <ArrowLeft size={16} /> Back to Explore
          </a>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-end gap-8">
            <div className="w-32 h-32 md:w-40 md:h-40 bg-white rounded-3xl p-2 shadow-2xl shrink-0 ring-4 ring-white/20 transform md:translate-y-8">
              <img src={shop.logo_url || "https://via.placeholder.com/150"} alt={shop.name} className="w-full h-full object-contain rounded-2xl" />
            </div>
            <div className="text-white flex-1 pb-2">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <h1 className="text-4xl md:text-6xl font-black tracking-tight drop-shadow-lg">{shop.name}</h1>
                {shop.category && (
                  <span className="bg-primary/90 backdrop-blur text-white text-xs md:text-sm font-bold px-4 py-1.5 rounded-full shadow-lg">
                    {shop.category}
                  </span>
                )}
              </div>
              <div className="flex flex-wrap items-center gap-6 text-sm md:text-base text-slate-200 font-medium">
                <div className="flex items-center gap-2"><MapPin size={18} className="text-primary" /> {shop.address}</div>
                <div className="flex items-center gap-2 text-yellow-400 bg-black/20 px-3 py-1 rounded-full backdrop-blur"><Star size={16} className="fill-yellow-400" /> 4.8 (Verified)</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 mt-16 md:mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-10">
            
            {/* About Section */}
            {shop.description && (
              <section className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <h2 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight flex items-center gap-2">
                   About {shop.name}
                </h2>
                <p className="text-slate-600 leading-relaxed text-lg">
                  {shop.description}
                </p>
              </section>
            )}

            {/* Discounts Section */}
            {discounts.length > 0 && (
              <section className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl p-8 border border-orange-100 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 opacity-10 transform translate-x-4 -translate-y-4">
                  <Tag size={120} />
                </div>
                <h2 className="text-2xl font-bold text-orange-900 mb-6 tracking-tight relative z-10 flex items-center gap-2">
                  <Tag className="text-primary" /> Active Offers
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
                  {discounts.map(disc => (
                    <a href={orderLink} key={disc.id} className="bg-white/80 hover:bg-white backdrop-blur rounded-2xl p-5 border border-orange-200/50 shadow-sm transition-all group cursor-pointer">
                      <div className="flex justify-between items-start mb-2">
                        <span className="font-black text-xl text-slate-900 uppercase">{disc.title}</span>
                        <span className="bg-orange-100 text-orange-700 text-xs font-bold px-2 py-1 rounded-md whitespace-nowrap">
                          {disc.discount_type === 'percentage' && `${disc.discount_value}% OFF`}
                          {disc.discount_type === 'flat' && `₹${disc.discount_value} OFF`}
                          {disc.discount_type === 'bogo' && 'BOGO'}
                          {disc.discount_type === 'combo' && 'COMBO'}
                        </span>
                      </div>
                      <p className="text-sm text-slate-600 font-medium min-h-[20px]">{disc.description || 'Special offer just for you!'}</p>
                    </a>
                  ))}
                </div>
              </section>
            )}
            
            {/* Featured Menu */}
            {topItems.length > 0 && (
              <section className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Featured Items</h2>
                  <a href={orderLink} className="text-primary font-bold text-sm hover:underline flex items-center gap-1 group">
                    View Full Menu <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {topItems.map(item => (
                    <a href={orderLink} key={item.id} className="flex gap-4 bg-white p-4 rounded-2xl border border-slate-100 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all group cursor-pointer">
                      <div className="w-24 h-24 bg-slate-100 rounded-xl overflow-hidden shrink-0 relative">
                        {item.image_url ? (
                          <img src={item.image_url} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-slate-300 bg-slate-50 font-bold text-xl">{item.name.charAt(0)}</div>
                        )}
                        <div className={`absolute top-2 right-2 w-3 h-3 rounded-full border border-white shadow-sm ${item.is_veg ? 'bg-green-500' : 'bg-red-500'}`}></div>
                      </div>
                      <div className="flex flex-col justify-center">
                        <h4 className="font-bold text-slate-900 group-hover:text-primary transition-colors text-lg line-clamp-1">{item.name}</h4>
                        <p className="text-sm text-slate-500 line-clamp-2 mt-1 mb-2 leading-snug">{item.description}</p>
                        <div className="font-black text-slate-900">₹{item.price}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Primary Order CTA */}
            <div className="bg-slate-900 rounded-3xl p-8 shadow-2xl text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity translate-x-20 -translate-y-20"></div>
              <h3 className="text-2xl font-black mb-2 relative z-10">Hungry?</h3>
              <p className="text-slate-300 text-sm mb-8 relative z-10 leading-relaxed">Browse the full digital menu, customize your items, and order directly online.</p>
              <a 
                href={orderLink}
                className="relative z-10 w-full flex items-center justify-center gap-2 bg-primary hover:bg-orange-500 text-white font-bold py-4 px-6 rounded-2xl transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-primary/25"
              >
                Explore their Menu <ExternalLink size={18} />
              </a>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm space-y-6">
              <h3 className="font-black text-slate-900 uppercase tracking-widest text-xs">Restaurant Info</h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4 text-slate-600">
                  <div className="bg-slate-50 p-2.5 rounded-xl shrink-0"><Clock size={20} className="text-primary" /></div>
                  <div>
                    <div className="font-bold text-slate-900">Hours</div>
                    <div className="text-sm mt-0.5">{shop.opening_time || '9:00 AM'} - {shop.closing_time || '10:00 PM'}</div>
                  </div>
                </div>
                <div className="flex items-start gap-4 text-slate-600">
                  <div className="bg-slate-50 p-2.5 rounded-xl shrink-0"><Phone size={20} className="text-primary" /></div>
                  <div>
                    <div className="font-bold text-slate-900">Contact</div>
                    <div className="text-sm mt-0.5">{shop.phone || 'Not available'}</div>
                  </div>
                </div>
                <div className="flex items-start gap-4 text-slate-600">
                  <div className="bg-slate-50 p-2.5 rounded-xl shrink-0"><Globe size={20} className="text-primary" /></div>
                  <div>
                    <div className="font-bold text-slate-900">Share Link</div>
                    <div className="text-sm text-primary hover:underline cursor-pointer mt-0.5 break-all">{MAIN_APP_URL.replace('https://', '')}/store/{shop.slug}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Other Shops */}
            {otherShops.length > 0 && (
              <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm">
                <h3 className="font-black text-slate-900 text-lg mb-4">Other Places</h3>
                <div className="space-y-4 mb-6">
                  {otherShops.map((other) => (
                    <a href={`/landing/store/${other.slug}`} key={other.id} className="flex items-center gap-3 group">
                      <div className="w-12 h-12 rounded-xl bg-slate-100 overflow-hidden shrink-0">
                        {other.logo_url && <img src={other.logo_url} className="w-full h-full object-cover" />}
                      </div>
                      <div className="flex-1">
                        <div className="font-bold text-sm text-slate-900 group-hover:text-primary transition-colors line-clamp-1">{other.name}</div>
                        <div className="text-xs text-slate-500">{other.category || 'Restaurant'}</div>
                      </div>
                    </a>
                  ))}
                </div>
                <a 
                  href={discoverLink}
                  className="w-full flex items-center justify-center gap-2 bg-slate-50 hover:bg-slate-100 text-slate-900 font-bold py-3 px-4 rounded-xl transition-colors text-sm"
                >
                  Explore More <ArrowRight size={16} />
                </a>
              </div>
            )}
            
            <div className="flex items-center gap-2 text-xs font-bold text-slate-300 justify-center pt-4">
              <ShieldCheck size={16} /> POWERED BY MENUKIT
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
