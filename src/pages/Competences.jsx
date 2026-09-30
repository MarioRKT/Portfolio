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
  faBootstrap 
} from "@fortawesome/free-brands-svg-icons";

function Competences() {
  const skills = [
    { 
      name: "HTML5", 
      icon: faHtml5, 
      iconColor: "text-[#E34F26]",
      hoverBorder: "hover:border-[#E34F26]" 
    },
    { 
      name: "CSS3", 
      icon: faCss3Alt, 
      iconColor: "text-[#1572B6]",
      hoverBorder: "hover:border-[#1572B6]" 
    },
    { 
      name: "JavaScript", 
      icon: faSquareJs, 
      iconColor: "text-[#F7DF1E]",
      hoverBorder: "hover:border-[#F7DF1E]" 
    },
    { 
      name: "React.js", 
      icon: faReact, 
      iconColor: "text-[#61DAFB]",
      hoverBorder: "hover:border-[#61DAFB]" 
    },
    { 
      name: "PHP", 
      icon: faPhp, 
      iconColor: "text-[#777BB4]",
      hoverBorder: "hover:border-[#777BB4]" 
    },
    { 
      name: "Laravel", 
      icon: faLaravel, 
      iconColor: "text-[#FF2D20]",
      hoverBorder: "hover:border-[#FF2D20]" 
    },
    { 
      name: "Symfony", 
      icon: faSymfony, 
      iconColor: "text-[#315B8C]",
      hoverBorder: "hover:border-[#315B8C]" 
    },
    { 
      name: "Magento", 
      icon: faMagento, 
      iconColor: "text-[#EE672F]",
      hoverBorder: "hover:border-[#EE672F]" 
    },
    { 
      name: "Tailwind CSS", 
      icon: faTailwindCss,  
      iconColor: "text-[#06B6D4]",
      hoverBorder: "hover:border-[#06B6D4]" 
    },
    { 
      name: "Bootstrap", 
      icon: faBootstrap, 
      iconColor: "text-[#7952B3]",
      hoverBorder: "hover:border-[#7952B3]" 
    },
  ];

  return (
    <section 
      id="competences"
      className="relative py-24 px-4 bg-[#F5EBDD] text-[#413333] selection:bg-[#F2765E] selection:text-[#F5EBDD] overflow-hidden"
    >
      
      {/* Motifs de fond en grille neutre */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#315B8C 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto">
        
        {/* En-tête de section */}
        <div className="mb-14 text-center space-y-3">
          <span 
            data-aos="fade-down"
            className="inline-block text-xs font-mono font-bold tracking-widest text-[#F2765E] uppercase bg-[#F2765E]/10 px-3 py-1 rounded-md border-l-2 border-[#F2765E]"
          >
            // ENVIRONNEMENT TECHNIQUE
          </span>
          <h2 
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-3xl sm:text-4xl font-black tracking-tight text-[#F2765E]"
          >
            Stack Technique
          </h2>
          <p 
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-[#315B8C] font-medium text-sm sm:text-base max-w-xl mx-auto"
          >
            Les technologies et outils que j'utilise au quotidien pour concevoir des applications web performantes.
          </p>
        </div>

        {/* Grille des technologies */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              data-aos="fade-up"
              data-aos-delay={index * 50 + 100}
              className={`group relative bg-white/80 border-2 border-[#315B8C]/20 rounded-2xl p-6 flex flex-col items-center justify-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md ${skill.hoverBorder}`}
            >
              {/* Conteneur de l'icône */}
              <div className="p-3.5 rounded-xl bg-[#315B8C]/5 border border-[#315B8C]/15 mb-4 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center w-14 h-14">
                <FontAwesomeIcon 
                  icon={skill.icon} 
                  className={`text-3xl ${skill.iconColor} transition-transform duration-300`} 
                />
              </div>

              {/* Nom de la technologie */}
              <span className="font-mono text-xs sm:text-sm font-bold tracking-tight text-[#315B8C] group-hover:text-[#F2765E] transition-colors text-center">
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