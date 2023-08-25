import "./SoundbiteList.css";
import { Soundbite } from "../../models/Soundbite";

interface Props {
  soundbite: Soundbite;
  image: string;
}

function SoundbiteList(props: Props) {
  return (
    <>
      <li>
        <div className="details">
          <div onClick={() => PlayAudio(props.soundbite.sound)}>
            <h2>{props.soundbite.title}</h2>
            <div className="product">
              <img src={props.image} />
            </div>
          </div>
          {props.soundbite.episode.shortTitle != "" ||
          props.soundbite.episode == undefined ? (
            <p>
              <a
                href={props.soundbite.GetTimestamp()}
                target="_blank"
                rel="noopener noreferrer"
              >
                {props.soundbite.episode.shortTitle}
              </a>
            </p>
          ) : null}
        </div>
      </li>
    </>
  );

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
}

export default SoundbiteList;
