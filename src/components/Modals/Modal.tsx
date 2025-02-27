import { useDataContext } from "../../context/DataContext";
import { Episode } from "../../models/Episode";
import { Moment } from "../../models/Moments/Moment";
import "./modal.css";

export interface Props {
  title: string;
  description: string;
  timeStamps: Moment[];
  isOpen: boolean;
  openModal: (setOpen: boolean) => void;
}

export function Modal(props: Props) {
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
              <div className="related-links">Related Links</div>
              <div className="new-modal-links-container">
                {sortMomentsByDate(props.timeStamps, episodes).map((moment) => (
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
                {props.timeStamps.length === 0 &&
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
    let dateA = new Date(episodes.filter((x : Episode) => x.type == a.episodeType && x.number == a.episodeNumber)[0].date);
    let dateB = new Date(episodes.filter((x : Episode) => x.type == b.episodeType && x.number == b.episodeNumber)[0].date);
    return dateA.getTime() - dateB.getTime();
  });
}
