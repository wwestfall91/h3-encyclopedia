import { CustomButton } from "../../components/Buttons/CustomButton";
import SoundbiteGrid from "../../components/SoundbiteCard/SoundbiteGrid";
import Page from "../../models/enums/Page";
import "./../../App.css";
import HeaderImage from "./../assets/images/H3 Sound Station.png";
import PageHeader from "./../PageHeader/PageHeader";

function ButtonMoments() {
  return (
    <>
      <PageHeader image={HeaderImage} class={"header-purple"} />
      <div className="navigation-grid">
        <CustomButton
          page={Page.ComingSoon}
          buttonClass="nav-button"
        ></CustomButton>
      </div>
      <SoundbiteGrid />
    </>
  );
}

export default ButtonMoments;