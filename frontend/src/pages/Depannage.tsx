import { Phone, Clock, MapPin, Wrench, AlertTriangle, CheckCircle, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';

export default function Depannage() {
  return (
    <div>
      <Breadcrumb items={[{ label: 'Dépannage Urgence 24/7' }]} />
      
      {/* Hero Section Urgence */}
      <section className="relative py-32 bg-gradient-to-br from-red-950 via-white to-red-950 overflow-hidden border-b border-red-500/20">
        {/* Lignes géométriques subtiles */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-400 to-transparent"></div>
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-400 to-transparent"></div>
        </div>
        {/* Accent lumineux */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <div className="inline-block mb-6 px-6 py-3 bg-red-500/20 border-2 border-red-500/50 rounded-full text-red-300 font-bold text-lg animate-pulse">
            ⚡ URGENCE 24/7
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 text-slate-900">
            Dépannage Express
            <br />
            <span className="text-red-400">Chambre Froide</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600/80 max-w-3xl mx-auto mb-10">
            Intervention d'urgence sous 4h partout en Île-de-France et Centre-Val de Loire
          </p>
          
          {/* Bouton d'appel géant */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+33172541360"
              className="group relative px-12 py-6 bg-red-600 hover:bg-red-500 text-slate-900 rounded-2xl font-bold text-2xl transition-all shadow-[0_0_50px_rgba(239,68,68,0.6)] hover:shadow-[0_0_70px_rgba(239,68,68,0.8)] hover:scale-105 active:scale-95 flex items-center gap-4"
            >
              <Phone className="w-8 h-8 group-hover:animate-pulse" />
              <span>Appeler le technicien de garde</span>
              <span className="text-lg">+33 1 72 54 13 60</span>
            </a>
            <div className="text-center">
              <p className="text-emerald-400 font-bold text-lg mb-1">Numéro gratuit</p>
              <p className="text-slate-700 text-sm">Ou appelez le +33 6 62 64 94 21</p>
            </div>
          </div>
        </div>
      </section>

      {/* Zones d'intervention */}
      <section className="py-16 bg-white border-b border-sky-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">
              Zones d'Intervention
            </h2>
            <p className="text-slate-600/70 text-lg">
              Intervention rapide sur toute l'Île-de-France et le Centre-Val de Loire
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="glass-panel p-6 rounded-xl text-center">
              <MapPin className="w-12 h-12 text-red-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">Île-de-France</h3>
              <p className="text-slate-600/70 text-sm mb-3">
                Paris, Seine-et-Marne (77), Yvelines (78), Essonne (91), Hauts-de-Seine (92), Seine-Saint-Denis (93), Val-de-Marne (94), Val-d'Oise (95)
              </p>
              <p className="text-red-400 font-bold">Intervention sous 2h</p>
            </div>
            
            <div className="glass-panel p-6 rounded-xl text-center">
              <MapPin className="w-12 h-12 text-red-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">Centre-Val de Loire</h3>
              <p className="text-slate-600/70 text-sm mb-3">
                Eure-et-Loir (28), Loiret (45), Loir-et-Cher (41), Indre (36), Indre-et-Loire (37), Cher (18)
              </p>
              <p className="text-red-400 font-bold">Intervention sous 4h</p>
            </div>
            
            <div className="glass-panel p-6 rounded-xl text-center">
              <Clock className="w-12 h-12 text-red-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">Disponibilité</h3>
              <p className="text-slate-600/70 text-sm mb-3">
                24h/24 et 7j/7, y compris les jours fériés
              </p>
              <p className="text-emerald-400 font-bold">Astreinte permanente</p>
            </div>
          </div>
        </div>
      </section>

      {/* Types de pannes */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">
              Types de Pannes Prises en Charge
            </h2>
            <p className="text-slate-600/70 text-lg">
              Notre équipe de techniciens qualifiés intervient sur tous types de pannes
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Wrench, title: 'Panne de groupe frigorifique', desc: 'Compresseur, condenseur, évaporateur' },
              { icon: AlertTriangle, title: 'Défaut de température', desc: 'Chambre qui ne refroidit plus ou surchauffe' },
              { icon: Zap, title: 'Problème électrique', desc: 'Panne de courant, fusible, disjoncteur' },
              { icon: Wrench, title: 'Fuite de fluide frigorigène', desc: 'Détection et réparation des fuites' },
              { icon: AlertTriangle, title: 'Défaut de régulation', desc: 'Thermostat, sonde, régulateur défaillant' },
              { icon: Wrench, title: 'Problème de porte', desc: 'Joint défectueux, serrure, gonds' },
            ].map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div key={idx} className="glass-card p-6 rounded-xl hover-lift">
                  <IconComponent className="w-10 h-10 text-red-400 mb-4" />
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600/70 text-sm">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tarifs et Devis */}
      <section className="py-20 bg-gradient-to-br from-white to-red-50/20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="glass-panel p-10 rounded-2xl border-2 border-red-500/30">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">
                Tarifs de Dépannage
              </h2>
              <p className="text-slate-600/70 text-lg">
                Devis immédiat et transparent, sans surprise
              </p>
            </div>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4 p-4 glass-card rounded-xl">
                <CheckCircle className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Déplacement</h3>
                  <p className="text-slate-600/70 text-sm">
                    Forfait déplacement selon la zone (Île-de-France ou Centre-Val de Loire)
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-4 glass-card rounded-xl">
                <CheckCircle className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Diagnostic</h3>
                  <p className="text-slate-600/70 text-sm">
                    Diagnostic complet gratuit si intervention effectuée
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-4 glass-card rounded-xl">
                <CheckCircle className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Intervention</h3>
                  <p className="text-slate-600/70 text-sm">
                    Tarification horaire selon la complexité, devis avant intervention
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-4 glass-card rounded-xl">
                <CheckCircle className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Pièces détachées</h3>
                  <p className="text-slate-600/70 text-sm">
                    Stock permanent de pièces courantes, commande express si nécessaire
                  </p>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-slate-600/80 mb-6">
                <strong className="text-slate-900">Devis immédiat par téléphone</strong> - Pas de frais cachés
              </p>
              <a
                href="tel:+33172541360"
                className="inline-flex items-center px-10 py-4 bg-red-600 hover:bg-red-500 text-slate-900 rounded-xl font-bold text-lg transition-all shadow-[0_0_30px_rgba(239,68,68,0.5)] hover:scale-105"
              >
                <Phone className="w-6 h-6 mr-3" />
                Obtenir un devis immédiat
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Pourquoi nous choisir */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">
              Pourquoi Choisir Unicold pour le Dépannage ?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Clock, title: 'Rapidité', desc: 'Intervention sous 4h, priorité aux urgences critiques' },
              { icon: Wrench, title: 'Expertise', desc: 'Techniciens qualifiés QualiFroid, 15 ans d\'expérience' },
              { icon: CheckCircle, title: 'Transparence', desc: 'Devis détaillé avant intervention, pas de surprise' },
              { icon: Zap, title: 'Disponibilité', desc: '24h/24 et 7j/7, y compris jours fériés' },
            ].map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div key={idx} className="glass-card p-6 rounded-xl text-center hover-lift">
                  <IconComponent className="w-12 h-12 text-red-400 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600/70 text-sm">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-br from-red-950/50 to-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">
            Votre chambre froide est en panne ?
          </h2>
          <p className="text-xl text-slate-600/80 mb-10">
            N'attendez pas que la situation s'aggrave. Appelez-nous maintenant pour une intervention rapide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+33172541360"
              className="px-10 py-5 bg-red-600 hover:bg-red-500 text-slate-900 rounded-xl font-bold text-xl transition-all shadow-[0_0_40px_rgba(239,68,68,0.6)] hover:scale-105 flex items-center justify-center gap-3"
            >
              <Phone className="w-7 h-7" />
              +33 1 72 54 13 60 (Gratuit)
            </a>
            <Link
              to="/contact"
              className="px-10 py-5 glass-panel rounded-xl text-slate-900 font-bold text-xl transition-all hover:bg-white/10 flex items-center justify-center gap-3"
            >
              Demander un devis
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

