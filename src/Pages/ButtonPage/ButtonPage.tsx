import PageHeader from "../PageHeader/PageHeader";
import ButtonIncidents from "../../assets/images/ButtonIncidents.png";
import "./ButtonPage.scss";
import { useEffect, useState } from "react";
import { getLastButtonDate } from "../../database/LastButtonData";
import MomentComponent from "../../components/Moments/MomentComponent/MomentComponent";
import * as ButtonAssets from "../../assets/Buttons/Index/ButtonAssetsIndex";
import { ButtonMoments } from "../../containers/ButtonMomentsContainer";

function ButtonPage() {
  const [daysSinceLastButton, setDaysSinceLastButton] = useState<number>();

  useEffect(() => {
    calculateDays();
  }, []);

  const calculateDays = async () => {
    const lastButtonDateString = await getLastButtonDate();
    const lastButtonDate = new Date(lastButtonDateString as string);
    const today = new Date(Date.now());
    let diff = Math.abs(lastButtonDate.getTime() - today.getTime());
    let diffDays = Math.ceil(diff / (1000 * 60 * 60 * 24));
    setDaysSinceLastButton(diffDays);
  };

  return (
    <div id="ButtonPage">
      <PageHeader image={""} class={"header-container purple"} />
      <div className="button-page-container">
        <div className="days-since-incident-container">
          <a
            href="https://youtu.be/x2cyP6KJ0Uc?t=10097"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={ButtonIncidents}
              alt="Days since last button"
              className="button-incidents-image"
            />
          </a>
          <div className="button-page-count">{daysSinceLastButton}</div>
        </div>

        <div className="button-stats-subheader">
          <div className="body-header-center">
            <span>Total Button Hits: 123</span>
          </div>
          <div className="body-header-center">
            <span>Episodes: 70 (of 172) OR 40.69%</span>
          </div>
          <div className="top-moments-container">
            <div className="right-subheader">
              <MomentComponent
                image={ButtonAssets.FirstButton_OTR63}
                text={"First Button"}
                url={"https://youtu.be/XhxNbAgQf6E?t=758"}
                headerText={"OTR #63"}
              ></MomentComponent>
              <MomentComponent
                image={ButtonAssets.EarliestButton}
                text={"Earliest Button"}
                url={"https://www.youtube.com/watch?v=Tzjt_KVK58w&t=1s"}
                headerText={"OTR #83"}
              ></MomentComponent>
              <MomentComponent
                image={ButtonAssets.DJKhaled1_H3TV85}
                text={"Most Buttoned Segment"}
                url={"https://www.youtube.com/watch?v=ETvW-4y6gMw&t=5929s"}
                headerText={"H3TV #85"}
              ></MomentComponent>
            </div>
          </div>
        </div>
        <div className="body-header">All Button Moments</div>
        <div className="button-page-body">
          {ButtonMoments.map((moment) => (
            <MomentComponent
              image={
                moment.image ? moment.image : moment.episode.getThumbnail()
              }
              text={moment.title}
              url={moment.url}
              headerText={moment.episode.shortTitle}
            ></MomentComponent>
          ))}
          <div className="body-header-center">
            <span>{123 - ButtonMoments.length} More to go - Coming Soon!</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ButtonPage;
