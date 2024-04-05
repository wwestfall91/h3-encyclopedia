import "./IcebergGridItem.css";
import IcebergItem from "../../models/IcebergLayers/IcebergItem";
import { PropsWithChildren } from "react";

export interface Props extends PropsWithChildren<any> {
  item: IcebergItem;
  SetModalData: Function;
  column: number;
  row: number;
}

function IcebergItemButton(props: Props) {
  return (
    <>
      <div
        className="item"
        style={
          {
            "--column": props.column,
            "--row": props.row,
          } as React.CSSProperties
        }
      >
        <button
          className="iceberg-button"
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
      </div>
    </>
  );
}

export default IcebergItemButton;
