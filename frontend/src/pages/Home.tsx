import { Snowflake, MapPin, Facebook, Instagram, Linkedin, ArrowRight, Wrench, Calendar, Building2, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useState, FormEvent } from 'react';
import emailjs from 'emailjs-com';
import LogosMarquee from '../components/LogosMarquee';
import SEO from '../components/SEO';
import { getLocalBusinessSchema } from '../utils/schema';

function VisitForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferredDate: '',
    preferredTime: '',
    message: '',
    consent: false
  });
  const [status, setStatus] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus('Envoi en cours...');

    const serviceID = 'service_ugehbqe'; // Service pour contact@unicold.fr
    const templateID = 'template_u2iy10q';
    const publicKey = 'Q_4KZL1s7zXDPGjMz';

    // Générer un ID unique pour cette demande (pour la gestion des données)
    const requestId = `SHOW-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
    const timestamp = new Date().toISOString();

    // Message structuré pour contact@unicold.fr
    const message = `🆕 NOUVELLE DEMANDE DE VISITE SHOWROOM

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📋 INFORMATIONS CLIENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
👤 Nom : ${formData.name}
📧 Email : ${formData.email}
📞 Téléphone : ${formData.phone || 'Non renseigné'}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📅 PRÉFÉRENCES DE RENDEZ-VOUS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📆 Date souhaitée : ${formData.preferredDate || 'Non renseignée'}
🕐 Heure souhaitée : ${formData.preferredTime || 'Non renseignée'}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
💬 MESSAGE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${formData.message || 'Aucun message'}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🔒 CONFORMITÉ RGPD
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✅ Consentement donné : Oui
📝 ID de demande : ${requestId}
📅 Date de la demande : ${new Date().toLocaleString('fr-FR')}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⚠️ IMPORTANT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Ces données doivent être stockées dans la base de données et peuvent être supprimées sur demande du client.
Pour supprimer ces données, le client peut utiliser l'ID : ${requestId}
ou contacter : contact@unicold.fr

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`;

    // Paramètres pour EmailJS - Le destinataire doit être configuré dans le template EmailJS
    const templateParams = {
      to_email: 'contact@unicold.fr', // Important : doit être dans le template aussi
      to_name: 'Unicold',
      from_name: formData.name,
      from_email: formData.email,
      reply_to: formData.email, // Pour pouvoir répondre directement
      from_phone: formData.phone || 'Non renseigné',
      subject: `[SHOWROOM] Demande de visite - ${formData.name}`,
      message: message,
      request_id: requestId,
      timestamp: timestamp,
    };

    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        console.log('EmailJS Success:', response.status, response.text);
        setStatus(`✅ Demande de visite envoyée avec succès ! Nous vous répondrons sous 2h pour confirmer votre rendez-vous.\n\n📝 Votre numéro de suivi : ${requestId}\n\n💡 Vous pouvez utiliser ce numéro pour demander la suppression de vos données si nécessaire.`);
        setFormData({
          name: '',
          email: '',
          phone: '',
          preferredDate: '',
          preferredTime: '',
          message: '',
          consent: false
        });
      })
      .catch((error) => {
        console.error('EmailJS Error Details:', {
          status: error.status,
          text: error.text,
          error: error
        });
        setStatus(`❌ Erreur lors de l'envoi (${error.status || 'Inconnu'}). Veuillez vérifier votre connexion et réessayer, ou contactez-nous directement au +33 1 72 54 13 60 (gratuit) ou +33 6 62 64 94 21.\n\nDétails techniques : ${error.text || 'Erreur inconnue'}`);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="visit-name" className="text-sm font-medium text-slate-900">Nom Complet *</label>
          <input
            id="visit-name"
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            required
            aria-required="true"
            className="w-full bg-white border border-sky-300 rounded-lg px-4 py-3.5 sm:py-3 text-base sm:text-sm text-slate-900 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all placeholder-slate-400"
            placeholder="Jean Dupont"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="visit-email" className="text-sm font-medium text-slate-900">Email *</label>
          <input
            id="visit-email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            required
            aria-required="true"
            className="w-full bg-white border border-sky-500/20 rounded-lg px-4 py-3.5 sm:py-3 text-base sm:text-sm text-slate-900 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-ice-500 transition-all placeholder-slate-400"
            placeholder="contact@entreprise.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="visit-phone" className="text-sm font-medium text-slate-900">Téléphone *</label>
          <input
            id="visit-phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
            required
            aria-required="true"
            className="w-full bg-white border border-sky-500/20 rounded-lg px-4 py-3.5 sm:py-3 text-base sm:text-sm text-slate-900 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-ice-500 transition-all placeholder-slate-400"
            placeholder="06 12 34 56 78"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="visit-date" className="text-sm font-medium text-slate-900">Date souhaitée</label>
          <input
            id="visit-date"
            type="date"
            value={formData.preferredDate}
            onChange={(e) => setFormData({...formData, preferredDate: e.target.value})}
            className="w-full bg-white border border-sky-500/20 rounded-lg px-4 py-3.5 sm:py-3 text-base sm:text-sm text-slate-900 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-ice-500 transition-all"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="visit-time" className="text-sm font-medium text-slate-900">Heure souhaitée</label>
        <input
          id="visit-time"
          type="time"
          value={formData.preferredTime}
          onChange={(e) => setFormData({...formData, preferredTime: e.target.value})}
          className="w-full bg-white border border-sky-500/20 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-ice-500 transition-all min-h-[44px]"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="visit-message" className="text-sm font-medium text-slate-900">Message (optionnel)</label>
        <textarea
          id="visit-message"
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({...formData, message: e.target.value})}
          className="w-full bg-white border border-sky-500/20 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-ice-500 transition-all placeholder-slate-400"
          placeholder="Précisez vos besoins ou questions..."
        ></textarea>
      </div>

      {/* Consentement RGPD */}
      <div className="flex items-start space-x-3 p-4 bg-sky-50/50 rounded-lg border border-sky-200/50">
        <input
          type="checkbox"
          id="consent-visit"
          required
          checked={formData.consent}
          onChange={(e) => setFormData({...formData, consent: e.target.checked})}
          className="mt-1 w-4 h-4 text-sky-600 border-sky-300 rounded focus:ring-sky-500"
        />
        <label htmlFor="consent-visit" className="text-sm text-slate-700 leading-relaxed">
          J'accepte que mes données personnelles soient utilisées pour organiser ma visite du showroom et être recontacté par Unicold. 
          <Link to="/mentions-legales" className="text-sky-600 hover:text-sky-700 hover:underline ml-1">
            En savoir plus sur la gestion de mes données
          </Link>
          <span className="text-red-500 ml-1">*</span>
        </label>
      </div>

      <button
        type="submit"
        aria-label="Demander un rendez-vous pour visiter le showroom"
        className="w-full bg-gradient-to-r from-sky-500 to-blue-500 hover:from-sky-600 hover:to-blue-600 text-slate-900 font-bold py-4 rounded-lg shadow-lg transform transition hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 min-h-[44px]"
      >
        <Calendar className="w-5 h-5" aria-hidden="true" />
        <span>Demander un rendez-vous</span>
      </button>

          {status && (
        <div className={`mt-6 p-4 rounded-xl text-center font-semibold ${
          status.includes('✅') 
            ? 'bg-emerald-500/20 text-emerald-700 border border-emerald-500/30' 
            : 'bg-red-500/20 text-red-700 border border-red-500/30'
        }`} role="alert" aria-live="polite">
          {status}
        </div>
      )}
    </form>
  );
}

