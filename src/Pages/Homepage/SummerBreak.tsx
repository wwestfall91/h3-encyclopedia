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
                    <div className="data-title">June 30th - July 4th</div>
                    <div className="data-items">
                        <TopicComponent topic={topics.find(x => x.name == "Avery's Favorite Moments!")} />
                        <TopicComponent topic={topics.find(x => x.name == "Hila's Favorite Moments!")} />
                        <TopicComponent topic={topics.find(x => x.name == "Misc Crew Favorites!")} />
                        <TopicComponent topic={topics.find(x => x.name == "Rae's Favorite Moments!")} />
                        <TopicComponent topic={topics.find(x => x.name == "Zane's TOP TEN!")} />
                    </div>
                    <div className="data-title">June 23rd - June 27th</div>
                    <div className="data-items">
                        <TopicComponent topic={topics.find(x => x.name == "Zach's Favorite Moments!")} />
                        <TopicComponent topic={topics.find(x => x.name == "Love's Favorite Moments!")} />
                        <TopicComponent topic={topics.find(x => x.name == "Olivia's Favorite Moments!")} />
                        <TopicComponent topic={topics.find(x => x.name == "AB's Favorite Moments!")} />
                        <TopicComponent topic={topics.find(x => x.name == "Dan's Favorite Moments!")} />
                    </div>
                </div>
            </div>
            <div className="right-side">
                <div className="section-title-right">NEW ICEBERG TOPICS</div>
                <div className="data">
                    <div className="data-title white-date">June 30th - July 4th</div>
                    <div className="data-items">
                        <TopicComponent topic={topics.find(x => x.name == "Karaoke With The Kleins!")} overlayText="Level 10" />
                        <TopicComponent topic={topics.find(x => x.name == "Doo the Dew")} overlayText="Level 11" />
                        <TopicComponent topic={topics.find(x => x.name == "The Meat Mountain")} overlayText="Level 5" />
                        <TopicComponent topic={topics.find(x => x.name == "The Regula Shmegula")} overlayText="Level 8" />
                        <TopicComponent topic={topics.find(x => x.name == "The Mole People")} overlayText="Level 8" />
                    </div>
                    <div className="data-title white-date">June 23rd - June 27th</div>
                    <div className="data-items">
                        <TopicComponent topic={topics.find(x => x.name == "H3H3Producitons")} overlayText="Level 4" />
                        <TopicComponent topic={topics.find(x => x.name == "Kevin")} overlayText="Level 7" />
                        <TopicComponent topic={topics.find(x => x.name == "The Denny's Incident")} overlayText="Level 6" />
                        <TopicComponent topic={topics.find(x => x.name == "Hiking with Philip DeFranco")} overlayText="Level 7" />
                        <TopicComponent topic={topics.find(x => x.name == "The Eel Pit")} overlayText="Level 7" />
                    </div>
                </div>
            </div>
        </div>

    );
}

export default SummerBreakSection;