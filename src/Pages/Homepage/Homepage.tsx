import { useDataContext } from "../../context/DataContext";
import "./Homepage.scss";
import { useEffect, useState } from "react";
import YouTube, { YouTubeEvent, YouTubePlayer } from 'react-youtube';
import UpdatesSection from "./UpdatesSection";
import SubmitModal from "../../components/Modals/SubmitModal/SubmitModal";
import GeneralFeedbackModal from "../../components/Modals/GeneralFeedbackModal/GeneralFeedbackModal";
import PsychologyInSeattleSection from "./PsychologyInSeattleSection";
import HomepagePersonCard from "./HomepagePersonCard";
import TopicCard from "../Topics/TopicCard";
import MomentCard from "../Generic Cards/MomentCard";
import { EpisodeType } from "../../models/enums/EpisodeType";
import { Episode } from "../../models/Episode";

function Homepage() {
    // @ts-ignore
    const { people, episodes, moments} = useDataContext();
    const [player, setPlayer] = useState<YouTubePlayer | null>(null);
    const [updatesSelected, setUpdatesSelected] = useState<boolean>(false);
    const [psychologySelected, setPsychologySelected] = useState<boolean>(false);
    const [showEmailModal, setShowEmailModal] = useState<boolean>(false);
    const [episodeOffset, setEpisodeOffset] = useState<number>(0)
    const [isMobile, setIsMobile] = useState(false);
    const [currentEpisode, setCurrentEpisode] = useState<Episode>()

    useEffect(() => {
        const episode = getEpisodeByNumber(155 - episodeOffset)
        setCurrentEpisode(episode)

        if(player && episode){
            player.cueVideoById(episode.getVideoId()) 
        }
        
    }, [episodeOffset, episodes]);

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

    const getEpisodeByNumber = (episodeNumber : number) => {
        return episodes.find(x => x.number == episodeNumber && x.type.toString() == EpisodeType[EpisodeType.H3Show])
    }

    // @ts-ignore
    const getEpisodeByTitle = (title: string) => {
        if(episodes.length <= 0)
            return;

        return episodes.find(x => x.title == title);
    }

    const onReady = (event : YouTubeEvent<number>) => {
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
                            {episodeOffset != 0 &&
                                <div className="previous-episode-button" onClick={() => setEpisodeOffset(episodeOffset - 1)}>{'<'}</div>
                            }
                            <YouTube videoId={currentEpisode?.getVideoId()} opts={opts} onReady={onReady} style={divStyle} />
                            <div className="next-episode-button" onClick={() => setEpisodeOffset(episodeOffset + 1)}>{'>'}</div>
                        </div>
                    </div>
                    <div className="topics-container">
                        <div className="topics-title">{`GOOFS & GAFFS FROM H3 SHOW #${getLatestEpisode()?.number as number - episodeOffset}`}</div>
                        {getLatestEpisode()?.number as number - episodeOffset == 155 && 
                            <div className="topics">
                                <MomentCard moment={moments.find(x => x.title == "The Crew Try to Fly a Plane!")!}></MomentCard>
                                <HomepagePersonCard person={people.find(x => x.name == "iDubbbz")!} title="Debriefing the iDubbbz Boxing Coach Call-In" jumpToTime={() => jumpToTime(461)} />
                                <HomepagePersonCard person={people.find(x => x.name == "Justin Bieber")!} title="Can Ethan conduct like Justin Bieber?" jumpToTime={() => jumpToTime(2709)} />
                                <HomepagePersonCard person={people.find(x => x.name == "Boogie2988")!} title="Boogie Waits in Line for a Switch 2" jumpToTime={() => jumpToTime(5230)} />
                                <HomepagePersonCard person={people.find(x => x.name == "Elon Musk")!} jumpToTime={() => jumpToTime(6920)} />
                            </div>
                        }
                        {getLatestEpisode()?.number as number - episodeOffset == 154 && 
                            <div className="topics">
                                Coming Soon
                            </div>
                        }
                        {getLatestEpisode()?.number as number - episodeOffset == 153 && 
                            <div className="topics">
                                Coming Soon
                            </div>
                        }
                        {getLatestEpisode()?.number as number - episodeOffset == 152 && 
                            <div className="topics">
                                <TopicCard outlineColor="Yellow" image={"https://i.ytimg.com/vi/Wo_xHGPd9yM/sddefault.jpg"} headerText={"Alex_The_Fiction"} description={"Check Out H3 Jeopardy!"} url={"https://www.youtube.com/watch?v=Wo_xHGPd9yM"}></TopicCard>
                                <MomentCard moment={moments.find(x => x.title == "Ethan and Hila vs Blackhead Sucker!")!}></MomentCard>
                                <HomepagePersonCard person={people.find(x => x.name == "Fidias")!} title="Fidias is in over his head" jumpToTime={() => jumpToTime(8070)} />
                                <HomepagePersonCard person={people.find(x => x.name == "Tyjule")!} title="Tyjule's Apology to Ethan" jumpToTime={() => jumpToTime(6680)} />
                                <HomepagePersonCard person={people.find(x => x.name == "Kai Cenat")!} title="Kai Cenat vs. Nazi" jumpToTime={() => jumpToTime(2580)} />
                                <HomepagePersonCard person={people.find(x => x.name == "Candace Owens")!} title="Candace defends Harvey Weinstein" jumpToTime={() => jumpToTime(4180)} />
                                <HomepagePersonCard person={people.find(x => x.name == "iDubbbz")!} title="Anisa continues to humiliate Ian" jumpToTime={() => jumpToTime(11400)} />
                            </div>
                        }
                        {getLatestEpisode()?.number as number - episodeOffset == 151 &&
                            <div className="topics">

                            </div>
                        }
                        {getLatestEpisode()?.number as number - episodeOffset == 150 &&
                            <div className="topics">
                                <MomentCard moment={moments.find(x => x.title == "Ethan Smoked Crack Once - First Mention")!}/>
                                <HomepagePersonCard person={people.find(x => x.name == "Olivia's Dad")!} title="Should Ethan Hang out with Olivia's Dad?" />
                                <HomepagePersonCard person={people.find(x => x.name == "Denims")!} jumpToTime={() => jumpToTime(8430)} />
                                <HomepagePersonCard person={people.find(x => x.name == "Joe Rogan")!} jumpToTime={() => jumpToTime(12060)} />
                                <HomepagePersonCard person={people.find(x => x.name == "Noah Samsen")!} jumpToTime={() => jumpToTime(12305)} />
                                <HomepagePersonCard person={people.find(x => x.name == "Hasan Piker")!} jumpToTime={() => jumpToTime(12305)} />
                                <HomepagePersonCard person={people.find(x => x.name == "Ban Emma Panda")!} jumpToTime={() => jumpToTime(12305)} />
                            </div>
                        }
                        {getLatestEpisode()?.number as number - episodeOffset == 149 &&
                            <div className="topics">
                                <MomentCard moment={moments.find(x => x.title == "The Crews Steven Crowder Button Gag")!} jumpToTime={() => jumpToTime(970)}/>
                                <HomepagePersonCard person={people.find(x => x.name == "Braco")!} title="Braco and the Gaze of Miracles" jumpToTime={() => jumpToTime(0)}/>
                                <HomepagePersonCard person={people.find(x => x.name == "Harley Morenstein")!} title="Harley Calls In to Discuss Creator Clash!" jumpToTime={() => jumpToTime(4394)} />
                                <HomepagePersonCard person={people.find(x => x.name == "James Charles")!} jumpToTime={() => jumpToTime(6850)} />
                                <HomepagePersonCard person={people.find(x => x.name == "Steiny")!} title="Steiny's WILD new Ad" jumpToTime={() => jumpToTime(1320)} />
                                <HomepagePersonCard person={people.find(x => x.name == "Myron Gaines")!} title="Myron Gaines on Skibidy Ohio" jumpToTime={() => jumpToTime(1910)} />
                                <HomepagePersonCard person={people.find(x => x.name == "Hasan Piker")!} jumpToTime={() => jumpToTime(3660)} />
                            </div>
                        }
                        {getLatestEpisode()?.number as number - episodeOffset == 148 &&
                            <div className="topics">
                                Coming Soon
                            </div>
                        }
                        {getLatestEpisode()?.number as number - episodeOffset == 147 &&
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
                            </div>
                        }
                        {getLatestEpisode()?.number as number - episodeOffset == 146 &&
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
                            </div>
                        }
                        {getLatestEpisode()?.number as number - episodeOffset == 145 &&
                            <div className="topics">
                                <TopicCard
                                    image={"/Images/NewContentCop.png"} 
                                    headerText={"CameronF305"} 
                                    description={"There's a New Content Cop in Town!"} 
                                    url={"https://youtu.be/JykMFfa2UD8"} 
                                    outlineColor={"Yellow"} 
                                    jumpToTime={() => jumpToTime(945)}/>
                                <MomentCard moment={moments.find(x => x.title == "The Pope confronts Ethan")!} description={"The Pope Guest Stars!"} jumpToTime={() => jumpToTime(404)}/>
                                <MomentCard moment={moments.find(x => x.title == "The First Traffic Report")!} jumpToTime={() => jumpToTime(585)}/>
                                <HomepagePersonCard person={people.find(x => x.name == "Lonerbox")!} jumpToTime={() => jumpToTime(3045)} />
                                <HomepagePersonCard person={people.find(x => x.name == "iDubbbz")!} jumpToTime={() => jumpToTime(9213)} />
                                <HomepagePersonCard person={people.find(x => x.name == "Jay Shetty")!} title={"Jay Shetty Exposed?"} jumpToTime={() => jumpToTime(1030)} />
                                <HomepagePersonCard person={people.find(x => x.name == "Hasan Piker")!} />
                            </div>
                        }
                        {getLatestEpisode()?.number as number - episodeOffset == 144 &&
                            <div className="topics">
                                <TopicCard
                                    image={"https://files.cdn-files-a.com/uploads/3416624/normal_6817b1154d784.jpg"} 
                                    headerText={"Fan Art"} 
                                    description={"Buy the H3 Lord of the Rings Poster here!"} 
                                    url={"https://www.rsmartdesign.com/prints-and-pins-store/th3-lotr"} 
                                    outlineColor={"Yellow"}
                                    jumpToTime={() => jumpToTime(1198)}/>
                                <MomentCard moment={moments.find(x => x.title == "Bye Dog First Use on the Podcast")!} description={"'Bye Dog' First Use on the Podcast"} jumpToTime={() => jumpToTime(8037)}/>
                                <HomepagePersonCard person={people.find(x => x.name == "Hasan Piker")!} jumpToTime={() => jumpToTime(285)} />
                                <HomepagePersonCard person={people.find(x => x.name == "iDubbbz")!} jumpToTime={() => jumpToTime(5977)} />
                                <HomepagePersonCard person={people.find(x => x.name == "Mike From PA")!} jumpToTime={() => jumpToTime(5060)} />
                                <HomepagePersonCard person={people.find(x => x.name == "Joe Rogan")!} jumpToTime={() => jumpToTime(1415)} />
                            </div>
                        }
                        {getLatestEpisode()?.number as number - episodeOffset == 143 &&
                            <div className="topics">
                                <MomentCard moment={moments.find(x => x.title == "Talking to Hasan for the First Time")!} />
                                <MomentCard moment={moments.find(x => x.title == "The First Episode of Leftovers")!} />
                                <MomentCard moment={moments.find(x => x.title == "Ethan's and Hasan Clash over China")!} />
                                <MomentCard moment={moments.find(x => x.title == "The Last Episode of Leftovers")!} />
                                <MomentCard moment={moments.find(x => x.title == "Addressing Hasan & His Community")!} />
                                <MomentCard moment={moments.find(x => x.title == "Content Nuke - Hasan Piker")!} />
                                <MomentCard moment={moments.find(x => x.title == "Content Cop - H3")!} />
                                <MomentCard moment={moments.find(x => x.title == "Content Deputy - H3")!} />
                            </div>
                        }
                        {getLatestEpisode()?.number as number - episodeOffset == 142 &&
                            <div className="topics">
                                <MomentCard moment={moments.find(x => x.title == "The Crew as VTubers")!} jumpToTime={() => jumpToTime(1430)}/>
                                <HomepagePersonCard person={people.find(x => x.name == "Sam Seder")!} jumpToTime={() => jumpToTime(2857)}/>
                                <HomepagePersonCard person={people.find(x => x.name == "Tim Pool")!} title="Tim Pool Wears a Beanie to a Wedding" jumpToTime={() => jumpToTime(3258)} />
                                <HomepagePersonCard person={people.find(x => x.name == "Keemstar")!} title="Bad Empanada is now..." jumpToTime={() => jumpToTime(9480)} />
                                <HomepagePersonCard person={people.find(x => x.name == "Ban Emma Panda")!} jumpToTime={() => jumpToTime(9480)} />
                                <HomepagePersonCard person={people.find(x => x.name == "Justin Bieber")!} title="Is Justin Bieber Okay?" jumpToTime={() => jumpToTime(12455)} />
                                <HomepagePersonCard person={people.find(x => x.name == "Ariana Grande")!} title="Did Ariana and Spongebob Break Up?" jumpToTime={() => jumpToTime(11580)} />
                                <HomepagePersonCard person={people.find(x => x.name == "Mr Beast")!} title="Mr Beast Re-Awakens Veterans PTSD" jumpToTime={() => jumpToTime(1548)} />
                            </div>
                        }
                        {getLatestEpisode()?.number as number - episodeOffset == 141 &&
                            <div className="topics">
                                Coming Soon
                            </div>
                        }
                        {getLatestEpisode()?.number as number - episodeOffset == 140 &&
                            <div className="topics">
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
                            </div>
                        }
                        {getLatestEpisode()?.number as number - episodeOffset == 139 &&
                            <div className="topics">
                            <HomepagePersonCard person={people.find(x => x.name == "Kermit the Frog")!} jumpToTime={() => jumpToTime(11180)}/>
                            <HomepagePersonCard person={people.find(x => x.name == "Bad Empanada's")!} jumpToTime={() => jumpToTime(10019)} />
                            <HomepagePersonCard person={people.find(x => x.name == "Denims")!} jumpToTime={() => jumpToTime(7090)} />
                            <HomepagePersonCard person={people.find(x => x.name == "Frogan")!} jumpToTime={() => jumpToTime(6537)} />
                            <HomepagePersonCard person={people.find(x => x.name == "Pokimane")!} jumpToTime={() => jumpToTime(10740)} />
                            </div>
                        }
                        {getLatestEpisode()?.number as number - episodeOffset == 138 &&
                            <div className="topics">
                                <HomepagePersonCard person={people.find(x => x.name == "iDubbbz")!} title="Wake Up Ethan" jumpToTime={() => jumpToTime(4085)}/>
                                <HomepagePersonCard person={people.find(x => x.name == "Noah Samsen")!} title="Wake Up Ethan" jumpToTime={() => jumpToTime(4085)} />
                                <HomepagePersonCard person={people.find(x => x.name == "Denims")!} title="Wake Up Ethan" jumpToTime={() => jumpToTime(4085)} />
                                <HomepagePersonCard person={people.find(x => x.name == "Frogan")!} title="Wake Up Ethan" jumpToTime={() => jumpToTime(4085)} />
                                <MomentCard moment={moments.find(x => x.title == "The First Gatsby Entrance!")!} jumpToTime={() => jumpToTime(0)}/>
                                <HomepagePersonCard person={people.find(x => x.name == "The Hawk (Loves Dad)")!} title="Hawk Fixed the Gatsby!" jumpToTime={() => jumpToTime(24)} />
                                <HomepagePersonCard person={people.find(x => x.name == "Zane (Tall Skeleton)")!} title="Tall Skeleton in the Studio!" jumpToTime={() => jumpToTime(932)} />
                            </div>
                        }
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