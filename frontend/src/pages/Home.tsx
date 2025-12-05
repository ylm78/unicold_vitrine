import { Snowflake, MapPin, Facebook, Instagram, Linkedin, ArrowRight, Wrench, Calendar, Building2, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useState, FormEvent } from 'react';
import emailjs from 'emailjs-com';
import sncfLogo from '../assets/logo/sncf.png';
import nashLogo from '../assets/logo/nash.png';
import berlinerLogo from '../assets/logo/berliner.png';
import meydanLogo from '../assets/logo/meydan.png';
import afolelogo from '../assets/logo/a-fole.jpg';
import subwaylogo from '../assets/logo/Logo-subway.png';
import dominoslogo from '../assets/logo/Dominos_logo.png';
import totallogo from '../assets/logo/Logo-total.png';

function VisitForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferredDate: '',
    preferredTime: '',
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
          message: `Demande de visite du dépôt\n\nDate souhaitée: ${formData.preferredDate || 'Non renseignée'}\nHeure souhaitée: ${formData.preferredTime || 'Non renseignée'}\n\nMessage: ${formData.message || 'Aucun message'}`,
        },
        publicKey
      )
      .then(() => {
        setStatus('✅ Demande de visite envoyée avec succès ! Nous vous répondrons sous 2h pour confirmer votre rendez-vous.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          preferredDate: '',
          preferredTime: '',
          message: ''
        });
      })
      .catch((error) => {
        console.error('Erreur:', error);
        setStatus('❌ Une erreur est survenue. Réessayez plus tard ou contactez-nous directement au +33 1 72 54 13 60 (gratuit) ou +33 6 62 64 94 21.');
      });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-ice-300">Nom Complet *</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            required
            className="w-full bg-slate-900/50 border border-ice-500/20 rounded-lg px-4 py-3.5 sm:py-3 text-base sm:text-sm text-white focus:outline-none focus:border-ice-500 focus:ring-1 focus:ring-ice-500 transition-all placeholder-white/20"
            placeholder="Jean Dupont"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-ice-300">Email *</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            required
            className="w-full bg-slate-900/50 border border-ice-500/20 rounded-lg px-4 py-3.5 sm:py-3 text-base sm:text-sm text-white focus:outline-none focus:border-ice-500 focus:ring-1 focus:ring-ice-500 transition-all placeholder-white/20"
            placeholder="contact@entreprise.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-ice-300">Téléphone *</label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
            required
            className="w-full bg-slate-900/50 border border-ice-500/20 rounded-lg px-4 py-3.5 sm:py-3 text-base sm:text-sm text-white focus:outline-none focus:border-ice-500 focus:ring-1 focus:ring-ice-500 transition-all placeholder-white/20"
            placeholder="06 12 34 56 78"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-ice-300">Date souhaitée</label>
          <input
            type="date"
            value={formData.preferredDate}
            onChange={(e) => setFormData({...formData, preferredDate: e.target.value})}
            className="w-full bg-slate-900/50 border border-ice-500/20 rounded-lg px-4 py-3.5 sm:py-3 text-base sm:text-sm text-white focus:outline-none focus:border-ice-500 focus:ring-1 focus:ring-ice-500 transition-all"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-ice-300">Heure souhaitée</label>
        <input
          type="time"
          value={formData.preferredTime}
          onChange={(e) => setFormData({...formData, preferredTime: e.target.value})}
          className="w-full bg-slate-900/50 border border-ice-500/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-ice-500 focus:ring-1 focus:ring-ice-500 transition-all"
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-ice-300">Message (optionnel)</label>
        <textarea
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({...formData, message: e.target.value})}
          className="w-full bg-slate-900/50 border border-ice-500/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-ice-500 focus:ring-1 focus:ring-ice-500 transition-all placeholder-white/20"
          placeholder="Précisez vos besoins ou questions..."
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full bg-gradient-to-r from-ice-600 to-blue-600 hover:from-ice-500 hover:to-blue-500 text-white font-bold py-4 rounded-lg shadow-lg transform transition hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2"
      >
        <Calendar className="w-5 h-5" />
        Demander un rendez-vous
      </button>

      {status && (
        <div className={`mt-6 p-4 rounded-xl text-center font-semibold ${
          status.includes('✅') 
            ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' 
            : 'bg-red-500/20 text-red-300 border border-red-500/30'
        }`}>
          {status}
        </div>
      )}
    </form>
  );
}

