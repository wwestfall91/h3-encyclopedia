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
                            <YouTube videoId="1X6PGsxZKs0" opts={opts} onReady={onReady} style={divStyle} />
                        </div>
                    </div>
                    <div className="topics-container">
                        <div className="topics-title">TOPICS FROM H3 SHOW #126</div>
                        <div className="topics">
                            <HomepagePersonCard person={people.find(x => x.name == "Zach")!} jumpToTime={() => jumpToTime(120)} />
                            <HomepagePersonCard person={people.find(x => x.name == "Philip Defranco")!} jumpToTime={() => jumpToTime(840)} />
                            <HomepagePersonCard person={people.find(x => x.name == "HungerFF")!} jumpToTime={() => jumpToTime(1335)} />
                            <TopicCard 
                                image={"https://h3out.com/wp-content/uploads/2020/05/85993e3fa366120a2f2b7ed718375dd5-1024x458.jpg"}
                                headerText={"5 Years Ago"}
                                description={"Wikifeet"}
                                url={"https://youtu.be/_fiKPLXYttw&t=4455"}
                                jumpToTime={() => jumpToTime(1781)} />
                            <TopicCard 
                                image={"https://res.cloudinary.com/graham-media-group/image/upload/f_auto/q_auto/c_thumb,w_700/v1/media/gmg/IV6EZMWBJBHGVD4TO56YFKXPR4.jpg"}
                                headerText={"9 Months Ago"}
                                description={"The First Traffic Report"}
                                url={"https://youtu.be/dAIDkR4xb7U&t=73"}
                                jumpToTime={() => jumpToTime(2018)} />
                            <TopicCard
                                image={"https://giadinh.mediacdn.vn/zoom/740_463/Images/Uploaded/Share/2009/06/26/3e5mcheo.jpg"}
                                headerText={"1 Year Ago"}
                                description={"AB went to Neverland Ranch?!"}
                                url={"https://www.youtube.com/watch?v=z9IPrpq6wVs&t=6531"}
                                jumpToTime={() => jumpToTime(2683)} />
                            <TopicCard 
                                image={"Images/TallSkeleton_PeeInPool.png"}
                                headerText={"3 Years Ago"}
                                description={"The Crew on Peeing in the Pool"}
                                url={"https://www.youtube.com/watch?v=cztc_OXvqJI&t=10510"}
                                jumpToTime={() => jumpToTime(3965)} />
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