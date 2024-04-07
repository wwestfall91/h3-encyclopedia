import HeaderImage from "./../assets/images/H3 Sound Station.png";
import ComingSoonGrid from "../components/SoundbiteCard/ComingSoonGrid";
import "../App.css";
import PageHeader from "./PageHeader/PageHeader";

function ComingSoon() {
  return (
    <>
      <PageHeader image={HeaderImage} class={"page-header-container purple"} />
      <div className="navigation-grid">
        {/* <CustomButton page={Page.Soundbites} ></CustomButton> */}
      </div>

      <ComingSoonGrid></ComingSoonGrid>
    </>
  );
}

export default ComingSoon;
