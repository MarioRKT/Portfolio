import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { 
  Mail, 
  Phone, 
  Facebook, 
  MessageSquare, 
  User, 
  AtSign, 
  Send, 
  Loader2, 
  CheckCircle2, 
  Clock 
} from "lucide-react";

function Contact() {
  const [status, setStatus] = useState({ submitting: false, succeeded: false, error: false });

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, succeeded: false, error: false });

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xaenkpjr", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus({ submitting: false, succeeded: true, error: false });
        form.reset();
      } else {
        setStatus({ submitting: false, succeeded: false, error: true });
      }
    } catch {
      setStatus({ submitting: false, succeeded: false, error: true });
    }
  };

  return (
    <section 
      className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 font-sans selection:bg-[#F2765E] selection:text-white"
      style={{ backgroundColor: '#F5EBDD' }}
    >
      <div className="w-full max-w-6xl mx-auto space-y-16">
        
        {/* En-tête de section */}
        <div className="text-center max-w-2xl mx-auto space-y-4" data-aos="fade-down">
          <span 
            className="text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full border border-[#413333]/15 inline-block"
            style={{ color: '#413333' }}
          >
            Contact & Collaboration
          </span>
          <h1 
            className="text-3xl sm:text-5xl font-bold tracking-tight"
            style={{ color: '#F2765E' }}
          >
            Travaillons ensemble
          </h1>
          <p 
            className="text-base sm:text-lg leading-relaxed font-normal"
            style={{ color: '#315B8C' }}
          >
            Un projet web en vue ou une opportunité de collaboration ? Envoyez-moi un message pour en discuter.
          </p>
        </div>

        {/* Grille principale */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Colonne Gauche : Coordonnées */}
          <div className="lg:col-span-5 space-y-6" data-aos="fade-right" data-aos-delay="100">
            
            <div className="bg-white/70 border border-[#413333]/10 rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm backdrop-blur-sm">
              <h2 className="text-xl font-bold" style={{ color: '#F2765E' }}>
                Coordonnées
              </h2>
              
              <div className="space-y-4">
                {/* Email */}
                <a 
                  href="mailto:rakotoarimananamario6@gmail.com"
                  className="group flex items-center gap-4 p-3.5 rounded-xl border border-transparent hover:border-[#315B8C]/20 hover:bg-white transition-all duration-300"
                >
                  <div 
                    className="p-3 rounded-lg shrink-0 transition-transform duration-300 group-hover:scale-105"
                    style={{ backgroundColor: '#315B8C', color: '#F5EBDD' }}
                  >
                    <Mail size={20} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-medium uppercase tracking-wider opacity-70" style={{ color: '#413333' }}>
                      Email
                    </p>
                    <p className="text-xs sm:text-sm font-semibold truncate" style={{ color: '#315B8C' }}>
                      rakotoarimananamario6@gmail.com
                    </p>
                  </div>
                </a>

                {/* WhatsApp / Téléphone */}
                <a 
                  href="https://wa.me/261345495921" 
                  target="_blank" 
                  rel="noreferrer"
                  className="group flex items-center gap-4 p-3.5 rounded-xl border border-transparent hover:border-[#315B8C]/20 hover:bg-white transition-all duration-300"
                >
                  <div 
                    className="p-3 rounded-lg shrink-0 transition-transform duration-300 group-hover:scale-105"
                    style={{ backgroundColor: '#315B8C', color: '#F5EBDD' }}
                  >
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider opacity-70" style={{ color: '#413333' }}>
                      WhatsApp / Tél
                    </p>
                    <p className="text-xs sm:text-sm font-semibold" style={{ color: '#315B8C' }}>
                      +261 34 54 959 21
                    </p>
                  </div>
                </a>

                {/* Facebook */}
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className="group flex items-center gap-4 p-3.5 rounded-xl border border-transparent hover:border-[#315B8C]/20 hover:bg-white transition-all duration-300"
                >
                  <div 
                    className="p-3 rounded-lg shrink-0 transition-transform duration-300 group-hover:scale-105"
                    style={{ backgroundColor: '#315B8C', color: '#F5EBDD' }}
                  >
                    <Facebook size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider opacity-70" style={{ color: '#413333' }}>
                      Facebook
                    </p>
                    <p className="text-xs sm:text-sm font-semibold" style={{ color: '#315B8C' }}>
                      Rakotoarimanana Mario
                    </p>
                  </div>
                </a>
              </div>

              {/* Statut de disponibilité */}
              <div 
                className="pt-4 border-t border-[#413333]/10 flex items-center gap-3 text-xs sm:text-sm font-medium"
                style={{ color: '#413333' }}
              >
                <Clock size={16} style={{ color: '#F2765E' }} />
                <span>Disponible pour de nouveaux projets</span>
              </div>
            </div>

          </div>

          {/* Colonne Droite : Formulaire */}
          <div className="lg:col-span-7" data-aos="fade-left" data-aos-delay="200">
            <div className="bg-white border border-[#413333]/10 rounded-2xl p-6 sm:p-8 shadow-sm">
              
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#413333]/10">
                <MessageSquare size={20} style={{ color: '#F2765E' }} />
                <h2 className="text-xl font-bold" style={{ color: '#413333' }}>
                  Envoyer un message
                </h2>
              </div>

              {status.succeeded ? (
                <div 
                  className="py-12 px-6 rounded-xl text-center space-y-3"
                  style={{ backgroundColor: '#F5EBDD' }}
                >
                  <CheckCircle2 size={32} className="mx-auto" style={{ color: '#315B8C' }} />
                  <h3 className="text-lg font-bold" style={{ color: '#F2765E' }}>
                    Message bien reçu !
                  </h3>
                  <p className="text-xs sm:text-sm max-w-md mx-auto" style={{ color: '#413333' }}>
                    Merci pour votre message. Je reviendrai vers vous dans les plus brefs délais.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  {/* Champ Nom */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#413333' }}>
                      Nom complet
                    </label>
                    <div className="relative">
                      <input
                        name="name"
                        type="text"
                        required
                        placeholder="Jean Dupont"
                        className="w-full bg-[#F5EBDD]/40 border border-[#413333]/20 rounded-xl py-3 pl-11 pr-4 text-sm focus:outline-none focus:border-[#315B8C] focus:bg-white transition-all duration-200"
                        style={{ color: '#413333' }}
                      />
                      <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 opacity-50" style={{ color: '#413333' }} />
                    </div>
                  </div>

                  {/* Champ Email */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#413333' }}>
                      Adresse Email
                    </label>
                    <div className="relative">
                      <input
                        name="email"
                        type="email"
                        required
                        placeholder="jean.dupont@exemple.com"
                        className="w-full bg-[#F5EBDD]/40 border border-[#413333]/20 rounded-xl py-3 pl-11 pr-4 text-sm focus:outline-none focus:border-[#315B8C] focus:bg-white transition-all duration-200"
                        style={{ color: '#413333' }}
                      />
                      <AtSign size={18} className="absolute left-4 top-1/2 -translate-y-1/2 opacity-50" style={{ color: '#413333' }} />
                    </div>
                  </div>

                  {/* Champ Message */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#413333' }}>
                      Votre message
                    </label>
                    <textarea
                      name="message"
                      required
                      placeholder="Décrivez votre projet ou votre demande..."
                      className="w-full bg-[#F5EBDD]/40 border border-[#413333]/20 rounded-xl p-4 text-sm focus:outline-none focus:border-[#315B8C] focus:bg-white transition-all duration-200 resize-none h-36"
                      style={{ color: '#413333' }}
                    />
                  </div>

                  {status.error && (
                    <p className="text-xs font-medium text-red-600">
                      Une erreur est survenue lors de l'envoi. Veuillez réessayer.
                    </p>
                  )}

                  {/* Bouton d'action */}
                  <button
                    type="submit"
                    disabled={status.submitting}
                    className="w-full py-3.5 px-6 rounded-xl font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 shadow-sm hover:shadow-md cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{ backgroundColor: '#F2765E', color: '#ffffff' }}
                  >
                    {status.submitting ? (
                      <>
                        <span>Envoi en cours...</span>
                        <Loader2 size={16} className="animate-spin" />
                      </>
                    ) : (
                      <>
                        <span>Envoyer le message</span>
                        <Send size={16} />
                      </>
                    )}
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;