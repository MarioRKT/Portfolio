import { FileBraces, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  // State pour suivre le lien actif (par défaut #accueil)
  const [activeHash, setActiveHash] = useState("#accueil");

  useEffect(() => {
    // Récupérer le hash de l'URL courante au montage
    if (window.location.hash) {
      setActiveHash(window.location.hash);
    }

    // Mettre à jour quand le hash change
    const handleHashChange = () => {
      setActiveHash(window.location.hash || "#accueil");
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const navLinks = [
    { name: "ACCUEIL", href: "#accueil" },
    { name: "PROJETS", href: "#projet" },
    { name: "À PROPOS", href: "#about" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-slate-950/70 border-b border-slate-800/80 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* 1. Logo / Brand */}
          <div className="flex-shrink-0">
            <a 
              href="#accueil" 
              onClick={() => setActiveHash("#accueil")}
              className="group flex items-center gap-2 text-lg sm:text-xl font-black tracking-wider text-white transition-colors"
            >
              <div className="p-2 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400 group-hover:scale-105 group-hover:bg-sky-500 group-hover:text-white transition-all duration-300">
                <FileBraces size={22} />
              </div>
              <span>
                DEV<span className="bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">PORTFOLIO</span>
              </span>
            </a>
          </div>

          {/* 2. Menu Navigation Desktop */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-900/50 border border-slate-800/80 px-4 py-1.5 rounded-full backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeHash === link.href;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setActiveHash(link.href)}
                  className={`px-4 py-2 text-xs font-semibold tracking-wider transition-all duration-200 rounded-full ${
                    isActive
                      ? "text-sky-400 bg-slate-800/80 border border-slate-700/50 shadow-sm"
                      : "text-slate-300 hover:text-sky-400 hover:bg-slate-800/50 border border-transparent"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* 3. Bouton Contact (CTA) Desktop */}
          <div className="hidden md:flex items-center">
            <a
              href="#contact"
              onClick={() => setActiveHash("#contact")}
              className={`px-6 py-2.5 rounded-xl font-semibold text-xs tracking-wider uppercase bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white shadow-lg shadow-sky-500/20 transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] ${
                activeHash === "#contact" ? "ring-2 ring-sky-400 ring-offset-2 ring-offset-slate-950" : ""
              }`}
            >
              Contact
            </a>
          </div>

          {/* 4. Bouton Menu Hamburger Mobile */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-all"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

        </div>
      </div>

      {/* 5. Menu Mobile Déroulant */}
      {isOpen && (
        <div className="md:hidden backdrop-blur-2xl bg-slate-950/95 border-b border-slate-800 px-4 pt-4 pb-6 space-y-3 transition-all">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = activeHash === link.href;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => {
                    setActiveHash(link.href);
                    setIsOpen(false);
                  }}
                  className={`px-4 py-3 rounded-xl text-sm font-semibold tracking-wider transition-all ${
                    isActive
                      ? "text-sky-400 bg-slate-900 border border-slate-800"
                      : "text-slate-300 hover:text-sky-400 hover:bg-slate-900/50 border border-transparent"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>
          
          <div className="pt-2">
            <a
              href="#contact"
              onClick={() => {
                setActiveHash("#contact");
                setIsOpen(false);
              }}
              className="block w-full text-center py-3 rounded-xl font-semibold text-xs tracking-wider uppercase bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-md shadow-sky-500/20"
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