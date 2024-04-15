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
  return (
    <>
      {props.isOpen && (
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
                {sortMomentsByDate(props.timeStamps).map((moment) => (
                  <div className="link-container">
                    <div className="related-links-date">
                      {moment.episode.date}
                    </div>
                    <div> | </div>
                    <a
                      href={moment.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="related-links-title">
                        {moment.episode.title}
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function sortMomentsByDate(list: Moment[]) {
  return list.sort((a, b) => {
    let dateA = new Date(a.episode.date);
    let dateB = new Date(b.episode.date);
    return dateA.getTime() - dateB.getTime();
  });
}
