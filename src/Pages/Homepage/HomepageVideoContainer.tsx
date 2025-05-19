import YouTube from "react-youtube";
import MomentCard from "../Generic Cards/MomentCard";
import HomepagePersonCard from "./HomepagePersonCard";

function HomepageVideoContainer() {
    return (
        <div id="HomepageVideoContainer">
            <div className="video-container">
                <div className="video">
                    <YouTube videoId={getLatestEpisode()?.getVideoId()} opts={opts} onReady={onReady} style={divStyle} />
            </div>
            </div>
            <div className="topics-container">
                <div className="topics-title">{`GOOFS & GAFFS FROM H3 SHOW #${getLatestEpisode()?.number}`}</div>
                {/* <div className="topics-title">{`OTHER MOVIE REVIEWS FROM THE GANG!`}</div> */}
                <div className="topics">
                    <MomentCard moment={moments.find(x => x.title == "The Crews Steven Crowder Button Gag")!} jumpToTime={() => jumpToTime(970)}/>
                    <HomepagePersonCard person={people.find(x => x.name == "Braco")!} title="Braco and the Gaze of Miracles" jumpToTime={() => jumpToTime(0)}/>
                    <HomepagePersonCard person={people.find(x => x.name == "Harley Morenstein")!} title="Harley Calls In to Discuss Creator Clash!" jumpToTime={() => jumpToTime(4394)} />
                    <HomepagePersonCard person={people.find(x => x.name == "James Charles")!} jumpToTime={() => jumpToTime(6850)} />
                    <HomepagePersonCard person={people.find(x => x.name == "Steiny")!} title="Steiny's WILD new Ad" jumpToTime={() => jumpToTime(1320)} />
                    <HomepagePersonCard person={people.find(x => x.name == "Myron Gaines")!} title="Myron Gaines on Skibidy Ohio" jumpToTime={() => jumpToTime(1910)} />
                    <HomepagePersonCard person={people.find(x => x.name == "Hasan Piker")!} jumpToTime={() => jumpToTime(3660)} />
                </div>
            </div>
        </div>
    );
}

export default HomepageVideoContainer;