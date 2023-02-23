import "../styles/TitleHousing.scss"

export default function ScaleStar(props) {
   
  return (
    <div className='housingRating'>
    {[1, 2, 3, 4, 5].map((val)=>{
     return <span className={props.rating <= val ? "on" : ""}> ★ </span>
    })}
    </div>
  )
}
