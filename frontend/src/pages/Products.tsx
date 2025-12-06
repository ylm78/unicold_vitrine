import { Package, Snowflake, Lightbulb, DoorOpen, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Breadcrumb from '../components/Breadcrumb';

export default function Products() {
  const [activeFilter, setActiveFilter] = useState('all');

  const products = [
    {
      id: 'panneaux',
      name: 'Panneaux Sandwich',
      category: 'isolation',
      icon: Package,
      description: 'Panneaux isolants haute performance pour une isolation thermique optimale.',
      price: 'À partir de 45€/m²',
      link: '/produits/panneaux-sandwich',
      specs: 'Épaisseurs : 60-150mm | λ ≤ 0,022 W/(m.K)'
    },
    {
      id: 'compresseurs',
      name: 'Compresseurs',
      category: 'equipement',
      icon: Snowflake,
      description: 'Groupes frigorifiques puissants et fiables pour positif et négatif.',
      price: 'À partir de 1 200€',
      link: '/produits/compresseurs',
      specs: 'Puissance : 500W à 20kW | Classe A+++'
    },
    {
      id: 'portes',
      name: 'Portes Isothermes',
      category: 'accessoire',
      icon: DoorOpen,
      description: 'Portes isothermes coulissantes et battantes pour chambres froides.',
      price: 'À partir de 380€',
      link: '/produits/portes',
      specs: 'Coefficient U ≤ 0,8 W/(m².K) | IP65'
    },
    {
      id: 'luminaires',
      name: 'Luminaires LED 65W',
      category: 'accessoire',
      icon: Lightbulb,
      description: 'Éclairage professionnel LED basse consommation pour milieux frigorifiques.',
      price: 'À partir de 85€',
      link: '/produits/luminaires',
      specs: '6500 lumens | -30°C à +50°C | IP65'
    },
  ];

  const filteredProducts = activeFilter === 'all' 
    ? products 
    : products.filter(p => p.category === activeFilter);

  return (
    <div>
      <Breadcrumb items={[{ label: 'Produits' }]} />
      <section className="relative py-32 bg-white overflow-hidden border-b border-sky-500/10">
        {/* Lignes géométriques subtiles */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-sky-400 to-transparent"></div>
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-sky-400/50 to-transparent"></div>
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-sky-400 to-transparent"></div>
          <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-sky-400/50 to-transparent"></div>
        </div>
        {/* Accent lumineux subtil */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-sky-300/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-ice-400/5 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 text-slate-900">Nos Produits</h1>
          <p className="text-xl md:text-2xl text-slate-600/80 max-w-3xl mx-auto">
            Matériaux et équipements de qualité professionnelle pour vos chambres froides
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Filtres */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all ${
                activeFilter === 'all'
                  ? 'text-slate-900 shadow-[0_0_20px_rgba(249,115,22,0.4)]'
                  : 'glass-panel text-slate-600 hover:bg-white/10'
              }`}
              style={activeFilter === 'all' ? { backgroundColor: '#f97316' } : {}}
            >
              Tous les produits
            </button>
            <button
              onClick={() => setActiveFilter('isolation')}
              className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all ${
                activeFilter === 'isolation'
                  ? 'text-slate-900 shadow-[0_0_20px_rgba(249,115,22,0.4)]'
                  : 'glass-panel text-slate-600 hover:bg-white/10'
              }`}
              style={activeFilter === 'isolation' ? { backgroundColor: '#f97316' } : {}}
            >
              Isolation
            </button>
            <button
              onClick={() => setActiveFilter('equipement')}
              className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all ${
                activeFilter === 'equipement'
                  ? 'text-slate-900 shadow-[0_0_20px_rgba(249,115,22,0.4)]'
                  : 'glass-panel text-slate-600 hover:bg-white/10'
              }`}
              style={activeFilter === 'equipement' ? { backgroundColor: '#f97316' } : {}}
            >
              Équipements
            </button>
            <button
              onClick={() => setActiveFilter('accessoire')}
              className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all ${
                activeFilter === 'accessoire'
                  ? 'text-slate-900 shadow-[0_0_20px_rgba(249,115,22,0.4)]'
                  : 'glass-panel text-slate-600 hover:bg-white/10'
              }`}
              style={activeFilter === 'accessoire' ? { backgroundColor: '#f97316' } : {}}
            >
              Accessoires
            </button>
          </div>

          {/* Grille de produits */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product) => {
              const IconComponent = product.icon;
              return (
                <div key={product.id} className="glass-card p-8 rounded-2xl hover-lift group">
                  <div className="w-16 h-16 rounded-2xl bg-sky-300/10 flex items-center justify-center mb-6 text-sky-500 group-hover:scale-110 transition-transform">
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-slate-700 transition">
                    {product.name}
                  </h3>
                  <p className="text-slate-600/70 leading-relaxed mb-4">
                    {product.description}
                  </p>
                  <div className="mb-4">
                    <p className="text-xs text-slate-700/60 mb-2 font-semibold">Caractéristiques :</p>
                    <p className="text-xs text-slate-600/70">{product.specs}</p>
                  </div>
                  <p className="text-sm text-slate-700 font-bold mb-4">{product.price}</p>
                  
                  <div className="flex flex-col gap-2">
                    <Link
                      to={product.link}
                      className="flex items-center justify-center text-sky-500 font-semibold group-hover:text-slate-700 transition text-sm py-2"
                    >
                      Voir les détails <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                    <Link
                      to="/contact"
                      className="flex items-center justify-center text-slate-900 px-4 py-2 rounded-lg font-bold text-sm transition-all shadow-[0_0_15px_rgba(249,115,22,0.3)] hover:scale-105"
                      style={{ backgroundColor: '#f97316' }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#ea580c'}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#f97316'}
                    >
                      Demander un prix
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white to-sky-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-8">Besoin d'un devis ?</h2>
          <Link
            to="/contact"
            className="inline-flex items-center text-slate-900 px-10 py-4 rounded-xl font-bold text-lg transition-all shadow-[0_0_25px_rgba(249,115,22,0.5)] hover:scale-105"
            style={{ backgroundColor: '#f97316' }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#ea580c'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#f97316'}
          >
            Nous contacter
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}
