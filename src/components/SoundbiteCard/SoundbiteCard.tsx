import { useEffect, useState } from "react";
import { Soundbite } from "../../models/Soundbite";
import "./SoundbiteCard.css";
import download_icon from "../../assets/icons/download_icon.png"
import { useDataContext } from "../../context/DataContext";
import { Person } from "../../models/Person";

interface Props {
  soundbite: Soundbite;
  person?: Person;
}

function SoundbiteCard(props: Props) {
  const [isPlaying, setIsPlaying] = useState(false);
  const { people } = useDataContext();
  const [person, setPerson] = useState<Person>();
  const [soundbiteAudio, setSoundbiteAudio] = useState<HTMLAudioElement>();

  useEffect(() => {

  }, []);

  useEffect(() => {
    setPerson(people.filter(x => x.name == props.soundbite.personName)[0])
  }, [people.length]);

  async function PlayAudio() {
    if(!soundbiteAudio){  // On the first pass, we need to setup a local audio variable. If we remove this, pausing functionality will break.
      let audio = new Audio(`../../../soundbites/${props.soundbite.sound}`);
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

  return (
    <>
    {props.soundbite &&
      <div className={isPlaying ? "card playing" : "card"} key={props.soundbite.title}>  
        <div className="person-container">
          <div className="person-name">
            {props.soundbite.personName}
          </div>
        </div>
        <img
          className={props.soundbite ? "card-image" : "card-image grayscale"}
          src={props.soundbite.image ? props.soundbite.image : props.person ? props.person.image : person?.image }
          onClick={() => {PlayAudio()}}
        />
        <div className="soundbite-card-footer">
          <div className="soundbite-card-title">{props.soundbite.title}</div> 
          <div className="soundbite-footer-bottom">
            <a
              className="soundbite-link"
              href={props.soundbite.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {props.soundbite.episodetype && props.soundbite.episodenumber &&
                `${props.soundbite.episodetype} #${props.soundbite.episodenumber}`
              }
            </a>
            <a
              className="soundbite-download-button-container"
              href={`../../../soundbites/${props.soundbite.sound}`}
              download={props.soundbite.title}
              type="audio/wav"
            >
              <img
                className="soundbite-download-button"
                src={download_icon}
              ></img>
            </a>
          </div>
        </div>
      </div>
    }
    </>
  );
}

export default SoundbiteCard;
