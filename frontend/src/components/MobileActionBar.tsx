import { Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function MobileActionBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <div className="bg-white/95 backdrop-blur-lg border-t border-sky-200 shadow-[0_-4px_20px_rgba(14,165,233,0.1)]">
        <div className="grid grid-cols-2 gap-2 p-3">
          <a
            href="tel:+33172541360"
            className="flex items-center justify-center gap-2 text-white font-bold py-4 px-4 rounded-xl transition-all active:scale-95 shadow-lg"
            style={{ backgroundColor: '#f97316' }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#ea580c'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#f97316'}
          >
            <Phone className="w-5 h-5" />
            <span>Appeler</span>
          </a>
          <Link
            to="/devis"
            className="flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-600 text-white font-bold py-4 px-4 rounded-xl transition-all active:scale-95 shadow-lg"
          >
            <Mail className="w-5 h-5" />
            <span>Devis</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

