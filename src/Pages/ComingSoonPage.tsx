import { CustomButton } from "../components/Buttons/CustomButton";
import HeaderImage from "./../assets/images/H3 Sound Station.png";
import ComingSoonGrid from "../components/SoundbiteCard/ComingSoonGrid";
import Page from "../models/enums/Page";
import "../App.css";
import PageHeader from "./PageHeader/PageHeader";

function ComingSoon() {
  return (
    <>
      <PageHeader image={HeaderImage} class={"header-purple"} />
      <div className="navigation-grid">
        <CustomButton
          page={Page.Soundbites}
          buttonClass="nav-button"
        ></CustomButton>
      </div>

      <ComingSoonGrid></ComingSoonGrid>
    </>
  );
}

export default ComingSoon;
