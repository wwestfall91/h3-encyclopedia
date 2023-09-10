import { Moment } from "../../models/Moments/Moment";
import "./modal.css";

export interface Props {
  title: string;
  description: string;
  timeStamps: Moment[];
  isOpen: boolean;
  closeModal: Function;
}

export function Modal(props: Props) {
  if (!props.isOpen) return;

  return (
    <>
      <div className="transparent-background">
        <div className="grid">
          <div className="modal-container">
            <div className="section-title-large-underlined">
              {props.title}
              <a
                className="modal-cancel-button"
                onClick={() => {
                  props.closeModal(!props.isOpen);
                }}
              >
                X
              </a>
            </div>
            <div className="modal-content">{props.description}</div>

            <div className="links-grid">
              <h3 className="section-title-medium">Related Links</h3>
              {sortMomentsByDate(props.timeStamps).map((moment) => (
                <>
                  <div className="link-items">
                    <div>{moment.episode.date} | </div>
                    <a
                      href={moment.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {moment.title} - {moment.episode.shortTitle}
                    </a>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
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
