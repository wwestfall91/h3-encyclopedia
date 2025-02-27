import SoundbiteGrid from "../../components/SoundbiteCard/SoundbiteGrid";
import "./SoundBitesPage.scss";
import SubHeader from "../SubHeader/SubHeader";
import { useState } from "react";
import SubmitModal from "../../components/Modals/SubmitModal/SubmitModal";
import Coffee from "../../components/Coffee";

export enum sortByType {
  Default,
  Name,
  Date,
  Person,
}

function SoundbitesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showEmailModal, setShowEmailModal] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState<sortByType>(sortByType.Default);

  return (
    <>
      <div id="SoundbitePage">
        <div className="soundbite-page-container">
          <Coffee></Coffee>
          {showEmailModal && (
            <SubmitModal toggleShown={setShowEmailModal} soundbite={true}></SubmitModal>
          )}
          <SubHeader
            setSearchTerm={setSearchTerm}
            setShowSubmitModel={setShowEmailModal}
            setSortBy={setSortBy}
            requestString={"Request a Soundbite!"}
          ></SubHeader>
          <SoundbiteGrid searchTerm={searchTerm} sortBy={sortBy} />
        </div>
      </div>
    </>
  );
}

export default SoundbitesPage;
