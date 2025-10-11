import { Snowflake, Wrench, ChevronRight, Award, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <section className="relative h-[600px] bg-cover bg-center" style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.pexels.com/photos/236705/pexels-photo-236705.jpeg?auto=compress&cs=tinysrgb&w=1920)',
      }}>
        <div className="container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl text-white">
            <h1 className="text-6xl font-bold mb-6 leading-tight">
              Spécialiste des Chambres Froides
              <span className="block text-unicold-blue-400 mt-2">Positives & Négatives</span>
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              Vente, installation et fourniture de matériaux pour chambres froides professionnelles.
              Solutions complètes et sur-mesure pour vos besoins de réfrigération.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center bg-unicold-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-unicold-blue-600 transition shadow-lg"
              >
                Demander un devis
                <ChevronRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/produits"
                className="inline-flex items-center bg-white text-unicold-blue-500 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition shadow-lg"
              >
                Nos produits
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="bg-unicold-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-10 h-10 text-unicold-blue-500" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">15+</div>
              <div className="text-gray-600">Années d'expérience</div>
            </div>
            <div className="text-center">
              <div className="bg-unicold-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Snowflake className="w-10 h-10 text-unicold-blue-500" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">500+</div>
              <div className="text-gray-600">Installations réalisées</div>
            </div>
            <div className="text-center">
              <div className="bg-unicold-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-10 h-10 text-unicold-blue-500" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">100%</div>
              <div className="text-gray-600">Clients satisfaits</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos Services Principaux</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Des solutions complètes pour tous vos besoins en réfrigération professionnelle
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition">
              <div className="h-64 bg-cover bg-center" style={{
                backgroundImage: 'url(/chambre-froide-neg.jpg)',
              }}></div>
              <div className="p-8">
                <div className="bg-unicold-blue-500 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                  <Snowflake className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Vente de Chambres Froides</h3>
                <p className="text-gray-600 mb-4">
                  Chambres froides positives (0°C à +10°C) et négatives (-18°C à -25°C)
                  adaptées à tous vos besoins professionnels.
                </p>
                <Link to="/services" className="text-unicold-blue-500 font-semibold inline-flex items-center hover:text-unicold-blue-600">
                  En savoir plus
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition">
              <div className="h-64 bg-cover bg-center" style={{
                backgroundImage: 'url(/azz.jpg)',
              }}></div>
              <div className="p-8">
                <div className="bg-unicold-blue-500 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                  <Wrench className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Installation Professionnelle</h3>
                <p className="text-gray-600 mb-4">
                  Installation complète par nos techniciens qualifiés, mise en service
                  et formation à l'utilisation.
                </p>
                <Link to="/services" className="text-unicold-blue-500 font-semibold inline-flex items-center hover:text-unicold-blue-600">
                  En savoir plus
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-unicold-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Prêt à démarrer votre projet ?</h2>
          <p className="text-xl text-unicold-blue-100 mb-8 max-w-2xl mx-auto">
            Notre équipe d'experts est à votre disposition pour étudier votre projet
            et vous proposer une solution sur-mesure.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-white text-unicold-blue-500 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition shadow-lg"
          >
            Demander un devis gratuit
            <ChevronRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
