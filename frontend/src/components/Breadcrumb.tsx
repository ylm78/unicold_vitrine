import { ChevronRight, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="bg-slate-950/50 border-b border-white/5 py-4" aria-label="Breadcrumb">
      <div className="max-w-7xl mx-auto px-4">
        <ol className="flex items-center space-x-2 text-sm">
          <li>
            <Link to="/" className="text-ice-300 hover:text-ice-400 transition flex items-center">
              <Home className="w-4 h-4" />
            </Link>
          </li>
          {items.map((item, index) => (
            <li key={index} className="flex items-center">
              <ChevronRight className="w-4 h-4 text-ice-400/50 mx-2" />
              {item.path ? (
                <Link
                  to={item.path}
                  className="text-ice-300 hover:text-ice-400 transition"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-ice-200 font-semibold">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}

