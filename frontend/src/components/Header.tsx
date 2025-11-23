import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import logo from '../assets/logo/Logo-unicold.png';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { path: '/', label: 'Accueil' },
    { path: '/services', label: 'Services' },
    { path: '/produits', label: 'Produits' },
    { path: '/realisations', label: 'Réalisations' },
    { path: '/a-propos', label: 'À Propos' },
    { path: '/faq', label: 'FAQ' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 py-4">

        {/* ✅ On rend le nav "relative" pour positionner le logo au centre */}
        <nav className="relative flex items-center justify-between">

          {/* === 1️⃣ TEXTE UNICOLD À GAUCHE === */}
          <Link to="/" className="flex items-center hover:opacity-90 transition-transform hover:scale-105">
            <span
              className="text-3xl font-bold bg-gradient-to-r from-unicold-blue-600 to-unicold-blue-700 bg-clip-text text-transparent"
              style={{ fontFamily: 'ArTeks, Arial, sans-serif' }}
            >
              Unicold
            </span>
          </Link>

          {/* === 2️⃣ LOGO IMAGE CENTRÉ === */}
          <Link
            to="/"
            className="absolute left-1/2 transform -translate-x-1/2 hover:opacity-90 transition-transform hover:scale-110"
          >
            <img
              src={logo}
              alt="Unicold logo"
              className="h-14 w-auto object-contain drop-shadow-lg"
            />
          </Link>

          {/* === 3️⃣ MENU NAVIGATION À DROITE === */}
          <div className="hidden lg:flex space-x-8 ml-auto">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative hover:text-unicold-blue-600 transition-all font-semibold text-gray-700 py-2 ${
                  isActive(link.path)
                    ? 'text-unicold-blue-600'
                    : 'hover:scale-105'
                }`}
              >
                {link.label}
                {isActive(link.path) && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-unicold-blue-500 to-unicold-blue-700 rounded-full"></span>
                )}
              </Link>
            ))}
          </div>

          {/* === 4️⃣ BOUTON MOBILE (menu burger) === */}
          <button
            className="lg:hidden text-gray-700 ml-auto p-2 rounded-lg hover:bg-gray-100 transition"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* === 5️⃣ MENU MOBILE DÉROULANT === */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200 pt-4 animate-fade-in">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`hover:text-unicold-blue-600 transition-all font-semibold text-gray-700 py-2 px-4 rounded-lg hover:bg-unicold-blue-50 ${
                    isActive(link.path) ? 'text-unicold-blue-600 bg-unicold-blue-50' : ''
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
