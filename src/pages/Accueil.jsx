import pdp from '../../public/images/photo_CV.jpeg';

function Accueil() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 text-white selection:bg-sky-500 selection:text-white">
      {/* 1. Arrière-plan dynamique avec effets d'ambiance */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-overlay"
        style={{ backgroundImage: "url('/images/accueil.jpg')" }}
      />
      
      {/* Cercles de lumière floutés (Orbs) pour un effet néon/futuriste */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-sky-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />

      {/* 2. Carte principale (Glassmorphism moderne) */}
      <div className="relative z-10 container mx-auto px-6 py-12 max-w-5xl">
        <div className="backdrop-blur-xl bg-slate-900/60 border border-slate-800/80 rounded-3xl p-8 sm:p-12 shadow-2xl shadow-sky-950/20">
          
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
            
            {/* 3. Photo de profil avec cadre lumineux */}
            <div className="relative group shrink-0">
              {/* Effet d'éclat au survol */}
              <div className="absolute -inset-1 bg-gradient-to-r from-sky-500 to-indigo-500 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-500" />
              
              <img
                src={pdp}
                alt="Mario Rakoto"
                className="relative w-48 h-48 sm:w-60 sm:h-60 object-cover rounded-2xl shadow-xl border border-slate-700/50"
              />
              
              {/* Badge d'état (Disponible) */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 backdrop-blur-md bg-slate-900/90 border border-slate-700 px-3 py-1 rounded-full flex items-center gap-2 whitespace-nowrap">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </span>
                <span className="text-xs font-medium text-slate-300">Disponible pour des projets</span>
              </div>
            </div>

            {/* 4. Contenu texte & présentation */}
            <div className="text-center lg:text-left space-y-6">
              
              {/* Entête & Titre */}
              <div className="space-y-2">
                <span className="text-xs sm:text-sm font-semibold tracking-wider text-sky-400 uppercase">
                  Portfolio 👋
                </span>
                <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white">
                  Mario <span className="bg-gradient-to-r from-sky-400 via-indigo-400 to-cyan-300 bg-clip-text text-transparent">Rakoto</span>
                </h1>
                <h2 className="text-lg sm:text-xl font-medium text-slate-400">
                  Développeur Web Full-Stack
                </h2>
              </div>

              {/* Bio & Spécialités */}
              <p className="text-slate-300 leading-relaxed text-base sm:text-lg max-w-xl">
                Spécialisé en <span className="text-white font-semibold">PHP</span>, <span className="text-white font-semibold">Laravel</span> et <span className="text-white font-semibold">React</span>. Je conçois et développe des applications web modernes, performantes et axées sur l'expérience utilisateur.
              </p>

              {/* Tags des stacks */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-2 pt-1">
                {['React.js', 'Laravel', 'PHP', 'Tailwind CSS'].map((tech) => (
                  <span key={tech} className="px-3 py-1 text-xs font-medium rounded-md bg-slate-800/80 border border-slate-700/60 text-slate-300">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Call to Action */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a
                  href="#projets"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white shadow-lg shadow-sky-500/25 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] text-center"
                >
                  Découvrir mes projets
                </a>
                
                <a
                  href="#contact"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-sm bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-slate-200 transition-all duration-300 hover:scale-[1.02] text-center"
                >
                  Me contacter
                </a>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Accueil;
