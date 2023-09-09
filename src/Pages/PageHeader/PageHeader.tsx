import HeaderImage from "../../assets/images/H3 Sound Station.png";
import "./PageHeader.css";
function PageHeader() {
  return (
    <>
      <div className="header">
        <img className="header-image" src={HeaderImage}></img>
        {/* <button className="button-round">Button</button>
        <button className="button-round">Button</button>
        <button className="button-round">Button</button> */}
      </div>
    </>
  );
}

export default PageHeader;
