import "./IcebergGrid.css";
import { Modal } from "../../components/Modals/Modal";
import { useState } from "react";
import { Moment } from "../../models/Moments/Moment";
import * as IcebergLayers from "../../models/IcebergLayers/AllIcebergLayers";
import IcebergItemButton from "./IcebergItemButton";

export function IcebergGrid() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalDescription, setModalDescription] = useState("");
  const [modalTimestamps, setModalTimestamps] = useState(new Array());

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

  return (
    <>
      <Modal
        title={modalTitle}
        description={modalDescription}
        timeStamps={modalTimestamps}
        isOpen={modalOpen}
        closeModal={setModalOpen}
      />
      <div className="background">
        <div className="iceberg-layers">
          <div className="layer 1">
            Layer 1
            <div className="rows">
              <div className="column-item 1">
                <div className="1"></div>
                <div className="2"></div>
                <div className="3"></div>
                <div className="4"></div>
                <div className="5"></div>
                <div className="6"></div>
                <div className="7"></div>
                <div className="8"></div>
                <div className="9"></div>
                <div className="10"></div>
              </div>
              <div className="column-item 2">
                <div className="1"></div>
                <div className="2"></div>
                <div className="3">
                  <IcebergItemButton
                    item={IcebergLayers.default.Layer1.Frenemies}
                    SetModalData={SetModalData}
                  ></IcebergItemButton>
                </div>
                <div className="4"></div>
                <div className="5"></div>
                <div className="6"></div>
                <div className="7"></div>
                <div className="8"></div>
                <div className="9"></div>
                <div className="10"></div>
              </div>
              <div className="column-item 3">
                <div className="1"></div>
                <div className="2"></div>
                <div className="3"></div>
                <div className="4"></div>
                <div className="5"></div>
                <div className="6"></div>
                <div className="7"></div>
                <div className="8"></div>
                <div className="9">
                  <IcebergItemButton
                    item={IcebergLayers.default.Layer1.PeaceAndLove}
                    SetModalData={SetModalData}
                  ></IcebergItemButton>
                </div>
                <div className="10"></div>
              </div>
              <div className="column-item 4">
                <div className="1"></div>
                <div className="2"></div>
                <div className="3"></div>
                <div className="4">
                  {" "}
                  <IcebergItemButton
                    item={IcebergLayers.default.Layer1.FootSoldiers}
                    SetModalData={SetModalData}
                  ></IcebergItemButton>
                </div>
                <div className="5"></div>
                <div className="6"></div>
                <div className="7"></div>
                <div className="8"></div>
                <div className="9"></div>
                <div className="10"></div>
              </div>
              <div className="column-item 5">
                <div className="1"></div>
                <div className="2"></div>
                <div className="3"></div>
                <div className="4"></div>
                <div className="5"></div>
                <div className="6"></div>
                <div className="7">
                  {" "}
                  <IcebergItemButton
                    item={IcebergLayers.default.Layer1.FAMILY}
                    SetModalData={SetModalData}
                  ></IcebergItemButton>
                </div>
                <div className="8"></div>
                <div className="9"></div>
                <div className="10"></div>
              </div>
            </div>
          </div>
          <div className="layer 2">Layer 2</div>
          <div className="layer 3">Layer 3</div>
          <div className="layer 4">Layer 4</div>
          <div className="layer 5">Layer 5</div>
          <div className="layer 6">Layer 6</div>
          <div className="layer 7">Layer 7</div>
          <div className="layer 8">Layer 8</div>
          <div className="layer 9">Layer 9</div>
          <div className="layer 10">Layer 10</div>
          <div className="layer 11">Layer 11</div>
          <div className="layer 12">Layer 12</div>
        </div>
        <div />
      </div>
    </>
  );
}

export default IcebergGrid;
