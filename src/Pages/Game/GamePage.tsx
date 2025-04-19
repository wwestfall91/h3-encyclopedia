import { useEffect, useState } from "react";
import { useDataContext } from "../../context/DataContext";
import { Episode } from "../../models/Episode";
import YouTube from "react-youtube";
import { Moment } from "../../models/Moments/Moment";
import { EpisodeType } from "../../models/enums/EpisodeType";
import "./GamePage.scss"

function GamePage() {
    const { episodes, moments, soundbites } = useDataContext();
    const [episodeFilterText, setEpisodeFilterText] = useState<string>("");
    const [videoId] = useState<string>();
    const [currentMoment, setCurrentMoment] = useState<Moment>();
    const [selected, setSelected] = useState<boolean>(false);
    const [player, setPlayer] = useState<any>(null);
    const [gameStarted, setGameStarted] = useState<boolean>();
    const [isCorrectGuess, setIsCorrectGuess] = useState<boolean>(false);
    const [_, setHelperText] = useState("");
    const [inputClass, setInputClass] = useState<string>("episode-input");
    const [guesses, setGuesses] = useState<Episode[]>([]);
    const [bestScore, setBestScore] = useState<number>(0);
    const [score, setScore] = useState<number>(1000);
    const [hint1, setHint1] = useState<string>();
    const [hint2, setHint2] = useState<string>();
    const [hint3, setHint3] = useState<string>();
    const [count, setCount] = useState(0);
    const [gameCount, setGameCount] = useState(0);
    // const [rounds, setRounds] = useState<string[]>([]);

    useEffect(() => {
        const intervalId = setInterval(() => {
          // Place the event firing logic here
          setCount(prevCount => prevCount + 1);
        }, 1000);

        return () => clearInterval(intervalId); // Clean up the interval on component unmount
      }, []);

    useEffect(() => {
        if(!gameStarted)
            return;

        if(score <= 0){
            setGameCount(gameCount + 1);
            if(gameCount == 5){
                setGameStarted(false);
                return;
            }
            resetGame();
        }

        if(isVideoPlaying()){
            setScore(score - 5);
        }
    }, [count])

    useEffect(() => {
        if(!player)
            return;

        if(isCorrectGuess){
            let moment = getRandomMoment();
            player.loadVideoById({videoId: moment.getVideoId(), startSeconds: moment.getTime()})
            setIsCorrectGuess(false);
        }
    }, [isCorrectGuess]);

    useEffect(() => {
        if(guesses.length == 1)
            setHint1(getHint1());

        if(guesses.length == 2)
            setHint2(getHint2());

        if(guesses.length == 3)
            setHint3(getHint3());
    }, [guesses.length]);

    function getHint1(){
        return `HINT #1 - SHOW TYPE: ${currentMoment?.episodeType.toString()}`
    }

    function getHint2(){
        if(!currentMoment)
            return;

        const latestGuess = guesses[guesses.length - 1]
        let momentEpisode = episodes.find(x => x.type == currentMoment.episodeType && x.number == currentMoment.episodeNumber)

        if(currentMoment.title == "Steven Crowder Interview")
            momentEpisode = episodes.find(x => x.title == "Ethan Klein Debates Steven Crowder (Ft. Sam Seder) - H3 Podcast #248")

        if(new Date(latestGuess.date) < new Date(momentEpisode?.date!)){
            return `LATER THAN: ${latestGuess.getShortTitle()} (${latestGuess.date})`
        }
        else{
            return `EARLIER THAN: ${latestGuess.getShortTitle()} (${latestGuess.date})`
        }
    }

    function getHint3(){
        if(!currentMoment)
            return;

        const latestGuess = guesses[guesses.length - 1]
        let momentEpisode = episodes.find(x => x.type == currentMoment.episodeType && x.number == currentMoment.episodeNumber)

        if(currentMoment.title == "Steven Crowder Interview")
            momentEpisode = episodes.find(x => x.title == "Ethan Klein Debates Steven Crowder (Ft. Sam Seder) - H3 Podcast #248")

        if(new Date(latestGuess.date) < new Date(momentEpisode?.date!)){
            return `LATER THAN: ${latestGuess.getShortTitle()} (${latestGuess.date})`
        }
        else{
            return `EARLIER THAN: ${latestGuess.getShortTitle()} (${latestGuess.date})`
        }
    }

    function getRandomMoment() {
        const filteredMoments = moments.filter(x => 
            `${x.episodeType}` == EpisodeType[EpisodeType.Podcast]   || 
            `${x.episodeType}` == EpisodeType[EpisodeType.Podcast]   || 
            `${x.episodeType}` == EpisodeType[EpisodeType.AfterDark] ||
            `${x.episodeType}` == EpisodeType[EpisodeType.Frenemies] || 
            `${x.episodeType}` == EpisodeType[EpisodeType.H3Show]    || 
            `${x.episodeType}` == EpisodeType[EpisodeType.H3TV]      || 
            `${x.episodeType}` == EpisodeType[EpisodeType.Families]  ||
            `${x.episodeType}` == EpisodeType[EpisodeType.ContentCourt])
        const randomIndex = getRandomInt(0, filteredMoments.length - 1);
        const moment = filteredMoments[randomIndex];
        
        setCurrentMoment(moment);

        return moment;
    }

    function onChange(event: React.ChangeEvent<HTMLInputElement>) {
        setInputClass("episode-input")
        // setVideoClass("try-again");
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
        let moment = getRandomMoment();
        setScore(1000);

        player.loadVideoById({videoId: moment.getVideoId(), startSeconds: moment.getTime()})
        setGameStarted(true);
    }

    const resetGame = () => {
        setGameCount(gameCount + 1);
        setEpisodeFilterText("");
        setGuesses([]);
        setScore(1000);
        setCount(0);
        setHint1("");
        setHint2("");
        setHint3("");
        let moment = getRandomMoment();
        player.loadVideoById({videoId: moment.getVideoId(), startSeconds: moment.getTime()})
    }

    const submitGuess = () => {
        if(!currentMoment)
            return;

        const guessedEpisode = episodes.find(x => x.title == episodeFilterText);
        let momentEpisode = episodes.find(x => x.type == currentMoment.episodeType && x.number == currentMoment.episodeNumber)

        if(currentMoment.title == "Steven Crowder Interview")
            momentEpisode = episodes.find(x => x.title == "Ethan Klein Debates Steven Crowder (Ft. Sam Seder) - H3 Podcast #248")

        if(guessedEpisode == momentEpisode){
            PlayAudio("Uhh... BASED!");
            setInputClass("episode-input right-answer");
            setHelperText("You got it!");
            setIsCorrectGuess(true);
            if(score > bestScore)
                setBestScore(score)
            resetGame();
            return;
        }

        setScore(score - 190);
        const updatedGuesses = guesses;
        updatedGuesses.push(guessedEpisode!)

        setGuesses(updatedGuesses);
        setEpisodeFilterText("");
        setInputClass("episode-input wrong-answer")
        // setVideoClass("try-again try-again-anim");
        setIsCorrectGuess(false);
        PlayAudio("The death bell tolls.")
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
          rel:1
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

    // const jumpToTime = (seconds: number) => {
    //     if(player){
    //         player.seekTo(seconds, true);
    //         player.playVideo();
    //     }
    // }

    const isVideoPlaying = () => {
        if(!player)
            return false;

        return player.getPlayerState() == 1;
    }

    const togglePlayPause = () => {
        if(!gameStarted){
            startGame();
        }

        if(player){
            if(isVideoPlaying())
                player.pauseVideo();
            else
                player.playVideo();
        }
    }

    async function PlayAudio(soundbiteName: string) {
        const soundbite = soundbites.find(x => x.title == soundbiteName)!;
        let audio = new Audio(`../../../soundbites/${soundbite.sound}`);
        await audio.play();
    }

    return (       
        <div id="GamePage">
            {!gameStarted && 
            <>
                <h1>GUESS THE EPISODE!</h1>
                <div>Come one, come all and guess the H3 episode!</div>
                <div>The first 3 guesses will provide a hint</div>            
            </>
            }

            {gameStarted &&
                <>
                    <h6>{hint1}</h6>
                    <h6>{hint2}</h6>
                    <h6>{hint3}</h6>
                </>
            }
            <div className="game-container">
                <div className="scorebar-container">
                    <div className="score-labels">
                        <div>1,000</div>
                        <div>0</div>
                    </div>

                    <div className="scorebar">
                        <div className="scorebar-fill" style={{height: `${score * .1}%`}}></div>
                    </div>
                </div>

                {/* <div className={videoClass}>
                    <div className="try-again-bg">
                        LATER
                    </div>
                </div> */}
                <div className="video">
                    {/* <div className="nav-buttons">
                        <button onClick={() => jumpToTime(30)}>0:30</button>
                    </div> */}
                    {/* <div className="game-count">
                        <div className={`counter ${rounds[0]}`}></div>
                        <div className="counter correct"></div>
                        <div className="counter"></div>
                        <div className="counter"></div>
                        <div className="counter"></div>
                    </div> */}

                    <div className="video-container">
                        {!gameStarted &&
                        <div className="block-video" onClick={() => togglePlayPause()}></div>
                        }
                        
                        {gameStarted &&
                            <div className="blockbar">No Peaking 😄</div>
                        }
                        <YouTube videoId={videoId} opts={opts} onReady={onReady} style={divStyle}/>
                    </div>
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
            <h4>BEST SCORE: {bestScore}</h4>
            <button className="start-game" onClick={!gameStarted ? startGame : submitGuess}>{!gameStarted ? "Start Game" : "Submit"}</button>
        </div>
    );
}

export default GamePage;