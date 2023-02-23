// import React from 'react';
import "../styles/TitleHousing.scss";
// import StarGrey from '.././assets/images/star_grey.svg';
// import StarPink from '.././assets/images/star_pink.svg';

export default function ScaleStar(props) {
  return (
    <div className='housingRating'>
      {[1, 2, 3, 4, 5].map((val) => {
        return <span className={props.rating <= val ? "on" : ""}> ★ </span>;
        //  return <img src={StarGrey} alt='notation' />;

        //  return {(props.rating) == val ? <img src={StarGrey} alt="notation"/> : <img src={StarPink} alt="notation"/> }
      })}
    </div>
  );
}

// METHODE
// const starPink =
