import img1 from "../../public/images/projet1.png";

function Projets() {
  return (
    <>
      <div className="py-8 px-4">
        <div className="text-center mb-12 p-4">
          <p className="text-xs text-sky-400 font-medium">REALISATION RECENTES</p>
          <h1 className="text-4xl md:text-5xl font-bold">
            Mes <span className="italic text-sky-500 font-normal">Projets</span>
          </h1>
        </div>

        {/* Conteneur principal : passe en colonne sur mobile, reste en ligne sur desktop */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-12 lg:gap-8">
          
          {/* Projet Principal (à gauche) */}
          <div className="w-full max-w-112.5 lg:max-w-137.5"  data-aos="fade-right">
            <div className="aspect-4/5 shadow-md rounded-3xl md:rounded-4xl overflow-hidden bg-gray-100">
              <img
                src={img1}
                alt="Projet E-commerce"
                className="w-full h-full object-cover hover:scale-105 transition-all ease duration-600"
              />
            </div>

            <div className="mt-6 px-2">
              <h2 className="card-title text-2xl mb-2">E-Commerce Moderne</h2>
              <p className="text-xs font-medium tracking-wide text-gray-400 mb-4 uppercase">
                Site web d'un lounge bar responsive
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="badge badge-outline border-gray-400 rounded-2xl text-gray-500">HTML</span>
                <span className="badge badge-outline border-gray-400 rounded-2xl text-gray-500">CSS</span>
                <span className="badge badge-outline border-gray-400 rounded-2xl text-gray-500">JAVASCRIPT</span>
                <span className="badge badge-outline border-gray-400 rounded-2xl text-gray-500">TAILWIND</span>
              </div>
            </div>
          </div>

          {/* Colonne des petits projets (à droite) */}
          <div className="flex flex-col gap-16 w-full max-w-112.5 lg:max-w-100">
            
            {/* Petit Projet 1 */}
            <div className="w-full" data-aos="fade-left">
              <div className="aspect-square rounded-3xl md:rounded-4xl overflow-hidden bg-gray-100">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                  alt="Dashboard"
                  className="w-full h-full object-cover hover:scale-105 transition-all ease duration-600"
                />
              </div>
              <div className="mt-6 px-2">
                <h2 className="card-title text-xl mb-2">Dashboard Analytics</h2>
                <p className="text-xs font-medium tracking-wide text-gray-400 mb-4 uppercase">
                  Application de visualisation de données
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="badge badge-outline border-gray-400 rounded-2xl text-gray-500">LARAVEL</span>
                  <span className="badge badge-outline border-gray-400 rounded-2xl text-gray-500">REACT.JS</span>
                  <span className="badge badge-outline border-gray-400 rounded-2xl text-gray-500">TAILWIND</span>
                </div>
              </div>
            </div>

            {/* Petit Projet 2 */}
            <div className="w-full" data-aos="fade-left">
              <div className="aspect-square rounded-3xl md:rounded-4xl overflow-hidden bg-gray-100">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                  alt="Ba-Gasy"
                  className="w-full h-full object-cover hover:scale-105 transition-all ease duration-600"
                />
              </div>
              <div className="mt-6 px-2">
                <h2 className="card-title text-xl mb-2">Site Web Moderne</h2>
                <p className="text-xs font-medium tracking-wide text-gray-400 mb-4 uppercase">
                  Application de tutoriel guitare Ba-Gasy
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="badge badge-outline border-gray-400 rounded-2xl text-gray-500">LARAVEL</span>
                  <span className="badge badge-outline border-gray-400 rounded-2xl text-gray-500">REACT.JS</span>
                  <span className="badge badge-outline border-gray-400 rounded-2xl text-gray-500">TAILWIND</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Projets;