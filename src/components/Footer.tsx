import { Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="mb-4">
              <img
                src="/unicold-logo-removebg-preview.png"
                alt="Unicold"
                className="h-10 mix-blend-lighten brightness-110"
              />
            </div>
            <p className="text-gray-400 text-sm">
              Votre expert en chambres froides professionnelles depuis plus de 15 ans.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Navigation</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link to="/" className="hover:text-unicold-blue-400 transition">Accueil</Link></li>
              <li><Link to="/services" className="hover:text-unicold-blue-400 transition">Services</Link></li>
              <li><Link to="/produits" className="hover:text-unicold-blue-400 transition">Produits</Link></li>
              <li><Link to="/realisations" className="hover:text-unicold-blue-400 transition">Réalisations</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Informations</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link to="/a-propos" className="hover:text-unicold-blue-400 transition">À Propos</Link></li>
              <li><Link to="/faq" className="hover:text-unicold-blue-400 transition">FAQ</Link></li>
              <li><Link to="/contact" className="hover:text-unicold-blue-400 transition">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>01 XX XX XX XX</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>contact@unicold.fr</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>France</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 text-center text-gray-400 text-sm">
          © 2025 Unicold.fr - Tous droits réservés
        </div>
      </div>
    </footer>
  );
}
