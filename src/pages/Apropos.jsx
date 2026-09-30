import { Download, Sparkles, Briefcase } from "lucide-react";
import img from "../../public/images/photo_CV.jpeg";

// Liste des expériences professionnelles uniquement (du plus récent au plus ancien)
const parcours = [
  {
    type: "experience",
    period: "2024 - Présent",
    title: "Développeur PHP / Magento 2",
    place: "Poste Actuel",
    detail:
      "Maintenance applicative, développement de fonctionnalités sur-mesure et intégration e-commerce sous Magento 2 & PHP.",
  },
  {
    type: "experience",
    period: "Sept. - Nov. 2024",
    title: "Stage Développeur Web Full-Stack",
    place: "Ministère de l'Agriculture et de l'Élevage",
    detail:
      "Conception et développement d'une application de suivi des projets régionaux avec Laravel, React.js et Chart.js.",
  },
  {
    type: "experience",
    period: "Sept. - Nov. 2023",
    title: "Stage Support Informatique",
    place: "Ministère de l'Agriculture et de l'Élevage",
    detail:
      "Assistance aux utilisateurs, diagnostic de pannes logicielles, installation et configuration des équipements.",
  },
];

// Frameworks mis en avant
const frameworks = [
  { name: "Magento 2", usage: "Boutiques en ligne & architectures e-commerce" },
  { name: "Laravel", usage: "API REST, authentification & backend robuste" },
  { name: "React", usage: "Interfaces dynamiques & composants réutilisables" },
  { name: "Symfony", usage: "Applications web PHP structurées" },
];

// Langages et outils complémentaires
const langages = ["PHP", "JavaScript", "HTML5", "CSS3", "SQL"];
const outils = ["Tailwind CSS", "Bootstrap", "MySQL", "PostgreSQL", "Docker", "Git"];

