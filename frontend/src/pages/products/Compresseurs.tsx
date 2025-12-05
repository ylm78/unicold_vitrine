import { Snowflake, CheckCircle, Zap, Settings, Droplet, Gauge } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Compresseurs() {
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
            <Snowflake className="w-12 h-12 text-ice-400" />
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 text-white">
            Compresseurs & Groupes Frigorifiques
          </h1>
          <p className="text-xl md:text-2xl text-ice-100/80 max-w-3xl mx-auto">
            Solutions de réfrigération puissantes et fiables pour tous vos besoins
          </p>
        </div>
      </section>

      <section className="py-20 bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Description avec galerie */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                Groupes Frigorifiques Professionnels
              </h2>
              <p className="text-lg text-ice-200/80 leading-relaxed mb-6">
                Nos groupes frigorifiques sont conçus pour offrir des performances optimales dans les environnements 
                professionnels les plus exigeants. Que vous ayez besoin d'une chambre froide positive ou négative, 
                nous proposons des solutions adaptées à vos contraintes techniques et énergétiques.
              </p>
              <p className="text-lg text-ice-200/80 leading-relaxed mb-8">
                Tous nos équipements sont conformes aux normes européennes et bénéficient d'une garantie constructeur. 
                Nous proposons également un service de maintenance et de SAV pour garantir la longévité de vos installations.
              </p>
              
              {/* Galerie d'images */}
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="rounded-xl overflow-hidden shadow-lg glass-card">
                  <img
                    src="/produits/compresseur-1.jpg"
                    alt="Groupe frigorifique monobloc"
                    className="w-full h-48 object-cover"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg glass-card">
                  <img
                    src="/produits/compresseur-2.jpg"
                    alt="Compresseur hermétique professionnel"
                    className="w-full h-48 object-cover"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg glass-card">
                  <img
                    src="/produits/compresseur-3.jpg"
                    alt="Unité de condensation"
                    className="w-full h-48 object-cover"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Types de compresseurs */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="glass-card p-8 rounded-2xl border-l-4 border-ice-400">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-ice-500/10 flex items-center justify-center mr-4 text-ice-400">
                    <Zap className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Positif (0°C à +10°C)</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-emerald-400 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <strong className="text-white">Puissances :</strong>
                      <p className="text-ice-200/70">De 500W à 15kW selon volume</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-emerald-400 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <strong className="text-white">Applications :</strong>
                      <p className="text-ice-200/70">Conservation produits frais, restauration</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-emerald-400 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <strong className="text-white">Fluides frigorigènes :</strong>
                      <p className="text-ice-200/70">R134a, R404A, R407C (écologiques)</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="glass-card p-8 rounded-2xl border-l-4 border-ice-500">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-ice-500/10 flex items-center justify-center mr-4 text-ice-400">
                    <Snowflake className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Négatif (-18°C à -25°C)</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-emerald-400 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <strong className="text-white">Puissances :</strong>
                      <p className="text-ice-200/70">De 1kW à 20kW selon volume</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-emerald-400 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <strong className="text-white">Applications :</strong>
                      <p className="text-ice-200/70">Congélation, conservation longue durée</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-emerald-400 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <strong className="text-white">Technologie :</strong>
                      <p className="text-ice-200/70">Compresseurs scroll ou piston haute performance</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Caractéristiques techniques */}
            <div className="mb-16">
              <h3 className="text-3xl font-display font-bold text-white mb-8 text-center">
                Caractéristiques Techniques
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="glass-card p-6 rounded-xl hover-lift">
                  <Zap className="w-10 h-10 text-ice-400 mb-4" />
                  <h4 className="font-bold text-white mb-2">Haute Efficacité Énergétique</h4>
                  <p className="text-ice-200/70">Classe A+++, réduction jusqu'à 30% de consommation électrique</p>
                </div>
                <div className="glass-card p-6 rounded-xl hover-lift">
                  <Settings className="w-10 h-10 text-ice-400 mb-4" />
                  <h4 className="font-bold text-white mb-2">Régulation Précise</h4>
                  <p className="text-ice-200/70">Thermostat électronique avec affichage digital, ±0,5°C</p>
                </div>
                <div className="glass-card p-6 rounded-xl hover-lift">
                  <Droplet className="w-10 h-10 text-ice-400 mb-4" />
                  <h4 className="font-bold text-white mb-2">Dégivrage Automatique</h4>
                  <p className="text-ice-200/70">Système de dégivrage par gaz chaud ou électrique</p>
                </div>
                <div className="glass-card p-6 rounded-xl hover-lift">
                  <Gauge className="w-10 h-10 text-ice-400 mb-4" />
                  <h4 className="font-bold text-white mb-2">Protection Intégrée</h4>
                  <p className="text-ice-200/70">Sécurité haute/basse pression, protection moteur</p>
                </div>
                <div className="glass-card p-6 rounded-xl hover-lift">
                  <Snowflake className="w-10 h-10 text-ice-400 mb-4" />
                  <h4 className="font-bold text-white mb-2">Installation Flexible</h4>
                  <p className="text-ice-200/70">Monobloc ou split, intérieur ou extérieur</p>
                </div>
                <div className="glass-card p-6 rounded-xl hover-lift">
                  <CheckCircle className="w-10 h-10 text-ice-400 mb-4" />
                  <h4 className="font-bold text-white mb-2">Garantie 2 Ans</h4>
                  <p className="text-ice-200/70">Garantie constructeur + service après-vente</p>
                </div>
              </div>
            </div>

            {/* Prix */}
            <div className="glass-panel p-10 rounded-2xl mb-16 border-ice-500/30">
              <h3 className="text-3xl font-display font-bold text-white mb-6 text-center">
                Tarification
              </h3>
              <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                <div className="glass-card p-6 rounded-xl">
                  <h4 className="text-lg font-bold text-white mb-3">Petit Volume</h4>
                  <p className="text-2xl font-bold text-white mb-2">À partir de <span className="text-ice-300">1 200€</span></p>
                  <p className="text-ice-200/70 text-sm">Jusqu'à 10m³, positif</p>
                </div>
                <div className="glass-card p-6 rounded-xl">
                  <h4 className="text-lg font-bold text-white mb-3">Volume Moyen</h4>
                  <p className="text-2xl font-bold text-white mb-2">À partir de <span className="text-ice-300">2 500€</span></p>
                  <p className="text-ice-200/70 text-sm">10-30m³, positif ou négatif</p>
                </div>
                <div className="glass-card p-6 rounded-xl">
                  <h4 className="text-lg font-bold text-white mb-3">Grand Volume</h4>
                  <p className="text-2xl font-bold text-white mb-2">À partir de <span className="text-ice-300">4 500€</span></p>
                  <p className="text-ice-200/70 text-sm">30m³+, haute performance</p>
                </div>
              </div>
              <p className="text-center mt-6 text-ice-200/70">
                * Prix indicatifs TTC pour groupe monobloc. Installation et mise en service en supplément. Devis gratuit sur mesure.
              </p>
            </div>

            {/* Guide de sélection */}
            <div className="mb-16 glass-panel p-8 rounded-2xl">
              <h3 className="text-3xl font-display font-bold text-white mb-8 text-center">
                Comment Choisir Votre Groupe Frigorifique ?
              </h3>
              <div className="space-y-6 max-w-4xl mx-auto">
                <div className="glass-card p-6 rounded-xl border-l-4 border-ice-500">
                  <h4 className="font-bold text-white mb-3 text-lg">1. Volume de la chambre froide</h4>
                  <p className="text-ice-200/70">Le volume détermine la puissance nécessaire. Comptez environ 100W par m³ pour le positif, 150W par m³ pour le négatif.</p>
                </div>
                <div className="glass-card p-6 rounded-xl border-l-4 border-ice-500">
                  <h4 className="font-bold text-white mb-3 text-lg">2. Température de consigne</h4>
                  <p className="text-ice-200/70">Positif (0°C à +10°C) ou négatif (-18°C à -25°C) ? Cela détermine le type de compresseur nécessaire.</p>
                </div>
                <div className="glass-card p-6 rounded-xl border-l-4 border-ice-500">
                  <h4 className="font-bold text-white mb-3 text-lg">3. Emplacement d'installation</h4>
                  <p className="text-ice-200/70">Intérieur ou extérieur ? Monobloc ou split ? Nos experts vous conseillent selon vos contraintes.</p>
                </div>
                <div className="glass-card p-6 rounded-xl border-l-4 border-ice-500">
                  <h4 className="font-bold text-white mb-3 text-lg">4. Fréquence d'ouverture</h4>
                  <p className="text-ice-200/70">Un usage intensif nécessite une puissance supérieure pour maintenir la température.</p>
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
            Besoin d'un Conseil Technique ?
          </h2>
          <p className="text-xl text-ice-100/80 mb-10 max-w-2xl mx-auto">
            Notre équipe d'experts vous aide à choisir le groupe frigorifique adapté à votre projet
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

