import pdp from '../../public/images/pdp.png';

function Accueil() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center bg-[#F5EBDD] text-[#413333] selection:bg-[#F2765E] selection:text-[#F5EBDD] py-20 px-6 sm:px-12 overflow-hidden">
      
      {/* Texture & Grille discrète de fond style IDE / Code (Pas de dégradé) */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#315B8C 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      <div className="relative z-10 container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          
          {/* Colonne Texte & Présentation */}
          <div className="w-full lg:w-7/12 text-center lg:text-left space-y-8 order-2 lg:order-1">
            
            {/* Badge Status - Pro & Minimaliste */}
            <div 
              data-aos="fade-down"
              data-aos-duration="800"
              className="inline-flex items-center gap-2.5 bg-white/60 border border-[#315B8C]/20 px-4 py-2 rounded-full shadow-sm"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F2765E] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#F2765E]" />
              </span>
              <span className="text-xs font-semibold tracking-wide text-[#315B8C]">
                Disponible pour de nouveaux projets
              </span>
            </div>

            {/* Titre & Sous-titre */}
            <div className="space-y-3">
              <h1 
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="100"
                className="text-5xl sm:text-7xl font-black tracking-tight leading-none"
              >
                <span className="text-[#F2765E] block sm:inline">Mario </span>
                <span className="text-[#315B8C]">Rakoto</span>
              </h1>
              
              {/* Promo dev: Tag style code */}
              <div 
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="200"
                className="inline-block"
              >
                <h2 className="text-xl sm:text-2xl font-mono font-bold text-[#413333] tracking-tight bg-[#315B8C]/10 px-3 py-1 rounded-md border-l-4 border-[#F2765E]">
                  &lt;Développeur Web Full-Stack /&gt;
                </h2>
              </div>
            </div>

            {/* Description (Utilisation de p1: #315B8C et accents en #F2765E) */}
            <p 
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="300"
              className="text-[#315B8C] leading-relaxed text-base sm:text-lg max-w-xl mx-auto lg:mx-0 font-medium"
            >
              Spécialisé en <span className="text-[#F2765E] font-bold underline decoration-2 underline-offset-4">PHP</span>, <span className="text-[#F2765E] font-bold underline decoration-2 underline-offset-4">Laravel</span> et <span className="text-[#F2765E] font-bold underline decoration-2 underline-offset-4">React</span>. Je conçois et développe des applications web sur mesure, performantes et axées sur l'expérience utilisateur.
            </p>

            {/* Tags technologies */}
            <div 
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="400"
              className="flex flex-wrap justify-center lg:justify-start gap-2.5 font-mono text-xs"
            >
              {['React.js', 'Laravel', 'PHP', 'Tailwind CSS'].map((tech) => (
                <span 
                  key={tech} 
                  className="px-3.5 py-1.5 font-semibold rounded-lg bg-white/80 border border-[#315B8C]/20 text-[#413333] shadow-sm transition-all duration-300 hover:border-[#F2765E] hover:text-[#F2765E]"
                >
                  #{tech}
                </span>
              ))}
            </div>

            {/* Boutons CTA avec aplats de couleurs solides (Pas de dégradé) */}
            <div 
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="500"
              className="pt-3 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <a
                href="#projets"
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-sm bg-[#F2765E] text-[#F5EBDD] border-2 border-[#F2765E] shadow-md transition-all duration-300 hover:bg-[#F5EBDD] hover:text-[#F2765E] active:scale-95 text-center"
              >
                Découvrir mes projets
              </a>
              
              <a
                href="#contact"
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-sm bg-transparent border-2 border-[#315B8C] text-[#315B8C] transition-all duration-300 hover:bg-[#315B8C] hover:text-[#F5EBDD] active:scale-95 text-center"
              >
                Me contacter
              </a>
            </div>

          </div>

          {/* Colonne Photo de profil (Cadre élégant et épuré) */}
          <div 
            data-aos="zoom-in"
            data-aos-duration="900"
            data-aos-delay="200"
            className="w-full lg:w-5/12 flex justify-center lg:justify-end order-1 lg:order-2"
          >
            <div className="relative group">
              
              {/* Offset d'arrière-plan géométrique (Style dev/architecte) */}
              <div className="absolute inset-0 bg-[#315B8C] rounded-2xl transform translate-x-3 translate-y-3 transition-transform duration-300 group-hover:translate-x-4 group-hover:translate-y-4" />
              <div className="absolute inset-0 bg-[#F2765E] rounded-2xl transform -translate-x-2 -translate-y-2 opacity-30 transition-transform duration-300 group-hover:-translate-x-3 group-hover:-translate-y-3" />

              {/* Photo principale */}
              <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-2xl overflow-hidden border-2 border-[#413333] bg-[#F5EBDD] shadow-xl">
                <img
                  src={pdp}
                  alt="Mario Rakoto"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

            </div>
          </div>

        </div>
      </div>

    </section>
  );
}

export default Accueil;
