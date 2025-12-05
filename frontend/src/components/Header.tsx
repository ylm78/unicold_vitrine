import { Menu, X, Snowflake } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import logo from '../assets/logo/Logo-unicold.png';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: '/', label: 'Accueil' },
    { path: '/services', label: 'Services' },
    { path: '/produits', label: 'Produits' },
    { path: '/realisations', label: 'Réalisations' },
    { path: '/a-propos', label: 'À Propos' },
    { path: '/faq', label: 'FAQ' },
    { path: '/contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 top-0 transition-all duration-300 ${
        scrolled ? 'glass-panel py-2' : 'py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link
            to="/"
            className="flex-shrink-0 flex items-center gap-2 group"
          >
            <Snowflake className="h-8 w-8 text-ice-400 group-hover:rotate-180 transition-transform duration-700" />
            <img
              src={logo}
              alt="Unicold logo"
              className="h-10 w-auto object-contain mix-blend-lighten brightness-110"
            />
            <span className="font-display font-bold text-2xl tracking-wider text-white">
              UNI<span className="text-ice-400">COLD</span>
            </span>
          </Link>

          <div className="hidden xl:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`hover:text-ice-300 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive(link.path) ? 'text-ice-300' : 'text-gray-300'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="bg-ice-600 hover:bg-ice-500 text-white px-5 py-2 rounded-full text-sm font-medium transition-all shadow-[0_0_15px_rgba(14,165,233,0.3)]"
              >
                Contact
              </Link>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden inline-flex items-center justify-center p-2 rounded-md text-ice-200 hover:text-white hover:bg-white/10 focus:outline-none"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="xl:hidden glass-panel absolute w-full animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white/10 ${
                  isActive(link.path) ? 'bg-white/10' : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-ice-400 font-bold"
            >
              Devis Gratuit
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
