import {
  Brush,
  ChevronsLeftRightEllipsis,
  Code,
  DatabaseBackup,
  PaintRoller,
  Palette,
  RefreshCw,
  SquareTerminal,
} from "lucide-react";

function Competences() {
  return (
    <>
      <div className="py-12 px-4" data-aos="zoom-in">
        <div className="mb-12 text-center">
          <p className="text-xs text-sky-400 font-medium tracking-widest uppercase">MES COMPETENCES</p>
          <h1 className="text-4xl md:text-5xl mt-2 font-bold">
            Stack <span className="italic text-sky-500 font-normal">Techniques</span>
          </h1>
        </div>

        {/* Grille responsive : 2 colonnes sur mobile, 4 sur tablette/desktop */}
        <div className="max-w-4xl m-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 p-4">
            
            {/* Item HTML5 */}
            <div className="flex flex-col items-center group hover:scale-110 transition-all duration-300">
              <div className="btn p-8 h-auto aspect-square hover:border-sky-500 hover:bg-sky-100 hover:text-sky-500 mb-3">
                <Code size={32} />
              </div>
              <p className="font-medium group-hover:text-sky-500 transition-colors">HTML5</p>
            </div>

            {/* Item CSS3 */}
            <div className="flex flex-col items-center group hover:scale-110 transition-all duration-300">
              <div className="btn p-8 h-auto aspect-square hover:border-sky-500 hover:bg-sky-100 hover:text-sky-500 mb-3">
                <Brush size={32} />
              </div>
              <p className="font-medium group-hover:text-sky-500 transition-colors">CSS3</p>
            </div>

            {/* Item JS */}
            <div className="flex flex-col items-center group hover:scale-110 transition-all duration-300">
              <div className="btn p-8 h-auto aspect-square hover:border-sky-500 hover:bg-sky-100 hover:text-sky-500 mb-3">
                <SquareTerminal size={32} />
              </div>
              <p className="font-medium group-hover:text-sky-500 transition-colors">JavaScript</p>
            </div>

            {/* Item React */}
            <div className="flex flex-col items-center group hover:scale-110 transition-all duration-300">
              <div className="btn p-8 h-auto aspect-square hover:border-sky-500 hover:bg-sky-100 hover:text-sky-500 mb-3">
                <RefreshCw size={32} />
              </div>
              <p className="font-medium group-hover:text-sky-500 transition-colors">React.js</p>
            </div>

            {/* Item PHP */}
            <div className="flex flex-col items-center group hover:scale-110 transition-all duration-300">
              <div className="btn p-8 h-auto aspect-square hover:border-sky-500 hover:bg-sky-100 hover:text-sky-500 mb-3">
                <ChevronsLeftRightEllipsis size={32} />
              </div>
              <p className="font-medium group-hover:text-sky-500 transition-colors">PHP</p>
            </div>

            {/* Item Laravel */}
            <div className="flex flex-col items-center group hover:scale-110 transition-all duration-300">
              <div className="btn p-8 h-auto aspect-square hover:border-sky-500 hover:bg-sky-100 hover:text-sky-500 mb-3">
                <DatabaseBackup size={32} />
              </div>
              <p className="font-medium group-hover:text-sky-500 transition-colors">LARAVEL</p>
            </div>

            {/* Item Tailwind */}
            <div className="flex flex-col items-center group hover:scale-110 transition-all duration-300">
              <div className="btn p-8 h-auto aspect-square hover:border-sky-500 hover:bg-sky-100 hover:text-sky-500 mb-3">
                <Palette size={32} />
              </div>
              <p className="font-medium group-hover:text-sky-500 transition-colors">Tailwind CSS</p>
            </div>

            {/* Item Bootstrap */}
            <div className="flex flex-col items-center group hover:scale-110 transition-all duration-300">
              <div className="btn p-8 h-auto aspect-square hover:border-sky-500 hover:bg-sky-100 hover:text-sky-500 mb-3">
                <PaintRoller size={32} />
              </div>
              <p className="font-medium group-hover:text-sky-500 transition-colors">Bootstrap</p>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Competences;