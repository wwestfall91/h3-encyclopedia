import { useDataContext } from "../../context/DataContext";
import "./SummerBreak.scss"
import TopicComponent from "../Iceberg/TopicComponent";

function SummerBreakSection() {
    // @ts-ignore
    const { topics, people } = useDataContext();
    
    return (
        <div className="break-page-container">
            <div className="left-side">
                <div className="section-title-left">FAVORITE CREW MOMENTS</div>
                <div className="data">
                    <div className="data-title">June 23rd - June 27th</div>
                    <div className="data-items">
                        <TopicComponent topic={topics.find(x => x.name == "Zach's Favorite Moments!")} />
                        <TopicComponent topic={undefined} isBlank={true} customText={"TUESDAY"} />
                        <TopicComponent topic={undefined} isBlank={true} customText={"WEDNESDAY"} />
                        <TopicComponent topic={undefined} isBlank={true} customText={"THURSDAY"} />
                        <TopicComponent topic={undefined} isBlank={true} customText={"FRIDAY"} />
                    </div>
                    <div className="data-title">June 30th - July 4th</div>
                    <div className="data-items">
                        <TopicComponent topic={undefined} isBlank={true} customText={"MONDAY"} />
                        <TopicComponent topic={undefined} isBlank={true} customText={"TUESDAY"} />
                        <TopicComponent topic={undefined} isBlank={true} customText={"WEDNESDAY"} />
                        <TopicComponent topic={undefined} isBlank={true} customText={"THURSDAY"} />
                        <TopicComponent topic={undefined} isBlank={true} customText={"FRIDAY"} />
                    </div>
                </div>
            </div>
            <div className="right-side">
                <div className="section-title-right">NEW ICEBERG TOPICS</div>
                <div className="data">
                    <div className="data-title white-date">June 23rd - June 27th</div>
                    <div className="data-items">
                        <TopicComponent topic={topics.find(x => x.name == "H3H3Producitons")} overlayText="Level 4" />
                        <TopicComponent topic={undefined} isBlank={true} customText={"TUESDAY"} />
                        <TopicComponent topic={undefined} isBlank={true} customText={"WEDNESDAY"} />
                        <TopicComponent topic={undefined} isBlank={true} customText={"THURSDAY"} />
                        <TopicComponent topic={undefined} isBlank={true} customText={"FRIDAY"} />
                    </div>
                    <div className="data-title white-date">June 30th - July 4th</div>
                    <div className="data-items">
                        <TopicComponent topic={undefined} isBlank={true} customText={"MONDAY"} />
                        <TopicComponent topic={undefined} isBlank={true} customText={"TUESDAY"} />
                        <TopicComponent topic={undefined} isBlank={true} customText={"WEDNESDAY"} />
                        <TopicComponent topic={undefined} isBlank={true} customText={"THURSDAY"} />
                        <TopicComponent topic={undefined} isBlank={true} customText={"FRIDAY"} />
                    </div>
                </div>
            </div>
        </div>

    );
}

export default SummerBreakSection;