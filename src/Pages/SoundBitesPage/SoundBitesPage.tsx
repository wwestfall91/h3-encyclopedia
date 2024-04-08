import SoundbiteGrid from "../../components/SoundbiteCard/SoundbiteGrid";
import "./SoundBitesPage.scss";
import HeaderImage from "../../assets/images/H3 Sound Station.png";
import PageHeader from "../PageHeader/PageHeader";
import SubHeader from "../SubHeader/SubHeader";
import { useState } from "react";

function Soundbites() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div id="SoundbitePage">
      <div className="soundbite-page-container">
        <PageHeader image={HeaderImage} class={"header-container purple"} />
        <SubHeader setSearchTerm={setSearchTerm}></SubHeader>
        <SoundbiteGrid searchTerm={searchTerm} />
      </div>
    </div>
  );
}

export default Soundbites;
