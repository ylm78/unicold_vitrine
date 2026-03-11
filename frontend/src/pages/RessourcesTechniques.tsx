import SEO from '../components/SEO';
import { getServiceSchema } from '../utils/schema';
import { Link } from 'react-router-dom';
import { FileText, Thermometer, Wrench } from 'lucide-react';

export default function RessourcesTechniques() {
  return (
    <div>
      <SEO
        title="Guides Techniques | Fluides Frigorigènes, Dimensionnement, Maintenance | Unicold"
        description="Ressources techniques Unicold : réglementation fluides frigorigènes 2026, guide de dimensionnement chambres froides (W/m³), fréquence maintenance préventive et obligations F-Gaz."
        keywords="fluides frigorigènes, GWP, R-744, R-290, R-454C, dimensionnement chambre froide, charge thermique, maintenance F-Gaz, réglementation 2026"
        canonical="https://unicold.fr/ressources-techniques"
        schema={getServiceSchema("Guides techniques chambres froides", "Ressources et tableaux techniques : fluides frigorigènes, dimensionnement, maintenance préventive.")}
      />

      {/* Hero */}
      <section className="relative pt-20 md:pt-24 pb-16 md:pb-20 bg-white overflow-hidden border-b border-sky-500/10">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-sky-400 to-transparent"></div>
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-sky-400/50 to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-3 md:mb-4 text-slate-900">
            Guides Techniques
          </h1>
          <p className="text-base md:text-lg text-slate-600/80 max-w-2xl mx-auto">
            Données de référence pour le dimensionnement et la conformité de vos installations frigorifiques.
          </p>
        </div>
      </section>

      {/* Contenu */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 space-y-16">
          {/* Tableau 1 : Fluides Frigorigènes */}
          <article className="glass-card rounded-2xl p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-sky-500/10 flex items-center justify-center text-sky-500">
                <Thermometer className="w-6 h-6" />
              </div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-slate-900">
                Fluides Frigorigènes – Réglementation 2026
              </h2>
            </div>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Unicold accompagne la transition vers des fluides à faible impact environnemental. Le tableau ci-dessous présente les fluides recommandés selon le GWP (Potentiel de Réchauffement Global) et leur disponibilité réglementaire en 2026.
            </p>
            <div className="overflow-x-auto rounded-xl border border-sky-200">
              <table className="w-full border-collapse text-left text-sm md:text-base">
                <thead>
                  <tr className="bg-sky-600 text-white">
                    <th className="p-3 md:p-4 border border-sky-200 font-semibold">Fluide Frigorigène</th>
                    <th className="p-3 md:p-4 border border-sky-200 font-semibold">Type</th>
                    <th className="p-3 md:p-4 border border-sky-200 font-semibold">GWP (PRG)</th>
                    <th className="p-3 md:p-4 border border-sky-200 font-semibold">Usage Recommandé</th>
                    <th className="p-3 md:p-4 border border-sky-200 font-semibold">Disponibilité 2026</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white">
                    <td className="p-3 md:p-4 border border-slate-200 font-semibold text-slate-900">R-744 (CO2)</td>
                    <td className="p-3 md:p-4 border border-slate-200 text-slate-700">Naturel</td>
                    <td className="p-3 md:p-4 border border-slate-200 text-slate-700">1</td>
                    <td className="p-3 md:p-4 border border-slate-200 text-slate-700">Froid Industriel / Négatif</td>
                    <td className="p-3 md:p-4 border border-slate-200 text-emerald-600 font-medium">Pérenne (Optimal)</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="p-3 md:p-4 border border-slate-200 font-semibold text-slate-900">R-290 (Propane)</td>
                    <td className="p-3 md:p-4 border border-slate-200 text-slate-700">Naturel</td>
                    <td className="p-3 md:p-4 border border-slate-200 text-slate-700">3</td>
                    <td className="p-3 md:p-4 border border-slate-200 text-slate-700">Chillers / PAC / Groupes logés</td>
                    <td className="p-3 md:p-4 border border-slate-200 text-emerald-600 font-medium">Pérenne</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="p-3 md:p-4 border border-slate-200 font-semibold text-slate-900">R-454C</td>
                    <td className="p-3 md:p-4 border border-slate-200 text-slate-700">HFO / HFC</td>
                    <td className="p-3 md:p-4 border border-slate-200 text-slate-700">148</td>
                    <td className="p-3 md:p-4 border border-slate-200 text-slate-700">Froid Commercial</td>
                    <td className="p-3 md:p-4 border border-slate-200 text-amber-600 font-medium">Réglementé</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </article>

          {/* Tableau 2 : Puissances / Dimensionnement */}
          <article className="glass-card rounded-2xl p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-sky-500/10 flex items-center justify-center text-sky-500">
                <FileText className="w-6 h-6" />
              </div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-slate-900">
                Guide des Puissances – Calcul de Charge Thermique
              </h2>
            </div>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Pour dimensionner correctement une chambre froide ou une installation de froid industriel, voici des ordres de grandeur en watts par m³ (ou par m²) selon l’application et la température de consigne.
            </p>
            <div className="overflow-x-auto rounded-xl border border-sky-200">
              <table className="w-full border-collapse text-left text-sm md:text-base">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="p-3 md:p-4 border border-slate-200 font-semibold text-slate-900">Application</th>
                    <th className="p-3 md:p-4 border border-slate-200 font-semibold text-slate-900 text-center">Température (°C)</th>
                    <th className="p-3 md:p-4 border border-slate-200 font-semibold text-slate-900 text-center">Ratio W/m³ (est.)</th>
                    <th className="p-3 md:p-4 border border-slate-200 font-semibold text-slate-900">Type d'Installation</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white">
                    <td className="p-3 md:p-4 border border-slate-200 font-medium text-slate-900">Chambre Froide Positive</td>
                    <td className="p-3 md:p-4 border border-slate-200 text-slate-700 text-center">0°C / +4°C</td>
                    <td className="p-3 md:p-4 border border-slate-200 text-slate-700 text-center">80 – 100 W</td>
                    <td className="p-3 md:p-4 border border-slate-200 text-slate-700">Groupe de condensation / Split</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="p-3 md:p-4 border border-slate-200 font-medium text-slate-900">Chambre Froide Négative</td>
                    <td className="p-3 md:p-4 border border-slate-200 text-slate-700 text-center">-18°C / -25°C</td>
                    <td className="p-3 md:p-4 border border-slate-200 text-slate-700 text-center">120 – 150 W</td>
                    <td className="p-3 md:p-4 border border-slate-200 text-slate-700">Bicylindre / Semi-hermétique</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="p-3 md:p-4 border border-slate-200 font-medium text-slate-900">Climatisation Bureaux</td>
                    <td className="p-3 md:p-4 border border-slate-200 text-slate-700 text-center">+21°C</td>
                    <td className="p-3 md:p-4 border border-slate-200 text-slate-700 text-center">100 W / m²</td>
                    <td className="p-3 md:p-4 border border-slate-200 text-slate-700">VRV / DRV Multi-split</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </article>

          {/* Tableau 3 : Maintenance */}
          <article className="glass-card rounded-2xl p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-sky-500/10 flex items-center justify-center text-sky-500">
                <Wrench className="w-6 h-6" />
              </div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-slate-900">
                Maintenance et Obligations Légales
              </h2>
            </div>
            <p className="text-slate-600 mb-6 leading-relaxed">
              La maintenance préventive et le respect des obligations F-Gaz garantissent la durée de vie de vos équipements et la conformité réglementaire. Voici les points de contrôle recommandés par Unicold.
            </p>
            <div className="overflow-x-auto rounded-xl border border-sky-200">
              <table className="w-full border-collapse text-left text-sm md:text-base">
                <caption className="sr-only">Fréquence de maintenance préventive Unicold</caption>
                <thead>
                  <tr className="bg-sky-600 text-white">
                    <th className="p-3 md:p-4 border border-sky-200 font-semibold">Point de contrôle</th>
                    <th className="p-3 md:p-4 border border-sky-200 font-semibold">Fréquence</th>
                    <th className="p-3 md:p-4 border border-sky-200 font-semibold">Objectif</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white">
                    <td className="p-3 md:p-4 border border-slate-200 text-slate-700">Étanchéité du circuit (F-Gaz)</td>
                    <td className="p-3 md:p-4 border border-slate-200 text-slate-700">Annuel</td>
                    <td className="p-3 md:p-4 border border-slate-200 text-slate-700">Conformité et Environnement</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="p-3 md:p-4 border border-slate-200 text-slate-700">Nettoyage des échangeurs (CTA)</td>
                    <td className="p-3 md:p-4 border border-slate-200 text-slate-700">Semestriel</td>
                    <td className="p-3 md:p-4 border border-slate-200 text-slate-700">Hygiène de l'air et Rendement</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="p-3 md:p-4 border border-slate-200 text-slate-700">Analyse d'huile compresseur</td>
                    <td className="p-3 md:p-4 border border-slate-200 text-slate-700">Annuel</td>
                    <td className="p-3 md:p-4 border border-slate-200 text-slate-700">Prévention de casse mécanique</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </article>

          {/* CTA */}
          <div className="text-center pt-8">
            <p className="text-slate-600 mb-6">Besoin d'un dimensionnement sur-mesure ou d'un contrat de maintenance ?</p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-sky-500 hover:bg-sky-600 text-white font-bold px-8 py-4 rounded-xl transition-all"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
