import { CircleCheckBig, Facebook, Mail, Phone } from "lucide-react";
import InputNom from "../components/InputNom";
import InputMail from "../components/InputMail";

function Contact() {
  return (
    <>
      {/* Remplacement des marges fixes par max-w et mx-auto + padding latéral pour mobile */}
      <div className="flex flex-col lg:flex-row justify-center max-w-6xl mx-auto my-12 lg:my-36 px-6 py-4 shadow-xl border border-gray-100 rounded-3xl lg:rounded-4xl gap-12 lg:gap-0">
        
        {/* Infos de contact - Prend 100% sur mobile */}
        <div className="w-full lg:w-[45%] lg:pl-10">
          <h1 className="text-4xl md:text-5xl mb-10 text-center lg:text-left leading-tight">
            Travaillons
            <span className="italic text-sky-500 "> ensemble</span>
          </h1>

          {/* Grille d'infos pour mobile (2 colonnes) qui repasse en liste sur desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8">
            <div className="flex flex-col items-center lg:items-start">
              <p className="text-xs flex items-center text-gray-400 gap-2 mb-1 uppercase tracking-widest font-bold">
                <Mail size={16} /> EMAIL
              </p>
              <h2 className="text-sm md:text-base break-all">rakotoarimananamario6@gmail.com</h2>
            </div>

            <div className="flex flex-col items-center lg:items-start">
              <p className="text-sm flex items-center text-gray-400 gap-2 mb-1 uppercase tracking-widest font-bold">
                <Facebook size={16} /> FACEBOOK
              </p>
              <h2 className="text-sm md:text-base">Rakotoarimanana Mario</h2>
            </div>

            <div className="flex flex-col items-center lg:items-start">
              <p className="text-sm flex items-center text-gray-400 gap-2 mb-1 uppercase tracking-widest font-bold">
                <Phone size={16} /> WHATSAPP
              </p>
              <h2 className="text-sm md:text-base">034 54 959 21</h2>
            </div>

            <div className="flex flex-col items-center lg:items-start">
              <p className="text-sm flex items-center text-gray-400 gap-2 mb-1 uppercase tracking-widest font-bold">
                <CircleCheckBig size={16} /> DISPONIBILITE
              </p>
              <h2 className="text-sm md:text-base text-center lg:text-left">
                Disponible pour opportunités <br />
                Freelance & CDI
              </h2>
            </div>
          </div>
        </div>

        {/* Formulaire - Prend 100% sur mobile */}
        <div className="w-full lg:w-[50%] lg:border-l border-gray-100 lg:pl-8">
          <h2 className="text-2xl text-center lg:text-left lg:px-8 mb-4">Envoyez-moi un message</h2>

          <form className="p-0 lg:p-8 flex flex-col">
            <div className="grid grid-cols-1 md:flex md:flex-col">
               <InputNom />
               <InputMail />
            </div>
            
            <textarea
              className="textarea textarea-bordered mt-10 w-full h-32"
              placeholder="Votre message"
            ></textarea>
            
            <div className="text-center lg:text-left">
              <button className="btn btn-neutral w-full md:w-auto hover:bg-sky-500 hover:border-sky-500 mt-8 px-12 py-2.5 transition-all">
                Envoyer
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;