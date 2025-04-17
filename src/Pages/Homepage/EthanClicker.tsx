// import YouTube from "react-youtube";
import { useState } from "react";
import "./EthanClicker.scss"
import YouTube from "react-youtube";
import { useDataContext } from "../../context/DataContext";

function EthanClickerSection() {
    const [player, setPlayer] = useState<any>(null);
    const [isBlocked, setIsBlocked] = useState(true);
    const [isClicked, setIsClicked] = useState(false);

    const showJake = () => {
        PlayAudio();
        setIsClicked(true);
        setTimeout(() => {
            setIsClicked(false);
        }, 2000);
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

    const onReady = (event : any) => {
        setPlayer(event.target);
    }

    async function PlayAudio() {
        let audio = new Audio(`../../../soundbites/JakeDoolittle_NoEthanThatsNotHowThatWorks.mp3`);
        audio.load()
        await audio.play();        
    }

    return (
        <div id="EthanClicker">
            <div className="data-section">
                <input type="text" placeholder="Enter URL Here" />
                    <div className="video-container">
                        <div className="video">
                            {isBlocked &&
                                <>
                                    {isClicked && 
                                        <img className="jake" src="https://static.wikia.nocookie.net/h3h3/images/9/95/Jake_Doolittle.png" />
                                        // <div className="jake" />
                                    }
                                    <div onClick={() => showJake()} className="blocker" />
                                </>
                            }
                            <YouTube videoId={"WZbGjnOT9Mc"} opts={opts} onReady={onReady} style={divStyle} />
                        </div>
                    </div>
            </div>
        </div>
    );
}

export default EthanClickerSection;