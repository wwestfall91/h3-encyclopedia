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
    };

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
                            <YouTube videoId="VQiExvFz8h8" opts={opts} onReady={onReady} style={divStyle}></YouTube>
                        </div>
                    </div>
                    <div className="topics-container">

                        <div className="topics-title">TOPICS FROM H3 SHOW #117</div>
                        <div className="topics">
                            <HomepagePersonCard person={people.find(x => x.name == "Galya")!} jumpToTime={() => jumpToTime(685)} />
                            <TopicCard image={"https://assets-prd.ignimgs.com/2022/06/29/gaming-mouse-1656479071918.jpg"}
                                headerText={"3 Years Ago"} description={"The DPI Guy"} url={"https://www.youtube.com/watch?v=QvGqpAcXNqo&t=6480"} 
                                jumpToTime={() => jumpToTime(1345)} />
                            <TopicCard image={"https://www.qsrmagazine.com/wp-content/uploads/2022/03/Atomic.jpg"}
                                headerText={"2 weeks ago"} description={"Did Gabe actually challenge Ethan to atomic wings? 🤔"} url={"https://youtu.be/IG6GG1x0M9o&t=959"} 
                                jumpToTime={() => jumpToTime(2191)} />
                            <TopicCard image={"https://familydoctor.org/wp-content/uploads/2018/02/41808433_l.jpg"}
                                headerText={"9 Months Ago"} description={"Ethan's last colonoscopy didn't go well..."} url={"https://www.youtube.com/watch?v=jvGC35qMLMw&t=1243s"} 
                                jumpToTime={() => jumpToTime(158)} />
                            <TopicCard image={"https://hips.hearstapps.com/hmg-prod/images/yoko-ono-1.jpg"}
                                headerText={"6 Years Ago"} description={"Listening to Yoko Ono's Warzone (but it got claimed 😞)"} url={"https://youtu.be/fA8eOB91-fY?t=713"} 
                                jumpToTime={() => jumpToTime(9531)} />
                            <HomepagePersonCard person={people.find(x => x.name == "Machine Gun Kelly")!} jumpToTime={() => jumpToTime(37)} />
                            <HomepagePersonCard person={people.find(x => x.name == "The Foodie Boys")!} jumpToTime={() => jumpToTime(37)} />
                            <HomepagePersonCard person={people.find(x => x.name == "Andrew Tate")!} jumpToTime={() => jumpToTime(37)} />
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