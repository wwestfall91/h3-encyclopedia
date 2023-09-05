import { NavigationButton } from "../components/Buttons/NavigationButton";
import ComingSoonGrid from "../components/SoundbiteCard/ComingSoonGrid";
import Page from "../models/enums/Page";
import "../App.css";

function ComingSoon() {
  return (
    <>
      <div className="navigation-grid">
        <NavigationButton
          page={Page.Home}
          buttonClass="nav-button"
        ></NavigationButton>
      </div>

      <ComingSoonGrid></ComingSoonGrid>
    </>
  );
}

export default ComingSoon;
