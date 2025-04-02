import { useDataContext } from "../../context/DataContext";
import HomepagePersonCard from "./HomepagePersonCard";
import "./psychologyInSeattleSection.scss"

function PsychologyInSeattleSection() {
    const { people } = useDataContext();

    return (
        
        <div id="psychologyInSeattle">
            <h1 className="page-header">THE RUMORS ARE TRUE, ETHANS APOLOGIES ARE UNMATCHED</h1>
            <div className="data-section">
                <HomepagePersonCard person={people.find(x => x.name == "Colleen Ballinger")!} jumpToTime={undefined} />
                <HomepagePersonCard person={people.find(x => x.name == "Colleen Ballinger")!} jumpToTime={undefined} />
                <HomepagePersonCard person={people.find(x => x.name == "Liver King")!} jumpToTime={undefined} />
                {/* <HomepagePersonCard person={people.find(x => x.name == "iDubbbz")!} jumpToTime={undefined} /> */}
                <HomepagePersonCard person={people.find(x => x.name == "Kanye West")!} jumpToTime={undefined} />
                {/* <HomepagePersonCard person={people.find(x => x.name == "Colleen Ballinger")!} jumpToTime={undefined} />
                <HomepagePersonCard person={people.find(x => x.name == "Colleen Ballinger")!} jumpToTime={undefined} />
                <HomepagePersonCard person={people.find(x => x.name == "Colleen Ballinger")!} jumpToTime={undefined} /> */}
            </div>
        </div>
    );
}

export default PsychologyInSeattleSection;