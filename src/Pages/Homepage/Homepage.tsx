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
                            <YouTube videoId="yrWs1e_vw0U" opts={opts} onReady={onReady} style={divStyle} />
                        </div>
                    </div>
                    <div className="topics-container">

                        <div className="topics-title">TOPICS FROM H3 SHOW #118</div>
                        <div className="topics">
                            <HomepagePersonCard person={people.find(x => x.name == "Avery")!} jumpToTime={() => jumpToTime(6725)} />
                            <TopicCard image={"https://www.tradeinn.com/f/13776/137761880_2/roccat-kone-pure-ultra-gaming-mouse.webp"}
                                headerText={"2 Years Ago"} description={"The Death of Dan's Mouse"} url={"https://www.youtube.com/watch?v=GgwXXGtUCgE&t=9177"} 
                                jumpToTime={() => jumpToTime(666)} />
                            <HomepagePersonCard person={people.find(x => x.name == "Matt Hoss")!} jumpToTime={() => jumpToTime(3077)} />
                            <TopicCard image={"https://staticg.sportskeeda.com/editor/2025/01/019a9-17363187395886-1920.jpg"}
                                headerText={"7 Months Ago"} description={"Seig Heil in Seattle?"} url={"https://youtu.be/gyIlayEQN3E&t=7525"} 
                                jumpToTime={() => jumpToTime(6860)} />
                            <HomepagePersonCard person={people.find(x => x.name == "Fancy Chef")!} jumpToTime={() => jumpToTime(7980)} />
                            <HomepagePersonCard person={people.find(x => x.name == "Jake Paul")!} jumpToTime={() => jumpToTime(8220)} />
                            <HomepagePersonCard person={people.find(x => x.name == "Logan Paul")!} jumpToTime={() => jumpToTime(8220)} />
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