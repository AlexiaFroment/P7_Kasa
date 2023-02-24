import "../styles/App.scss";
import "../styles/Accordion.scss";
import { useState, useRef, useEffect } from "react";
import AccordionImg from "../assets/images/accordion.svg";

export default function Accordion(props) {
  const [toggle, setToggle] = useState(false);
  const [heightEl, setHeightEl] = useState();

  const toggleAccordion = () => {
    setToggle(!toggle);
  };

  const refHeight = useRef();

  useEffect(() => {
    setHeightEl(`${refHeight.current.scrollHeight}px`);
  }, []);

  return (
    <div className={"accordion " + props.className}>
      <div onClick={toggleAccordion} className='accordionBanner'>
        <h3>{props.title}</h3>
        <img
          src={AccordionImg}
          alt='développer'
          className={toggle ? "btnAccordion rotate" : "btnAccordion"}
        />
      </div>
      <div
        ref={refHeight}
        className={toggle ? "accordionDetail animated" : "accordionDetail"}
        style={{ height: toggle ? `${heightEl}` : "0px" }}>
        {Array.isArray(props.content)
          ? props.content.map((item, index) => {
              return <li key={index}>{item}</li>;
            })
          : props.content}
      </div>
    </div>
  );
}
