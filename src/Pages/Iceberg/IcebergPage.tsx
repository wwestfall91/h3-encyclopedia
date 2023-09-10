import { useState } from "react";
import "./IcebergPage.css";
import { Moment } from "../../models/Moments/Moment";
import { Modal } from "../../components/Modals/Modal";
import IcebergGridItem from "./IcebergGridItem";
import AllIcebergLayers from "../../models/IcebergLayers/AllIcebergLayers";

export function IcebergPage() {
  function SetModalData(
    title: string,
    description: string,
    timestamps: Moment[]
  ) {
    setModalTitle(title);
    setModalDescription(description);
    setModalTimestamps(timestamps);
    setModalOpen(true);
  }

  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalDescription, setModalDescription] = useState("");
  const [modalTimestamps, setModalTimestamps] = useState(new Array());
  return (
    <>
      <Modal
        title={modalTitle}
        description={modalDescription}
        timeStamps={modalTimestamps}
        isOpen={modalOpen}
        closeModal={setModalOpen}
      />

      <body>
        <div className="gradient-background">
          <div className="page-layout">
            <div className="iceberg-image">
              <div className="layer 1">
                <IcebergGridItem
                  item={AllIcebergLayers.Layer1.FAMILY}
                  SetModalData={SetModalData}
                  column={3}
                  row={2}
                ></IcebergGridItem>
                <IcebergGridItem
                  item={AllIcebergLayers.Layer1.FootSoldiers}
                  SetModalData={SetModalData}
                  column={7}
                  row={2}
                ></IcebergGridItem>
                <IcebergGridItem
                  item={AllIcebergLayers.Layer1.Frenemies}
                  SetModalData={SetModalData}
                  column={4}
                  row={4}
                ></IcebergGridItem>
                <IcebergGridItem
                  item={AllIcebergLayers.Layer1.PeaceAndLove}
                  SetModalData={SetModalData}
                  column={8}
                  row={4}
                ></IcebergGridItem>
              </div>
              <div className="layer 2"></div>
              <div className="layer 3"></div>
              <div className="layer 4"></div>
              <div className="layer 5"></div>
              <div className="layer 6"></div>
              <div className="layer 7"></div>
              <div className="layer 8"></div>
              <div className="layer 9"></div>
              <div className="layer 10"></div>
              <div className="layer 11"></div>
              <div className="layer 12"></div>
            </div>
          </div>
        </div>
      </body>

      {/* <Modal /> */}
    </>
  );
}

export default IcebergPage;
