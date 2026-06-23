import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { MapPin, Star, Clock, Navigation } from 'lucide-react';
import { InfiniteScrollTrigger } from '../../components/InfiniteScrollTrigger';

interface Shop {
  id: string;
  name: string;
  slug: string;
  logo_url?: string;
  address?: string;
  category?: string;
  cuisine?: string;
  city?: string;
  area?: string;
  average_rating?: number;
  total_reviews?: number;
  active_discounts_count: number;
  best_discount_label?: string;
}

const PAGE_SIZE = 12;

export function ExplorePage() {
  const { city, category } = useParams();
  const [shops, setShops] = useState<Shop[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8002/api/v1';

  const fetchShops = async (currentOffset: number, isInitial = false) => {
    try {
      if (isInitial) setLoading(true);
      else setLoadingMore(true);

      const params = new URLSearchParams();
      params.append('limit', PAGE_SIZE.toString());
      params.append('offset', currentOffset.toString());
      if (city) params.append('city', city);
      if (category) params.append('category', category);

      const res = await fetch(`${API_URL}/public/shops?${params.toString()}`);
      if (res.ok) {
        const data = await res.json();
        if (data.length < PAGE_SIZE) {
          setHasMore(false);
        } else {
          setHasMore(true);
        }

        if (isInitial) {
          setShops(data);
        } else {
          setShops(prev => [...prev, ...data]);
        }
      }
    } catch (error) {
      console.error("Error fetching shops:", error);
    } finally {
      if (isInitial) setLoading(false);
      else setLoadingMore(false);
    }
  };

  useEffect(() => {
    setOffset(0);
    setHasMore(true);
    fetchShops(0, true);
  }, [city, category, API_URL]);

  const handleLoadMore = () => {
    const newOffset = offset + PAGE_SIZE;
    setOffset(newOffset);
    fetchShops(newOffset, false);
  };

  return (
    <div className="flex flex-col md:flex-row gap-8">
      <Helmet>
        <title>{category ? `${category} ` : ''}Restaurants {city ? `in ${city}` : 'Near You'} | MenuKit Explore</title>
        <meta name="description" content={`Discover the best ${category || 'food and'} restaurants ${city ? `in ${city}` : 'around you'}. View menus, reviews, and order online with MenuKit.`} />
      </Helmet>
      {/* Sidebar Filters */}
      <aside className="w-full md:w-64 shrink-0 space-y-6">
        <div>
          <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">Location</h3>
          <button className="w-full flex items-center justify-between px-4 py-2 bg-slate-100 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-200 transition-colors">
            <div className="flex items-center gap-2">
              <Navigation size={16} className="text-primary" />
              Use Current Location
            </div>
          </button>
        </div>

        <div>
          <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">Categories</h3>
          <div className="space-y-2">
            {['Pizza', 'Burger', 'South Indian', 'Chinese', 'Cafe'].map((cat) => (
              <label key={cat} className="flex items-center gap-2 text-sm text-slate-600">
                <input type="checkbox" className="rounded text-primary focus:ring-primary/20" />
                {cat}
              </label>
            ))}
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 pb-20">
        <div className="mb-6">
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">
            {category ? `${category} in ` : 'Restaurants in '}
            {city ? <span className="capitalize">{city}</span> : 'Your Area'}
          </h1>
          <p className="text-slate-500 mt-2">Discover the best food and drinks around you.</p>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="animate-pulse bg-slate-200 rounded-2xl h-64"></div>
            ))}
          </div>
        ) : (
          <>
            {shops.length === 0 ? (
              <div className="text-center py-20">
                <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="text-slate-300" size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">No restaurants found</h3>
                <p className="text-slate-500">Try changing your location or category filters.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {shops.map((shop) => (
                  <Link key={shop.id} to={`/store/${shop.slug}`} className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-xl hover:border-primary/20 transition-all duration-300">
                    <div className="h-40 bg-slate-100 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                      {shop.logo_url && <img src={shop.logo_url} alt={shop.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />}
                      {shop.best_discount_label && (
                        <div className="absolute top-4 left-4 z-20 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                          {shop.best_discount_label}
                        </div>
                      )}
                      <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2 text-white">
                        <div className="flex items-center gap-1 bg-black/40 backdrop-blur-md px-2 py-1 rounded text-xs font-medium">
                          <Star size={12} className="text-yellow-400 fill-yellow-400" />
                          {shop.average_rating || 'New'}
                        </div>
                      </div>
                    </div>
                    <div className="p-4 flex-1 flex flex-col">
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-primary transition-colors line-clamp-1">{shop.name}</h3>
                      <div className="text-sm text-slate-500 mt-1 mb-3 line-clamp-1">{shop.category || 'Restaurant'} • {shop.area || shop.city}</div>
                      
                      <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                        <div className="flex items-center gap-1.5 text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded">
                          <Clock size={12} /> Open Now
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
            
            {/* Infinite Scroll Pagination */}
            {hasMore && shops.length > 0 && (
              <div className="mt-12 flex justify-center">
                <InfiniteScrollTrigger 
                  onIntersect={handleLoadMore} 
                  isLoading={loadingMore} 
                  hasMore={hasMore} 
                />
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
