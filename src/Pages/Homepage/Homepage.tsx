import { useDataContext } from "../../context/DataContext";
import "./Homepage.scss";
import { useEffect, useState } from "react";
import YouTube from 'react-youtube';
import UpdatesSection from "./UpdatesSection";
import HomepagePersonCard from "./HomepagePersonCard";
import SubmitModal from "../../components/Modals/SubmitModal/SubmitModal";
import GeneralFeedbackModal from "../../components/Modals/GeneralFeedbackModal/GeneralFeedbackModal";
import PsychologyInSeattleSection from "./PsychologyInSeattleSection";

function Homepage() {
    const { people, episodes } = useDataContext();
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
                        <div className="topics-title">{`TOPICS FROM H3 SHOW #${getLatestEpisode()?.number}`}</div>
                        <div className="topics">
                            <HomepagePersonCard person={people.find(x => x.name == "Steiny")!} jumpToTime={() => jumpToTime(7200)} />
                            <HomepagePersonCard person={people.find(x => x.name == "Andrew Tate")!} jumpToTime={() => jumpToTime(8360)} />
                            <HomepagePersonCard person={people.find(x => x.name == "Bradley Martyn")!} jumpToTime={() => jumpToTime(7595)} />
                            <HomepagePersonCard person={people.find(x => x.name == "Russell Brand")!} jumpToTime={() => jumpToTime(4310)} />
                            <HomepagePersonCard person={people.find(x => x.name == "Ashton Hall")!} jumpToTime={() => jumpToTime(6515)} />
                            <HomepagePersonCard person={people.find(x => x.name == "Dr Mike")!} jumpToTime={() => jumpToTime(6305)} />
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