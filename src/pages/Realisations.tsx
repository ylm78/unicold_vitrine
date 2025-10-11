import { MapPin, Calendar } from 'lucide-react';

export default function Realisations() {
  const projects = [
    {
      title: 'Restaurant Gastronomique - Paris',
      category: 'Restauration',
      location: 'Paris',
      date: '2024',
      image: 'https://images.pexels.com/photos/3943716/pexels-photo-3943716.jpeg?auto=compress&cs=tinysrgb&w=1200',
      description: 'Installation chambre froide positive et négative pour restaurant étoilé.',
    },
    {
      title: 'Supermarché Bio - Lyon',
      category: 'Commerce',
      location: 'Lyon',
      date: '2024',
      image: '/surmesure.jpg',
      description: 'Rénovation complète de 3 chambres froides avec nouveaux groupes.',
    },
  ];

  return (
    <div>
      <section className="bg-unicold-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Nos Réalisations</h1>
          <p className="text-xl text-unicold-blue-100 max-w-2xl mx-auto">
            Découvrez nos projets récents
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, idx) => (
              <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition">
                <img src={project.image} alt={project.title} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="w-4 h-4 mr-2 text-unicold-blue-500" />
                    {project.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
