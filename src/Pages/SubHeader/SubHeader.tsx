import "./SubHeader.scss";

type Props = { setSearchTerm: (value: string) => void };

function SubHeader(props: Props) {
  return (
    <div id="SubHeader">
      <input
        placeholder="Search"
        className="search-bar"
        onChange={(e) => {
          props.setSearchTerm(e.target.value ?? "");
        }}
      ></input>
    </div>
  );
}

export default SubHeader;
