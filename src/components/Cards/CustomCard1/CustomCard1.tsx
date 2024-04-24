import "./CustomCard1.scss";

type Props = {
  title: string;
  image: string;
  onClickCallback: () => void;
  comingSoon: boolean;
};

function CustomCard1(props: Props) {
  return (
    <div id="CustomCard1" onClick={() => props.onClickCallback()}>
      {props.comingSoon && (
        <div className="coming-soon">
          <div className="coming-soon-text">Coming Soon</div>
        </div>
      )}

      <div
        className={
          props.comingSoon
            ? "custom-card-container comingsoon"
            : "custom-card-container"
        }
      >
        <img
          className={
            props.comingSoon
              ? "custom-card-image grayscale"
              : "custom-card-image"
          }
          src={props.image}
        />
        <div className="custom-card-footer">
          <div className="custom-card-footer-title">{props.title}</div>
        </div>
      </div>
    </div>
  );
}

export default CustomCard1;
