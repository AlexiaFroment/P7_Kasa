import "../styles/App.scss";
import CardHouse from "./CardHouse";
import dataBase from "../assets/data/dataBase.json";

export default function Gallery() {
  return (
    <div className='galleryReception'>
      {dataBase.map((card) => {
        return (
          <CardHouse
            key={card.id}
            id={card.id}
            title={card.title}
            cover={card.cover}
          />
        );
      })}
    </div>
  );
}
