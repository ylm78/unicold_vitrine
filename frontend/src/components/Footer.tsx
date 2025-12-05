import { Phone, Mail, MapPin, Snowflake } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo/Logo-unicold.png';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/5 py-12 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
          <div className="flex items-center gap-2">
            <Snowflake className="h-6 w-6 text-ice-600" />
            <img
              src={logo}
              alt="Unicold"
              className="h-10 mix-blend-lighten brightness-110"
            />
            <span className="font-display font-bold text-xl text-white">UNI<span className="text-ice-600">COLD</span></span>
          </div>
          <div className="text-ice-200/40 text-sm">
            © 2025 Unicold.fr - Tous droits réservés
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-8 md:gap-12 mb-8">
          <div>
            <p className="text-ice-200/60 text-sm leading-relaxed">
              Votre expert en chambres froides professionnelles depuis plus de 15 ans.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Navigation</h3>
            <ul className="space-y-3 text-ice-200/60 text-sm">
              <li><Link to="/" className="hover:text-ice-400 transition">Accueil</Link></li>
              <li><Link to="/services" className="hover:text-ice-400 transition">Services</Link></li>
              <li><Link to="/produits" className="hover:text-ice-400 transition">Produits</Link></li>
              <li><Link to="/realisations" className="hover:text-ice-400 transition">Réalisations</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Informations</h3>
            <ul className="space-y-3 text-ice-200/60 text-sm">
              <li><Link to="/a-propos" className="hover:text-ice-400 transition">À Propos</Link></li>
              <li><Link to="/faq" className="hover:text-ice-400 transition">FAQ</Link></li>
              <li><Link to="/contact" className="hover:text-ice-400 transition">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Contact</h3>
            <ul className="space-y-4 text-ice-200/60 text-sm">
              <li className="flex items-center space-x-3 hover:text-ice-400 transition">
                <div className="bg-ice-500/10 p-2 rounded-lg">
                  <Phone className="w-4 h-4 text-ice-400" />
                </div>
                <a href="tel:0662649421" className="hover:underline">06 62 64 94 21</a>
              </li>
              <li className="flex items-center space-x-3 hover:text-ice-400 transition">
                <div className="bg-ice-500/10 p-2 rounded-lg">
                  <Mail className="w-4 h-4 text-ice-400" />
                </div>
                <a href="mailto:unicold.info@gmail.com" className="hover:underline">unicold.info@gmail.com</a>
              </li>
              <li className="flex items-center space-x-3">
                <div className="bg-ice-500/10 p-2 rounded-lg">
                  <MapPin className="w-4 h-4 text-ice-400" />
                </div>
                <span>France</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
