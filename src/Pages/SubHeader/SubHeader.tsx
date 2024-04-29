import { sortByType } from "../SoundBitesPage/SoundBitesPage";
import "./SubHeader.scss";

type Props = {
  setSearchTerm: (value: string) => void;
  setShowSubmitModel: (show: boolean) => void;
  setSortBy: (value: sortByType) => void;
};

function SubHeader(props: Props) {
  return (
    <div id="SubHeader">
      <div className="subheader-left">
        <input
          placeholder="Search"
          className="search-bar"
          onChange={(e) => {
            props.setSearchTerm(e.target.value ?? "");
          }}
        ></input>
        <div className="sort-buttons">
          <button
            className="submit-button"
            onClick={() => props.setSortBy(sortByType.Person)}
          >
            Sort By People
          </button>
          <button
            className="submit-button"
            onClick={() => props.setSortBy(sortByType.Date)}
          >
            Sort By Date
          </button>
          <button
            className="submit-button"
            onClick={() => props.setSortBy(sortByType.Name)}
          >
            Sort By Name
          </button>
        </div>
      </div>
      <div className="subheader-right">
        <button
          className="submit-button"
          onClick={() => props.setShowSubmitModel(true)}
        >
          Request a Soundbite!
        </button>
      </div>
    </div>
  );
}

export default SubHeader;
