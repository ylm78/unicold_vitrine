import { Phone, Mail, MapPin, Snowflake } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo/Logo-unicold.png';

export default function Footer() {
  return (
    <footer className="bg-sky-50 border-t border-sky-200 py-8 md:py-12 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, #0ea5e9 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6 mb-6 md:mb-8">
          <div className="flex items-center gap-1.5 md:gap-2">
            <Snowflake className="h-5 w-5 md:h-6 md:w-6 text-sky-500" />
            <img
              src={logo}
              alt="Unicold"
              className="h-8 md:h-10"
            />
            <span className="font-display font-bold text-lg md:text-xl text-slate-900">UNI<span className="text-sky-500">COLD</span></span>
          </div>
          <div className="text-slate-500 text-xs md:text-sm text-center md:text-left">
            <p>© 2025 Unicold.fr - Tous droits réservés</p>
            <p className="mt-1 md:mt-2">SIRET : 881 522 296 00014</p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 lg:gap-12 mb-6 md:mb-8">
          <div>
            <p className="text-slate-600 text-sm leading-relaxed">
              Votre expert en chambres froides professionnelles depuis plus de 15 ans.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-base md:text-lg mb-4 md:mb-6 text-slate-900">Navigation</h3>
            <ul className="space-y-2 md:space-y-3 text-slate-600 text-xs md:text-sm">
              <li><Link to="/" className="hover:text-sky-500 transition">Accueil</Link></li>
              <li><Link to="/services" className="hover:text-sky-500 transition">Services</Link></li>
              <li><Link to="/produits" className="hover:text-sky-500 transition">Produits</Link></li>
              <li><Link to="/realisations" className="hover:text-sky-500 transition">Réalisations</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-base md:text-lg mb-4 md:mb-6 text-slate-900">Informations</h3>
            <ul className="space-y-2 md:space-y-3 text-slate-600 text-xs md:text-sm">
              <li><Link to="/a-propos" className="hover:text-sky-500 transition">À Propos</Link></li>
              <li><Link to="/faq" className="hover:text-sky-500 transition">FAQ</Link></li>
              <li><Link to="/contact" className="hover:text-sky-500 transition">Contact</Link></li>
              <li><Link to="/mentions-legales" className="hover:text-sky-500 transition">Mentions Légales</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-base md:text-lg mb-4 md:mb-6 text-slate-900">Contact</h3>
            <ul className="space-y-3 md:space-y-4 text-slate-600 text-xs md:text-sm">
              <li className="flex items-center space-x-3 hover:text-sky-500 transition">
                <div className="bg-sky-100 p-2 rounded-lg">
                  <Phone className="w-4 h-4 text-sky-500" />
                </div>
                <div>
                  <a href="tel:+33172541360" className="hover:underline block">+33 1 72 54 13 60</a>
                  <span className="text-xs text-emerald-500">(Gratuit)</span>
                </div>
              </li>
              <li className="flex items-center space-x-3 hover:text-sky-500 transition">
                <div className="bg-sky-100 p-2 rounded-lg">
                  <Phone className="w-4 h-4 text-sky-500" />
                </div>
                <a href="tel:+33662649421" className="hover:underline">+33 6 62 64 94 21</a>
              </li>
              <li className="flex items-center space-x-3 hover:text-sky-500 transition">
                <div className="bg-sky-100 p-2 rounded-lg">
                  <Mail className="w-4 h-4 text-sky-500" />
                </div>
                <div>
                  <a href="mailto:devis@unicold.fr" className="hover:underline block text-xs">devis@unicold.fr</a>
                  <a href="mailto:contact@unicold.fr" className="hover:underline block text-xs">contact@unicold.fr</a>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <div className="bg-sky-100 p-2 rounded-lg">
                  <MapPin className="w-4 h-4 text-sky-500" />
                </div>
                <span>France IDF et Eure-et-Loir (28)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
