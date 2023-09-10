import { NavigationButton } from "../components/Buttons/NavigationButton";
import SoundbiteGrid from "../components/SoundbiteCard/SoundbiteGrid";
import Page from "../models/enums/Page";
import "../App.css";
import HeaderImage from "./../assets/images/H3 Sound Station.png";
import PageHeader from "./PageHeader/PageHeader";

function Soundbites() {
  return (
    <>
      <PageHeader image={HeaderImage} class={"header-purple"} />
      <div className="navigation-grid">
        <NavigationButton
          page={Page.ComingSoon}
          buttonClass="nav-button"
        ></NavigationButton>
      </div>
      <SoundbiteGrid />
    </>
  );
}

export default Soundbites;
