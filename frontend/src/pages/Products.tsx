import { Package, Snowflake, Lightbulb, DoorOpen, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Products() {
  return (
    <div>
      <section className="relative py-32 bg-slate-950 overflow-hidden border-b border-ice-500/10">
        {/* Lignes géométriques subtiles */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-ice-400 to-transparent"></div>
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-ice-400/50 to-transparent"></div>
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-ice-400 to-transparent"></div>
          <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-ice-400/50 to-transparent"></div>
        </div>
        {/* Accent lumineux subtil */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-ice-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-ice-400/5 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 text-white">Nos Produits</h1>
          <p className="text-xl md:text-2xl text-ice-100/80 max-w-3xl mx-auto">
            Matériaux et équipements de qualité professionnelle pour vos chambres froides
          </p>
        </div>
      </section>

      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link to="/produits/panneaux-sandwich" className="glass-card p-8 rounded-2xl hover-lift group">
              <div className="w-16 h-16 rounded-2xl bg-ice-500/10 flex items-center justify-center mb-6 text-ice-400 group-hover:scale-110 transition-transform">
                <Package className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-ice-300 transition">Panneaux Sandwich</h3>
              <p className="text-ice-200/70 leading-relaxed mb-4">
                Panneaux isolants haute performance pour une isolation thermique optimale.
              </p>
              <div className="flex items-center text-ice-400 font-semibold group-hover:translate-x-2 transition">
                En savoir plus <ArrowRight className="w-5 h-5 ml-2" />
              </div>
              <p className="text-sm text-ice-300/60 mt-2">À partir de 45€/m²</p>
            </Link>

            <Link to="/produits/compresseurs" className="glass-card p-8 rounded-2xl hover-lift group">
              <div className="w-16 h-16 rounded-2xl bg-ice-500/10 flex items-center justify-center mb-6 text-ice-400 group-hover:scale-110 transition-transform">
                <Snowflake className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-ice-300 transition">Compresseurs</h3>
              <p className="text-ice-200/70 leading-relaxed mb-4">
                Groupes frigorifiques puissants et fiables pour positif et négatif.
              </p>
              <div className="flex items-center text-ice-400 font-semibold group-hover:translate-x-2 transition">
                En savoir plus <ArrowRight className="w-5 h-5 ml-2" />
              </div>
              <p className="text-sm text-ice-300/60 mt-2">À partir de 1 200€</p>
            </Link>

            <Link to="/produits/portes" className="glass-card p-8 rounded-2xl hover-lift group">
              <div className="w-16 h-16 rounded-2xl bg-ice-500/10 flex items-center justify-center mb-6 text-ice-400 group-hover:scale-110 transition-transform">
                <DoorOpen className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-ice-300 transition">Portes</h3>
              <p className="text-ice-200/70 leading-relaxed mb-4">
                Portes isothermes coulissantes et battantes pour chambres froides.
              </p>
              <div className="flex items-center text-ice-400 font-semibold group-hover:translate-x-2 transition">
                En savoir plus <ArrowRight className="w-5 h-5 ml-2" />
              </div>
              <p className="text-sm text-ice-300/60 mt-2">À partir de 380€</p>
            </Link>

            <Link to="/produits/luminaires" className="glass-card p-8 rounded-2xl hover-lift group">
              <div className="w-16 h-16 rounded-2xl bg-ice-500/10 flex items-center justify-center mb-6 text-ice-400 group-hover:scale-110 transition-transform">
                <Lightbulb className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-ice-300 transition">Luminaires 65W</h3>
              <p className="text-ice-200/70 leading-relaxed mb-4">
                Éclairage professionnel LED basse consommation pour milieux frigorifiques.
              </p>
              <div className="flex items-center text-ice-400 font-semibold group-hover:translate-x-2 transition">
                En savoir plus <ArrowRight className="w-5 h-5 ml-2" />
              </div>
              <p className="text-sm text-ice-300/60 mt-2">À partir de 85€</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-8">Besoin d'un devis ?</h2>
          <Link
            to="/contact"
            className="inline-flex items-center bg-gradient-to-r from-ice-600 to-blue-600 hover:from-ice-500 hover:to-blue-500 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all shadow-[0_0_20px_rgba(14,165,233,0.4)] hover:scale-105"
          >
            Nous contacter
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}
