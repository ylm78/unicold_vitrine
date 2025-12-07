import { Trash2, Mail, AlertCircle, CheckCircle, FileText } from 'lucide-react';
import { useState, FormEvent } from 'react';
import emailjs from 'emailjs-com';

export default function SuppressionDonnees() {
  const [formData, setFormData] = useState({
    email: '',
    requestId: '',
    reason: ''
  });
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('Traitement de votre demande en cours...');

    const serviceID = 'service_ugehbqe'; // Service pour contact@unicold.fr
    const templateID = 'template_u2iy10q';
    const publicKey = 'Q_4KZL1s7zXDPGjMz';

    const message = `🗑️ DEMANDE DE SUPPRESSION DE DONNÉES PERSONNELLES

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📧 EMAIL DU DEMANDEUR
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${formData.email}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🆔 ID DE DEMANDE (si connu)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${formData.requestId || 'Non renseigné'}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
💬 RAISON DE LA DEMANDE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${formData.reason || 'Non renseignée'}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📅 DATE DE LA DEMANDE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${new Date().toLocaleString('fr-FR')}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⚠️ ACTION REQUISE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. Vérifier l'identité du demandeur
2. Supprimer toutes les données associées à cet email
3. Confirmer la suppression par email au demandeur
4. Archiver la demande de suppression (conformité RGPD)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`;

    emailjs
      .send(
        serviceID,
        templateID,
        {
          to_email: 'contact@unicold.fr',
          from_email: formData.email,
          subject: `[RGPD] Demande de suppression de données - ${formData.email}`,
          message: message,
        },
        publicKey
      )
      .then(() => {
        setStatus('✅ Votre demande de suppression a été envoyée avec succès. Nous traiterons votre demande dans les plus brefs délais (sous 30 jours conformément au RGPD). Vous recevrez une confirmation par email une fois la suppression effectuée.');
        setFormData({
          email: '',
          requestId: '',
          reason: ''
        });
        setIsSubmitting(false);
      })
      .catch((error) => {
        console.error('Erreur:', error);
        setStatus('❌ Une erreur est survenue. Veuillez nous contacter directement à contact@unicold.fr ou au +33 1 72 54 13 60 (gratuit).');
        setIsSubmitting(false);
      });
  };

  return (
    <div>
      <section className="relative pt-20 md:pt-24 pb-16 md:pb-20 bg-white overflow-hidden border-b border-sky-500/10">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-sky-400 to-transparent"></div>
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-sky-400/50 to-transparent"></div>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-sky-300/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-ice-400/5 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <div className="w-20 h-20 rounded-2xl bg-red-500/20 flex items-center justify-center mx-auto mb-6">
            <Trash2 className="w-10 h-10 text-red-500" />
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-3 md:mb-4 text-slate-900">
            Suppression de Mes Données
          </h1>
          <p className="text-base md:text-lg text-slate-600/80 max-w-2xl mx-auto">
            Conformément au RGPD, vous avez le droit de demander la suppression de vos données personnelles
          </p>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white to-sky-50/30">
        <div className="max-w-3xl mx-auto px-4">
          <div className="glass-panel p-8 md:p-10 rounded-3xl shadow-xl border border-sky-200/50">
            {/* Information RGPD */}
            <div className="mb-8 p-6 rounded-2xl bg-blue-50 border border-blue-200">
              <div className="flex items-start space-x-3">
                <FileText className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">Vos Droits RGPD</h3>
                  <p className="text-sm text-slate-700 mb-3">
                    Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :
                  </p>
                  <ul className="text-sm text-slate-700 space-y-2 list-disc list-inside">
                    <li>Droit d'accès à vos données</li>
                    <li>Droit de rectification</li>
                    <li>Droit à l'effacement (suppression)</li>
                    <li>Droit d'opposition au traitement</li>
                    <li>Droit à la portabilité des données</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Formulaire */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  Votre Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                  className="w-full bg-white border-2 border-sky-200 rounded-xl px-4 py-3.5 text-base text-slate-900 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-all placeholder-slate-400"
                  placeholder="votre@email.com"
                />
                <p className="text-xs text-slate-500 mt-2">
                  L'email utilisé lors de votre demande de visite ou de devis
                </p>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  Numéro de Suivi (Optionnel)
                </label>
                <input
                  type="text"
                  value={formData.requestId}
                  onChange={(e) => setFormData({...formData, requestId: e.target.value})}
                  className="w-full bg-white border-2 border-sky-200 rounded-xl px-4 py-3.5 text-base text-slate-900 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-all placeholder-slate-400"
                  placeholder="SHOW-XXXXXXXXX (si vous l'avez reçu)"
                />
                <p className="text-xs text-slate-500 mt-2">
                  Si vous avez reçu un numéro de suivi lors de votre demande, vous pouvez l'indiquer ici pour accélérer le traitement
                </p>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  Raison de la Demande (Optionnel)
                </label>
                <textarea
                  rows={4}
                  value={formData.reason}
                  onChange={(e) => setFormData({...formData, reason: e.target.value})}
                  className="w-full bg-white border-2 border-sky-200 rounded-xl px-4 py-3.5 text-base text-slate-900 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-all resize-none placeholder-slate-400"
                  placeholder="Vous pouvez préciser la raison de votre demande (optionnel)"
                ></textarea>
              </div>

              {/* Avertissement */}
              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200">
                <div className="flex items-start space-x-3">
                  <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-slate-700">
                    <p className="font-semibold text-amber-900 mb-1">Important :</p>
                    <p>
                      La suppression de vos données est définitive. Une fois supprimées, nous ne pourrons plus vous recontacter concernant votre demande. 
                      Le traitement de votre demande sera effectué dans un délai maximum de 30 jours conformément au RGPD.
                    </p>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:shadow-red-500/50 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center space-x-3 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Trash2 className="w-5 h-5" />
                <span>{isSubmitting ? 'Envoi en cours...' : 'Demander la Suppression de Mes Données'}</span>
              </button>
            </form>

            {/* Statut */}
            {status && (
              <div className={`mt-8 p-6 rounded-2xl flex items-start space-x-4 shadow-lg ${
                status.includes('✅') 
                  ? 'bg-gradient-to-br from-emerald-50 to-emerald-100/50 border-2 border-emerald-300 text-emerald-900' 
                  : status.includes('❌')
                  ? 'bg-gradient-to-br from-red-50 to-red-100/50 border-2 border-red-300 text-red-900'
                  : 'bg-gradient-to-br from-blue-50 to-blue-100/50 border-2 border-blue-300 text-blue-900'
              }`}>
                <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${
                  status.includes('✅') ? 'bg-emerald-500' : status.includes('❌') ? 'bg-red-500' : 'bg-blue-500'
                }`}>
                  {status.includes('✅') ? (
                    <CheckCircle className="w-6 h-6 text-white" />
                  ) : status.includes('❌') ? (
                    <AlertCircle className="w-6 h-6 text-white" />
                  ) : (
                    <FileText className="w-6 h-6 text-white" />
                  )}
                </div>
                <div className="flex-1">
                  <p className="font-bold text-lg mb-2">
                    {status.includes('✅') ? 'Demande envoyée avec succès !' : status.includes('❌') ? 'Erreur' : 'Traitement en cours'}
                  </p>
                  <p className="text-sm whitespace-pre-line">{status}</p>
                </div>
              </div>
            )}

            {/* Contact alternatif */}
            <div className="mt-8 pt-6 border-t border-sky-200">
              <p className="text-sm text-slate-600 text-center mb-4">
                Vous préférez nous contacter directement ?
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="mailto:contact@unicold.fr"
                  className="flex-1 flex items-center justify-center space-x-2 px-6 py-3 bg-sky-100 hover:bg-sky-200 text-sky-700 rounded-xl font-semibold transition-all"
                >
                  <Mail className="w-5 h-5" />
                  <span>contact@unicold.fr</span>
                </a>
                <a
                  href="tel:+33172541360"
                  className="flex-1 flex items-center justify-center space-x-2 px-6 py-3 bg-sky-100 hover:bg-sky-200 text-sky-700 rounded-xl font-semibold transition-all"
                >
                  <Mail className="w-5 h-5" />
                  <span>+33 1 72 54 13 60</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

