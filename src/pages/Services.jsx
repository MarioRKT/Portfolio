import { Check } from "lucide-react";
import { services } from "../data/services";

function Services() {
  return (
    <section
      id="services"
      className="relative scroll-mt-24 overflow-hidden bg-[#F5EBDD] text-[#413333] selection:bg-[#F2765E] selection:text-[#F5EBDD] py-16 sm:py-24"
    >
      {/* Texture de fond */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#315B8C 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête de section */}
        <div className="max-w-2xl text-center lg:text-left mx-auto lg:mx-0">
          <span className="inline-block text-xs font-mono font-bold tracking-widest text-[#F2765E] uppercase bg-[#F2765E]/10 px-3 py-1 rounded-md border-l-2 border-[#F2765E]">
            // OFFRES & EXPERTISES
          </span>

          <h2 className="mt-3 text-2xl sm:text-4xl font-black tracking-tight text-[#F2765E]">
            Mes services de développement web
          </h2>

          <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#315B8C] font-medium">
            Je vous accompagne dans la création de sites web, d'applications sur
            mesure et de boutiques en ligne, en proposant des solutions
            modernes, performantes et adaptées à vos besoins.
          </p>
        </div>

        {/* Grille des services : 1 colonne sur mobile, 2 à partir de la tablette */}
        <div className="mt-10 sm:mt-14 grid gap-6 sm:gap-8 md:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article
                key={service.id}
                className="flex flex-col rounded-2xl border-2 border-[#315B8C]/20 bg-white/70 p-5 sm:p-7 lg:p-8 shadow-sm transition-colors duration-300 hover:border-[#F2765E]"
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="shrink-0 p-3 rounded-xl bg-[#315B8C]/10 border border-[#315B8C]/20 text-[#315B8C]">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-black leading-snug text-[#F2765E]">
                    {service.title}
                  </h3>
                </div>

                <p className="mt-5 text-sm sm:text-base leading-relaxed text-[#315B8C] font-medium">
                  {service.description}
                </p>

                <ul className="mt-6 pt-6 border-t border-[#315B8C]/10 space-y-3">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-[#413333] font-medium"
                    >
                      <Check
                        size={18}
                        className="mt-0.5 shrink-0 text-[#F2765E]"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        {/* Appel à l'action */}
        <div className="mt-14 sm:mt-20 flex flex-col gap-6 rounded-2xl border-2 border-[#315B8C] bg-white/80 p-6 sm:p-10 shadow-md md:flex-row md:items-center md:justify-between">
          <div className="text-center md:text-left">
            <p className="text-lg sm:text-xl font-black text-[#F2765E]">
              Vous avez un projet en tête ?
            </p>
            <p className="mt-1 text-[#315B8C] font-medium text-sm sm:text-base">
              Décrivez-moi votre besoin et je vous réponds sous 24 heures avec
              une première proposition.
            </p>
          </div>
          <a
            href="#contact"
            className="shrink-0 w-full md:w-auto text-center font-mono font-bold text-xs tracking-wider uppercase px-7 py-4 rounded-xl bg-[#F2765E] text-[#F5EBDD] border-2 border-[#F2765E] shadow-sm transition-colors duration-300 hover:bg-transparent hover:text-[#F2765E]"
          >
            Discuter de mon projet
          </a>
        </div>
      </div>
    </section>
  );
}

export default Services;
