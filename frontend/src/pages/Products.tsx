import { Package, Snowflake, Lightbulb, DoorOpen, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Products() {
  return (
    <div>
      <section className="bg-gradient-to-br from-unicold-blue-600 via-unicold-blue-700 to-unicold-blue-800 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-unicold-blue-300 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ fontFamily: 'ArTeks, Arial, sans-serif' }}>Nos Produits</h1>
          <p className="text-xl md:text-2xl text-unicold-blue-100 max-w-3xl mx-auto">
            Matériaux et équipements de qualité professionnelle pour vos chambres froides
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link to="/produits/panneaux-sandwich" className="bg-white p-8 rounded-2xl shadow-xl hover-lift border border-gray-100 group">
              <div className="bg-gradient-to-br from-unicold-blue-500 to-unicold-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <Package className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-unicold-blue-600 transition">Panneaux Sandwich</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Panneaux isolants haute performance pour une isolation thermique optimale.
              </p>
              <div className="flex items-center text-unicold-blue-600 font-semibold group-hover:translate-x-2 transition">
                En savoir plus <ArrowRight className="w-5 h-5 ml-2" />
              </div>
              <p className="text-sm text-gray-500 mt-2">À partir de 45€/m²</p>
            </Link>

            <Link to="/produits/compresseurs" className="bg-white p-8 rounded-2xl shadow-xl hover-lift border border-gray-100 group">
              <div className="bg-gradient-to-br from-unicold-blue-500 to-unicold-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <Snowflake className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-unicold-blue-600 transition">Compresseurs</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Groupes frigorifiques puissants et fiables pour positif et négatif.
              </p>
              <div className="flex items-center text-unicold-blue-600 font-semibold group-hover:translate-x-2 transition">
                En savoir plus <ArrowRight className="w-5 h-5 ml-2" />
              </div>
              <p className="text-sm text-gray-500 mt-2">À partir de 1 200€</p>
            </Link>

            <Link to="/produits/portes" className="bg-white p-8 rounded-2xl shadow-xl hover-lift border border-gray-100 group">
              <div className="bg-gradient-to-br from-unicold-blue-500 to-unicold-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <DoorOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-unicold-blue-600 transition">Portes</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Portes isothermes coulissantes et battantes pour chambres froides.
              </p>
              <div className="flex items-center text-unicold-blue-600 font-semibold group-hover:translate-x-2 transition">
                En savoir plus <ArrowRight className="w-5 h-5 ml-2" />
              </div>
              <p className="text-sm text-gray-500 mt-2">À partir de 380€</p>
            </Link>

            <Link to="/produits/luminaires" className="bg-white p-8 rounded-2xl shadow-xl hover-lift border border-gray-100 group">
              <div className="bg-gradient-to-br from-unicold-blue-500 to-unicold-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-unicold-blue-600 transition">Luminaires 65W</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Éclairage professionnel LED basse consommation pour milieux frigorifiques.
              </p>
              <div className="flex items-center text-unicold-blue-600 font-semibold group-hover:translate-x-2 transition">
                En savoir plus <ArrowRight className="w-5 h-5 ml-2" />
              </div>
              <p className="text-sm text-gray-500 mt-2">À partir de 85€</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8" style={{ fontFamily: 'ArTeks, Arial, sans-serif' }}>Besoin d'un devis ?</h2>
          <Link
            to="/contact"
            className="inline-flex items-center bg-gradient-to-r from-unicold-blue-600 to-unicold-blue-700 text-white px-10 py-4 rounded-xl font-bold text-lg hover:from-unicold-blue-700 hover:to-unicold-blue-800 transition-all shadow-xl hover:scale-105"
          >
            Nous contacter
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
