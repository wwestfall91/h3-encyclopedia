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
                            <YouTube videoId="Hc-F93YUWag" opts={opts} onReady={onReady} style={divStyle} />
                        </div>
                    </div>
                    <div className="topics-container">

                        <div className="topics-title">TOPICS FROM H3 SHOW #121</div>
                        <div className="topics">
                            <TopicCard 
                                image={"Images/Ians_Dead.png"}
                                headerText={"2 Years Ago"} 
                                description={"Ian's best switcher moment"} 
                                url={"https://www.youtube.com/watch?v=1Z4LTCCodeg&t=9045s"} 
                                jumpToTime={() => jumpToTime(12779)} />
                            <TopicCard 
                                image={"/Images/Olivia_SharkTank.png"}
                                headerText={"9 Months Ago"} 
                                description={"Olivia's Sloppy Soupy's"} 
                                url={"https://youtu.be/iiz9Gispe5I?t=8462"} 
                                jumpToTime={() => jumpToTime(2209)} />
                            <TopicCard 
                                image={"https://pbs.twimg.com/media/FhJcACxXwAAAT-V.jpg"}
                                headerText={"2 Weeks Ago"} 
                                description={"Dan HATES how-to-pronounce videos"} 
                                url={"https://www.youtube.com/watch?v=UK47xzasVxA&t=1873s"} 
                                jumpToTime={() => jumpToTime(2407)} />
                            <HomepagePersonCard person={people.find(x => x.name == "The Foodie Boys")!} jumpToTime={() => jumpToTime(2500)} />
                            <HomepagePersonCard person={people.find(x => x.name == "Dave Portnoy")!} jumpToTime={() => jumpToTime(2500)} />
                            <HomepagePersonCard person={people.find(x => x.name == "Justin Bieber")!} jumpToTime={() => jumpToTime(1515)} />
                            <HomepagePersonCard person={people.find(x => x.name == "C-Man")!} jumpToTime={() => jumpToTime(1515)} />
                            <TopicCard 
                                image={"https://www.24-7pressrelease.com/assets/attachments/050/press_release_distribution_0500031_190169.jpg"}
                                headerText={"3 Years Ago"} 
                                description={"Jimmie Lee Goes on Newsmax"} 
                                url={"https://youtu.be/AlcD8_dyVvQ&t=2662"} 
                                jumpToTime={() => jumpToTime(1548)} />
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