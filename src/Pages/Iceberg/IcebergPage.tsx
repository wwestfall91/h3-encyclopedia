import { useState } from "react";
import GridItem from "./GridItem";
import "./IcebergPage.css";
import { Moment } from "../../models/Moments/Moment";
import { Modal } from "../../components/Modals/Modal";

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
                <GridItem column={7} row={2}></GridItem>
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
