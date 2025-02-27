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

    const latestButton = buttonMoments![buttonMoments!.length - 1]
    
    const latestEpisode = episodes.filter((x : Episode) => x.type == latestButton.episodeType && x.number == latestButton.episodeNumber);
    const lastButtonDate = new Date(latestEpisode[0].date as string);
    
    const today = new Date(Date.now());
    let diff = Math.abs(lastButtonDate.getTime() - today.getTime());
    let diffDays = Math.ceil(diff / (1000 * 60 * 60 * 24));
    setDaysSinceLastButton(diffDays - 1);
  };

  useEffect(() => {    
    if(buttonMoments == undefined || buttonMoments.length == 0){
      setButtonMoments(moments.filter(x => x.tags?.includes(Tag.Button)).sort((a, b) => {
        let dateA = new Date(episodes.filter((x : Episode) => x.type == a.episodeType && x.number == a.episodeNumber)[0].date);
        let dateB = new Date(episodes.filter((x : Episode) => x.type == b.episodeType && x.number == b.episodeNumber)[0].date);
        return dateA.getTime() - dateB.getTime();
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
              <span>Total Button Hits: {buttonMoments.length}</span>
            }
          </div>
          {/* <div className="body-header-center">
            <span>Episodes: 70 (of 172) OR 40.69%</span>
          </div> */}
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
          {moments.filter(x => x.tags?.includes(Tag.Button)).map((moment) => (
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
