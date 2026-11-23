import {
  Globe,
  AppWindow,
  Server,
  LayoutDashboard,
  Database,
  ShoppingCart,
  Check,
} from "lucide-react";

// Services principaux : les deux offres mises en avant
const mainServices = [
  {
    icon: Globe,
    title: "Création de sites web",
    description:
      "Je conçois des sites vitrines modernes, interactifs et responsives pour les PME et les startups, afin que votre activité soit visible et crédible en ligne.",
    features: [
      "Design adapté au mobile, à la tablette et à l'ordinateur",
      "Intégration fidèle de vos maquettes",
      "Fonctionnalités adaptées à votre activité (réservation, menu, contact)",
      "Mise en ligne et accompagnement après livraison",
    ],
    stack: ["React.js", "Tailwind CSS", "Bootstrap", "Material UI"],
    proof:
      "En freelance depuis janvier 2026 : des sites réalisés pour des agences de voyages, des restaurants et d'autres PME.",
  },
  {
    icon: AppWindow,
    title: "Applications web",
    description:
      "Je développe et maintiens des applications sur mesure pour gérer vos données, vos utilisateurs et vos processus internes, du back-end jusqu'à l'interface.",
    features: [
      "Authentification et gestion des droits d'accès",
      "Gestion complète des données (création, modification, suppression)",
      "Filtres, recherche et pagination",
      "Tableaux de bord avec graphiques pour l'aide à la décision",
    ],
    stack: ["Laravel", "Symfony", "React.js", "MySQL", "API REST"],
    proof:
      "Réalisé pour le Ministère de l'Agriculture et de l'Élevage : une application de collecte de données et un tableau de bord de suivi des projets régionaux.",
  },
];

// Services complémentaires issus du CV
const extraServices = [
  {
    icon: ShoppingCart,
    title: "Sites e-commerce Magento 2",
    description:
      "Personnalisation, refonte du design, maintenance et audit des performances de boutiques en ligne Magento 2.",
  },
  {
    icon: Server,
    title: "Développement d'API REST",
    description:
      "Création d'API sécurisées avec Laravel ou Symfony, testées avec Postman, pour connecter votre front-end ou votre application mobile.",
  },
  {
    icon: LayoutDashboard,
    title: "Tableaux de bord",
    description:
      "Interfaces d'administration avec graphiques dynamiques pour suivre vos indicateurs et faciliter vos décisions.",
  },
  {
    icon: Database,
    title: "Bases de données",
    description:
      "Conception, optimisation et migration de bases MySQL ou PostgreSQL, avec un environnement de travail sous Docker et Git.",
  },
];

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
            Ce que je peux faire pour vous
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#315B8C] font-medium">
            Du site vitrine à la boutique en ligne en passant par l'application
            métier, je prends en charge votre projet de la conception jusqu'à
            la mise en ligne.
          </p>
        </div>

        {/* Services principaux */}
        <div className="mt-10 sm:mt-14 grid gap-6 sm:gap-8 lg:grid-cols-2">
          {mainServices.map((service) => {
            const Icon = service.icon;
            return (
              <article
                key={service.title}
                className="flex flex-col rounded-2xl border-2 border-[#315B8C]/20 bg-white/70 p-5 sm:p-8 lg:p-9 shadow-sm transition-colors duration-300 hover:border-[#F2765E]"
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="shrink-0 p-3 sm:p-3.5 rounded-xl bg-[#315B8C]/10 border border-[#315B8C]/20 text-[#315B8C]">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-lg sm:text-2xl font-black text-[#F2765E]">
                    {service.title}
                  </h3>
                </div>

                <p className="mt-5 text-sm sm:text-base leading-relaxed text-[#315B8C] font-medium">
                  {service.description}
                </p>

                <ul className="mt-6 space-y-3">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-[#413333] font-medium"
                    >
                      <Check size={18} className="mt-0.5 shrink-0 text-[#F2765E]" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {service.proof && (
                  <div className="mt-6 rounded-xl border-l-4 border-[#315B8C] bg-[#315B8C]/5 px-4 py-3 text-xs sm:text-sm leading-relaxed text-[#413333] font-medium">
                    <strong className="block mb-0.5 text-[#315B8C] font-bold">
                      Mise en pratique :
                    </strong>
                    {service.proof}
                  </div>
                )}

                <div className="mt-auto pt-6">
                  <div className="pt-6 border-t border-[#315B8C]/10 flex flex-wrap gap-2 font-mono">
                    {service.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg bg-[#315B8C]/10 border border-[#315B8C]/20 px-3 py-1 text-xs font-bold text-[#315B8C]"
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

        {/* Services complémentaires */}
        <div className="mt-14 sm:mt-20">
          <h3 className="text-base sm:text-lg font-mono font-bold text-[#F2765E] uppercase tracking-wider text-center lg:text-left">
            // Services complémentaires
          </h3>
          <div className="mt-6 grid gap-x-8 gap-y-8 sm:gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {extraServices.map((service) => {
              const Icon = service.icon;
              return (
                <div key={service.title} className="border-t-2 border-[#315B8C]/20 pt-6">
                  <div className="p-2.5 w-fit rounded-lg bg-[#315B8C]/10 text-[#315B8C]">
                    <Icon size={22} />
                  </div>
                  <h4 className="mt-4 font-bold text-[#F2765E] text-base">
                    {service.title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-[#315B8C] font-medium">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
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
