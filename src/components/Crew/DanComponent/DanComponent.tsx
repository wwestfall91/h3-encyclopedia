import { DanMoments } from "../../../models/Moments/DanMoments";
import MomentComponent from "../../Moments/MomentComponent/MomentComponent";
import "./DanComponent.scss";

type Props = {
  onReturnClickCallback: () => void;
};

function DanComponent(props: Props) {
  return (
    <div id="DanComponent">
      <button
        className="submit-button"
        onClick={() => props.onReturnClickCallback()}
      >
        Back
      </button>
      <div className="crew-page-section">
        {DanMoments.map((section) => (
          <>
            <div className="crew-page-subheader">{section.title}</div>
            <div className="crew-page-content">
              <div className="crew-page-moments-grid">
                {section.moments.map((moment) => (
                  <>
                    <MomentComponent
                      image={moment.image}
                      text={moment.title}
                      url={moment.url}
                    ></MomentComponent>
                  </>
                ))}
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default DanComponent;
