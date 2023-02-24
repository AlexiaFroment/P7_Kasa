import "./styles/App.scss";
import { Routes, Route } from "react-router-dom";
import Navbar from "./compoments/Navbar";
import Accueil from "./layout/Accueil";
import Apropos from "./layout/Apropos";
import Logement from "./layout/Logement";
import Erreur from "./layout/Erreur";
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
