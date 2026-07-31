import {
  Brush,
  ChevronsLeftRightEllipsis,
  Code,
  DatabaseBackup,
  PaintRoller,
  Palette,
  RefreshCw,
  SquareTerminal,
} from "lucide-react";

function Competences() {
  const skills = [
    { name: "HTML5", icon: Code, color: "hover:border-orange-500/50 hover:shadow-orange-500/20 text-orange-400" },
    { name: "CSS3", icon: Brush, color: "hover:border-blue-500/50 hover:shadow-blue-500/20 text-blue-400" },
    { name: "JavaScript", icon: SquareTerminal, color: "hover:border-yellow-500/50 hover:shadow-yellow-500/20 text-yellow-400" },
    { name: "React.js", icon: RefreshCw, color: "hover:border-sky-400/50 hover:shadow-sky-400/20 text-sky-400" },
    { name: "PHP", icon: ChevronsLeftRightEllipsis, color: "hover:border-indigo-400/50 hover:shadow-indigo-400/20 text-indigo-400" },
    { name: "Laravel", icon: DatabaseBackup, color: "hover:border-red-500/50 hover:shadow-red-500/20 text-red-400" },
    { name: "Tailwind CSS", icon: Palette, color: "hover:border-cyan-400/50 hover:shadow-cyan-400/20 text-cyan-400" },
    { name: "Bootstrap", icon: PaintRoller, color: "hover:border-purple-500/50 hover:shadow-purple-500/20 text-purple-400" },
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
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <div
                key={index}
                className={`group relative backdrop-blur-xl bg-slate-900/50 border border-slate-800/80 rounded-2xl p-6 flex flex-col items-center justify-center transition-all duration-300 hover:-translate-y-1.5 hover:bg-slate-900/90 hover:shadow-xl ${skill.color}`}
              >
                {/* Halo lumineux au survol */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-slate-800/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Conteneur de l'icône */}
                <div className="relative p-4 rounded-xl bg-slate-800/50 border border-slate-700/50 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent size={32} className="transition-colors duration-300" />
                </div>

                {/* Nom du techno */}
                <span className="relative text-sm font-semibold tracking-wide text-slate-300 group-hover:text-white transition-colors">
                  {skill.name}
                </span>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default Competences;
