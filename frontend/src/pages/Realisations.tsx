import { useState, lazy, Suspense } from 'react';
import { X, PlayCircle } from 'lucide-react';
import Breadcrumb from '../components/Breadcrumb';

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
      challenge: 'Besoin de deux chambres froides (positive et négative) dans un espace très réduit sous escalier.',
      solution: 'Conception sur-mesure avec chambres imbriquées, découpe des panneaux selon plans architecturaux, groupe frigorifique déporté silencieux pour ne pas déranger les clients.',
      result: 'Installation réussie en 3 jours, conformité HACCP, client satisfait.',
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
      challenge: 'Installation d\'une chambre froide positive dans un restaurant en activité, contraintes de bruit et d\'espace.',
      solution: 'Groupe monobloc silencieux, installation en horaires décalés pour ne pas perturber le service, formation du personnel.',
      result: 'Installation sans interruption du service, optimisation énergétique de 25%.',
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
      challenge: 'Espace très réduit sous escalier, besoin d\'une chambre négative pour congélation et d\'une positive pour produits frais.',
      solution: 'Découpe des panneaux sur mesure selon plans, groupe frigorifique déporté silencieux, installation en 2 jours.',
      result: 'Double chambre fonctionnelle dans un espace de 8m², client très satisfait.',
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
      challenge: 'Création d\'un complexe avec 5 chambres froides à températures différentes (-25°C, -18°C, +2°C, +4°C, +8°C).',
      solution: 'Bureau d\'études thermique complet, conception modulaire, groupes frigorifiques haute performance, système de monitoring à distance.',
      result: 'Installation de 200m² de chambres froides, optimisation énergétique globale, maintenance préventive sous contrat.',
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
      challenge: 'Installation de plusieurs chambres froides pour stockage de produits pharmaceutiques avec traçabilité HACCP.',
      solution: 'Chambres froides modulaires, système de monitoring IoT, documentation complète pour audits.',
      result: 'Installation conforme aux normes pharmaceutiques, certification obtenue, contrat de maintenance annuel.',
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
      challenge: 'Chambre froide modulaire avec compartiments séparés pour différents types de produits (viandes, poissons, légumes).',
      solution: 'Conception modulaire avec séparations internes, portes multiples, éclairage LED adapté, sol antidérapant.',
      result: 'Organisation optimale des stocks, réduction des pertes, conformité HACCP.',
      images: ['/realisations/chambre-modulaire.jpg'],
    },
  ];

  const handleOpenVideo = (project: any) => {
    if (project.videoUrl) setActiveVideoProject(project);
  };

  const handleCloseVideo = () => setActiveVideoProject(null);

  return (
    <div>
      <Breadcrumb items={[{ label: 'Réalisations' }]} />
      {/* Hero */}
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
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 text-slate-900">Nos Réalisations</h1>
          <p className="text-xl md:text-2xl text-slate-600/80 max-w-3xl mx-auto">
            Découvrez nos projets récents
          </p>
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
                    className="text-2xl font-bold text-slate-900 mb-1 hover:text-slate-700 transition cursor-pointer"
                  >
                    {project.title}
                  </h3>

                  <p className="text-sm text-sky-500 mb-4">
                    {project.category} • {project.location} • {project.date}
                  </p>

                  {/* Étude de cas détaillée */}
                  <div className="space-y-4 mb-4">
                    {project.client && (
                      <div>
                        <p className="text-xs font-bold text-slate-700 mb-1">Le Client :</p>
                        <p className="text-sm text-slate-600/70">{project.client}</p>
                      </div>
                    )}
                    {project.challenge && (
                      <div>
                        <p className="text-xs font-bold text-red-400 mb-1">Le Défi :</p>
                        <p className="text-sm text-slate-600/70">{project.challenge}</p>
                      </div>
                    )}
                    {project.solution && (
                      <div>
                        <p className="text-xs font-bold text-sky-500 mb-1">La Solution Unicold :</p>
                        <p className="text-sm text-slate-600/70">{project.solution}</p>
                      </div>
                    )}
                    {project.result && (
                      <div>
                        <p className="text-xs font-bold text-emerald-400 mb-1">Le Résultat :</p>
                        <p className="text-sm text-slate-600/70">{project.result}</p>
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
