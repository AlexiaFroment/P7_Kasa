import "../styles/App.scss";
import { Routes, Route } from "react-router-dom";
import Navbar from "../compoments/Navbar";
import Footer from "../compoments/Footer";
import Accueil from "./Accueil";
import Apropos from "./Apropos";
import Logement from "./Logement";
import Erreur from "./Erreur";
// import CardHouse from "./compoments/CardHouse";

function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/a_propos" element={<Apropos />} />
        <Route path="/logement/:id" element={<Logement />} />
        <Route path="*" element={<Erreur />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
