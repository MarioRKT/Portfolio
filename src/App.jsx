import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Accueil from "./pages/Accueil";
import Apropos from "./pages/Apropos";
import Competences from "./pages/Competences";
import Contact from "./pages/Contact";
import Projets from "./pages/Projets";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <div className="bg-slate-950 text-white min-h-screen scroll-smooth selection:bg-sky-500 selection:text-white">
      {/* Navbar Fixe / Sticky */}
      <Navbar />

      {/* Main Content avec sections fluides */}
      <main className="flex flex-col">
        <section id="accueil" className="scroll-mt-20">
          <Accueil />
        </section>

        <section id="projet" className="scroll-mt-20">
          <Projets />
        </section>

        <section id="competences" className="scroll-mt-20">
          <Competences />
        </section>

        <section id="about" className="scroll-mt-20">
          <Apropos />
        </section>

        <section id="contact" className="scroll-mt-20">
          <Contact />
        </section>
      </main>

      {/* Pied de page */}
      <Footer />
    </div>
  );
}

export default App;
