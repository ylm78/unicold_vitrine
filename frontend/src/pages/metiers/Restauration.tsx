import { UtensilsCrossed, CheckCircle, Snowflake, Shield, Zap, Package } from 'lucide-react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../../components/Breadcrumb';

export default function Restauration() {
  return (
    <div>
      <Breadcrumb items={[{ label: 'Solutions', path: '/services' }, { label: 'Restauration & Métiers de Bouche' }]} />
      
      <section className="relative py-32 bg-slate-950 overflow-hidden border-b border-ice-500/10">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-ice-400 to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <div className="w-20 h-20 rounded-2xl bg-orange-500/20 flex items-center justify-center mx-auto mb-6">
            <UtensilsCrossed className="w-10 h-10 text-orange-400" />
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 text-white">
            Solutions pour la
            <br />
            <span className="text-orange-400">Restauration & Métiers de Bouche</span>
          </h1>
          <p className="text-xl md:text-2xl text-ice-100/80 max-w-3xl mx-auto">
            Chambres froides adaptées aux contraintes des restaurants, traiteurs, boulangeries et boucheries
          </p>
        </div>
      </section>

      {/* Spécificités */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Nos Solutions pour Votre Métier
            </h2>
            <p className="text-ice-200/70 text-lg">
              Des équipements conçus pour répondre aux exigences de la restauration
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="glass-card p-8 rounded-2xl">
              <div className="w-16 h-16 rounded-2xl bg-orange-500/20 flex items-center justify-center mb-6 text-orange-400">
                <Snowflake className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Chambres Compactes</h3>
              <p className="text-ice-200/70 mb-6">
                Optimisation de l'espace pour les cuisines de restaurant où chaque m² compte. 
                Chambres froides positives et négatives adaptées aux espaces réduits.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-ice-200/70">Chambres de 3m³ à 20m³</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-ice-200/70">Groupes monoblocs silencieux</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-ice-200/70">Installation en 1-2 jours</span>
                </li>
              </ul>
            </div>

            <div className="glass-card p-8 rounded-2xl">
              <div className="w-16 h-16 rounded-2xl bg-orange-500/20 flex items-center justify-center mb-6 text-orange-400">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Conformité HACCP</h3>
              <p className="text-ice-200/70 mb-6">
                Tous nos équipements respectent les normes d'hygiène alimentaire pour garantir 
                la sécurité sanitaire de vos produits.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-ice-200/70">Matériaux lisses et lavables</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-ice-200/70">Traçabilité des températures</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-ice-200/70">Éclairage LED adapté</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Types de restauration */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Restaurants', desc: 'Chambres positives pour légumes et produits frais, négatives pour viandes et poissons' },
              { title: 'Traiteurs', desc: 'Solutions modulaires pour stockage de préparations, avec zones à températures différentes' },
              { title: 'Boulangeries', desc: 'Chambres positives pour pâtes et produits frais, avec contrôle d\'hygrométrie' },
              { title: 'Boucheries', desc: 'Chambres négatives pour congélation, positives pour produits frais' },
              { title: 'Poissonneries', desc: 'Chambres négatives haute performance, avec sols adaptés et ventilation renforcée' },
              { title: 'Pâtisseries', desc: 'Chambres positives avec contrôle précis de l\'hygrométrie pour les produits sensibles' },
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
      <section className="py-20 bg-gradient-to-br from-slate-950 to-orange-950/20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Avantages pour la Restauration
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Zap, title: 'Gain d\'espace', desc: 'Chambres compactes optimisées pour petites cuisines' },
              { icon: Shield, title: 'Hygiène garantie', desc: 'Conformité HACCP, matériaux lavables' },
              { icon: Package, title: 'Installation rapide', desc: 'Mise en service en 1-2 jours, sans interruption' },
              { icon: Snowflake, title: 'Économie d\'énergie', desc: 'Groupes classe A+++, jusqu\'à 30% d\'économie' },
            ].map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div key={idx} className="glass-card p-6 rounded-xl text-center hover-lift">
                  <IconComponent className="w-12 h-12 text-orange-400 mx-auto mb-4" />
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
            Besoin d'une solution pour votre restaurant ?
          </h2>
          <p className="text-xl text-ice-200/80 mb-10">
            Nos experts vous conseillent gratuitement pour trouver la solution adaptée à vos contraintes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-10 py-5 text-white rounded-xl font-bold text-xl transition-all shadow-[0_0_30px_rgba(249,115,22,0.5)] hover:scale-105 flex items-center justify-center gap-3"
              style={{ backgroundColor: '#f97316' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#ea580c'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#f97316'}
            >
              Demander un devis gratuit
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

