import { Download, Sparkles, Briefcase } from "lucide-react";
import img from "../../public/images/photo_CV.jpeg";

// Expériences professionnelles (du plus récent au plus ancien)
const parcours = [
  {
    period: "Mars 2026 - Présent",
    title: "Développeur PHP / Magento 2",
    place: "ATOUT Service MADA",
    detail:
      "Maintenance applicative, développement de fonctionnalités sur mesure et intégration e-commerce sous Magento 2 et PHP.",
  },
  {
    period: "Sept. - Nov. 2024",
    title: "Stage Développeur Web Full-Stack",
    place: "Ministère de l'Agriculture et de l'Élevage",
    detail:
      "Conception et développement d'une application de suivi des projets régionaux avec Laravel, React.js et Chart.js.",
  },
  {
    period: "Sept. - Nov. 2023",
    title: "Stage Support Informatique",
    place: "Ministère de l'Agriculture et de l'Élevage",
    detail:
      "Assistance aux utilisateurs, diagnostic de pannes logicielles, installation et configuration des équipements.",
  },
];

// Frameworks mis en avant
const frameworks = [
  { name: "Magento 2", usage: "Boutiques en ligne et architectures e-commerce" },
  { name: "Laravel", usage: "API REST, authentification et back-end robuste" },
  { name: "React", usage: "Interfaces dynamiques et composants réutilisables" },
  { name: "Symfony", usage: "Applications web PHP structurées" },
];

const langages = ["PHP", "JavaScript", "HTML5", "CSS3", "SQL"];
const outils = ["Tailwind CSS", "Bootstrap", "MySQL", "PostgreSQL", "Docker", "Git"];

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
                  Développeur Web PHP / Magento 2
                </p>
              </div>

              <div className="space-y-4 text-[#413333] text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0">
                <p>
                  Spécialisé dans le développement web et les architectures
                  e-commerce, je conçois et maintiens des applications robustes
                  centrées sur la performance et l'expérience utilisateur.
                </p>
                <p>
                  Fort d'expériences en développement full-stack et en
                  intégration Magento 2, je maîtrise la chaîne de production
                  logicielle, de la conception d'API REST à la gestion de bases
                  de données relationnelles.
                </p>
              </div>

              <div className="pt-2 flex justify-center lg:justify-start">
                <a
                  href="/CV_Mario_Developpeur_Fullstack.pdf"
                  download
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-3 rounded-xl bg-[#F2765E] px-8 py-3.5 text-sm font-bold text-[#F5EBDD] shadow-md transition-colors duration-300 hover:bg-[#315B8C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F2765E] focus-visible:ring-offset-2"
                >
                  <span>Télécharger mon CV</span>
                  <Download size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Expériences et technologies */}
        <div className="grid gap-6 sm:gap-8 lg:grid-cols-5">
          {/* Expériences */}
          <div className="lg:col-span-3 rounded-3xl border-2 border-[#315B8C]/20 bg-white/80 p-5 sm:p-10 shadow-sm">
            <h3 className="flex items-center gap-3 text-xl sm:text-2xl font-black text-[#F2765E]">
              <Briefcase size={22} className="shrink-0 text-[#315B8C]" />
              Expériences professionnelles
            </h3>

            <ol className="mt-8 ml-4 space-y-8 border-l-2 border-[#315B8C]/20">
              {parcours.map((step) => (
                <li key={step.period} className="relative pl-7 sm:pl-8">
                  <span className="absolute -left-[17px] top-0 flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#F2765E] bg-[#F5EBDD] text-[#F2765E]">
                    <Briefcase size={14} />
                  </span>
                  <p className="text-xs font-mono font-bold text-[#F2765E]">{step.period}</p>
                  <p className="mt-1 text-base sm:text-lg font-bold text-[#315B8C]">{step.title}</p>
                  <p className="text-xs font-mono font-bold uppercase text-[#413333]/70">{step.place}</p>
                  <p className="mt-2 max-w-lg text-sm leading-relaxed text-[#413333]">
                    {step.detail}
                  </p>
                </li>
              ))}
            </ol>
          </div>

          {/* Technologies */}
          <div className="lg:col-span-2 rounded-3xl border-2 border-[#315B8C]/20 bg-white/80 p-5 sm:p-10 shadow-sm">
            <h3 className="text-xl sm:text-2xl font-black text-[#F2765E]">Technologies</h3>

            <p className="mt-6 text-xs font-mono font-bold tracking-wider text-[#315B8C] uppercase">
              Frameworks et CMS
            </p>
            <ul className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {frameworks.map((fw) => (
                <li
                  key={fw.name}
                  className="rounded-2xl border border-[#315B8C]/20 bg-[#F5EBDD]/50 px-4 py-3"
                >
                  <p className="font-bold text-[#F2765E]">{fw.name}</p>
                  <p className="mt-0.5 text-xs text-[#413333]">{fw.usage}</p>
                </li>
              ))}
            </ul>

            <p className="mt-6 text-xs font-mono font-bold tracking-wider text-[#315B8C] uppercase">
              Langages
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {langages.map((lang) => (
                <span
                  key={lang}
                  className="rounded-lg border border-[#315B8C]/20 bg-[#315B8C]/10 px-3 py-1 text-xs font-mono font-bold text-[#315B8C]"
                >
                  #{lang}
                </span>
              ))}
            </div>

            <p className="mt-6 text-xs font-mono font-bold tracking-wider text-[#315B8C] uppercase">
              Outils et bases de données
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {outils.map((tool) => (
                <span
                  key={tool}
                  className="rounded-lg border border-[#F2765E]/20 bg-[#F2765E]/10 px-3 py-1 text-xs font-mono font-bold text-[#F2765E]"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Apropos;
