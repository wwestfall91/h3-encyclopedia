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

    const duration = 60 * 60 * 1000,
	animationEnd = Date.now() + duration,
	defaults = { startVelocity: 30, spread: 360, ticks: 20, zIndex: 0 };

    function randomInRange(min:number, max:number) {
        return Math.random() * (max - min) + min;
    }

    const interval = setInterval(function () {
	const timeLeft = animationEnd - Date.now();

	if (timeLeft <= 0) {
		return clearInterval(interval);
	}

	const particleCount = 20 * (timeLeft / duration);

	// since particles fall down, start a bit higher than random
	confetti(
		Object.assign({}, defaults, {
			particleCount,
			origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
		})
	);
	confetti(
		Object.assign({}, defaults, {
			particleCount,
			origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
		})
	);
    }, 250);




    return (
        <>
        <script src="https://cdn.jsdelivr.net/npm/@tsparticles/confetti@3.0.3/tsparticles.confetti.bundle.min.js"></script>
        <div className="github">
	        <a className="btn btn-link" href="https://github.com/matteobruni/tsparticles" title="Find more info on GitHub">
		        <img className="img-fluid" id="gh-mark" src="https://particles.js.org/images/GitHub-Mark-120px-plus.png" alt="" />
		        <span id="gh-project">tsParticles</span>
	        </a>
	    <div>
		<a className="github-button" href="https://github.com/matteobruni/tsparticles" data-icon="octicon-star" aria-label="Star matteobruni/tsparticles on GitHub">Star</a>
		<a className="github-button" href="https://github.com/matteobruni/tsparticles/fork" data-icon="octicon-repo-forked" aria-label="Fork matteobruni/tsparticles on GitHub">Fork</a>
	    </div>
    </div>
    <script src="https://buttons.github.io/buttons.js"></script>

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

                    </div>
                    <div className="Zach">
                        <img src="/Images/ZachPlayingGuitar.png" alt="zach" />
                    </div>
                        
                    <div className="topics-container">
                        <div className="topics-title">TOPICS FROM H3 SHOW #117</div>
                        <div className="topics">
                            <HomepagePersonCard person={people.find(x => x.name == "Galya")!} jumpToTime={() => jumpToTime(685)} />
                            <TopicCard image={"https://assets-prd.ignimgs.com/2022/06/29/gaming-mouse-1656479071918.jpg"}
                                headerText={"3 Years Ago"} description={"The DPI Guy"} url={"https://www.youtube.com/watch?v=QvGqpAcXNqo&t=6480"} 
                                jumpToTime={() => jumpToTime(1345)} />
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