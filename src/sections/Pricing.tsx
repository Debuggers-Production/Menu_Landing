import { useState, useMemo, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Check, ShoppingCart, Sparkles, Zap, PackageOpen, Award, Layers, ShieldCheck, ArrowRight, HelpCircle } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper'
import logo from '../assets/menukit-logo.svg'

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ');
}

interface Feature {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
}

const ADDONS: Feature[] = [
  {
    id: 'online-orders',
    name: 'Online Visibility & Orders Accept',
    price: 129,
    description: 'Accept online delivery & takeaway orders directly with live online menu visibility.',
    category: 'Online Ordering',
  },
  {
    id: 'member-count',
    name: 'New Member Count',
    price: 99,
    description: 'Track how many new members/customers join every month seamlessly.',
    category: 'Relationship Marketing',
  },
  {
    id: 'member-details',
    name: 'New Member + Details',
    price: 129,
    description: 'Store and manage deep customer information along with member growth metrics.',
    category: 'Relationship Marketing',
  },
  {
    id: 'search-data',
    name: 'Customer Search Data',
    price: 69,
    description: 'Access search analytics and real-time customer interest insights.',
    category: 'Marketing',
  },
  {
    id: 'custom-theme',
    name: 'Custom Theme Studio',
    price: 69,
    description: 'Customize colors, logos, and custom branding of your digital menu.',
    category: 'Branding',
  },
  {
    id: 'analytics-advanced-filters',
    name: 'Advanced Analytics Filters',
    price: 59,
    description: 'Unlock 7-day, 30-day, and Custom Date range filters for your dashboard.',
    category: 'Analytics',
  },
  {
    id: 'analytics-customer-insights',
    name: 'Customer Insights Report',
    price: 59,
    description: 'Access detailed reports on customer views and repeat visits.',
    category: 'Analytics',
  },
];

const ALL_ACCESS_PRICE = 399;

