import { Lightbulb, CheckCircle, Zap, Droplet, Shield, Snowflake } from 'lucide-react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../../components/Breadcrumb';

export default function Luminaires() {
  return (
    <div>
      <Breadcrumb items={[{ label: 'Produits', path: '/produits' }, { label: 'Luminaires LED' }]} />
      <section className="relative py-32 bg-white overflow-hidden border-b border-sky-500/10">
        {/* Lignes géométriques subtiles */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-sky-400 to-transparent"></div>
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-sky-400/50 to-transparent"></div>
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-sky-400 to-transparent"></div>
          <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-sky-400/50 to-transparent"></div>
        </div>
        {/* Accent lumineux subtil */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-sky-300/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-ice-400/5 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <div className="glass-panel w-24 h-24 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Lightbulb className="w-12 h-12 text-sky-500" />
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 text-slate-900">
            Luminaires LED 65W
          </h1>
          <p className="text-xl md:text-2xl text-slate-600/80 max-w-3xl mx-auto">
            Éclairage professionnel haute performance pour milieux frigorifiques
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Description */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">
                Éclairage LED Professionnel
              </h2>
              <p className="text-lg text-slate-600/80 leading-relaxed mb-6">
                Nos luminaires LED 65W sont spécialement conçus pour fonctionner dans les environnements froids 
                et humides des chambres froides. Ils offrent un éclairage puissant et uniforme tout en consommant 
                jusqu'à 80% d'énergie en moins que les solutions traditionnelles.
              </p>
              <p className="text-lg text-slate-600/80 leading-relaxed">
                Résistants aux températures extrêmes (-30°C à +50°C), ils garantissent une durée de vie exceptionnelle 
                et une maintenance réduite. Parfaits pour les chambres froides positives et négatives.
              </p>
            </div>

            {/* Caractéristiques principales */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="glass-card p-8 rounded-2xl border-l-4 border-sky-300">
                <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                  <Zap className="w-8 h-8 text-sky-500 mr-3" />
                  Performance Énergétique
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-emerald-400 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <strong className="text-slate-900">Puissance :</strong>
                      <p className="text-slate-600/70">65W LED (équivalent à 200W halogène)</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-emerald-400 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <strong className="text-slate-900">Économie d'énergie :</strong>
                      <p className="text-slate-600/70">Jusqu'à 80% de réduction par rapport aux solutions classiques</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-emerald-400 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <strong className="text-slate-900">Luminosité :</strong>
                      <p className="text-slate-600/70">6500 lumens, éclairage uniforme et puissant</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="glass-card p-8 rounded-2xl border-l-4 border-sky-500">
                <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                  <Snowflake className="w-8 h-8 text-sky-500 mr-3" />
                  Résistance aux Conditions Extrêmes
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-emerald-400 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <strong className="text-slate-900">Température :</strong>
                      <p className="text-slate-600/70">Fonctionnement garanti de -30°C à +50°C</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-emerald-400 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <strong className="text-slate-900">Protection :</strong>
                      <p className="text-slate-600/70">IP65 - Résistant à l'eau et à l'humidité</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-emerald-400 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <strong className="text-slate-900">Durée de vie :</strong>
                      <p className="text-slate-600/70">50 000 heures minimum (plus de 10 ans d'utilisation)</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Avantages */}
            <div className="mb-16">
              <h3 className="text-3xl font-display font-bold text-slate-900 mb-8 text-center">
                Avantages des Luminaires LED 65W
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="glass-card p-6 rounded-xl hover-lift">
                  <Zap className="w-10 h-10 text-sky-500 mb-4" />
                  <h4 className="font-bold text-slate-900 mb-2">Basse Consommation</h4>
                  <p className="text-slate-600/70">Réduction significative de votre facture d'électricité</p>
                </div>
                <div className="glass-card p-6 rounded-xl hover-lift">
                  <Droplet className="w-10 h-10 text-sky-500 mb-4" />
                  <h4 className="font-bold text-slate-900 mb-2">Résistant à l'Humidité</h4>
                  <p className="text-slate-600/70">Protection IP65, parfait pour les environnements humides</p>
                </div>
                <div className="glass-card p-6 rounded-xl hover-lift">
                  <Snowflake className="w-10 h-10 text-sky-500 mb-4" />
                  <h4 className="font-bold text-slate-900 mb-2">Fonctionne au Froid</h4>
                  <p className="text-slate-600/70">Démarrage instantané même à -30°C</p>
                </div>
                <div className="glass-card p-6 rounded-xl hover-lift">
                  <Shield className="w-10 h-10 text-sky-500 mb-4" />
                  <h4 className="font-bold text-slate-900 mb-2">Robuste & Durable</h4>
                  <p className="text-slate-600/70">Construction en acier inoxydable, résistant aux chocs</p>
                </div>
                <div className="glass-card p-6 rounded-xl hover-lift">
                  <Lightbulb className="w-10 h-10 text-sky-500 mb-4" />
                  <h4 className="font-bold text-slate-900 mb-2">Éclairage Uniforme</h4>
                  <p className="text-slate-600/70">Pas d'ombres, éclairage optimal pour le travail</p>
                </div>
                <div className="glass-card p-6 rounded-xl hover-lift">
                  <CheckCircle className="w-10 h-10 text-sky-500 mb-4" />
                  <h4 className="font-bold text-slate-900 mb-2">Maintenance Réduite</h4>
                  <p className="text-slate-600/70">Durée de vie exceptionnelle, moins d'interventions</p>
                </div>
              </div>
            </div>

            {/* Spécifications techniques */}
            <div className="mb-16 glass-panel p-8 rounded-2xl">
              <h3 className="text-3xl font-display font-bold text-slate-900 mb-8 text-center">
                Spécifications Techniques
              </h3>
              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                <div className="glass-card p-6 rounded-xl">
                  <h4 className="font-bold text-slate-900 mb-4">Caractéristiques Électriques</h4>
                  <ul className="space-y-2 text-slate-600/70">
                    <li>• Puissance : 65W</li>
                    <li>• Tension : 220-240V AC</li>
                    <li>• Fréquence : 50/60Hz</li>
                    <li>• Facteur de puissance : &gt;0,9</li>
                    <li>• Luminosité : 6500 lumens</li>
                  </ul>
                </div>
                <div className="glass-card p-6 rounded-xl">
                  <h4 className="font-bold text-slate-900 mb-4">Caractéristiques Physiques</h4>
                  <ul className="space-y-2 text-slate-600/70">
                    <li>• Dimensions : 600x150x80mm</li>
                    <li>• Poids : 2,5kg</li>
                    <li>• Matériau : Acier inoxydable</li>
                    <li>• Protection : IP65</li>
                    <li>• Température : -30°C à +50°C</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Prix */}
            <div className="glass-panel p-10 rounded-2xl mb-16 border-sky-500/30">
              <h3 className="text-3xl font-display font-bold text-slate-900 mb-6 text-center">
                Tarification
              </h3>
              <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                <div className="glass-card p-6 rounded-xl">
                  <h4 className="text-lg font-bold text-slate-900 mb-3">Unité</h4>
                  <p className="text-3xl font-bold text-slate-900 mb-2"><span className="text-slate-700">85€</span></p>
                  <p className="text-slate-600/70 text-sm">Luminaire LED 65W seul</p>
                </div>
                <div className="glass-card p-6 rounded-xl">
                  <h4 className="text-lg font-bold text-slate-900 mb-3">Pack 5 unités</h4>
                  <p className="text-3xl font-bold text-slate-900 mb-2"><span className="text-slate-700">395€</span></p>
                  <p className="text-slate-600/70 text-sm">Soit 79€ l'unité (-7%)</p>
                </div>
                <div className="glass-card p-6 rounded-xl">
                  <h4 className="text-lg font-bold text-slate-900 mb-3">Pack 10 unités</h4>
                  <p className="text-3xl font-bold text-slate-900 mb-2"><span className="text-slate-700">750€</span></p>
                  <p className="text-slate-600/70 text-sm">Soit 75€ l'unité (-12%)</p>
                </div>
              </div>
              <p className="text-center mt-6 text-slate-600/70">
                * Prix indicatifs TTC. Installation et câblage en supplément. Devis gratuit pour quantités importantes.
              </p>
            </div>

            {/* Installation */}
            <div className="mb-16">
              <h3 className="text-3xl font-display font-bold text-slate-900 mb-8 text-center">
                Installation & Utilisation
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="glass-card p-6 rounded-xl border-l-4 border-sky-500">
                  <h4 className="font-bold text-slate-900 mb-3 text-lg">Installation Simple</h4>
                  <p className="text-slate-600/70">Fixation au plafond ou sur les parois, raccordement électrique standard. Nos équipes peuvent assurer l'installation complète.</p>
                </div>
                <div className="glass-card p-6 rounded-xl border-l-4 border-sky-500">
                  <h4 className="font-bold text-slate-900 mb-3 text-lg">Recommandations</h4>
                  <p className="text-slate-600/70">1 luminaire pour 8-10m² de surface. Espacement recommandé : 2-3 mètres entre chaque luminaire.</p>
                </div>
                <div className="glass-card p-6 rounded-xl border-l-4 border-sky-500">
                  <h4 className="font-bold text-slate-900 mb-3 text-lg">Compatible Toutes Températures</h4>
                  <p className="text-slate-600/70">Fonctionne parfaitement en chambre froide positive (0°C à +10°C) et négative (-18°C à -25°C).</p>
                </div>
                <div className="glass-card p-6 rounded-xl border-l-4 border-sky-500">
                  <h4 className="font-bold text-slate-900 mb-3 text-lg">Garantie 3 Ans</h4>
                  <p className="text-slate-600/70">Garantie constructeur 3 ans pièces et main d'œuvre. Service après-vente disponible.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-sky-100 to-slate-900 text-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-64 h-64 bg-sky-300 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-ice-400 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Éclairez Votre Chambre Froide
          </h2>
          <p className="text-xl text-slate-600/80 mb-10 max-w-2xl mx-auto">
            Contactez-nous pour un devis personnalisé selon vos besoins d'éclairage
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center bg-accent hover:bg-accent-hover text-slate-900 px-10 py-4 rounded-xl font-bold text-lg transition-all shadow-[0_0_25px_rgba(249,115,22,0.5)] hover:shadow-[0_0_35px_rgba(249,115,22,0.7)] hover:scale-105 active:scale-95"
            >
              Demander un Devis
              <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              to="/produits"
              className="inline-flex items-center glass-panel text-slate-900 border border-sky-500/30 px-10 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all"
            >
              Voir tous les produits
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

