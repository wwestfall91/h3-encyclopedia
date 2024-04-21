import PageHeader from "../../../Pages/PageHeader/PageHeader";
import HeaderImage from "../../../assets/images/H3 Sound Station.png";
import MomentComponent from "../../Moments/MomentComponent/MomentComponent";
import { DanMoments } from "../../../models/Moments/DanMoments";
import "./CrewPage.scss";

export function CrewPage() {
  return (
    <>
      <PageHeader image={HeaderImage} class={"header-container purple"} />
      <div id="CrewPage">
        <button className="submit-button">Back</button>
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
    </>
  );
}

export default CrewPage;
