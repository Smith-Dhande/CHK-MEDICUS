import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout.jsx';

import Manufacturing from './pages/manufacturing/Manufacturing.jsx';
import ResearchDevelopment from './pages/rnd/ResearchDevelopment.jsx';
import Gallery from './pages/gallery/Gallery.jsx';

// Lazy loading all page components for code-splitting and optimization
const Home = lazy(() => import('./pages/home/Home.jsx'));
const About = lazy(() => import('./pages/about/About.jsx'));
const Products = lazy(() => import('./pages/products/Products.jsx'));
const ProductDetails = lazy(() => import('./pages/products/ProductDetails.jsx'));
const QualityAssurance = lazy(() => import('./pages/quality/QualityAssurance.jsx'));
const Certifications = lazy(() => import('./pages/certifications/Certifications.jsx'));
const News = lazy(() => import('./pages/news/News.jsx'));
const Careers = lazy(() => import('./pages/careers/Careers.jsx'));
const Contact = lazy(() => import('./pages/contact/Contact.jsx'));
const NotFound = lazy(() => import('./pages/contact/NotFound.jsx')); // 404 Page

// Simple fallback loading indicator during route resolves
const RouteLoader = () => (
  <div className="min-h-[60vh] flex items-center justify-center">
    <div className="h-10 w-10 border-4 border-slate-200 border-t-medical rounded-full animate-spin"></div>
  </div>
);

export default function App() {
  return (
    <Router>
      <Layout>
        <Suspense fallback={<RouteLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:slug" element={<ProductDetails />} />
            <Route path="/manufacturing" element={<Manufacturing />} />
            <Route path="/quality-assurance" element={<QualityAssurance />} />
            <Route path="/research-development" element={<ResearchDevelopment />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/news" element={<News />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
}
