import { useDataContext } from "../../context/DataContext";
import "./SummerBreak.scss"
import TopicComponent from "../Iceberg/TopicComponent";
import CustomCard1 from "../../components/Cards/CustomCard1/CustomCard1";
import { useNavigate } from "react-router";
import AllCrewAssets from "../../assets/AllCrewAssets";

function SummerBreakSection() {
    // @ts-ignore
    const { topics, people } = useDataContext();
    const navigate = useNavigate();

    return (
        <div className="break-page-container">
            {/* <div className="left-side">
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
            </div> */}
            <div className="right-side">
                <div className="section-title-right">NEW CREW PAGES</div>
                <div className="data">
                        <CustomCard1
                            title={"Nate"}
                            image="https://static.wikia.nocookie.net/h3podcast/images/6/65/Download.jpg"
                            onClickCallback={() => navigate('/Crew')}
                            comingSoon={false}
                        />
                        <CustomCard1
                            title={"Tamara"}
                            image="https://static.wikia.nocookie.net/h3h3/images/c/cc/Tamara_Joseph.jpg"
                            onClickCallback={() => navigate('/Crew')}
                            comingSoon={"Coming 12/29"}
                        />
                        <CustomCard1
                            title={"Morgan"}
                            image="https://i.ytimg.com/vi/waklkPdiXPY/sddefault.jpg"
                            onClickCallback={() => navigate('/Crew')}
                            comingSoon={"Coming 1/5"}
                        />
                        <CustomCard1
                            title={"AB"}
                            image={AllCrewAssets.AB.UniformAB}
                            onClickCallback={() => navigate('/Crew')}
                            comingSoon={"Coming Soon"}
                        />
                    {/* <div className="data-items">

                    </div> */}
                    {/* <div className="data-items">
                        <TopicComponent topic={topics.find(x => x.name == "H3H3Producitons")} overlayText="Level 4" />
                        <TopicComponent topic={topics.find(x => x.name == "Kevin")} overlayText="Level 7" />
                        <TopicComponent topic={topics.find(x => x.name == "The Denny's Incident")} overlayText="Level 6" />
                        <TopicComponent topic={topics.find(x => x.name == "Hiking with Philip DeFranco")} overlayText="Level 7" />
                        <TopicComponent topic={topics.find(x => x.name == "The Eel Pit")} overlayText="Level 7" />
                    </div> */}
                </div>
            </div>
        </div>

    );
    
}

export default SummerBreakSection;