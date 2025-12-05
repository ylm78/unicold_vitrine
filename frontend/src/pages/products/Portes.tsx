import { DoorOpen, CheckCircle, Lock, ArrowRightLeft, Shield, Gauge } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Portes() {
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
            <DoorOpen className="w-12 h-12 text-ice-400" />
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 text-white">
            Portes Isothermes
          </h1>
          <p className="text-xl md:text-2xl text-ice-100/80 max-w-3xl mx-auto">
            Portes coulissantes et battantes pour chambres froides professionnelles
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
                  Portes Professionnelles Haute Performance
                </h2>
                <p className="text-lg text-ice-200/80 leading-relaxed mb-6">
                  Nos portes isothermes sont conçues pour minimiser les pertes thermiques et garantir une étanchéité 
                  optimale dans vos chambres froides. Disponibles en version coulissante ou battante, elles s'adaptent 
                  à tous les espaces et contraintes d'utilisation.
                </p>
                <p className="text-lg text-ice-200/80 leading-relaxed">
                  Toutes nos portes sont équipées de joints magnétiques haute performance et de systèmes de fermeture 
                  automatique pour une efficacité énergétique maximale.
                </p>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-2xl glass-card">
                <img
                  src="/produits/porte-chambre-froide.jpg"
                  alt="Porte isotherme de chambre froide professionnelle"
                  className="w-full h-96 object-cover"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = '/chambre-froide-neg.jpg';
                  }}
                />
              </div>
            </div>

            {/* Types de portes */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="glass-card p-8 rounded-2xl border-l-4 border-ice-400">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-ice-500/10 flex items-center justify-center mr-4 text-ice-400">
                    <ArrowRightLeft className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Portes Coulissantes</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-emerald-400 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <strong className="text-white">Avantages :</strong>
                      <p className="text-ice-200/70">Gain d'espace, ouverture facile, idéal pour passages fréquents</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-emerald-400 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <strong className="text-white">Dimensions :</strong>
                      <p className="text-ice-200/70">Largeur : 800mm à 2000mm | Hauteur : 2000mm à 2500mm</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-emerald-400 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <strong className="text-white">Options :</strong>
                      <p className="text-ice-200/70">Vitre, ouverture automatique, serrure</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="glass-card p-8 rounded-2xl border-l-4 border-ice-500">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-ice-500/10 flex items-center justify-center mr-4 text-ice-400">
                    <DoorOpen className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Portes Battantes</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-emerald-400 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <strong className="text-white">Avantages :</strong>
                      <p className="text-ice-200/70">Étanchéité maximale, robustesse, installation simple</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-emerald-400 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <strong className="text-white">Dimensions :</strong>
                      <p className="text-ice-200/70">Largeur : 600mm à 1200mm | Hauteur : 2000mm à 2500mm</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-emerald-400 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <strong className="text-white">Options :</strong>
                      <p className="text-ice-200/70">Simple ou double battant, vitre, poignée ergonomique</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Caractéristiques */}
            <div className="mb-16">
              <h3 className="text-3xl font-display font-bold text-white mb-8 text-center">
                Caractéristiques Techniques
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="glass-card p-6 rounded-xl hover-lift">
                  <Shield className="w-10 h-10 text-ice-400 mb-4" />
                  <h4 className="font-bold text-white mb-2">Isolation Renforcée</h4>
                  <p className="text-ice-200/70">Coefficient U ≤ 0,8 W/(m².K) - Performance exceptionnelle</p>
                </div>
                <div className="glass-card p-6 rounded-xl hover-lift">
                  <Lock className="w-10 h-10 text-ice-400 mb-4" />
                  <h4 className="font-bold text-white mb-2">Étanchéité Parfaite</h4>
                  <p className="text-ice-200/70">Joints magnétiques double lèvre, résistants aux variations de température</p>
                </div>
                <div className="glass-card p-6 rounded-xl hover-lift">
                  <Gauge className="w-10 h-10 text-ice-400 mb-4" />
                  <h4 className="font-bold text-white mb-2">Résistance Mécanique</h4>
                  <p className="text-ice-200/70">Structure en acier galvanisé, résistant aux chocs et à la corrosion</p>
                </div>
                <div className="glass-card p-6 rounded-xl hover-lift">
                  <CheckCircle className="w-10 h-10 text-ice-400 mb-4" />
                  <h4 className="font-bold text-white mb-2">Fermeture Automatique</h4>
                  <p className="text-ice-200/70">Système de fermeture assistée pour économie d'énergie</p>
                </div>
                <div className="glass-card p-6 rounded-xl hover-lift">
                  <DoorOpen className="w-10 h-10 text-ice-400 mb-4" />
                  <h4 className="font-bold text-white mb-2">Ouverture Facile</h4>
                  <p className="text-ice-200/70">Poignées ergonomiques, même avec gants de protection</p>
                </div>
                <div className="glass-card p-6 rounded-xl hover-lift">
                  <Shield className="w-10 h-10 text-ice-400 mb-4" />
                  <h4 className="font-bold text-white mb-2">Sécurité</h4>
                  <p className="text-ice-200/70">Serrure intérieure/extérieure, ouverture de secours</p>
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
                  <h4 className="text-xl font-bold text-white mb-4">Porte Coulissante Standard</h4>
                  <p className="text-3xl font-bold text-white mb-2">À partir de <span className="text-ice-300">450€</span></p>
                  <p className="text-ice-200/70 text-sm mb-4">800x2000mm, sans vitre</p>
                  <ul className="text-left text-sm text-ice-200/70 space-y-2">
                    <li>• Avec vitre : +150€</li>
                    <li>• Ouverture auto : +300€</li>
                    <li>• Dimensions sur mesure : devis</li>
                  </ul>
                </div>
                <div className="glass-card p-6 rounded-xl">
                  <h4 className="text-xl font-bold text-white mb-4">Porte Battante Standard</h4>
                  <p className="text-3xl font-bold text-white mb-2">À partir de <span className="text-ice-300">380€</span></p>
                  <p className="text-ice-200/70 text-sm mb-4">800x2000mm, simple battant</p>
                  <ul className="text-left text-sm text-ice-200/70 space-y-2">
                    <li>• Double battant : +200€</li>
                    <li>• Avec vitre : +120€</li>
                    <li>• Dimensions sur mesure : devis</li>
                  </ul>
                </div>
              </div>
              <p className="text-center mt-6 text-ice-200/70">
                * Prix indicatifs TTC. Installation et main d'œuvre en supplément. Devis personnalisé gratuit.
              </p>
            </div>

            {/* Options disponibles */}
            <div className="mb-16">
              <h3 className="text-3xl font-display font-bold text-white mb-8 text-center">
                Options Disponibles
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="glass-card p-6 rounded-xl border-l-4 border-ice-500">
                  <h4 className="font-bold text-white mb-3 text-lg">Vitre de Visite</h4>
                  <p className="text-ice-200/70">Plexiglas renforcé, permet de voir l'intérieur sans ouvrir la porte</p>
                  <p className="text-ice-300 font-semibold mt-2">+120€ à +150€</p>
                </div>
                <div className="glass-card p-6 rounded-xl border-l-4 border-ice-500">
                  <h4 className="font-bold text-white mb-3 text-lg">Ouverture Automatique</h4>
                  <p className="text-ice-200/70">Détecteur de présence, ouverture/fermeture automatique</p>
                  <p className="text-ice-300 font-semibold mt-2">+300€ à +500€</p>
                </div>
                <div className="glass-card p-6 rounded-xl border-l-4 border-ice-500">
                  <h4 className="font-bold text-white mb-3 text-lg">Serrure Renforcée</h4>
                  <p className="text-ice-200/70">Sécurité renforcée avec serrure multipoints</p>
                  <p className="text-ice-300 font-semibold mt-2">+80€ à +120€</p>
                </div>
                <div className="glass-card p-6 rounded-xl border-l-4 border-ice-500">
                  <h4 className="font-bold text-white mb-3 text-lg">Poignée Ergonomique</h4>
                  <p className="text-ice-200/70">Poignée grande taille, facile à saisir même avec gants</p>
                  <p className="text-ice-300 font-semibold mt-2">+50€</p>
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
            Besoin d'une Porte Sur-Mesure ?
          </h2>
          <p className="text-xl text-ice-100/80 mb-10 max-w-2xl mx-auto">
            Contactez-nous pour un devis personnalisé selon vos dimensions et besoins spécifiques
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

