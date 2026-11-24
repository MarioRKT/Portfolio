import { FolderCode } from "lucide-react";
import { projects } from "../data/projets";

function Projets() {
  return (
    <section
      id="projets"
      className="relative scroll-mt-24 overflow-hidden bg-[#F5EBDD] text-[#413333] selection:bg-[#F2765E] selection:text-[#F5EBDD] py-16 sm:py-24"
    >
      {/* Grille de fond */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#315B8C 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête */}
        <div className="mb-10 sm:mb-14 text-center space-y-3">
          <span className="inline-block text-xs font-mono font-bold tracking-widest text-[#F2765E] uppercase bg-[#F2765E]/10 px-3 py-1 rounded-md border-l-2 border-[#F2765E]">
            // RÉALISATIONS RÉCENTES
          </span>
          <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-[#F2765E]">
            Mes projets
          </h2>
          <p className="text-[#315B8C] font-medium text-sm sm:text-base max-w-xl mx-auto">
            Découvrez une sélection de mes travaux récents, des applications
            métier aux boutiques en ligne.
          </p>
        </div>

        {/* Grille des projets : 1 colonne sur mobile, 2 à partir de la tablette */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.id}
              className="flex flex-col overflow-hidden rounded-2xl border-2 border-[#315B8C]/20 bg-white/80 shadow-sm transition-colors duration-300 hover:border-[#F2765E]"
            >
              {/* Capture du projet, ou icône si aucune image n'est renseignée */}
              <div className="aspect-video border-b-2 border-[#315B8C]/10 bg-[#315B8C]/10">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={`Aperçu du projet ${project.name}`}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-[#315B8C]/40">
                    <FolderCode size={56} />
                  </div>
                )}
              </div>

              <div className="flex flex-1 flex-col p-5 sm:p-6">
                {/* Catégorie */}
                <span className="w-fit rounded-md bg-[#F2765E]/10 px-2.5 py-1 text-xs font-mono font-bold uppercase tracking-wider text-[#F2765E]">
                  {project.category}
                </span>

                <h3 className="mt-3 text-lg sm:text-xl font-black leading-snug text-[#315B8C]">
                  {project.name}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-[#413333]">
                  {project.description}
                </p>

                {/* Technologies, alignées en bas de la carte */}
                <div className="mt-auto pt-5">
                  <div className="flex flex-wrap gap-2 border-t border-[#315B8C]/10 pt-5 font-mono">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg border border-[#315B8C]/20 bg-[#315B8C]/10 px-2.5 py-1 text-[11px] sm:text-xs font-bold text-[#315B8C]"
                      >
                        #{tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projets;
