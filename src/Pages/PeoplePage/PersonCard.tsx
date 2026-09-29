import { memo, useMemo, useState } from "react";
import "../../components/SoundbiteCard/SoundbiteCard.css";
import { useDataContext } from "../../context/DataContext";
import { Person } from "../../models/Person";
import { MomentAndSoundbites_Modal } from "../../components/Modals/MomentAndSoundbites_Modal";
import "./PersonCard.scss"

interface Props {
  person: Person | undefined;
  jumpToTime?: () => void;
}

function PersonCard(props: Props) {
    const { soundbites, moments } = useDataContext();
    const [modalOpen, setModalOpen] = useState(false);

    const relatedSoundbites = useMemo(() => {
      if (!props.person) return [];
      const personName = props.person.name.toLowerCase();
      return soundbites.filter(
        (soundbite) => soundbite.personName?.toLowerCase() === personName
      );
    }, [props.person, soundbites]);

    const relatedMoments = useMemo(() => {
      if (!props.person) return [];
      const personName = props.person.name;
      return moments.filter((moment) => moment.people.includes(personName));
    }, [props.person, moments]);

    function openModal() {
      setModalOpen(true);
    }

    return (
        <>
        {props.person && 
          <div>
              {modalOpen && 
                <MomentAndSoundbites_Modal 
                  title={props.person.name} 
                  description={""} 
                  moments={relatedMoments} 
                  soundbites={relatedSoundbites} 
                  isOpen={false} 
                  openModal={setModalOpen} />
              }
                <div className="card" key={props.person.image}>
                    <div className="person-container">
                      <div className="person-name">
                          {props.person.name}
                      </div>
                      <div className="moment-counter">
                        {relatedMoments.length + relatedSoundbites.length}
                      </div>
                      <div className={`allegiance-${props.person.allegiance.toLowerCase()}`}>
                        {props.person.allegiance.includes("Neutral") ? "" : props.person.allegiance}
                      </div>
                    </div>
                    <img
                    className="card-image"
                    src={props.person.image}
                    onClick={openModal}
                    loading="lazy"
                    decoding="async"
                    alt={props.person.name}
                    />
                
                </div>
              {props.person.name == "Avery" && 
                <div className="badge">
                  <img className="picture" src="Images/GoldMedal_Tall.png"/>
                </div>
              }
              {props.person.name == "Steiny" && 
                <div className="badge">
                  <img className="picture" src="Images/GoldMedal_Smallest.png"/>
                </div>
              }   
              </div>
          }
        </>
    );
}

export default memo(PersonCard);