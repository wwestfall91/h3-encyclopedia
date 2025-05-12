import { useDataContext } from "../../context/DataContext";
import "./Homepage.scss";
import { useEffect, useState } from "react";
import YouTube from 'react-youtube';
import UpdatesSection from "./UpdatesSection";
import SubmitModal from "../../components/Modals/SubmitModal/SubmitModal";
import GeneralFeedbackModal from "../../components/Modals/GeneralFeedbackModal/GeneralFeedbackModal";
import PsychologyInSeattleSection from "./PsychologyInSeattleSection";
import MomentCard from "../Generic Cards/MomentCard";
import TopicCard from "../Topics/TopicCard";
import HomepagePersonCard from "./HomepagePersonCard";

function Homepage() {
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
                        {/* <div className="topics-title">{`GOOFS & GAFFS FROM H3 SHOW #${getLatestEpisode()?.number}`}</div> */}
                        <div className="topics-title">{`OTHER MOVIE REVIEWS FROM THE GANG!`}</div>
                        <div className="topics">
                            <TopicCard image={"https://upload.wikimedia.org/wikipedia/en/f/fb/Lord_Rings_Fellowship_Ring.jpg"} 
                                headerText={"2 Weeks Ago"} description={"LOTR: The Fellowship of the Ring"} url={"https://youtu.be/9IG3_s1h1PI?t=5920"} />
                            <TopicCard image={"https://imageio.forbes.com/blogs-images/markhughes/files/2019/04/AVENGERS-ENDGAME-poster-2-1200x1823.jpg"} 
                                headerText={"6 Years Ago"} description={"Avengers: Endgame"} url={"https://youtu.be/DsWSC9Sa3PI?t=5827"} />
                            <TopicCard image={"https://assets.scriptslug.com/live/img/x/posters/11007/joker-2019_2731b11b11.jpg"} 
                                headerText={"5 Years Ago"} description={"Joker"} url={"https://youtu.be/rrA1Wz5o_Hg?t=4714"} />
                            <TopicCard image={"https://assets-prd.ignimgs.com/2024/09/25/megalopolis-1727296486015.jpg"}
                                headerText={"6 Months Ago"} description={"Dan & Ian Review Megalopolis"} url={"https://youtu.be/xS5Jt71-b2o?t=588"} />
                            <TopicCard image={"https://m.media-amazon.com/images/M/MV5BMTQ2NzUxMTAxN15BMl5BanBnXkFtZTcwMzEyMTIwMg@@._V1_.jpg"} 
                                headerText={"6 Months Ago"} description={"Twilight"} url={"https://youtu.be/M9dYrhdXN88?t=4185"} />
                            <TopicCard image={"https://static.wikia.nocookie.net/twilightsaga/images/b/ba/New_Moon_book_cover_%28second%29.jpg"} 
                                headerText={"6 Months Ago"} description={"Twilight: New Moon"} url={"https://youtu.be/RRcDcNSc7rA?t=4210"} />
                            <TopicCard image={"https://m.media-amazon.com/images/M/MV5BNDMwNjAzNzYwOF5BMl5BanBnXkFtZTcwMDY5NzcyMw@@._V1_.jpg"} 
                                headerText={"5 Months Ago"} description={"Twilight: Eclipse"} url={"https://youtu.be/HngwtqKyYdw?t=5640"} />
                            <TopicCard image={"https://m.media-amazon.com/images/M/MV5BNjBlY2M2MTctMzU3Yi00MTY3LTlkMTAtMzhlMzY1YjZlYTA2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"} 
                                headerText={"5 Months Ago"} description={"Twilight: Breaking Dawn (Pt 1)"} url={"https://youtu.be/msxOG5pz34g?t=3190"} />
                            <TopicCard image={"https://m.media-amazon.com/images/M/MV5BMTcyMzUyMzY1OF5BMl5BanBnXkFtZTcwNDQ4ODk1OA@@._V1_.jpg"} 
                                headerText={"5 Months Ago"} description={"Twilight: Breaking Dawn (Pt 2)"} url={"https://youtu.be/GRsAtRPjLh0?t=4610"} />
                            <TopicCard image={"https://s3.amazonaws.com/nightjarprod/content/uploads/sites/261/2025/02/22162818/wTxYZNj3NselE9H9dST2GUn4UYE1-683x1024.jpg"} 
                                headerText={"2 Weeks Ago"} description={"The Minecraft Movie"} url={"https://youtu.be/5OScrVkKApU?t=730"} />
                            {/*<TopicCard image={"https://i.ytimg.com/vi/H7BPskwiDbE/sddefault.jpg"} headerText={"Ethan's New Video!"} description={"iDubbbz and Hasan situation keeps getting worse..."} url={"https://youtu.be/H7BPskwiDbE"}></TopicCard>
                            <HomepagePersonCard person={people.find(x => x.name == "xQc")!} title="xQC's Marvel Rivals Tournament!" jumpToTime={() => jumpToTime(3796)}/>
                            <HomepagePersonCard person={people.find(x => x.name == "Jeff Wittek")!} title="Jeff is Sick" jumpToTime={() => jumpToTime(1160)} />
                            <HomepagePersonCard person={people.find(x => x.name == "Steiny")!} title="Steiny Bailed" jumpToTime={() => jumpToTime(1160)} />
                            <HomepagePersonCard person={people.find(x => x.name == "Tim Pool")!} jumpToTime={() => jumpToTime(4020)} />
                            <HomepagePersonCard person={people.find(x => x.name == "iDubbbz")!} jumpToTime={() => jumpToTime(5540)} />
                            <HomepagePersonCard person={people.find(x => x.name == "Denims")!} jumpToTime={() => jumpToTime(11624)} />
                            <HomepagePersonCard person={people.find(x => x.name == "Bad Empanada's")!} jumpToTime={() => jumpToTime(11340)} />
                             <MomentCard moment={moments.find(x => x.title == "Pokimane")!} jumpToTime={() => jumpToTime(0)}/> */}
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