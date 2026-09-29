import { useMemo, useState } from "react";
import Coffee from "../../components/Coffee";
import SubmitModal from "../../components/Modals/SubmitModal/SubmitModal";
import PersonCard from "./PersonCard";
import { useDataContext } from "../../context/DataContext";
import SubHeader from "../SubHeader/SubHeader";
import { sortByType } from "../SoundBitesPage/SoundBitesPage";
import "./PeoplePage.scss";

function PeoplePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showEmailModal, setShowEmailModal] = useState<boolean>(false);
  const [, setSortBy] = useState<sortByType>(sortByType.Default);
  const { people } = useDataContext();

  const filteredPeople = useMemo(() => {
    if (!people || people.length === 0) return [];

    const searchLower = searchTerm.toLowerCase();
    return people.filter(
      (person) =>
        person.name.length > 0 &&
        person.name.toLowerCase().includes(searchLower)
    );
  }, [people, searchTerm]);

  return (
    <div id="PeoplePage">
      <div className="soundbite-page-container">
        <Coffee></Coffee>
        {showEmailModal && (
          <SubmitModal
            toggleShown={setShowEmailModal}
            soundbite={false}
          ></SubmitModal>
        )}
        <SubHeader
          setSearchTerm={setSearchTerm}
          setShowSubmitModel={setShowEmailModal}
          setSortBy={setSortBy}
          requestString={"Request an Update!"}
        ></SubHeader>
        <div id="soundbite-grid-container">
          <div className="soundbite-grid">
            {filteredPeople.map((person) => (
              <div className="person-card-slot" key={person.name}>
                <PersonCard person={person} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PeoplePage;
