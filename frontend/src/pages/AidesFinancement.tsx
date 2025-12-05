import { Euro, FileText, CheckCircle, TrendingUp, Shield, Calculator } from 'lucide-react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';

export default function AidesFinancement() {
  return (
    <div>
      <Breadcrumb items={[{ label: 'Aides & Financement' }]} />
      
      <section className="relative py-32 bg-slate-950 overflow-hidden border-b border-ice-500/10">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-ice-400 to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <div className="w-20 h-20 rounded-2xl bg-emerald-500/20 flex items-center justify-center mx-auto mb-6">
            <Euro className="w-10 h-10 text-emerald-400" />
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 text-white">
            Aides & Financement
          </h1>
          <p className="text-xl md:text-2xl text-ice-100/80 max-w-3xl mx-auto">
            Réduisez le coût de votre installation grâce aux aides et subventions disponibles
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-4xl mx-auto px-4">
          <div className="glass-panel p-10 rounded-2xl border-2 border-emerald-500/30">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-display font-bold text-white mb-4">
                Financer votre installation jusqu'à 30%
              </h2>
              <p className="text-ice-200/80 text-lg leading-relaxed">
                L'installation d'équipements frigorifiques performants peut être subventionnée grâce aux 
                <strong className="text-emerald-400"> Certificats d'Économies d'Énergie (CEE)</strong> et autres dispositifs d'aide.
                Nous vous accompagnons dans le montage de votre dossier.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Aides disponibles */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Aides Disponibles
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card p-8 rounded-2xl">
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 flex items-center justify-center mb-6 text-emerald-400">
                <FileText className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Certificats d'Économies d'Énergie (CEE)</h3>
              <p className="text-ice-200/70 mb-6">
                Les CEE permettent de financer une partie de l'installation d'équipements frigorifiques 
                haute performance. Le montant varie selon le type d'équipement et sa performance énergétique.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <span className="text-white font-semibold">Éligibilité :</span>
                    <span className="text-ice-200/70"> Groupes frigorifiques classe A+++, variateurs de vitesse</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <span className="text-white font-semibold">Montant :</span>
                    <span className="text-ice-200/70"> Jusqu'à 20-30% du coût d'installation</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <span className="text-white font-semibold">Délai :</span>
                    <span className="text-ice-200/70"> Dossier traité sous 2-4 semaines</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card p-8 rounded-2xl">
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 flex items-center justify-center mb-6 text-emerald-400">
                <TrendingUp className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Suramortissement Fiscal</h3>
              <p className="text-ice-200/70 mb-6">
                Dispositif permettant d'amortir plus rapidement les équipements économes en énergie, 
                réduisant ainsi l'impôt sur les sociétés.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <span className="text-white font-semibold">Éligibilité :</span>
                    <span className="text-ice-200/70"> Équipements classe A+++</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <span className="text-white font-semibold">Avantage :</span>
                    <span className="text-ice-200/70"> Amortissement accéléré, réduction d'impôt</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <span className="text-white font-semibold">Application :</span>
                    <span className="text-ice-200/70"> Déclaration fiscale annuelle</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card p-8 rounded-2xl">
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 flex items-center justify-center mb-6 text-emerald-400">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Aides Régionales</h3>
              <p className="text-ice-200/70 mb-6">
                Certaines régions proposent des aides complémentaires pour la rénovation énergétique 
                des entreprises. Renseignez-vous auprès de votre région.
              </p>
              <div className="space-y-3">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-ice-200/70">Aides variables selon les régions</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-ice-200/70">Cumulables avec les CEE</span>
                </div>
              </div>
            </div>

            <div className="glass-card p-8 rounded-2xl">
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 flex items-center justify-center mb-6 text-emerald-400">
                <Calculator className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Financement Classique</h3>
              <p className="text-ice-200/70 mb-6">
                Solutions de financement adaptées à votre situation : crédit-bail, location avec option d'achat, 
                ou financement bancaire classique.
              </p>
              <div className="space-y-3">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-ice-200/70">Crédit-bail pour étaler les paiements</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-ice-200/70">Taux compétitifs, devis personnalisé</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accompagnement */}
      <section className="py-20 bg-gradient-to-br from-slate-950 to-emerald-950/20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="glass-panel p-10 rounded-2xl border-2 border-emerald-500/30">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-display font-bold text-white mb-6">
                Notre Accompagnement
              </h2>
              <p className="text-ice-200/80 text-lg mb-8">
                Nous vous accompagnons dans toutes les démarches pour optimiser le financement de votre projet
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-4 glass-card rounded-xl">
                <CheckCircle className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-white mb-2">Évaluation de l'éligibilité</h4>
                  <p className="text-ice-200/70 text-sm">
                    Nous analysons votre projet et déterminons les aides auxquelles vous êtes éligible
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 glass-card rounded-xl">
                <CheckCircle className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-white mb-2">Montage du dossier CEE</h4>
                  <p className="text-ice-200/70 text-sm">
                    Nous préparons et déposons votre dossier CEE auprès des organismes compétents
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 glass-card rounded-xl">
                <CheckCircle className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-white mb-2">Suivi administratif</h4>
                  <p className="text-ice-200/70 text-sm">
                    Nous suivons votre dossier jusqu'à l'obtention des aides et vous tenons informé
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 glass-card rounded-xl">
                <CheckCircle className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-white mb-2">Conseil en financement</h4>
                  <p className="text-ice-200/70 text-sm">
                    Nous vous orientons vers les solutions de financement les plus adaptées à votre situation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
            Réduisez le coût de votre installation
          </h2>
          <p className="text-xl text-ice-200/80 mb-10">
            Contactez-nous pour une évaluation gratuite de votre éligibilité aux aides
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-10 py-5 text-white rounded-xl font-bold text-xl transition-all shadow-[0_0_30px_rgba(16,185,129,0.5)] hover:scale-105 flex items-center justify-center gap-3"
              style={{ backgroundColor: '#10b981' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#059669'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#10b981'}
            >
              Évaluer mon éligibilité
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

