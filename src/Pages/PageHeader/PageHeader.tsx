import HeaderImage from "../../assets/images/H3 Sound Station.png";
import "./PageHeader.css";
function PageHeader() {
  return (
    <>
      <div className="header">
        <div></div>
        <div></div>
        <img className="header-image" src={HeaderImage}></img>
        <div></div>
        <div></div>
        {/* <button className="button-round">Button</button>
        <button className="button-round">Button</button>
        <button className="button-round">Button</button> */}
      </div>
    </>
  );
}

export default PageHeader;
