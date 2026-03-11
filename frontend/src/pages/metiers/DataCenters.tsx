import { Server, CheckCircle, Snowflake, Zap, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import { getServiceSchema } from '../../utils/schema';

export default function DataCenters() {
  return (
    <div>
      <SEO
        title="Climatisation pour Centres de Données (Data Centers) | Unicold"
        description="Solutions de climatisation et froid pour centres de données : refroidissement des salles serveurs, CTA, optimisation énergétique. Île-de-France et Centre-Val de Loire."
        keywords="climatisation data center, refroidissement salle serveurs, CTA centre de données, froid industriel data center"
        canonical="https://unicold.fr/solutions/centres-donnees"
        schema={getServiceSchema("Climatisation centres de données", "Solutions de climatisation et refroidissement pour data centers et salles serveurs.")}
      />
      <section className="relative py-32 bg-white overflow-hidden border-b border-sky-500/10">
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <div className="w-20 h-20 rounded-2xl bg-sky-500/20 flex items-center justify-center mx-auto mb-6">
            <Server className="w-10 h-10 text-sky-600" />
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 text-slate-900">
            Climatisation pour Centres de Données
          </h1>
          <p className="text-xl md:text-2xl text-slate-600/80 max-w-3xl mx-auto">
            Refroidissement des salles serveurs et optimisation de la consommation des CTA
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="glass-card p-8 rounded-2xl">
              <div className="w-16 h-16 rounded-2xl bg-sky-500/20 flex items-center justify-center mb-6 text-sky-600">
                <Snowflake className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Refroidissement des salles</h3>
              <p className="text-slate-600/70 mb-6">
                Climatisation de salles techniques et data centers : maintien des températures de consigne, CTA et groupes frigorifiques.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start"><CheckCircle className="w-5 h-5 text-emerald-400 mr-3 flex-shrink-0 mt-1" /><span className="text-slate-600/70">CTA et fluides conformes</span></li>
                <li className="flex items-start"><CheckCircle className="w-5 h-5 text-emerald-400 mr-3 flex-shrink-0 mt-1" /><span className="text-slate-600/70">Maintenance préventive</span></li>
              </ul>
            </div>
            <div className="glass-card p-8 rounded-2xl">
              <div className="w-16 h-16 rounded-2xl bg-sky-500/20 flex items-center justify-center mb-6 text-sky-600">
                <Zap className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Réduction de la consommation</h3>
              <p className="text-slate-600/70 mb-6">
                Nettoyage des échangeurs, optimisation des consignes et des plages de fonctionnement pour réduire la consommation électrique des centrales de traitement d&apos;air.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start"><CheckCircle className="w-5 h-5 text-emerald-400 mr-3 flex-shrink-0 mt-1" /><span className="text-slate-600/70">Audits et conseil</span></li>
                <li className="flex items-start"><CheckCircle className="w-5 h-5 text-emerald-400 mr-3 flex-shrink-0 mt-1" /><span className="text-slate-600/70">Contrats de maintenance CTA</span></li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <Link to="/contact" className="inline-flex items-center bg-sky-500 hover:bg-sky-600 text-white font-bold px-8 py-4 rounded-xl transition-all">
              Demander un devis data center / CTA
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
