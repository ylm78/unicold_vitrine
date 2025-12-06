import { FileText, Building2, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function MentionsLegales() {
  return (
    <div>
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
          <div className="glass-panel w-24 h-24 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <FileText className="w-12 h-12 text-sky-500" />
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 text-slate-900">
            Mentions Légales
          </h1>
          <p className="text-xl md:text-2xl text-slate-600/80 max-w-3xl mx-auto">
            Informations légales et coordonnées de l'entreprise
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-12">
            {/* Informations légales */}
            <div className="glass-panel p-8 rounded-2xl">
              <h2 className="text-3xl font-display font-bold text-slate-900 mb-6 flex items-center">
                <Building2 className="w-8 h-8 text-sky-500 mr-3" />
                Informations Légales
              </h2>
              <div className="space-y-4 text-slate-600/80">
                <div>
                  <strong className="text-slate-900">Raison sociale :</strong> UNICOLD
                </div>
                <div>
                  <strong className="text-slate-900">SIRET :</strong> 881 522 296 00014
                </div>
                <div>
                  <strong className="text-slate-900">Forme juridique :</strong> Société (à compléter selon votre statut)
                </div>
                <div>
                  <strong className="text-slate-900">Siège social :</strong> 16 Rue Pascal, 78300 Poissy, France
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="glass-panel p-8 rounded-2xl">
              <h2 className="text-3xl font-display font-bold text-slate-900 mb-6 flex items-center">
                <Phone className="w-8 h-8 text-sky-500 mr-3" />
                Coordonnées
              </h2>
              <div className="space-y-4 text-slate-600/80">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-sky-500" />
                  <div>
                    <a href="tel:+33172541360" className="hover:text-slate-700 transition block">+33 1 72 54 13 60 <span className="text-emerald-400 text-xs">(Gratuit)</span></a>
                    <a href="tel:+33662649421" className="hover:text-slate-700 transition block mt-1">+33 6 62 64 94 21</a>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-sky-500" />
                  <div>
                    <a href="mailto:devis@unicold.fr" className="hover:text-slate-700 transition block text-sm">devis@unicold.fr</a>
                    <a href="mailto:contact@unicold.fr" className="hover:text-slate-700 transition block text-sm mt-1">contact@unicold.fr</a>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-sky-500" />
                  <span>16 Rue Pascal, 78300 Poissy, France</span>
                </div>
              </div>
            </div>

            {/* Hébergement */}
            <div className="glass-panel p-8 rounded-2xl">
              <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">
                Hébergement du Site
              </h2>
              <div className="space-y-4 text-slate-600/80">
                <p>
                  Ce site est hébergé par OVHcloud :
                </p>
                <div>
                  <strong className="text-slate-900">Hébergeur :</strong> OVHcloud
                </div>
                <div>
                  <strong className="text-slate-900">Adresse :</strong> 2 rue Kellermann, 59100 Roubaix, France
                </div>
              </div>
            </div>

            {/* Propriété intellectuelle */}
            <div className="glass-panel p-8 rounded-2xl">
              <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">
                Propriété Intellectuelle
              </h2>
              <p className="text-slate-600/80 leading-relaxed">
                L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur 
                et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les 
                documents téléchargeables et les représentations iconographiques et photographiques.
              </p>
            </div>

            {/* Protection des données */}
            <div className="glass-panel p-8 rounded-2xl">
              <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">
                Protection des Données Personnelles
              </h2>
              <p className="text-slate-600/80 leading-relaxed mb-4">
                Conformément à la loi « Informatique et Libertés » du 6 janvier 1978 modifiée et au Règlement 
                Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification, 
                de suppression et d'opposition aux données personnelles vous concernant.
              </p>
              <p className="text-slate-600/80 leading-relaxed">
                Pour exercer ces droits, vous pouvez nous contacter à l'adresse :{' '}
                <a href="mailto:contact@unicold.fr" className="text-sky-500 hover:text-slate-700 transition">contact@unicold.fr</a>
              </p>
            </div>

            {/* Responsabilité */}
            <div className="glass-panel p-8 rounded-2xl">
              <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">
                Limitation de Responsabilité
              </h2>
              <p className="text-slate-600/80 leading-relaxed">
                UNICOLD ne pourra être tenu responsable des dommages directs et indirects causés au matériel de 
                l'utilisateur, lors de l'accès au site, et résultant soit de l'utilisation d'un matériel ne répondant 
                pas aux spécifications, soit de l'apparition d'un bug ou d'une incompatibilité.
              </p>
            </div>

            {/* Retour accueil */}
            <div className="text-center pt-8">
              <Link
                to="/"
                className="inline-flex items-center text-sky-500 hover:text-slate-700 transition"
              >
                ← Retour à l'accueil
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

