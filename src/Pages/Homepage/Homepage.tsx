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
                            <YouTube videoId="VQiExvFz8h8" opts={opts} onReady={onReady} style={divStyle} />
                        </div>
                    </div>
                    <div className="topics-container">

                        <div className="topics-title">TOPICS FROM H3 SHOW #116</div>
                        <div className="topics">
                            <TopicCard image={"https://www.christinascucina.com/wp-content/uploads/2021/06/fullsizeoutput_f3d8.jpeg"}
                                headerText={"2 Years Ago"} description={"Beans on Toast"} url={"https://youtu.be/Q_GoixIfwoY?t=2782"} 
                                jumpToTime={() => jumpToTime(186)} />
                            <TopicCard image={"https://upload.wikimedia.org/wikipedia/en/8/83/Hamilton-poster.jpg"}
                                headerText={"5 Months Ago"} description={"Dan Loves Hamilton"} url={"https://youtu.be/9JPShI_iglU?t=1292"} 
                                jumpToTime={() => jumpToTime(430)} />
                            <TopicCard image={"https://www.boredpanda.com/blog/wp-content/uploads/2023/04/eel-pit-guy-tiktok-642bdaba93071__700.jpg"}
                                headerText={"7 Months Ago"} description={"The Eel Pit"} url={"https://www.youtube.com/watch?v=vI6gooWrtX8&t=12323s"} 
                                jumpToTime={() => jumpToTime(523)} />
                            <TopicCard image={"https://media.gq-magazine.co.uk/photos/5e442958995fbc00086126ad/master/pass/20191219-BTS-04.jpg"} 
                                headerText={"4 Years Ago"} description={"BTS Stans Cancel Ethan (Lost Episode)"} url={"https://youtu.be/ilvnun60EsY"} 
                                jumpToTime={() => jumpToTime(8405)} />
                            <HomepagePersonCard person={people.find(x => x.name == "Rae")!} jumpToTime={() => jumpToTime(37)} />
                            <HomepagePersonCard person={people.find(x => x.name == "Phil Painter")!} jumpToTime={() => jumpToTime(3702)} />
                            <HomepagePersonCard person={people.find(x => x.name == "Selena Gomez")!} jumpToTime={() => jumpToTime(8449)} />
                            <HomepagePersonCard person={people.find(x => x.name == "Emilia Pérez")!} jumpToTime={() => jumpToTime(7260)} />
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