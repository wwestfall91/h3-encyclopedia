import { useDataContext } from "../../context/DataContext";
import { Episode } from "../../models/Episode";
import { Moment } from "../../models/Moments/Moment";
import { Soundbite } from "../../models/Soundbite";
import "./modal.css";

export interface Props {
  title: string;
  description: string;
  moments: Moment[];
  soundbites: Soundbite[];
  isOpen: boolean;
  openModal: (setOpen: boolean) => void;
}

export function MomentAndSoundbites_Modal(props: Props) {
  const {episodes} = useDataContext();

  return (
    <>
        <div
          className="transparent-background"
          onClick={() => props.openModal(false)}
        >
          <div
            className="new-modal-container"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <div className="new-modal-header">
              <div className="new-modal-title">{props.title}</div>
              <div
                className="new-modal-close-button"
                onClick={() => {
                  props.openModal(false);
                }}
              >
                X
              </div>
            </div>
            <div className="new-modal-content">{props.description}</div>

            <div className="new-modal-footer">
              <div className="related-links">Related Soundbites</div>
              <div className="new-modal-links-container">
                {sortSoundbitesByDate(props.soundbites).map((soundbite) => (
                  <div className="link-container">
                    {soundbite.episodetype &&
                    <>
                      <div className="related-links-date">
                        {episodes.filter((x : Episode) => x.type == soundbite.episodetype && x.number == soundbite.episodenumber)[0].date}
                      </div>
                      <a href={soundbite.timestampurl} target="_blank" rel="noopener noreferrer" className="related-links-hyperlink">
                        {soundbite.title}
                      </a>
                      <div className="related-links-episode">
                        {soundbite.getShortEpisodeTitle()}
                      </div>
                    </>
                    }
                    {!soundbite.episodetype &&
                    <>
                      <div className="related-links-date">
                        -Unknown-
                      </div>
                      <div>
                        {soundbite.title}
                      </div>
                      <div className="related-links-episode">
                        ???
                      </div>
                    </>
                    }
                  </div>
                ))}
                {props.soundbites.length === 0 &&
                    <div className="no-timestamps-available">
                      None available
                    </div>
                }
              </div>
            </div>
            
            <div className="new-modal-footer">
              <div className="related-links">Referenced in Episode</div>
              <div className="new-modal-links-container">
                {sortMomentsByDate(props.moments, episodes).map((moment) => (
                  <div className="link-container">
                    <div className="related-links-date">
                      {episodes.filter((x : Episode) => x.type == moment.episodeType && x.number == moment.episodeNumber)[0].date}
                    </div>
                    <a href={moment.url} target="_blank" rel="noopener noreferrer" className="related-links-hyperlink">
                      {moment.title}
                    </a>
                    <div className="related-links-episode">
                      {moment.getShortEpisodeTitle()}
                    </div>                
                  </div>
                ))}
                {props.moments.length === 0 &&
                    <div className="no-timestamps-available">
                      No episodes available
                    </div>
                }
              </div>
            </div>
          </div>
        </div>
    </>
  );
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
