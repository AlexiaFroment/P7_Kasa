import React from "react";
import { Link } from "react-router-dom";
import "../styles/Erreur.scss";

export default function Erreur() {
    return (
      <div className="erreur">
        <p className="codeErreur">404</p>
        <p className="subtitleErreur">Oups! La page que vous avez demandez n'existe pas</p>
        <Link to="/">Retourner sur la page d'accueil</Link>
      </div>
    );
    
}