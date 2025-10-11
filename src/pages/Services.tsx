import { Snowflake, Wrench, Package, Settings, Phone, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  return (
    <div>
      <section className="bg-unicold-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Nos Services</h1>
          <p className="text-xl text-unicold-blue-100 max-w-2xl mx-auto">
            Des solutions complètes et professionnelles pour tous vos besoins en réfrigération
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="bg-unicold-blue-500 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <Snowflake className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Vente de Chambres Froides
                </h2>
                <p className="text-gray-600 mb-6 text-lg">
                  Nous proposons une large gamme de chambres froides adaptées à tous les secteurs
                  professionnels : restauration, commerce, industrie agroalimentaire.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Chambres Froides Positives</h4>
                      <p className="text-gray-600">
                        De 0°C à +10°C, idéales pour la conservation des fruits, légumes et produits frais
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Chambres Froides Négatives</h4>
                      <p className="text-gray-600">
                        De -18°C à -25°C, parfaites pour la congélation et la conservation longue durée
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <img
                  src="/chambre-froide-neg.jpg"
                  alt="Chambre froide professionnelle"
                  className="rounded-xl shadow-2xl w-full h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <Phone className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-4">Besoin d'un conseil ?</h2>
          <p className="text-xl text-unicold-blue-100 mb-8 max-w-2xl mx-auto">
            Notre équipe technique est à votre disposition pour répondre à toutes vos questions
            et vous accompagner dans votre projet.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-unicold-blue-500 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Nous contacter
          </Link>
        </div>
      </section>
    </div>
  );
}
