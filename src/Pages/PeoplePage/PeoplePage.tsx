import { useEffect, useState } from "react";
import Coffee from "../../components/Coffee";
import SubmitModal from "../../components/Modals/SubmitModal/SubmitModal";
import PersonCard from "./PersonCard";
import { useDataContext } from "../../context/DataContext";
import SubHeader from "../SubHeader/SubHeader";
import { sortByType } from "../SoundBitesPage/SoundBitesPage";
import { Person } from "../../models/Person";
import "./PeoplePage.scss";

function PeoplePage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [showEmailModal, setShowEmailModal] = useState<boolean>(false);
    const [_, setSortBy] = useState<sortByType>(sortByType.Default);
    const { people } = useDataContext();
    const [filteredPeople, setFilteredPeople] = useState<Person[]>(people);

    useEffect(() => {
        setFilteredPeople(people.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase())))
    }, [searchTerm, people])

    return (
        <div id="PeoplePage">
            <div className="soundbite-page-container">
                <Coffee></Coffee>
                {showEmailModal && (
                    <SubmitModal toggleShown={setShowEmailModal} soundbite={false}></SubmitModal>
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
                            <PersonCard
                                person={person}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PeoplePage;