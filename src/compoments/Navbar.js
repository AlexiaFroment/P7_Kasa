import "../styles/App.scss";
import { NavLink } from "react-router-dom";
import Logo from "../assets/images/Logo_Navbar.png"

export default function Navbar() {
  return (
    <nav className="navbar">
      <NavLink
      to="/">
      <img src={Logo} alt="Logo" className="logoNavbar" />
      </NavLink>
      <div className="link">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "linkActive" : "")}>
          Accueil
        </NavLink>
        <NavLink
          to="/a_propos"
          className={({ isActive }) => (isActive ? "linkActive" : "")}>
          A propos
        </NavLink>
      </div>
    </nav>
  );
}
