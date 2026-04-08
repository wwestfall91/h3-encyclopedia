import ButtonIncidents from "../../assets/images/ButtonIncidents.png";
import MomentComponent from "../../components/Moments/MomentComponent/MomentComponent";
import { Episode } from "../../models/Episode";
import { useDataContext } from '../../context/DataContext';
import { Tag } from "../../models/enums/Tag";
import { useEffect, useState } from "react";
import { Moment } from "../../models/Moments/Moment";
import Coffee from "../../components/Coffee";
import "./ButtonPage.scss";

function ButtonPage() {
  const [daysSinceLastButton, setDaysSinceLastButton] = useState<number>(-1);
  const {moments, episodes} = useDataContext();
  const [buttonMoments, setButtonMoments] = useState<Moment[]>();

  const calculateDays = async () => {
    if(buttonMoments == undefined || buttonMoments.length == 0)
      return;

    const latestButton = buttonMoments[0]

    const today = new Date(Date.now());

    let diff = Math.abs(latestButton.date!.getTime() - today.getTime());
    let diffDays = Math.ceil(diff / (1000 * 60 * 60 * 24));
    
    setDaysSinceLastButton(diffDays - 1);
  };

  useEffect(() => {
    if(buttonMoments == undefined || buttonMoments.length == 0){
      setButtonMoments(moments.filter(x => x.tags?.includes(Tag.Button)).sort((a, b) => {
        let dateA = new Date(episodes.filter((x : Episode) => x.type == a.episodeType && x.number == a.episodeNumber)[0].date);
        let dateB = new Date(episodes.filter((x : Episode) => x.type == b.episodeType && x.number == b.episodeNumber)[0].date);
        return dateB.getTime() - dateA.getTime();
      }));
    }

    calculateDays();
      
  }, [moments, episodes, buttonMoments])

  return (
    <div id="ButtonPage">
      <Coffee></Coffee>
      <div className="button-page-container">
        {buttonMoments && daysSinceLastButton != -1 &&
        <div className="days-since-incident-container">
          <a
            href={buttonMoments[buttonMoments.length - 1].url}
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
        }

        <div className="button-stats-subheader">
          <div className="body-header-center">
            {buttonMoments &&
              <span>Total Button Hits: {buttonMoments.length + 40}</span>
            }
          </div>
          <div className="top-moments-container">
            {moments &&
            <div className="right-subheader">
              <MomentComponent
                moment={moments.filter(x => x.title == "First Button")[0]}
                showEpisodeTitle={true}
              ></MomentComponent>
              <MomentComponent
                moment={moments.filter(x => x.title == "Earliest Button")[0]}
                showEpisodeTitle={true}
              ></MomentComponent>
              <MomentComponent
                moment={moments.filter(x => x.title == "Most Buttoned Segment")[0]}
                showEpisodeTitle={true}
              ></MomentComponent>
            </div>
            }
          </div>
        </div>
        <div className="body-header">All Button Moments</div>
        <div className="button-page-body">
          {buttonMoments?.map((moment) => (
            <MomentComponent
              moment={moment}
              showEpisodeTitle={true}
            ></MomentComponent>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ButtonPage;
