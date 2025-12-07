import sncfLogo from '../assets/logo/sncf.png';
import nashLogo from '../assets/logo/nash.png';
import berlinerLogo from '../assets/logo/berliner.png';
import meydanLogo from '../assets/logo/meydan.png';
import afolelogo from '../assets/logo/a-fole.jpg';
import subwaylogo from '../assets/logo/Logo-subway.png';
import dominoslogo from '../assets/logo/Dominos_logo.png';
import totallogo from '../assets/logo/Logo-total.png';

export default function LogosMarquee({ logos = [sncfLogo, nashLogo, berlinerLogo, meydanLogo, afolelogo, subwaylogo, dominoslogo, totallogo] }) {
  return (
    <div className="relative overflow-hidden py-6 md:py-8">
      <div className="overflow-hidden">
        {/* wrapper animé — on duplique la rangée à l'intérieur */}
        <div className="flex items-center animate-marquee-infinite">
          {/* ligne qui contient les logos ; min-w-[max-content] empêche l'élément de se contracter */}
          <div className="inline-flex items-center flex-nowrap min-w-[max-content] gap-12 md:gap-16 lg:gap-20">
            {logos.map((logo, idx) => (
              <div key={`first-${idx}`} className="flex-shrink-0 w-32 h-32 md:w-40 md:h-40">
                <div className="bg-white p-4 md:p-6 rounded-2xl border border-slate-200 transition-all shadow-md w-full h-full flex items-center justify-center overflow-hidden">
                  <img
                    src={logo}
                    alt={`Client ${idx + 1}`}
                    className="max-w-[85%] max-h-[85%] w-auto h-auto object-contain transition-all duration-300"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            ))}
          </div>
          {/* duplication — identique à la première pour créer le loop sans trou */}
          <div className="inline-flex items-center flex-nowrap min-w-[max-content] gap-12 md:gap-16 lg:gap-20">
            {logos.map((logo, idx) => (
              <div key={`second-${idx}`} className="flex-shrink-0 w-32 h-32 md:w-40 md:h-40">
                <div className="bg-white p-4 md:p-6 rounded-2xl border border-slate-200 transition-all shadow-md w-full h-full flex items-center justify-center overflow-hidden">
                  <img
                    src={logo}
                    alt={`Client ${idx + 1}`}
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