export default function Pricing() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  const [selectedFeatures, setSelectedFeatures] = useState<Set<string>>(new Set());
  const [isAllAccess, setIsAllAccess] = useState(false);
  const [isYearly, setIsYearly] = useState(false);

  const toggleFeature = (id: string) => {
    if (isAllAccess) setIsAllAccess(false);

    setSelectedFeatures((prev) => {
      const newSet = new Set(prev);
      
      if (id === 'member-details') {
        if (!newSet.has('member-details')) {
          newSet.add('member-details');
          newSet.delete('member-count');
        } else {
          newSet.delete('member-details');
        }
      } else if (id === 'member-count') {
        if (!newSet.has('member-count')) {
          newSet.add('member-count');
          newSet.delete('member-details');
        } else {
          newSet.delete('member-count');
        }
      } else {
        if (newSet.has(id)) {
          newSet.delete(id);
        } else {
          newSet.add(id);
        }
      }

      return newSet;
    });
  };

  const handlePlanTypeChange = (type: 'custom' | 'all-access') => {
    if (type === 'all-access') {
      setIsAllAccess(true);
      setSelectedFeatures(new Set());
    } else {
      setIsAllAccess(false);
    }
  };

  const { baseTotal, pgFee, gstFee, grandTotal, activeItems } = useMemo(() => {
    let base = 0;
    const items: Feature[] = [];
    const multiplier = isYearly ? 10 : 1;

    if (isAllAccess) {
      base = ALL_ACCESS_PRICE * multiplier;
    } else {
      selectedFeatures.forEach((id) => {
        const feature = ADDONS.find(a => a.id === id);
        if (feature) {
          base += feature.price * multiplier;
          items.push(feature);
        }
      });
    }

    const fee = Math.round((base * 0.03) * 100) / 100;
    const gst = Math.round((fee * 0.18) * 100) / 100;
    const total = Math.round((base + fee + gst) * 100) / 100;

    return {
      baseTotal: base,
      pgFee: fee,
      gstFee: gst,
      grandTotal: total,
      activeItems: items
    };
  }, [selectedFeatures, isAllAccess, isYearly]);

  return (
    <SectionWrapper id="pricing" className="bg-white relative">
      {/* Background Decorative Ambient Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] pointer-events-none overflow-hidden z-0 opacity-40">
        <div className="absolute -top-40 left-10 w-72 h-72 bg-primary/30 rounded-full blur-[120px]" />
        <div className="absolute -top-20 right-10 w-80 h-80 bg-orange-500/20 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 pt-8 sm:px-6 lg:px-8 z-10" ref={ref}>
        
        {/* Luxury Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-primary text-[11px] font-bold uppercase tracking-wider mb-3">
            <img src={logo} alt="MenuKit Logo" className="w-4 h-4" /> Add-On Marketplace
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 mb-3">
            Build Your <span className="bg-gradient-to-r from-primary via-orange-500 to-orange-500 bg-clip-text text-transparent">Custom Plan</span>
          </h2>
          <p className="text-slate-400 max-w-md mx-auto text-sm sm:text-base px-2">
            Start with our powerful core system for free. Scale your dynamic business with precision modular updates.
          </p>
        </motion.div>

        {/* Billing Cycle Toggle */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-center mb-6 px-1"
        >
          <div className="bg-slate-100 p-1 rounded-full inline-flex items-center shadow-inner border border-slate-200">
            <button
              onClick={() => setIsYearly(false)}
              className={cn(
                "px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-300",
                !isYearly ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-700"
              )}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={cn(
                "px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-1.5",
                isYearly ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-700"
              )}
            >
              Yearly <span className="bg-emerald-100 text-emerald-700 text-[10px] px-1.5 py-0.5 rounded-full font-bold shadow-sm">2 Months Free</span>
            </button>
          </div>
        </motion.div>

        {/* Premium Native Segmented Switch */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-center mb-8 px-1"
        >
          <div className="bg-slate-100 border border-slate-200 p-1 rounded-2xl flex w-full max-w-md shadow-inner backdrop-blur-md">
            <button
              onClick={() => handlePlanTypeChange('custom')}
              className={cn(
                "flex-1 flex items-center justify-center gap-2 py-3 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300",
                !isAllAccess 
                  ? "bg-white text-slate-900 shadow-sm" 
                  : "text-slate-500 hover:text-slate-700"
              )}
            >
              <Layers size={14} className={!isAllAccess ? "text-primary" : ""} />
              Modular Add-ons
            </button>
            <button
              onClick={() => handlePlanTypeChange('all-access')}
              className={cn(
                "flex-1 flex items-center justify-center gap-2 py-3 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 relative",
                isAllAccess 
                  ? "bg-gradient-to-r from-primary to-orange-600 text-slate-900 shadow-lg shadow-primary/20" 
                  : "text-slate-500 hover:text-slate-700"
              )}
            >
              <Award size={14} className={isAllAccess ? "text-amber-300" : ""} />
              All-Access Pack
              <span className="absolute -top-1.5 right-1 bg-amber-400 text-[9px] text-slate-900 px-1.5 py-0.5 rounded-full font-black shadow-sm">
                MAX
              </span>
            </button>
          </div>
        </motion.div>

        {/* Core Layout Structure */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start pb-12">
          
          {/* Base Configuration Block */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-1 space-y-4"
          >
            <div className="bg-gradient-to-b from-emerald-50 to-emerald-100/50 backdrop-blur-md rounded-2xl p-5 border-2 border-emerald-200 shadow-[0_0_30px_rgba(16,185,129,0.05)] relative overflow-hidden group">
              <div className="absolute -right-6 -bottom-6 text-emerald-500/10 pointer-events-none transition-transform group-hover:scale-110 duration-500">
                <PackageOpen size={90} />
              </div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-extrabold text-emerald-900 text-xs tracking-wider uppercase">Included Free Bundle</h3>
                <span className="text-[10px] bg-emerald-500 text-white font-black px-2.5 py-0.5 rounded-full shadow-sm shadow-emerald-500/30">100% FREE</span>
              </div>
              <div className="flex items-baseline gap-1 mb-3">
                <span className="text-3xl font-black text-emerald-600">₹0</span>
                <span className="text-xs text-emerald-700/70 font-medium">/ forever</span>
              </div>
              <ul className="space-y-2 border-t border-emerald-200 pt-3">
                {['Hotel Profile System', 'Dynamic QR Generation', 'Menu Core Dashboard', 'Basic Analytics', 'Unlimited Menus & Categories', 'Unlimited Discounts'].map((item, i) => (
                  <li key={i} className="flex items-center text-emerald-800 text-xs font-medium">
                    <ShieldCheck size={14} className="text-emerald-500 mr-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Smart Banner for Mobile & Desktop Upsell */}
            {!isAllAccess && (
              <div className="bg-gradient-to-br from-orange-50 via-white to-orange-50 text-slate-900 rounded-2xl p-5 border border-primary/20 shadow-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-xl" />
                <h4 className="font-bold text-sm mb-1 flex items-center gap-1.5 text-orange-200">
                  <Sparkles size={14} className="text-amber-400" /> Unlock True Efficiency
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  Consolidate every custom marketplace dynamic feature and priority updates inside one flat billing wrapper.
                </p>
                <button 
                  onClick={() => handlePlanTypeChange('all-access')}
                  className="w-full bg-primary hover:bg-orange-500 text-slate-900 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1 shadow-md shadow-primary/10"
                >
                  Switch to All-Access <ArrowRight size={12} />
                </button>
              </div>
            )}
          </motion.div>

          {/* Dynamic Content Switching Layer */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-2"
          >
            {isAllAccess ? (
              /* All Access Plan Layout Panel */
              <div className="bg-white border-2 border-primary rounded-3xl p-6 sm:p-8 shadow-xl shadow-primary/10 relative overflow-hidden group animate-in fade-in zoom-in-95 duration-200">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all duration-700" />
                
                <div className="flex flex-col sm:flex-row gap-5 sm:items-center justify-between relative z-10 pb-6 border-b border-slate-200">
                  <div className="flex items-start gap-3.5">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-orange-600 text-slate-900 flex items-center justify-center shadow-lg shadow-primary/20 shrink-0 mt-0.5">
                      <Award size={22} />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-black text-slate-900">All-Access Bundle</h3>
                      <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-xs">
                        Complete feature catalog package clearance with no operational volume bounds or rate capping tiers.
                      </p>
                    </div>
                  </div>
                  
                  <div className="relative group self-center sm:self-auto shrink-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-orange-600 rounded-2xl blur-md opacity-30 group-hover:opacity-60 transition duration-500" />
                    <div className="relative bg-orange-50 px-6 py-4 rounded-2xl border-2 border-primary/50 flex items-baseline gap-1 shadow-xl shadow-primary/20">
                      <span className="text-4xl font-black bg-gradient-to-r from-primary to-orange-600 bg-clip-text text-transparent">₹{isYearly ? ALL_ACCESS_PRICE * 10 : ALL_ACCESS_PRICE}</span>
                      <span className="text-xs text-slate-400 font-bold">/{isYearly ? 'yr' : 'mo'}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <span className="text-[11px] font-bold text-primary uppercase tracking-widest block mb-3">Everything Included:</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {ADDONS.map((addon) => (
                      <div key={addon.id} className="flex items-center gap-2.5 bg-slate-50 p-3 rounded-xl border border-slate-200">
                        <div className="w-4 h-4 rounded-full bg-emerald-500 text-slate-900 flex items-center justify-center shrink-0 shadow-sm">
                          <Check size={10} strokeWidth={3} />
                        </div>
                        <span className="font-semibold text-xs text-slate-700 truncate">{addon.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              /* Custom Feature Modular Marketplace Grid */
              <div className="space-y-3 animate-in fade-in zoom-in-95 duration-200">
                <div className="flex items-center justify-between text-slate-200 font-bold text-xs uppercase tracking-wider px-1">
                  <span className="flex items-center gap-1.5"><Zap size={14} className="text-primary" /> Mix & Match Core Modules</span>
                  <span className="text-slate-400 text-[11px] font-medium hidden sm:inline">Tap to choose</span>
                </div>
                
                <div>
                  {Object.entries(
                    ADDONS.reduce((acc, feature) => {
                      const cat = feature.category || 'Other';
                      if (!acc[cat]) acc[cat] = [];
                      acc[cat].push(feature);
                      return acc;
                    }, {} as Record<string, typeof ADDONS>)
                  ).map(([category, features]) => (
                    <div key={category} className="mb-6 last:mb-0">
                      <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 px-1 border-b border-slate-200 pb-2 flex items-center gap-2">
                        <Layers size={14} className="text-primary" />
                        {category}
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        {features.map((feature) => {
                          const isSelected = selectedFeatures.has(feature.id);
                          return (
                            <div 
                              key={feature.id}
                              onClick={() => toggleFeature(feature.id)}
                              className={cn(
                                "bg-white border rounded-2xl p-4 sm:p-5 transition-all duration-300 flex flex-col justify-between cursor-pointer select-none relative active:scale-[0.98] tap-highlight-transparent group",
                                isSelected 
                                  ? "border-primary shadow-md ring-1 ring-primary/20" 
                                  : "border-slate-200 hover:border-slate-300 shadow-sm"
                              )}
                            >
                              {/* Selected Indicator Glow Line */}
                              {isSelected && <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent shadow-md" />}

                              <div>
                                <div className="flex justify-between items-start gap-3 mb-2">
                                  <div>
                                    <h4 className="font-extrabold text-slate-900 text-sm sm:text-base leading-snug mt-1.5 transition-colors group-hover:text-primary">
                                      {feature.name}
                                    </h4>
                                  </div>
                                  
                                  {/* Tap Check Target Element */}
                                  <div className={cn(
                                    "w-5 h-5 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 shadow-inner mt-0.5",
                                    isSelected 
                                      ? "bg-primary border-primary text-slate-900 scale-110 shadow-primary/20" 
                                      : "border-slate-300 bg-slate-50"
                                  )}>
                                    {isSelected && <Check size={11} strokeWidth={3} />}
                                  </div>
                                </div>
                                
                                <p className="text-xs text-slate-400 leading-normal mb-4">
                                  {feature.description}
                                </p>
                              </div>

                              <div className="pt-3 border-t border-slate-200 flex items-center justify-between">
                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                                  <HelpCircle size={11} /> Multi-use
                                </span>
                                <div className="text-right">
                                  <span className="font-black text-slate-900 text-sm sm:text-base">₹{isYearly ? feature.price * 10 : feature.price}</span>
                                  <span className="text-[10px] text-slate-400 font-bold">/{isYearly ? 'yr' : 'mo'}</span>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>

        </div>

        {/* Inline Mobile-First Safe Sticky Billing Bar (Adapted for Landing Page) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-6 mb-12 bg-white/90 backdrop-blur-xl border border-slate-200 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] z-50 p-5 sm:p-6 transition-transform duration-300 relative overflow-hidden"
        >
          {/* Subtle glow behind calculator */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[100px] pointer-events-none rounded-full" />
          
          <div className="max-w-4xl mx-auto space-y-3 relative z-10">
            
            {/* Top Line: Setup & Itemized Fee Breakdown Pill */}
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-semibold text-slate-600 pb-2.5 border-b border-slate-200">
              <div className="flex items-center gap-2 min-w-0">
                <div className="w-6 h-6 rounded-lg bg-slate-100 flex items-center justify-center text-slate-500 border border-slate-200 shrink-0">
                  <ShoppingCart size={13} />
                </div>
                <span className="truncate">
                  {isAllAccess ? (
                    <span className="text-primary font-extrabold bg-primary/10 px-2 py-0.5 rounded-md">All-Access Pack</span>
                  ) : (
                    <span className="text-slate-400">{activeItems.length === 0 ? 'No modules selected' : `${activeItems.length} active module${activeItems.length !== 1 ? 's' : ''}`}</span>
                  )}
                </span>
              </div>

              {/* Itemized Calculation Summary Pill */}
              <div className="flex items-center gap-1.5 text-[10px] sm:text-xs text-slate-500 font-medium shrink-0 bg-slate-100 px-2.5 sm:px-3 py-1 rounded-lg border border-slate-200">
                <span>Base: <strong className="text-slate-900">₹{baseTotal.toFixed(2)}</strong></span>
                <span>+</span>
                <span>Payment Gateway: <strong className="text-slate-900">₹{(pgFee + gstFee).toFixed(2)}</strong></span>
              </div>
            </div>

            {/* Bottom Line: Total Payable & Action Callout */}
            <div className="flex items-center justify-between gap-4">
              <div className="min-w-0">
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest block leading-none">Total Payable Bill</span>
                <div className="flex items-baseline gap-1 mt-1">
                  <span className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">₹{grandTotal.toFixed(2)}</span>
                  <span className="text-xs sm:text-sm font-bold text-slate-400">/{isYearly ? 'yr' : 'mo'}</span>
                </div>
              </div>

              <a
                href="https://menukit.debuggerstechnologies.com/"
                className="bg-gradient-to-r from-orange-500 via-primary to-orange-600 hover:brightness-110 text-slate-900 px-6 sm:px-8 py-3 rounded-xl font-black shadow-lg shadow-orange-500/25 transition-all duration-200 flex items-center justify-center text-xs sm:text-sm active:scale-[0.97] touch-manipulation gap-2 uppercase tracking-wider shrink-0"
              >
                <Zap size={16} className="fill-white text-slate-900 animate-bounce" />
                <span>Get Started Now</span>
              </a>
            </div>

          </div>
        </motion.div>

      </div>
    </SectionWrapper>
  )
}
