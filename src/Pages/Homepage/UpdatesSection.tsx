import MomentComponent from "../../components/Moments/MomentComponent/MomentComponent";
import SoundbiteCard from "../../components/SoundbiteCard/SoundbiteCard";
import { useDataContext } from "../../context/DataContext";
import PersonCard from "../PeoplePage/PersonCard";
import "./UpdatesSection.scss"
import trafficReport from "../../../public/TrafficReport.mp4"
import { useState } from "react";

function UpdatesSection() {
    const { soundbites, people, moments } = useDataContext();
    const [trafficReportEnded, setTrafficReportEnded] = useState(true);

    return (
        <div className="updates-container">
            {!trafficReportEnded && 
                <video autoPlay className="video-overlay" onEnded={() => setTrafficReportEnded(true)}> 
                    <source src={trafficReport}/>
                </video>
            }
            <div className="update-page-section">
                <h1>PEOPLE UPDATES</h1>
                <div className="section-data">
                <div className="topic">
                        <PersonCard person={people.find(x => x.name == "C-Man")!} />
                        <div className="note">{"6 New Moments!"}</div>
                    </div>
                    <div className="topic">
                        <PersonCard person={people.find(x => x.name == "Avery")!} />
                        <div className="note">{"New Arrival!"}</div>
                    </div>
                    <div className="topic">
                        <PersonCard person={people.find(x => x.name == "Matt Hoss")!} />
                        <div className="note">{"New Arrival!"}</div>
                    </div>
                    <div className="topic">
                        <PersonCard person={people.find(x => x.name == "Tom Ward")!} />
                        <div className="note">{"New Arrival!"}</div>
                    </div>
                    <div className="topic">
                        <PersonCard person={people.find(x => x.name == "Peanut Butter Craig")!} />
                        <div className="note">{"New Arrival!"}</div>
                    </div>
                </div>
                <div className="section-data">
  
                </div>
            </div>
            <div className="update-page-section">
                <h1>NEW SOUNDBITES</h1>
                <div className="section-data">
                    <SoundbiteCard soundbite={soundbites.find(x => x.title == "Gorgeous")!} />
                    <SoundbiteCard soundbite={soundbites.find(x => x.title == "Weird Goat Noise")!} />
                    <SoundbiteCard soundbite={soundbites.find(x => x.title == "They're Investigating You Homie!")!} />
                    <SoundbiteCard soundbite={soundbites.find(x => x.title == "WHAT?!")!} />
                    <SoundbiteCard soundbite={soundbites.find(x => x.title == "Ethan, WAKE UP!!!")!} />
                    <SoundbiteCard soundbite={soundbites.find(x => x.title == "America Deserved 9/11")!} />
                    <SoundbiteCard soundbite={soundbites.find(x => x.title == "I only take it right on my chest")!} />
                </div>
                <h3>The Fart Collection is here!</h3>
                <div className="section-data">
                    <SoundbiteCard soundbite={soundbites.find(x => x.title == "Fart #1 (Just a fart)")!} />
                    <SoundbiteCard soundbite={soundbites.find(x => x.title == "Fart #2 (Dry and Deep)")!} />
                    <SoundbiteCard soundbite={soundbites.find(x => x.title == "Fart #3 (Long And Quiet)")!} />
                    <SoundbiteCard soundbite={soundbites.find(x => x.title == "Fart #4 (Squeak)")!} />
                    <SoundbiteCard soundbite={soundbites.find(x => x.title == "Fart #5 (Toot)")!} />
                    <SoundbiteCard soundbite={soundbites.find(x => x.title == "Fart #6 (Weird)")!} />
                    <SoundbiteCard soundbite={soundbites.find(x => x.title == "Fart #7 (Wet and Disgusting)")!} />
                    <SoundbiteCard soundbite={soundbites.find(x => x.title == "Fart #8 (Shitting into a metal pot)")!} />
                </div>
            </div>
            <div className="update-page-section">
                <h1>CREW UPDATES</h1>
                
                <div className="section-data">
                    <div className="topic">
                        <div className="note-topic">{"New Zach Topic!"}</div>
                        <MomentComponent moment={moments.find(x => x.title == "CCR Curse Origin")!} 
                                         image="https://cdn-images.dzcdn.net/images/cover/048eb8abc5c8cdb920d1fb550e5d34f9/1900x1900-000000-80-0-0.jpg" 
                                         showEpisodeTitle={false} customTitle="The CCR Curse" />
                        <div className="note-misc">{"< Also, Dan?!"}</div>
                    </div>
                    <div className="topic">
                        <div className="note-topic">{"New Zach Moment!"}</div>
                        <MomentComponent moment={moments.find(x => x.title == "SHUT UP BITCH!")!} 
                                         image="https://static.wikia.nocookie.net/h3h3/images/b/b0/Trisha_Paytas.png" 
                                         showEpisodeTitle={false} />
                    </div>
                </div>
            </div>
            <div className="update-page-section">
                <h1>ICEBERG UPDATES</h1>
                    Nothing to report
            </div>
        </div>
    );
}

export default UpdatesSection;