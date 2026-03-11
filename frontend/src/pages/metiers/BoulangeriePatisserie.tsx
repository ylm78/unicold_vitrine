import { Croissant, CheckCircle, Snowflake, Shield, Zap, Package } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import { getServiceSchema } from '../../utils/schema';

export default function BoulangeriePatisserie() {
  return (
    <div>
      <SEO
        title="Chambres Froides pour Boulangeries et Pâtisseries | Unicold"
        description="Solutions frigorifiques pour boulangeries et pâtisseries : chambres positives pour pâtes et ingrédients, contrôle d'hygrométrie, conformité HACCP. Île-de-France et Centre-Val de Loire."
        keywords="chambre froide boulangerie, chambre froide pâtisserie, froid boulangerie, conservation pâte, hygrométrie pâtisserie"
        canonical="https://unicold.fr/solutions/boulangerie-patisserie"
        schema={getServiceSchema("Chambres froides boulangeries et pâtisseries", "Solutions de froid pour boulangeries et pâtisseries : conservation pâtes, ingrédients, conformité HACCP.")}
      />
      <section className="relative py-32 bg-white overflow-hidden border-b border-sky-500/10">
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <div className="w-20 h-20 rounded-2xl bg-amber-500/20 flex items-center justify-center mx-auto mb-6">
            <Croissant className="w-10 h-10 text-amber-600" />
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 text-slate-900">
            Froid pour Boulangeries et Pâtisseries
          </h1>
          <p className="text-xl md:text-2xl text-slate-600/80 max-w-3xl mx-auto">
            Chambres froides et cellules de fermentation adaptées aux contraintes des boulangeries et pâtisseries
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="glass-card p-8 rounded-2xl">
              <div className="w-16 h-16 rounded-2xl bg-amber-500/20 flex items-center justify-center mb-6 text-amber-600">
                <Snowflake className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Chambres Positives</h3>
              <p className="text-slate-600/70 mb-6">
                Conservation des pâtes, ingrédients et produits frais entre 0°C et +4°C. Contrôle de l&apos;hygrométrie pour les pâtisseries sensibles.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start"><CheckCircle className="w-5 h-5 text-emerald-400 mr-3 flex-shrink-0 mt-1" /><span className="text-slate-600/70">Cellules à pâtes, chambres à farine</span></li>
                <li className="flex items-start"><CheckCircle className="w-5 h-5 text-emerald-400 mr-3 flex-shrink-0 mt-1" /><span className="text-slate-600/70">Groupes silencieux pour commerces</span></li>
              </ul>
            </div>
            <div className="glass-card p-8 rounded-2xl">
              <div className="w-16 h-16 rounded-2xl bg-amber-500/20 flex items-center justify-center mb-6 text-amber-600">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Conformité HACCP</h3>
              <p className="text-slate-600/70 mb-6">
                Matériaux lavables, traçabilité des températures, conformité hygiène alimentaire pour les contrôles et labels.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start"><CheckCircle className="w-5 h-5 text-emerald-400 mr-3 flex-shrink-0 mt-1" /><span className="text-slate-600/70">Enregistreur de température</span></li>
                <li className="flex items-start"><CheckCircle className="w-5 h-5 text-emerald-400 mr-3 flex-shrink-0 mt-1" /><span className="text-slate-600/70">Sol et parois hygiéniques</span></li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <Link to="/contact" className="inline-flex items-center bg-sky-500 hover:bg-sky-600 text-white font-bold px-8 py-4 rounded-xl transition-all">
              Devis gratuit boulangerie / pâtisserie
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
