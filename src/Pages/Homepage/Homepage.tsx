import { useDataContext } from "../../context/DataContext";
import "./Homepage.scss";
import { useEffect, useState } from "react";
import YouTube from 'react-youtube';
import UpdatesSection from "./UpdatesSection";
import SubmitModal from "../../components/Modals/SubmitModal/SubmitModal";
import GeneralFeedbackModal from "../../components/Modals/GeneralFeedbackModal/GeneralFeedbackModal";
import PsychologyInSeattleSection from "./PsychologyInSeattleSection";
import HomepagePersonCard from "./HomepagePersonCard";
import TopicCard from "../Topics/TopicCard";
import MomentCard from "../Generic Cards/MomentCard";

function Homepage() {
    // @ts-ignore
    const { people, episodes, moments} = useDataContext();
    const [player, setPlayer] = useState<any>(null);
    const [updatesSelected, setUpdatesSelected] = useState<boolean>(false);
    const [psychologySelected, setPsychologySelected] = useState<boolean>(false);
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
    
    const getLatestEpisode = () => {
        if(episodes.length <= 0)
            return;

        const episodesByDate = episodes.sort((a, b) => {
            let dateA = new Date(a.date ? a.date : new Date('1995-12-17'));
            let dateB = new Date(b.date ? b.date : new Date('1995-12-17'));
            return dateA.getTime() - dateB.getTime();
        });
        return episodesByDate[episodesByDate.length - 1]
    }

    // @ts-ignore
    const getEpisodeByTitle = (title: string) => {
        if(episodes.length <= 0)
            return;

        return episodes.find(x => x.title == title);
    }

    const onReady = (event : any) => {
        setPlayer(event.target);
    }

    // @ts-ignore
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
                    <button className={updatesSelected || psychologySelected ? "subheader-button" : "subheader-button selected"} onClick={() => {setUpdatesSelected(false); setPsychologySelected(false);} }>EPISODE DEBRIEF</button>
                    <button className={psychologySelected ? "subheader-button selected" : "subheader-button"} onClick={() =>{setUpdatesSelected(false); setPsychologySelected(true);} }>PSYCHOLOGY IN SEATTLE RATINGS</button>
                    <button className={!updatesSelected ? "subheader-button" : "subheader-button selected"} onClick={() => {setUpdatesSelected(true); setPsychologySelected(false);}}>MONTHLY UPDATES</button>
                </div>
            }

            {!updatesSelected && !psychologySelected &&
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
                            <YouTube videoId={getLatestEpisode()?.getVideoId()} opts={opts} onReady={onReady} style={divStyle} />
                    </div>
                    </div>
                    <div className="topics-container">
                        <div className="topics-title">{`GOOFS & GAFFS FROM H3 SHOW #${getLatestEpisode()?.number}`}</div>
                        {/* <div className="topics-title">{`OTHER MOVIE REVIEWS FROM THE GANG!`}</div> */}
                        <div className="topics">
                            <TopicCard outlineColor="Yellow" image={"https://i.ytimg.com/vi/Wo_xHGPd9yM/sddefault.jpg"} headerText={"Alex_The_Fiction"} description={"Check Out H3 Jeopardy!"} url={"https://www.youtube.com/watch?v=Wo_xHGPd9yM"}></TopicCard>
                            <MomentCard moment={moments.find(x => x.title == "Ethan and Hila vs Blackhead Sucker!")!}></MomentCard>
                            <HomepagePersonCard person={people.find(x => x.name == "Fidias")!} title="Fidias is in over his head" jumpToTime={() => jumpToTime(8070)} />
                            <HomepagePersonCard person={people.find(x => x.name == "Tyjule")!} title="Tyjule's Apology to Ethan" jumpToTime={() => jumpToTime(6680)} />
                            <HomepagePersonCard person={people.find(x => x.name == "Kai Cenat")!} title="Kai Cenat vs. Nazi" jumpToTime={() => jumpToTime(2580)} />
                            <HomepagePersonCard person={people.find(x => x.name == "Candace Owens")!} title="Candace defends Harvey Weinstein" jumpToTime={() => jumpToTime(4180)} />
                            <HomepagePersonCard person={people.find(x => x.name == "iDubbbz")!} title="Anisa continues to humiliate Ian" jumpToTime={() => jumpToTime(11400)} />
                        </div>
                    </div>
                </div>
            </>
            }
            {updatesSelected &&
                <UpdatesSection />
            }
            {psychologySelected &&
                <PsychologyInSeattleSection />
            }
            
        </div>
        {showEmailModal && (
            <SubmitModal toggleShown={setShowEmailModal} soundbite={true} modal={<GeneralFeedbackModal />} />
        )}
        </>
    );
}

export default Homepage;