import { DanMoments } from "../../../models/Moments/DanMoments";
import MomentComponent from "../MomentComponent/MomentComponent";
import "./MultiMomentComponent.scss";

function MultiMomentComponent() {
  return (
    <div id="MultiMomentComponent">
      <div className="multi-moment-grid">
        {DanMoments.map((section) => (
          <>
            {section.moments.map((moment) => (
              <div className="multi-moment-item">
                <MomentComponent
                  image={moment.image}
                  text={moment.title}
                  url={moment.url}
                  headerText={moment.episode.date}
                ></MomentComponent>
              </div>
            ))}
          </>
        ))}
      </div>
    </div>
  );
}

export default MultiMomentComponent;
