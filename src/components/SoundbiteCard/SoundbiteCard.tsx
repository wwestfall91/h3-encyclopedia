import { useState } from "react";
import { Soundbite } from "../../models/Soundbite";
import "./SoundbiteCard.css";
import download_icon from "../../assets/icons/download_icon.png";

interface Props {
  soundbite: Soundbite;
  image: string;
}

function SoundbiteCard(props: Props) {
  const [isPlaying, setIsPlaying] = useState(false);

  async function PlayAudio(directory: string) {
    if (isPlaying) return;

    let audio = new Audio(directory);
    audio.load();

    setIsPlaying(true);

    audio.addEventListener("ended", function () {
      audio.currentTime = 0;
      setIsPlaying(false);
    });

    await audio.play();
  }

  return (
    <>
      <div className="card" key={props.soundbite.title}>
        <img
          className={props.soundbite ? "card-image" : "card-image grayscale"}
          src={props.image}
          onClick={() => PlayAudio(props.soundbite.sound)}
        />

        <div className="soundbite-card-footer">
          <div className="soundbite-card-title">{props.soundbite.title}</div>
          <div className="soundbite-footer-bottom">
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
            <a
              className="soundbite-download-button-container"
              href={props.soundbite.sound}
              download={props.soundbite.title}
              type="wav"
            >
              <img
                className="soundbite-download-button"
                src={download_icon}
              ></img>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default SoundbiteCard;
