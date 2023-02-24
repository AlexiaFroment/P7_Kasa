import "../styles/TitleHousing.scss";

export default function TitleHousing(props) {
  return (
    <div className='title'>
      <div className='module1'>
        <div className='titleHousing'>
          <h2>{props.title}</h2>
          <span>{props.location}</span>
        </div>
        <div>{props.tags}</div>
      </div>

      <div className='module2'>
        <div className='ownerHousing'>
          <div className='ownerName'>
            <span>{props.hostFirstName}</span>
            <span>{props.hostName}</span>
          </div>
          <img
            className='ownerPic'
            src={props.img}
            alt='photo du propriétaire'
          />
        </div>
        <div className='housingRating'>
          {[1, 2, 3, 4, 5].map((val, index) => {
            return <span key={index} className={props.rating >= val ? "on" : ""}> ★ </span>;
          })}
        </div>

      </div>
    </div>
  );
}
