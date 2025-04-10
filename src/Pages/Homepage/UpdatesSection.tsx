// import MomentComponent from "../../components/Moments/MomentComponent/MomentComponent";
import SoundbiteCard from "../../components/SoundbiteCard/SoundbiteCard";
import { useDataContext } from "../../context/DataContext";
import PersonCard from "../PeoplePage/PersonCard";
import trafficReport from "../../../public/TrafficReport.mp4"
import { useState } from "react";
// import TopicComponent from "../Iceberg/TopicComponent";
import "./UpdatesSection.scss"

function UpdatesSection() {
    const { soundbites, people } = useDataContext();
    const [trafficReportEnded, setTrafficReportEnded] = useState(true);

    return (
        <div className="updates-container">
            {!trafficReportEnded && 
                <video autoPlay className="video-overlay" onEnded={() => setTrafficReportEnded(true)}> 
                    <source src={trafficReport}/>
                </video>
            }
            <h1 className="page-header">UPDATES FOR APRIL 2025</h1>
            <div className="update-page-section">                
                {/* <h1>GENERAL UPDATES</h1>
                <ul>
                    <li>BUG FIX: Filtering while a soundbite was playing would cause the cards to play the wrong soundbites</li>
                    <li>Fixed Mobile navigation bar not closing</li>
                    <li>Fixed header cutting off screen on certain resolutions</li>
                    <li>Small fixes to make the pages more mobile friendly</li>
                </ul> */}

                <h1>PEOPLE UPDATES</h1>
                <div className="section-data">
                    <div className="topic">
                        <PersonCard person={people.find(x => x.name == "Vitaly")!} />
                        <div className="note">{"14 Moments Added!"}</div>
                    </div>
                    <div className="topic">
                        <PersonCard person={people.find(x => x.name == "Attorney Tom")!} />
                        <div className="note">{"New Arrival!"}</div>
                    </div>
                    <div className="topic">
                        <PersonCard person={people.find(x => x.name == "Russell Brand")!} />
                        <div className="note">{"New Arrival!"}</div>
                    </div>
                    <div className="topic">
                        <PersonCard person={people.find(x => x.name == "Dr Mike")!} />
                        <div className="note">{"New Arrival!"}</div>
                    </div>
                    <div className="topic">
                        <PersonCard person={people.find(x => x.name == "Ashton Hall")!} />
                        <div className="note">{"3 New Moments"}</div>
                    </div>
                    <div className="topic">
                        <PersonCard person={people.find(x => x.name == "Steiny")!} />
                        <div className="note">{"2 New Moments!"}</div>
                    </div>
                    <div className="topic">
                        <PersonCard person={people.find(x => x.name == "Bradley Martyn")!} />
                        <div className="note">{"1 New Moment!"}</div>
                    </div>
                </div>
            </div>
            <div className="update-page-section">
                <h1>NEW SOUNDBITES</h1>
                <div className="section-data">
                    <SoundbiteCard soundbite={soundbites.find(x => x.title == "In the Discord!")!} />
                    <SoundbiteCard soundbite={soundbites.find(x => x.title == "Okay I Like That")!} />
                    <SoundbiteCard soundbite={soundbites.find(x => x.title == "I Like it, I Fuck With That")!} />
                    <SoundbiteCard soundbite={soundbites.find(x => x.title == "Warzone!")!} />
                    <SoundbiteCard soundbite={soundbites.find(x => x.title == "Your Birthday Doesn't Matter That Much...")!} />
                    <SoundbiteCard soundbite={soundbites.find(x => x.title == "Gorgeous")!} />
                    <SoundbiteCard soundbite={soundbites.find(x => x.title == "Weird Goat Noise")!} />
                </div>
            </div>
            {/* <div className="update-page-section">
                <h1>CREW UPDATES</h1>
                
                <div className="section-data">
                    <div className="topic">
                        <div className="note-topic">{"New Ian Moment!"}</div>
                        <MomentComponent moment={moments.find(x => x.title == "Ian & Dan Break into The Oscars")!} 
                                         image="Images\MrOscar.png" 
                                         showEpisodeTitle={false} customTitle="Ian Breaks into The Oscars" />
                    </div>
                    <div className="topic">
                        <div className="note-topic">{"New Ian Moment!"}</div>
                        <MomentComponent moment={moments.find(x => x.title == "Ian gets fired")!} 
                                         image="Images\SugarRay.png" 
                                         showEpisodeTitle={false} customTitle="Ian Gets Fired..." />
                    </div>
                </div>
            </div> */}
            {/* <div className="update-page-section">
                <h1>ICEBERG UPDATES</h1>
                <div className="section-data">
                    <div className="topic">
                        <div className="note-topic">{"2 New Moments!"}</div>
                        <TopicComponent topic={topics.find(x => x.name == "Bill Burr Episode 1")!}></TopicComponent>
                    </div>
                    <div className="topic">
                        <div className="note-topic">{"3 New Moments!"}</div>
                        <TopicComponent topic={topics.find(x => x.name == "AUDIO AUDIO AUDIO")!}></TopicComponent>
                    </div>
                </div>
                <ul>
                    <li>Updated a fair amount of descriptions to be more accurate</li>
                </ul>
            </div> */}
        </div>
    );
}

export default UpdatesSection;