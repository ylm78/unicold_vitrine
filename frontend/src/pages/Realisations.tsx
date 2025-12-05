import { useState } from 'react';
import { MapPin, Calendar, X, PlayCircle } from 'lucide-react';
import restaurantVideo from '../assets/2022.mp4';
import restaurantVideo2 from '../assets/2023.mp4';

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
      description:
        'Installation chambre froide positive et négative imbriqué pour restaurant étoilé.',
      videoUrl: restaurantVideo,
    },
    {
      id: 'berliner',
      title: 'Berliner - Paris',
      category: 'Restauration',
      location: 'La Défense (92)',
      date: '2025',
      image: '/azz.jpg',
      description: 'Installation chambre froide positive.',
      videoUrl: restaurantVideo2,
    },
    {
      id: 'entrepot-stockage',
      title: 'Entrepôt de Stockage - Panneaux',
      category: 'Logistique',
      location: 'Île-de-France',
      date: '2024',
      image: '/realisations/entrepot-panneaux.jpg',
      description: 'Stockage et gestion de panneaux sandwich pour projets de grande envergure.',
      images: ['/realisations/entrepot-panneaux.jpg'],
    },
    {
      id: 'couloir-chambres',
      title: 'Installation Multi-Chambres Froides',
      category: 'Industrie',
      location: 'Centre-Val de Loire',
      date: '2024',
      image: '/realisations/couloir-chambres.jpg',
      description: 'Couloir principal avec accès à plusieurs chambres froides professionnelles.',
      images: ['/realisations/couloir-chambres.jpg'],
    },
    {
      id: 'installation-complete',
      title: 'Installation Complète - Entrepôt',
      category: 'Logistique',
      location: 'Île-de-France',
      date: '2024',
      image: '/realisations/installation-complete.jpg',
      description: 'Vue d\'ensemble d\'une installation complète avec plusieurs chambres froides.',
      images: ['/realisations/installation-complete.jpg'],
    },
    {
      id: 'chambre-froide-modulaire',
      title: 'Chambre Froide Modulaire',
      category: 'Commerce',
      location: 'Île-de-France',
      date: '2024',
      image: '/realisations/chambre-modulaire.jpg',
      description: 'Chambre froide modulaire avec compartiments séparés pour différents types de produits.',
      images: ['/realisations/chambre-modulaire.jpg'],
    },
  ];

  const handleOpenVideo = (project: any) => {
    if (project.videoUrl) setActiveVideoProject(project);
  };

  const handleCloseVideo = () => setActiveVideoProject(null);

  return (
    <div>
      {/* Hero */}
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
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 text-white">Nos Réalisations</h1>
          <p className="text-xl md:text-2xl text-ice-100/80 max-w-3xl mx-auto">
            Découvrez nos projets récents
          </p>
        </div>
      </section>

      {/* Liste des projets */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
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
                    onError={(e) => {
                      e.currentTarget.src = '/chambre-froide-neg.jpg';
                    }}
                  />
                  {/* Superposition légère */}
                  {project.videoUrl && (
                    <>
                      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <PlayCircle className="w-16 h-16 text-white drop-shadow-lg" />
                      </div>
                      {/* Bandeau bas "cliquez pour voir la vidéo" */}
                      <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-center text-sm py-2">
                        🎥 Cliquez pour voir la vidéo
                      </div>
                    </>
                  )}
                </div>

                {/* Détails projet */}
                <div className="p-6">
                  <h3
                    onClick={() => handleOpenVideo(project)}
                    className="text-2xl font-bold text-white mb-1 hover:text-ice-300 transition cursor-pointer"
                  >
                    {project.title}
                  </h3>

                  <p className="text-sm text-ice-400 mb-2">
                    {project.category}
                  </p>

                  <p className="text-ice-200/70 mb-4">{project.description}</p>

                  <div className="flex items-center text-sm text-ice-300/60 gap-4">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2 text-ice-400" />
                      {project.location}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2 text-ice-400" />
                      {project.date}
                    </div>
                  </div>
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
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
              <h2 className="text-lg font-semibold text-white">
                Vidéo – {activeVideoProject.title}
              </h2>
              <button
                type="button"
                onClick={handleCloseVideo}
                className="p-1 rounded-full hover:bg-white/10 text-ice-300"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="bg-black">
              <video
                src={activeVideoProject.videoUrl}
                controls
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
