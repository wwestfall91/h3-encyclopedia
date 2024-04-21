import { CustomButton } from "../../components/Buttons/CustomButton/CustomButton";
import Page from "../../models/enums/Page";
import "./PageHeader.css";

export interface Props {
  image: string;
  class: string;
}

function PageHeader(props: Props) {
  return (
    <div className={props.class}>
      <div className="header">
        <img className="site-logo" src={props.image}></img>
        <div className="right-header">
          <CustomButton page={Page.Soundbites} />
          <CustomButton page={Page.Iceberg} />
          <CustomButton page={Page.Crew} />
        </div>
      </div>
    </div>
  );
}

export default PageHeader;
