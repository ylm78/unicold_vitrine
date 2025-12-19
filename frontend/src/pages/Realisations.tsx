import { useState, lazy, Suspense } from 'react';
import { X, PlayCircle } from 'lucide-react';
import SEO from '../components/SEO';
import { getServiceSchema } from '../utils/schema';

// Lazy load des vidéos pour réduire le bundle initial
const restaurantVideo = '/assets/2022.mp4';
const restaurantVideo2 = '/assets/2023.mp4';

export default function Realisations() {
  const [activeVideoProject, setActiveVideoProject] = useState<any>(null);

  const projects = [
    {
      id: 'restaurant-paris',
      title: 'Restaurant Gastronomique - Paris',
      category: 'Restauration',
      location: 'Pontault-Combault (77)',
      date: '2025',
      image: '/chambre-froide-neg.jpg',
      client: 'Restaurant étoilé',
      challenge: 'Espace réduit sous escalier.',
      solution: 'Chambres imbriquées sur-mesure, groupe déporté silencieux.',
      result: 'Installation en 3 jours, conforme HACCP.',
      videoUrl: restaurantVideo,
    },
    {
      id: 'berliner',
      title: 'Berliner - La Défense',
      category: 'Restauration',
      location: 'La Défense (92)',
      date: '2025',
      image: '/azz.jpg',
      client: 'Restaurant Berliner',
      challenge: 'Restaurant en activité, contraintes bruit et espace.',
      solution: 'Groupe silencieux, installation horaires décalés.',
      result: 'Sans interruption, économie énergie 25%.',
      videoUrl: restaurantVideo2,
    },
    {
      id: 'boucherie-versailles',
      title: 'Boucherie Traditionnelle - Versailles',
      category: 'Commerce',
      location: 'Versailles (78)',
      date: '2024',
      image: '/realisations/entrepot-panneaux.jpg',
      client: 'Boucherie artisanale',
      challenge: 'Espace réduit, besoin double chambre (positive et négative).',
      solution: 'Panneaux sur mesure, groupe déporté, installation 2 jours.',
      result: 'Double chambre fonctionnelle en 8m².',
      images: ['/realisations/entrepot-panneaux.jpg'],
    },
    {
      id: 'couloir-chambres',
      title: 'Complexe Multi-Chambres - Centre-Val de Loire',
      category: 'Industrie',
      location: 'Centre-Val de Loire',
      date: '2024',
      image: '/realisations/couloir-chambres.jpg',
      client: 'Entreprise agroalimentaire',
      challenge: '5 chambres à températures différentes (-25°C à +8°C).',
      solution: 'Conception modulaire, monitoring à distance.',
      result: '200m² installés, optimisation énergétique.',
      images: ['/realisations/couloir-chambres.jpg'],
    },
    {
      id: 'installation-complete',
      title: 'Entrepôt Logistique - Île-de-France',
      category: 'Logistique',
      location: 'Île-de-France',
      date: '2024',
      image: '/realisations/installation-complete.jpg',
      client: 'Plateforme logistique',
      challenge: 'Stockage produits pharmaceutiques, traçabilité HACCP.',
      solution: 'Chambres modulaires, monitoring IoT.',
      result: 'Conforme normes pharmaceutiques, certification obtenue.',
      images: ['/realisations/installation-complete.jpg'],
    },
    {
      id: 'chambre-froide-modulaire',
      title: 'Supermarket - Île-de-France',
      category: 'Commerce',
      location: 'Île-de-France',
      date: '2024',
      image: '/realisations/chambre-modulaire.jpg',
      client: 'Supermarket',
      challenge: 'Compartiments séparés (viandes, poissons, légumes).',
      solution: 'Séparations internes, portes multiples, LED adapté.',
      result: 'Organisation optimale, réduction pertes, conforme HACCP.',
      images: ['/realisations/chambre-modulaire.jpg'],
    },
  ];

  const handleOpenVideo = (project: any) => {
    if (project.videoUrl) setActiveVideoProject(project);
  };

  const handleCloseVideo = () => setActiveVideoProject(null);

  return (
    <div>
      <SEO
        title="Réalisations Chambres Froides | Projets Clients | Unicold"
        description="Découvrez nos réalisations de chambres froides : restaurants, boucheries, supermarchés, entrepôts. Projets réussis en Île-de-France et Centre-Val de Loire. Témoignages clients."
        keywords="réalisations chambre froide, projets chambre froide, installation chambre froide restaurant, chambre froide boucherie, témoignages clients"
        canonical="https://unicold.fr/realisations"
        schema={getServiceSchema("Réalisations chambres froides", "Portfolio de nos réalisations d'installation de chambres froides pour restaurants, commerces et industrie.")}
      />
      {/* Hero */}
      <section className="relative pt-20 md:pt-24 pb-16 md:pb-20 bg-white overflow-hidden border-b border-sky-500/10">
        {/* Lignes géométriques subtiles */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-sky-400 to-transparent"></div>
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-sky-400/50 to-transparent"></div>
        </div>
        {/* Accent lumineux subtil */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-sky-300/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-ice-400/5 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-3 md:mb-4 text-slate-900">Nos Réalisations</h1>
        </div>
      </section>

      {/* Liste des projets */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <div
                key={project.id}
                className="glass-card rounded-2xl overflow-hidden hover-lift"
              >
                {/* Image */}
                <div
                  className="relative group cursor-pointer"
                  onClick={() => project.videoUrl ? handleOpenVideo(project) : null}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover"
                    loading={idx < 3 ? "eager" : "lazy"}
                    decoding="async"
                    fetchPriority={idx < 3 ? "high" : "low"}
                    onError={(e) => {
                      e.currentTarget.src = '/chambre-froide-neg.jpg';
                    }}
                  />
                  {/* Superposition légère */}
                  {project.videoUrl && (
                    <>
                      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <PlayCircle className="w-16 h-16 text-slate-900 drop-shadow-lg" />
                      </div>
                      {/* Bandeau bas "cliquez pour voir la vidéo" */}
                      <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-slate-900 text-center text-sm py-2">
                        🎥 Cliquez pour voir la vidéo
                      </div>
                    </>
                  )}
                </div>

                {/* Détails projet */}
                <div className="p-6">
                  <h3
                    onClick={() => project.videoUrl && handleOpenVideo(project)}
                    className="text-2xl md:text-3xl font-bold text-slate-900 mb-2 hover:text-slate-700 transition cursor-pointer"
                  >
                    {project.title}
                  </h3>

                  <p className="text-base text-sky-500 mb-6 font-medium">
                    {project.category} • {project.location} • {project.date}
                  </p>

                  {/* Étude de cas simplifiée */}
                  <div className="space-y-4 mb-4">
                    {project.challenge && (
                      <div>
                        <p className="text-sm md:text-base font-bold text-red-400 mb-2">Défi :</p>
                        <p className="text-base md:text-lg text-slate-700 leading-relaxed">{project.challenge}</p>
                      </div>
                    )}
                    {project.solution && (
                      <div>
                        <p className="text-sm md:text-base font-bold text-sky-500 mb-2">Solution :</p>
                        <p className="text-base md:text-lg text-slate-700 leading-relaxed">{project.solution}</p>
                    </div>
                    )}
                    {project.result && (
                      <div>
                        <p className="text-sm md:text-base font-bold text-emerald-400 mb-2">Résultat :</p>
                        <p className="text-base md:text-lg text-slate-700 leading-relaxed">{project.result}</p>
                    </div>
                    )}
                  </div>

                  {!project.client && (
                    <p className="text-slate-600/70 mb-4">{project.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal vidéo */}
      {activeVideoProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
          <div className="glass-panel rounded-2xl max-w-3xl w-full shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3 border-b border-sky-200">
              <h2 className="text-lg font-semibold text-slate-900">
                Vidéo – {activeVideoProject.title}
              </h2>
              <button
                type="button"
                onClick={handleCloseVideo}
                className="p-1 rounded-full hover:bg-white/10 text-slate-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="bg-black">
              <video
                src={activeVideoProject.videoUrl}
                controls
                preload="none"
                className="w-full h-[320px] md:h-[420px] object-contain bg-black"
              >
                Votre navigateur ne supporte pas la lecture vidéo.
              </video>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
