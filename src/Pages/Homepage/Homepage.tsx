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
                            <YouTube videoId="BT7H1IwjuOE" opts={opts} onReady={onReady} style={divStyle} />
                        </div>
                    </div>
                    <div className="topics-container">

                        <div className="topics-title">TOPICS FROM H3 SHOW #124</div>
                        <div className="topics">
                            <HomepagePersonCard person={people.find(x => x.name == "Ian")!} jumpToTime={() => jumpToTime(5015)} />
                            <HomepagePersonCard person={people.find(x => x.name == "AB")!} jumpToTime={() => jumpToTime(565)} />
                            <HomepagePersonCard person={people.find(x => x.name == "Tyjule")!} jumpToTime={() => jumpToTime(7357)} />
                            <HomepagePersonCard person={people.find(x => x.name == "Yung Gravy")!} jumpToTime={() => jumpToTime(720)} />
                            <HomepagePersonCard person={people.find(x => x.name == "Lewis Saunderson")!} jumpToTime={() => jumpToTime(5640)} />
                            <TopicCard
                                image={"https://www.disneylists.com/wp-content/uploads/2019/12/Featured-Rise-of-the-Resistance.jpg"}
                                headerText={"1 Year Ago"}
                                description={"Ashes Scattered on Rise of the Resistance"}
                                url={"https://youtu.be/zkoKnz5zE3o?t=3534"}
                                jumpToTime={() => jumpToTime(5061)} />
                            <TopicCard 
                                image={"Images/Zach_Suitcase.png"}
                                headerText={"3 Years Ago"}
                                description={"Zach Opens the Cursed Suitcase"}
                                url={"https://www.youtube.com/watch?v=auPJ1GsFOSg&t=7065s"}
                                jumpToTime={() => jumpToTime(7698)} />
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