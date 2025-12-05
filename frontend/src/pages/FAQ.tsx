import { ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    // Général
    {
      q: 'Quelle est la différence entre une chambre froide positive et négative ?',
      a: 'Une chambre froide positive maintient une température entre 0°C et +10°C, idéale pour la conservation des produits frais (fruits, légumes, produits laitiers). Une chambre froide négative descend entre -18°C et -25°C pour la congélation et la conservation longue durée (viandes, poissons, glaces).'
    },
    {
      q: 'Puis-je avoir une chambre froide positive et négative dans le même espace ?',
      a: 'Oui, nous proposons des solutions combinées avec des zones séparées à différentes températures. Cela permet d\'optimiser l\'espace tout en répondant à tous vos besoins de conservation.'
    },
    {
      q: 'Quels sont les secteurs d\'activité que vous servez ?',
      a: 'Nous servons principalement la restauration (restaurants, traiteurs, boulangeries), le commerce alimentaire (supermarchés, épiceries), l\'industrie agroalimentaire, la pharmacie, et tous les professionnels nécessitant un stockage réfrigéré.'
    },
    {
      q: 'Quelle est la durée de vie d\'une chambre froide ?',
      a: 'Avec un entretien régulier, une chambre froide professionnelle peut durer 15 à 20 ans. La durée de vie dépend de la qualité des matériaux, de l\'utilisation et de la maintenance effectuée.'
    },
    
    // Installation
    {
      q: 'Quels délais pour l\'installation ?',
      a: 'Le délai moyen est de 2 à 4 semaines entre la commande et l\'installation complète. Pour les projets sur-mesure complexes, le délai peut être de 4 à 8 semaines. Nous vous fournissons un planning détaillé lors de la commande.'
    },
    {
      q: 'Faut-il des travaux préparatoires avant l\'installation ?',
      a: 'Oui, il faut généralement préparer le sol (niveau, propre, solide), prévoir l\'alimentation électrique (220V ou 380V selon la puissance), et s\'assurer que l\'accès permet le passage des panneaux. Nous vous fournissons un cahier des charges détaillé.'
    },
    {
      q: 'Puis-je installer une chambre froide à l\'extérieur ?',
      a: 'Oui, nos chambres froides peuvent être installées à l\'extérieur. Elles sont conçues pour résister aux intempéries. Le groupe frigorifique doit être protégé ou placé dans un local technique.'
    },
    {
      q: 'Quelle surface au sol est nécessaire ?',
      a: 'Cela dépend de vos besoins. Nous proposons des chambres de 3m³ à plus de 100m³. Pour une petite chambre de 5m³, comptez environ 2,5m x 2m. Nos experts vous aident à dimensionner selon votre volume de stockage.'
    },
    {
      q: 'Combien de temps pour installer une chambre froide ?',
      a: 'Pour une chambre standard préfabriquée : 1 à 2 jours. Pour une chambre sur-mesure : 3 à 5 jours selon la complexité. Nous intervenons avec une équipe de 2 à 3 techniciens qualifiés pour minimiser les délais. L\'installation se fait généralement en horaires normaux, mais nous pouvons intervenir en horaires décalés si nécessaire (restaurants en activité).'
    },
    
    // Produits et équipements
    {
      q: 'Quelle épaisseur de panneaux choisir ?',
      a: 'Pour une chambre positive : 60-80mm suffisent. Pour une chambre négative : 100-120mm sont recommandés. Pour les très basses températures (-25°C), nous préconisons 120-150mm. Nos experts vous conseillent selon votre projet.'
    },
    {
      q: 'Quelle puissance de groupe frigorifique choisir ?',
      a: 'En règle générale : 100W par m³ pour le positif, 150W par m³ pour le négatif. Il faut aussi tenir compte de la fréquence d\'ouverture, de l\'isolation, et de la température extérieure. Nous calculons la puissance optimale pour chaque projet.'
    },
    {
      q: 'Les portes coulissantes ou battantes, que choisir ?',
      a: 'Les portes coulissantes économisent l\'espace et sont idéales pour les passages fréquents. Les portes battantes offrent une meilleure étanchéité et sont plus robustes. Le choix dépend de vos contraintes d\'espace et d\'utilisation.'
    },
    {
      q: 'Faut-il un éclairage spécial pour les chambres froides ?',
      a: 'Oui, les luminaires standards ne fonctionnent pas en milieu froid. Nos luminaires LED 65W sont spécialement conçus pour fonctionner de -30°C à +50°C et résistent à l\'humidité (IP65).'
    },
    {
      q: 'Puis-je ajouter des étagères ou aménagements intérieurs ?',
      a: 'Absolument ! Nous proposons des étagères métalliques, des rails de suspension, des crochets, et tous les aménagements nécessaires pour optimiser votre espace de stockage.'
    },
    
    // Maintenance et SAV
    {
      q: 'Quelle maintenance est nécessaire ?',
      a: 'Un entretien annuel est recommandé : nettoyage des condenseurs, vérification du niveau de fluide frigorigène, contrôle des joints de porte, test des sécurités. Nous proposons des contrats de maintenance préventive.'
    },
    {
      q: 'Que faire en cas de panne ?',
      a: 'Contactez-nous immédiatement au +33 1 72 54 13 60 (gratuit) ou +33 6 62 64 94 21. Nous intervenons sous 4h pour les urgences. Pour les clients avec contrat de maintenance, l\'intervention est prioritaire. Nous vous répondons sous 2h pour toute demande.'
    },
    {
      q: 'Y a-t-il une garantie sur les équipements ?',
      a: 'Oui, tous nos équipements bénéficient d\'une garantie constructeur de 2 ans pièces et main d\'œuvre. Les panneaux sont garantis 10 ans contre les défauts de fabrication.'
    },
    {
      q: 'Proposez-vous un service après-vente ?',
      a: 'Oui, nous avons un service SAV dédié avec des techniciens qualifiés. Nous intervenons sur toute la France pour la maintenance, les réparations et les dépannages d\'urgence.'
    },
    
    // Prix et Devis
    {
      q: 'Quel est le prix d\'une chambre froide ?',
      a: 'Le prix varie selon la taille, la température, et les équipements. Une petite chambre positive de 5m³ démarre autour de 3 500€ TTC. Une chambre négative de 10m³ coûte environ 6 000€ TTC. Demandez un devis gratuit personnalisé.'
    },
    {
      q: 'Le prix inclut-il l\'installation ?',
      a: 'Non, l\'installation est facturée séparément. Comptez environ 800€ à 1 500€ selon la complexité. Le devis détaille toujours le matériel et la main d\'œuvre séparément.'
    },
    {
      q: 'Proposez-vous des facilités de paiement ?',
      a: 'Oui, nous proposons des solutions de financement adaptées à votre situation. Renseignez-vous lors de votre demande de devis.'
    },
    {
      q: 'Les devis sont-ils gratuits ?',
      a: 'Oui, tous nos devis sont gratuits et sans engagement. Nous réalisons une étude personnalisée de votre projet et vous proposons la solution la plus adaptée.'
    },
    {
      q: 'Y a-t-il des frais cachés ?',
      a: 'Non, nos devis sont détaillés et transparents. Tous les coûts sont indiqués : matériel, transport, installation, mise en service. Aucun frais supplémentaire ne vous sera facturé sans votre accord préalable.'
    },
    
    // Technique
    {
      q: 'Quelle consommation électrique pour une chambre froide ?',
      a: 'Cela dépend de la taille et de la température. Une chambre positive de 10m³ consomme environ 2-3 kWh/jour. Une chambre négative de même taille consomme 4-6 kWh/jour. Nos équipements sont optimisés pour réduire la consommation.'
    },
    {
      q: 'Est-ce que le moteur fait du bruit (pour les voisins) ?',
      a: 'Nos groupes modernes sont relativement silencieux (45-55 dB, équivalent à un lave-vaisselle). Pour les installations sensibles au bruit (appartements, voisinage proche), nous proposons des groupes split avec compresseur extérieur ou des solutions d\'insonorisation. Nous pouvons aussi installer des groupes "silencieux" spécialement conçus pour les environnements résidentiels.'
    },
    {
      q: 'Quelle différence de consommation entre positif et négatif ?',
      a: 'Une chambre froide négative consomme environ 2 à 3 fois plus qu\'une chambre positive de même volume. Par exemple, une chambre positive de 10m³ consomme 2-3 kWh/jour, tandis qu\'une chambre négative de 10m³ consomme 5-7 kWh/jour. Nos équipements classe A+++ permettent de réduire cette consommation de 30% par rapport aux anciens modèles.'
    },
    {
      q: 'Quel fluide frigorigène utilisez-vous ?',
      a: 'Nous utilisons des fluides conformes aux normes européennes : R134a, R404A, R407C, et les nouveaux fluides écologiques R448A et R449A. Tous nos équipements respectent la réglementation F-Gas.'
    },
    {
      q: 'Une chambre froide nécessite-t-elle une ventilation ?',
      a: 'Non, les chambres froides sont étanches et ne nécessitent pas de ventilation extérieure. Le groupe frigorifique assure la circulation d\'air à l\'intérieur. Seul le groupe extérieur (si split) nécessite un espace aéré.'
    },
    {
      q: 'Puis-je régler la température moi-même ?',
      a: 'Oui, tous nos groupes sont équipés d\'un thermostat électronique avec affichage digital. Vous pouvez régler la température de consigne facilement. Une formation est incluse lors de l\'installation.'
    },
    
    // Réglementation
    {
      q: 'Y a-t-il des normes à respecter ?',
      a: 'Oui, les chambres froides doivent respecter les normes sanitaires (HACCP), les normes électriques (NF), et les normes environnementales (F-Gas). Tous nos équipements sont conformes et certifiés.'
    },
    {
      q: 'Faut-il une déclaration de travaux ?',
      a: 'Pour une chambre froide intérieure, généralement non. Pour une installation extérieure ou des travaux de gros œuvre, renseignez-vous en mairie. Nous vous conseillons selon votre situation.'
    },
    {
      q: 'Les chambres froides sont-elles conformes HACCP ?',
      a: 'Oui, nos chambres froides sont conçues pour répondre aux exigences HACCP : matériaux lisses et lavables, joints étanches, éclairage adapté, traçabilité des températures possible.'
    },
    
    // Utilisation
    {
      q: 'Combien de produits puis-je stocker ?',
      a: 'Cela dépend du type de produits et de leur conditionnement. En moyenne, comptez 300-400 kg par m³ pour des produits en cagettes. Nos experts vous aident à calculer selon vos produits.'
    },
    {
      q: 'Puis-je stocker différents types de produits ensemble ?',
      a: 'Il faut respecter les règles d\'hygiène alimentaire. Les produits crus et cuits doivent être séparés. Les produits avec odeurs fortes doivent être isolés. Nous vous conseillons sur l\'organisation optimale.'
    },
    {
      q: 'Combien de fois puis-je ouvrir la porte par jour ?',
      a: 'Il n\'y a pas de limite stricte, mais chaque ouverture fait perdre du froid. Pour un usage intensif (plus de 20 ouvertures/jour), nous dimensionnons le groupe en conséquence pour maintenir la température.'
    },
    {
      q: 'Que faire en cas de coupure de courant ?',
      a: 'Les chambres froides bien isolées maintiennent le froid plusieurs heures. Pour les longues coupures, évitez d\'ouvrir la porte. Nous proposons aussi des groupes avec batterie de secours ou générateur.'
    },
    
    // Autres
    {
      q: 'Livrez-vous partout en France ?',
      a: 'Oui, nous livrons et installons partout en France. Nous avons des équipes en Île-de-France et Centre-Val de Loire, et nous intervenons dans toute la France métropolitaine.'
    },
    {
      q: 'Proposez-vous la reprise d\'anciens équipements ?',
      a: 'Oui, nous proposons la reprise de vos anciens équipements lors de l\'achat d\'une nouvelle chambre froide. Le montant de la reprise est déduit du prix d\'achat.'
    },
    {
      q: 'Puis-je voir des réalisations avant d\'acheter ?',
      a: 'Oui, nous pouvons organiser des visites de nos réalisations avec l\'accord de nos clients. Consultez aussi notre page Réalisations pour voir des exemples de nos installations.'
    },
    {
      q: 'Proposez-vous des formations à l\'utilisation ?',
      a: 'Oui, une formation est incluse lors de l\'installation. Nous expliquons le fonctionnement, l\'entretien de base, et les bonnes pratiques pour optimiser la conservation et réduire la consommation.'
    },
  ];

  return (
    <div>
      <Breadcrumb items={[{ label: 'FAQ' }]} />
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
          <div className="glass-panel w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <HelpCircle className="w-10 h-10 text-ice-400" />
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-4 text-white">Questions Fréquentes</h1>
        </div>
      </section>

      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={idx} className="glass-panel rounded-lg overflow-hidden hover:bg-white/5 transition">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full px-8 py-5 text-left flex items-center justify-between hover:bg-white/5 transition"
                  >
                    <span className="font-bold text-white text-lg pr-4">{faq.q}</span>
                    <ChevronDown className={`w-6 h-6 text-ice-400 transition-transform flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-8 pb-6 animate-fade-in border-t border-white/5">
                      <p className="text-ice-200/80 leading-relaxed text-lg pt-4">{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-8">Vous ne trouvez pas la réponse ?</h2>
          <Link to="/contact" className="inline-flex items-center bg-gradient-to-r from-ice-600 to-blue-600 hover:from-ice-500 hover:to-blue-500 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all shadow-[0_0_20px_rgba(14,165,233,0.4)] hover:scale-105">
            Nous contacter
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}
