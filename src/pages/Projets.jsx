import img1 from "../../public/images/projet1.png";
import { ExternalLink, FolderCode } from "lucide-react";

function Projets() {
  return (
    <section 
      id="projets"
      className="relative py-24 px-4 bg-[#F5EBDD] text-[#413333] selection:bg-[#F2765E] selection:text-[#F5EBDD] overflow-hidden"
    >
      
      {/* Motif de fond en grille neutre */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#315B8C 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        
        {/* En-tête */}
        <div className="text-center mb-16 space-y-3">
          <span 
            data-aos="fade-down"
            className="inline-block text-xs font-mono font-bold tracking-widest text-[#F2765E] uppercase bg-[#F2765E]/10 px-3 py-1 rounded-md border-l-2 border-[#F2765E]"
          >
            // RÉALISATIONS RÉCENTES
          </span>
          <h2 
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-3xl sm:text-4xl font-black tracking-tight text-[#F2765E]"
          >
            Mes Projets
          </h2>
          <p 
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-[#315B8C] font-medium text-sm sm:text-base max-w-xl mx-auto"
          >
            Découvre une sélection de mes travaux récents, allant des applications web interactives aux plateformes e-commerce.
          </p>
        </div>

        {/* Conteneur principal des projets */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Projet Principal (À gauche - 7 colonnes sur desktop) */}
          <div className="lg:col-span-7" data-aos="fade-right" data-aos-delay="200">
            <div className="group relative bg-white/80 border-2 border-[#315B8C]/20 rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:border-[#F2765E] hover:shadow-md">
              
              {/* Image avec bordure nette */}
              <div className="relative aspect-[16/10] sm:aspect-[4/3] rounded-xl overflow-hidden bg-[#315B8C]/10 border border-[#315B8C]/20">
                <img
                  src={img1}
                  alt="Projet E-commerce"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>

              {/* Détails du Projet */}
              <div className="mt-6 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-black text-[#F2765E] group-hover:text-[#315B8C] transition-colors">
                    E-Commerce Moderne
                  </h3>
                  <div className="p-2 rounded-lg bg-[#315B8C]/10 text-[#315B8C] group-hover:bg-[#F2765E] group-hover:text-[#F5EBDD] transition-all">
                    <ExternalLink size={18} />
                  </div>
                </div>

                <p className="text-xs font-mono font-bold tracking-wider text-[#315B8C] uppercase">
                  Site web d'un lounge bar responsive
                </p>

                {/* Badges Tech */}
                <div className="flex flex-wrap gap-2 pt-2 font-mono">
                  {["HTML", "CSS", "JavaScript", "Tailwind"].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-bold rounded-lg bg-[#315B8C]/10 border border-[#315B8C]/20 text-[#315B8C]"
                    >
                      #{tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Colonne des Petits Projets (À droite - 5 colonnes sur desktop) */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            
            {/* Petit Projet 1 */}
            <div data-aos="fade-left" data-aos-delay="300">
              <div className="group relative bg-white/80 border-2 border-[#315B8C]/20 rounded-2xl p-5 transition-all duration-300 hover:border-[#F2765E] hover:shadow-md">
                
                <div className="relative aspect-video sm:aspect-[16/9] rounded-xl overflow-hidden bg-[#315B8C]/10 border border-[#315B8C]/20">
                  <img
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
                    alt="Dashboard"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                </div>

                <div className="mt-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-[#F2765E] group-hover:text-[#315B8C] transition-colors">
                      Dashboard Analytics
                    </h3>
                    <div className="p-2 rounded-lg bg-[#315B8C]/10 text-[#315B8C] group-hover:bg-[#F2765E] group-hover:text-[#F5EBDD] transition-all">
                      <FolderCode size={18} />
                    </div>
                  </div>

                  <p className="text-xs font-mono font-bold tracking-wider text-[#315B8C] uppercase">
                    Application de visualisation de données
                  </p>

                  <div className="flex flex-wrap gap-2 pt-1 font-mono">
                    {["Laravel", "React.js", "Tailwind"].map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-[11px] font-bold rounded-lg bg-[#315B8C]/10 border border-[#315B8C]/20 text-[#315B8C]"
                      >
                        #{tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>

            {/* Petit Projet 2 */}
            <div data-aos="fade-left" data-aos-delay="400">
              <div className="group relative bg-white/80 border-2 border-[#315B8C]/20 rounded-2xl p-5 transition-all duration-300 hover:border-[#F2765E] hover:shadow-md">
                
                <div className="relative aspect-video sm:aspect-[16/9] rounded-xl overflow-hidden bg-[#315B8C]/10 border border-[#315B8C]/20">
                  <img
                    src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80"
                    alt="Ba-Gasy Guitar"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                </div>

                <div className="mt-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-[#F2765E] group-hover:text-[#315B8C] transition-colors">
                      Tuto Guitare Ba-Gasy
                    </h3>
                    <div className="p-2 rounded-lg bg-[#315B8C]/10 text-[#315B8C] group-hover:bg-[#F2765E] group-hover:text-[#F5EBDD] transition-all">
                      <ExternalLink size={18} />
                    </div>
                  </div>

                  <p className="text-xs font-mono font-bold tracking-wider text-[#315B8C] uppercase">
                    Application interactive de tutoriel guitare
                  </p>

                  <div className="flex flex-wrap gap-2 pt-1 font-mono">
                    {["Laravel", "React.js", "Tailwind"].map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-[11px] font-bold rounded-lg bg-[#315B8C]/10 border border-[#315B8C]/20 text-[#315B8C]"
                      >
                        #{tech}
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