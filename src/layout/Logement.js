import "../styles/App.scss";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import dataBase from "../assets/data/dataBase.json";
import Slideshow from "../compoments/Slideshow";
import TitleHousing from "../compoments/TitleHousing";
import Accordion from "../compoments/Accordion";

export default function Logements() {
  const [imagesSlideshow, setimagesSlideshow] = useState([]);
  const housingId = useParams("id").id;
  const housingData = dataBase.filter((housing) => housing.id === housingId);

  useEffect(() => {
    const housingData = dataBase.filter((housing) => housing.id === housingId);
    setimagesSlideshow(housingData[0].pictures);
  }, [housingId]);

  // const rating = housingData[0].rating;
  const description = housingData[0].description;
  const equipement = housingData[0].equipments;

  return (
    <div className='block'>
      <Slideshow imagesSlideshow={imagesSlideshow} />
      <TitleHousing
        title={housingData[0].title}
        location={housingData[0].location}
        tags={housingData[0].tags.map((tag, index) => {
          return (
            <span className='tag' key={index}>
              {tag}
            </span>
          );
        })}
        hostFirstName={housingData[0].host.name.split(" ")[0]}
        hostName={housingData[0].host.name.split(" ")[1]}
        img={housingData[0].host.picture}
        rating={housingData[0].rating}
      />

      <div className='descHousing'>
        <Accordion
          className='logement'
          title={"Description"}
          content={description}></Accordion>
        <Accordion
          className='logement'
          title={"Équipements"}
          content={equipement}></Accordion>
      </div>
    </div>
  );
}
