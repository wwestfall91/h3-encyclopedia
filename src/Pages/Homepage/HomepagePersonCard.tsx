import { useEffect, useState } from "react";
import "../../components/SoundbiteCard/SoundbiteCard.css";
import { useDataContext } from "../../context/DataContext";
import { Person } from "../../models/Person";
import { Soundbite } from "../../models/Soundbite";
import { Moment } from "../../models/Moments/Moment";
import { MomentAndSoundbites_Modal } from "../../components/Modals/MomentAndSoundbites_Modal";
import "./HomepagePersonCard.scss";

interface Props {
  person: Person | undefined;
  title?: string;
  jumpToTime?: () => void;
}

function HomepagePersonCard(props: Props) {
  const { soundbites, moments } = useDataContext();
  const [modalOpen, setModalOpen] = useState(false);
  const [relatedSoundbites, setRelatedSoundbites] = useState<Soundbite[]>([]);
  const [relatedMoments, setRelatedMoments] = useState<Moment[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 1400);
  }, []);

  useEffect(() => {
    if (!props.person) {
      return;
    }

    const relatedSoundbites = soundbites.filter(
      (x) => x.personName?.toLowerCase() == props.person!.name.toLowerCase()
    );
    const relatedMoments = moments.filter((x) =>
      x.people.includes(props.person!.name)
    );

    setRelatedSoundbites(relatedSoundbites);
    setRelatedMoments(relatedMoments);
  }, [props.person, soundbites.length, moments.length]);

  function OpenModal() {
    setModalOpen(true);
  }

  return (
    <>
      {props.person && soundbites && moments && (
        <div id="PersonCard">
          <div className="card-container">
            {(relatedSoundbites.length > 0 || relatedMoments.length > 0) && (
              <>
                {modalOpen && (
                  <MomentAndSoundbites_Modal
                    title={props.person.name}
                    description={""}
                    moments={relatedMoments}
                    soundbites={relatedSoundbites}
                    isOpen={false}
                    openModal={setModalOpen}
                  />
                )}
                {props.person && (
                  <div
                    className={`card black-outline`}
                    key={props.person.image}
                  >
                    <div className="person-container">
                      <div className="person-name">{props.person.name}</div>
                      <div
                        className={
                          props.title
                            ? `moment-counter with-title`
                            : "moment-counter"
                        }
                      >
                        {relatedMoments.length + relatedSoundbites.length}
                      </div>
                      <div
                        className={`allegiance-${props.person.allegiance.toLowerCase()}`}
                      >
                        {props.person.allegiance.includes("Neutral")
                          ? ""
                          : props.person.allegiance}
                      </div>
                    </div>
                    {props.title && (
                      <div
                        className="footer"
                        onClick={(e) => {
                          e.stopPropagation();
                        }}
                      >
                        <div className="soundbite-card-title">
                          {props.title}
                        </div>
                      </div>
                    )}
                    <img
                      className="card-image"
                      src={props.person.image}
                      onClick={() => OpenModal()}
                    />
                  </div>
                )}
              </>
            )}
          </div>
          <>
            {!isMobile && props.jumpToTime && (
              <div className="jump-to-mention" onClick={props.jumpToTime}>
                {"< Jump to Mention"}
              </div>
            )}
          </>
        </div>
      )}
    </>
  );
}

export default HomepagePersonCard;
