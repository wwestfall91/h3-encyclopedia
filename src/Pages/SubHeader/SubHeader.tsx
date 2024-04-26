import "./SubHeader.scss";

type Props = {
  setSearchTerm: (value: string) => void;
  setShowSubmitModel: (show: boolean) => void;
};

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
      <button
        className="submit-button"
        onClick={() => props.setShowSubmitModel(true)}
      >
        Request a Soundbite!
      </button>
    </div>
  );
}

export default SubHeader;
