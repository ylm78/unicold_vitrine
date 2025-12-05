import { Package, CheckCircle, Ruler, Thermometer, Shield, Link as LinkIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PanneauxSandwich() {
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
          <div className="glass-panel w-24 h-24 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Package className="w-12 h-12 text-ice-400" />
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 text-white">
            Panneaux Sandwich
          </h1>
          <p className="text-xl md:text-2xl text-ice-100/80 max-w-3xl mx-auto">
            Isolation thermique haute performance pour chambres froides professionnelles
          </p>
        </div>
      </section>

      <section className="py-20 bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Description avec image */}
            <div className="mb-16 grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                  Panneaux Isolants de Qualité Professionnelle
                </h2>
                <p className="text-lg text-ice-200/80 leading-relaxed mb-6">
                  Nos panneaux sandwich sont conçus pour offrir une isolation thermique optimale dans les environnements 
                  frigorifiques. Fabriqués avec des matériaux de haute qualité, ils garantissent une performance énergétique 
                  exceptionnelle et une durabilité à long terme.
                </p>
                <p className="text-lg text-ice-200/80 leading-relaxed">
                  Disponibles en différentes épaisseurs et dimensions, nos panneaux s'adaptent à tous vos projets de 
                  chambres froides, qu'elles soient positives ou négatives.
                </p>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-2xl glass-card">
                <img
                  src="/produits/panneau_chambre_froide.png"
                  alt="Stock de panneaux sandwich professionnels - Unicold"
                  className="w-full h-96 object-cover"
                  onError={(e) => {
                    e.currentTarget.src = '/produits/entrepot-panneaux.jpg';
                  }}
                />
              </div>
            </div>

            {/* Caractéristiques */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="glass-card p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Ruler className="w-8 h-8 text-ice-400 mr-3" />
                  Dimensions & Épaisseurs
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-emerald-400 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <strong className="text-white">Épaisseurs disponibles :</strong>
                      <p className="text-ice-200/70">60mm, 80mm, 100mm, 120mm, 150mm</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-emerald-400 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <strong className="text-white">Dimensions standards :</strong>
                      <p className="text-ice-200/70">Largeur : 1000mm, 1200mm | Longueur : sur mesure</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-emerald-400 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <strong className="text-white">Découpes personnalisées :</strong>
                      <p className="text-ice-200/70">Sur mesure selon vos plans</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="glass-card p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Thermometer className="w-8 h-8 text-ice-400 mr-3" />
                  Performance Thermique
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-emerald-400 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <strong className="text-white">Coefficient de conductivité :</strong>
                      <p className="text-ice-200/70">λ ≤ 0,022 W/(m.K) - Performance exceptionnelle</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-emerald-400 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <strong className="text-white">Isolation :</strong>
                      <p className="text-ice-200/70">Mousse polyuréthane injectée haute densité</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-emerald-400 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <strong className="text-white">Revêtement :</strong>
                      <p className="text-ice-200/70">Acier galvanisé ou inoxydable selon application</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Avantages */}
            <div className="mb-16">
              <h3 className="text-3xl font-display font-bold text-white mb-8 text-center">
                Pourquoi Choisir Nos Panneaux ?
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="glass-card p-6 rounded-xl hover-lift">
                  <Shield className="w-10 h-10 text-ice-400 mb-4" />
                  <h4 className="font-bold text-white mb-2">Résistance Exceptionnelle</h4>
                  <p className="text-ice-200/70">Structure robuste, résistante à l'humidité et aux variations de température</p>
                </div>
                <div className="glass-card p-6 rounded-xl hover-lift">
                  <Thermometer className="w-10 h-10 text-ice-400 mb-4" />
                  <h4 className="font-bold text-white mb-2">Isolation Optimale</h4>
                  <p className="text-ice-200/70">Réduction des pertes énergétiques jusqu'à 40% par rapport aux solutions standards</p>
                </div>
                <div className="glass-card p-6 rounded-xl hover-lift">
                  <LinkIcon className="w-10 h-10 text-ice-400 mb-4" />
                  <h4 className="font-bold text-white mb-2">Installation Rapide</h4>
                  <p className="text-ice-200/70">Système de fixation innovant pour une mise en place rapide et sécurisée</p>
                </div>
              </div>
            </div>

            {/* Prix */}
            <div className="glass-panel p-10 rounded-2xl mb-16 border-ice-500/30">
              <h3 className="text-3xl font-display font-bold text-white mb-6 text-center">
                Tarification
              </h3>
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div className="glass-card p-6 rounded-xl">
                  <h4 className="text-xl font-bold text-white mb-4">Panneaux Standard</h4>
                  <p className="text-3xl font-bold text-white mb-2">À partir de <span className="text-ice-300">45€/m²</span></p>
                  <p className="text-ice-200/70 text-sm">Épaisseur 60mm, dimensions standards</p>
                </div>
                <div className="glass-card p-6 rounded-xl">
                  <h4 className="text-xl font-bold text-white mb-4">Panneaux Épais</h4>
                  <p className="text-3xl font-bold text-white mb-2">À partir de <span className="text-ice-300">75€/m²</span></p>
                  <p className="text-ice-200/70 text-sm">Épaisseur 100mm+, haute performance</p>
                </div>
              </div>
              <p className="text-center mt-6 text-ice-200/70">
                * Prix indicatifs TTC. Devis personnalisé gratuit selon vos besoins spécifiques
              </p>
            </div>

            {/* Applications */}
            <div className="mb-16">
              <h3 className="text-3xl font-display font-bold text-white mb-8 text-center">
                Applications
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="glass-card p-6 rounded-xl border-l-4 border-ice-500">
                  <h4 className="font-bold text-white mb-3 text-lg">Chambres Froides Positives</h4>
                  <p className="text-ice-200/70">0°C à +10°C - Restauration, commerce alimentaire</p>
                </div>
                <div className="glass-card p-6 rounded-xl border-l-4 border-ice-500">
                  <h4 className="font-bold text-white mb-3 text-lg">Chambres Froides Négatives</h4>
                  <p className="text-ice-200/70">-18°C à -25°C - Congélation, conservation longue durée</p>
                </div>
                <div className="glass-card p-6 rounded-xl border-l-4 border-ice-500">
                  <h4 className="font-bold text-white mb-3 text-lg">Chambres Multi-Températures</h4>
                  <p className="text-ice-200/70">Zones séparées avec différentes températures</p>
                </div>
                <div className="glass-card p-6 rounded-xl border-l-4 border-ice-500">
                  <h4 className="font-bold text-white mb-3 text-lg">Salles Blanches</h4>
                  <p className="text-ice-200/70">Environnements contrôlés pour l'industrie pharmaceutique</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-ice-900 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-64 h-64 bg-ice-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-ice-400 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Besoin d'un Devis Personnalisé ?
          </h2>
          <p className="text-xl text-ice-100/80 mb-10 max-w-2xl mx-auto">
            Contactez-nous pour obtenir un devis gratuit adapté à votre projet
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center bg-ice-600 hover:bg-ice-500 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all shadow-[0_0_20px_rgba(14,165,233,0.4)] hover:scale-105"
            >
              Demander un Devis
              <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              to="/produits"
              className="inline-flex items-center glass-panel text-white border border-ice-500/30 px-10 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all"
            >
              Voir tous les produits
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

