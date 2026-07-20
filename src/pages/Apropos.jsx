import { Download } from "lucide-react";
import img from "../../public/images/photo_CV.jpeg";

function Apropos() {
  return (
    <>
      {/* Changement de flex-row à flex-col sur mobile, et retrait des hauteurs fixes md:h-[80%] */}
      <div className="flex flex-col md:flex-row justify-center items-center py-12 px-6 gap-10 md:gap-0">
        
        {/* Conteneur Image : Centré sur mobile, aligné à droite sur desktop */}
        <div className="w-full md:w-[45%] lg:w-[40%] flex justify-center md:justify-end md:pr-10" >
          <div data-aos="flip-down" className="w-64 h-80 md:w-80 md:h-112.5 lg:w-100 lg:h-150" >
            <img
              src={img}
              alt="pdp"
              className="w-full h-full object-cover rounded-2xl shadow-xl"
            />
          </div>
        </div>

        {/* Conteneur Texte : Centré sur mobile, aligné à gauche sur desktop */}
        <div className="w-full md:w-[55%] lg:w-[40%] md:pl-10 flex items-center">
          <div className="text-center md:text-left">
            <p className="text-xs text-sky-400 mb-4 md:mb-8 font-bold tracking-widest">A PROPOS</p>
            
            <h1 className="text-3xl md:text-5xl mb-6 md:mb-8 leading-tight">
              Passionné par <br className="hidden md:block" />
              <span className="italic text-sky-500 font-normal"> le code propre</span>
            </h1>
            
            <p className="text-gray-600 mb-8 max-w-md mx-auto md:mx-0 text-sm md:text-base leading-relaxed">
              Développeur web full-stack junior, je me spécialise dans la
              conception d’applications web modernes et performantes. Chaque
              ligne de code est une opportunité d'apprendre et de créer quelque
              chose de nouveau.
            </p>

            {/* Bouton/Lien CV : Centré sur mobile */}
            <a 
              href="/path-to-your-cv.pdf" 
              download
              className="inline-flex items-center justify-center md:justify-start gap-4 text-xs font-bold hover:text-sky-500 transition-colors cursor-pointer group"
            >
              TELECHARGER MON CV
              <span className="text-sky-400 group-hover:translate-y-1 transition-transform">
                <Download size={18} />
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Apropos;