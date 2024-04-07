import SoundbiteGrid from "../../components/SoundbiteCard/SoundbiteGrid";
import "./SoundBitesPage.scss";
import HeaderImage from "../../assets/images/H3 Sound Station.png";
import PageHeader from "../PageHeader/PageHeader";

function Soundbites() {
  return (
    <div id="SoundbitePage">
      <div className="soundbite-page-container">
        <PageHeader image={HeaderImage} class={"header-container purple"} />
        <SoundbiteGrid />
      </div>
    </div>
  );
}

export default Soundbites;
