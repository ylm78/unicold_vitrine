import { Phone, Mail, MapPin, Send, CheckCircle, XCircle, FileText, Calculator } from 'lucide-react';
import { useState, FormEvent } from 'react';
import emailjs from 'emailjs-com';
import SEO from '../components/SEO';
import { getServiceSchema } from '../utils/schema';

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

    const serviceID = 'service_ixgvh57'; // Service pour devis@unicold.fr (celui marqué DEFAULT)
    const templateID = 'template_57qr94g'; // Template pour devis@unicold.fr
    const publicKey = 'Q_4KZL1s7zXDPGjMz';

    // Message structuré pour le template
    const messageDetails = `Type de projet: ${formData.projectType || 'Non renseigné'}
Type de froid: ${formData.coldType || 'Non renseigné'}
Dimensions: ${formData.dimensions || 'Non renseigné'}
Secteur: ${formData.sector || 'Non renseigné'}

Message: ${formData.message || 'Aucun message'}`;

    // Paramètres pour EmailJS - doivent correspondre aux variables du template
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      name: formData.name, // Pour le template qui utilise {{name}}
      email: formData.email, // Pour le Reply To qui utilise {{email}}
      from_phone: formData.phone || 'Non renseigné',
      subject: `Demande de Devis - ${formData.name}`,
      message: messageDetails,
    };

    console.log('🚀 Envoi EmailJS - Service:', serviceID, 'Template:', templateID);
    console.log('📧 Paramètres:', templateParams);

    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        console.log('✅ EmailJS Success:', response.status, response.text);
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
        console.error('❌ EmailJS Error:', {
          status: error.status,
          text: error.text,
          serviceID: serviceID,
          templateID: templateID
        });
        setStatus(`❌ Erreur lors de l'envoi (${error.status || 'Inconnu'}). ${error.text || 'Vérifiez la console pour plus de détails.'}`);
      });
  };

  return (
    <div>
      <SEO
        title="Devis Gratuit Chambre Froide | Calcul en Ligne | Unicold"
        description="Demandez votre devis gratuit de chambre froide en ligne. Calcul rapide selon vos besoins : dimensions, type (positive/négative), secteur d'activité. Réponse sous 2h. Île-de-France et Centre-Val de Loire."
        keywords="devis chambre froide gratuit, prix chambre froide, calcul chambre froide, devis installation chambre froide, tarif chambre froide"
        canonical="https://unicold.fr/devis"
        schema={getServiceSchema("Devis chambre froide", "Devis gratuit pour installation de chambre froide positive ou négative. Calcul rapide selon vos besoins.")}
      />
      <section className="relative py-32 bg-white overflow-hidden border-b border-sky-500/10">
        {/* Lignes géométriques subtiles */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-sky-400 to-transparent"></div>
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-sky-400/50 to-transparent"></div>
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-sky-400 to-transparent"></div>
          <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-sky-400/50 to-transparent"></div>
        </div>
        {/* Accent lumineux subtil */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-sky-300/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-ice-400/5 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <div className="w-20 h-20 rounded-2xl bg-orange-500/20 flex items-center justify-center mx-auto mb-6">
            <Calculator className="w-10 h-10 text-orange-400" />
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-4 text-slate-900">Demande de Devis</h1>
          <p className="text-xl text-slate-600/80 max-w-2xl mx-auto">
            Formulaire pour obtenir rapidement un devis personnalisé. Nous vous répondrons sous <strong className="text-emerald-300">2h</strong>.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gradient-to-b from-white to-sky-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-6 lg:gap-8 items-start">
            {/* Informations de contact - Version améliorée */}
            <div className="lg:col-span-4">
              <div className="sticky top-6 lg:top-8">
                <div className="glass-panel p-6 md:p-8 rounded-3xl shadow-xl border border-sky-200/50">
                  <div className="flex items-center space-x-3 mb-6 pb-4 border-b border-sky-200/50">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-sky-400 to-sky-600 flex items-center justify-center shadow-lg flex-shrink-0">
                      <FileText className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </div>
                    <h2 className="text-xl md:text-2xl font-display font-bold text-slate-900">Besoin d'aide ?</h2>
                  </div>
                  
                  <div className="space-y-4">
                    {/* Téléphone */}
                    <div className="group relative overflow-hidden p-4 md:p-5 rounded-2xl bg-gradient-to-br from-white to-sky-50/50 border border-sky-200/50 hover:border-sky-300 hover:shadow-lg transition-all duration-300">
                      <div className="flex items-start space-x-3 md:space-x-4">
                        <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-sky-400 to-sky-600 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                          <Phone className="w-5 h-5 md:w-6 md:h-6 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-bold text-slate-900 mb-2 text-xs md:text-sm uppercase tracking-wide">Téléphone</div>
                          <div className="space-y-2">
                            <div>
                              <a href="tel:+33172541360" className="text-base md:text-lg font-bold text-sky-600 hover:text-sky-700 hover:underline transition block">
                                +33 1 72 54 13 60
                              </a>
                              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-700 mt-1">
                                Gratuit
                              </span>
                            </div>
                            <div className="pt-1">
                              <a href="tel:+33662649421" className="text-sm md:text-base font-semibold text-slate-700 hover:text-sky-600 hover:underline transition">
                                +33 6 62 64 94 21
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="group relative overflow-hidden p-4 md:p-5 rounded-2xl bg-gradient-to-br from-white to-sky-50/50 border border-sky-200/50 hover:border-sky-300 hover:shadow-lg transition-all duration-300">
                      <div className="flex items-start space-x-3 md:space-x-4">
                        <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                          <Mail className="w-5 h-5 md:w-6 md:h-6 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-bold text-slate-900 mb-2 text-xs md:text-sm uppercase tracking-wide">Email</div>
                          <div>
                            <span className="text-xs text-slate-600 block mb-1">Pour les devis :</span>
                            <a href="mailto:devis@unicold.fr" className="text-sm md:text-base font-semibold text-sky-600 hover:text-sky-700 hover:underline transition break-all">
                              devis@unicold.fr
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Adresse */}
                    <div className="group relative overflow-hidden p-4 md:p-5 rounded-2xl bg-gradient-to-br from-white to-sky-50/50 border border-sky-200/50 hover:border-sky-300 hover:shadow-lg transition-all duration-300">
                      <div className="flex items-start space-x-3 md:space-x-4">
                        <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-slate-400 to-slate-600 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                          <MapPin className="w-5 h-5 md:w-6 md:h-6 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-bold text-slate-900 mb-2 text-xs md:text-sm uppercase tracking-wide">Siège Social</div>
                          <div className="text-xs md:text-sm text-slate-700 leading-relaxed">
                            16 Rue Pascal<br />
                            78300 Poissy
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Badge réponse rapide */}
                  <div className="mt-5 md:mt-6 p-4 rounded-xl bg-gradient-to-r from-emerald-50 to-sky-50 border border-emerald-200/50">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-emerald-700 uppercase tracking-wide">Réponse garantie</div>
                        <div className="text-sm md:text-base font-bold text-slate-900">Sous 2 heures</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Formulaire de devis - Version améliorée */}
            <div className="lg:col-span-8">
              <div className="glass-panel p-6 md:p-8 lg:p-10 rounded-3xl shadow-xl border border-sky-200/50">
                <div className="mb-6 md:mb-8">
                  <div className="flex items-center space-x-3 mb-3 md:mb-4">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center shadow-lg flex-shrink-0">
                      <Calculator className="w-6 h-6 md:w-7 md:h-7 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-display font-bold text-slate-900">
                        Formulaire de Devis
                      </h2>
                      <p className="text-xs md:text-sm text-slate-600 mt-1">
                        Remplissez le formulaire et recevez un devis personnalisé sous <strong className="text-emerald-600 font-bold">2h</strong>
                      </p>
                    </div>
                  </div>
                </div>
              
                <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
                  {/* Section Coordonnées */}
                  <div className="space-y-5 md:space-y-6">
                    <div className="flex items-center space-x-2 pb-3 border-b border-sky-200/50">
                      <div className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-sky-100 flex items-center justify-center flex-shrink-0">
                        <FileText className="w-3.5 h-3.5 md:w-4 md:h-4 text-sky-600" />
                      </div>
                      <h3 className="text-base md:text-lg font-bold text-slate-900">Vos Coordonnées</h3>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                      <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">
                          Nom complet <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            value={formData.name}
                            onChange={(e) => handleInputChange('name', e.target.value)}
                            onBlur={(e) => handleInputChange('name', e.target.value)}
                            required
                            className={`w-full bg-white border-2 rounded-xl px-4 py-3.5 pr-12 text-base text-slate-900 focus:outline-none focus:ring-2 transition-all placeholder-slate-400 ${
                              validation.name.isValid === true 
                                ? 'border-emerald-500 focus:border-emerald-500 focus:ring-emerald-500/20' 
                                : validation.name.isValid === false
                                ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
                                : 'border-sky-200 focus:border-sky-500 focus:ring-sky-500/20'
                            }`}
                            placeholder="Jean Dupont"
                          />
                          {validation.name.isValid === true && (
                            <CheckCircle className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-emerald-500" />
                          )}
                          {validation.name.isValid === false && (
                            <XCircle className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-red-500" />
                          )}
                        </div>
                        {validation.name.message && (
                          <p className="text-xs text-red-500 mt-2 flex items-center space-x-1">
                            <XCircle className="w-3 h-3" />
                            <span>{validation.name.message}</span>
                          </p>
                        )}
                      </div>
                      
                      <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            onBlur={(e) => handleInputChange('email', e.target.value)}
                            required
                            className={`w-full bg-white border-2 rounded-xl px-4 py-3.5 pr-12 text-base text-slate-900 focus:outline-none focus:ring-2 transition-all placeholder-slate-400 ${
                              validation.email.isValid === true 
                                ? 'border-emerald-500 focus:border-emerald-500 focus:ring-emerald-500/20' 
                                : validation.email.isValid === false
                                ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
                                : 'border-sky-200 focus:border-sky-500 focus:ring-sky-500/20'
                            }`}
                            placeholder="jean.dupont@exemple.fr"
                          />
                          {validation.email.isValid === true && (
                            <CheckCircle className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-emerald-500" />
                          )}
                          {validation.email.isValid === false && (
                            <XCircle className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-red-500" />
                          )}
                        </div>
                        {validation.email.message && (
                          <p className="text-xs text-red-500 mt-2 flex items-center space-x-1">
                            <XCircle className="w-3 h-3" />
                            <span>{validation.email.message}</span>
                          </p>
                        )}
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">
                        Téléphone
                      </label>
                      <div className="relative">
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          onBlur={(e) => handleInputChange('phone', e.target.value)}
                          className={`w-full bg-white border-2 rounded-xl px-4 py-3.5 pr-12 text-base text-slate-900 focus:outline-none focus:ring-2 transition-all placeholder-slate-400 ${
                            validation.phone.isValid === true 
                              ? 'border-emerald-500 focus:border-emerald-500 focus:ring-emerald-500/20' 
                              : validation.phone.isValid === false
                              ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
                              : 'border-sky-200 focus:border-sky-500 focus:ring-sky-500/20'
                          }`}
                          placeholder="+33 1 72 54 13 60"
                        />
                        {validation.phone.isValid === true && (
                          <CheckCircle className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-emerald-500" />
                        )}
                        {validation.phone.isValid === false && (
                          <XCircle className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-red-500" />
                        )}
                      </div>
                      {validation.phone.message && (
                        <p className="text-xs text-red-500 mt-2 flex items-center space-x-1">
                          <XCircle className="w-3 h-3" />
                          <span>{validation.phone.message}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Section Projet */}
                  <div className="space-y-5 md:space-y-6">
                    <div className="flex items-center space-x-2 pb-3 border-b border-sky-200/50">
                      <div className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-orange-100 flex items-center justify-center flex-shrink-0">
                        <Calculator className="w-3.5 h-3.5 md:w-4 md:h-4 text-orange-600" />
                      </div>
                      <h3 className="text-base md:text-lg font-bold text-slate-900">Détails du Projet</h3>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                      <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">
                          Type de projet <span className="text-red-500">*</span>
                        </label>
                        <select
                          value={formData.projectType}
                          onChange={(e) => setFormData({...formData, projectType: e.target.value})}
                          required
                          className="w-full bg-white border-2 border-sky-200 rounded-xl px-4 py-3.5 text-base text-slate-900 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-all appearance-none cursor-pointer"
                        >
                          <option value="">Sélectionnez un type</option>
                          <option value="creation">Création nouvelle chambre froide</option>
                          <option value="renovation">Rénovation / Remplacement</option>
                          <option value="depannage">Dépannage / Urgence</option>
                          <option value="maintenance">Contrat de maintenance</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">
                          Type de froid <span className="text-red-500">*</span>
                        </label>
                        <select
                          value={formData.coldType}
                          onChange={(e) => setFormData({...formData, coldType: e.target.value})}
                          required
                          className="w-full bg-white border-2 border-sky-200 rounded-xl px-4 py-3.5 text-base text-slate-900 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-all appearance-none cursor-pointer"
                        >
                          <option value="">Sélectionnez un type</option>
                          <option value="positif">Froid Positif (+0°C à +10°C)</option>
                          <option value="negatif">Froid Négatif (-18°C à -25°C)</option>
                          <option value="combiné">Combiné (Positif + Négatif)</option>
                          <option value="indetermine">Je ne sais pas</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                      <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">
                          Dimensions approximatives
                        </label>
                        <input
                          type="text"
                          value={formData.dimensions}
                          onChange={(e) => setFormData({...formData, dimensions: e.target.value})}
                          className="w-full bg-white border-2 border-sky-200 rounded-xl px-4 py-3.5 text-base text-slate-900 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-all placeholder-slate-400"
                          placeholder="Ex: 3m x 2m x 2.5m ou 15m³"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">
                          Secteur d'activité
                        </label>
                        <select
                          value={formData.sector}
                          onChange={(e) => setFormData({...formData, sector: e.target.value})}
                          className="w-full bg-white border-2 border-sky-200 rounded-xl px-4 py-3.5 text-base text-slate-900 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-all appearance-none cursor-pointer"
                        >
                          <option value="">Sélectionnez un secteur</option>
                          <option value="restauration">Restauration</option>
                          <option value="commerce">Commerce</option>
                          <option value="industrie">Industrie / Logistique</option>
                          <option value="medical">Médical / Pharmaceutique</option>
                          <option value="autre">Autre</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Section Message */}
                  <div className="space-y-5 md:space-y-6">
                    <div className="flex items-center space-x-2 pb-3 border-b border-sky-200/50">
                      <div className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-sky-100 flex items-center justify-center flex-shrink-0">
                        <FileText className="w-3.5 h-3.5 md:w-4 md:h-4 text-sky-600" />
                      </div>
                      <h3 className="text-base md:text-lg font-bold text-slate-900">Message / Détails supplémentaires</h3>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">
                        Décrivez votre projet <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        required
                        rows={6}
                        className="w-full bg-white border-2 border-sky-200 rounded-xl px-4 py-3.5 text-base text-slate-900 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-all resize-none placeholder-slate-400"
                        placeholder="Décrivez votre projet en détail : contraintes particulières, délais souhaités, température précise, emplacement, etc. Plus vous êtes précis, plus notre devis sera adapté à vos besoins."
                      ></textarea>
                      <p className="text-xs text-slate-500 mt-2">
                        💡 Astuce : Plus vous êtes précis, plus notre devis sera adapté à vos besoins
                      </p>
                    </div>
                  </div>
                
                  {/* Bouton d'envoi */}
                  <div className="pt-4 md:pt-6">
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3.5 md:py-4 rounded-xl font-bold text-base md:text-lg transition-all shadow-lg hover:shadow-xl hover:shadow-orange-500/50 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center space-x-3 group"
                    >
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      <span>Envoyer la demande de devis</span>
                    </button>
                    <p className="text-xs text-center text-slate-500 mt-3">
                      En envoyant ce formulaire, vous acceptez d'être contacté par Unicold
                    </p>
                  </div>
                </form>

                {/* Statut de l'envoi - Version améliorée */}
                {status && (
                  <div className={`mt-8 p-6 rounded-2xl flex items-start space-x-4 shadow-lg ${
                    status.includes('✅') 
                      ? 'bg-gradient-to-br from-emerald-50 to-emerald-100/50 border-2 border-emerald-300 text-emerald-900' 
                      : 'bg-gradient-to-br from-red-50 to-red-100/50 border-2 border-red-300 text-red-900'
                  }`}>
                    <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${
                      status.includes('✅') ? 'bg-emerald-500' : 'bg-red-500'
                    }`}>
                      {status.includes('✅') ? (
                        <CheckCircle className="w-6 h-6 text-white" />
                      ) : (
                        <XCircle className="w-6 h-6 text-white" />
                      )}
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-lg mb-2">
                        {status.includes('✅') ? 'Demande envoyée avec succès !' : 'Erreur lors de l\'envoi'}
                      </p>
                      <p className="text-sm mb-3">{status}</p>
                      {status.includes('✅') && (
                        <div className="mt-4 p-4 rounded-xl bg-white/80 border border-emerald-200">
                          <p className="text-sm font-semibold text-emerald-900 mb-2">
                            ⏱️ Réponse garantie sous <strong className="text-emerald-600">2h</strong>
                          </p>
                          <p className="text-xs text-slate-700">
                            En cas d'urgence, appelez-nous directement :<br />
                            <a href="tel:+33172541360" className="font-bold text-emerald-600 hover:text-emerald-700 hover:underline">
                              +33 1 72 54 13 60
                            </a> (gratuit) ou{' '}
                            <a href="tel:+33662649421" className="font-bold text-emerald-600 hover:text-emerald-700 hover:underline">
                              +33 6 62 64 94 21
                            </a>
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}