import { Snowflake, Wrench, Package, Settings, Phone, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  return (
    <div>
      <section className="bg-gradient-to-br from-unicold-blue-600 via-unicold-blue-700 to-unicold-blue-800 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-unicold-blue-300 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ fontFamily: 'ArTeks, Arial, sans-serif' }}>Nos Services</h1>
          <p className="text-xl md:text-2xl text-unicold-blue-100 max-w-3xl mx-auto">
            Des solutions complètes et professionnelles pour tous vos besoins en réfrigération
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="bg-gradient-to-br from-unicold-blue-500 to-unicold-blue-600 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <Snowflake className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'ArTeks, Arial, sans-serif' }}>
                  Vente de Chambres Froides
                </h2>
                <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                  Nous proposons une large gamme de chambres froides adaptées à tous les secteurs
                  professionnels : restauration, commerce, industrie agroalimentaire.
                </p>
                <div className="space-y-5">
                  <div className="flex items-start space-x-4 p-4 bg-green-50 rounded-xl border border-green-100">
                    <CheckCircle className="w-7 h-7 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 text-lg">Chambres Froides Positives</h4>
                      <p className="text-gray-600 leading-relaxed">
                        De 0°C à +10°C, idéales pour la conservation des fruits, légumes et produits frais
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-xl border border-blue-100">
                    <CheckCircle className="w-7 h-7 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 text-lg">Chambres Froides Négatives</h4>
                      <p className="text-gray-600 leading-relaxed">
                        De -18°C à -25°C, parfaites pour la congélation et la conservation longue durée
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="rounded-2xl overflow-hidden shadow-2xl hover-lift">
                  <img
                    src="/chambre-froide-neg.jpg"
                    alt="Chambre froide professionnelle"
                    className="w-full h-96 object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Services supplémentaires */}
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-white to-unicold-blue-50 p-8 rounded-2xl border border-unicold-blue-100 hover-lift">
                <div className="bg-gradient-to-br from-unicold-blue-500 to-unicold-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <Wrench className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Installation Professionnelle</h3>
                <p className="text-gray-600 leading-relaxed">
                  Installation complète par nos techniciens qualifiés avec mise en service et formation.
                </p>
              </div>

              <div className="bg-gradient-to-br from-white to-unicold-blue-50 p-8 rounded-2xl border border-unicold-blue-100 hover-lift">
                <div className="bg-gradient-to-br from-unicold-blue-500 to-unicold-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <Settings className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Maintenance & SAV</h3>
                <p className="text-gray-600 leading-relaxed">
                  Service après-vente et maintenance préventive pour garantir la longévité de vos équipements.
                </p>
              </div>

              <div className="bg-gradient-to-br from-white to-unicold-blue-50 p-8 rounded-2xl border border-unicold-blue-100 hover-lift">
                <div className="bg-gradient-to-br from-unicold-blue-500 to-unicold-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <Package className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Conception Sur-Mesure</h3>
                <p className="text-gray-600 leading-relaxed">
                  Études personnalisées et fabrication adaptée à vos contraintes d'espace et besoins spécifiques.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-unicold-blue-700 via-unicold-blue-800 to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="bg-unicold-blue-600/20 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm border border-white/20">
            <Phone className="w-10 h-10" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'ArTeks, Arial, sans-serif' }}>Besoin d'un conseil ?</h2>
          <p className="text-xl text-unicold-blue-100 mb-10 max-w-2xl mx-auto">
            Notre équipe technique est à votre disposition pour répondre à toutes vos questions
            et vous accompagner dans votre projet.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-white text-unicold-blue-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all shadow-2xl hover:scale-105"
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
