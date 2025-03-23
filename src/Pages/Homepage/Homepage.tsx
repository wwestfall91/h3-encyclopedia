import { useDataContext } from "../../context/DataContext";
import TopicCard from "../Topics/TopicCard";
import "./Homepage.scss";
import { useEffect, useState } from "react";
import YouTube from 'react-youtube';
import UpdatesSection from "./UpdatesSection";
import HomepagePersonCard from "./HomepagePersonCard";
import SubmitModal from "../../components/Modals/SubmitModal/SubmitModal";
import GeneralFeedbackModal from "../../components/Modals/GeneralFeedbackModal/GeneralFeedbackModal";

function Homepage() {
    const { people } = useDataContext();
    const [player, setPlayer] = useState<any>(null);
    const [updatesSelected, setUpdatesSelected] = useState<boolean>(false);
    const [showEmailModal, setShowEmailModal] = useState<boolean>(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1400);
        };

        handleResize(); // Check on initial render
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize); // Clean up
    }, [people.length]);

    const onReady = (event : any) => {
        setPlayer(event.target);
    }

    const jumpToTime = (seconds: number) => {
        if(player){
            player.seekTo(seconds, true);
            player.playVideo();
        }
    }

    const divStyle = {
        display:'flex',
        width:'750px',
        height:'400px',
        border: '1px solid black',
        borderRadius: '5px',
        margin:'15px',
        boxShadow: '30px 30px 20px 1px rgba(0, 0, 0, 0.555)'
    }

    const opts = {
        width:'750px',
        height:'397.5px',
        borderRadius: '10px',
        playerVars: {
          autoplay: 0,
        },
    } as any;

    return (
        <>
        <div id="Homepage">
            {!isMobile && 
                <div className="subheader">
                    <button className={updatesSelected ? "subheader-button" : "subheader-button selected"} onClick={() => setUpdatesSelected(false)}>EPISODE DEBRIEF</button>
                    <button className={!updatesSelected ? "subheader-button" : "subheader-button selected"} onClick={() => setUpdatesSelected(true)}>SITE UPDATES</button>
                </div>
            }

            {!updatesSelected && 
            <>
                {!isMobile && 
                    <div className="submit-button-container">
                        <button className="submit-button" onClick={() => setShowEmailModal(true)}>
                            Submit Feedback
                        </button>
                    </div>
                }
                <div className="page-container">
                    <div className="video-container">
                        <div className="video">
                            <YouTube videoId="bTXSqLY3SpM" opts={opts} onReady={onReady} style={divStyle} />
                        </div>
                    </div>
                    <div className="topics-container">

                        <div className="topics-title">TOPICS FROM H3 SHOW #125</div>
                        <div className="topics">
                            <HomepagePersonCard person={people.find(x => x.name == "Ian")!} jumpToTime={() => jumpToTime(1080)} />
                            <HomepagePersonCard person={people.find(x => x.name == "Tyjule")!} jumpToTime={() => jumpToTime(2260)} />
                            <HomepagePersonCard person={people.find(x => x.name == "Ja Rule")!} jumpToTime={() => jumpToTime(2416)} />
                            <TopicCard
                                image={"Images/ProJared_MajorasMask.png"}
                                headerText={"7 Months Ago"}
                                description={"ProJared looks like Majoras Mask"}
                                url={"https://youtu.be/R7hgK2iHF6Y?t=1321"}
                                jumpToTime={() => jumpToTime(4779)} />
                            <TopicCard 
                                image={"https://psu-gatsby-files-prod.s3.amazonaws.com/s3fs-public/styles/16_9_1000w/public/2023/10/water-polo-pic-jpg_0.jpg"}
                                headerText={"3 Years Ago"}
                                description={"Ethans Water Polo Shit Story"}
                                url={"https://youtu.be/cztc_OXvqJI?t=10980"}
                                jumpToTime={() => jumpToTime(7301)} />
                            <TopicCard 
                                image={"https://pbs.twimg.com/media/FV4YwAxXEAIWlSV.jpg"}
                                headerText={"3 Years Ago"}
                                description={"Ethans Little Hands Fan Art"}
                                url={"https://www.youtube.com/watch?v=6kNZujESbNI&t=502"}
                                jumpToTime={() => jumpToTime(7328)} />
                            <HomepagePersonCard person={people.find(x => x.name == "Blake Lively")!} jumpToTime={() => jumpToTime(8950)} />
                        </div>
                    </div>
                </div>     
            </>
            }
            {updatesSelected &&
                <UpdatesSection />
            }
            
        </div>
        {showEmailModal && (
            <SubmitModal toggleShown={setShowEmailModal} soundbite={true} modal={<GeneralFeedbackModal />} />
        )}
        </>
    );
}

export default Homepage;