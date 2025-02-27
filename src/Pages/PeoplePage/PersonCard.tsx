import { useEffect, useState } from "react";
import "../../components/SoundbiteCard/SoundbiteCard.css";
import { useDataContext } from "../../context/DataContext";
import { Person } from "../../models/Person";
import { Soundbite } from "../../models/Soundbite";
import { Moment } from "../../models/Moments/Moment";
import { MomentAndSoundbites_Modal } from "../../components/Modals/MomentAndSoundbites_Modal";
import "./PersonCard.scss"

interface Props {
  person: Person;
  jumpToTime?: () => void;
}

function PersonCard(props: Props) {
    const {soundbites, moments } = useDataContext();
    const [modalOpen, setModalOpen] = useState(false);
    const [relatedSoundbites, setRelatedSoundbites] = useState<Soundbite[]>([])
    const [relatedMoments, setRelatedMoments] = useState<Moment[]>([])

    useEffect(() => {
      const relatedSoundbites = soundbites.filter(x => x.personName?.toLowerCase() == props.person.name.toLowerCase())
      const relatedMoments = moments.filter(x => x.people.includes(props.person.name))      

      setRelatedSoundbites(relatedSoundbites);
      setRelatedMoments(relatedMoments);
    }, [props.person, soundbites.length, moments.length])



    function OpenModal() {
        setModalOpen(true);
    }

    return (
      // <div className="card-container">
        // <div id="PersonCard">
        <>
        { (relatedSoundbites.length > 0 || relatedMoments.length > 0) &&
          <div>
          {modalOpen && 
            <MomentAndSoundbites_Modal title={props.person.name} description={""} moments={relatedMoments} soundbites={relatedSoundbites} isOpen={false} openModal={setModalOpen} ></MomentAndSoundbites_Modal>
          }
          {props.person &&
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
                src={props.person.image }
                onClick={() => OpenModal()}
                />
            </div>
          }

          </div>
        }
        </>

        // </div>
      // </div>
    );
}

export default PersonCard;