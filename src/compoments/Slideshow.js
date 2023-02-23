import "../styles/App.scss";
import "../styles/Slideshow.scss";
import { useState } from "react";
import ArrowBack from "../assets/images/arrow_back_24px.svg";
import ArrowForward from "../assets/images/arrow_forward_24px.svg";

export default function Slidershow(props) {
 
  const [currentFolio, setcurrentFolio] = useState(0);

  const nextSlide = () => {
    if (currentFolio !== props.imagesSlideshow.length - 1) {
      setcurrentFolio(currentFolio + 1);
    } else if (currentFolio === props.imagesSlideshow.length - 1) {
      setcurrentFolio(0);
    }
  };
  const prevSlide = () => {
    if (currentFolio !== 0) {
      setcurrentFolio(currentFolio - 1);
    } else if (currentFolio === 0) {
      setcurrentFolio(props.imagesSlideshow.length - 1);
    }
  };

  return (
    <div className='slideShow'>
      <img
        className='slideShow slideShow_pictures'
        src={props.imagesSlideshow[currentFolio]}
        alt='photos logement'
      />
      <div className='slideShow_container'></div>
      <img
        className='slideShow_btn slideShow_btn_right'
        src={ArrowBack}
        alt='next slide'
        onClick={nextSlide}
      />
      <img
        className='slideShow_btn slideShow_btn_left'
        src={ArrowForward}
        alt='prev slide'
        onClick={prevSlide}
      />
      <p className='slideShow_folio'>
        {currentFolio + 1}/{props.imagesSlideshow.length}
      </p>
    </div>
  );
}
