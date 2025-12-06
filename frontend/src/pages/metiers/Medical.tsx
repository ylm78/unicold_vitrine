import { Shield, CheckCircle, Thermometer, FileText, AlertCircle, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../../components/Breadcrumb';

export default function Medical() {
  return (
    <div>
      <Breadcrumb items={[{ label: 'Solutions', path: '/services' }, { label: 'Médical & Pharmaceutique' }]} />
      
      <section className="relative py-32 bg-white overflow-hidden border-b border-sky-500/10">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-sky-400 to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <div className="w-20 h-20 rounded-2xl bg-purple-500/20 flex items-center justify-center mx-auto mb-6">
            <Shield className="w-10 h-10 text-purple-400" />
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 text-slate-900">
            Solutions Médicales
            <br />
            <span className="text-purple-400">& Pharmaceutiques</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600/80 max-w-3xl mx-auto">
            Chambres froides haute précision pour médicaments, vaccins et produits pharmaceutiques
          </p>
        </div>
      </section>

      {/* Spécificités */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">
              Exigences du Secteur Médical
            </h2>
            <p className="text-slate-600/70 text-lg">
              Des équipements conformes aux normes pharmaceutiques et médicales les plus strictes
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="glass-card p-8 rounded-2xl">
              <div className="w-16 h-16 rounded-2xl bg-purple-500/20 flex items-center justify-center mb-6 text-purple-400">
                <Thermometer className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Précision de Température</h3>
              <p className="text-slate-600/70 mb-6">
                Régulation ultra-précise avec variations maximales de ±0,5°C. Systèmes de monitoring 
                en continu avec alertes automatiques en cas de dérive.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-slate-600/70">Régulation PID haute précision</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-slate-600/70">Sondes multiples avec redondance</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-slate-600/70">Enregistrement continu des températures</span>
                </li>
              </ul>
            </div>

            <div className="glass-card p-8 rounded-2xl">
              <div className="w-16 h-16 rounded-2xl bg-purple-500/20 flex items-center justify-center mb-6 text-purple-400">
                <FileText className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Traçabilité & Conformité</h3>
              <p className="text-slate-600/70 mb-6">
                Systèmes de traçabilité complets pour audits et contrôles réglementaires. 
                Documentation conforme aux normes BPF (Bonnes Pratiques de Fabrication) et GDP.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-slate-600/70">Enregistrement horodaté des températures</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-slate-600/70">Rapports d'audit automatiques</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-slate-600/70">Conformité BPF et GDP</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Applications */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Pharmacies', desc: 'Chambres pour médicaments à +2°C à +8°C, avec monitoring continu' },
              { title: 'Laboratoires', desc: 'Chambres de stockage pour échantillons, réactifs, à températures variables' },
              { title: 'Hôpitaux', desc: 'Chambres pour vaccins, sang, organes, avec traçabilité complète' },
              { title: 'Biotechnologie', desc: 'Chambres ultra-basses températures (-80°C) pour produits biologiques' },
              { title: 'Centres de distribution', desc: 'Entrepôts pharmaceutiques avec zones multi-températures' },
              { title: 'Recherche', desc: 'Chambres pour essais cliniques, avec documentation complète' },
            ].map((item, idx) => (
              <div key={idx} className="glass-card p-6 rounded-xl hover-lift">
                <h4 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h4>
                <p className="text-slate-600/70 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sécurité */}
      <section className="py-20 bg-gradient-to-br from-white to-purple-50/20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">
              Sécurité & Fiabilité
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: AlertCircle, title: 'Alertes automatiques', desc: 'SMS et email en cas de dérive de température' },
              { icon: Lock, title: 'Sécurité renforcée', desc: 'Accès contrôlé, alarmes anti-intrusion' },
              { icon: Shield, title: 'Redondance', desc: 'Groupes de secours, alimentation de secours' },
              { icon: FileText, title: 'Documentation', desc: 'Rapports d\'audit, certificats de conformité' },
            ].map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div key={idx} className="glass-card p-6 rounded-xl text-center hover-lift">
                  <IconComponent className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600/70 text-sm">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">
            Projet médical ou pharmaceutique ?
          </h2>
          <p className="text-xl text-slate-600/80 mb-10">
            Nos ingénieurs spécialisés vous accompagnent pour une solution conforme aux normes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-10 py-5 text-slate-900 rounded-xl font-bold text-xl transition-all shadow-[0_0_30px_rgba(168,85,247,0.5)] hover:scale-105 flex items-center justify-center gap-3"
              style={{ backgroundColor: '#a855f7' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#9333ea'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#a855f7'}
            >
              Demander une étude
            </Link>
            <a
              href="tel:+33172541360"
              className="px-10 py-5 glass-panel rounded-xl text-slate-900 font-bold text-xl transition-all hover:bg-white/10 flex items-center justify-center gap-3"
            >
              Nous appeler
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

