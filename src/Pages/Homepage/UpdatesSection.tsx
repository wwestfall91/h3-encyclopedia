import MomentComponent from "../../components/Moments/MomentComponent/MomentComponent";
import SoundbiteCard from "../../components/SoundbiteCard/SoundbiteCard";
import { useDataContext } from "../../context/DataContext";
import TopicComponent from "../Iceberg/TopicComponent";
import PersonCard from "../PeoplePage/PersonCard";
import "./UpdatesSection.scss"
import trafficReport from "../../../public/TrafficReport.mp4"
import { useState } from "react";

function UpdatesSection() {
    const { soundbites, topics, people, moments } = useDataContext();
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
                        <PersonCard person={people.find(x => x.name == "Tana Mongeau")!} />
                        <div className="note">{"21 New Moments"}</div>
                    </div>
                    <div className="topic">
                        <PersonCard person={people.find(x => x.name == "Blake Lively")!} />
                        <div className="note">{"1 New Moment"}</div>
                    </div>
                    <div className="topic">
                        <PersonCard person={people.find(x => x.name == "Will Smith")!} />
                        <div className="note">{"5 New Moments"}</div>
                    </div>
                    <div className="topic">
                        <PersonCard person={people.find(x => x.name == "Jason.Reborn")!} />
                        <div className="note">{"2 New Moments"}</div>
                    </div>
                    <div className="topic">
                        <PersonCard person={people.find(x => x.name == "Morgpie")!} />
                        <div className="note">{"New Arrival!"}</div>
                    </div>
                    <div className="topic">
                        <PersonCard person={people.find(x => x.name == "Tom Ward")!} />
                        <div className="note">{"New Arrival!"}</div>
                    </div>
                    <div className="topic">
                        <PersonCard person={people.find(x => x.name == "Kenneth Copeland")!} />
                        <div className="note">{"New Arrival!"}</div>
                    </div>
                </div>
                <div className="section-data">
  
                </div>
            </div>
            <div className="update-page-section">
                <h1>NEW SOUNDBITES (61)</h1>
                <div className="section-data">
                    <SoundbiteCard soundbite={soundbites.find(x => x.title == "Uhh... BASED!")!} />
                    <SoundbiteCard soundbite={soundbites.find(x => x.title == "Oh God...")!} />
                    <SoundbiteCard soundbite={soundbites.find(x => x.title == "That's so scary!")!} />
                    <SoundbiteCard soundbite={soundbites.find(x => x.title == "Shaun #1")!} />
                    <SoundbiteCard soundbite={soundbites.find(x => x.title == "Shaun #2")!} />
                    <SoundbiteCard soundbite={soundbites.find(x => x.title == "You didn't tell me you got some tea today!")!} />
                    <SoundbiteCard soundbite={soundbites.find(x => x.title == "I only take it right on my chest")!} />
                    
                </div>
                <div className="section-data">
                    <SoundbiteCard soundbite={soundbites.find(x => x.title == "Anywho I'm gonna go to bed")!} />
                    <SoundbiteCard soundbite={soundbites.find(x => x.title == "ANYWHO I'M GONNA GO TO BED NOW")!} />
                    <SoundbiteCard soundbite={soundbites.find(x => x.title == "You're coming off a little special needs")!} />
                    <SoundbiteCard soundbite={soundbites.find(x => x.title == "I think so, don't you think so?")!} />
                    <SoundbiteCard soundbite={soundbites.find(x => x.title == "50 GIFTED SUBS!!!!")!} />
                    <SoundbiteCard soundbite={soundbites.find(x => x.title == "BOOM BOOM BOOM BOOM BOOM!!")!} />
                    <SoundbiteCard soundbite={soundbites.find(x => x.title == "Your brother who passed away gets 5 big booms")!} />
                </div>
                <div className="section-data">
                    <SoundbiteCard soundbite={soundbites.find(x => x.title == "USA USA USA!!")!} />
                    <SoundbiteCard soundbite={soundbites.find(x => x.title == "DAN YOU FUCK!! You coward!")!} />
                    <SoundbiteCard soundbite={soundbites.find(x => x.title == "Gay Trilogy")!} />
                    <SoundbiteCard soundbite={soundbites.find(x => x.title == "Laugh #1")!} />
                    <SoundbiteCard soundbite={soundbites.find(x => x.title == "Laugh #2")!} />
                    <SoundbiteCard soundbite={soundbites.find(x => x.title == "Mhm")!} />
                    <SoundbiteCard soundbite={soundbites.find(x => x.title == "I didn't think you could break a penis")!} />
                </div>
                <div className="section-data">
                    <SoundbiteCard soundbite={soundbites.find(x => x.title == "Shh! Shh! (Kettlebell workout)")!} />
                    <SoundbiteCard soundbite={soundbites.find(x => x.title == "The Pufferfish, right?")!} />
                    <SoundbiteCard soundbite={soundbites.find(x => x.title == "There's a clip, go look for the clip!")!} />
                    <SoundbiteCard soundbite={soundbites.find(x => x.title == "I've fallen, and I can't get up!")!} />
                    <SoundbiteCard soundbite={soundbites.find(x => x.title == "Cookie Rant")!} />
                    <SoundbiteCard soundbite={soundbites.find(x => x.title == "It's cool to be a soundbite I suppose")!} />
                    <SoundbiteCard soundbite={soundbites.find(x => x.title == "I want you to give me rimjob")!} />

                </div>
                <div className="section-data">
                    <SoundbiteCard soundbite={soundbites.find(x => x.title == "Shark Tank Stinger #1")!} />
                    <SoundbiteCard soundbite={soundbites.find(x => x.title == "Shark Tank Stinger #2")!} />
                    <SoundbiteCard soundbite={soundbites.find(x => x.title == "PUSSY!")!} />
                    <SoundbiteCard soundbite={soundbites.find(x => x.title == "Hi everyone!")!} />
                    <SoundbiteCard soundbite={soundbites.find(x => x.title == "I TIED UP AN FBI AGENT (Different Languages)")!} />
                    <SoundbiteCard soundbite={soundbites.find(x => x.title == "Hello Twitter World!")!} />
                    <SoundbiteCard soundbite={soundbites.find(x => x.title == "It's the first time for me in the Marvel Universe")!} />
                </div>
                <div className="section-data">
                    <SoundbiteCard soundbite={soundbites.find(x => x.title == "Can you guys BACK UP?!")!} />
                    <SoundbiteCard soundbite={soundbites.find(x => x.title == "I wanna do a soundtrack to your feet!")!} />
                    <SoundbiteCard soundbite={soundbites.find(x => x.title == "Money? No Money! NO MONEY!!")!} />
                    <SoundbiteCard soundbite={soundbites.find(x => x.title == "The ideal stocking stuffer")!} />
                    <SoundbiteCard soundbite={soundbites.find(x => x.title == "Safe Moon going to the moon baby!!")!} />
                    <SoundbiteCard soundbite={soundbites.find(x => x.title == "Hello Twitter World!")!} />
                    <SoundbiteCard soundbite={soundbites.find(x => x.title == "I TIED UP AN FBI AGENT (Different Languages)")!} />
                </div>
                <div className="section-data">
                    <SoundbiteCard soundbite={soundbites.find(x => x.title == "Here's my thing, I like a pretty penis")!} />
                    <SoundbiteCard soundbite={soundbites.find(x => x.title == "No!!")!} />
                    <SoundbiteCard soundbite={soundbites.find(x => x.title == "CORONA VIRUS!!")!} />
                    <SoundbiteCard soundbite={soundbites.find(x => x.title == "So no cookies for you?")!} />
                    <SoundbiteCard soundbite={soundbites.find(x => x.title == "Speared to DEATH!")!} />
                    <SoundbiteCard soundbite={soundbites.find(x => x.title == "God Bless America!! (Voice Crack)")!} />
                    <SoundbiteCard soundbite={soundbites.find(x => x.title == "Same Key of E")!} />
                </div>
                <div className="section-data">
                    <SoundbiteCard soundbite={soundbites.find(x => x.title == "THE N WORD!")!} />
                    <SoundbiteCard soundbite={soundbites.find(x => x.title == "Obamna (Obama)")!} />
                    <SoundbiteCard soundbite={soundbites.find(x => x.title == "Mom I'm sorry!")!} />
                    <SoundbiteCard soundbite={soundbites.find(x => x.title == "Apple!")!} />
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
                <div className="section-data">
                    <div className="topic">
                        <div className="note-topic">{"Updated Picture"}</div>
                        <TopicComponent topic={topics.find(x => x.name == "The Hairline King")!}></TopicComponent>
                    </div>
                    <div className="topic">
                        <div className="note-topic">{"Updated Picture"}</div>
                        <TopicComponent topic={topics.find(x => x.name == "AB Boxing Matches")!}></TopicComponent>
                    </div>
                </div>
            </div>
            <div className="update-page-section">
                <h1>NEW BUTTON MOMENTS</h1>
                <div className="section-data">
                    <MomentComponent moment={moments.find(x => x.url == "https://youtu.be/bq4Bq0KXlGE&t=8780")!} 
                        showEpisodeTitle={false} />
                    <MomentComponent moment={moments.find(x => x.url == "https://youtu.be/bq4Bq0KXlGE&t=10093")!}
                        showEpisodeTitle={false} />
                </div>
            </div>
        </div>
    );
}

export default UpdatesSection;