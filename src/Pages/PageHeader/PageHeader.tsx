import { CustomButton } from "../../components/Buttons/CustomButton";
import Page from "../../models/enums/Page";
import "./PageHeader.css";

export interface Props {
  image: string;
  class: string;
}

function PageHeader(props: Props) {
  return (
    <div className="header-container">
      <div className="header">
        <img className="site-logo" src={props.image}></img>
        <div className="right-header">
          <CustomButton page={Page.Soundbites}></CustomButton>
          <CustomButton page={Page.Iceberg}></CustomButton>
        </div>
      </div>
    </div>
  );
}

export default PageHeader;
