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
                            <YouTube videoId="wWG9Msgmnh4" opts={opts} onReady={onReady} style={divStyle} />
                        </div>
                    </div>
                    <div className="topics-container">

                        <div className="topics-title">TOPICS FROM H3 SHOW #120</div>
                        <div className="topics">
                            <HomepagePersonCard person={people.find(x => x.name == "Philip Defranco")!} jumpToTime={() => jumpToTime(9225)} />
                            <TopicCard 
                                image={"https://pbs.twimg.com/tweet_video_thumb/GdHCwU8aUAA0Fjh.jpg"}
                                headerText={"1 Months Ago"} 
                                description={"Ethan Poops while The Crew watches The Rizzler Scream"} 
                                url={"https://youtu.be/6KV16LWcnTY&t=5693"} 
                                jumpToTime={() => jumpToTime(2212)} />
                            <TopicCard 
                                image={"https://i.kym-cdn.com/photos/images/original/001/051/806/03c.jpg"}
                                headerText={"6 Years Ago"} 
                                description={"The FIRST Godfather"} 
                                url={"https://www.youtube.com/watch?v=ExiLfQ_RyAA&t=452s"} 
                                jumpToTime={() => jumpToTime(1406)} />
                            <TopicCard 
                                image={"/Images/Zach_Brother_Feet.png"}
                                headerText={"3 Years Ago"} 
                                description={"C-Man Rates Zach's Brother's Feet"} 
                                url={"https://www.youtube.com/watch?v=wtlYFLAEQKw&t=3725s"} 
                                jumpToTime={() => jumpToTime(3114)} />
                            <TopicCard 
                                image={"https://cdn-2.cinemaparadiso.co.uk/2108060450304_l.jpg"}
                                headerText={"7 Months Ago"} 
                                description={"Ethan LOVES The Fifth Element"} 
                                url={"https://youtu.be/uPFyV_cLylI?t=5962"} 
                                jumpToTime={() => jumpToTime(308)} />
                            <TopicCard 
                                image={"https://upload.wikimedia.org/wikipedia/en/thumb/8/83/Hamilton-poster.jpg/220px-Hamilton-poster.jpg"}
                                headerText={"6 Months Ago"} 
                                description={"Dan LOVES Hamilton"} 
                                url={"https://www.youtube.com/watch?v=9JPShI_iglU&t=656s"} 
                                jumpToTime={() => jumpToTime(1686)} />
                            <TopicCard 
                                image={"https://i0.wp.com/musically.com/wp-content/uploads/2018/07/triller.png"}
                                headerText={"4 Months Ago"} 
                                description={"Dan puts his life savings into Triller IPO"} 
                                url={"https://www.youtube.com/watch?v=M9dYrhdXN88&t=10400s"} 
                                jumpToTime={() => jumpToTime(550)} />
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