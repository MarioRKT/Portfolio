import { Download, Sparkles, Briefcase, Check } from "lucide-react";
import img from "../../public/images/photo_CV.jpeg";
import { experiences } from "../data/experiences";

function Apropos() {
  return (
    <section
      id="about"
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

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
        {/* 1. Présentation */}
        <div className="rounded-3xl border-2 border-[#315B8C]/20 bg-white/80 p-5 sm:p-10 lg:p-12 shadow-sm">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            {/* Photo */}
            <div className="w-full lg:w-5/12 flex justify-center">
              <div className="relative w-52 sm:w-64 lg:w-80 aspect-[3/4]">
                <div className="h-full w-full overflow-hidden rounded-2xl border-2 border-[#315B8C]/30 shadow-md">
                  <img
                    src={img}
                    alt="Mario Rakotoarimanana"
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Badge centré sous la photo */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap flex items-center gap-2 rounded-xl border-2 border-[#315B8C]/30 bg-[#F5EBDD] px-3 sm:px-4 py-2 shadow-md">
                  <Sparkles size={16} className="shrink-0 text-[#F2765E]" />
                  <span className="text-[11px] sm:text-xs font-mono font-bold text-[#315B8C]">
                    Développeur Full-Stack
                  </span>
                </div>
              </div>
            </div>

            {/* Texte */}
            <div className="w-full lg:w-7/12 text-center lg:text-left space-y-6">
              <div className="space-y-3">
                <span className="inline-block text-xs font-mono font-bold tracking-widest text-[#F2765E] uppercase bg-[#F2765E]/10 px-3 py-1 rounded-md border-l-2 border-[#F2765E]">
                  // À PROPOS DE MOI
                </span>
                <h2 className="break-words text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#F2765E] leading-tight">
                  Mario Rakotoarimanana
                </h2>
                <p className="text-base sm:text-lg font-mono font-bold text-[#315B8C]">
                  Développeur Web Full-Stack
                </p>
              </div>

              <div className="space-y-4 text-[#413333] text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0">
                <p>
                  Développeur Web Full Stack avec 2 ans d'expérience, spécialisé
                  dans l'écosystème PHP (Laravel, Symfony, Magento 2) et
                  React.js, je possède une expérience dans la conception, le
                  développement et la maintenance d'applications web et de sites
                  e-commerce.
                </p>
                <p>
                  Je maîtrise le développement back-end, la création d'API REST,
                  la gestion des bases de données ainsi que la conception
                  d'interfaces modernes et responsives.
                </p>
              </div>

              <div className="pt-2 flex justify-center lg:justify-start">
                <a
                  href="/CV_Mario_Developpeur_Fullstack.pdf"
                  download="CV_Mario_Rakotoarimanana.pdf"
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-3 rounded-xl bg-[#F2765E] px-8 py-3.5 text-sm font-bold text-[#F5EBDD] shadow-md transition-colors duration-300 hover:bg-[#315B8C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F2765E] focus-visible:ring-offset-2"
                >
                  <span>Télécharger mon CV</span>
                  <Download size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Expériences professionnelles */}
        <div className="rounded-3xl border-2 border-[#315B8C]/20 bg-white/80 p-5 sm:p-10 lg:p-12 shadow-sm">
          <h3 className="flex items-center gap-3 text-xl sm:text-2xl font-black text-[#F2765E]">
            <Briefcase size={22} className="shrink-0 text-[#315B8C]" />
            Expériences professionnelles
          </h3>

          <ol className="mt-8 ml-4 space-y-10 border-l-2 border-[#315B8C]/20">
            {experiences.map((exp) => (
              <li key={exp.id} className="relative pl-7 sm:pl-10">
                {/* Point de la frise */}
                <span className="absolute -left-[17px] top-0 flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#F2765E] bg-[#F5EBDD] text-[#F2765E]">
                  <Briefcase size={14} />
                </span>

                {/* Période et type */}
                <div className="flex flex-wrap items-center gap-2">
                  <p className="text-xs font-mono font-bold text-[#F2765E]">
                    {exp.periode}
                  </p>
                  <span className="rounded-md bg-[#315B8C]/10 px-2 py-0.5 text-[11px] font-semibold text-[#315B8C]">
                    {exp.type}
                  </span>
                </div>

                <p className="mt-2 text-base sm:text-lg font-bold text-[#315B8C]">
                  {exp.poste}
                </p>
                <p className="text-xs font-mono font-bold uppercase text-[#413333]/70">
                  {exp.entreprise}
                </p>

                <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[#413333]">
                  {exp.description}
                </p>

                {/* Missions : 1 colonne sur mobile, 2 à partir de la tablette */}
                <ul className="mt-4 grid gap-2 md:grid-cols-2 md:gap-x-8">
                  {exp.missions.map((mission) => (
                    <li
                      key={mission}
                      className="flex items-start gap-2.5 text-sm text-[#413333]"
                    >
                      <Check
                        size={16}
                        className="mt-0.5 shrink-0 text-[#F2765E]"
                      />
                      <span>{mission}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Apropos;
