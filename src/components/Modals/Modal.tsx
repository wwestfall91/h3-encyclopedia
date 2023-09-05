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
      <div className="modal-transparent-background">
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
            {props.timeStamps.map((moment) => (
              <>
                <a href={moment.url} target="_blank" rel="noopener noreferrer">
                  {moment.title} - {moment.episode.shortTitle}
                </a>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
