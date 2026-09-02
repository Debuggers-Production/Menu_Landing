import { useState, useEffect, useCallback } from 'react';
import { APP_CONFIG } from '../config';

export interface SupportedCountry {
  code: string;
  name: string;
  currency: string;
  symbol: string;
  flag: string;
}

export interface PricingModule {
  id: string;
  name: string;
  price: number;
  monthly_price: number;
  yearly_price: number;
  currency: string;
  currency_symbol: string;
  description: string;
  category: string;
}

export interface AllAccessPlan {
  name: string;
  price: number;
  monthly_price: number;
  yearly_price: number;
  currency: string;
  currency_symbol: string;
  description: string;
}

export interface GlobalPricingData {
  country: SupportedCountry;
  supportedCountries: SupportedCountry[];
  allAccess: AllAccessPlan;
  modules: PricingModule[];
  billingCycle: 'monthly' | 'yearly';
  setBillingCycle: (cycle: 'monthly' | 'yearly') => void;
  selectedCountryCode: string;
  setSelectedCountryCode: (code: string) => void;
  isLoading: boolean;
  error: string | null;
  refreshPricing: () => Promise<void>;
}

const DEFAULT_SUPPORTED_COUNTRIES: SupportedCountry[] = [
  { code: 'IN', name: 'India', currency: 'INR', symbol: '₹', flag: '🇮🇳' },
  { code: 'US', name: 'United States', currency: 'USD', symbol: '$', flag: '🇺🇸' },
  { code: 'GB', name: 'United Kingdom', currency: 'GBP', symbol: '£', flag: '🇬🇧' },
  { code: 'AU', name: 'Australia', currency: 'AUD', symbol: 'A$', flag: '🇦🇺' },
  { code: 'CA', name: 'Canada', currency: 'CAD', symbol: 'C$', flag: '🇨🇦' },
  { code: 'OTHER', name: 'International / Other', currency: 'USD', symbol: '$', flag: '🌎' },
];

export function useGlobalPricing(): GlobalPricingData {
  const [selectedCountryCode, setSelectedCountryCodeState] = useState<string>(() => {
    try {
      return localStorage.getItem('menukit_selected_country') || '';
    } catch {
      return '';
    }
  });

  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [country, setCountry] = useState<SupportedCountry>(DEFAULT_SUPPORTED_COUNTRIES[0]);
  const [supportedCountries, setSupportedCountries] = useState<SupportedCountry[]>(DEFAULT_SUPPORTED_COUNTRIES);
  
  const [allAccess, setAllAccess] = useState<AllAccessPlan>({
    name: 'All-Access VIP Pass',
    price: 399,
    monthly_price: 399,
    yearly_price: 3990,
    currency: 'INR',
    currency_symbol: '₹',
    description: 'Unlock everything — all current and future modules included without restrictions.',
  });

  const [modules, setModules] = useState<PricingModule[]>([
    {
      id: 'online-orders',
      name: 'Online Visibility & Orders Accept',
      price: 129,
      monthly_price: 129,
      yearly_price: 1290,
      currency: 'INR',
      currency_symbol: '₹',
      description: 'Accept online delivery & takeaway orders directly with live online menu visibility.',
      category: 'Online Ordering',
    },
    {
      id: 'member-count',
      name: 'New Member Count',
      price: 99,
      monthly_price: 99,
      yearly_price: 990,
      currency: 'INR',
      currency_symbol: '₹',
      description: 'Track how many new members/customers join every month seamlessly.',
      category: 'Relationship Marketing',
    },
    {
      id: 'member-details',
      name: 'New Member + Details',
      price: 129,
      monthly_price: 129,
      yearly_price: 1290,
      currency: 'INR',
      currency_symbol: '₹',
      description: 'Store and manage deep customer information along with member growth metrics.',
      category: 'Relationship Marketing',
    },
    {
      id: 'search-data',
      name: 'Customer Search Data',
      price: 69,
      monthly_price: 69,
      yearly_price: 690,
      currency: 'INR',
      currency_symbol: '₹',
      description: 'Access search analytics and real-time customer interest insights.',
      category: 'Marketing',
    },
    {
      id: 'custom-theme',
      name: 'Custom Theme Studio',
      price: 69,
      monthly_price: 69,
      yearly_price: 690,
      currency: 'INR',
      currency_symbol: '₹',
      description: 'Customize colors, logos, and custom branding of your digital menu.',
      category: 'Branding',
    },
    {
      id: 'analytics-advanced',
      name: 'Advanced Analytics',
      price: 129,
      monthly_price: 129,
      yearly_price: 1290,
      currency: 'INR',
      currency_symbol: '₹',
      description: 'Unlock 7-day, 30-day, Custom Date range filters, and detailed customer insights reports.',
      category: 'Analytics',
    },
  ]);

  const setSelectedCountryCode = useCallback((code: string) => {
    setSelectedCountryCodeState(code);
    try {
      localStorage.setItem('menukit_selected_country', code);
    } catch {}
  }, []);

  const fetchPricing = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const url = new URL(`${APP_CONFIG.API_URL}/subscription/pricing`);
      if (selectedCountryCode) {
        url.searchParams.append('country', selectedCountryCode);
      }
      url.searchParams.append('billing_cycle', billingCycle);

      const res = await fetch(url.toString(), {
        headers: {
          'Accept': 'application/json',
        },
      });

      if (!res.ok) {
        throw new Error(`Failed to fetch pricing: ${res.statusText}`);
      }

      const data = await res.json();
      if (data.country) {
        setCountry({
          code: data.country.code,
          name: data.country.name,
          currency: data.country.currency,
          symbol: data.country.currency_symbol || data.country.symbol,
          flag: data.country.flag,
        });
      }

      if (data.supported_countries && Array.isArray(data.supported_countries)) {
        setSupportedCountries(data.supported_countries);
      }

      if (data.all_access) {
        setAllAccess(data.all_access);
      }

      if (data.modules && Array.isArray(data.modules)) {
        setModules(data.modules);
      }
    } catch (err: any) {
      console.warn('Could not fetch dynamic pricing from backend, using fallback:', err);
      setError(err.message || 'Failed to load pricing');
    } finally {
      setIsLoading(false);
    }
  }, [selectedCountryCode, billingCycle]);

  useEffect(() => {
    fetchPricing();
  }, [fetchPricing]);

  return {
    country,
    supportedCountries,
    allAccess,
    modules,
    billingCycle,
    setBillingCycle,
    selectedCountryCode,
    setSelectedCountryCode,
    isLoading,
    error,
    refreshPricing: fetchPricing,
  };
}
