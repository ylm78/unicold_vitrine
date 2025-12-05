import { Snowflake, Wrench, Package, Settings, Phone, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
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
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 text-white">Nos Services</h1>
          <p className="text-xl md:text-2xl text-ice-100/80 max-w-3xl mx-auto">
            Des solutions complètes et professionnelles pour tous vos besoins en réfrigération
          </p>
        </div>
      </section>

      <section className="py-24 bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="w-20 h-20 rounded-2xl bg-ice-500/10 flex items-center justify-center mb-6 text-ice-400">
                  <Snowflake className="w-10 h-10" />
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                  Vente de Chambres Froides
                </h2>
                <p className="text-ice-200/80 mb-8 text-lg leading-relaxed">
                  Nous proposons une large gamme de chambres froides adaptées à tous les secteurs
                  professionnels : restauration, commerce, industrie agroalimentaire.
                </p>
                <div className="space-y-5">
                  <div className="flex items-start space-x-4 p-4 glass-card rounded-xl">
                    <CheckCircle className="w-7 h-7 text-emerald-400 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-white mb-2 text-lg">Chambres Froides Positives</h4>
                      <p className="text-ice-200/70 leading-relaxed">
                        De 0°C à +10°C, idéales pour la conservation des fruits, légumes et produits frais
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-4 glass-card rounded-xl">
                    <CheckCircle className="w-7 h-7 text-ice-400 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-white mb-2 text-lg">Chambres Froides Négatives</h4>
                      <p className="text-ice-200/70 leading-relaxed">
                        De -18°C à -25°C, parfaites pour la congélation et la conservation longue durée
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="rounded-2xl overflow-hidden shadow-2xl hover-lift">
                  <img
                    src="/chambre-froide-neg.jpg"
                    alt="Chambre froide professionnelle"
                    className="w-full h-96 object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Services supplémentaires */}
            <div className="grid md:grid-cols-3 gap-8">
              <div className="glass-card p-8 rounded-2xl hover-lift">
                <div className="w-16 h-16 rounded-2xl bg-ice-500/10 flex items-center justify-center mb-6 text-ice-400">
                  <Wrench className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Installation Professionnelle</h3>
                <p className="text-ice-200/70 leading-relaxed">
                  Installation complète par nos techniciens qualifiés avec mise en service et formation.
                </p>
              </div>

              <div className="glass-card p-8 rounded-2xl hover-lift">
                <div className="w-16 h-16 rounded-2xl bg-ice-500/10 flex items-center justify-center mb-6 text-ice-400">
                  <Settings className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Maintenance & SAV</h3>
                <p className="text-ice-200/70 leading-relaxed">
                  Service après-vente et maintenance préventive pour garantir la longévité de vos équipements.
                </p>
              </div>

              <div className="glass-card p-8 rounded-2xl hover-lift">
                <div className="w-16 h-16 rounded-2xl bg-ice-500/10 flex items-center justify-center mb-6 text-ice-400">
                  <Package className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Conception Sur-Mesure</h3>
                <p className="text-ice-200/70 leading-relaxed">
                  Études personnalisées et fabrication adaptée à vos contraintes d'espace et besoins spécifiques.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-ice-900 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <div className="glass-panel w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Phone className="w-10 h-10 text-ice-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Besoin d'un conseil ?</h2>
          <p className="text-xl text-ice-100/80 mb-10 max-w-2xl mx-auto">
            Notre équipe technique est à votre disposition pour répondre à toutes vos questions
            et vous accompagner dans votre projet.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-ice-600 hover:bg-ice-500 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all shadow-[0_0_20px_rgba(14,165,233,0.4)] hover:scale-105"
          >
            Nous contacter
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
