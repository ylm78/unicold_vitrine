import { Snowflake, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import sncfLogo from '../assets/logo/sncf.png';
import nashLogo from '../assets/logo/nash.png';
import berlinerLogo from '../assets/logo/berliner.png';
import meydanLogo from '../assets/logo/meydan.png';
import afolelogo from '../assets/logo/a-fole.jpg';
import subwaylogo from '../assets/logo/Logo-subway.png';
import dominoslogo from '../assets/logo/Dominos_logo.png';
import totallogo from '../assets/logo/Logo-total.png';

export default function Home() {
  return (
    <div>
      <section className="relative py-32 bg-gradient-to-br from-unicold-blue-600 via-unicold-blue-700 to-unicold-blue-800 text-white overflow-hidden">
        {/* Effet de fond animé */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-unicold-blue-300 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight" style={{ fontFamily: 'ArTeks, Arial, sans-serif' }}>
              Spécialiste des Chambres Froides
              <span className="block text-unicold-blue-200 mt-4 text-4xl md:text-6xl">Positives et Négatives</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/95 max-w-4xl mx-auto leading-relaxed font-light">
              Unicold est votre partenaire de confiance pour la conception, la vente et l'installation
              de chambres froides professionnelles. Nous proposons des solutions adaptées aux secteurs
              de la restauration, de l'agroalimentaire, de la pharmacie et de la distribution.
            </p>
            <p className="text-lg md:text-xl text-white/85 max-w-3xl mx-auto mb-10">
              De la chambre froide positive (0°C à +10°C) pour la conservation de vos produits frais,
              à la chambre froide négative (-18°C à -25°C) pour la congélation, nous maîtrisons toutes
              les technologies pour garantir une conservation optimale de vos produits.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="inline-flex items-center bg-white text-unicold-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all hover:scale-105 shadow-2xl animate-pulse-glow"
              >
                Demander un Devis Gratuit
                <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                to="/realisations"
                className="inline-flex items-center bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all hover:scale-105"
              >
                Voir nos Réalisations
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'ArTeks, Arial, sans-serif' }}>
              Unicold, c'est...
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              Une expertise complète au service de vos projets de réfrigération professionnelle
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto">
            <div className="text-center hover-lift bg-gradient-to-br from-white to-unicold-blue-50 p-8 rounded-2xl border border-unicold-blue-100">
              <div className="bg-gradient-to-br from-unicold-blue-500 to-unicold-blue-600 w-28 h-28 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg transform hover:scale-110 transition-transform">
                <Snowflake className="w-14 h-14 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Vente & Fourniture</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Large gamme de chambres froides et matériaux professionnels.
                Panneaux isolants, portes, groupes frigorifiques et accessoires de qualité.
              </p>
            </div>

            <div className="text-center hover-lift bg-gradient-to-br from-white to-unicold-blue-50 p-8 rounded-2xl border border-unicold-blue-100">
              <div className="bg-gradient-to-br from-unicold-blue-500 to-unicold-blue-600 w-28 h-28 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg transform hover:scale-110 transition-transform">
                <svg className="w-14 h-14 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Installation Expert</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Installation complète par nos techniciens qualifiés. Mise en service,
                réglages et formation inclus pour une utilisation optimale.
              </p>
            </div>

            <div className="text-center hover-lift bg-gradient-to-br from-white to-unicold-blue-50 p-8 rounded-2xl border border-unicold-blue-100">
              <div className="bg-gradient-to-br from-unicold-blue-500 to-unicold-blue-600 w-28 h-28 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg transform hover:scale-110 transition-transform">
                <svg className="w-14 h-14 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Solutions Sur-Mesure</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Conception et fabrication de chambres froides adaptées à vos contraintes
                d'espace et besoins spécifiques. Études personnalisées gratuites.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'ArTeks, Arial, sans-serif' }}>
              Nos Implantations
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Trois sites stratégiques pour vous servir en Île-de-France et Centre-Val de Loire
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-10 rounded-2xl shadow-xl text-center hover-lift border border-gray-100">
              <div className="bg-gradient-to-br from-unicold-blue-500 to-unicold-blue-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <MapPin className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Coudray-Montceaux</h3>
              <p className="text-gray-600 text-lg">Essonne (91)</p>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow-xl text-center hover-lift border border-gray-100">
              <div className="bg-gradient-to-br from-unicold-blue-500 to-unicold-blue-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <MapPin className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Dreux</h3>
              <p className="text-gray-600 text-lg">Eure-et-Loir (28)</p>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow-xl text-center hover-lift border border-gray-100">
              <div className="bg-gradient-to-br from-unicold-blue-500 to-unicold-blue-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <MapPin className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Poissy</h3>
              <p className="text-gray-600 text-lg">Yvelines (78)</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'ArTeks, Arial, sans-serif' }}>
              Un Savoir-Faire Depuis Plus de 15 Ans
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez quelques-unes de nos réalisations qui témoignent de notre expertise
              et de la confiance que nos clients nous accordent
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover-lift group">
              <div className="h-72 bg-cover bg-center relative overflow-hidden" style={{
                backgroundImage: 'url(/chambre-froide-neg.jpg)',
              }}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-sm font-semibold">Voir le projet →</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Chambre Froide Négative</h3>
                <p className="text-gray-600">Installation professionnelle pour le secteur alimentaire</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover-lift group">
              <div className="h-72 bg-cover bg-center relative overflow-hidden" style={{
                backgroundImage: 'url(/azz.jpg)',
              }}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-sm font-semibold">Voir le projet →</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Aménagement Intérieur</h3>
                <p className="text-gray-600">Solutions complètes clé en main pour restaurants</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover-lift group">
              <div className="h-72 bg-cover bg-center relative overflow-hidden" style={{
                backgroundImage: 'url(/surmesure.jpg)',
              }}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-sm font-semibold">Voir le projet →</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Projet Sur-Mesure</h3>
                <p className="text-gray-600">Conception adaptée aux contraintes d'espace</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/realisations"
              className="inline-flex items-center bg-gradient-to-r from-unicold-blue-600 to-unicold-blue-700 text-white px-10 py-4 rounded-xl font-bold text-lg hover:from-unicold-blue-700 hover:to-unicold-blue-800 transition-all shadow-xl hover:scale-105"
            >
              Voir toutes nos réalisations
              <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'ArTeks, Arial, sans-serif' }}>
              Suivez-nous sur les Réseaux Sociaux
            </h2>
            <p className="text-gray-300 text-xl max-w-2xl mx-auto">
              Restez informés de nos dernières réalisations et actualités
            </p>
          </div>

          <div className="flex justify-center gap-6 md:gap-8">
            <a
              href="https://www.facebook.com/unicold.unicold.7/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-sm hover:bg-unicold-blue-600 p-6 rounded-2xl transition-all hover:scale-110 border border-white/20 hover:border-unicold-blue-500 shadow-lg"
            >
              <Facebook className="w-10 h-10" />
            </a>

            <a
              href="https://www.instagram.com/uni.cold/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-sm hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600 p-6 rounded-2xl transition-all hover:scale-110 border border-white/20 shadow-lg"
            >
              <Instagram className="w-10 h-10" />
            </a>

            <a
              href="https://linkedin.com/company/unicold"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-sm hover:bg-blue-700 p-6 rounded-2xl transition-all hover:scale-110 border border-white/20 shadow-lg"
            >
              <Linkedin className="w-10 h-10" />
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-unicold-blue-600 via-unicold-blue-700 to-unicold-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-unicold-blue-300 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'ArTeks, Arial, sans-serif' }}>
            Prêt à Démarrer Votre Projet ?
          </h2>
          <p className="text-xl text-unicold-blue-100 mb-10 max-w-2xl mx-auto">
            Contactez-nous pour un devis gratuit et personnalisé.
            Notre équipe d'experts vous accompagne de A à Z.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-white text-unicold-blue-600 px-12 py-5 rounded-xl font-bold text-xl hover:bg-gray-100 transition-all shadow-2xl hover:scale-105 animate-pulse-glow"
          >
            Demander un Devis Gratuit
            <svg className="w-6 h-6 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
      {/* Bandeau logos – Ils nous font confiance */}
      <section className="bg-gradient-to-b from-white via-gray-50 to-white py-20 border-t border-gray-200 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, gray 1px, transparent 0)',
            backgroundSize: '30px 30px'
          }}></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'ArTeks, Arial, sans-serif' }}>
              Ils nous font confiance
            </h2>
            <p className="text-gray-600 text-base md:text-lg">
              Des entreprises de renom qui nous font confiance pour leurs projets de chambres froides
            </p>
          </div>

          {/* Slider amélioré avec duplication pour boucle infinie */}
          <div className="relative overflow-hidden py-6">
            <div className="flex gap-20 items-center animate-marquee-infinite">
              {/* Première série de logos */}
              <div className="flex gap-20 items-center flex-shrink-0">
                <div className="flex items-center justify-center h-28 w-40 transition-all duration-300 opacity-90 hover:opacity-100 hover:scale-110">
                  <img src={sncfLogo} alt="SNCF" className="h-20 w-auto object-contain max-w-full" />
                </div>
                <div className="flex items-center justify-center h-28 w-40 transition-all duration-300 opacity-90 hover:opacity-100 hover:scale-110">
                  <img src={nashLogo} alt="Nash Burger" className="h-20 w-auto object-contain max-w-full" />
                </div>
                <div className="flex items-center justify-center h-28 w-40 transition-all duration-300 opacity-90 hover:opacity-100 hover:scale-110">
                  <img src={berlinerLogo} alt="Berliner" className="h-20 w-auto object-contain max-w-full" />
                </div>
                <div className="flex items-center justify-center h-28 w-40 transition-all duration-300 opacity-90 hover:opacity-100 hover:scale-110">
                  <img src={meydanLogo} alt="Meydan" className="h-20 w-auto object-contain max-w-full" />
                </div>
                <div className="flex items-center justify-center h-28 w-40 transition-all duration-300 opacity-90 hover:opacity-100 hover:scale-110">
                  <img src={afolelogo} alt="A Folé" className="h-20 w-auto object-contain max-w-full" />
                </div>
                <div className="flex items-center justify-center h-28 w-40 transition-all duration-300 opacity-90 hover:opacity-100 hover:scale-110">
                  <img src={subwaylogo} alt="Subway" className="h-20 w-auto object-contain max-w-full" />
                </div>
                <div className="flex items-center justify-center h-28 w-40 transition-all duration-300 opacity-90 hover:opacity-100 hover:scale-110">
                  <img src={dominoslogo} alt="Dominos" className="h-20 w-auto object-contain max-w-full" />
                </div>
                <div className="flex items-center justify-center h-28 w-40 transition-all duration-300 opacity-90 hover:opacity-100 hover:scale-110">
                  <img src={totallogo} alt="Total Energie" className="h-20 w-auto object-contain max-w-full" />
                </div>
              </div>
              {/* Duplication pour boucle infinie */}
              <div className="flex gap-20 items-center flex-shrink-0">
                <div className="flex items-center justify-center h-28 w-40 transition-all duration-300 opacity-90 hover:opacity-100 hover:scale-110">
                  <img src={sncfLogo} alt="SNCF" className="h-20 w-auto object-contain max-w-full" />
                </div>
                <div className="flex items-center justify-center h-28 w-40 transition-all duration-300 opacity-90 hover:opacity-100 hover:scale-110">
                  <img src={nashLogo} alt="Nash Burger" className="h-20 w-auto object-contain max-w-full" />
                </div>
                <div className="flex items-center justify-center h-28 w-40 transition-all duration-300 opacity-90 hover:opacity-100 hover:scale-110">
                  <img src={berlinerLogo} alt="Berliner" className="h-20 w-auto object-contain max-w-full" />
                </div>
                <div className="flex items-center justify-center h-28 w-40 transition-all duration-300 opacity-90 hover:opacity-100 hover:scale-110">
                  <img src={meydanLogo} alt="Meydan" className="h-20 w-auto object-contain max-w-full" />
                </div>
                <div className="flex items-center justify-center h-28 w-40 transition-all duration-300 opacity-90 hover:opacity-100 hover:scale-110">
                  <img src={afolelogo} alt="A Folé" className="h-20 w-auto object-contain max-w-full" />
                </div>
                <div className="flex items-center justify-center h-28 w-40 transition-all duration-300 opacity-90 hover:opacity-100 hover:scale-110">
                  <img src={subwaylogo} alt="Subway" className="h-20 w-auto object-contain max-w-full" />
                </div>
                <div className="flex items-center justify-center h-28 w-40 transition-all duration-300 opacity-90 hover:opacity-100 hover:scale-110">
                  <img src={dominoslogo} alt="Dominos" className="h-20 w-auto object-contain max-w-full" />
                </div>
                <div className="flex items-center justify-center h-28 w-40 transition-all duration-300 opacity-90 hover:opacity-100 hover:scale-110">
                  <img src={totallogo} alt="Total Energie" className="h-20 w-auto object-contain max-w-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



    </div>
  );
}
