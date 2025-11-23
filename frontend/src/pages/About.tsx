import { Award, Users, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div>
      <section className="bg-gradient-to-br from-unicold-blue-600 via-unicold-blue-700 to-unicold-blue-800 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-unicold-blue-300 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-4" style={{ fontFamily: 'ArTeks, Arial, sans-serif' }}>À Propos d'Unicold</h1>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <img
                  src="/azz.jpg"
                  alt="Équipe Unicold"
                  className="rounded-xl shadow-2xl w-full h-96 object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Notre Histoire</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Fondée il y a plus de 15 ans, Unicold s'est imposée comme un acteur
                  majeur dans le domaine des chambres froides professionnelles en France.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Nous sommes fiers d'avoir accompagné plus de 500 professionnels
                  dans leurs projets de chambres froides.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-20">
              <div className="bg-gradient-to-br from-unicold-blue-50 to-white p-8 rounded-2xl text-center hover-lift border border-unicold-blue-100 shadow-lg">
                <div className="bg-gradient-to-br from-unicold-blue-500 to-unicold-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Excellence</h3>
                <p className="text-gray-600">Produits et services de haute qualité</p>
              </div>
              <div className="bg-gradient-to-br from-unicold-blue-50 to-white p-8 rounded-2xl text-center hover-lift border border-unicold-blue-100 shadow-lg">
                <div className="bg-gradient-to-br from-unicold-blue-500 to-unicold-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Proximité</h3>
                <p className="text-gray-600">Relation de confiance avec nos clients</p>
              </div>
              <div className="bg-gradient-to-br from-unicold-blue-50 to-white p-8 rounded-2xl text-center hover-lift border border-unicold-blue-100 shadow-lg">
                <div className="bg-gradient-to-br from-unicold-blue-500 to-unicold-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation</h3>
                <p className="text-gray-600">Solutions toujours plus performantes</p>
              </div>
            </div>

            {/* Section Stock et Atelier */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center" style={{ fontFamily: 'ArTeks, Arial, sans-serif' }}>
                Notre Stock et Nos Installations
              </h2>
              <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
                Nous disposons d'un stock important de matériaux et d'équipements pour répondre rapidement à vos besoins. 
                Nos installations modernes garantissent la qualité et la disponibilité de nos produits.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="/a-propos/stock-entrepot.jpg"
                    alt="Entrepôt de stockage Unicold"
                    className="w-full h-80 object-cover"
                    onError={(e) => {
                      e.currentTarget.src = '/azz.jpg';
                    }}
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="/a-propos/atelier-equipements.jpg"
                    alt="Atelier et équipements Unicold"
                    className="w-full h-80 object-cover"
                    onError={(e) => {
                      e.currentTarget.src = '/surmesure.jpg';
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="text-center">
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
          </div>
        </div>
      </section>
    </div>
  );
}
