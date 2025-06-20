import YouTube, { YouTubePlayer } from "react-youtube";
import { useDataContext } from "../../context/DataContext";
import { Episode } from "../../models/Episode";
import { Moment } from "../../models/Moments/Moment";
import "./modal.scss";
import { useEffect, useState } from "react";

// React-YouTube Documentation: https://developers.google.com/youtube/iframe_api_reference#Events
// React-YouTube Documentation: https://www.npmjs.com/package/react-youtube
export interface Props {
  title: string;
  description: string;
  timestamps: Moment[];
  isOpen: boolean;
  openModal: (setOpen: boolean) => void;
}

export function MomentsModal(props: Props) {
  const {episodes} = useDataContext();
  const [player, setPlayer] = useState<YouTubePlayer>();
  const [selectedMoment, setSelectedMoment] = useState<Moment>();
  const [previousPlayerState, setPreviousPlayerState] = useState();
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(false);
  const [hasAutoPlay, setHasAutoPlay] = useState<boolean>(true);

  const [totalTime, setTotalTime] = useState<number>();

  useEffect(() => {
    let time = 0;
    props.timestamps.map(x => {time += (x.endTime - x.startTime)})
    setTotalTime(time);
    
    props.timestamps.map(x => {
      if(x.endTime.toString() == ""){
        setHasAutoPlay(false);
        return;
      }
    })
  }, []);

  useEffect(() => {
    if(isAutoPlaying && !selectedMoment){
      setSelectedMoment(props.timestamps[0])
      onStateChange({data: 0})
    }
  }, [isAutoPlaying]);

  const beginAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying)
  }

  const onClick = (moment: Moment) => {
    if(!player)
      return;

    player.loadVideoById({'videoId': moment.getVideoId(), 'startSeconds': moment.startTime, endSeconds: (moment.endTime)}); // 'endSeconds': 60};  
    setSelectedMoment(moment);
  }

  const onReady = (event : any) => {
    setPlayer(event.target);
  }

  const onStateChange = async (event: any) => {
    if(event.data == 3 || event.data == -1) // If Buffering (3) OR Unstarted (-1), return
      return;

    if(previousPlayerState == event.data) // If the previousState was ENDED(0) and the current event state is also ENDED(0), do nothing.
      return;

    const currentIndex = props.timestamps.indexOf(selectedMoment!)
    setPreviousPlayerState(event.data);
    
    if(event.data == 0 && player && isAutoPlaying){
      const upcomingMoment = props.timestamps[currentIndex + 1];
      player.loadVideoById({'videoId': upcomingMoment.getVideoId(), 'startSeconds': upcomingMoment.startTime, endSeconds: upcomingMoment.endTime}); // 'endSeconds': 60};  
      setSelectedMoment(upcomingMoment)
    }
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
  } as any; 

  return (
    <div id="Modal" onClick={() => props.openModal(false)}>
    <div className="modal-background">
      <div className="modal-container" onClick={(e) => {e.stopPropagation();}}>
        <div className="modal-close-button" onClick={() => {props.openModal(false);}}>X</div>
        <div className="modal-video-container">
            <h3 className="video-title">{selectedMoment?.episodeName ?? "Select a Moment to start video"}</h3>
            <YouTube opts={opts} onReady={onReady} onStateChange={onStateChange} style={divStyle}></YouTube>
        </div>
        <div className="content-container">
          <div className="modal-header">
            <div className="modal-title">{props.title}</div>
            <div className="modal-description">{props.description}</div>
          </div>
          <div className="modal-data">
            <div className="data-section">
              <div className="title-section">
                <div className="related-links">Moments</div>
                {hasAutoPlay &&
                <div className={`autoplay-slider ${isAutoPlaying ? "on" : "off"}`} onClick={() => beginAutoPlay()}>
                  <div className={`autoplay-background ${isAutoPlaying ? "green" : "red"}`} >
                    <b>On</b>
                    <b>Off</b>
                  </div>
                  <div className={`autoplay-button ${isAutoPlaying ? "on" : "off"}`}>AUTO PLAY</div>
                </div>
                }
              </div>
              <div className="modal-links-container">
                {sortMomentsByDate(props.timestamps, episodes).map((moment) => (
                  <div key={moment.title + moment.url} className={`link-row ${selectedMoment?.title == moment.title ? "selected" : "" }`} onClick={() => {onClick(moment)}}>
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
                {props.timestamps.length === 0 &&
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
