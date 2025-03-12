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
                            <YouTube videoId="ZDnseOSdk_8" opts={opts} onReady={onReady} style={divStyle} />
                        </div>
                    </div>
                    <div className="topics-container">

                        <div className="topics-title">TOPICS FROM H3 SHOW #119</div>
                        <div className="topics">
                            <HomepagePersonCard person={people.find(x => x.name == "Cousin Tim")!} jumpToTime={() => jumpToTime(6148)} />
                            <TopicCard image={"https://static.wikia.nocookie.net/megaman/images/4/42/Kotobukiya%27s_X_Model_Kit.jpg"}
                                headerText={"1 Year Ago"} description={"Dan Grew Up With Megaman"} url={"https://www.youtube.com/watch?v=cfZM73q7NOc&t=1808"} 
                                jumpToTime={() => jumpToTime(3616)} />
                            <TopicCard image={"Images/Ethan_SHOCKED.png"}
                                headerText={"4 Years Ago"} description={"Ethan Googles 'Gang Green Penis'..."} url={"https://www.youtube.com/watch?v=E3MQh8Z6g3I&t=3959"} 
                                jumpToTime={() => jumpToTime(5032)} />
                            <TopicCard image={"Images/Ethan_Disgusted.png"}
                                headerText={"1 Month Ago"} description={"Ethan 'accidentally' Googles mangled dick"} url={"https://youtu.be/smSkN-I2weE&t=8447"} 
                                jumpToTime={() => jumpToTime(5032)} />
                            <TopicCard image={"Images/Nates_Dog.png"}
                                headerText={"1 Month Ago"} description={"Nate thinks his dog looks like Olive - Origin"} url={"https://youtu.be/A8MzE_Pr9XI&t=11196"} 
                                jumpToTime={() => jumpToTime(3724)} />
                            <HomepagePersonCard person={people.find(x => x.name == "The Rizzler")!} jumpToTime={() => jumpToTime(9360)} />
                            <HomepagePersonCard person={people.find(x => x.name == "Costco Guys")!} jumpToTime={() => jumpToTime(9435)} />
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