export interface Props {
  column: number;
  row: number;
}

function GridItem(props: Props) {
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
        RED
      </div>
    </>
  );
}

export default GridItem;