function Apropos() {
  return (
    <section
      id="about"
      className="relative scroll-mt-24 py-24 px-4 bg-[#F5EBDD] text-[#413333] selection:bg-[#F2765E] selection:text-[#F5EBDD] overflow-hidden"
    >
      {/* Motif de fond en grille neutre */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#315B8C 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      <div className="relative z-10 container mx-auto max-w-6xl space-y-8">
        
        {/* 1. Présentation */}
        <div 
          data-aos="fade-up"
          className="bg-white/80 border-2 border-[#315B8C]/20 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-sm"
        >
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            
            {/* Photo */}
            <div className="w-full lg:w-5/12 flex justify-center" data-aos="zoom-in" data-aos-delay="100">
              <div className="relative group w-64 sm:w-72 lg:w-80 aspect-[3/4]">
                <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-[#315B8C]/30 shadow-md">
                  <img
                    src={img}
                    alt="Mario Rakotoarimanana"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-[#315B8C]/10 group-hover:bg-transparent transition-colors duration-300" />
                </div>
                
                {/* Badge Flottant */}
                <div className="absolute -bottom-4 right-4 bg-[#F5EBDD] border-2 border-[#315B8C]/30 px-4 py-2 rounded-xl flex items-center gap-2 shadow-md">
                  <Sparkles size={16} className="text-[#F2765E]" />
                  <span className="text-xs font-mono font-bold text-[#315B8C]">Developpeur Web Full-Stack</span>
                </div>
              </div>
            </div>

            {/* Texte de Présentation */}
            <div className="w-full lg:w-7/12 text-center lg:text-left space-y-6">
              <div className="space-y-3">
                <span className="inline-block text-xs font-mono font-bold tracking-widest text-[#F2765E] uppercase bg-[#F2765E]/10 px-3 py-1 rounded-md border-l-2 border-[#F2765E]">
                  // À PROPOS DE MOI
                </span>
                <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#F2765E] leading-tight">
                  Mario Rakotoarimanana
                </h2>
                <p className="text-lg font-mono font-bold text-[#315B8C]">
                  Développeur Web PHP / Magento 2
                </p>
              </div>

              <div className="space-y-4 text-[#413333] text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0">
                <p>
                  Spécialisé dans le développement web et les architectures e-commerce, je conçois et maintiens des applications robustes centrées sur la performance et l'expérience utilisateur.
                </p>
                <p>
                  Fort d'expériences en développement Full-Stack et en intégration Magento 2, je maîtrise la chaîne de production logicielle de la conception d'API REST à la gestion de bases de données relationnelles.
                </p>
              </div>

              {/* Bouton Téléchargement CV */}
              <div className="pt-2 flex justify-center lg:justify-start">
                <a
                  href="/CV_Mario_Developpeur_Fullstack.pdf"
                  download
                  className="group inline-flex items-center gap-3 px-8 py-3.5 rounded-xl font-bold text-sm bg-[#F2765E] hover:bg-[#315B8C] text-[#F5EBDD] shadow-md transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F2765E]"
                >
                  <span>Télécharger mon CV</span>
                  <Download size={18} className="group-hover:translate-y-0.5 transition-transform duration-300" />
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* 2. Expériences & Technologies */}
        <div className="grid gap-8 lg:grid-cols-5">
          
          {/* Section Expériences Professionnelles */}
          <div 
            data-aos="fade-right"
            data-aos-delay="200"
            className="lg:col-span-3 bg-white/80 border-2 border-[#315B8C]/20 rounded-3xl p-6 sm:p-10 shadow-sm"
          >
            <h3 className="text-2xl font-black text-[#F2765E] flex items-center gap-3">
              <Briefcase size={22} className="text-[#315B8C]" />
              Expériences Professionnelles
            </h3>

            <ol className="mt-8 relative border-l-2 border-[#315B8C]/20 ml-3 space-y-8">
              {parcours.map((step) => (
                <li key={step.title} className="relative pl-8">
                  <span className="absolute -left-[17px] top-0 flex h-8 w-8 items-center justify-center rounded-full bg-[#F5EBDD] border-2 border-[#F2765E] text-[#F2765E]">
                    <Briefcase size={14} />
                  </span>
                  <p className="text-xs font-mono font-bold text-[#F2765E]">{step.period}</p>
                  <p className="mt-1 text-lg font-bold text-[#315B8C]">{step.title}</p>
                  <p className="text-xs font-mono font-bold uppercase text-[#413333]/70">{step.place}</p>
                  {step.detail && (
                    <p className="mt-2 text-sm leading-relaxed text-[#413333] max-w-lg">
                      {step.detail}
                    </p>
                  )}
                </li>
              ))}
            </ol>
          </div>

          {/* Section Technologies & Stacks */}
          <div 
            data-aos="fade-left"
            data-aos-delay="300"
            className="lg:col-span-2 bg-white/80 border-2 border-[#315B8C]/20 rounded-3xl p-6 sm:p-10 shadow-sm"
          >
            <h3 className="text-2xl font-black text-[#F2765E]">
              Technologies
            </h3>

            {/* Frameworks */}
            <p className="mt-6 text-xs font-mono font-bold tracking-wider text-[#315B8C] uppercase">
              Frameworks & CMS
            </p>
            <ul className="mt-3 space-y-3">
              {frameworks.map((fw) => (
                <li
                  key={fw.name}
                  className="rounded-2xl border border-[#315B8C]/20 bg-[#F5EBDD]/50 px-4 py-3"
                >
                  <p className="font-bold text-[#F2765E]">{fw.name}</p>
                  <p className="text-xs text-[#413333] mt-0.5">{fw.usage}</p>
                </li>
              ))}
            </ul>

            {/* Langages */}
            <p className="mt-6 text-xs font-mono font-bold tracking-wider text-[#315B8C] uppercase">
              Langages
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {langages.map((lang) => (
                <span
                  key={lang}
                  className="px-3 py-1 text-xs font-mono font-bold rounded-lg bg-[#315B8C]/10 border border-[#315B8C]/20 text-[#315B8C]"
                >
                  #{lang}
                </span>
              ))}
            </div>

            {/* Outils & BDD */}
            <p className="mt-6 text-xs font-mono font-bold tracking-wider text-[#315B8C] uppercase">
              Outils & Bases de données
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {outils.map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1 text-xs font-mono font-bold rounded-lg bg-[#F2765E]/10 border border-[#F2765E]/20 text-[#F2765E]"
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