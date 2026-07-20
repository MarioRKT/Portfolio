import pdp from '../../public/images/photo_CV.jpeg'

function Accueil() {
  return (
    <>
      <div className="hero min-h-screen bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('../../public/images/accueil.jpg')] bg-cover bg-center
                      flex items-center justify-center 2xl:justify-start 2xl:p-50">
        <div className="hero-content flex-col lg:flex-row backdrop-blur-md rounded-md">
          <img
            src={pdp}
            className="max-w-62.5 rounded-lg shadow-2xl"
          />
          <div className='text-center lg:text-start'>
            <h1 className="text-5xl font-bold text-sky-500 italic">Mario</h1>
            <h1 className="text-5xl font-bold text-white">Rakoto</h1>
            <p className="py-6 text-white">
              Développeur Web Full-Stack spécialisé en PHP, Laravel et React,
              <br /> je crée des applications web modernes, performantes et
              orientées utilisateur.
            </p>
            <button className="btn btn-outline btn-xs sm:btn-sm md:btn-md text-sky-500 hover:bg-sky-500 hover:text-white hover:border-sky-500">
              Découvrir mes projets
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Accueil;
