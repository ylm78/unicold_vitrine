import { Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo/Logo-unicold.png';


export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 md:gap-12 mb-12">
          <div>
            <div className="mb-6">
              <img
                src={logo}
                alt="Unicold"
                className="h-12 mix-blend-lighten brightness-110 drop-shadow-lg"
              />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Votre expert en chambres froides professionnelles depuis plus de 15 ans.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Navigation</h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li><Link to="/" className="hover:text-unicold-blue-400 transition hover:translate-x-1 inline-block">Accueil</Link></li>
              <li><Link to="/services" className="hover:text-unicold-blue-400 transition hover:translate-x-1 inline-block">Services</Link></li>
              <li><Link to="/produits" className="hover:text-unicold-blue-400 transition hover:translate-x-1 inline-block">Produits</Link></li>
              <li><Link to="/realisations" className="hover:text-unicold-blue-400 transition hover:translate-x-1 inline-block">Réalisations</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Informations</h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li><Link to="/a-propos" className="hover:text-unicold-blue-400 transition hover:translate-x-1 inline-block">À Propos</Link></li>
              <li><Link to="/faq" className="hover:text-unicold-blue-400 transition hover:translate-x-1 inline-block">FAQ</Link></li>
              <li><Link to="/contact" className="hover:text-unicold-blue-400 transition hover:translate-x-1 inline-block">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Contact</h3>
            <ul className="space-y-4 text-gray-300 text-sm">
              <li className="flex items-center space-x-3 hover:text-unicold-blue-400 transition">
                <div className="bg-unicold-blue-600/20 p-2 rounded-lg">
                  <Phone className="w-4 h-4 text-unicold-blue-400" />
                </div>
                <a href="tel:0662649421" className="hover:underline">06 62 64 94 21</a>
              </li>
              <li className="flex items-center space-x-3 hover:text-unicold-blue-400 transition">
                <div className="bg-unicold-blue-600/20 p-2 rounded-lg">
                  <Mail className="w-4 h-4 text-unicold-blue-400" />
                </div>
                <a href="mailto:unicold.info@gmail.com" className="hover:underline">unicold.info@gmail.com</a>
              </li>
              <li className="flex items-center space-x-3">
                <div className="bg-unicold-blue-600/20 p-2 rounded-lg">
                  <MapPin className="w-4 h-4 text-unicold-blue-400" />
                </div>
                <span>France</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Unicold.fr - Tous droits réservés
          </p>
        </div>
      </div>
    </footer>
  );
}
