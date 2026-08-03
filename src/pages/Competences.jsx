function Competences() {
  const skills = [
    { 
      name: "HTML5", 
      icon: "https://cdn.simpleicons.org/html5/E34F26", 
      color: "hover:border-orange-500/50 hover:shadow-orange-500/20 text-orange-400" 
    },
    { 
      name: "CSS3", 
      icon: "https://cdn.simpleicons.org/css3/1572B6", 
      color: "hover:border-blue-500/50 hover:shadow-blue-500/20 text-blue-400" 
    },
    { 
      name: "JavaScript", 
      icon: "https://cdn.simpleicons.org/javascript/F7DF1E", 
      color: "hover:border-yellow-500/50 hover:shadow-yellow-500/20 text-yellow-400" 
    },
    { 
      name: "React.js", 
      icon: "https://cdn.simpleicons.org/react/61DAFB", 
      color: "hover:border-sky-400/50 hover:shadow-sky-400/20 text-sky-400" 
    },
    { 
      name: "PHP", 
      icon: "https://cdn.simpleicons.org/php/777BB4", 
      color: "hover:border-indigo-400/50 hover:shadow-indigo-400/20 text-indigo-400" 
    },
    { 
      name: "Laravel", 
      icon: "https://cdn.simpleicons.org/laravel/FF2D20", 
      color: "hover:border-red-500/50 hover:shadow-red-500/20 text-red-400" 
    },
    { 
      name: "Symfony", 
      icon: "https://cdn.simpleicons.org/symfony/ffffff", 
      color: "hover:border-slate-300/50 hover:shadow-slate-300/20 text-slate-200" 
    },
    { 
      name: "Magento", 
      icon: "https://cdn.simpleicons.org/magento/EE672F", 
      color: "hover:border-orange-600/50 hover:shadow-orange-600/20 text-orange-500" 
    },
    { 
      name: "Tailwind CSS", 
      icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4", 
      color: "hover:border-cyan-400/50 hover:shadow-cyan-400/20 text-cyan-400" 
    },
    { 
      name: "Bootstrap", 
      icon: "https://cdn.simpleicons.org/bootstrap/7952B3", 
      color: "hover:border-purple-500/50 hover:shadow-purple-500/20 text-purple-400" 
    },
  ];

  return (
    <section className="relative py-20 px-4 bg-slate-950 text-white overflow-hidden selection:bg-sky-500 selection:text-white">
      
      {/* 1. Effet d'ambiance en arrière-plan */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-sky-500/10 via-indigo-500/10 to-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto" data-aos="zoom-in">
        
        {/* 2. En-tête */}
        <div className="mb-14 text-center space-y-3">
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-sky-400 uppercase">
            Mes Compétences
          </span>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white">
            Stack <span className="bg-gradient-to-r from-sky-400 via-indigo-400 to-cyan-300 bg-clip-text text-transparent">Techniques</span>
          </h1>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            Les technologies et outils que j'utilise au quotidien pour concevoir des applications web performantes.
          </p>
        </div>

        {/* 3. Grille des technologies */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`group relative backdrop-blur-xl bg-slate-900/50 border border-slate-800/80 rounded-2xl p-6 flex flex-col items-center justify-center transition-all duration-300 hover:-translate-y-1.5 hover:bg-slate-900/90 hover:shadow-xl ${skill.color}`}
            >
              {/* Halo lumineux au survol */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-slate-800/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              {/* Conteneur de l'icône / Logo Officiel */}
              <div className="relative p-3.5 rounded-xl bg-slate-800/50 border border-slate-700/50 mb-4 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center w-14 h-14">
                <img 
                  src={skill.icon} 
                  alt={`Logo ${skill.name}`}
                  className="w-8 h-8 object-contain transition-transform duration-300"
                  loading="lazy"
                />
              </div>

              {/* Nom de la techno */}
              <span className="relative text-sm font-semibold tracking-wide text-slate-300 group-hover:text-white transition-colors text-center">
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
