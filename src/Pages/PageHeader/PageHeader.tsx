import { NavigationButton } from "../../components/Buttons/NavigationButton";
import Page from "../../models/enums/Page";
import "./PageHeader.css";

export interface Props {
  image: string;
  class: string;
}

function PageHeader(props: Props) {
  return (
    <>
      <div className={props.class}>
        <div></div>
        <NavigationButton
          page={Page.Soundbites}
          buttonClass="nav-button"
        ></NavigationButton>
        <img src={props.image}></img>
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
