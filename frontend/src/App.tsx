import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import Home from './pages/Home';
import Services from './pages/Services';
import Products from './pages/Products';
import Realisations from './pages/Realisations';
import About from './pages/About';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import PanneauxSandwich from './pages/products/PanneauxSandwich';
import Compresseurs from './pages/products/Compresseurs';
import Portes from './pages/products/Portes';
import Luminaires from './pages/products/Luminaires';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-950 flex flex-col">
        <CustomCursor />
        <Header />
        <main className="flex-grow">
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
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
