import { Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';

export default function Contact() {
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
          <div className="glass-panel w-24 h-24 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Phone className="w-12 h-12 text-ice-400" />
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 text-white">
            Contactez-nous
          </h1>
          <p className="text-xl md:text-2xl text-ice-100/80 max-w-3xl mx-auto">
            Une question ? Besoin d'informations ? Notre équipe est à votre écoute.
          </p>
        </div>
      </section>

      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 mb-16">
            {/* Informations de contact */}
            <div className="glass-panel p-8 rounded-2xl">
              <h2 className="text-2xl font-display font-bold text-white mb-6">Informations de Contact</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-4 glass-card rounded-xl hover:bg-white/5 transition">
                  <div className="bg-ice-500/10 p-3 rounded-xl">
                    <Phone className="w-6 h-6 text-ice-400" />
                  </div>
                  <div>
                    <div className="font-semibold text-white mb-2">Téléphone</div>
                    <div className="space-y-2">
                      <div>
                        <a href="tel:+33172541360" className="text-ice-400 hover:text-ice-300 hover:underline transition block text-lg">
                          +33 1 72 54 13 60
                        </a>
                        <span className="text-xs text-emerald-400 font-semibold">(Numéro gratuit)</span>
                      </div>
                      <div>
                        <a href="tel:+33662649421" className="text-ice-400 hover:text-ice-300 hover:underline transition block text-lg">
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
                    <div className="font-semibold text-white mb-2">Email</div>
                    <div className="space-y-2">
                      <div>
                        <span className="text-xs text-ice-300/60 block mb-1">Pour les devis :</span>
                        <a href="mailto:devis@unicold.fr" className="text-ice-400 hover:text-ice-300 hover:underline transition block">devis@unicold.fr</a>
                      </div>
                      <div>
                        <span className="text-xs text-ice-300/60 block mb-1">Pour toute autre demande :</span>
                        <a href="mailto:contact@unicold.fr" className="text-ice-400 hover:text-ice-300 hover:underline transition block">contact@unicold.fr</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 glass-card rounded-xl hover:bg-white/5 transition">
                  <div className="bg-ice-500/10 p-3 rounded-xl">
                    <MapPin className="w-6 h-6 text-ice-400" />
                  </div>
                  <div>
                    <div className="font-semibold text-white mb-2">Siège Social</div>
                    <div className="text-ice-200/70">16 Rue Pascal, 78300 Poissy, France</div>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-white/10">
                <Link
                  to="/devis"
                  className="inline-flex items-center justify-center w-full bg-accent hover:bg-accent-hover text-white px-6 py-4 rounded-xl font-bold text-lg transition-all shadow-[0_0_25px_rgba(249,115,22,0.5)] hover:shadow-[0_0_35px_rgba(249,115,22,0.7)] hover:scale-105"
                >
                  Demander un devis
                </Link>
              </div>
            </div>

            {/* Horaires et disponibilité */}
            <div className="glass-panel p-8 rounded-2xl">
              <h2 className="text-2xl font-display font-bold text-white mb-6">Horaires & Disponibilité</h2>
              <div className="space-y-6">
                <div className="p-4 glass-card rounded-xl">
                  <h3 className="font-semibold text-white mb-2">Horaires d'ouverture</h3>
                  <div className="text-ice-200/70 space-y-1 text-sm">
                    <p>Lundi - Vendredi : 8h00 - 18h00</p>
                    <p>Samedi : 9h00 - 12h00</p>
                    <p>Dimanche : Fermé</p>
                  </div>
                </div>
                <div className="p-4 glass-card rounded-xl bg-red-500/10 border border-red-500/20">
                  <h3 className="font-semibold text-white mb-2">Dépannage 24/7</h3>
                  <p className="text-ice-200/70 text-sm mb-3">
                    Pour les urgences, notre service de dépannage est disponible 24h/24 et 7j/7.
                  </p>
                  <Link
                    to="/depannage"
                    className="text-red-400 hover:text-red-300 font-semibold text-sm transition"
                  >
                    En savoir plus →
                  </Link>
                </div>
                <div className="p-4 glass-card rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                  <h3 className="font-semibold text-white mb-2">Réponse rapide</h3>
                  <p className="text-ice-200/70 text-sm">
                    Nous nous engageons à vous répondre sous <strong className="text-emerald-300">2h</strong> pour toute demande.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Google Maps */}
          <div className="mt-16">
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
