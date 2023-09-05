import "./IcebergGrid.css";
import IcebergItem from "../../models/IcebergLayers/IcebergItem";

export interface Props {
  item: IcebergItem;
  SetModalData: Function;
}

function IcebergItemButton(props: Props) {
  return (
    <>
      <button
        className="nav-button"
        onClick={() =>
          props.SetModalData(
            props.item.title,
            props.item.description,
            props.item.timestamps
          )
        }
      >
        {props.item.title}
      </button>
    </>
  );
}

export default IcebergItemButton;
