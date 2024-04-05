import SoundbiteGrid from "../../components/SoundbiteCard/SoundbiteGrid";
import "./SoundBitesPage.css";
import HeaderImage from "../../assets/images/H3 Sound Station.png";
import PageHeader from "../PageHeader/PageHeader";

function Soundbites() {
  return (
    <div className="soundbite-page-container">
      <PageHeader image={HeaderImage} class={"header-purple"} />
      <SoundbiteGrid />
    </div>
  );
}

export default Soundbites;
