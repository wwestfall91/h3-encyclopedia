import { useEffect, useState } from "react";
import { useDataContext } from "../../context/DataContext";
import "./GamePage.scss"
import { Episode } from "../../models/Episode";
import YouTube from "react-youtube";

function GamePage() {
    const { episodes, moments } = useDataContext();
    const [episodeFilterText, setEpisodeFilterText] = useState<string>("");
    const [videoId, setVideoId] = useState<string>();
    const [selected, setSelected] = useState<boolean>(false);
    const [player, setPlayer] = useState<any>(null);

    useEffect(() => {
        const randomIndex = getRandomInt(0, moments.length - 1)
        const moment = moments[randomIndex]
        setVideoId(moment.getVideoId());
    }, []);

    function onChange(event: React.ChangeEvent<HTMLInputElement>) {
        setSelected(false);
        setEpisodeFilterText(event.target.value)
    }

    function getRandomInt(min:number, max:number) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }

    const onReady = (event : any) => {
        setPlayer(event.target);
    }

    const opts = {
        width:'750px',
        height:'397.5px',
        borderRadius: '10px',
        playerVars: {
          autoplay: 1,
          controls:0,
          showinfo:0,
          modestbranding:1,
        },
    } as any;

    const divStyle = {
        display:'flex',
        width:'750px',
        height:'400px',
        border: '1px solid black',
        borderRadius: '5px',
        margin:'15px',
        boxShadow: '30px 30px 20px 1px rgba(0, 0, 0, 0.555)'
    }

    function getEpisodesByString(filter: string) : Episode[] {
        const filteredEpisodes = episodes.filter(x => x.title.toLowerCase().includes(filter.toLowerCase()))

        if(filter == "" || selected)
            return [];


        return filteredEpisodes
    }

    return (
        <div id="GamePage">
            <div className="video-container">
                <div className="blockbar">No Peaking 😄</div>
                <div className="video">
                    <YouTube videoId={videoId} opts={opts} onReady={onReady} style={divStyle}/>
                </div>
            </div>

            <input className="episode-input" type="text" placeholder="Search for Episodes"value={episodeFilterText} onChange={onChange}/>
            { getEpisodesByString(episodeFilterText).map((episode) => (
                <div className="options" onClick={() => {setEpisodeFilterText(episode.title); setSelected(true)}}>
                    {episode.title}
                </div>        
                ))
            }
        </div>
    );
}

export default GamePage;