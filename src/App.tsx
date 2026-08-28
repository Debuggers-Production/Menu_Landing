import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { HelmetProvider } from 'react-helmet-async';

// Lazy load all pages for significantly faster initial load
const LandingPage = lazy(() => import('./pages/LandingPage').then(module => ({ default: module.LandingPage })));
const DocsLayout = lazy(() => import('./layouts/DocsLayout').then(module => ({ default: module.DocsLayout })));
const DocsIndexPage = lazy(() => import('./pages/docs/DocsIndexPage').then(module => ({ default: module.DocsIndexPage })));
const CustomerExperienceArticle = lazy(() => import('./pages/docs/CustomerExperienceArticle').then(module => ({ default: module.CustomerExperienceArticle })));
const ExploreLayout = lazy(() => import('./layouts/ExploreLayout').then(module => ({ default: module.ExploreLayout })));
const ExplorePage = lazy(() => import('./pages/explore/ExplorePage').then(module => ({ default: module.ExplorePage })));
const StorePage = lazy(() => import('./pages/explore/StorePage').then(module => ({ default: module.StorePage })));
const RestaurantMenuProblemsArticle = lazy(() => import('./pages/docs/RestaurantMenuProblemsArticle').then(module => ({ default: module.RestaurantMenuProblemsArticle })));
const CustomerRetentionArticle = lazy(() => import('./pages/docs/CustomerRetentionArticle').then(module => ({ default: module.CustomerRetentionArticle })));
const DigitalMenuGuideArticle = lazy(() => import('./pages/docs/DigitalMenuGuideArticle').then(module => ({ default: module.DigitalMenuGuideArticle })));
const QrMenuBenefitsArticle = lazy(() => import('./pages/docs/QrMenuBenefitsArticle').then(module => ({ default: module.QrMenuBenefitsArticle })));
const FeedbackManagementArticle = lazy(() => import('./pages/docs/FeedbackManagementArticle').then(module => ({ default: module.FeedbackManagementArticle })));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage').then(module => ({ default: module.PrivacyPolicyPage })));
const TermsOfServicePage = lazy(() => import('./pages/TermsOfServicePage').then(module => ({ default: module.TermsOfServicePage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then(module => ({ default: module.ContactPage })));

// SEO Routes
const FeaturesPage = lazy(() => import('./pages/FeaturesPage').then(module => ({ default: module.FeaturesPage })));
const HowItWorksPage = lazy(() => import('./pages/HowItWorksPage').then(module => ({ default: module.HowItWorksPage })));
const DemoPage = lazy(() => import('./pages/DemoPage').then(module => ({ default: module.DemoPage })));
const PricingPage = lazy(() => import('./pages/PricingPage').then(module => ({ default: module.PricingPage })));

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-slate-50">
    <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
  </div>
);

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter basename="/menukit">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/how-it-works" element={<HowItWorksPage />} />
            <Route path="/demo" element={<DemoPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/privacy" element={<PrivacyPolicyPage />} />
            <Route path="/terms" element={<TermsOfServicePage />} />
            <Route path="/contact" element={<ContactPage />} />
        
        <Route path="/docs" element={<DocsLayout />}>
          <Route index element={<DocsIndexPage />} />
          <Route path="restaurant-customer-experience" element={<CustomerExperienceArticle />} />
          <Route path="restaurant-menu-problems" element={<RestaurantMenuProblemsArticle />} />
          <Route path="customer-retention-for-restaurants" element={<CustomerRetentionArticle />} />
          <Route path="why-restaurants-lose-customers" element={<CustomerExperienceArticle />} />
          <Route path="digital-menu-guide" element={<DigitalMenuGuideArticle />} />
          <Route path="restaurant-growth-guide" element={<CustomerRetentionArticle />} />
          <Route path="qr-menu-benefits" element={<QrMenuBenefitsArticle />} />
          <Route path="restaurant-feedback-management" element={<FeedbackManagementArticle />} />
          <Route path="*" element={<Navigate to="/docs" replace />} />
        </Route>

        {/* Explore and Store Routes */}
        <Route element={<ExploreLayout />}>
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/explore/:city" element={<ExplorePage />} />
          <Route path="/explore/:city/:category" element={<ExplorePage />} />
          <Route path="/store/:slug" element={<StorePage />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      </Suspense>
    </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
