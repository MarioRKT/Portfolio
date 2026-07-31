import img1 from "../../public/images/projet1.png";
import { ExternalLink, FolderCode } from "lucide-react";

function Projets() {
  return (
    <section className="relative py-20 px-4 bg-slate-950 text-white selection:bg-sky-500 selection:text-white overflow-hidden">
      
      {/* 1. Effet d'ambiance en arrière-plan */}
      <div className="absolute top-1/3 -left-32 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        
        {/* 2. En-tête */}
        <div className="text-center mb-16 space-y-3">
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-sky-400 uppercase">
            Réalisations Récentes
          </span>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white">
            Mes <span className="bg-gradient-to-r from-sky-400 via-indigo-400 to-cyan-300 bg-clip-text text-transparent">Projets</span>
          </h1>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            Découvre une sélection de mes travaux récents, allant des applications web interactives aux plateformes e-commerce.
          </p>
        </div>

        {/* 3. Conteneur principal des projets */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Projet Principal (À gauche - 7 colonnes sur desktop) */}
          <div className="lg:col-span-7" data-aos="fade-right">
            <div className="group relative backdrop-blur-xl bg-slate-900/60 border border-slate-800/80 rounded-3xl p-5 sm:p-6 transition-all duration-500 hover:border-sky-500/50 hover:shadow-2xl hover:shadow-sky-500/10">
              
              {/* Image avec Overlay & Zoom */}
              <div className="relative aspect-[16/10] sm:aspect-[4/3] rounded-2xl overflow-hidden bg-slate-800 border border-slate-700/50">
                <img
                  src={img1}
                  alt="Projet E-commerce"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-300" />
              </div>

              {/* Détails du Projet */}
              <div className="mt-6 space-y-3">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-white group-hover:text-sky-400 transition-colors">
                    E-Commerce Moderne
                  </h2>
                  <div className="p-2 rounded-xl bg-slate-800/80 text-slate-300 group-hover:bg-sky-500 group-hover:text-white transition-all">
                    <ExternalLink size={18} />
                  </div>
                </div>

                <p className="text-xs font-semibold tracking-wider text-slate-400 uppercase">
                  Site web d'un lounge bar responsive
                </p>

                {/* Badges Tech */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {["HTML", "CSS", "JavaScript", "Tailwind"].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium rounded-lg bg-slate-800/80 border border-slate-700/60 text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Colonne des Petits Projets (À droite - 5 colonnes sur desktop) */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            
            {/* Petit Projet 1 */}
            <div data-aos="fade-left">
              <div className="group relative backdrop-blur-xl bg-slate-900/60 border border-slate-800/80 rounded-3xl p-5 transition-all duration-500 hover:border-indigo-500/50 hover:shadow-xl hover:shadow-indigo-500/10">
                
                <div className="relative aspect-video sm:aspect-[16/9] rounded-2xl overflow-hidden bg-slate-800 border border-slate-700/50">
                  <img
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
                    alt="Dashboard"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-300" />
                </div>

                <div className="mt-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                      Dashboard Analytics
                    </h2>
                    <div className="p-2 rounded-xl bg-slate-800/80 text-slate-300 group-hover:bg-indigo-500 group-hover:text-white transition-all">
                      <FolderCode size={18} />
                    </div>
                  </div>

                  <p className="text-xs font-semibold tracking-wider text-slate-400 uppercase">
                    Application de visualisation de données
                  </p>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {["Laravel", "React.js", "Tailwind"].map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-[11px] font-medium rounded-lg bg-slate-800/80 border border-slate-700/60 text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>

            {/* Petit Projet 2 */}
            <div data-aos="fade-left">
              <div className="group relative backdrop-blur-xl bg-slate-900/60 border border-slate-800/80 rounded-3xl p-5 transition-all duration-500 hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/10">
                
                <div className="relative aspect-video sm:aspect-[16/9] rounded-2xl overflow-hidden bg-slate-800 border border-slate-700/50">
                  <img
                    src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80"
                    alt="Ba-Gasy Guitar"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-300" />
                </div>

                <div className="mt-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      Tuto Guitare Ba-Gasy
                    </h2>
                    <div className="p-2 rounded-xl bg-slate-800/80 text-slate-300 group-hover:bg-cyan-500 group-hover:text-white transition-all">
                      <ExternalLink size={18} />
                    </div>
                  </div>

                  <p className="text-xs font-semibold tracking-wider text-slate-400 uppercase">
                    Application interactive de tutoriel guitare
                  </p>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {["Laravel", "React.js", "Tailwind"].map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-[11px] font-medium rounded-lg bg-slate-800/80 border border-slate-700/60 text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Projets;
