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
  timeStamps: Moment[];
  isOpen: boolean;
  openModal: (setOpen: boolean) => void;
}

export function MomentsModal(props: Props) {
  const {episodes} = useDataContext();
  const [player, setPlayer] = useState<YouTubePlayer>();
  const [selectedMoment, setSelectedMoment] = useState<Moment>();
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(false);
  const [autoPlayIndex, setAutoPlayIndex] = useState<number>(0);

  // useEffect(() => {
  //   if(!player || !selectedMoment)
  //     return;

  //   console.log("Player: ", player)
  //   console.log(`LOADING ${selectedMoment.title}`)
  //   // player.cueVideoById({'videoId': selectedMoment.getVideoId(), 'startSeconds': 50, 'endSeconds': 60})

  // }, [selectedMoment]);
  const beginAutoPlay = () => {
    if(!player)
      return

    setAutoPlayIndex(0);
    setIsAutoPlaying(true)
    setSelectedMoment(props.timeStamps[0])
    player.cueVideoById({'videoId': props.timeStamps[0].getVideoId(), 'startSeconds': 50, 'endSeconds': 60});  
    player.playVideo();
  }

  useEffect(() => {
    onStateChange(undefined)
  }, [isAutoPlaying]);

  // const onAutoPlay = async () => {
  //   if(!isAutoPlaying)
  //     return;

  //   if(!player)
  //     return;

  //   let currentIndex = 0; // Assume the index is 0, unless there is a selectedMoment
  //   let nextMoment = props.timeStamps[0];

  //   if(selectedMoment){
  //     currentIndex = props.timeStamps.indexOf(selectedMoment!); // Otherwise, find the current index
  //     nextMoment = props.timeStamps[currentIndex + 1];
  //   }

  //   if(await player.getPlayerState() == YouTube.PlayerState.UNSTARTED){
  //     player.playVideo();
  //   }

  //   if(await player.getPlayerState() == YouTube.PlayerState.ENDED){
  //     player.cueVideoById({'videoId': nextMoment.getVideoId(), 'startSeconds': 50, 'endSeconds': 60})
  //   }

  //   if(await player.getPlayerState() == YouTube.PlayerState.CUED){
  //     player.playVideo();
  //     setSelectedMoment(nextMoment)
  //   }
  // }

  // const onClick = (moment: Moment) => {
  //   console.log("ON CLICK")
  //   if(!player)
  //     return;

  //   player.cueVideoById({'videoId': moment.getVideoId(), 'startSeconds': 50, 'endSeconds': 60});  
  // }

  const onReady = (event : any) => {
    setPlayer(event.target);

    // if(!selectedMoment)
    //   return

    // const currentIndex = props.timeStamps.indexOf(selectedMoment);
    // const nextMoment = props.timeStamps[currentIndex + 1];

    // setSelectedMoment(nextMoment)
  }

  const onStateChange = async (event: any) => {
    if(!isAutoPlaying)
      return;

    if(!player)
      return;

    let currentIndex = 0; // Assume the index is 0, unless there is a selectedMoment
    let nextMoment = props.timeStamps[0];

    if(selectedMoment){
      currentIndex = props.timeStamps.indexOf(selectedMoment!); // Otherwise, find the current index
      nextMoment = props.timeStamps[currentIndex + 1];
    }

    if(await player.getPlayerState() == YouTube.PlayerState.ENDED){
      player.cueVideoById({'videoId': nextMoment.getVideoId(), 'startSeconds': 50, 'endSeconds': 60})
    }

    if(await player.getPlayerState() == YouTube.PlayerState.UNSTARTED){
      player.playVideo();
      setSelectedMoment(nextMoment)
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
  }; 

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
              <div className="related-links" onClick={() => beginAutoPlay()}>Moments</div>
              <div className="modal-links-container">
                {sortMomentsByDate(props.timeStamps, episodes).map((moment) => (
                  <div className={`link-row ${selectedMoment?.title == moment.title ? "selected" : "" }`} onClick={() => {onClick(moment)}}>
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
