import SoundbiteGrid from "../../components/SoundbiteCard/SoundbiteGrid";
import "./SoundBitesPage.scss";
import HeaderImage from "../../assets/images/H3 Sound Station.png";
import PageHeader from "../PageHeader/PageHeader";
import SubHeader from "../SubHeader/SubHeader";
import { useState } from "react";
import SubmitModal from "../../components/Modals/SubmitModal/SubmitModal";

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
          <PageHeader image={HeaderImage} class={"header-container purple"} />
          {showEmailModal && (
            <SubmitModal toggleShown={setShowEmailModal}></SubmitModal>
          )}
          <SubHeader
            setSearchTerm={setSearchTerm}
            setShowSubmitModel={setShowEmailModal}
            setSortBy={setSortBy}
          ></SubHeader>
          <SoundbiteGrid searchTerm={searchTerm} sortBy={sortBy} />
        </div>
      </div>
    </>
  );
}

export default SoundbitesPage;
