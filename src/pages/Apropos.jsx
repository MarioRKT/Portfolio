import { Download, Sparkles, Code2, Rocket } from "lucide-react";
import img from "../../public/images/photo_CV.jpeg";

function Apropos() {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 px-4 bg-slate-950 text-white selection:bg-sky-500 selection:text-white overflow-hidden">
      
      {/* 1. Effets d'ambiance en arrière-plan */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-sky-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none" />

      {/* 2. Conteneur principal Glassmorphism */}
      <div className="relative z-10 container mx-auto max-w-5xl">
        <div className="backdrop-blur-xl bg-slate-900/60 border border-slate-800/80 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl shadow-sky-950/20">
          
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            
            {/* 3. Photo de profil avec carte visuelle & effets */}
            <div className="w-full lg:w-5/12 flex justify-center" data-aos="flip-down">
              <div className="relative group w-64 sm:w-72 lg:w-80 aspect-[3/4]">
                
                {/* Lueur d'arrière-plan au survol */}
                <div className="absolute -inset-1 bg-gradient-to-r from-sky-500 to-indigo-500 rounded-3xl blur opacity-30 group-hover:opacity-100 transition duration-500" />
                
                {/* Image principale */}
                <div className="relative w-full h-full rounded-2xl overflow-hidden border border-slate-700/60 shadow-2xl">
                  <img
                    src={img}
                    alt="Mario Rakoto"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60" />
                </div>

                {/* Badge décoratif flottant en bas de l'image */}
                <div className="absolute -bottom-4 right-4 backdrop-blur-md bg-slate-900/90 border border-slate-700/80 px-4 py-2 rounded-xl flex items-center gap-2 shadow-lg">
                  <Sparkles size={16} className="text-sky-400 animate-pulse" />
                  <span className="text-xs font-semibold text-slate-200">Full-Stack Dev</span>
                </div>
              </div>
            </div>

            {/* 4. Contenu Texte & Présentation */}
            <div className="w-full lg:w-7/12 text-center lg:text-left space-y-6">
              
              {/* Sur-titre & Titre */}
              <div className="space-y-3">
                <span className="text-xs sm:text-sm font-semibold tracking-wider text-sky-400 uppercase">
                  À Propos
                </span>
                <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
                  Passionné par <br />
                  <span className="bg-gradient-to-r from-sky-400 via-indigo-400 to-cyan-300 bg-clip-text text-transparent">
                    le code propre
                  </span>
                </h1>
              </div>

              {/* Bio & Paragraphe */}
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0">
                Développeur web full-stack junior, je me spécialise dans la conception d’applications web modernes, réactives et performantes. Pour moi, chaque projet est une opportunité d'appliquer les meilleures pratiques et de transformer des idées en solutions concrètes.
              </p>

              {/* Petits atouts en grille */}
              <div className="grid grid-cols-2 gap-3 pt-2 max-w-md mx-auto lg:mx-0 text-left">
                <div className="p-3 rounded-xl bg-slate-800/40 border border-slate-800 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-sky-500/10 text-sky-400">
                    <Code2 size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-200">Architecture</p>
                    <p className="text-[11px] text-slate-400">Propre & Modulaire</p>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-800/40 border border-slate-800 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
                    <Rocket size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-200">Performance</p>
                    <p className="text-[11px] text-slate-400">Optimisée UI/UX</p>
                  </div>
                </div>
              </div>

              {/* Action : Téléchargement CV */}
              <div className="pt-4 flex justify-center lg:justify-start">
                <a
                  href="/path-to-your-cv.pdf"
                  download
                  className="group relative inline-flex items-center gap-3 px-8 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white shadow-lg shadow-sky-500/20 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>Télécharger mon CV</span>
                  <Download size={18} className="group-hover:translate-y-0.5 transition-transform duration-300" />
                </a>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Apropos;
