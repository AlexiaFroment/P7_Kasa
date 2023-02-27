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
  const housingData = dataBase.find((housing) => housing.id === housingId);

  useEffect(() => {
    // const housingData = dataBase.filter((housing) => housing.id === housingId);
    setimagesSlideshow(housingData.pictures);
  }, [housingData]);

  const description = housingData.description;
  const equipement = housingData.equipments;

  return (
    <div className='block'>
      <Slideshow imagesSlideshow={imagesSlideshow} />
      <TitleHousing
        title={housingData.title}
        location={housingData.location}
        tags={housingData.tags.map((tag, index) => {
          return (
            <span className='tag' key={index}>
              {tag}
            </span>
          );
        })}
        hostFirstName={housingData.host.name.split(" ")[0]}
        hostName={housingData.host.name.split(" ")[1]}
        img={housingData.host.picture}
        rating={housingData.rating}
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
