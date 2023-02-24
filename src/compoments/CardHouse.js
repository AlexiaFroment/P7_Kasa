import "../styles/App.scss";
import { Link } from "react-router-dom";

export default function CardHouse(props) {
  return (
    <Link className='cardHouse' to={`/logement/${props.id}`}>
      <img src={props.cover} alt='photos logement' />
      <p>{props.title}</p>
    </Link>
  );
}
