import { Routes, Route } from "react-router-dom";
import "./styles/App.scss";
import Accueil from "./layout/Accueil";
import Apropos from "./layout/Apropos";
import Erreur from "./layout/Erreur";
import Logement from "./layout/Logement";
import Navbar from "./compoments/Navbar";
import Footer from "./compoments/Footer";
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
