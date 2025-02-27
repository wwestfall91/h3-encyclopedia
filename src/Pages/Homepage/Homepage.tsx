import { useDataContext } from "../../context/DataContext";
import TopicCard from "../Topics/TopicCard";
import "./Homepage.scss";
import { useEffect, useState } from "react";
import YouTube from 'react-youtube';
import UpdatesSection from "./UpdatesSection";
import HomepagePersonCard from "./HomepagePersonCard";

function Homepage() {
    const { people } = useDataContext();
    const [player, setPlayer] = useState<any>(null);
    const [updatesSelected, setUpdatesSelected] = useState<boolean>(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1400);
        };

        handleResize(); // Check on initial render
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize); // Clean up
    }, []);

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
        height:'400px',
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
                <div className="page-container">
                    <div className="video-container">
                        <div className="video">
                            <YouTube videoId="bq4Bq0KXlGE" opts={opts} onReady={onReady} style={divStyle}></YouTube>
                        </div>
                    </div>
                    <div className="topics-container">
                        <div className="topics-title">TOPICS FROM H3 SHOW #114</div>
                        <div className="topics">
                            <TopicCard image={"https://pbs.twimg.com/media/FV4YwAxXEAIWlSV.jpg"}
                                headerText={"4 Years Ago"} description={"Ethan has Tiny Hands"} url={"https://youtu.be/3LF3F8Cl-Q4?t=747"} 
                                jumpToTime={() => jumpToTime(671)} />
                            <TopicCard image={"https://cdn.cameo.com/thumbnails/6476d74ab077c0dd916a7fcb-processed.jpg"}
                                headerText={"2 Years Ago"} description={"AB Almost Broke his Dick"} url={"https://youtu.be/LY0H8sBnbZY&t=264"} 
                                jumpToTime={() => jumpToTime(911)} />
                            <TopicCard image={"Images/ASLInterpretter.jpeg"}
                                headerText={"7 Months Ago"} description={"ASL Interpretter at Live Show"} url={"https://youtu.be/e2SUGfXVy4A?t=835"} 
                                jumpToTime={() => jumpToTime(4162)} />
                            <TopicCard image={"https://www.mashed.com/img/gallery/popular-dennys-menu-items-ranked-worst-to-best/intro-1623239743.jpg"} 
                                headerText={"4 Years Ago"} description={"The Denny's Incident"} url={"https://youtu.be/bVwGr98HYqQ&t=3043"} 
                                jumpToTime={() => jumpToTime(5292)} />
                            <TopicCard image={"https://illinoisrecoverycenter.com/wp-content/uploads/2024/06/crack-cocaine.jpg"} 
                                headerText={"7 Years Ago"} description={"Ethan Smoked Crack Once"} url={"https://www.youtube.com/watch?v=yVeGBT7X-pY&t=4907s"} 
                                jumpToTime={() => jumpToTime(7460)} />
                            <TopicCard image={"https://media.tenor.com/UzY35_ZiEdsAAAAe/gazebo-h3gazebo.png"}
                                headerText={"6 Years Ago"} description={"Hila is Divorcing Ethan"} url={"https://youtu.be/e2SUGfXVy4A?t=835"} 
                                jumpToTime={() => jumpToTime(8586)} />
                            <HomepagePersonCard person={people.find(x => x.name == "Will Smith")!} jumpToTime={() => jumpToTime(1860)} />
                            <HomepagePersonCard person={people.find(x => x.name == "Jason.Reborn")!} jumpToTime={() => jumpToTime(8039)} />
                        </div>
                    </div>
                </div>     
            }
            {updatesSelected &&
                <UpdatesSection />
            }
            
        </div>
        </>
    );
}

export default Homepage;