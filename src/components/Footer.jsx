import { FileBraces, Github, Linkedin, Facebook, Mail, ArrowUp } from "lucide-react";

// Remplacez les liens GitHub, LinkedIn et Facebook par vos vrais profils
const socials = [
  { label: "GitHub", href: "https://github.com", icon: Github, external: true },
  { label: "LinkedIn", href: "https://linkedin.com", icon: Linkedin, external: true },
  { label: "Facebook", href: "https://facebook.com", icon: Facebook, external: true },
  { label: "Email", href: "mailto:rakotoarimananamario6@gmail.com", icon: Mail, external: false },
];

function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-[#413333]/10 bg-[#F5EBDD] text-[#413333] selection:bg-[#F2765E] selection:text-white pt-10 sm:pt-12 pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
        {/* Partie haute : marque, description, réseaux */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 pb-8 border-b border-[#413333]/10">
          {/* Marque et description */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-3">
            <a href="#accueil" className="flex items-center gap-2.5 text-lg font-bold tracking-wider">
              <div className="shrink-0 p-2 rounded-xl bg-[#315B8C] text-[#F5EBDD]">
                <FileBraces size={20} />
              </div>
              <span className="font-extrabold text-[#413333]">
                DEV<span className="text-[#F2765E]">PORTFOLIO</span>
              </span>
            </a>
            <p className="max-w-sm text-xs sm:text-sm leading-relaxed text-[#315B8C]">
              Développeur web full-stack PHP et React. Conception d'applications
              modernes, performantes et sur mesure.
            </p>
          </div>

          {/* Réseaux et retour en haut */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  {...(social.external ? { target: "_blank", rel: "noreferrer" } : {})}
                  className="p-3 rounded-xl border border-[#413333]/15 bg-white/60 text-[#315B8C] transition-colors duration-300 hover:bg-white hover:text-[#F2765E]"
                >
                  <Icon size={18} />
                </a>
              );
            })}

            <div className="hidden sm:block h-6 w-px bg-[#413333]/15 mx-1" />

            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Retour en haut"
              className="p-3 rounded-xl bg-[#F2765E] text-white shadow-sm transition-shadow duration-300 hover:shadow-md cursor-pointer"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>

        {/* Partie basse : copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 text-xs font-medium">
          <p className="text-center sm:text-left">
            © {currentYear}{" "}
            <span className="font-bold text-[#F2765E]">RAKOTOARIMANANA Mario</span>.
            Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
