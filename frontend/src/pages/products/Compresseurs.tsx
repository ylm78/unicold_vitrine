import { Snowflake, CheckCircle, Zap, Settings, Droplet, Gauge } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Compresseurs() {
  return (
    <div>
      <section className="bg-gradient-to-br from-unicold-blue-600 via-unicold-blue-700 to-unicold-blue-800 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-unicold-blue-300 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="bg-unicold-blue-600/20 w-24 h-24 rounded-2xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm border border-white/20">
            <Snowflake className="w-12 h-12" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ fontFamily: 'ArTeks, Arial, sans-serif' }}>
            Compresseurs & Groupes Frigorifiques
          </h1>
          <p className="text-xl md:text-2xl text-unicold-blue-100 max-w-3xl mx-auto">
            Solutions de réfrigération puissantes et fiables pour tous vos besoins
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Description avec galerie */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'ArTeks, Arial, sans-serif' }}>
                Groupes Frigorifiques Professionnels
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Nos groupes frigorifiques sont conçus pour offrir des performances optimales dans les environnements 
                professionnels les plus exigeants. Que vous ayez besoin d'une chambre froide positive ou négative, 
                nous proposons des solutions adaptées à vos contraintes techniques et énergétiques.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Tous nos équipements sont conformes aux normes européennes et bénéficient d'une garantie constructeur. 
                Nous proposons également un service de maintenance et de SAV pour garantir la longévité de vos installations.
              </p>
              
              {/* Galerie d'images */}
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img
                    src="/produits/compresseur-1.jpg"
                    alt="Groupe frigorifique monobloc"
                    className="w-full h-48 object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img
                    src="/produits/compresseur-2.jpg"
                    alt="Compresseur hermétique professionnel"
                    className="w-full h-48 object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img
                    src="/produits/compresseur-3.jpg"
                    alt="Unité de condensation"
                    className="w-full h-48 object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Types de compresseurs */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-200">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mr-4">
                    <Thermometer className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Positif (0°C à +10°C)</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <strong className="text-gray-900">Puissances :</strong>
                      <p className="text-gray-600">De 500W à 15kW selon volume</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <strong className="text-gray-900">Applications :</strong>
                      <p className="text-gray-600">Conservation produits frais, restauration</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <strong className="text-gray-900">Fluides frigorigènes :</strong>
                      <p className="text-gray-600">R134a, R404A, R407C (écologiques)</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-cyan-50 to-white p-8 rounded-2xl border border-cyan-200">
                <div className="flex items-center mb-6">
                  <div className="bg-cyan-600 w-16 h-16 rounded-2xl flex items-center justify-center mr-4">
                    <Snowflake className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Négatif (-18°C à -25°C)</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <strong className="text-gray-900">Puissances :</strong>
                      <p className="text-gray-600">De 1kW à 20kW selon volume</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <strong className="text-gray-900">Applications :</strong>
                      <p className="text-gray-600">Congélation, conservation longue durée</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <strong className="text-gray-900">Technologie :</strong>
                      <p className="text-gray-600">Compresseurs scroll ou piston haute performance</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Caractéristiques techniques */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center" style={{ fontFamily: 'ArTeks, Arial, sans-serif' }}>
                Caractéristiques Techniques
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl border border-gray-200 hover-lift">
                  <Zap className="w-10 h-10 text-unicold-blue-600 mb-4" />
                  <h4 className="font-bold text-gray-900 mb-2">Haute Efficacité Énergétique</h4>
                  <p className="text-gray-600">Classe A+++, réduction jusqu'à 30% de consommation électrique</p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-200 hover-lift">
                  <Settings className="w-10 h-10 text-unicold-blue-600 mb-4" />
                  <h4 className="font-bold text-gray-900 mb-2">Régulation Précise</h4>
                  <p className="text-gray-600">Thermostat électronique avec affichage digital, ±0,5°C</p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-200 hover-lift">
                  <Droplet className="w-10 h-10 text-unicold-blue-600 mb-4" />
                  <h4 className="font-bold text-gray-900 mb-2">Dégivrage Automatique</h4>
                  <p className="text-gray-600">Système de dégivrage par gaz chaud ou électrique</p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-200 hover-lift">
                  <Gauge className="w-10 h-10 text-unicold-blue-600 mb-4" />
                  <h4 className="font-bold text-gray-900 mb-2">Protection Intégrée</h4>
                  <p className="text-gray-600">Sécurité haute/basse pression, protection moteur</p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-200 hover-lift">
                  <Snowflake className="w-10 h-10 text-unicold-blue-600 mb-4" />
                  <h4 className="font-bold text-gray-900 mb-2">Installation Flexible</h4>
                  <p className="text-gray-600">Monobloc ou split, intérieur ou extérieur</p>
                </div>
                <div className="bg-white p-6 rounded-xl border border-gray-200 hover-lift">
                  <CheckCircle className="w-10 h-10 text-unicold-blue-600 mb-4" />
                  <h4 className="font-bold text-gray-900 mb-2">Garantie 2 Ans</h4>
                  <p className="text-gray-600">Garantie constructeur + service après-vente</p>
                </div>
              </div>
            </div>

            {/* Prix */}
            <div className="bg-gradient-to-br from-unicold-blue-600 to-unicold-blue-700 text-white p-10 rounded-2xl mb-16">
              <h3 className="text-3xl font-bold mb-6 text-center" style={{ fontFamily: 'ArTeks, Arial, sans-serif' }}>
                Tarification
              </h3>
              <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                  <h4 className="text-lg font-bold mb-3">Petit Volume</h4>
                  <p className="text-2xl font-bold mb-2">À partir de <span className="text-unicold-blue-200">1 200€</span></p>
                  <p className="text-unicold-blue-100 text-sm">Jusqu'à 10m³, positif</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                  <h4 className="text-lg font-bold mb-3">Volume Moyen</h4>
                  <p className="text-2xl font-bold mb-2">À partir de <span className="text-unicold-blue-200">2 500€</span></p>
                  <p className="text-unicold-blue-100 text-sm">10-30m³, positif ou négatif</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                  <h4 className="text-lg font-bold mb-3">Grand Volume</h4>
                  <p className="text-2xl font-bold mb-2">À partir de <span className="text-unicold-blue-200">4 500€</span></p>
                  <p className="text-unicold-blue-100 text-sm">30m³+, haute performance</p>
                </div>
              </div>
              <p className="text-center mt-6 text-unicold-blue-100">
                * Prix indicatifs TTC pour groupe monobloc. Installation et mise en service en supplément. Devis gratuit sur mesure.
              </p>
            </div>

            {/* Guide de sélection */}
            <div className="mb-16 bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center" style={{ fontFamily: 'ArTeks, Arial, sans-serif' }}>
                Comment Choisir Votre Groupe Frigorifique ?
              </h3>
              <div className="space-y-6 max-w-4xl mx-auto">
                <div className="bg-white p-6 rounded-xl border-l-4 border-unicold-blue-600">
                  <h4 className="font-bold text-gray-900 mb-3 text-lg">1. Volume de la chambre froide</h4>
                  <p className="text-gray-600">Le volume détermine la puissance nécessaire. Comptez environ 100W par m³ pour le positif, 150W par m³ pour le négatif.</p>
                </div>
                <div className="bg-white p-6 rounded-xl border-l-4 border-unicold-blue-600">
                  <h4 className="font-bold text-gray-900 mb-3 text-lg">2. Température de consigne</h4>
                  <p className="text-gray-600">Positif (0°C à +10°C) ou négatif (-18°C à -25°C) ? Cela détermine le type de compresseur nécessaire.</p>
                </div>
                <div className="bg-white p-6 rounded-xl border-l-4 border-unicold-blue-600">
                  <h4 className="font-bold text-gray-900 mb-3 text-lg">3. Emplacement d'installation</h4>
                  <p className="text-gray-600">Intérieur ou extérieur ? Monobloc ou split ? Nos experts vous conseillent selon vos contraintes.</p>
                </div>
                <div className="bg-white p-6 rounded-xl border-l-4 border-unicold-blue-600">
                  <h4 className="font-bold text-gray-900 mb-3 text-lg">4. Fréquence d'ouverture</h4>
                  <p className="text-gray-600">Un usage intensif nécessite une puissance supérieure pour maintenir la température.</p>
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
            Besoin d'un Conseil Technique ?
          </h2>
          <p className="text-xl text-unicold-blue-100 mb-10 max-w-2xl mx-auto">
            Notre équipe d'experts vous aide à choisir le groupe frigorifique adapté à votre projet
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

