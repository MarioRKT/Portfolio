import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faSquareJs,
  faReact,
  faPhp,
  faLaravel,
  faSymfony,
  faMagento,
  faTailwindCss,
  faBootstrap,
} from "@fortawesome/free-brands-svg-icons";

const skills = [
  { name: "HTML5", icon: faHtml5, iconColor: "text-[#E34F26]", hoverBorder: "hover:border-[#E34F26]" },
  { name: "CSS3", icon: faCss3Alt, iconColor: "text-[#1572B6]", hoverBorder: "hover:border-[#1572B6]" },
  { name: "JavaScript", icon: faSquareJs, iconColor: "text-[#F7DF1E]", hoverBorder: "hover:border-[#F7DF1E]" },
  { name: "React.js", icon: faReact, iconColor: "text-[#61DAFB]", hoverBorder: "hover:border-[#61DAFB]" },
  { name: "PHP", icon: faPhp, iconColor: "text-[#777BB4]", hoverBorder: "hover:border-[#777BB4]" },
  { name: "Laravel", icon: faLaravel, iconColor: "text-[#FF2D20]", hoverBorder: "hover:border-[#FF2D20]" },
  { name: "Symfony", icon: faSymfony, iconColor: "text-[#315B8C]", hoverBorder: "hover:border-[#315B8C]" },
  { name: "Magento", icon: faMagento, iconColor: "text-[#EE672F]", hoverBorder: "hover:border-[#EE672F]" },
  { name: "Tailwind CSS", icon: faTailwindCss, iconColor: "text-[#06B6D4]", hoverBorder: "hover:border-[#06B6D4]" },
  { name: "Bootstrap", icon: faBootstrap, iconColor: "text-[#7952B3]", hoverBorder: "hover:border-[#7952B3]" },
];

function Competences() {
  return (
    <section
      id="competences"
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

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête */}
        <div className="mb-10 sm:mb-14 text-center space-y-3">
          <span className="inline-block text-xs font-mono font-bold tracking-widest text-[#F2765E] uppercase bg-[#F2765E]/10 px-3 py-1 rounded-md border-l-2 border-[#F2765E]">
            // ENVIRONNEMENT TECHNIQUE
          </span>
          <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-[#F2765E]">
            Stack technique
          </h2>
          <p className="text-[#315B8C] font-medium text-sm sm:text-base max-w-xl mx-auto">
            Les technologies et outils que j'utilise au quotidien pour concevoir
            des applications web performantes.
          </p>
        </div>

        {/* Grille des technologies */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-5">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className={`group flex flex-col items-center justify-center rounded-2xl border-2 border-[#315B8C]/20 bg-white/80 px-3 py-5 sm:p-6 transition-colors duration-300 hover:shadow-md ${skill.hoverBorder}`}
            >
              <div className="mb-3 sm:mb-4 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl border border-[#315B8C]/15 bg-[#315B8C]/5">
                <FontAwesomeIcon
                  icon={skill.icon}
                  className={`text-2xl sm:text-3xl ${skill.iconColor}`}
                />
              </div>
              <span className="text-center font-mono text-xs sm:text-sm font-bold tracking-tight text-[#315B8C] transition-colors group-hover:text-[#F2765E]">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Competences;
