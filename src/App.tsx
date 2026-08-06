import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { DocsLayout } from './layouts/DocsLayout';
import { DocsIndexPage } from './pages/docs/DocsIndexPage';
import { CustomerExperienceArticle } from './pages/docs/CustomerExperienceArticle';
import { ExploreLayout } from './layouts/ExploreLayout';
import { ExplorePage } from './pages/explore/ExplorePage';
import { StorePage } from './pages/explore/StorePage';
import { HelmetProvider } from 'react-helmet-async';

import { RestaurantMenuProblemsArticle } from './pages/docs/RestaurantMenuProblemsArticle';
import { CustomerRetentionArticle } from './pages/docs/CustomerRetentionArticle';
import { DigitalMenuGuideArticle } from './pages/docs/DigitalMenuGuideArticle';
import { QrMenuBenefitsArticle } from './pages/docs/QrMenuBenefitsArticle';
import { FeedbackManagementArticle } from './pages/docs/FeedbackManagementArticle';
function App() {
  return (
    <HelmetProvider>
      <BrowserRouter basename="/landing">
        <Routes>
        <Route path="/" element={<LandingPage />} />
        
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
    </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
