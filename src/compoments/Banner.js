import "../styles/App.scss";
import "../styles/Banner.scss";

export default function Banner(props) {
  return (
    <div className={'banner ' + props.className}>
      <h1 className='titleBanner'>{props.title}</h1>
    </div>
  );
}
