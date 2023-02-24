import "../styles/App.scss";
import Banner from "../compoments/Banner";
import Accordion from "../compoments/Accordion";
import dataAboutIt from "../assets/data/dataAboutIt.json";

export default function Apropos() {
  return (
    <div className='block'>
      <Banner className='bannerAboutIt' />
      <div className='contentAboutIt'>
        {dataAboutIt.map((about) => {
          return (
            <Accordion
              className='aPropos'
              key={about.key}
              title={about.title}
              content={about.content}
            />
          );
        })}
      </div>
    </div>
  );
}
