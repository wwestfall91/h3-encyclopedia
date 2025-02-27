import { Moment } from "../../../models/Moments/Moment";
import "./MomentComponent.scss";
import * as EpisodeHelpers from '../../../Helpers/EpisodeHelpers';
import { useDataContext } from "../../../context/DataContext";
import { useEffect, useState } from "react";

type Props = {
  moment: Moment;
  showEpisodeTitle?: boolean;
  image?: string;
  customTitle?: string;
};

function MomentComponent(props: Props) {
  const {episodes} = useDataContext();
  const [showTitle, setShowTitle] = useState(false);
  
  useEffect(() => {
    if(props.showEpisodeTitle != undefined){
      setShowTitle(props.showEpisodeTitle)
    }
  }, []);

  return (
    <>
    {props.moment &&
      <div id="MomentComponent" key={`${props.moment.title}-${props.moment.url}`}>
        <a href={props.moment.url} target="_blank" rel="noopener noreferrer">
          <div className="moment-container">
            {showTitle &&
              <div className="moment-title-container">
                <div className="moment-title">{`${props.moment.episodeType} #${props.moment.episodeNumber}`}</div>
              </div>
            }
            <div className="moment-image-container">
              <img className="moment-image" src={props.moment.image ? 
                                                props.moment.image : props.image ? 
                                                props.image : EpisodeHelpers.GetEpisodeByTypeAndNumber(props.moment.episodeType, props.moment.episodeNumber, episodes).getThumbnail()}
                                                ></img>
            </div>
            <div className="moment-name">{props.customTitle ? props.customTitle : props.moment.title}</div>
          </div>
        </a>
      </div>
    }
    </>
  );
}

export default MomentComponent;
