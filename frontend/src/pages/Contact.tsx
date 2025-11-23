import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { useState, FormEvent } from 'react';
import emailjs from 'emailjs-com';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus('Envoi en cours...');

    const serviceID = 'service_qjwkxml';
    const templateID = 'template_u2iy10q';
    const publicKey = 'Q_4KZL1s7zXDPGjMz';

    emailjs
      .send(
        serviceID,
        templateID,
        {
          from_name: formData.name,
          from_email: formData.email,
          from_phone: formData.phone || 'Non renseigné',
          message: formData.message,
        },
        publicKey
      )
      .then(() => {
        setStatus('✅ Demande de devis envoyée avec succès ! Nous vous contacterons sous 24h.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
      })
      .catch((error) => {
        console.error('Erreur:', error);
        setStatus('❌ Une erreur est survenue. Réessaie plus tard ou contactez-nous directement.');
      });
  };

  return (
    <div>
      <section className="bg-gradient-to-br from-unicold-blue-600 via-unicold-blue-700 to-unicold-blue-800 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-unicold-blue-300 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-4" style={{ fontFamily: 'ArTeks, Arial, sans-serif' }}>Demandez un Devis</h1>
          <p className="text-xl text-unicold-blue-100 max-w-2xl mx-auto">
            Formulaire guidé pour obtenir rapidement un devis personnalisé
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
            {/* Informations de contact */}
            <div className="bg-gradient-to-br from-unicold-blue-50 to-white p-8 rounded-2xl shadow-xl border border-unicold-blue-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-8" style={{ fontFamily: 'ArTeks, Arial, sans-serif' }}>Informations</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-4 bg-white rounded-xl hover:shadow-lg transition">
                  <div className="bg-gradient-to-br from-unicold-blue-500 to-unicold-blue-600 p-3 rounded-xl">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Téléphone</div>
                    <a href="tel:0662649421" className="text-unicold-blue-600 hover:underline">06 62 64 94 21</a>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 bg-white rounded-xl hover:shadow-lg transition">
                  <div className="bg-gradient-to-br from-unicold-blue-500 to-unicold-blue-600 p-3 rounded-xl">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Email</div>
                    <a href="mailto:unicold.info@gmail.com" className="text-unicold-blue-600 hover:underline">unicold.info@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 bg-white rounded-xl hover:shadow-lg transition">
                  <div className="bg-gradient-to-br from-unicold-blue-500 to-unicold-blue-600 p-3 rounded-xl">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Adresse</div>
                    <div className="text-gray-600">16 rue pascal, 78300 Poissy</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Formulaire classique */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'ArTeks, Arial, sans-serif' }}>
                Demande de Devis
              </h2>
              <p className="text-gray-600 mb-6">
                Remplissez le formulaire ci-dessous et décrivez votre projet. Nous vous répondrons rapidement avec un devis personnalisé.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Nom complet *</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-unicold-blue-500 focus:border-unicold-blue-500 outline-none transition"
                    placeholder="Votre nom"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Email *</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-unicold-blue-500 focus:border-unicold-blue-500 outline-none transition"
                    placeholder="votre@email.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Téléphone</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-unicold-blue-500 focus:border-unicold-blue-500 outline-none transition"
                    placeholder="06 12 34 56 78"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Message *</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                    rows={8}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-unicold-blue-500 focus:border-unicold-blue-500 outline-none resize-none transition"
                    placeholder="Décrivez votre projet : type de chambre froide souhaitée (positive, négative, combinée), dimensions, volume, température, contraintes particulières, délais, etc. Plus vous êtes précis, plus notre devis sera adapté à vos besoins."
                  ></textarea>
                  <p className="text-xs text-gray-500 mt-2">
                    Indiquez tous les détails de votre projet : type de chambre froide, dimensions, température souhaitée, contraintes, etc.
                  </p>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-unicold-blue-600 to-unicold-blue-700 text-white py-4 rounded-xl font-bold text-lg hover:from-unicold-blue-700 hover:to-unicold-blue-800 transition-all shadow-xl hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Envoyer la demande de devis</span>
                </button>
              </form>

              {/* Statut de l'envoi */}
              {status && (
                <div className={`mt-6 p-4 rounded-xl text-center font-semibold ${
                  status.includes('✅') 
                    ? 'bg-green-50 text-green-700 border-2 border-green-200' 
                    : 'bg-red-50 text-red-700 border-2 border-red-200'
                }`}>
                  {status}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
