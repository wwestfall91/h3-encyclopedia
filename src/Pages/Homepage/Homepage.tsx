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
                            <YouTube videoId="EeX_a0csMco" opts={opts} onReady={onReady} style={divStyle} />
                        </div>
                    </div>
                    <div className="topics-container">

                        <div className="topics-title">TOPICS FROM H3 SHOW #122</div>
                        <div className="topics">
                            <HomepagePersonCard person={people.find(x => x.name == "Galya")!} jumpToTime={() => jumpToTime(8870)} />
                            <HomepagePersonCard person={people.find(x => x.name == "Bhad Bhabie")!} jumpToTime={() => jumpToTime(3050)} />
                            <HomepagePersonCard person={people.find(x => x.name == "Rae")!} jumpToTime={() => jumpToTime(5677)} />
                            <TopicCard 
                                image={"https://i0.wp.com/www.thewrap.com/wp-content/uploads/2016/06/jay-leno-car-crash.jpg"}
                                headerText={"2 Years Ago"} 
                                description={"Jay Leno flips his car (Ethan's Edit)"} 
                                url={"https://youtu.be/lUP64bI7INk?t=1622"} 
                                jumpToTime={() => jumpToTime(935)} />
                            <TopicCard 
                                image={"/Images/Ethan_Dennys.png"}
                                headerText={"3 Years Ago"} 
                                description={"The Denny's Incident"} 
                                url={"https://youtu.be/bVwGr98HYqQ&t=3043"} 
                                jumpToTime={() => jumpToTime(1184)} />
                            <TopicCard 
                                image={"https://images.1851franchise.com/filters:format(webp)/story1/2727932/968244c640f23177a029a4a77f7202886616.jpg"}
                                headerText={"1 Year Ago"} 
                                description={"Dan worked at California Pizza Kitchen"} 
                                url={"https://www.youtube.com/watch?v=DWY8krPi_Sc&t=6909"} 
                                jumpToTime={() => jumpToTime(3477)} />
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