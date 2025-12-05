import { Factory, CheckCircle, Zap, Package, Gauge, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../../components/Breadcrumb';

export default function Industrie() {
  return (
    <div>
      <Breadcrumb items={[{ label: 'Solutions', path: '/services' }, { label: 'Industrie & Logistique' }]} />
      
      <section className="relative py-32 bg-slate-950 overflow-hidden border-b border-ice-500/10">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-ice-400 to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <div className="w-20 h-20 rounded-2xl bg-blue-500/20 flex items-center justify-center mx-auto mb-6">
            <Factory className="w-10 h-10 text-blue-400" />
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 text-white">
            Solutions Industrielles
            <br />
            <span className="text-blue-400">& Logistique</span>
          </h1>
          <p className="text-xl md:text-2xl text-ice-100/80 max-w-3xl mx-auto">
            Entrepôts frigorifiques, chambres de grande capacité et solutions sur-mesure pour l'industrie agroalimentaire
          </p>
        </div>
      </section>

      {/* Spécificités */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Solutions pour Grands Volumes
            </h2>
            <p className="text-ice-200/70 text-lg">
              Des équipements conçus pour répondre aux besoins de l'industrie et de la logistique
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="glass-card p-8 rounded-2xl">
              <div className="w-16 h-16 rounded-2xl bg-blue-500/20 flex items-center justify-center mb-6 text-blue-400">
                <Package className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Entrepôts Frigorifiques</h3>
              <p className="text-ice-200/70 mb-6">
                Conception et installation d'entrepôts frigorifiques de grande capacité (100m³ à plusieurs milliers de m³) 
                pour le stockage industriel et la logistique.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-ice-200/70">Chambres modulaires extensibles</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-ice-200/70">Groupes frigorifiques haute puissance</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-ice-200/70">Système de monitoring à distance</span>
                </li>
              </ul>
            </div>

            <div className="glass-card p-8 rounded-2xl">
              <div className="w-16 h-16 rounded-2xl bg-blue-500/20 flex items-center justify-center mb-6 text-blue-400">
                <Zap className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Optimisation Énergétique</h3>
              <p className="text-ice-200/70 mb-6">
                Réduction significative de la consommation énergétique grâce à des équipements haute performance 
                et des systèmes de régulation intelligents.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-ice-200/70">Groupes classe A+++</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-ice-200/70">Variateurs de vitesse (inverter)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-ice-200/70">Jusqu'à 40% d'économie d'énergie</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Secteurs */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Agroalimentaire', desc: 'Stockage de produits transformés, surgelés, avec zones multi-températures' },
              { title: 'Logistique', desc: 'Plateformes de distribution, entrepôts de stockage, chaîne du froid complète' },
              { title: 'Pharmaceutique', desc: 'Chambres à température contrôlée pour médicaments et vaccins' },
              { title: 'Chimie', desc: 'Stockage de produits chimiques nécessitant des températures spécifiques' },
              { title: 'Distribution', desc: 'Centres de distribution avec zones positives et négatives' },
              { title: 'Transformation', desc: 'Chambres pour process industriels, maturation, stockage intermédiaire' },
            ].map((item, idx) => (
              <div key={idx} className="glass-card p-6 rounded-xl hover-lift">
                <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                <p className="text-ice-200/70 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-20 bg-gradient-to-br from-slate-950 to-blue-950/20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Avantages pour l'Industrie
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Gauge, title: 'Grandes capacités', desc: 'De 100m³ à plusieurs milliers de m³' },
              { icon: TrendingUp, title: 'ROI rapide', desc: 'Économies d\'énergie jusqu\'à 40%' },
              { icon: Package, title: 'Sur-mesure', desc: 'Conception adaptée à vos process' },
              { icon: Zap, title: 'Monitoring IoT', desc: 'Suivi à distance, alertes automatiques' },
            ].map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div key={idx} className="glass-card p-6 rounded-xl text-center hover-lift">
                  <IconComponent className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-ice-200/70 text-sm">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
            Projet industriel ou logistique ?
          </h2>
          <p className="text-xl text-ice-200/80 mb-10">
            Nos ingénieurs étudient votre projet et vous proposent une solution optimale
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-10 py-5 text-white rounded-xl font-bold text-xl transition-all shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:scale-105 flex items-center justify-center gap-3"
              style={{ backgroundColor: '#3b82f6' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#2563eb'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#3b82f6'}
            >
              Demander une étude
            </Link>
            <a
              href="tel:0172541360"
              className="px-10 py-5 glass-panel rounded-xl text-white font-bold text-xl transition-all hover:bg-white/10 flex items-center justify-center gap-3"
            >
              Nous appeler
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

