import { FileBraces, Github, Linkedin, Facebook, Mail, ArrowUp } from "lucide-react";

function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-slate-950 text-slate-400 border-t border-slate-800/80 overflow-hidden selection:bg-sky-500 selection:text-white">
      
      {/* 1. Halo lumineux discret en fond */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[150px] bg-gradient-to-r from-sky-500/10 via-indigo-500/10 to-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-slate-800/60">
          
          {/* 2. Brand & Description */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-3">
            <a 
              href="#accueil" 
              className="group flex items-center gap-2 text-lg font-black tracking-wider text-white transition-colors"
            >
              <div className="p-2 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400 group-hover:scale-105 group-hover:bg-sky-500 group-hover:text-white transition-all duration-300">
                <FileBraces size={20} />
              </div>
              <span>
                DEV<span className="bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">PORTFOLIO</span>
              </span>
            </a>
            <p className="text-xs sm:text-sm text-slate-400 max-w-sm">
              Développeur Web & Support IT. Conception d'applications modernes, performantes et sur-mesure.
            </p>
          </div>

          {/* 4. Réseaux Sociaux & Bouton Retour en Haut */}
          <div className="flex items-center gap-4">
            
            {/* Github */}
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-sky-500/50 hover:bg-slate-800/80 transition-all duration-300"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-sky-400 hover:border-sky-500/50 hover:bg-slate-800/80 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>

            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-indigo-400 hover:border-indigo-500/50 hover:bg-slate-800/80 transition-all duration-300"
              aria-label="Facebook"
            >
              <Facebook size={18} />
            </a>

            {/* Mail */}
            <a
              href="mailto:rakotoarimananamario6@gmail.com"
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-emerald-400 hover:border-emerald-500/50 hover:bg-slate-800/80 transition-all duration-300"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>

            {/* Separateur */}
            <div className="h-6 w-px bg-slate-800 mx-1" />

            {/* Bouton Scroll Top */}
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400 hover:bg-sky-500 hover:text-white transition-all duration-300 shadow-lg shadow-sky-500/10 group cursor-pointer"
              aria-label="Retour en haut"
            >
              <ArrowUp size={18} className="group-hover:-translate-y-0.5 transition-transform" />
            </button>

          </div>

        </div>

        {/* 5. Copyright & Mention */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p className="text-center sm:text-left">
            © {currentYear} <span className="text-slate-300 font-semibold">RAKOTOARIMANANA MARIO</span>. Tous droits réservés.
          </p>
          <p className="text-center sm:text-right text-slate-600">
            Fait avec React & Tailwind CSS
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
