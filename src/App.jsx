import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // N'oubliez pas l'import du CSS !
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
      once: false
    });
  }, []);
  return (
    <>
      <Navbar />

      <div id="accueil">
        <Accueil />
      </div>

      <div className="bg-gray-100 pt-6" id="projet">
        <Projets />
        <Competences />
      </div>

      <div id="about" className="pt-6">
        <Apropos />
      </div>

      <div className="mx-1 md:mx-4 pt-8" id="contact">
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;
