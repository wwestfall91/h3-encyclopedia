import YouTube, { YouTubePlayer } from "react-youtube";
import { useDataContext } from "../../context/DataContext";
import { Episode } from "../../models/Episode";
import { Moment } from "../../models/Moments/Moment";
import "./modal.scss";
import { useEffect, useState } from "react";

export interface Props {
  title: string;
  description: string;
  timeStamps: Moment[];
  isOpen: boolean;
  openModal: (setOpen: boolean) => void;
}

export function MomentsModal(props: Props) {
  const {episodes} = useDataContext();
  const [player, setPlayer] = useState<YouTubePlayer>();
  const [selectedMoment, setSelectedMoment] = useState<Moment>();

  useEffect(() => {
    if(props.timeStamps.length <= 0 || !player)
      return;
    
    setSelectedMoment(props.timeStamps[0]);
    player.loadVideoById(props.timeStamps[0].getVideoId(), props.timeStamps[0].getTime())
  }, [props.timeStamps.length]);

  useEffect(() => {
    if(!player || !selectedMoment)
      return;

    player.loadVideoById(selectedMoment.getVideoId(), selectedMoment.getTime())
    player.cueVideoById(props.timeStamps[1].getVideoId(), selectedMoment.getTime())
  }, [selectedMoment]);

  const onReady = (event : any) => {
    setPlayer(event.target);
  }

  const divStyle = {
    display:'flex',
    width:'700px',
    height:'382px',
    border: '1px solid black',
    borderRadius: '5px',
    boxShadow: '10px 10px 20px 10px rgba(0, 0, 0, 0.555)'
  }

  const opts = {
    width:'700px',
    height:'380px',
    borderRadius: '10px',
    playerVars: {
      autoplay: 0,
    },
  }; 

  return (
    <div id="Modal" onClick={() => props.openModal(false)}>
    <div className="modal-background">
      <div className="modal-container" onClick={(e) => {e.stopPropagation();}}>
        <div className="modal-close-button" onClick={() => {props.openModal(false);}}>X</div>
        <div className="modal-video-container">
            <h3 className="video-title">{selectedMoment?.episodeName ?? "Select a Moment to start video"}</h3>
            <YouTube opts={opts} onReady={onReady} style={divStyle}></YouTube>
        </div>
        <div className="content-container">
          <div className="modal-header">
            <div className="modal-title">{props.title}</div>
            <div className="modal-description">{props.description}</div>
          </div>
          <div className="modal-data">
            <div className="data-section">
              <div className="related-links">Moments</div>
              <div className="modal-links-container">
                {sortMomentsByDate(props.timeStamps, episodes).map((moment) => (
                  <div className={`link-row ${selectedMoment?.title == moment.title ? "selected" : "" }`} onClick={() => {setSelectedMoment(moment)}}>
                    <div className="related-links-date">
                      {episodes.filter((x : Episode) => x.type == moment.episodeType && x.number == moment.episodeNumber)[0].date}
                    </div>
                    <div className="related-links-hyperlink">
                      {moment.title}
                    </div>
                    <div className="related-links-episode">
                      {moment.getShortEpisodeTitle()}
                    </div>                
                  </div>
                ))}
                {props.timeStamps.length === 0 &&
                    <div className="no-timestamps-available">
                      No episodes available
                    </div>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

function sortMomentsByDate(moments: Moment[], episodes: Episode[]) {
  return moments.sort((a, b) => {
    let dateA = new Date(episodes.filter((x : Episode) => x.type == a.episodeType && x.number == a.episodeNumber)[0].date);
    let dateB = new Date(episodes.filter((x : Episode) => x.type == b.episodeType && x.number == b.episodeNumber)[0].date);
    return dateA.getTime() - dateB.getTime();
  });
}
