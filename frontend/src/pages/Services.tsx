import { Snowflake, Wrench, Package, Settings, Phone, CheckCircle, Truck, FileText, Shield, Zap, Building2, UtensilsCrossed, Factory, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';

export default function Services() {
  return (
    <div>
      <Breadcrumb items={[{ label: 'Services' }]} />
      <section className="relative py-32 bg-white overflow-hidden border-b border-sky-500/10">
        {/* Lignes géométriques subtiles */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-sky-400 to-transparent"></div>
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-sky-400/50 to-transparent"></div>
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-sky-400 to-transparent"></div>
          <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-sky-400/50 to-transparent"></div>
        </div>
        {/* Accent lumineux subtil */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-sky-300/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-ice-400/5 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 text-slate-900">Nos Services</h1>
          <p className="text-xl md:text-2xl text-slate-600/80 max-w-3xl mx-auto">
            Des solutions complètes et professionnelles pour tous vos besoins en réfrigération
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="w-20 h-20 rounded-2xl bg-sky-300/10 flex items-center justify-center mb-6 text-sky-500">
                  <Snowflake className="w-10 h-10" />
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">
                  Vente de Chambres Froides
                </h2>
                <p className="text-slate-600/80 mb-8 text-lg leading-relaxed">
                  Nous proposons une large gamme de chambres froides adaptées à tous les secteurs
                  professionnels avec des solutions sur-mesure selon vos contraintes.
                </p>
                
                {/* Secteurs d'activité */}
                <div className="mb-8">
                  <h4 className="font-bold text-slate-900 mb-4 text-lg">Secteurs d'intervention :</h4>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center space-x-2 p-3 glass-card rounded-lg">
                      <UtensilsCrossed className="w-5 h-5 text-sky-500" />
                      <span className="text-slate-600/80 text-sm">Restauration</span>
                    </div>
                    <div className="flex items-center space-x-2 p-3 glass-card rounded-lg">
                      <Building2 className="w-5 h-5 text-sky-500" />
                      <span className="text-slate-600/80 text-sm">Commerce</span>
                    </div>
                    <div className="flex items-center space-x-2 p-3 glass-card rounded-lg">
                      <Factory className="w-5 h-5 text-sky-500" />
                      <span className="text-slate-600/80 text-sm">Industrie Agroalimentaire</span>
                    </div>
                    <div className="flex items-center space-x-2 p-3 glass-card rounded-lg">
                      <Shield className="w-5 h-5 text-sky-500" />
                      <span className="text-slate-600/80 text-sm">Secteur Médical</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-5">
                  <div className="flex items-start space-x-4 p-4 glass-card rounded-xl">
                    <CheckCircle className="w-7 h-7 text-emerald-400 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-slate-900 mb-2 text-lg">Chambres Froides Positives</h4>
                      <p className="text-slate-600/70 leading-relaxed mb-2">
                        De 0°C à +10°C, idéales pour la conservation des fruits, légumes et produits frais
                      </p>
                      <p className="text-xs text-slate-700/60">
                        <strong>Applications :</strong> Restaurants, supermarchés, traiteurs, fleuristes
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-4 glass-card rounded-xl">
                    <CheckCircle className="w-7 h-7 text-sky-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-slate-900 mb-2 text-lg">Chambres Froides Négatives</h4>
                      <p className="text-slate-600/70 leading-relaxed mb-2">
                        De -18°C à -25°C, parfaites pour la congélation et la conservation longue durée
                      </p>
                      <p className="text-xs text-slate-700/60">
                        <strong>Applications :</strong> Boucheries, poissonneries, entrepôts logistiques, laboratoires
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
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </div>

            {/* Installation - Z-pattern inversé */}
            <div className="grid md:grid-cols-2 gap-12 items-center mt-20">
              <div className="order-2 md:order-2">
                <div className="rounded-2xl overflow-hidden shadow-2xl hover-lift">
                  <img
                    src="/azz.jpg"
                    alt="Installation professionnelle chambre froide"
                    className="w-full h-96 object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="order-1 md:order-1">
                <div className="w-20 h-20 rounded-2xl bg-sky-300/10 flex items-center justify-center mb-6 text-sky-500">
                  <Truck className="w-10 h-10" />
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">
                  Installation Professionnelle
                </h2>
                <p className="text-slate-600/80 mb-6 text-lg leading-relaxed">
                  Installation complète par nos techniciens qualifiés QualiFroid avec mise en service et formation du personnel.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-emerald-400 mr-3 flex-shrink-0 mt-1" />
                    <span className="text-slate-600/70">Montage par équipes certifiées QualiFroid</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-emerald-400 mr-3 flex-shrink-0 mt-1" />
                    <span className="text-slate-600/70">Mise en service et réglages optimaux</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-emerald-400 mr-3 flex-shrink-0 mt-1" />
                    <span className="text-slate-600/70">Formation du personnel aux bonnes pratiques</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-emerald-400 mr-3 flex-shrink-0 mt-1" />
                    <span className="text-slate-600/70">Conformité HACCP garantie</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Services supplémentaires */}
            <div className="grid md:grid-cols-2 gap-8 mt-20">
              <div className="glass-card p-8 rounded-2xl hover-lift border-2 border-red-500/30 relative overflow-hidden">
                <div className="absolute top-2 right-2 bg-red-500 text-slate-900 text-xs font-bold px-3 py-1 rounded-full animate-pulse">
                  URGENCE 24/7
                </div>
                <div className="w-16 h-16 rounded-2xl bg-red-500/20 flex items-center justify-center mb-6 text-red-400">
                  <Phone className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Maintenance & Dépannage 24/7</h3>
                <p className="text-slate-600/70 leading-relaxed mb-3">
                  Service après-vente et maintenance préventive pour garantir la longévité de vos équipements.
                </p>
                <p className="text-red-400 font-bold text-sm mb-4">
                  ⚡ Dépannage d'urgence sous 4h - 24h/24 et 7j/7
                </p>
                <ul className="space-y-2 text-sm text-slate-600/70">
                  <li>• Intervention express en cas de panne critique</li>
                  <li>• Maintenance préventive programmée</li>
                  <li>• Optimisation des performances</li>
                </ul>
              </div>

              <div className="glass-card p-8 rounded-2xl hover-lift">
                <div className="w-16 h-16 rounded-2xl bg-sky-300/10 flex items-center justify-center mb-6 text-sky-500">
                  <FileText className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Conception Sur-Mesure</h3>
                <p className="text-slate-600/70 leading-relaxed mb-4">
                  Études personnalisées et fabrication adaptée à vos contraintes d'espace et besoins spécifiques.
                </p>
                <ul className="space-y-2 text-sm text-slate-600/70">
                  <li>• Bureau d'études thermique intégré</li>
                  <li>• Plans 3D et visualisation</li>
                  <li>• Découpes sur mesure selon plans</li>
                </ul>
              </div>
            </div>

            {/* Contrat de Maintenance - Section dédiée */}
            <div className="mt-20 glass-panel p-10 rounded-2xl border-sky-500/30">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="w-20 h-20 rounded-2xl bg-emerald-500/20 flex items-center justify-center mb-6 text-emerald-400">
                    <Shield className="w-10 h-10" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">
                    Pourquoi souscrire à un contrat de maintenance Unicold ?
                  </h2>
                  <p className="text-slate-600/80 mb-6 text-lg leading-relaxed">
                    Un contrat de maintenance préventive vous garantit la pérennité de vos installations et évite les pannes coûteuses.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Zap className="w-6 h-6 text-emerald-400 mr-3 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-slate-900 mb-1">Réduction des coûts</h4>
                        <p className="text-slate-600/70 text-sm">Jusqu'à 30% d'économie sur la consommation énergétique grâce à l'optimisation régulière</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Shield className="w-6 h-6 text-emerald-400 mr-3 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-slate-900 mb-1">Garantie de continuité</h4>
                        <p className="text-slate-600/70 text-sm">Intervention prioritaire et pièces détachées en stock pour vos équipements</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-emerald-400 mr-3 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-slate-900 mb-1">Conformité réglementaire</h4>
                        <p className="text-slate-600/70 text-sm">Traçabilité des interventions et respect des normes HACCP</p>
                      </div>
                    </div>
                  </div>
                  <Link
                    to="/contact"
                    className="inline-flex items-center mt-6 bg-accent hover:bg-accent-hover text-slate-900 px-8 py-3 rounded-xl font-bold transition-all shadow-[0_0_25px_rgba(249,115,22,0.5)] hover:scale-105"
                    style={{ backgroundColor: '#f97316' }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#ea580c'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#f97316'}
                  >
                    Demander un devis de maintenance
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </div>
                <div className="glass-card p-8 rounded-xl">
                  <h3 className="text-xl font-bold text-slate-900 mb-6">Contrats disponibles :</h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-sky-500 pl-4">
                      <h4 className="font-bold text-slate-900 mb-2">Contrat Essentiel</h4>
                      <p className="text-slate-600/70 text-sm mb-2">2 visites annuelles + dépannage</p>
                      <p className="text-slate-700 font-semibold">À partir de 800€/an</p>
                    </div>
                    <div className="border-l-4 border-emerald-500 pl-4">
                      <h4 className="font-bold text-slate-900 mb-2">Contrat Premium</h4>
                      <p className="text-slate-600/70 text-sm mb-2">4 visites annuelles + dépannage 24/7 + optimisation</p>
                      <p className="text-slate-700 font-semibold">À partir de 1 500€/an</p>
                    </div>
                    <div className="border-l-4 border-accent pl-4">
                      <h4 className="font-bold text-slate-900 mb-2">Contrat Entreprise</h4>
                      <p className="text-slate-600/70 text-sm mb-2">Sur-mesure pour parcs d'équipements</p>
                      <p className="text-slate-700 font-semibold">Devis personnalisé</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-sky-100 to-slate-900 text-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <div className="glass-panel w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Phone className="w-10 h-10 text-sky-500" />
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Besoin d'un conseil ?</h2>
          <p className="text-xl text-slate-600/80 mb-10 max-w-2xl mx-auto">
            Notre équipe technique est à votre disposition pour répondre à toutes vos questions
            et vous accompagner dans votre projet.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-sky-500 hover:bg-sky-300 text-slate-900 px-10 py-4 rounded-xl font-bold text-lg transition-all shadow-[0_0_20px_rgba(14,165,233,0.4)] hover:scale-105"
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
