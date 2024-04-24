import "./MomentComponent.scss";

type Props = {
  image: string;
  text: string;
  url: string;
  date: string;
};

function MomentComponent(props: Props) {
  return (
    <div id="MomentComponent">
      <a href={props.url} target="_blank" rel="noopener noreferrer">
        <div className="moment-container">
          <div className="moment-date">{props.date}</div>
          <div className="moment-image-container">
            <img className="moment-image" src={props.image}></img>
          </div>
          <div className="moment-name">{props.text}</div>
        </div>
      </a>
    </div>
  );
}

export default MomentComponent;
