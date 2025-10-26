import { Snowflake, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <section className="py-20 bg-gradient-to-br from-unicold-blue-600 to-unicold-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-6xl font-bold mb-8" style={{ fontFamily: 'Arial, sans-serif' }}>
            Spécialiste des Chambres Froides
            <span className="block text-unicold-blue-200 mt-3">Positives et Négatives</span>
          </h1>
          <p className="text-2xl mb-6 text-white/90 max-w-4xl mx-auto leading-relaxed">
            Unicold est votre partenaire de confiance pour la conception, la vente et l'installation
            de chambres froides professionnelles. Nous proposons des solutions adaptées aux secteurs
            de la restauration, de l'agroalimentaire, de la pharmacie et de la distribution.
          </p>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            De la chambre froide positive (0°C à +10°C) pour la conservation de vos produits frais,
            à la chambre froide négative (-18°C à -25°C) pour la congélation, nous maîtrisons toutes
            les technologies pour garantir une conservation optimale de vos produits.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Unicold, c'est...</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une expertise complète au service de vos projets de réfrigération professionnelle
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="bg-unicold-blue-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                <Snowflake className="w-12 h-12 text-unicold-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Vente & Fourniture</h3>
              <p className="text-gray-600 leading-relaxed">
                Large gamme de chambres froides et matériaux professionnels.
                Panneaux isolants, portes, groupes frigorifiques et accessoires de qualité.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-unicold-blue-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-unicold-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Installation Expert</h3>
              <p className="text-gray-600 leading-relaxed">
                Installation complète par nos techniciens qualifiés. Mise en service,
                réglages et formation inclus pour une utilisation optimale.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-unicold-blue-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-unicold-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Solutions Sur-Mesure</h3>
              <p className="text-gray-600 leading-relaxed">
                Conception et fabrication de chambres froides adaptées à vos contraintes
                d'espace et besoins spécifiques. Études personnalisées gratuites.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos Implantations</h2>
            <p className="text-xl text-gray-600">
              Trois sites stratégiques pour vous servir en Île-de-France et Centre-Val de Loire
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-2xl transition">
              <div className="bg-unicold-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-unicold-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Coudray-Montceaux</h3>
              <p className="text-gray-600">Essonne (91)</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-2xl transition">
              <div className="bg-unicold-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-unicold-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Dreux</h3>
              <p className="text-gray-600">Eure-et-Loir (28)</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-2xl transition">
              <div className="bg-unicold-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-unicold-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Poissy</h3>
              <p className="text-gray-600">Yvelines (78)</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Un Savoir-Faire Depuis Plus de 15 Ans
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez quelques-unes de nos réalisations qui témoignent de notre expertise
              et de la confiance que nos clients nous accordent
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition">
              <div className="h-64 bg-cover bg-center" style={{
                backgroundImage: 'url(/chambre-froide-neg.jpg)',
              }}></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Chambre Froide Négative</h3>
                <p className="text-gray-600">Installation professionnelle pour le secteur alimentaire</p>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition">
              <div className="h-64 bg-cover bg-center" style={{
                backgroundImage: 'url(/azz.jpg)',
              }}></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Aménagement Intérieur</h3>
                <p className="text-gray-600">Solutions complètes clé en main pour restaurants</p>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition">
              <div className="h-64 bg-cover bg-center" style={{
                backgroundImage: 'url(/surmesure.jpg)',
              }}></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Projet Sur-Mesure</h3>
                <p className="text-gray-600">Conception adaptée aux contraintes d'espace</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/realisations"
              className="inline-flex items-center bg-unicold-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-unicold-blue-700 transition shadow-lg"
            >
              Voir toutes nos réalisations
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Suivez-nous sur les Réseaux Sociaux</h2>
            <p className="text-gray-400 text-lg">
              Restez informés de nos dernières réalisations et actualités
            </p>
          </div>

          <div className="flex justify-center gap-8">
            <a
              href="https://facebook.com/unicold"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-unicold-blue-600 p-6 rounded-xl transition-all hover:scale-110"
            >
              <Facebook className="w-10 h-10" />
            </a>

            <a
              href="https://instagram.com/unicold"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600 p-6 rounded-xl transition-all hover:scale-110"
            >
              <Instagram className="w-10 h-10" />
            </a>

            <a
              href="https://linkedin.com/company/unicold"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-blue-700 p-6 rounded-xl transition-all hover:scale-110"
            >
              <Linkedin className="w-10 h-10" />
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-unicold-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Prêt à Démarrer Votre Projet ?</h2>
          <p className="text-xl text-unicold-blue-100 mb-8 max-w-2xl mx-auto">
            Contactez-nous pour un devis gratuit et personnalisé.
            Notre équipe d'experts vous accompagne de A à Z.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-white text-unicold-blue-600 px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition shadow-xl"
          >
            Demander un Devis Gratuit
            <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