export default function Home() {
  useEffect(() => {
    // Particles animation - Réduit pour améliorer les performances
    const particlesContainer = document.getElementById('particles');
    if (particlesContainer && window.innerWidth > 768) {
      // Désactiver les particules sur mobile pour améliorer les performances
      const particleCount = 10; // Réduit de 20 à 10
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        const size = Math.random() * 4 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        const duration = Math.random() * 8 + 8;
        const delay = Math.random() * 3;
        particle.style.animation = `float-particle ${duration}s infinite linear ${delay}s`;
        particle.style.willChange = 'transform';
        particle.style.transform = 'translateZ(0)';
        particlesContainer.appendChild(particle);
      }
    }
  }, []);

  return (
    <div>
      <SEO
        title="Chambres Froides Professionnelles | Installation & Maintenance | Unicold"
        description="Expert en chambres froides positives et négatives. Installation, vente et maintenance professionnelle. Dépannage 24/7 en Île-de-France et Centre-Val de Loire. Devis gratuit."
        keywords="chambre froide, chambre froide positive, chambre froide négative, installation chambre froide, maintenance chambre froide, dépannage chambre froide, Paris, Île-de-France, Centre-Val de Loire"
        schema={getLocalBusinessSchema()}
      />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-white to-blue-50"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?q=80&w=2874&auto=format&fit=crop')] bg-cover bg-center opacity-5 mix-blend-overlay"></div>
        <div id="particles" className="absolute inset-0 pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-300 rounded-full blur-[120px] opacity-20 animate-pulse-slow"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-4 px-4 py-1 rounded-full border border-sky-300/50 bg-sky-100/50 backdrop-blur-sm">
            <span className="text-slate-700 text-sm font-medium tracking-widest uppercase">Expertise Froid Industriel & Commercial</span>
          </div>
          
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight px-2 text-sky-500">
            Chambres Froides Professionnelles
            </h1>
          
          <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-slate-600 font-light px-4">
            Installation, vente et maintenance de chambres froides. Dépannage 24/7 en Île-de-France et Centre-Val de Loire.
          </p>
          
          <div className="mt-8 md:mt-10 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-4">
              <Link
                to="/contact"
                aria-label="Demander un devis gratuit pour une chambre froide"
                className="group relative w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 text-base sm:text-lg bg-accent hover:bg-accent-hover text-slate-900 rounded-lg overflow-hidden transition-all hover:scale-105 shadow-[0_0_25px_rgba(249,115,22,0.5)] hover:shadow-[0_0_35px_rgba(249,115,22,0.7)] min-h-[44px]"
              >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1s_infinite]"></div>
              <span className="relative font-semibold flex items-center gap-2">
                Demander un Devis Gratuit <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </span>
              </Link>
              <Link
              to="/services"
              aria-label="Découvrir nos services de chambres froides"
              className="px-8 py-4 glass-panel rounded-lg text-slate-900 font-medium hover:bg-white/10 transition-all flex items-center justify-center gap-2 min-h-[44px]"
              >
              <Wrench className="w-4 h-4" aria-hidden="true" /> <span>Nos Services</span>
              </Link>
          </div>
        </div>
      </section>

      {/* Clients Logos */}
      <section className="bg-gradient-to-b from-white via-sky-50 to-white py-24 border-t border-sky-200 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '30px 30px'
          }}></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-slate-900 mb-3 md:mb-4 px-4">Ils nous font confiance</h2>
            <p className="text-slate-600 max-w-xl mx-auto mb-6">
              Consultez les avis de nos clients sur Google. Pour une urgence chambre froide, appelez Unicold au 01 72 54 13 60 (gratuit) ou au 06 62 64 94 21.
            </p>
          </div>

          <LogosMarquee />
        </div>
      </section>

      {/* SAV 24/7 - Section Urgence */}
      <section className="py-16 bg-gradient-to-r from-red-950/30 via-white to-red-950/30 border-y border-red-500/20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-red-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-red-500 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="glass-panel p-6 sm:p-8 md:p-12 rounded-2xl border-2 border-red-500/40">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
              <div className="flex-1 text-center md:text-left">
                <div className="inline-block mb-3 md:mb-4 px-3 md:px-4 py-1.5 md:py-2 bg-red-500/20 border border-red-500/50 rounded-full text-red-700 font-bold text-xs md:text-sm">
                  ⚡ URGENCE 24/7
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-slate-900 mb-3 md:mb-4">
                  Dépannage Express sous 4h
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-slate-900 font-semibold mb-4">
                  📞 <a href="tel:+33172541360" className="text-red-600 hover:underline font-bold">+33 1 72 54 13 60</a> <span className="text-emerald-600 text-sm font-bold">(Gratuit)</span> ou <a href="tel:+33662649421" className="text-red-600 hover:underline font-bold">+33 6 62 64 94 21</a>
                </p>
              </div>
              <div className="flex-shrink-0 w-full sm:w-auto">
                <a
                  href="tel:+33172541360"
                  aria-label="Appeler le service de dépannage d'urgence au +33 1 72 54 13 60"
                  className="group relative w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 bg-red-600 hover:bg-red-500 text-white rounded-xl font-bold text-base md:text-lg transition-all shadow-[0_0_30px_rgba(239,68,68,0.5)] hover:scale-105 flex items-center justify-center gap-3 min-h-[44px]"
                >
                  <Phone className="w-5 h-5 md:w-6 md:h-6" aria-hidden="true" />
                  <span>Appeler maintenant</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-slate-900 mb-3 md:mb-4 px-4">Nos Services</h2>
            <p className="text-sm sm:text-base text-slate-600/60 max-w-2xl mx-auto px-4">Solutions complètes pour tous vos besoins en chambres froides.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 px-4">
            <div className="glass-card p-6 rounded-xl group hover:bg-ice-900/20 transition-all">
              <div className="w-14 h-14 rounded-full bg-sky-300/10 flex items-center justify-center mb-6 text-sky-500 group-hover:scale-110 transition-transform">
                <Snowflake className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Vente</h3>
              <p className="text-sm text-slate-600/60">Chambres froides positives et négatives. Panneaux, portes, groupes frigorifiques.</p>
            </div>

            <div className="glass-card p-5 sm:p-6 rounded-xl group hover:bg-ice-900/20 transition-all">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-sky-300/10 flex items-center justify-center mb-4 sm:mb-6 text-sky-500 group-hover:scale-110 transition-transform">
                <Wrench className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">Installation</h3>
              <p className="text-xs sm:text-sm text-slate-600/60">Monteurs qualifiés QualiFroid. Conforme HACCP.</p>
            </div>

            <div className="glass-card p-5 sm:p-6 rounded-xl group hover:bg-ice-900/20 transition-all">
              <div className="w-14 h-14 rounded-full bg-sky-300/10 flex items-center justify-center mb-6 text-sky-500 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Sur-Mesure</h3>
              <p className="text-sm text-slate-600/60">Conception adaptée à vos contraintes d'espace.</p>
            </div>

            <div className="glass-card p-6 rounded-xl group hover:bg-ice-900/20 transition-all">
              <div className="w-14 h-14 rounded-full bg-sky-300/10 flex items-center justify-center mb-6 text-sky-500 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Maintenance 24/7</h3>
              <p className="text-sm text-slate-600/60">Dépannage d'urgence sous 4h. Astreinte permanente.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Implantations Section */}
      <section className="py-24 bg-gradient-to-b from-white to-sky-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">Nos Implantations</h2>
            <p className="text-slate-600/60 max-w-2xl mx-auto">Île-de-France et Centre-Val de Loire</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto mb-8 sm:mb-12 md:mb-16">
            {[
              { 
                name: 'Coudray-Montceaux', 
                location: 'Essonne (91)', 
                address: '138 Les Berges de Seine, 91830 Le Coudray-Montceaux',
                type: 'Showroom',
                isDepot: true,
                icon: Building2
              },
              { 
                name: 'Dreux', 
                location: 'Eure-et-Loir (28)', 
                address: 'Zone d\'Activités de la Rabette, 28100 Dreux',
                type: 'Entrepôt',
                isDepot: false,
                icon: Building2
              },
              { 
                name: 'Poissy', 
                location: 'Yvelines (78)', 
                address: '16 Rue Pascal, 78300 Poissy',
                type: 'Siège Social',
                isDepot: false,
                icon: MapPin
              },
            ].map((site, idx) => {
              const IconComponent = site.icon;
              return (
                <div key={idx} className={`glass-card p-6 sm:p-8 md:p-10 rounded-xl md:rounded-2xl text-center hover-lift ${site.isDepot ? 'border-2 border-sky-500/30' : ''}`}>
                  <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-xl md:rounded-2xl bg-sky-300/10 flex items-center justify-center mx-auto mb-4 sm:mb-5 md:mb-6 text-sky-500">
                    <IconComponent className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10" />
                  </div>
                  <div className="mb-2 inline-block px-2.5 sm:px-3 py-0.5 sm:py-1 bg-sky-300/20 border border-sky-500/30 rounded-full text-xs font-bold text-slate-700 backdrop-blur-sm">
                    {site.type}
              </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2 sm:mb-3">{site.name}</h3>
                  <p className="text-slate-600/60 text-sm sm:text-base md:text-lg mb-2">{site.location}</p>
                  <p className="text-slate-700 text-xs sm:text-sm md:text-base font-medium mb-2 sm:mb-3">{site.address}</p>
                  {site.isDepot && (
                    <div className="mt-2 inline-block px-4 py-2 bg-emerald-500/20 border border-emerald-500/30 rounded-full text-xs font-bold text-emerald-700 backdrop-blur-sm">
                      Dépôt visitable
            </div>
                  )}
              </div>
              );
            })}
            </div>

          {/* Section Visite du Dépôt */}
          <div className="max-w-4xl mx-auto">
            <div className="glass-panel rounded-3xl p-8 md:p-12 border-sky-500/30 shadow-[0_0_50px_rgba(14,165,233,0.15)]">
              <div className="text-center mb-10">
                <div className="w-20 h-20 rounded-2xl bg-sky-300/10 flex items-center justify-center mx-auto mb-6 text-sky-500">
                  <Building2 className="w-10 h-10" />
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">Visitez Notre Showroom</h2>
                <p className="text-slate-600/80 text-lg mb-4">
                  <span className="font-bold text-slate-700">138 Les Berges de Seine, 91830 Le Coudray-Montceaux</span>
                </p>
                <p className="text-slate-600/70 max-w-2xl mx-auto">
                  Découvrez notre stock et nos équipements. Visite sur rendez-vous.
                </p>
              </div>

              <VisitForm />
            </div>
          </div>
        </div>
      </section>

      {/* Réalisations Preview */}
      <section className="py-24 bg-sky-50 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">Nos Réalisations</h2>
            <p className="text-slate-600/60 max-w-2xl mx-auto">Découvrez nos projets réalisés</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            {[
              { title: 'Chambre Froide Négative', desc: 'Secteur alimentaire', img: '/chambre-froide-neg.jpg', alt: 'Chambre froide négative professionnelle installée par Unicold', width: 800, height: 600 },
              { title: 'Aménagement Intérieur', desc: 'Restaurants', img: '/azz.jpg', alt: 'Aménagement intérieur chambre froide pour restaurant', width: 800, height: 600 },
              { title: 'Projet Sur-Mesure', desc: 'Conception adaptée', img: '/surmesure.jpg', alt: 'Chambre froide sur-mesure conçue par Unicold', width: 800, height: 600 },
            ].map((project, idx) => (
              <div key={idx} className="relative rounded-2xl overflow-hidden group h-80 glass-card">
                <img
                  src={project.img}
                  alt={project.alt || project.title}
                  width={project.width}
                  height={project.height}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-sky-50/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-2xl font-bold text-slate-900 mb-1">{project.title}</h3>
                  <p className="text-slate-600/70 text-sm">{project.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/realisations"
              aria-label="Voir toutes nos réalisations de chambres froides"
              className="inline-flex items-center bg-gradient-to-r from-sky-500 to-blue-500 hover:from-sky-600 hover:to-blue-600 text-slate-900 font-bold px-10 py-4 rounded-lg shadow-lg transform transition hover:scale-[1.01] min-h-[44px]"
            >
              <span>Voir toutes nos réalisations</span> <ArrowRight className="w-5 h-5 ml-2" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">Suivez-nous</h2>
            <p className="text-slate-600/60 text-xl max-w-2xl mx-auto">Restez informés de nos actualités</p>
          </div>

          <div className="flex justify-center gap-6 md:gap-8">
            <a
              href="https://www.facebook.com/unicold.unicold.7/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Suivre Unicold sur Facebook"
              className="glass-card p-6 rounded-2xl transition-all hover:scale-110 hover:border-sky-500/50 min-h-[44px] min-w-[44px] flex items-center justify-center"
            >
              <Facebook className="w-10 h-10 text-sky-500" aria-hidden="true" />
            </a>
            <a
              href="https://www.instagram.com/uni.cold/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Suivre Unicold sur Instagram"
              className="glass-card p-6 rounded-2xl transition-all hover:scale-110 hover:border-sky-500/50 min-h-[44px] min-w-[44px] flex items-center justify-center"
            >
              <Instagram className="w-10 h-10 text-sky-500" aria-hidden="true" />
            </a>
            <a
              href="https://linkedin.com/company/unicold"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Suivre Unicold sur LinkedIn"
              className="glass-card p-6 rounded-2xl transition-all hover:scale-110 hover:border-sky-500/50 min-h-[44px] min-w-[44px] flex items-center justify-center"
            >
              <Linkedin className="w-10 h-10 text-sky-500" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-sky-100 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-64 h-64 bg-sky-300 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-ice-400 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">Prêt à Démarrer ?</h2>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
            Devis gratuit. Notre équipe vous accompagne.
          </p>
          <Link
            to="/contact"
            aria-label="Demander un devis gratuit pour votre projet de chambre froide"
            className="inline-flex items-center bg-sky-500 hover:bg-sky-300 text-slate-900 px-12 py-5 rounded-xl font-bold text-xl transition-all shadow-[0_0_30px_rgba(14,165,233,0.4)] hover:scale-105 min-h-[44px]"
          >
            <span>Demander un Devis Gratuit</span> <ArrowRight className="w-6 h-6 ml-3" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
}
