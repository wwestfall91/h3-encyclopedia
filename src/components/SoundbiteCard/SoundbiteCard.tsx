import { Soundbite } from "../../models/Soundbite";

interface Props {
  soundbite: Soundbite;
  image: string;
}

function SoundbiteCard(props: Props) {
  return (
    <>
      <div className="card">
        {props.soundbite.sound != "" ? (
          <img
            src={props.image}
            onClick={() => PlayAudio(props.soundbite.sound)}
            className="card__img"
          />
        ) : (
          <img src={props.image} className="card__img grayscale" />
        )}

        <span className="card__footer">
          <span>{props.soundbite.title}</span>
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
        </span>
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
