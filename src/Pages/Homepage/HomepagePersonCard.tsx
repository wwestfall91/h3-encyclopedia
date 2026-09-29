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
  const { soundbites, loadMoments } = useDataContext();
  const [modalOpen, setModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [contentLoaded, setContentLoaded] = useState(false);
  const [relatedSoundbites, setRelatedSoundbites] = useState<Soundbite[]>([]);
  const [relatedMoments, setRelatedMoments] = useState<Moment[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 1400);
  }, []);

  async function openModal() {
    if (!props.person || isLoading) return;

    if (!contentLoaded) {
      setIsLoading(true);
      const moments = await loadMoments();
      const personName = props.person.name;

      setRelatedSoundbites(
        soundbites.filter(
          (soundbite) =>
            soundbite.personName?.toLowerCase() === personName.toLowerCase()
        )
      );
      setRelatedMoments(
        moments.filter((moment) => moment.people.includes(personName))
      );
      setContentLoaded(true);
      setIsLoading(false);
    }

    setModalOpen(true);
  }

  return (
    <>
      {props.person && (
        <div id="PersonCard">
          <div className="card-container">
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
                  <div
                    className={`card black-outline`}
                    key={props.person.image}
                    aria-busy={isLoading}
                  >
                    <div className="person-container">
                      <div className="person-name">{props.person.name}</div>
                      {(contentLoaded || isLoading) && <div
                        className={
                          props.title
                            ? `moment-counter with-title`
                            : "moment-counter"
                        }
                      >
                        {isLoading
                          ? "Loading..."
                          : relatedMoments.length + relatedSoundbites.length}
                      </div>}
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
                      onClick={() => void openModal()}
                      loading="lazy"
                      decoding="async"
                      alt={props.person.name}
                    />
                  </div>
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
