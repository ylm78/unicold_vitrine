import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import MobileActionBar from './components/MobileActionBar';

// Lazy load des pages pour le code splitting
const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));
const Products = lazy(() => import('./pages/Products'));
const Realisations = lazy(() => import('./pages/Realisations'));
const About = lazy(() => import('./pages/About'));
const FAQ = lazy(() => import('./pages/FAQ'));
const Contact = lazy(() => import('./pages/Contact'));
const MentionsLegales = lazy(() => import('./pages/MentionsLegales'));
const Depannage = lazy(() => import('./pages/Depannage'));
const AidesFinancement = lazy(() => import('./pages/AidesFinancement'));
const Restauration = lazy(() => import('./pages/metiers/Restauration'));
const Industrie = lazy(() => import('./pages/metiers/Industrie'));
const Medical = lazy(() => import('./pages/metiers/Medical'));
const PanneauxSandwich = lazy(() => import('./pages/products/PanneauxSandwich'));
const Compresseurs = lazy(() => import('./pages/products/Compresseurs'));
const Portes = lazy(() => import('./pages/products/Portes'));
const Luminaires = lazy(() => import('./pages/products/Luminaires'));

// Composant de chargement
const LoadingFallback = () => (
  <div className="min-h-screen bg-slate-950 flex items-center justify-center">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-ice-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-ice-300">Chargement...</p>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-950 flex flex-col">
        <CustomCursor />
        <Header />
        <main className="flex-grow">
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/produits" element={<Products />} />
              <Route path="/produits/panneaux-sandwich" element={<PanneauxSandwich />} />
              <Route path="/produits/compresseurs" element={<Compresseurs />} />
              <Route path="/produits/portes" element={<Portes />} />
              <Route path="/produits/luminaires" element={<Luminaires />} />
              <Route path="/realisations" element={<Realisations />} />
              <Route path="/a-propos" element={<About />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/depannage" element={<Depannage />} />
              <Route path="/aides-financement" element={<AidesFinancement />} />
              <Route path="/solutions/restauration" element={<Restauration />} />
              <Route path="/solutions/industrie" element={<Industrie />} />
              <Route path="/solutions/medical" element={<Medical />} />
              <Route path="/mentions-legales" element={<MentionsLegales />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <MobileActionBar />
      </div>
    </Router>
  );
}

export default App;
