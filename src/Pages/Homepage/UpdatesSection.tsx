import { useDataContext } from "../../context/DataContext";
import PersonCard from "../PeoplePage/PersonCard";
import trafficReport from "../../../public/TrafficReport.mp4"
import { useState } from "react";
import "./UpdatesSection.scss"

function UpdatesSection() {
    // @ts-ignore
    const { soundbites, people } = useDataContext();
    const [trafficReportEnded, setTrafficReportEnded] = useState(true);
    
    return (
        <div className="updates-container">
            {!trafficReportEnded && 
                <video autoPlay className="video-overlay" onEnded={() => setTrafficReportEnded(true)}> 
                    <source src={trafficReport}/>
                </video>
            }
            <h1 className="page-header">UPDATES FOR MAY 2025</h1>
            <div className="update-page-section">                
                <h1>GENERAL UPDATES</h1>
                <ul>
                    <li>Some big Quality of Life improvements are coming to the site soon - Stay tuned!</li>
                </ul>

                <h1>PEOPLE UPDATES</h1>
                <div className="section-data">
                    <div className="topic">
                        <PersonCard person={people.find(x => x.name == "Sam Seder")!} />
                        <div className="note">{"Friend >>> Neutral"}</div>
                    </div>
                    <div className="topic">
                        <PersonCard person={people.find(x => x.name == "James Charles")!} />
                        <div className="note">{"45 Moments Added!"}</div>
                    </div>
                    <div className="topic">
                        <PersonCard person={people.find(x => x.name == "Harley Morenstein")!} />
                        <div className="note">{"New Arrival!"}</div>
                    </div>
                    <div className="topic">
                        <PersonCard person={people.find(x => x.name == "Mike From PA")!} />
                        <div className="note">{"New Arrival!"}</div>
                    </div>
                    <div className="topic">
                        <PersonCard person={people.find(x => x.name == "iDubbbz")!} />
                        <div className="note">{"Friend >>> Enemy"}</div>
                    </div>
                    <div className="topic">
                        <PersonCard person={people.find(x => x.name == "iDubbbz")!} />
                        <div className="note">{"New Moments!"}</div>
                    </div>
                    <div className="topic">
                        <PersonCard person={people.find(x => x.name == "Hasan Piker")!} />
                        <div className="note">{"New Moments!"}</div>
                    </div>
                    <div className="topic">
                        <PersonCard person={people.find(x => x.name == "Ban Emma Panda")!} />
                        <div className="note">{"New Arrival!"}</div>
                    </div>
                    <div className="topic">
                        <PersonCard person={people.find(x => x.name == "Kermit the Frog")!} />
                        <div className="note">{"New Arrival!"}</div>
                    </div>
                </div>
            </div>
            <div className="update-page-section">
                <h1>NEW SOUNDBITES</h1>
                <ul>
                    <li>Focus has been on People & Upcoming Changes. MASSIVE Soundbite dump will be coming soon!</li>
                </ul>
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