import { NavigationButton } from "../components/Buttons/NavigationButton";
import SoundbiteGrid from "../components/SoundbiteCard/SoundbiteGrid";
import Page from "../models/enums/Page";
import "../App.css";

function Home() {
  return (
    <>
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

export default Home;
