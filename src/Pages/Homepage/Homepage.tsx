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
                            <YouTube videoId="0Z4TGbApoIo" opts={opts} onReady={onReady} style={divStyle} />
                        </div>
                    </div>
                    <div className="topics-container">

                        <div className="topics-title">GOODBYE IAN - WE'LL MISS YOU!!</div>
                        <div className="topics">
                            <HomepagePersonCard person={people.find(x => x.name == "Ian")!} jumpToTime={() => jumpToTime(29810)} />
                            <TopicCard 
                                image={"/Images/IanSong.png"}
                                headerText={"5 Years Ago"} 
                                description={"♪ Ian has to pee pee ♪"} 
                                url={"https://www.youtube.com/watch?v=g3gkFORfTZA&t=8967s"} 
                                jumpToTime={() => jumpToTime(32001)} />
                            <HomepagePersonCard person={people.find(x => x.name == "Donna Klein")!} jumpToTime={() => jumpToTime(8072)} />
                            <HomepagePersonCard person={people.find(x => x.name == "Tom Ward")!} jumpToTime={() => jumpToTime(6084)} />
                            <HomepagePersonCard person={people.find(x => x.name == "Swami")!} jumpToTime={() => jumpToTime(15584)} />
                            <HomepagePersonCard person={people.find(x => x.name == "Olivia's Dad")!} jumpToTime={() => jumpToTime(10185)} />
                            <HomepagePersonCard person={people.find(x => x.name == "Helen Keller")!} jumpToTime={() => jumpToTime(25010)} />
                            <TopicCard 
                                image={"https://media.gannett-cdn.com/springfield/41823000001/201404/1700/41823000001_3427152740001_video-still-for-video-3427114725001.jpg"}
                                headerText={"2 Years Ago"} 
                                description={"Ethan talks about Shrek's FAT hog more than you think"} 
                                url={"https://youtu.be/R8Y-ih8DLlc?t=1712"} 
                                jumpToTime={() => jumpToTime(0)}
                                hideTime={true} />
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