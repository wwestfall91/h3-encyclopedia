import HeaderImage from "../../assets/images/H3 Sound Station.png";
import { NavigationButton } from "../../components/Buttons/NavigationButton";
import Page from "../../models/enums/Page";
import "./PageHeader.css";
function PageHeader() {
  return (
    <>
      <div className="header">
        <div></div>
        <NavigationButton
          page={Page.Soundbites}
          buttonClass="nav-button"
        ></NavigationButton>
        <img src={HeaderImage}></img>
        <NavigationButton
          page={Page.Iceberg}
          buttonClass="nav-button"
        ></NavigationButton>
        <div></div>
      </div>
    </>
  );
}

export default PageHeader;
