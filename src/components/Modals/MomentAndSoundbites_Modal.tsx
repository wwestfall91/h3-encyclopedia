import YouTube from "react-youtube";
import { Episode } from "../../models/Episode";
import { Moment } from "../../models/Moments/Moment";
import { Soundbite } from "../../models/Soundbite";
import "./MomentAndSoundbites_Modal.scss";
import { useDataContext } from "../../context/DataContext";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export interface Props {
  title: string;
  description: string;
  moments: Moment[];
  soundbites: Soundbite[];
  isOpen: boolean;
  openModal: (setOpen: boolean) => void;
}

export function MomentAndSoundbites_Modal(props: Props) {
  const [isPlaying, setIsPlaying] = useState(false);
  const {episodes} = useDataContext();
  const [player, setPlayer] = useState<any>(null);
  const [selectedMoment, setSelectedMoment] = useState<Soundbite | Moment>();
  const [isMobile, setIsMobile] = useState(false);
  const [soundbiteAudio, setSoundbiteAudio] = useState<HTMLAudioElement>();
  const [selectedCategory, setSelectedCategory] = useState<number>(0);

  useEffect(() => {
    setPlayer(null)
    setIsMobile(window.innerWidth < 1400);
    setSelectedCategory(0);
  }, []);

  useEffect(() => {
    if(props.moments.length <= 0 || !player)
      return;
    
    setSelectedMoment(props.moments[0]);
    player.loadVideoById(props.moments[0].getVideoId(), props.moments[0].getTime())
  }, [props.moments.length]);

  useEffect(() => {
    if(!player || !selectedMoment)
      return;

    player.loadVideoById(selectedMoment.getVideoId(), selectedMoment.getTime())
  }, [selectedMoment]);

  const onReady = (event : any) => {
    setPlayer(event.target);
  }

  async function PlayAudio(soundbite : Soundbite) {
    if(!soundbiteAudio){  // On the first pass, we need to setup a local audio variable. If we remove this, pausing functionality will break.
      let audio = new Audio(`../../../soundbites/${soundbite.sound}`);
      setSoundbiteAudio(audio)

      audio.load()

      setIsPlaying(true);
  
      if (isPlaying){
        audio.pause()
        audio.currentTime=0
        setIsPlaying(false);
        return;
      }
  
      audio.addEventListener("ended", function () {
        audio.currentTime = 0;
        setIsPlaying(false);
      });
  
      await audio.play();
    }

    if(soundbiteAudio){ // For every subsequent click, we want to use our state
      soundbiteAudio.load()

      setIsPlaying(true);
  
      if (isPlaying){
        soundbiteAudio.pause()
        soundbiteAudio.currentTime=0
        setIsPlaying(false);
        return;
      }
  
      soundbiteAudio.addEventListener("ended", function () {
        soundbiteAudio.currentTime = 0;
        setIsPlaying(false);
      });
  
      await soundbiteAudio.play();
    }
  }


  const divStyle = {
    display:'flex',
    width:'750px',
    height:'402px',
    border: '1px solid black',
    borderRadius: '5px',
    margin:'15px',
    boxShadow: '10px 10px 20px 10px rgba(0, 0, 0, 0.555)'
  }

  const opts = {
    width:'750px',
    height:'400px',
    borderRadius: '10px',
    playerVars: {
      autoplay: 0,
    },
  } as any;  

  const modalContent = (
    <div id="MomentAndSoundbites_Modal" onClick={() => props.openModal(false)}>
      <div className="modal-background" onClick={() => props.openModal(false)}>
        <div className="modal-container" onClick={(e) => {e.stopPropagation();}}>
          <div className="modal-close-button" onClick={() => {props.openModal(false);}}>X</div>
          {!isMobile &&
            <div className="modal-video-container">
                <YouTube opts={opts} onReady={onReady} style={divStyle}></YouTube>
            </div>
          }
          <div className="content-container">
            <div className="modal-header">
              <div className="modal-title">{props.title}</div>
                <div className="category-buttons-section">
                  <div className={selectedCategory == 0 ? "category-button selected-button" : "category-button"} onClick={() => setSelectedCategory(0)}>
                      Top Moments
                  </div>
                  <div className={selectedCategory == 1 ? "category-button selected-button" : "category-button"} onClick={() => setSelectedCategory(1)}>
                      Soundbites
                  </div>
                  <div className={selectedCategory == 2 ? "category-button selected-button" : "category-button"} onClick={() => setSelectedCategory(2)}>
                      Misc Moments
                  </div>
                </div>
            </div>
            <div className="modal-description">{props.description}</div>
            <div className="modal-data">
              
              <div className="data-section">                
                {selectedCategory == 1 &&
                <>
                    <div className="related-links">Soundbites</div>
                    {props.soundbites.length === 0 && selectedCategory == 1 &&
                      <div className="no-timestamps-available">Currently there are no soundbites for this individual</div>
                    }
                    <div className="modal-links-container-soundbites">
                      {sortSoundbitesByDate(props.soundbites).map((soundbite) => (
                        <>
                          {soundbite.episodetype &&
                          <div className={`link-row ${selectedMoment?.title == soundbite.title ? "selected" : "" }`} onClick={() => {{isMobile ? window.open(`${soundbite.url}`, '_blank') : setSelectedMoment(soundbite)}}}>
                            <div className="related-links-date">
                              {episodes.filter((x : Episode) => x.type == soundbite.episodetype && x.number == soundbite.episodenumber)[0].date}
                            </div>
                            <div className="related-links-hyperlink">
                              {soundbite.title}
                            </div>
                            <div className="related-links-episode">
                              {soundbite.getShortEpisodeTitle()}
                            </div>
                          </div>
                          }

                          {!soundbite.episodetype &&
                          <div className={`link-row ${isPlaying ? "selected" : "" }`} onClick={() => {PlayAudio(soundbite)}}>
                            <div className="related-links-date">-Unknown-</div>
                            <div>{soundbite.title}</div>
                            <div className="related-links-episode">???</div>
                          </div>
                          }
                        </>
                      ))}
                    </div>
                </>
                }
                {selectedCategory == 0 &&
                  <div className="data-section">
                    <div className="related-links">Top Moments</div>
                      <div className="timestamp-notice">Due to pieces sometimes getting cut after airing, accuracy of timestamps may vary. However, the episode is likely the correct one!</div>
                    <div className="modal-links-container-moments">
                      {sortMomentsByDate(props.moments, episodes).map((moment) => (
                        <div className={`link-row ${selectedMoment?.title == moment.title ? "selected" : "" }`} onClick={() => {{isMobile ? window.open(`${moment.url}`, '_blank') :setSelectedMoment(moment)}}}>
                          <div className="related-links-date">
                            {episodes.filter((x : Episode) => x.type == moment.episodeType && x.number == moment.episodeNumber)[0].date}
                          </div>
                          <div className="related-links-hyperlink">{moment.title}</div>
                          <div className="related-links-episode">{moment.getShortEpisodeTitle()}</div>
                        </div>
                      ))}
                      {props.moments.length === 0 &&
                          <div className="no-timestamps-available">No episodes available</div>
                      }
                    </div>
                  </div>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  if (typeof document !== "undefined") {
    return createPortal(modalContent, document.body);
  }

  return null;
}

function sortMomentsByDate(moments: Moment[], episodes: Episode[]) {
  return moments.sort((a, b) => {
    let dateA = new Date(episodes.filter((ep : Episode) => ep.type == a.episodeType && ep.number == a.episodeNumber)[0].date);
    let dateB = new Date(episodes.filter((ep : Episode) => ep.type == b.episodeType && ep.number == b.episodeNumber)[0].date);
    return dateA.getTime() - dateB.getTime();
  });
}

function sortSoundbitesByDate(soundbites: Soundbite[]) {
  return soundbites.sort((a, b) => {
    let dateA = new Date(a.episodedate ? a.episodedate : new Date('1995-12-17'));
    let dateB = new Date(b.episodedate ? b.episodedate : new Date('1995-12-17'));
    return dateA.getTime() - dateB.getTime();
  });
}
