import "../styles/App.scss";
import Banner from "../compoments/Banner";
import Gallery from "../compoments/Gallery";
import { Outlet } from "react-router-dom";

export default function Accueil() {
  return (
    <>
    <div className='block'>
      <Banner 
      className='bannerHome'
      title={"Chez vous, partout et ailleurs"}
       />
      <Gallery />
      <Outlet />
    </div>
    </>
  );
}
