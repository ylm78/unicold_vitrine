import { Phone, Mail, MapPin, Send, CheckCircle, XCircle, ChevronRight, ChevronLeft, ArrowRight } from 'lucide-react';
import { useState, FormEvent } from 'react';
import emailjs from 'emailjs-com';
import Breadcrumb from '../components/Breadcrumb';

export default function Contact() {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 5;
  
  const [formData, setFormData] = useState({
    projectType: '',
    coldType: '',
    dimensions: '',
    sector: '',
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [status, setStatus] = useState('');
  const [validation, setValidation] = useState({
    name: { isValid: null, message: '' },
    email: { isValid: null, message: '' },
    phone: { isValid: null, message: '' },
  });

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePhone = (phone: string) => {
    if (!phone) return true; // Optionnel
    const re = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/;
    return re.test(phone);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData({...formData, [field]: value});
    
    // Validation en temps réel
    if (field === 'email' && value) {
      const isValid = validateEmail(value);
      setValidation({
        ...validation,
        email: {
          isValid,
          message: isValid ? '' : 'Format d\'email invalide'
        }
      });
    } else if (field === 'phone' && value) {
      const isValid = validatePhone(value);
      setValidation({
        ...validation,
        phone: {
          isValid,
          message: isValid ? '' : 'Format de téléphone invalide'
        }
      });
    } else if (field === 'name' && value) {
      const isValid = value.length >= 2;
      setValidation({
        ...validation,
        name: {
          isValid,
          message: isValid ? '' : 'Le nom doit contenir au moins 2 caractères'
        }
      });
    } else if (field === 'message' && value) {
      const isValid = value.length >= 10;
      setValidation({
        ...validation,
        message: {
          isValid,
          message: isValid ? '' : 'Le message doit contenir au moins 10 caractères'
        }
      });
    }
  };

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
        setStatus('✅ Demande de devis envoyée avec succès ! Nous vous répondrons sous 2h.');
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
      <Breadcrumb items={[{ label: 'Contact' }]} />
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
            <div className="glass-panel p-6 rounded-2xl">
              <h2 className="text-xl font-display font-bold text-white mb-6">Informations</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4 p-4 glass-card rounded-xl hover:bg-white/5 transition">
                  <div className="bg-ice-500/10 p-3 rounded-xl">
                    <Phone className="w-6 h-6 text-ice-400" />
                  </div>
                  <div>
                    <div className="font-semibold text-white mb-1">Téléphone</div>
                    <div className="space-y-2">
                      <div>
                        <a href="tel:0172541360" className="text-ice-400 hover:text-ice-300 hover:underline transition block">
                          01 72 54 13 60
                        </a>
                        <span className="text-xs text-emerald-400 font-semibold">(Numéro gratuit)</span>
                      </div>
                      <div>
                        <a href="tel:0662649421" className="text-ice-400 hover:text-ice-300 hover:underline transition block">
                          06 62 64 94 21
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 glass-card rounded-xl hover:bg-white/5 transition">
                  <div className="bg-ice-500/10 p-3 rounded-xl">
                    <Mail className="w-6 h-6 text-ice-400" />
                  </div>
                  <div>
                    <div className="font-semibold text-white mb-1">Email</div>
                    <div className="space-y-2">
                      <div>
                        <span className="text-xs text-ice-300/60 block mb-1">Pour les devis :</span>
                        <a href="mailto:devis@unicold.fr" className="text-ice-400 hover:text-ice-300 hover:underline transition">devis@unicold.fr</a>
                      </div>
                      <div>
                        <span className="text-xs text-ice-300/60 block mb-1">Pour toute autre demande :</span>
                        <a href="mailto:contact@unicold.fr" className="text-ice-400 hover:text-ice-300 hover:underline transition">contact@unicold.fr</a>
                      </div>
                    </div>
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
                Remplissez le formulaire ci-dessous et décrivez votre projet. Nous vous répondrons sous <strong className="text-emerald-300">2h</strong> avec un devis personnalisé.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-ice-300 mb-2">Nom complet *</label>
                  <div className="relative">
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      onBlur={(e) => handleInputChange('name', e.target.value)}
                      required
                      className={`w-full bg-slate-900/50 border rounded-lg px-4 py-3.5 sm:py-3 pr-10 text-base sm:text-sm text-white focus:outline-none focus:ring-1 transition-all placeholder-white/20 ${
                        validation.name.isValid === true 
                          ? 'border-emerald-500/50 focus:border-emerald-500 focus:ring-emerald-500' 
                          : validation.name.isValid === false
                          ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500'
                          : 'border-ice-500/20 focus:border-ice-500 focus:ring-ice-500'
                      }`}
                      placeholder="Votre nom"
                    />
                    {validation.name.isValid === true && (
                      <CheckCircle className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-emerald-400" />
                    )}
                    {validation.name.isValid === false && (
                      <XCircle className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-red-400" />
                    )}
                  </div>
                  {validation.name.message && (
                    <p className="text-xs text-red-400 mt-1">{validation.name.message}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-ice-300 mb-2">Email *</label>
                  <div className="relative">
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      onBlur={(e) => handleInputChange('email', e.target.value)}
                      required
                      className={`w-full bg-slate-900/50 border rounded-lg px-4 py-3.5 sm:py-3 pr-10 text-base sm:text-sm text-white focus:outline-none focus:ring-1 transition-all placeholder-white/20 ${
                        validation.email.isValid === true 
                          ? 'border-emerald-500/50 focus:border-emerald-500 focus:ring-emerald-500' 
                          : validation.email.isValid === false
                          ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500'
                          : 'border-ice-500/20 focus:border-ice-500 focus:ring-ice-500'
                      }`}
                      placeholder="votre@email.com"
                    />
                    {validation.email.isValid === true && (
                      <CheckCircle className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-emerald-400" />
                    )}
                    {validation.email.isValid === false && (
                      <XCircle className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-red-400" />
                    )}
                  </div>
                  {validation.email.message && (
                    <p className="text-xs text-red-400 mt-1">{validation.email.message}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-ice-300 mb-2">Téléphone</label>
                  <div className="relative">
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      onBlur={(e) => handleInputChange('phone', e.target.value)}
                      className={`w-full bg-slate-900/50 border rounded-lg px-4 py-3.5 sm:py-3 pr-10 text-base sm:text-sm text-white focus:outline-none focus:ring-1 transition-all placeholder-white/20 ${
                        validation.phone.isValid === true 
                          ? 'border-emerald-500/50 focus:border-emerald-500 focus:ring-emerald-500' 
                          : validation.phone.isValid === false
                          ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500'
                          : 'border-ice-500/20 focus:border-ice-500 focus:ring-ice-500'
                      }`}
                      placeholder="06 12 34 56 78"
                    />
                    {validation.phone.isValid === true && (
                      <CheckCircle className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-emerald-400" />
                    )}
                    {validation.phone.isValid === false && (
                      <XCircle className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-red-400" />
                    )}
                  </div>
                  {validation.phone.message && (
                    <p className="text-xs text-red-400 mt-1">{validation.phone.message}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-ice-300 mb-2">Message *</label>
                  <div className="relative">
                    <textarea
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      onBlur={(e) => handleInputChange('message', e.target.value)}
                      required
                      rows={6}
                      className={`w-full bg-slate-900/50 border rounded-lg px-4 py-3.5 sm:py-3 pr-10 text-base sm:text-sm text-white focus:outline-none focus:ring-1 transition-all resize-none placeholder-white/20 ${
                        validation.message.isValid === true 
                          ? 'border-emerald-500/50 focus:border-emerald-500 focus:ring-emerald-500' 
                          : validation.message.isValid === false
                          ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500'
                          : 'border-ice-500/20 focus:border-ice-500 focus:ring-ice-500'
                      }`}
                      placeholder="Décrivez votre projet : type de chambre froide souhaitée (positive, négative, combinée), dimensions, volume, température, contraintes particulières, délais, etc. Plus vous êtes précis, plus notre devis sera adapté à vos besoins."
                    ></textarea>
                    {validation.message.isValid === true && (
                      <CheckCircle className="absolute right-3 top-3 w-5 h-5 text-emerald-400" />
                    )}
                    {validation.message.isValid === false && (
                      <XCircle className="absolute right-3 top-3 w-5 h-5 text-red-400" />
                    )}
                  </div>
                  {validation.message.message && (
                    <p className="text-xs text-red-400 mt-1">{validation.message.message}</p>
                  )}
                  <p className="text-xs text-ice-300/60 mt-2">
                    Indiquez tous les détails de votre projet : type de chambre froide, dimensions, température souhaitée, contraintes, etc.
                  </p>
                </div>
                
                <button
                  type="submit"
                  className="w-full text-white py-4 rounded-lg font-bold text-lg transition-all shadow-[0_0_25px_rgba(249,115,22,0.5)] hover:shadow-[0_0_35px_rgba(249,115,22,0.7)] hover:scale-105 active:scale-95 flex items-center justify-center space-x-2"
                  style={{ backgroundColor: '#f97316' }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#ea580c'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#f97316'}
                >
                  <Send className="w-5 h-5" />
                  <span>Envoyer la demande de devis</span>
                </button>
              </form>

              {/* Statut de l'envoi */}
              {status && (
                <div className={`mt-6 p-6 rounded-xl flex items-start space-x-4 ${
                  status.includes('✅') 
                    ? 'bg-emerald-500/20 border-2 border-emerald-500/50 text-emerald-300' 
                    : 'bg-red-500/20 border-2 border-red-500/50 text-red-300'
                }`}>
                  {status.includes('✅') ? (
                    <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
                  ) : (
                    <XCircle className="w-6 h-6 flex-shrink-0 mt-1" />
                  )}
                  <div>
                    <p className="font-bold mb-1">{status.includes('✅') ? 'Message envoyé avec succès !' : 'Erreur lors de l\'envoi'}</p>
                    <p className="text-sm opacity-90">{status}</p>
                    {status.includes('✅') && (
                      <p className="text-xs mt-3 opacity-75">
                        Nous vous répondrons sous <strong className="text-emerald-300">2h</strong>. En cas d'urgence, appelez-nous au <a href="tel:0172541360" className="underline font-bold hover:text-emerald-200">01 72 54 13 60</a> (gratuit) ou <a href="tel:0662649421" className="underline font-bold hover:text-emerald-200">06 62 64 94 21</a>
                      </p>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Google Maps */}
          <div className="mt-16 max-w-6xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-white mb-8 text-center">Nos Implantations</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="glass-card p-6 rounded-xl">
                <h3 className="font-bold text-white mb-2">Siège Social</h3>
                <p className="text-ice-200/70 text-sm mb-4">16 Rue Pascal<br />78300 Poissy</p>
                <a 
                  href="https://www.google.com/maps/search/16+Rue+Pascal+78300+Poissy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-ice-400 hover:text-ice-300 text-sm flex items-center transition"
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  Voir sur Google Maps
                </a>
              </div>
              <div className="glass-card p-6 rounded-xl">
                <h3 className="font-bold text-white mb-2">Showroom</h3>
                <p className="text-ice-200/70 text-sm mb-4">138 Les Berges de Seine<br />91830 Le Coudray-Montceaux</p>
                <a 
                  href="https://www.google.com/maps/search/138+Les+Berges+de+Seine+91830+Le+Coudray-Montceaux" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-ice-400 hover:text-ice-300 text-sm flex items-center transition"
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  Voir sur Google Maps
                </a>
              </div>
              <div className="glass-card p-6 rounded-xl">
                <h3 className="font-bold text-white mb-2">Entrepôt</h3>
                <p className="text-ice-200/70 text-sm mb-4">ZA de la Rabette<br />28100 Dreux</p>
                <a 
                  href="https://www.google.com/maps/search/ZA+de+la+Rabette+28100+Dreux" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-ice-400 hover:text-ice-300 text-sm flex items-center transition"
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  Voir sur Google Maps
                </a>
              </div>
            </div>
            
            {/* Carte Google Maps intégrée */}
            <div className="glass-panel rounded-2xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2622.5!2d2.122!3d48.928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDU1JzQwLjgiTiAywrAwNyczMTkuMiJF!5e0!3m2!1sfr!2sfr!4v1234567890"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
                title="Localisation Unicold - Siège Social Poissy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
