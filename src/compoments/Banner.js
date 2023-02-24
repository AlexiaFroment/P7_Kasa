import "../styles/App.scss";

export default function Banner(props) {
  return (
    <div className={'banner ' + props.className}>
      <h1>{props.title}</h1>
    </div>
  );
}
