import { DanMoments } from "../../../models/Moments/DanMoments";
import MomentComponent from "../../Moments/MomentComponent/MomentComponent";
import "./DanComponent.scss";

type Props = {
  onReturnClickCallback: () => void;
};

function DanComponent(props: Props) {
  function structureCorrectDateFormat(date: string) {
    const newDate = date.replace(/-/g, "/");

    if (newDate.split("/")[2].length > 2) {
      let day = newDate.split("/")[0];
      let month = newDate.split("/")[1];
      const year = newDate.split("/")[2];

      if (day.length == 1) {
        day = `0${day}`;
      }

      if (month.length == 1) {
        month = `0${month}`;
      }

      return `${year}/${month}/${day}`;
    }

    return newDate;
  }

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
                {section.moments
                  .sort(function (a, b) {
                    let dateA = structureCorrectDateFormat(a.episode.date);
                    let dateB = structureCorrectDateFormat(b.episode.date);

                    return Date.parse(dateA) / Date.parse(dateB);
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
