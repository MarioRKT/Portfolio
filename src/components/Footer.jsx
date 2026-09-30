import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FileBraces, Github, Linkedin, Facebook, Mail, ArrowUp } from "lucide-react";

function Footer() {
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer 
      className="relative border-t border-[#413333]/10 pt-12 pb-8 px-4 sm:px-6 lg:px-8 font-sans selection:bg-[#F2765E] selection:text-white"
      style={{ backgroundColor: "#F5EBDD" }}
    >
      <div className="max-w-6xl mx-auto space-y-10">
        
        {/* Partie Haute : Brand, Bio, Réseaux & Scroll Top */}
        <div 
          className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-[#413333]/10"
          data-aos="fade-up"
        >
          {/* Brand & Courte Description */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-3">
            <a 
              href="#accueil" 
              className="group flex items-center gap-2.5 text-lg font-bold tracking-wider transition-colors"
            >
              <div 
                className="p-2 rounded-xl transition-transform duration-300 group-hover:scale-105"
                style={{ backgroundColor: "#315B8C", color: "#F5EBDD" }}
              >
                <FileBraces size={20} />
              </div>
              <span className="font-extrabold" style={{ color: "#413333" }}>
                DEV<span style={{ color: "#F2765E" }}>PORTFOLIO</span>
              </span>
            </a>
            <p className="text-xs sm:text-sm max-w-sm leading-relaxed" style={{ color: "#315B8C" }}>
              Développeur Web & Support IT. Conception d'applications modernes, performantes et sur-mesure.
            </p>
          </div>

          {/* Réseaux Sociaux & Bouton Retour en haut */}
          <div className="flex items-center gap-3">
            
            {/* GitHub */}
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="p-3 rounded-xl border border-[#413333]/15 bg-white/60 hover:bg-white transition-all duration-300 hover:shadow-sm group"
              style={{ color: "#315B8C" }}
            >
              <Github size={18} className="group-hover:scale-110 transition-transform" />
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="p-3 rounded-xl border border-[#413333]/15 bg-white/60 hover:bg-white transition-all duration-300 hover:shadow-sm group"
              style={{ color: "#315B8C" }}
            >
              <Linkedin size={18} className="group-hover:scale-110 transition-transform" />
            </a>

            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="p-3 rounded-xl border border-[#413333]/15 bg-white/60 hover:bg-white transition-all duration-300 hover:shadow-sm group"
              style={{ color: "#315B8C" }}
            >
              <Facebook size={18} className="group-hover:scale-110 transition-transform" />
            </a>

            {/* Mail */}
            <a
              href="mailto:rakotoarimananamario6@gmail.com"
              aria-label="Email"
              className="p-3 rounded-xl border border-[#413333]/15 bg-white/60 hover:bg-white transition-all duration-300 hover:shadow-sm group"
              style={{ color: "#315B8C" }}
            >
              <Mail size={18} className="group-hover:scale-110 transition-transform" />
            </a>

            {/* Séparateur vertical */}
            <div className="h-6 w-px bg-[#413333]/15 mx-1" />

            {/* Bouton Scroll Top */}
            <button
              onClick={scrollToTop}
              aria-label="Retour en haut"
              className="p-3 rounded-xl transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md group"
              style={{ backgroundColor: "#F2765E", color: "#ffffff" }}
            >
              <ArrowUp size={18} className="group-hover:-translate-y-0.5 transition-transform" />
            </button>

          </div>
        </div>

        {/* Partie Basse : Copyright & Mentions */}
        <div 
          className="flex flex-col sm:flex-row items-center justify-between text-xs gap-4 font-medium"
          style={{ color: "#413333" }}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <p className="text-center sm:text-left">
            © {currentYear} <span className="font-bold" style={{ color: "#F2765E" }}>RAKOTOARIMANANA MARIO</span>. Tous droits réservés.
          </p>
          <p className="text-center sm:text-right opacity-80" style={{ color: "#315B8C" }}>
            Conçu & développé avec React & Tailwind CSS
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;