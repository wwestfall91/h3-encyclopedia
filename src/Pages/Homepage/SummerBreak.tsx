import { useDataContext } from "../../context/DataContext";
import "./SummerBreak.scss"
import CustomCard1 from "../../components/Cards/CustomCard1/CustomCard1";
import { useNavigate } from "react-router";
import AllCrewAssets from "../../assets/AllCrewAssets";
import TopicComponent from "../Iceberg/TopicComponent";

function SummerBreakSection() {
    // @ts-ignore
    const { topics, people } = useDataContext();
    const navigate = useNavigate();

    return (
        <div className="break-page-container">
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
                            comingSoon={false}
                        />
                        <CustomCard1
                            title={"Morgan"}
                            image="https://i.ytimg.com/vi/waklkPdiXPY/sddefault.jpg"
                            onClickCallback={() => navigate('/Crew')}
                            comingSoon={false}
                        />
                        <CustomCard1
                            title={"AB"}
                            image={AllCrewAssets.AB.UniformAB}
                            onClickCallback={() => navigate('/Crew')}
                            comingSoon={"Coming Soon"}
                        />
                </div>
            </div>
            <div className="left-side">
                <div className="section-title-left">NEW ICEBERG TOPICS</div>
                <div className="data">
                        <TopicComponent topic={topics.find(x => x.name == "The Todd n' Tuck")} overlayText="Level 10" />
                        <TopicComponent topic={topics.find(x => x.name == "Traffic Report")} overlayText="Level 2" />
                        <TopicComponent topic={topics.find(x => x.name == "Ethan's Fridge")} />
                        <TopicComponent topic={topics.find(x => x.name == "Moo Deng Time")} image="https://upload.wikimedia.org/wikipedia/commons/d/d2/Moo_deng_%E0%B8%AB%E0%B8%A1%E0%B8%B9%E0%B9%80%E0%B8%94%E0%B9%89%E0%B8%87_%282024-09-11%29_-_img_02.jpg" />
                        <TopicComponent topic={topics.find(x => x.name == "Dan's Chips")} image="https://h3out.com/wp-content/uploads/2020/05/8be89833214bdedd54489fe4e17c54a0-1024x575.jpg" />
                </div>
            </div>
        </div>

    );
    
}

export default SummerBreakSection;