export default function Home() {
  useEffect(() => {
    // Particles animation
    const particlesContainer = document.getElementById('particles');
    if (particlesContainer) {
      for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        const size = Math.random() * 5 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        const duration = Math.random() * 10 + 10;
        const delay = Math.random() * 5;
        particle.style.animation = `float-particle ${duration}s infinite linear ${delay}s`;
        particlesContainer.appendChild(particle);
      }
    }
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-frost-gradient"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?q=80&w=2874&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div id="particles" className="absolute inset-0 pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-ice-500 rounded-full blur-[120px] opacity-20 animate-pulse-slow"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-4 px-4 py-1 rounded-full border border-ice-400/30 bg-ice-500/10 backdrop-blur-sm">
            <span className="text-ice-300 text-sm font-medium tracking-widest uppercase">Expertise Froid Industriel & Commercial</span>
          </div>
          
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight px-2">
            L'Excellence du <br />
            <span className="text-gradient">Froid Maîtrisé</span>
          </h1>
          
          <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-ice-100/80 font-light px-4">
            Conception, installation et maintenance de chambres froides haute performance. De l'étude thermique à la mise en service.
          </p>
          
          <div className="mt-8 md:mt-10 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-4">
            <Link
              to="/contact"
              className="group relative w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 text-base sm:text-lg bg-accent hover:bg-accent-hover text-white rounded-lg overflow-hidden transition-all hover:scale-105 shadow-[0_0_25px_rgba(249,115,22,0.5)] hover:shadow-[0_0_35px_rgba(249,115,22,0.7)]"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1s_infinite]"></div>
              <span className="relative font-semibold flex items-center gap-2">
                Demander un Devis Gratuit <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
            <Link
              to="/services"
              className="px-8 py-4 glass-panel rounded-lg text-white font-medium hover:bg-white/10 transition-all flex items-center justify-center gap-2"
            >
              <Wrench className="w-4 h-4" /> Nos Services
            </Link>
          </div>
        </div>
      </section>

      {/* SAV 24/7 - Section Urgence */}
      <section className="py-16 bg-gradient-to-r from-red-950/30 via-slate-950 to-red-950/30 border-y border-red-500/20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-red-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-red-500 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="glass-panel p-6 sm:p-8 md:p-12 rounded-2xl border-2 border-red-500/40">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
              <div className="flex-1 text-center md:text-left">
                <div className="inline-block mb-3 md:mb-4 px-3 md:px-4 py-1.5 md:py-2 bg-red-500/20 border border-red-500/50 rounded-full text-red-300 font-bold text-xs md:text-sm">
                  ⚡ URGENCE 24/7
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white mb-3 md:mb-4">
                  Dépannage Express sous 4h
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-ice-200/80 mb-4">
                  Panne de chambre froide ? Nous intervenons 24h/24 et 7j/7 partout en Île-de-France et Centre-Val de Loire.
                </p>
                <p className="text-sm sm:text-base md:text-lg text-red-300 font-semibold">
                  📞 Appelez-nous au <a href="tel:+33172541360" className="text-white hover:underline">+33 1 72 54 13 60</a> <span className="text-emerald-300 text-xs md:text-sm">(Gratuit)</span> ou <a href="tel:+33662649421" className="text-white hover:underline">+33 6 62 64 94 21</a>
                </p>
              </div>
              <div className="flex-shrink-0 w-full sm:w-auto">
                <a
                  href="tel:+33172541360"
                  className="group relative w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 bg-red-600 hover:bg-red-500 text-white rounded-xl font-bold text-base md:text-lg transition-all shadow-[0_0_30px_rgba(239,68,68,0.5)] hover:scale-105 flex items-center justify-center gap-3"
                >
                  <Phone className="w-5 h-5 md:w-6 md:h-6" />
                  <span>Appeler maintenant</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-slate-950 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white mb-3 md:mb-4 px-4">Nos Services Experts</h2>
            <p className="text-sm sm:text-base text-ice-200/60 max-w-2xl mx-auto px-4">Un accompagnement complet pour garantir la pérennité de vos installations.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 px-4">
            <div className="glass-card p-6 rounded-xl group hover:bg-ice-900/20 transition-all">
              <div className="w-14 h-14 rounded-full bg-ice-500/10 flex items-center justify-center mb-6 text-ice-400 group-hover:scale-110 transition-transform">
                <Snowflake className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Vente & Fourniture</h3>
              <p className="text-sm text-ice-200/60">Large gamme de chambres froides et matériaux professionnels. Panneaux isolants, portes, groupes frigorifiques.</p>
            </div>

            <div className="glass-card p-5 sm:p-6 rounded-xl group hover:bg-ice-900/20 transition-all">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-ice-500/10 flex items-center justify-center mb-4 sm:mb-6 text-ice-400 group-hover:scale-110 transition-transform">
                <Wrench className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white mb-2">Installation</h3>
              <p className="text-xs sm:text-sm text-ice-200/60">Monteurs frigoristes qualifiés. Montage rapide et conforme HACCP.</p>
            </div>

            <div className="glass-card p-5 sm:p-6 rounded-xl group hover:bg-ice-900/20 transition-all">
              <div className="w-14 h-14 rounded-full bg-ice-500/10 flex items-center justify-center mb-6 text-ice-400 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Solutions Sur-Mesure</h3>
              <p className="text-sm text-ice-200/60">Conception adaptée à vos contraintes d'espace et besoins spécifiques.</p>
            </div>

            <div className="glass-card p-6 rounded-xl group hover:bg-ice-900/20 transition-all">
              <div className="w-14 h-14 rounded-full bg-ice-500/10 flex items-center justify-center mb-6 text-ice-400 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">SAV 24/7</h3>
              <p className="text-sm text-ice-200/60">Intervention d'urgence sous 4h en cas de panne critique. Astreinte permanente.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Implantations Section */}
      <section className="py-24 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Nos Implantations</h2>
            <p className="text-ice-200/60 max-w-2xl mx-auto">Trois sites stratégiques pour vous servir en Île-de-France et Centre-Val de Loire</p>
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
                <div key={idx} className={`glass-card p-6 sm:p-8 md:p-10 rounded-xl md:rounded-2xl text-center hover-lift ${site.isDepot ? 'border-2 border-ice-500/30' : ''}`}>
                  <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-xl md:rounded-2xl bg-ice-500/10 flex items-center justify-center mx-auto mb-4 sm:mb-5 md:mb-6 text-ice-400">
                    <IconComponent className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10" />
                  </div>
                  <div className="mb-2 inline-block px-2.5 sm:px-3 py-0.5 sm:py-1 bg-ice-500/20 border border-ice-500/30 rounded-full text-xs font-bold text-ice-300 backdrop-blur-sm">
                    {site.type}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">{site.name}</h3>
                  <p className="text-ice-200/60 text-sm sm:text-base md:text-lg mb-2">{site.location}</p>
                  <p className="text-ice-300 text-xs sm:text-sm md:text-base font-medium mb-2 sm:mb-3">{site.address}</p>
                  {site.isDepot && (
                    <div className="mt-2 inline-block px-4 py-2 bg-emerald-500/20 border border-emerald-500/30 rounded-full text-xs font-bold text-emerald-300 backdrop-blur-sm">
                      Dépôt visitable
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Section Visite du Dépôt */}
          <div className="max-w-4xl mx-auto">
            <div className="glass-panel rounded-3xl p-8 md:p-12 border-ice-500/30 shadow-[0_0_50px_rgba(14,165,233,0.15)]">
              <div className="text-center mb-10">
                <div className="w-20 h-20 rounded-2xl bg-ice-500/10 flex items-center justify-center mx-auto mb-6 text-ice-400">
                  <Building2 className="w-10 h-10" />
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Visitez Notre Showroom</h2>
                <p className="text-ice-200/80 text-lg mb-2">
                  <span className="font-bold text-ice-300">138 Les Berges de Seine, 91830 Le Coudray-Montceaux</span>
                </p>
                <p className="text-ice-200/70 max-w-2xl mx-auto">
                  Venez découvrir notre showroom et notre stock de chambres froides, panneaux isolants, portes et équipements en direct. 
                  Nos experts vous accueillent sur rendez-vous pour vous conseiller et vous faire visiter nos installations.
                </p>
              </div>

              <VisitForm />
            </div>
          </div>
        </div>
      </section>

      {/* Réalisations Preview */}
      <section className="py-24 bg-slate-900 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Dernières Réalisations</h2>
            <p className="text-ice-200/60 max-w-2xl mx-auto">Découvrez quelques-unes de nos réalisations qui témoignent de notre expertise</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            {[
              { title: 'Chambre Froide Négative', desc: 'Installation professionnelle pour le secteur alimentaire', img: '/chambre-froide-neg.jpg' },
              { title: 'Aménagement Intérieur', desc: 'Solutions complètes clé en main pour restaurants', img: '/azz.jpg' },
              { title: 'Projet Sur-Mesure', desc: 'Conception adaptée aux contraintes d\'espace', img: '/surmesure.jpg' },
            ].map((project, idx) => (
              <div key={idx} className="relative rounded-2xl overflow-hidden group h-80 glass-card">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${project.img})` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
                  <p className="text-ice-200/70 text-sm">{project.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/realisations"
              className="inline-flex items-center bg-gradient-to-r from-ice-600 to-blue-600 hover:from-ice-500 hover:to-blue-500 text-white font-bold px-10 py-4 rounded-lg shadow-lg transform transition hover:scale-[1.01]"
            >
              Voir toutes nos réalisations <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-20 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Suivez-nous sur les Réseaux Sociaux</h2>
            <p className="text-ice-200/60 text-xl max-w-2xl mx-auto">Restez informés de nos dernières réalisations et actualités</p>
          </div>

          <div className="flex justify-center gap-6 md:gap-8">
            <a
              href="https://www.facebook.com/unicold.unicold.7/"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-6 rounded-2xl transition-all hover:scale-110 hover:border-ice-500/50"
            >
              <Facebook className="w-10 h-10 text-ice-400" />
            </a>
            <a
              href="https://www.instagram.com/uni.cold/"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-6 rounded-2xl transition-all hover:scale-110 hover:border-ice-500/50"
            >
              <Instagram className="w-10 h-10 text-ice-400" />
            </a>
            <a
              href="https://linkedin.com/company/unicold"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-6 rounded-2xl transition-all hover:scale-110 hover:border-ice-500/50"
            >
              <Linkedin className="w-10 h-10 text-ice-400" />
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-ice-900 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-64 h-64 bg-ice-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-ice-400 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Prêt à Démarrer Votre Projet ?</h2>
          <p className="text-xl text-ice-100/80 mb-10 max-w-2xl mx-auto">
            Contactez-nous pour un devis gratuit et personnalisé. Notre équipe d'experts vous accompagne de A à Z.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-ice-600 hover:bg-ice-500 text-white px-12 py-5 rounded-xl font-bold text-xl transition-all shadow-[0_0_30px_rgba(14,165,233,0.4)] hover:scale-105"
          >
            Demander un Devis Gratuit <ArrowRight className="w-6 h-6 ml-3" />
          </Link>
        </div>
      </section>

      {/* Clients Logos */}
      <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-24 border-t border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '30px 30px'
          }}></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white mb-3 md:mb-4 px-4">Ils nous font confiance</h2>
            <p className="text-ice-200/80 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
              Des entreprises de renom qui nous font confiance pour leurs projets de chambres froides
            </p>
          </div>

          <div className="relative overflow-hidden py-6 md:py-8">
            <div className="flex gap-8 sm:gap-12 md:gap-16 lg:gap-24 items-center animate-marquee-infinite">
              <div className="flex gap-8 sm:gap-12 md:gap-16 lg:gap-24 items-center flex-shrink-0">
                {[sncfLogo, nashLogo, berlinerLogo, meydanLogo, afolelogo, subwaylogo, dominoslogo, totallogo].map((logo, idx) => (
                  <div key={idx} className="flex items-center justify-center h-24 sm:h-28 md:h-32 w-32 sm:w-40 md:w-48 transition-all duration-300 group px-2 sm:px-3 md:px-4">
                    <div className="bg-white/95 p-2 sm:p-3 md:p-4 rounded-lg md:rounded-xl border border-white/30 group-hover:border-ice-400/50 transition-all shadow-lg group-hover:shadow-xl">
                      <img 
                        src={logo} 
                        alt={`Client ${idx + 1}`} 
                        className="h-12 sm:h-14 md:h-16 lg:h-20 w-auto object-contain max-w-full opacity-100 group-hover:scale-110 transition-all duration-300" 
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex gap-8 sm:gap-12 md:gap-16 lg:gap-24 items-center flex-shrink-0">
                {[sncfLogo, nashLogo, berlinerLogo, meydanLogo, afolelogo, subwaylogo, dominoslogo, totallogo].map((logo, idx) => (
                  <div key={idx} className="flex items-center justify-center h-24 sm:h-28 md:h-32 w-32 sm:w-40 md:w-48 transition-all duration-300 group px-2 sm:px-3 md:px-4">
                    <div className="bg-white/95 p-2 sm:p-3 md:p-4 rounded-lg md:rounded-xl border border-white/30 group-hover:border-ice-400/50 transition-all shadow-lg group-hover:shadow-xl">
                      <img 
                        src={logo} 
                        alt={`Client ${idx + 1}`} 
                        className="h-12 sm:h-14 md:h-16 lg:h-20 w-auto object-contain max-w-full opacity-100 group-hover:scale-110 transition-all duration-300" 
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
