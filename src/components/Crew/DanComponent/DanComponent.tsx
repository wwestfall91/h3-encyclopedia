import { useState } from "react";
import { DanMoments } from "../../../models/Moments/DanMoments";
import MomentComponent from "../../Moments/MomentComponent/MomentComponent";
import "./DanComponent.scss";
import RequestCrewMomentModal from "../../Modals/RequestCrewMomentModal/RequestCrewMomentModal";

type Props = {
  onReturnClickCallback: () => void;
};

function DanComponent(props: Props) {
  const [showRequestModal, setShowRequestModel] = useState(false);

  return (
    <div id="DanComponent">
      {showRequestModal && (
        <RequestCrewMomentModal
          toggleShown={setShowRequestModel}
        ></RequestCrewMomentModal>
      )}
      <div className="dan-component-subheader">
        <button
          className="dan-component-button"
          onClick={() => props.onReturnClickCallback()}
        >
          Back
        </button>
        <button
          className="dan-component-button"
          onClick={() => setShowRequestModel(true)}
        >
          Request Dan Moment
        </button>
      </div>
      <div className="crew-page-section">
        {DanMoments.map((section) => (
          <>
            <div className="crew-page-subheader">{section.title}</div>
            <div className="crew-page-content">
              <div className="crew-page-moments-grid">
                {section.moments
                  .sort(function (a, b) {
                    return (
                      Date.parse(a.episode.date) / Date.parse(b.episode.date)
                    );
                  })
                  .map((moment) => (
                    <>
                      <MomentComponent
                        image={moment.image}
                        text={moment.title}
                        url={moment.url}
                        date={moment.episode.date}
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
