import { Phone, Mail, MapPin, Send, CheckCircle, XCircle, FileText, Calculator } from 'lucide-react';
import { useState, FormEvent } from 'react';
import emailjs from 'emailjs-com';
import Breadcrumb from '../components/Breadcrumb';

export default function Devis() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    coldType: '',
    dimensions: '',
    sector: '',
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
    const re = /^(\+33|0)[1-9](\d{2}){4}$/;
    return re.test(phone.replace(/\s/g, ''));
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
          message: `DEMANDE DE DEVIS\n\nType de projet: ${formData.projectType || 'Non renseigné'}\nType de froid: ${formData.coldType || 'Non renseigné'}\nDimensions: ${formData.dimensions || 'Non renseigné'}\nSecteur: ${formData.sector || 'Non renseigné'}\n\nMessage: ${formData.message || 'Aucun message'}`,
        },
        publicKey
      )
      .then(() => {
        setStatus('✅ Demande de devis envoyée avec succès ! Nous vous répondrons sous 2h.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          projectType: '',
          coldType: '',
          dimensions: '',
          sector: '',
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
      <Breadcrumb items={[{ label: 'Devis' }]} />
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
          <div className="w-20 h-20 rounded-2xl bg-orange-500/20 flex items-center justify-center mx-auto mb-6">
            <Calculator className="w-10 h-10 text-orange-400" />
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-4 text-white">Demande de Devis</h1>
          <p className="text-xl text-ice-100/80 max-w-2xl mx-auto">
            Formulaire pour obtenir rapidement un devis personnalisé. Nous vous répondrons sous <strong className="text-emerald-300">2h</strong>.
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
                        <a href="tel:+33172541360" className="text-ice-400 hover:text-ice-300 hover:underline transition block">
                          +33 1 72 54 13 60
                        </a>
                        <span className="text-xs text-emerald-400 font-semibold">(Numéro gratuit)</span>
                      </div>
                      <div>
                        <a href="tel:+33662649421" className="text-ice-400 hover:text-ice-300 hover:underline transition block">
                          +33 6 62 64 94 21
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

            {/* Formulaire de devis */}
            <div className="glass-panel p-6 sm:p-8 rounded-2xl">
              <h2 className="text-xl md:text-2xl font-display font-bold text-white mb-4 md:mb-6">
                Formulaire de Devis
              </h2>
              <p className="text-sm sm:text-base text-ice-200/70 mb-6">
                Remplissez le formulaire ci-dessous et décrivez votre projet. Nous vous répondrons sous <strong className="text-emerald-300">2h</strong> avec un devis personnalisé.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <label className="block text-xs sm:text-sm font-bold text-ice-300 mb-2">Nom complet *</label>
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
                  <label className="block text-xs sm:text-sm font-bold text-ice-300 mb-2">Email *</label>
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
                  <label className="block text-xs sm:text-sm font-bold text-ice-300 mb-2">Téléphone</label>
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
                      placeholder="+33 1 72 54 13 60"
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
                  <label className="block text-xs sm:text-sm font-bold text-ice-300 mb-2">Type de projet *</label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({...formData, projectType: e.target.value})}
                    required
                    className="w-full bg-slate-900/50 border border-ice-500/20 rounded-lg px-4 py-3.5 sm:py-3 text-base sm:text-sm text-white focus:outline-none focus:border-ice-500 focus:ring-1 focus:ring-ice-500 transition-all"
                  >
                    <option value="">Sélectionnez un type</option>
                    <option value="creation">Création nouvelle chambre froide</option>
                    <option value="renovation">Rénovation / Remplacement</option>
                    <option value="depannage">Dépannage / Urgence</option>
                    <option value="maintenance">Contrat de maintenance</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-bold text-ice-300 mb-2">Type de froid *</label>
                  <select
                    value={formData.coldType}
                    onChange={(e) => setFormData({...formData, coldType: e.target.value})}
                    required
                    className="w-full bg-slate-900/50 border border-ice-500/20 rounded-lg px-4 py-3.5 sm:py-3 text-base sm:text-sm text-white focus:outline-none focus:border-ice-500 focus:ring-1 focus:ring-ice-500 transition-all"
                  >
                    <option value="">Sélectionnez un type</option>
                    <option value="positif">Froid Positif (+0°C à +10°C)</option>
                    <option value="negatif">Froid Négatif (-18°C à -25°C)</option>
                    <option value="combiné">Combiné (Positif + Négatif)</option>
                    <option value="indetermine">Je ne sais pas</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-bold text-ice-300 mb-2">Dimensions approximatives</label>
                  <input
                    type="text"
                    value={formData.dimensions}
                    onChange={(e) => setFormData({...formData, dimensions: e.target.value})}
                    className="w-full bg-slate-900/50 border border-ice-500/20 rounded-lg px-4 py-3.5 sm:py-3 text-base sm:text-sm text-white focus:outline-none focus:border-ice-500 focus:ring-1 focus:ring-ice-500 transition-all placeholder-white/20"
                    placeholder="Ex: 3m x 2m x 2.5m ou 15m³"
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-bold text-ice-300 mb-2">Secteur d'activité</label>
                  <select
                    value={formData.sector}
                    onChange={(e) => setFormData({...formData, sector: e.target.value})}
                    className="w-full bg-slate-900/50 border border-ice-500/20 rounded-lg px-4 py-3.5 sm:py-3 text-base sm:text-sm text-white focus:outline-none focus:border-ice-500 focus:ring-1 focus:ring-ice-500 transition-all"
                  >
                    <option value="">Sélectionnez un secteur</option>
                    <option value="restauration">Restauration</option>
                    <option value="commerce">Commerce</option>
                    <option value="industrie">Industrie / Logistique</option>
                    <option value="medical">Médical / Pharmaceutique</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-xs sm:text-sm font-bold text-ice-300 mb-2">Message / Détails du projet *</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                    rows={6}
                    className="w-full bg-slate-900/50 border border-ice-500/20 rounded-lg px-4 py-3.5 sm:py-3 text-base sm:text-sm text-white focus:outline-none focus:border-ice-500 focus:ring-1 focus:ring-ice-500 transition-all resize-none placeholder-white/20"
                    placeholder="Décrivez votre projet : contraintes particulières, délais souhaités, température précise, etc. Plus vous êtes précis, plus notre devis sera adapté à vos besoins."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full text-white py-4 rounded-lg font-bold text-base sm:text-lg transition-all shadow-[0_0_25px_rgba(249,115,22,0.5)] hover:shadow-[0_0_35px_rgba(249,115,22,0.7)] hover:scale-105 active:scale-95 flex items-center justify-center space-x-2"
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
                        Nous vous répondrons sous <strong className="text-emerald-300">2h</strong>. En cas d'urgence, appelez-nous au <a href="tel:+33172541360" className="underline font-bold hover:text-emerald-200">+33 1 72 54 13 60</a> (gratuit) ou <a href="tel:+33662649421" className="underline font-bold hover:text-emerald-200">+33 6 62 64 94 21</a>
                      </p>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

