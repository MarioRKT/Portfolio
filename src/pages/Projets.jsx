import img1 from "../../public/images/projet1.png";
import { ExternalLink, FolderCode } from "lucide-react";

// Petits projets (colonne de droite)
const sideProjects = [
  {
    title: "Dashboard Analytics",
    subtitle: "Application de visualisation de données",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    alt: "Aperçu du tableau de bord",
    icon: FolderCode,
    stack: ["Laravel", "React.js", "Tailwind"],
  },
  {
    title: "Tuto Guitare Ba-Gasy",
    subtitle: "Application interactive de tutoriel guitare",
    image:
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
    alt: "Aperçu de l'application de tutoriel guitare",
    icon: ExternalLink,
    stack: ["Laravel", "React.js", "Tailwind"],
  },
];

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
        <div className="mb-10 sm:mb-16 text-center space-y-3">
          <span className="inline-block text-xs font-mono font-bold tracking-widest text-[#F2765E] uppercase bg-[#F2765E]/10 px-3 py-1 rounded-md border-l-2 border-[#F2765E]">
            // RÉALISATIONS RÉCENTES
          </span>
          <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-[#F2765E]">
            Mes projets
          </h2>
          <p className="text-[#315B8C] font-medium text-sm sm:text-base max-w-xl mx-auto">
            Découvrez une sélection de mes travaux récents, des applications
            web interactives aux plateformes e-commerce.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          {/* Projet principal */}
          <article className="lg:col-span-7 group rounded-2xl border-2 border-[#315B8C]/20 bg-white/80 p-4 sm:p-6 transition-colors duration-300 hover:border-[#F2765E] hover:shadow-md">
            <div className="aspect-[16/10] sm:aspect-[4/3] overflow-hidden rounded-xl border border-[#315B8C]/20 bg-[#315B8C]/10">
              <img
                src={img1}
                alt="Aperçu du site du lounge bar"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="mt-5 sm:mt-6 space-y-3">
              <div className="flex items-start justify-between gap-3">
                <h3 className="min-w-0 text-xl sm:text-2xl font-black text-[#F2765E]">
                  E-Commerce Moderne
                </h3>
                <div className="shrink-0 p-2 rounded-lg bg-[#315B8C]/10 text-[#315B8C] transition-colors group-hover:bg-[#F2765E] group-hover:text-[#F5EBDD]">
                  <ExternalLink size={18} />
                </div>
              </div>

              <p className="text-xs font-mono font-bold tracking-wider text-[#315B8C] uppercase">
                Site web d'un lounge bar responsive
              </p>

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
          </article>

          {/* Petits projets : empilés sur mobile, côte à côte sur tablette, en colonne sur desktop */}
          <div className="lg:col-span-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-1 sm:gap-8">
            {sideProjects.map((project) => {
              const Icon = project.icon;
              return (
                <article
                  key={project.title}
                  className="group rounded-2xl border-2 border-[#315B8C]/20 bg-white/80 p-4 sm:p-5 transition-colors duration-300 hover:border-[#F2765E] hover:shadow-md"
                >
                  <div className="aspect-video overflow-hidden rounded-xl border border-[#315B8C]/20 bg-[#315B8C]/10">
                    <img
                      src={project.image}
                      alt={project.alt}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="mt-4 space-y-2">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="min-w-0 text-lg sm:text-xl font-bold text-[#F2765E]">
                        {project.title}
                      </h3>
                      <div className="shrink-0 p-2 rounded-lg bg-[#315B8C]/10 text-[#315B8C] transition-colors group-hover:bg-[#F2765E] group-hover:text-[#F5EBDD]">
                        <Icon size={18} />
                      </div>
                    </div>

                    <p className="text-xs font-mono font-bold tracking-wider text-[#315B8C] uppercase">
                      {project.subtitle}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-1 font-mono">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-[11px] font-bold rounded-lg bg-[#315B8C]/10 border border-[#315B8C]/20 text-[#315B8C]"
                        >
                          #{tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projets;
