import Images from "../../models/Images";
import IcebergGrid from "./IcebergGrid";
import "./IcebergPage.css";

function Iceberg() {
  return (
    <>
      <img
        className="gradient-background"
        src={Images.IcebergGradientBackground}
      ></img>
      <IcebergGrid />
      {/* <Modal /> */}
    </>
  );
}

export default Iceberg;
