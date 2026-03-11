import { FlaskConical, CheckCircle, Snowflake, Shield, FileCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import { getServiceSchema } from '../../utils/schema';

export default function LaboratoiresPharmaceutiques() {
  return (
    <div>
      <SEO
        title="Froid pour Laboratoires Pharmaceutiques | Chambres Climatisées | Unicold"
        description="Solutions frigorifiques pour laboratoires pharmaceutiques : chambres à température contrôlée, traçabilité, conformité BPF et bonnes pratiques. Île-de-France et Centre-Val de Loire."
        keywords="chambre froide pharmaceutique, froid laboratoire, stockage médicaments, chaîne du froid pharma, BPF laboratoire"
        canonical="https://unicold.fr/solutions/laboratoires-pharmaceutiques"
        schema={getServiceSchema("Froid laboratoires pharmaceutiques", "Chambres à température contrôlée et solutions frigorifiques pour laboratoires pharmaceutiques. Conformité BPF.")}
      />
      <section className="relative py-32 bg-white overflow-hidden border-b border-sky-500/10">
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <div className="w-20 h-20 rounded-2xl bg-violet-500/20 flex items-center justify-center mx-auto mb-6">
            <FlaskConical className="w-10 h-10 text-violet-600" />
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 text-slate-900">
            Froid pour Laboratoires Pharmaceutiques
          </h1>
          <p className="text-xl md:text-2xl text-slate-600/80 max-w-3xl mx-auto">
            Chambres à température contrôlée et chaîne du froid pour le stockage de produits et médicaments
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="glass-card p-8 rounded-2xl">
              <div className="w-16 h-16 rounded-2xl bg-violet-500/20 flex items-center justify-center mb-6 text-violet-600">
                <Snowflake className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Températures contrôlées</h3>
              <p className="text-slate-600/70 mb-6">
                Chambres +2°C à +8°C (vaccins, produits sensibles), zones négatives si besoin. Enregistrement et alarmes pour conformité.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start"><CheckCircle className="w-5 h-5 text-emerald-400 mr-3 flex-shrink-0 mt-1" /><span className="text-slate-600/70">Traçabilité température continue</span></li>
                <li className="flex items-start"><CheckCircle className="w-5 h-5 text-emerald-400 mr-3 flex-shrink-0 mt-1" /><span className="text-slate-600/70">Alarmes et monitoring</span></li>
              </ul>
            </div>
            <div className="glass-card p-8 rounded-2xl">
              <div className="w-16 h-16 rounded-2xl bg-violet-500/20 flex items-center justify-center mb-6 text-violet-600">
                <FileCheck className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Conformité et BPF</h3>
              <p className="text-slate-600/70 mb-6">
                Documentation technique, qualification possible, matériaux adaptés aux environnements contrôlés.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start"><CheckCircle className="w-5 h-5 text-emerald-400 mr-3 flex-shrink-0 mt-1" /><span className="text-slate-600/70">Bonnes pratiques de fabrication</span></li>
                <li className="flex items-start"><CheckCircle className="w-5 h-5 text-emerald-400 mr-3 flex-shrink-0 mt-1" /><span className="text-slate-600/70">Maintenance préventive dédiée</span></li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <Link to="/contact" className="inline-flex items-center bg-sky-500 hover:bg-sky-600 text-white font-bold px-8 py-4 rounded-xl transition-all">
              Demander un devis laboratoire / pharma
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
