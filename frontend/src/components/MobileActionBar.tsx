import { Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function MobileActionBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <div className="bg-slate-950/95 backdrop-blur-lg border-t border-white/10 shadow-[0_-4px_20px_rgba(0,0,0,0.3)]">
        <div className="grid grid-cols-2 gap-2 p-3">
          <a
            href="tel:0172541360"
            className="flex items-center justify-center gap-2 text-white font-bold py-4 px-4 rounded-xl transition-all active:scale-95 shadow-lg"
            style={{ backgroundColor: '#f97316' }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#ea580c'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#f97316'}
          >
            <Phone className="w-5 h-5" />
            <span>Appeler</span>
          </a>
          <Link
            to="/contact"
            className="flex items-center justify-center gap-2 bg-ice-600 hover:bg-ice-500 text-white font-bold py-4 px-4 rounded-xl transition-all active:scale-95 shadow-lg"
          >
            <Mail className="w-5 h-5" />
            <span>Devis</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

