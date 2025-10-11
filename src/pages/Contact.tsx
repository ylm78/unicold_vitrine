import { Phone, Mail, MapPin, Send, CheckCircle2, AlertTriangle } from 'lucide-react';
import { useState, FormEvent, ChangeEvent } from 'react';

type FormData = {
  name: string;
  email: string;
  message: string;
  // Honeypot (champ caché pour piège à bots)
  website?: string;
};

type Feedback = { type: 'success' | 'error'; message: string } | null;


export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
    website: '', // honeypot
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [feedback, setFeedback] = useState<Feedback>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (data: FormData) => {
    const newErrors: Partial<FormData> = {};

    if (!data.name?.trim()) newErrors.name = 'Le nom est requis.';
    else if (data.name.trim().length < 2) newErrors.name = 'Le nom doit contenir au moins 2 caractères.';

    const email = data.email.trim();
    if (!email) newErrors.email = 'L’email est requis.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = 'Format d’email invalide.';

    if (!data.message?.trim()) newErrors.message = 'Le message est requis.';
    else if (data.message.trim().length < 10) newErrors.message = 'Le message doit contenir au moins 10 caractères.';
    else if (data.message.trim().length > 5000) newErrors.message = 'Le message est trop long.';

    // Honeypot : si renseigné, on bloque (probable bot)
    if (data.website && data.website.trim().length > 0) {
      newErrors.website = 'Bot détecté.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const onChange =
    (key: keyof FormData) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData((prev) => ({ ...prev, [key]: e.target.value }));
      // Efface l’erreur dès qu’on retape dans le champ
      if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
    };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setFeedback(null);

    if (!validate(formData)) return;

    setIsSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: formData.name.trim(),
    email: formData.email.trim(),
    message: formData.message.trim(),
  }),
});


      const data = await res.json().catch(() => ({}));
      if (res.ok && data?.success) {
        setFeedback({ type: 'success', message: data.message || 'Message envoyé avec succès ✅' });
        setFormData({ name: '', email: '', message: '', website: '' });
      } else {
        const msg =
          data?.message ||
          'Une erreur est survenue pendant l’envoi. Réessaie dans un instant ou contacte-nous par téléphone.';
        setFeedback({ type: 'error', message: msg });
      }
    } catch (err) {
      setFeedback({
        type: 'error',
        message: "Impossible de joindre le serveur d'envoi. Vérifie que le backend tourne bien.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <section className="bg-unicold-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Contactez-nous</h1>
          <p className="opacity-90">Une question, un devis, un projet — on vous répond rapidement.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
            {/* Colonne Infos */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Informations</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-unicold-blue-500" />
                  <div>
                    <div className="font-semibold text-gray-900">Téléphone</div>
                    <div className="text-gray-600">06 62 64 94 21</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-unicold-blue-500" />
                  <div>
                    <div className="font-semibold text-gray-900">Email</div>
                    <div className="text-gray-600">unicold.com@gmail.com</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-unicold-blue-500" />
                  <div>
                    <div className="font-semibold text-gray-900">Adresse</div>
                    <div className="text-gray-600">
                      16 rue Pascal 78300 Poissy
                      <br />
                      138 Les Berges de Seine 91830 Le Coudray-Montceaux
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Colonne Formulaire */}
            <div>
              {/* Feedback global */}
              {feedback && (
                <div
                  className={`mb-4 rounded-lg border p-4 flex items-start gap-3 ${
                    feedback.type === 'success'
                      ? 'border-green-200 bg-green-50 text-green-800'
                      : 'border-red-200 bg-red-50 text-red-800'
                  }`}
                  role="status"
                >
                  {feedback.type === 'success' ? (
                    <CheckCircle2 className="w-5 h-5 mt-0.5" />
                  ) : (
                    <AlertTriangle className="w-5 h-5 mt-0.5" />
                  )}
                  <div>{feedback.message}</div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                {/* Honeypot caché */}
                <div className="hidden">
                  <label>
                    Ne pas remplir ce champ :
                    <input
                      type="text"
                      name="website"
                      value={formData.website}
                      onChange={onChange('website')}
                      autoComplete="off"
                      tabIndex={-1}
                    />
                  </label>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="name">
                    Nom
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={onChange('name')}
                    required
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-unicold-blue-500 outline-none ${
                      errors.name ? 'border-red-400' : 'border-gray-300'
                    }`}
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-1 text-sm text-red-600">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={onChange('email')}
                    required
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-unicold-blue-500 outline-none ${
                      errors.email ? 'border-red-400' : 'border-gray-300'
                    }`}
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1 text-sm text-red-600">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={onChange('message')}
                    required
                    rows={4}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-unicold-blue-500 outline-none resize-none ${
                      errors.message ? 'border-red-400' : 'border-gray-300'
                    }`}
                  />
                  <div className="mt-1 flex justify-between text-xs text-gray-500">
                    <span>Minimum 10 caractères</span>
                    <span>{formData.message.length} / 5000</span>
                  </div>
                  {errors.message && (
                    <p id="message-error" className="mt-1 text-sm text-red-600">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full text-white py-3 rounded-lg font-semibold transition flex items-center justify-center space-x-2 ${
                    isSubmitting
                      ? 'bg-unicold-blue-300 cursor-not-allowed'
                      : 'bg-unicold-blue-500 hover:bg-unicold-blue-600'
                  }`}
                >
                  <Send className={`w-5 h-5 ${isSubmitting ? 'animate-pulse' : ''}`} />
                  <span>{isSubmitting ? 'Envoi en cours…' : 'Envoyer'}</span>
                </button>

                <p className="text-xs text-gray-500 text-center">
                  En envoyant ce formulaire, vous acceptez d’être recontacté par Unicold.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
