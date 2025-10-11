import { Package, Snowflake, Lightbulb, DoorOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Products() {
  return (
    <div>
      <section className="bg-unicold-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Nos Produits</h1>
          <p className="text-xl text-unicold-blue-100 max-w-2xl mx-auto">
            Matériaux et équipements de qualité professionnelle pour vos chambres froides
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition">
              <div className="bg-unicold-blue-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <Package className="w-7 h-7 text-unicold-blue-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Panneaux Sandwich</h3>
              <p className="text-gray-600 text-sm">
                Panneaux isolants haute performance pour une isolation thermique optimale.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition">
              <div className="bg-unicold-blue-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <Snowflake className="w-7 h-7 text-unicold-blue-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Compresseurs</h3>
              <p className="text-gray-600 text-sm">
                Groupes frigorifiques puissants et fiables pour positif et négatif.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition">
              <div className="bg-unicold-blue-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <DoorOpen className="w-7 h-7 text-unicold-blue-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Portes</h3>
              <p className="text-gray-600 text-sm">
                Portes isothermes coulissantes et battantes pour chambres froides.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition">
              <div className="bg-unicold-blue-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <Lightbulb className="w-7 h-7 text-unicold-blue-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Luminaires 65W</h3>
              <p className="text-gray-600 text-sm">
                Éclairage professionnel LED basse consommation pour milieux frigorifiques.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Besoin d'un devis ?</h2>
          <Link
            to="/contact"
            className="inline-block bg-unicold-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-unicold-blue-600 transition"
          >
            Nous contacter
          </Link>
        </div>
      </section>
    </div>
  );
}
