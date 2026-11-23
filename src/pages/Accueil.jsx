import pdp from "../../public/images/photo_CV.jpeg";

function Accueil() {
  return (
    <section
      id="accueil"
      className="relative scroll-mt-24 w-full overflow-hidden bg-[#F5EBDD] text-[#413333] selection:bg-[#F2765E] selection:text-[#F5EBDD] py-16 sm:py-20 lg:min-h-[calc(100vh-5rem)] lg:flex lg:items-center"
    >
      {/* Grille discrète de fond */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#315B8C 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
          {/* Colonne texte */}
          <div className="w-full lg:w-7/12 text-center lg:text-left space-y-6 sm:space-y-8 order-2 lg:order-1">
            {/* Badge de disponibilité */}
            <div className="inline-flex items-center gap-2.5 bg-white/60 border border-[#315B8C]/20 px-4 py-2 rounded-full shadow-sm">
              <span className="relative flex h-2.5 w-2.5 shrink-0">
                <span className="absolute inline-flex h-full w-full rounded-full bg-[#F2765E] opacity-75 motion-safe:animate-ping" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#F2765E]" />
              </span>
              <span className="text-xs font-semibold tracking-wide text-[#315B8C]">
                Disponible pour de nouveaux projets
              </span>
            </div>

            {/* Titre et sous-titre */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-none">
                <span className="text-[#F2765E]">Mario </span>
                <span className="text-[#315B8C]">Rakoto</span>
              </h1>

              <p className="inline-block max-w-full text-sm sm:text-lg lg:text-2xl font-mono font-bold text-[#413333] tracking-tight bg-[#315B8C]/10 px-3 py-1 rounded-md border-l-4 border-[#F2765E]">
                &lt;Développeur Web Full-Stack /&gt;
              </p>
            </div>

            {/* Description */}
            <p className="text-[#315B8C] leading-relaxed text-base sm:text-lg max-w-xl mx-auto lg:mx-0 font-medium">
              Spécialisé en{" "}
              <span className="text-[#F2765E] font-bold underline decoration-2 underline-offset-4">
                PHP
              </span>{" "}
              et{" "}
              <span className="text-[#F2765E] font-bold underline decoration-2 underline-offset-4">
                React
              </span>
              , je développe des applications web, des sites vitrines et des
              solutions e-commerce modernes, performantes et adaptées à vos
              besoins.
            </p>

            {/* Boutons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <a
                href="#projets"
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-sm text-center bg-[#F2765E] text-[#F5EBDD] border-2 border-[#F2765E] shadow-md transition-colors duration-300 hover:bg-[#F5EBDD] hover:text-[#F2765E]"
              >
                Découvrir mes projets
              </a>
              <a
                href="#contact"
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-sm text-center bg-transparent border-2 border-[#315B8C] text-[#315B8C] transition-colors duration-300 hover:bg-[#315B8C] hover:text-[#F5EBDD]"
              >
                Me contacter
              </a>
            </div>
          </div>

          {/* Colonne photo */}
          <div className="w-full lg:w-5/12 flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative group m-3">
              <div className="absolute inset-0 bg-[#315B8C] rounded-2xl translate-x-3 translate-y-3" />
              <div className="absolute inset-0 bg-[#F2765E] rounded-2xl -translate-x-2 -translate-y-2 opacity-30" />
              <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-2xl overflow-hidden border-2 border-[#413333] bg-[#F5EBDD] shadow-xl">
                <img
                  src={pdp}
                  alt="Mario Rakoto"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Accueil;
