import { Award, Users, Target, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
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
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-4 text-white">À Propos d'Unicold</h1>
        </div>
      </section>

      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <img
                  src="/azz.jpg"
                  alt="Équipe Unicold"
                  className="rounded-xl shadow-2xl w-full h-96 object-cover glass-card"
                />
              </div>
              <div>
                <h2 className="text-3xl font-display font-bold text-white mb-6">Notre Histoire</h2>
                <p className="text-ice-200/80 leading-relaxed mb-4">
                  Fondée il y a plus de 15 ans, Unicold s'est imposée comme un acteur
                  majeur dans le domaine des chambres froides professionnelles en France.
                </p>
                <p className="text-ice-200/80 leading-relaxed">
                  Nous sommes fiers d'avoir accompagné plus de 500 professionnels
                  dans leurs projets de chambres froides.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-20">
              <div className="glass-card p-8 rounded-2xl text-center hover-lift">
                <div className="w-16 h-16 rounded-2xl bg-ice-500/10 flex items-center justify-center mx-auto mb-6 text-ice-400">
                  <Award className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Excellence</h3>
                <p className="text-ice-200/70">Produits et services de haute qualité</p>
              </div>
              <div className="glass-card p-8 rounded-2xl text-center hover-lift">
                <div className="w-16 h-16 rounded-2xl bg-ice-500/10 flex items-center justify-center mx-auto mb-6 text-ice-400">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Proximité</h3>
                <p className="text-ice-200/70">Relation de confiance avec nos clients</p>
              </div>
              <div className="glass-card p-8 rounded-2xl text-center hover-lift">
                <div className="w-16 h-16 rounded-2xl bg-ice-500/10 flex items-center justify-center mx-auto mb-6 text-ice-400">
                  <Target className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Innovation</h3>
                <p className="text-ice-200/70">Solutions toujours plus performantes</p>
              </div>
            </div>

            {/* Section Stock et Atelier */}
            <div className="mb-20">
              <h2 className="text-3xl font-display font-bold text-white mb-8 text-center">
                Notre Stock et Nos Installations
              </h2>
              <p className="text-lg text-ice-200/70 text-center mb-12 max-w-3xl mx-auto">
                Nous disposons d'un stock important de matériaux et d'équipements pour répondre rapidement à vos besoins. 
                Nos installations modernes garantissent la qualité et la disponibilité de nos produits.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="rounded-2xl overflow-hidden shadow-2xl glass-card">
                  <img
                    src="/a-propos/stock-entrepot.jpg"
                    alt="Entrepôt de stockage Unicold"
                    className="w-full h-80 object-cover"
                    onError={(e) => {
                      e.currentTarget.src = '/azz.jpg';
                    }}
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-2xl glass-card">
                  <img
                    src="/a-propos/atelier-equipements.jpg"
                    alt="Atelier et équipements Unicold"
                    className="w-full h-80 object-cover"
                    onError={(e) => {
                      e.currentTarget.src = '/surmesure.jpg';
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="text-center">
              <Link
                to="/contact"
                className="inline-flex items-center bg-gradient-to-r from-ice-600 to-blue-600 hover:from-ice-500 hover:to-blue-500 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all shadow-[0_0_20px_rgba(14,165,233,0.4)] hover:scale-105"
              >
                Nous contacter
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
