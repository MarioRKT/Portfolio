import { FileBraces, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const navLinks = [
  { name: "ACCUEIL", href: "#accueil" },
  { name: "SERVICES", href: "#services" },
  { name: "COMPÉTENCES", href: "#competences" },
  { name: "PROJETS", href: "#projets" },
  { name: "À PROPOS", href: "#about" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("#accueil");

  useEffect(() => {
    if (window.location.hash) {
      setActiveHash(window.location.hash);
    }

    const handleHashChange = () => {
      setActiveHash(window.location.hash || "#accueil");
    };

    // Ferme le menu mobile si l'écran passe en mode ordinateur
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsOpen(false);
    };

    // Ferme le menu mobile avec la touche Échap
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("hashchange", handleHashChange);
    window.addEventListener("resize", handleResize);
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleNavClick = (href) => {
    setActiveHash(href);
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#F5EBDD]/90 backdrop-blur-md border-b border-[#315B8C]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 h-20">
          {/* Logo */}
          <a
            href="#accueil"
            onClick={() => handleNavClick("#accueil")}
            className="group flex shrink-0 items-center gap-2.5 text-lg sm:text-xl"
          >
            <div className="p-2 rounded-xl bg-[#315B8C]/10 border border-[#315B8C]/20 text-[#315B8C] transition-colors duration-300 group-hover:bg-[#315B8C] group-hover:text-[#F5EBDD]">
              <FileBraces size={22} />
            </div>
            <span className="whitespace-nowrap font-mono font-black tracking-tight">
              <span className="text-[#F2765E]">DEV</span>
              <span className="text-[#315B8C]">.PORTFOLIO</span>
            </span>
          </a>

          {/* Navigation ordinateur (à partir de 1024 px) */}
          <nav
            aria-label="Navigation principale"
            className="hidden lg:flex items-center gap-1 bg-white/70 border border-[#315B8C]/15 px-2 py-1.5 rounded-full shadow-sm"
          >
            {navLinks.map((link) => {
              const isActive = activeHash === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => handleNavClick(link.href)}
                  aria-current={isActive ? "page" : undefined}
                  className={`whitespace-nowrap px-3 xl:px-4 py-2 rounded-full text-xs font-mono font-bold tracking-wider transition-colors duration-200 ${
                    isActive
                      ? "text-[#F5EBDD] bg-[#315B8C] shadow-sm"
                      : "text-[#413333] hover:text-[#F2765E] hover:bg-[#315B8C]/5"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Bouton Contact ordinateur */}
          <a
            href="#contact"
            onClick={() => handleNavClick("#contact")}
            className={`hidden lg:inline-flex shrink-0 px-6 py-2.5 rounded-xl border-2 border-[#F2765E] font-mono font-bold text-xs tracking-wider uppercase transition-colors duration-300 ${
              activeHash === "#contact"
                ? "bg-transparent text-[#F2765E]"
                : "bg-[#F2765E] text-[#F5EBDD] shadow-sm hover:bg-transparent hover:text-[#F2765E]"
            }`}
          >
            Contact
          </a>

          {/* Bouton menu (mobile et tablette) */}
          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isOpen}
            aria-controls="menu-mobile"
            className="lg:hidden shrink-0 p-2.5 rounded-xl bg-white/80 border border-[#315B8C]/20 text-[#315B8C] transition-colors hover:text-[#F2765E] hover:border-[#F2765E]"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Menu déroulant (mobile et tablette) */}
      {isOpen && (
        <div
          id="menu-mobile"
          className="lg:hidden max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-[#315B8C]/10 bg-[#F5EBDD] shadow-lg"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-3 pb-6 space-y-3">
            {/* Une colonne sur mobile, deux colonnes sur tablette */}
            <nav aria-label="Navigation mobile" className="grid gap-1 sm:grid-cols-2 sm:gap-2">
              {navLinks.map((link) => {
                const isActive = activeHash === link.href;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => handleNavClick(link.href)}
                    aria-current={isActive ? "page" : undefined}
                    className={`px-4 py-3 rounded-xl text-xs font-mono font-bold tracking-wider transition-colors ${
                      isActive
                        ? "text-[#F5EBDD] bg-[#315B8C]"
                        : "text-[#413333] hover:text-[#F2765E] hover:bg-[#315B8C]/10"
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </nav>

            <a
              href="#contact"
              onClick={() => handleNavClick("#contact")}
              className="block w-full py-3 rounded-xl border-2 border-[#F2765E] bg-[#F2765E] text-center font-mono font-bold text-xs tracking-wider uppercase text-[#F5EBDD] shadow-sm"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
