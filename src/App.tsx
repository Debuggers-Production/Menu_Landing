import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { DocsLayout } from './layouts/DocsLayout';
import { DocsIndexPage } from './pages/docs/DocsIndexPage';
import { CustomerExperienceArticle } from './pages/docs/CustomerExperienceArticle';
import { ExploreLayout } from './layouts/ExploreLayout';
import { ExplorePage } from './pages/explore/ExplorePage';
import { StorePage } from './pages/explore/StorePage';
import { HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter basename="/landing">
        <Routes>
        <Route path="/" element={<LandingPage />} />
        
        <Route path="/docs" element={<DocsLayout />}>
          <Route index element={<DocsIndexPage />} />
          <Route path="restaurant-customer-experience" element={<CustomerExperienceArticle />} />
          {/* Catch-all for other requested docs routes to point to the index or main article for now */}
          <Route path="restaurant-menu-problems" element={<Navigate to="/docs/restaurant-customer-experience" replace />} />
          <Route path="customer-retention-for-restaurants" element={<Navigate to="/docs/restaurant-customer-experience" replace />} />
          <Route path="why-restaurants-lose-customers" element={<Navigate to="/docs/restaurant-customer-experience" replace />} />
          <Route path="digital-menu-guide" element={<Navigate to="/docs/restaurant-customer-experience" replace />} />
          <Route path="restaurant-growth-guide" element={<Navigate to="/docs/restaurant-customer-experience" replace />} />
          <Route path="qr-menu-benefits" element={<Navigate to="/docs/restaurant-customer-experience" replace />} />
          <Route path="restaurant-feedback-management" element={<Navigate to="/docs/restaurant-customer-experience" replace />} />
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
