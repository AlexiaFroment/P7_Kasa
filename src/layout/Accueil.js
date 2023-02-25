import "../styles/App.scss";
import Banner from "../compoments/Banner";
import Gallery from "../compoments/Gallery";

export default function Accueil() {
  return (
    <>
    <div className='block'>
      <Banner 
      className='bannerHome'
      title={"Chez vous, partout et ailleurs"}
       />
      <Gallery />
    </div>
    </>
  );
}
