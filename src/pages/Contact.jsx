import { CircleCheckBig, Facebook, Mail, Phone, Send, MessageSquare } from "lucide-react";
import InputNom from "../components/InputNom";
import InputMail from "../components/InputMail";

function Contact() {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-16 px-4 bg-slate-950 text-white selection:bg-sky-500 selection:text-white overflow-hidden">
      
      {/* 1. Effets d'ambiance en arrière-plan (Glow Orbs) */}
      <div className="absolute top-1/3 -right-20 w-96 h-96 bg-sky-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-96 h-96 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none" />

      {/* 2. Conteneur Principal (Glassmorphism moderne) */}
      <div className="relative z-10 w-full max-w-5xl mx-auto backdrop-blur-xl bg-slate-900/60 border border-slate-800/80 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl shadow-sky-950/20">
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-stretch">
          
          {/* 3. Colonne de Gauche : Infos de contact */}
          <div className="w-full lg:w-[45%] flex flex-col justify-between space-y-8">
            
            <div className="space-y-4 text-center lg:text-left">
              <span className="text-xs sm:text-sm font-semibold tracking-wider text-sky-400 uppercase">
                Contact & Dispo 👋
              </span>
              <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
                Travaillons <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-sky-400 via-indigo-400 to-cyan-300 bg-clip-text text-transparent">
                  ensemble
                </span>
              </h1>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                Un projet en tête ou une opportunité de collaboration ? N'hésite pas à me contacter via le formulaire ou sur mes réseaux.
              </p>
            </div>

            {/* Cartes d'informations interactives */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              
              {/* EMAIL */}
              <a 
                href="mailto:rakotoarimananamario6@gmail.com"
                className="group p-4 rounded-2xl bg-slate-800/40 border border-slate-800 hover:border-sky-500/50 hover:bg-slate-800/80 transition-all duration-300 flex items-center gap-4"
              >
                <div className="p-3 rounded-xl bg-sky-500/10 text-sky-400 group-hover:scale-110 group-hover:bg-sky-500 group-hover:text-white transition-all">
                  <Mail size={20} />
                </div>
                <div className="overflow-hidden">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">EMAIL</p>
                  <h2 className="text-xs sm:text-sm font-medium text-slate-200 truncate group-hover:text-sky-300 transition-colors">
                    rakotoarimananamario6@gmail.com
                  </h2>
                </div>
              </a>

              {/* WHATSAPP */}
              <a 
                href="https://wa.me/261345495921" 
                target="_blank" 
                rel="noreferrer"
                className="group p-4 rounded-2xl bg-slate-800/40 border border-slate-800 hover:border-emerald-500/50 hover:bg-slate-800/80 transition-all duration-300 flex items-center gap-4"
              >
                <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">WHATSAPP / TEL</p>
                  <h2 className="text-xs sm:text-sm font-medium text-slate-200 group-hover:text-emerald-300 transition-colors">
                    034 54 959 21
                  </h2>
                </div>
              </a>

              {/* FACEBOOK */}
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noreferrer"
                className="group p-4 rounded-2xl bg-slate-800/40 border border-slate-800 hover:border-indigo-500/50 hover:bg-slate-800/80 transition-all duration-300 flex items-center gap-4"
              >
                <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400 group-hover:scale-110 group-hover:bg-indigo-500 group-hover:text-white transition-all">
                  <Facebook size={20} />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">FACEBOOK</p>
                  <h2 className="text-xs sm:text-sm font-medium text-slate-200 group-hover:text-indigo-300 transition-colors">
                    Rakotoarimanana Mario
                  </h2>
                </div>
              </a>

              {/* DISPONIBILITE */}
              <div className="p-4 rounded-2xl bg-slate-800/20 border border-slate-800/60 flex items-center gap-4">
                <div className="p-3 rounded-xl bg-sky-400/10 text-sky-400 shrink-0">
                  <CircleCheckBig size={20} />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">DISPONIBILITÉ</p>
                  <h2 className="text-xs sm:text-sm font-medium text-slate-300">
                    Ouvert aux opportunités <span className="text-sky-400 font-semibold">Freelance</span> & <span className="text-indigo-400 font-semibold">CDI</span>
                  </h2>
                </div>
              </div>

            </div>
          </div>

          {/* 4. Colonne de Droite : Formulaire de Message */}
          <div className="w-full lg:w-[55%] bg-slate-950/40 border border-slate-800/80 rounded-2xl p-6 sm:p-8 flex flex-col justify-center">
            
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-sky-500/10 text-sky-400">
                <MessageSquare size={20} />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                Envoyez-moi un message
              </h2>
            </div>

            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              
              {/* Inputs Personnalisés (Nom & Email) */}
              <div className="space-y-4">
                <InputNom />
                <InputMail />
              </div>
              
              {/* Zone de Message */}
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-slate-400 uppercase tracking-wider">
                  Votre Message
                </label>
                <textarea
                  className="w-full bg-slate-900/90 border border-slate-800 rounded-xl p-4 text-slate-200 text-sm placeholder:text-slate-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all duration-300 resize-none h-36"
                  placeholder="Décrivez votre projet ou votre demande..."
                  required
                />
              </div>
              
              {/* Bouton d'Envoi */}
              <button 
                type="submit"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white shadow-lg shadow-sky-500/20 transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Envoyer le message</span>
                <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;
