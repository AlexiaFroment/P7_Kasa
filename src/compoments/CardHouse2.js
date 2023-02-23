// import React from "react";
import "../styles/CardHouse.scss";
import { Link } from "react-router-dom";

export default function CardHouse(props) {
  return (
    <Link to={`/logement/${props.id}`}>
      <div className='cardHouse'>
        <img src={props.cover} alt='photos logement' />
        <p>{props.title}</p>
      </div>
    </Link>
  );
}
