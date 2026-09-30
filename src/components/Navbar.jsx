import { FileBraces, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

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

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const navLinks = [
    { name: "ACCUEIL", href: "#accueil" },
    { name: "SERVICES", href: "#services" },
    { name: "MES COMPETENCES", href: "#competences" },
    { name: "À PROPOS", href: "#about" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#F5EBDD]/90 backdrop-blur-md border-b border-[#315B8C]/15 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* 1. Logo / Brand */}
          <div className="flex-shrink-0">
            <a 
              href="#accueil" 
              onClick={() => setActiveHash("#accueil")}
              className="group flex items-center gap-2.5 text-lg sm:text-xl font-black tracking-wider transition-colors"
            >
              <div className="p-2 rounded-xl bg-[#315B8C]/10 border border-[#315B8C]/20 text-[#315B8C] group-hover:bg-[#315B8C] group-hover:text-[#F5EBDD] transition-all duration-300">
                <FileBraces size={22} />
              </div>
              <span className="font-mono font-black tracking-tight">
                <span className="text-[#F2765E]">DEV</span>
                <span className="text-[#315B8C]">.PORTFOLIO</span>
              </span>
            </a>
          </div>

          {/* 2. Navigation Desktop */}
          <nav className="hidden md:flex items-center gap-1 bg-white/70 border border-[#315B8C]/15 px-3 py-1.5 rounded-full shadow-sm">
            {navLinks.map((link) => {
              const isActive = activeHash === link.href;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setActiveHash(link.href)}
                  className={`px-4 py-2 text-xs font-mono font-bold tracking-wider transition-all duration-200 rounded-full ${
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

          {/* 3. Bouton Contact (CTA) Desktop */}
          <div className="hidden md:flex items-center">
            <a
              href="#contact"
              onClick={() => setActiveHash("#contact")}
              className={`px-6 py-2.5 rounded-xl font-bold text-xs tracking-wider uppercase font-mono transition-all duration-300 active:scale-95 text-center ${
                activeHash === "#contact"
                  ? "bg-transparent text-[#F2765E] border-2 border-[#F2765E]"
                  : "bg-[#F2765E] text-[#F5EBDD] border-2 border-[#F2765E] hover:bg-transparent hover:text-[#F2765E] shadow-sm"
              }`}
            >
              Contact
            </a>
          </div>

          {/* 4. Bouton Hamburger Mobile */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-xl bg-white/80 border border-[#315B8C]/20 text-[#315B8C] hover:text-[#F2765E] hover:border-[#F2765E] transition-all"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

        </div>
      </div>

      {/* 5. Menu Mobile Déroulant */}
      {isOpen && (
        <div className="md:hidden bg-[#F5EBDD] border-b border-[#315B8C]/20 px-4 pt-3 pb-6 space-y-3 shadow-lg">
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
                  className={`px-4 py-3 rounded-xl text-xs font-mono font-bold tracking-wider transition-all ${
                    isActive
                      ? "text-[#F5EBDD] bg-[#315B8C]"
                      : "text-[#413333] hover:text-[#F2765E] hover:bg-[#315B8C]/10"
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
              className="block w-full text-center py-3 rounded-xl font-mono font-bold text-xs tracking-wider uppercase bg-[#F2765E] text-[#F5EBDD] border-2 border-[#F2765E] shadow-sm active:scale-95"
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