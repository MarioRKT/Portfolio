import { useState } from "react";
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
  Clock,
} from "lucide-react";

const coordonnees = [
  {
    icon: Mail,
    label: "Email",
    value: "rakotoarimananamario6@gmail.com",
    href: "mailto:rakotoarimananamario6@gmail.com",
    external: false,
  },
  {
    icon: Phone,
    label: "WhatsApp / Tél",
    value: "+261 34 54 959 21",
    href: "https://wa.me/261345495921",
    external: true,
  },
  {
    icon: Facebook,
    label: "Facebook",
    value: "Rakotoarimanana Mario",
    href: "https://facebook.com",
    external: true,
  },
];

const inputClass =
  "w-full rounded-xl border border-[#413333]/20 bg-[#F5EBDD]/40 text-sm text-[#413333] transition-colors duration-200 focus:border-[#315B8C] focus:bg-white focus:outline-none";

function Contact() {
  const [status, setStatus] = useState({ submitting: false, succeeded: false, error: false });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, succeeded: false, error: false });

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xaenkpjr", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
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
      id="contact"
      className="relative scroll-mt-24 overflow-hidden bg-[#F5EBDD] text-[#413333] selection:bg-[#F2765E] selection:text-white py-16 sm:py-24"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-16">
        {/* En-tête */}
        <div className="mx-auto max-w-2xl text-center space-y-4">
          <span className="inline-block rounded-full border border-[#413333]/15 px-3 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#413333]">
            Contact & Collaboration
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F2765E]">
            Travaillons ensemble
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-[#315B8C]">
            Un projet web en vue ou une opportunité de collaboration ?
            Envoyez-moi un message pour en discuter.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-start">
          {/* Coordonnées */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-[#413333]/10 bg-white/70 p-5 sm:p-8 space-y-6 shadow-sm">
              <h3 className="text-xl font-bold text-[#F2765E]">Coordonnées</h3>

              <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
                {coordonnees.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      {...(item.external ? { target: "_blank", rel: "noreferrer" } : {})}
                      className="flex items-center gap-4 rounded-xl border border-transparent p-3 transition-colors duration-300 hover:border-[#315B8C]/20 hover:bg-white"
                    >
                      <div className="shrink-0 rounded-lg bg-[#315B8C] p-3 text-[#F5EBDD]">
                        <Icon size={20} />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-medium uppercase tracking-wider text-[#413333]/70">
                          {item.label}
                        </p>
                        <p className="break-all text-xs sm:text-sm font-semibold text-[#315B8C]">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>

              <div className="flex items-center gap-3 border-t border-[#413333]/10 pt-4 text-xs sm:text-sm font-medium text-[#413333]">
                <Clock size={16} className="shrink-0 text-[#F2765E]" />
                <span>Disponible pour de nouveaux projets</span>
              </div>
            </div>
          </div>

          {/* Formulaire */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-[#413333]/10 bg-white p-5 sm:p-8 shadow-sm">
              <div className="mb-6 flex items-center gap-3 border-b border-[#413333]/10 pb-4">
                <MessageSquare size={20} className="shrink-0 text-[#F2765E]" />
                <h3 className="text-xl font-bold text-[#413333]">Envoyer un message</h3>
              </div>

              {status.succeeded ? (
                <div className="rounded-xl bg-[#F5EBDD] px-6 py-12 text-center space-y-3">
                  <CheckCircle2 size={32} className="mx-auto text-[#315B8C]" />
                  <p className="text-lg font-bold text-[#F2765E]">Message bien reçu !</p>
                  <p className="mx-auto max-w-md text-xs sm:text-sm text-[#413333]">
                    Merci pour votre message. Je reviendrai vers vous dans les plus brefs délais.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Nom et email côte à côte à partir de la tablette */}
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="contact-name" className="text-xs font-semibold uppercase tracking-wider text-[#413333]">
                        Nom complet
                      </label>
                      <div className="relative">
                        <input
                          id="contact-name"
                          name="name"
                          type="text"
                          required
                          placeholder="Jean Dupont"
                          className={`${inputClass} py-3 pl-11 pr-4`}
                        />
                        <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#413333]/50" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="contact-email" className="text-xs font-semibold uppercase tracking-wider text-[#413333]">
                        Adresse email
                      </label>
                      <div className="relative">
                        <input
                          id="contact-email"
                          name="email"
                          type="email"
                          required
                          placeholder="jean.dupont@exemple.com"
                          className={`${inputClass} py-3 pl-11 pr-4`}
                        />
                        <AtSign size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#413333]/50" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="contact-message" className="text-xs font-semibold uppercase tracking-wider text-[#413333]">
                      Votre message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      placeholder="Décrivez votre projet ou votre demande..."
                      className={`${inputClass} h-36 resize-none p-4`}
                    />
                  </div>

                  {status.error && (
                    <p className="text-xs font-medium text-red-600">
                      L'envoi a échoué. Vérifiez votre connexion puis réessayez.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status.submitting}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#F2765E] px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-shadow duration-300 hover:shadow-md disabled:cursor-not-allowed disabled:opacity-50"
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
