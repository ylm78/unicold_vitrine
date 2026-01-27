import sncfLogo from '../assets/logo/sncf.png';
import nashLogo from '../assets/logo/nash.png';
import berlinerLogo from '../assets/logo/berliner.png';
import meydanLogo from '../assets/logo/meydan.png';
import afolelogo from '../assets/logo/a-fole.jpg';
import subwaylogo from '../assets/logo/Logo-subway.png';
import dominoslogo from '../assets/logo/Dominos_logo.png';
import totallogo from '../assets/logo/Logo-total.png';

export default function LogosMarquee() {
  // On crée une structure propre : Image + Texte SEO
  const clientsData = [
    { src: sncfLogo, alt: "Maintenance climatisation et froid SNCF" },
    { src: subwaylogo, alt: "Installation chambre froide Subway" },
    { src: berlinerLogo, alt: "Maintenance frigorifique Berliner Das Original" },
    { src: totallogo, alt: "Équipement froid station service Total" },
    { src: dominoslogo, alt: "Chambre froide pizzeria Domino's Pizza" },
    { src: nashLogo, alt: "Installation frigorifique restaurant Nash" },
    { src: meydanLogo, alt: "Solution froid restaurant Meydan" },
    { src: afolelogo, alt: "Matériel frigorifique A Folé" },
  ];

  return (
    <div className="relative overflow-hidden py-6 md:py-8">
      <div className="overflow-hidden">
        {/* wrapper animé */}
        <div className="flex items-center animate-marquee-infinite">
          
          {/* PREMIÈRE BOUCLE */}
          <div className="inline-flex items-center flex-nowrap min-w-[max-content] gap-12 md:gap-16 lg:gap-20">
            {clientsData.map((client, idx) => (
              <div key={`first-${idx}`} className="flex-shrink-0 w-32 h-32 md:w-40 md:h-40">
                <div className="bg-white p-4 md:p-6 rounded-2xl border border-slate-200 transition-all shadow-md w-full h-full flex items-center justify-center overflow-hidden">
                  <img
                    src={client.src}
                    alt={client.alt} // <--- C'est ici que la magie opère pour Google
                    title={client.alt} // Bonus : affiche le texte au survol de la souris
                    className="max-w-[85%] max-h-[85%] w-auto h-auto object-contain transition-all duration-300"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* DEUXIÈME BOUCLE (Duplication pour l'effet infini) */}
          <div className="inline-flex items-center flex-nowrap min-w-[max-content] gap-12 md:gap-16 lg:gap-20">
            {clientsData.map((client, idx) => (
              <div key={`second-${idx}`} className="flex-shrink-0 w-32 h-32 md:w-40 md:h-40">
                <div className="bg-white p-4 md:p-6 rounded-2xl border border-slate-200 transition-all shadow-md w-full h-full flex items-center justify-center overflow-hidden">
                  <img
                    src={client.src}
                    alt={client.alt}
                    title={client.alt}
                    className="max-w-[85%] max-h-[85%] w-auto h-auto object-contain transition-all duration-300"
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
  );
}