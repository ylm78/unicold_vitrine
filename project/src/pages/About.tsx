import { Award, Users, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div>
      <section className="bg-unicold-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">À Propos d'Unicold</h1>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <img
                  src="/azz.jpg"
                  alt="Équipe Unicold"
                  className="rounded-xl shadow-2xl w-full h-96 object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Notre Histoire</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Fondée il y a plus de 15 ans, Unicold s'est imposée comme un acteur
                  majeur dans le domaine des chambres froides professionnelles en France.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Nous sommes fiers d'avoir accompagné plus de 500 professionnels
                  dans leurs projets de chambres froides.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-20">
              <div className="bg-unicold-blue-50 p-8 rounded-xl text-center">
                <Award className="w-12 h-12 text-unicold-blue-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Excellence</h3>
                <p className="text-gray-600">Produits et services de haute qualité</p>
              </div>
              <div className="bg-unicold-blue-50 p-8 rounded-xl text-center">
                <Users className="w-12 h-12 text-unicold-blue-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Proximité</h3>
                <p className="text-gray-600">Relation de confiance avec nos clients</p>
              </div>
              <div className="bg-unicold-blue-50 p-8 rounded-xl text-center">
                <Target className="w-12 h-12 text-unicold-blue-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation</h3>
                <p className="text-gray-600">Solutions toujours plus performantes</p>
              </div>
            </div>

            <div className="text-center">
              <Link
                to="/contact"
                className="inline-block bg-unicold-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-unicold-blue-600 transition"
              >
                Nous contacter
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
