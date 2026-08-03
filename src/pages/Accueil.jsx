import pdp from '../../public/images/photo_CV.jpeg';

function Accueil() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-slate-950 text-white selection:bg-sky-500 selection:text-white py-20 px-6 sm:px-12">
      
      {/* 1. Arrière-plan dynamique plein écran */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-overlay pointer-events-none"
        style={{ backgroundImage: "url('/images/accueil.jpg')" }}
      />
      
      {/* Effets de lumière néon en tâche de fond (Orbs XXL) */}
      <div className="absolute top-1/4 left-10 md:left-1/4 w-[500px] h-[500px] bg-sky-500/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 md:right-1/4 w-[500px] h-[500px] bg-indigo-500/15 rounded-full blur-[120px] pointer-events-none" />

      {/* Grid de fond discrète pour le style futuriste */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* 2. Contenu directement étalé sur la page */}
      <div className="relative z-10 container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          
          {/* 3. Colonne Texte & Présentation */}
          <div className="w-full lg:w-7/12 text-center lg:text-left space-y-8 order-2 lg:order-1">
            
            {/* Badge Status */}
            <div className="inline-flex items-center gap-2.5 backdrop-blur-md bg-slate-900/80 border border-slate-800 px-4 py-1.5 rounded-full shadow-lg">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-xs font-medium text-slate-300">Disponible pour de nouveaux projets</span>
            </div>

            {/* Titre & Sous-titre */}
            <div className="space-y-3">
              <h1 className="text-5xl sm:text-7xl font-black tracking-tight text-white leading-none">
                Mario <br className="hidden sm:block" />
                <span className="bg-gradient-to-r from-sky-400 via-indigo-400 to-cyan-300 bg-clip-text text-transparent">
                  Rakoto
                </span>
              </h1>
              <h2 className="text-xl sm:text-2xl font-semibold text-slate-400">
                Développeur Web Full-Stack
              </h2>
            </div>

            {/* Description */}
            <p className="text-slate-300 leading-relaxed text-base sm:text-lg max-w-xl mx-auto lg:mx-0">
              Spécialisé en <span className="text-white font-semibold">PHP</span>, <span className="text-white font-semibold">Laravel</span> et <span className="text-white font-semibold">React</span>. Je conçois et développe des applications web modernes, performantes et axées sur l'expérience utilisateur.
            </p>

            {/* Tags des technologies */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2.5">
              {['React.js', 'Laravel', 'PHP', 'Tailwind CSS'].map((tech) => (
                <span 
                  key={tech} 
                  className="px-3.5 py-1.5 text-xs font-medium rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 backdrop-blur-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Boutons d'action (CTA) */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#projets"
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-sm bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white shadow-lg shadow-sky-500/25 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] text-center"
              >
                Découvrir mes projets
              </a>
              
              <a
                href="#contact"
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-sm bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-slate-200 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] text-center"
              >
                Me contacter
              </a>
            </div>

          </div>

          {/* 4. Colonne Photo de profil (Mise en avant sur la page) */}
          <div className="w-full lg:w-5/12 flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative group">
              
              {/* Effet d'éclat lumineux d'arrière-plan */}
              <div className="absolute -inset-1 bg-gradient-to-r from-sky-500 to-indigo-500 rounded-3xl blur-xl opacity-40 group-hover:opacity-80 transition duration-700" />
              
              {/* Photo avec cadre élégant */}
              <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl">
                <img
                  src={pdp}
                  alt="Mario Rakoto"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
              </div>

            </div>
          </div>

        </div>
      </div>

    </section>
  );
}

export default Accueil;
