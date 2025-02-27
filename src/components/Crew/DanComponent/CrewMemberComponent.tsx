import { useState } from "react";
import MomentComponent from "../../Moments/MomentComponent/MomentComponent";
import "./CrewMemberComponent.scss";
import RequestCrewMomentModal from "../../Modals/RequestCrewMomentModal/RequestCrewMomentModal";
import { useDataContext } from "../../../context/DataContext";
import { Tag } from "../../../models/enums/Tag";
import { Moment } from "../../../models/Moments/Moment";

type Props = {
  crewName: string;
  onReturnClickCallback: () => void;
};

function CrewMemberComponent(props: Props) {
  const [showRequestModal, setShowRequestModel] = useState(false);
  const { moments } = useDataContext();

  // useEffect(() => {
  //   getSections(moments)
  // }, [moments])

  function getSections(filteredMoments : Moment[]){
    const allSections = filteredMoments.map(x => x.section?.replace("\r", ""))
    allSections.filter(x => x != "")
    
    const uniqueSections = allSections.filter((value, index, self) => {
      return self.indexOf(value) === index;
    });
    return uniqueSections;
  }

  return (
    <div id="CrewMemberComponent">
      {showRequestModal && (
        <RequestCrewMomentModal
          toggleShown={setShowRequestModel}
          crewMember={props.crewName}
        ></RequestCrewMomentModal>
      )}
      <div className="crew-component-subheader">
        <button
          className="crew-component-button"
          onClick={() => props.onReturnClickCallback()}
        >
          Back
        </button>
        <button
          className="crew-component-button"
          onClick={() => setShowRequestModel(true)}
        >
          Request {props.crewName} Moment
        </button>
      </div>
      <div className="crew-page-section">
        {getSections(moments.filter(x => x.people.includes(`${props.crewName}`) && x.tags.includes(Tag.Lore))).map((section) => (
        <>
          <div className="crew-page-subheader">{section}</div>
          <div className="crew-page-content">
            <div className="crew-page-moments-grid">
            {moments.filter(x => x.people.includes(`${props.crewName}`) && x.tags.includes(Tag.Lore) && x.section?.includes(section!)).map((moment) => (
              <MomentComponent moment={moment} key={`${moment.title}-${moment.section}`}/>
            )
            )}
            </div>
          </div>
        </>))}
      </div>
    </div>
  )  
}

export default CrewMemberComponent;
