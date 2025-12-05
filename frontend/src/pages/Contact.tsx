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
        setStatus('❌ Une erreur est survenue. Réessayez plus tard ou contactez-nous directement.');
      });
  };

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
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-4 text-white">Demandez un Devis</h1>
          <p className="text-xl text-ice-100/80 max-w-2xl mx-auto">
            Formulaire pour obtenir rapidement un devis personnalisé
          </p>
        </div>
      </section>

      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
            {/* Informations de contact */}
            <div className="glass-panel p-8 rounded-2xl">
              <h2 className="text-2xl font-display font-bold text-white mb-8">Informations</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-4 glass-card rounded-xl hover:bg-white/5 transition">
                  <div className="bg-ice-500/10 p-3 rounded-xl">
                    <Phone className="w-6 h-6 text-ice-400" />
                  </div>
                  <div>
                    <div className="font-semibold text-white mb-1">Téléphone</div>
                    <a href="tel:0662649421" className="text-ice-400 hover:text-ice-300 hover:underline transition">06 62 64 94 21</a>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 glass-card rounded-xl hover:bg-white/5 transition">
                  <div className="bg-ice-500/10 p-3 rounded-xl">
                    <Mail className="w-6 h-6 text-ice-400" />
                  </div>
                  <div>
                    <div className="font-semibold text-white mb-1">Email</div>
                    <a href="mailto:unicold.info@gmail.com" className="text-ice-400 hover:text-ice-300 hover:underline transition">unicold.info@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 glass-card rounded-xl hover:bg-white/5 transition">
                  <div className="bg-ice-500/10 p-3 rounded-xl">
                    <MapPin className="w-6 h-6 text-ice-400" />
                  </div>
                  <div>
                    <div className="font-semibold text-white mb-1">Siège Social</div>
                    <div className="text-ice-200/70">16 Rue Pascal, 78300 Poissy</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Formulaire classique */}
            <div className="glass-panel p-8 rounded-2xl">
              <h2 className="text-2xl font-display font-bold text-white mb-6">
                Demande de Devis
              </h2>
              <p className="text-ice-200/70 mb-6">
                Remplissez le formulaire ci-dessous et décrivez votre projet. Nous vous répondrons rapidement avec un devis personnalisé.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-ice-300 mb-2">Nom complet *</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                    className="w-full bg-slate-900/50 border border-ice-500/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-ice-500 focus:ring-1 focus:ring-ice-500 transition-all placeholder-white/20"
                    placeholder="Votre nom"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-ice-300 mb-2">Email *</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                    className="w-full bg-slate-900/50 border border-ice-500/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-ice-500 focus:ring-1 focus:ring-ice-500 transition-all placeholder-white/20"
                    placeholder="votre@email.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-ice-300 mb-2">Téléphone</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full bg-slate-900/50 border border-ice-500/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-ice-500 focus:ring-1 focus:ring-ice-500 transition-all placeholder-white/20"
                    placeholder="06 12 34 56 78"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-ice-300 mb-2">Message *</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                    rows={8}
                    className="w-full bg-slate-900/50 border border-ice-500/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-ice-500 focus:ring-1 focus:ring-ice-500 transition-all resize-none placeholder-white/20"
                    placeholder="Décrivez votre projet : type de chambre froide souhaitée (positive, négative, combinée), dimensions, volume, température, contraintes particulières, délais, etc. Plus vous êtes précis, plus notre devis sera adapté à vos besoins."
                  ></textarea>
                  <p className="text-xs text-ice-300/60 mt-2">
                    Indiquez tous les détails de votre projet : type de chambre froide, dimensions, température souhaitée, contraintes, etc.
                  </p>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-ice-600 to-blue-600 hover:from-ice-500 hover:to-blue-500 text-white py-4 rounded-lg font-bold text-lg transition-all shadow-[0_0_20px_rgba(14,165,233,0.4)] hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Envoyer la demande de devis</span>
                </button>
              </form>

              {/* Statut de l'envoi */}
              {status && (
                <div className={`mt-6 p-4 rounded-xl text-center font-semibold ${
                  status.includes('✅') 
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' 
                    : 'bg-red-500/20 text-red-300 border border-red-500/30'
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
