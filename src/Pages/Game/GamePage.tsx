import { useEffect, useState } from "react";
import { useDataContext } from "../../context/DataContext";
import "./GamePage.scss"
import { Episode } from "../../models/Episode";
import YouTube from "react-youtube";
import { Moment } from "../../models/Moments/Moment";
import { EpisodeType } from "../../models/enums/EpisodeType";

function GamePage() {
    const { episodes, moments } = useDataContext();
    const [episodeFilterText, setEpisodeFilterText] = useState<string>("");
    const [videoId, setVideoId] = useState<string>();
    const [currentMoment, setCurrentMoment] = useState<Moment>();
    const [selected, setSelected] = useState<boolean>(false);
    const [player, setPlayer] = useState<any>(null);
    const [gameStarted, setGameStarted] = useState<boolean>();
    const [isCorrectGuess, setIsCorrectGuess] = useState<boolean>(false);
    const [helperText, setHelperText] = useState("");
    const [inputClass, setInputClass] = useState<string>("episode-input");
    const [videoClass, setVideoClass] = useState<string>("try-again");
    const [guesses, setGuesses] = useState<string[]>([]);

    useEffect(() => {
        if(!player)
            return;

        if(isCorrectGuess){
            const moment = getRandomMoment();
            player.loadVideoById({videoId: moment.getVideoId(), startSeconds: moment.getTime()})
        }
    }, [isCorrectGuess]);

    function getHint1(){
        return `Is show type: ${currentMoment?.episodeType.toString()}`
    }

    function getHint2(){
        const episodesOfType = episodes.filter(x => x.type == currentMoment?.episodeType && x.title != currentMoment.title)
        const priorEpisodes = episodesOfType.filter(x => x.number < currentMoment?.episodeNumber!)
        const randomIndex = getRandomInt(0, priorEpisodes.length - 1)
        const priorEpisode = priorEpisodes[randomIndex];

        if(priorEpisodes.length <= 0){
            return `This was the first episode of its type`    
        }

        return `This episode happened sometime after ${priorEpisode.getShortTitle()}`
    }

    function getHint3(){
        const episodesOfType = episodes.filter(x => x.type == currentMoment?.episodeType && x.title != currentMoment.title)
        const laterEpisodes = episodesOfType.filter(x => x.number > currentMoment?.episodeNumber!)
        const randomIndex = getRandomInt(0, laterEpisodes.length - 1)
        const laterEpisode = laterEpisodes[randomIndex];

        if(laterEpisodes.length <= 0){
            return `This was the last episode of its type`  
        }

        return `This episode happened sometime before ${laterEpisode.getShortTitle()}`
    }

    function getRandomMoment() {
        console.log("MOMENTS:", EpisodeType[moments[0].episodeType]);
        console.log(EpisodeType[EpisodeType.OTR])
        const filteredMoments = moments.filter(x => 
            `${x.episodeType}` == EpisodeType[EpisodeType.Podcast]   || 
            `${x.episodeType}` == EpisodeType[EpisodeType.Podcast]   || 
            `${x.episodeType}` == EpisodeType[EpisodeType.AfterDark] ||
            `${x.episodeType}` == EpisodeType[EpisodeType.Frenemies] || 
            `${x.episodeType}` == EpisodeType[EpisodeType.H3Show]    || 
            `${x.episodeType}` == EpisodeType[EpisodeType.H3TV]      || 
            `${x.episodeType}` == EpisodeType[EpisodeType.Families]  ||
            `${x.episodeType}` == EpisodeType[EpisodeType.ContentCourt])
        console.log("Filtered Moments: ", filteredMoments)
        const randomIndex = getRandomInt(0, filteredMoments.length - 1);
        const moment = filteredMoments[randomIndex];
        
        setCurrentMoment(moment);

        return moment;
    }

    function onChange(event: React.ChangeEvent<HTMLInputElement>) {
        setInputClass("episode-input")
        setVideoClass("try-again");
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

    const startGame = () => {
        console.log("start")
        const moment = getRandomMoment();
        player.loadVideoById({videoId: moment.getVideoId(), startSeconds: moment.getTime()})
        setGameStarted(true);
    }

    const submitGuess = () => {
        if(episodeFilterText == currentMoment?.title){
            setGuesses([])
            setHelperText("You got it!")
            setIsCorrectGuess(true);
            return;
        }
        const updatedGuesses = guesses;
        updatedGuesses.push(episodeFilterText)

        setGuesses(updatedGuesses)
        setEpisodeFilterText("");
        setInputClass("episode-input wrong-answer")
        setVideoClass("try-again try-again-anim");
        setIsCorrectGuess(false);
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
        const filteredEpisodes = episodes.filter(x => `${x.getShortTitle().replace("#", "").toLowerCase()} ${x.title.toLowerCase()}`.includes(filter.toLowerCase()))

        if(filter == "" || selected)
            return [];

        return filteredEpisodes
    }

    return (
        <div id="GamePage">
            <h1>GUESS THE EPISODE!</h1>
            { !gameStarted &&
                <>
                    <div>A simple game where a random H3 moment will be chosen and you have to guess the episode it was from.</div>
                    <div>You will have 5 guesses to get the correct answer before a new moment is picked. </div>
                    <div>A hint will be provided after each incorrect guess.</div>
                </>
            }
            {gameStarted &&
                <div>GUESSES: {guesses}</div>
            }

            <div className="video-container">
                {gameStarted &&
                    <div className="blockbar">No Peaking 😄</div>
                }
                <div className={videoClass}>
                    <div className="try-again-bg">
                        LATER
                    </div>
                </div>
                <div className="video">
                    <YouTube videoId={videoId} opts={opts} onReady={onReady} style={divStyle}/>
                </div>
            </div>
            { gameStarted &&
                <input key={"inputBox"} className={inputClass} type="text" placeholder="Search for Episodes"value={episodeFilterText} onChange={onChange}/>
            }
            { getEpisodesByString(episodeFilterText).map((episode) => (
                <div className="options" onClick={() => {setEpisodeFilterText(episode.title); setSelected(true)}}>
                    {`${episode.date} - [${episode.getShortTitle().replace("#", "")}] - ${episode.title}`}
                </div>))
            }
            <button className="start-game" onClick={!gameStarted ? startGame : submitGuess}>{!gameStarted ? "Start Game" : "Submit"}</button>
            <div className="helper-text">{helperText}</div>
        </div>
    );
}

export default GamePage;