import { Soundbite } from "../../models/Soundbite";
import "./SoundbiteCard.css";

interface Props {
  soundbite: Soundbite;
  image: string;
}

function SoundbiteCard(props: Props) {
  return (
    <>
      <div className="card">
        <img
          className={props.soundbite ? "card-image" : "card-image grayscale"}
          src={props.image}
          onClick={() => PlayAudio(props.soundbite.sound)}
        />

        <div className="soundbite-card-footer">
          <div className="soundbite-card-title">{props.soundbite.title}</div>
          <div>
            <a
              className="soundbite-link"
              href={props.soundbite.episode.getTimestampURL(
                props.soundbite.time
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              {props.soundbite.episode.shortTitle}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

function PlayAudio(directory: string) {
  let audio = new Audio(directory);
  audio.load();

  const audioPromise = audio.play();
  if (audioPromise !== undefined) {
    audioPromise
      .then((_) => {
        // autoplay started
      })
      .catch((err) => {
        // catch dom exception
        console.info(err);
      });
  }
}

export default SoundbiteCard;
