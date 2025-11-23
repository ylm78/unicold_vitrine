import { DoorOpen, CheckCircle, Lock, ArrowRightLeft, Shield, Gauge } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Portes() {
  return (
    <div>
      <section className="bg-gradient-to-br from-unicold-blue-600 via-unicold-blue-700 to-unicold-blue-800 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-unicold-blue-300 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="bg-unicold-blue-600/20 w-24 h-24 rounded-2xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm border border-white/20">
            <DoorOpen className="w-12 h-12" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ fontFamily: 'ArTeks, Arial, sans-serif' }}>
            Portes Isothermes
          </h1>
          <p className="text-xl md:text-2xl text-unicold-blue-100 max-w-3xl mx-auto">
            Portes coulissantes et battantes pour chambres froides professionnelles
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Description avec image */}
            <div className="mb-16 grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'ArTeks, Arial, sans-serif' }}>
                  Portes Professionnelles Haute Performance
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Nos portes isothermes sont conçues pour minimiser les pertes thermiques et garantir une étanchéité 
                  optimale dans vos chambres froides. Disponibles en version coulissante ou battante, elles s'adaptent 
                  à tous les espaces et contraintes d'utilisation.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Toutes nos portes sont équipées de joints magnétiques haute performance et de systèmes de fermeture 
                  automatique pour une efficacité énergétique maximale.
                </p>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/produits/porte-chambre-froide.jpg"
                  alt="Porte isotherme de chambre froide professionnelle"
                  className="w-full h-96 object-cover"
                  onError={(e) => {
                    e.currentTarget.src = '/chambre-froide-neg.jpg';
                  }}
                />
              </div>
            </div>

            {/* Types de portes */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-gradient-to-br from-unicold-blue-50 to-white p-8 rounded-2xl border border-unicold-blue-100">
                <div className="flex items-center mb-6">
                  <div className="bg-unicold-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mr-4">
                    <ArrowRightLeft className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Portes Coulissantes</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <strong className="text-gray-900">Avantages :</strong>
                      <p className="text-gray-600">Gain d'espace, ouverture facile, idéal pour passages fréquents</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <strong className="text-gray-900">Dimensions :</strong>
                      <p className="text-gray-600">Largeur : 800mm à 2000mm | Hauteur : 2000mm à 2500mm</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <strong className="text-gray-900">Options :</strong>
                      <p className="text-gray-600">Vitre, ouverture automatique, serrure</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-unicold-blue-50 to-white p-8 rounded-2xl border border-unicold-blue-100">
                <div className="flex items-center mb-6">
                  <div className="bg-unicold-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mr-4">
                    <DoorOpen className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Portes Battantes</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <strong className="text-gray-900">Avantages :</strong>
                      <p className="text-gray-600">Étanchéité maximale, robustesse, installation simple</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <strong className="text-gray-900">Dimensions :</strong>
                      <p className="text-gray-600">Largeur : 600mm à 1200mm | Hauteur : 2000mm à 2500mm</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <strong className="text-gray-900">Options :</strong>
                      <p className="text-gray-600">Simple ou double battant, vitre, poignée ergonomique</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Caractéristiques */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center" style={{ fontFamily: 'ArTeks, Arial, sans-serif' }}>
                Caractéristiques Techniques
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl border border-gray-200 hover-lift">
                  <Shield className="w-10 h-10 text-unicold-blue-600 mb-4" />
                  <h4 className="font-bold text-gray-900 mb-2">Isolation Renforcée</h4>
                  <p className="text-gray-600">Coefficient U ≤ 0,8 W/(m².K) - Performance exceptionnelle</p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-200 hover-lift">
                  <Lock className="w-10 h-10 text-unicold-blue-600 mb-4" />
                  <h4 className="font-bold text-gray-900 mb-2">Étanchéité Parfaite</h4>
                  <p className="text-gray-600">Joints magnétiques double lèvre, résistants aux variations de température</p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-200 hover-lift">
                  <Gauge className="w-10 h-10 text-unicold-blue-600 mb-4" />
                  <h4 className="font-bold text-gray-900 mb-2">Résistance Mécanique</h4>
                  <p className="text-gray-600">Structure en acier galvanisé, résistant aux chocs et à la corrosion</p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-200 hover-lift">
                  <CheckCircle className="w-10 h-10 text-unicold-blue-600 mb-4" />
                  <h4 className="font-bold text-gray-900 mb-2">Fermeture Automatique</h4>
                  <p className="text-gray-600">Système de fermeture assistée pour économie d'énergie</p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-200 hover-lift">
                  <DoorOpen className="w-10 h-10 text-unicold-blue-600 mb-4" />
                  <h4 className="font-bold text-gray-900 mb-2">Ouverture Facile</h4>
                  <p className="text-gray-600">Poignées ergonomiques, même avec gants de protection</p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-200 hover-lift">
                  <Shield className="w-10 h-10 text-unicold-blue-600 mb-4" />
                  <h4 className="font-bold text-gray-900 mb-2">Sécurité</h4>
                  <p className="text-gray-600">Serrure intérieure/extérieure, ouverture de secours</p>
                </div>
              </div>
            </div>

            {/* Prix */}
            <div className="bg-gradient-to-br from-unicold-blue-600 to-unicold-blue-700 text-white p-10 rounded-2xl mb-16">
              <h3 className="text-3xl font-bold mb-6 text-center" style={{ fontFamily: 'ArTeks, Arial, sans-serif' }}>
                Tarification
              </h3>
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                  <h4 className="text-xl font-bold mb-4">Porte Coulissante Standard</h4>
                  <p className="text-3xl font-bold mb-2">À partir de <span className="text-unicold-blue-200">450€</span></p>
                  <p className="text-unicold-blue-100 text-sm mb-4">800x2000mm, sans vitre</p>
                  <ul className="text-left text-sm text-unicold-blue-100 space-y-2">
                    <li>• Avec vitre : +150€</li>
                    <li>• Ouverture auto : +300€</li>
                    <li>• Dimensions sur mesure : devis</li>
                  </ul>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                  <h4 className="text-xl font-bold mb-4">Porte Battante Standard</h4>
                  <p className="text-3xl font-bold mb-2">À partir de <span className="text-unicold-blue-200">380€</span></p>
                  <p className="text-unicold-blue-100 text-sm mb-4">800x2000mm, simple battant</p>
                  <ul className="text-left text-sm text-unicold-blue-100 space-y-2">
                    <li>• Double battant : +200€</li>
                    <li>• Avec vitre : +120€</li>
                    <li>• Dimensions sur mesure : devis</li>
                  </ul>
                </div>
              </div>
              <p className="text-center mt-6 text-unicold-blue-100">
                * Prix indicatifs TTC. Installation et main d'œuvre en supplément. Devis personnalisé gratuit.
              </p>
            </div>

            {/* Options disponibles */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center" style={{ fontFamily: 'ArTeks, Arial, sans-serif' }}>
                Options Disponibles
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl border-l-4 border-unicold-blue-600">
                  <h4 className="font-bold text-gray-900 mb-3 text-lg">Vitre de Visite</h4>
                  <p className="text-gray-600">Plexiglas renforcé, permet de voir l'intérieur sans ouvrir la porte</p>
                  <p className="text-unicold-blue-600 font-semibold mt-2">+120€ à +150€</p>
                </div>
                <div className="bg-white p-6 rounded-xl border-l-4 border-unicold-blue-600">
                  <h4 className="font-bold text-gray-900 mb-3 text-lg">Ouverture Automatique</h4>
                  <p className="text-gray-600">Détecteur de présence, ouverture/fermeture automatique</p>
                  <p className="text-unicold-blue-600 font-semibold mt-2">+300€ à +500€</p>
                </div>
                <div className="bg-white p-6 rounded-xl border-l-4 border-unicold-blue-600">
                  <h4 className="font-bold text-gray-900 mb-3 text-lg">Serrure Renforcée</h4>
                  <p className="text-gray-600">Sécurité renforcée avec serrure multipoints</p>
                  <p className="text-unicold-blue-600 font-semibold mt-2">+80€ à +120€</p>
                </div>
                <div className="bg-white p-6 rounded-xl border-l-4 border-unicold-blue-600">
                  <h4 className="font-bold text-gray-900 mb-3 text-lg">Poignée Ergonomique</h4>
                  <p className="text-gray-600">Poignée grande taille, facile à saisir même avec gants</p>
                  <p className="text-unicold-blue-600 font-semibold mt-2">+50€</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-unicold-blue-600 via-unicold-blue-700 to-unicold-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-unicold-blue-300 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'ArTeks, Arial, sans-serif' }}>
            Besoin d'une Porte Sur-Mesure ?
          </h2>
          <p className="text-xl text-unicold-blue-100 mb-10 max-w-2xl mx-auto">
            Contactez-nous pour un devis personnalisé selon vos dimensions et besoins spécifiques
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center bg-white text-unicold-blue-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all shadow-2xl hover:scale-105"
            >
              Demander un Devis
              <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              to="/produits"
              className="inline-flex items-center bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-10 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all"
            >
              Voir tous les produits
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

