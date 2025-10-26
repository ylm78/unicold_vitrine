import { ChevronDown, HelpCircle } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Quelle est la différence entre une chambre froide positive et négative ?',
      a: 'Une chambre froide positive maintient une température entre 0°C et +10°C, idéale pour la conservation des produits frais. Une chambre froide négative descend entre -18°C et -25°C pour la congélation.'
    },
    {
      q: 'Quels délais pour l\'installation ?',
      a: 'Le délai moyen est de 2 à 4 semaines entre la commande et l\'installation complète.'
    },
  ];

  return (
    <div>
      <section className="bg-unicold-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <HelpCircle className="w-16 h-16 mx-auto mb-4" />
          <h1 className="text-5xl font-bold mb-4">Questions Fréquentes</h1>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={idx} className="bg-gray-50 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between"
                  >
                    <span className="font-semibold text-gray-900">{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-unicold-blue-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-600">{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Vous ne trouvez pas la réponse ?</h2>
          <Link to="/contact" className="inline-block bg-unicold-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-unicold-blue-600 transition">
            Nous contacter
          </Link>
        </div>
      </section>
    </div>
  );
}
