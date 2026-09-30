import {
  Globe,
  AppWindow,
  Server,
  LayoutDashboard,
  Database,
  LifeBuoy,
  Check,
} from "lucide-react";

// Services principaux : les deux offres mises en avant
const mainServices = [
  {
    icon: Globe,
    title: "Création de sites web",
    description:
      "Je conçois des sites vitrines et des pages de présentation rapides, responsives et faciles à mettre à jour, pour que votre activité soit visible et crédible en ligne.",
    features: [
      "Design adapté au mobile, à la tablette et à l'ordinateur",
      "Intégration fidèle de vos maquettes",
      "Formulaire de contact et optimisation du référencement de base",
      "Mise en ligne et accompagnement après livraison",
    ],
    stack: ["React.js", "Tailwind CSS", "Bootstrap", "Blade"],
  },
  {
    icon: AppWindow,
    title: "Applications web",
    description:
      "Je développe des applications sur mesure pour gérer vos données, vos utilisateurs et vos processus internes, du back-end jusqu'à l'interface.",
    features: [
      "Authentification et gestion des rôles utilisateurs",
      "Gestion complète des données (création, modification, suppression)",
      "Filtres, recherche et pagination",
      "Tableaux de bord avec graphiques dynamiques",
    ],
    stack: ["Laravel", "React.js", "MySQL", "API REST"],
    proof:
      "Réalisé pour le Ministère de l'Agriculture et de l'Élevage : une application de suivi des projets et des réalisations par région.",
  },
];

// Services complémentaires issus du CV
const extraServices = [
  {
    icon: Server,
    title: "Développement d'API REST",
    description:
      "Création d'API Laravel sécurisées et documentées pour connecter votre application mobile ou votre front-end.",
  },
  {
    icon: LayoutDashboard,
    title: "Tableaux de bord",
    description:
      "Visualisation de vos indicateurs avec des graphiques Chart.js clairs et mis à jour en temps réel.",
  },
  {
    icon: Database,
    title: "Bases de données",
    description:
      "Conception, optimisation et migration de bases MySQL ou PostgreSQL adaptées à votre projet.",
  },
  {
    icon: LifeBuoy,
    title: "Support informatique",
    description:
      "Installation et configuration de logiciels, diagnostic de pannes et assistance aux utilisateurs.",
  },
];

function Services() {
  return (
    <section
      id="services"
      className="relative scroll-mt-24 bg-[#F5EBDD] text-[#413333] selection:bg-[#F2765E] selection:text-[#F5EBDD] py-24 sm:py-28 overflow-hidden"
    >
      {/* Texture de fond neutre discrète */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#315B8C 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* En-tête de section */}
        <div className="max-w-2xl">
          <span 
            data-aos="fade-down"
            className="text-xs font-mono font-bold tracking-widest text-[#F2765E] uppercase bg-[#F2765E]/10 px-3 py-1 rounded-md border-l-2 border-[#F2765E]"
          >
            // OFFRES & EXPERTISES
          </span>
          <h2 
            data-aos="fade-up"
            data-aos-delay="100"
            className="mt-3 text-3xl sm:text-4xl font-black tracking-tight text-[#F2765E]"
          >
            Ce que je peux faire pour vous
          </h2>
          <p 
            data-aos="fade-up"
            data-aos-delay="200"
            className="mt-4 text-base sm:text-lg leading-relaxed text-[#315B8C] font-medium"
          >
            Du simple site de présentation à l'application métier complète, je
            prends en charge votre projet de la conception jusqu'à la mise en
            ligne.
          </p>
        </div>

        {/* Services principaux */}
        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {mainServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <article
                key={service.title}
                data-aos="fade-up"
                data-aos-delay={index * 150 + 200}
                className="relative flex flex-col rounded-2xl border-2 border-[#315B8C]/20 bg-white/70 p-7 sm:p-9 shadow-sm hover:border-[#F2765E] transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3.5 rounded-xl bg-[#315B8C]/10 border border-[#315B8C]/20 text-[#315B8C]">
                    <Icon size={26} />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-[#F2765E]">
                    {service.title}
                  </h3>
                </div>

                <p className="mt-5 leading-relaxed text-[#315B8C] font-medium">
                  {service.description}
                </p>

                <ul className="mt-6 space-y-3">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-[#413333] font-medium"
                    >
                      <Check
                        size={18}
                        className="mt-0.5 flex-shrink-0 text-[#F2765E]"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {service.proof && (
                  <div className="mt-6 rounded-xl border-l-4 border-[#315B8C] bg-[#315B8C]/5 px-4 py-3 text-xs sm:text-sm leading-relaxed text-[#413333] font-medium">
                    <strong className="text-[#315B8C] font-bold block mb-0.5">Mise en pratique :</strong>
                    {service.proof}
                  </div>
                )}

                <div className="mt-8 pt-6 border-t border-[#315B8C]/10 flex flex-wrap gap-2 font-mono">
                  {service.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg bg-[#315B8C]/10 border border-[#315B8C]/20 px-3 py-1 text-xs font-bold text-[#315B8C]"
                    >
                      #{tech}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        {/* Services complémentaires */}
        <div className="mt-20">
          <h3 
            data-aos="fade-right"
            className="text-lg font-mono font-bold text-[#F2765E] uppercase tracking-wider"
          >
            // Services complémentaires
          </h3>
          <div className="mt-6 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {extraServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="border-t-2 border-[#315B8C]/20 pt-6"
                >
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

        {/* Appel à l'action (Bloc plein solide sans dégradé) */}
        <div 
          data-aos="zoom-in"
          data-aos-delay="200"
          className="mt-20 flex flex-col items-start gap-6 rounded-2xl border-2 border-[#315B8C] bg-white/80 p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10 shadow-md"
        >
          <div>
            <p className="text-xl font-black text-[#F2765E]">
              Vous avez un projet en tête ?
            </p>
            <p className="mt-1 text-[#315B8C] font-medium text-sm sm:text-base">
              Décrivez-moi votre besoin et je vous réponds sous 24 heures avec
              une première proposition.
            </p>
          </div>
          <a
            href="#contact"
            className="flex-shrink-0 font-mono font-bold text-xs tracking-wider uppercase px-7 py-4 rounded-xl bg-[#F2765E] text-[#F5EBDD] border-2 border-[#F2765E] shadow-sm transition-all duration-300 hover:bg-transparent hover:text-[#F2765E] active:scale-95"
          >
            Discuter de mon projet
          </a>
        </div>

      </div>
    </section>
  );
}

export default Services;