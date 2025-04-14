import { useEffect, useState } from "react";
import "../../components/SoundbiteCard/SoundbiteCard.css";
import { useDataContext } from "../../context/DataContext";
import { Person } from "../../models/Person";
import { Soundbite } from "../../models/Soundbite";
import { Moment } from "../../models/Moments/Moment";
import { MomentAndSoundbites_Modal } from "../../components/Modals/MomentAndSoundbites_Modal";
import "./PersonCard.scss"

interface Props {
  person: Person | undefined;
  moments: Moment[] | undefined;
  soundbites: Soundbite[] | undefined;
  jumpToTime?: () => void;
}

function PersonCard(props: Props) {
    const [modalOpen, setModalOpen] = useState(false);
    const [relatedSoundbites, setRelatedSoundbites] = useState<Soundbite[]>([])
    const [relatedMoments, setRelatedMoments] = useState<Moment[]>([])

    useEffect(() => {
      if(!props.person || !props.moments || !props.soundbites){
        return
      }
        const relatedSoundbites = props.soundbites.filter(x => x.personName?.toLowerCase() == props.person!.name.toLowerCase())
        const relatedMoments = props.moments.filter(x => x.people.includes(props.person!.name))
  
        setRelatedSoundbites(relatedSoundbites);
        setRelatedMoments(relatedMoments);
    }, [props.person, props.soundbites, props.moments])

    function OpenModal() {
        setModalOpen(true);
    }

    return (
        <>
        {props.person && props.soundbites && props.moments && 
          <>
            { 
            (relatedSoundbites.length > 0 || relatedMoments.length > 0) &&
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
                    src={props.person.image}
                    onClick={() => OpenModal()}
                    />
                </div>
              }
              </div>
            }
          </>
          }
        </>
    );
}

export default PersonCard;