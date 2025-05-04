import { useEffect, useState } from "react";
import "../../components/SoundbiteCard/SoundbiteCard.css";
import { Moment } from "../../models/Moments/Moment";
import { useDataContext } from "../../context/DataContext";
import "./MomentCard.scss"

interface Props {
    moment: Moment;
    jumpToTime?: () => void;
}

function MomentCard(props: Props) {
    const [isMobile, setIsMobile] = useState(false);
    const { episodes, people } = useDataContext();

    useEffect(() => {
        setIsMobile(window.innerWidth < 1400);
    }, []);

    function getAgeText(){
        const today = new Date();
        const yearsOld : number = today.getFullYear() - props.moment.date?.getFullYear()!;
        const monthsOld : number = today.getMonth() - props.moment.date?.getMonth()!;
        const daysOld : number = today.getDate() - props.moment.date?.getDate()!;
        const weeksOld : number = Math.round(daysOld / 7);

        if(yearsOld > 0)    // If it happened outside of this year
            return yearsOld > 1 ? `${yearsOld} Years Ago` : `${yearsOld} Year Ago`;

        if(monthsOld > 0)   // If it happened outside of this month
            return monthsOld > 1 ? `${monthsOld} Months Ago` : `${monthsOld} Month Ago`;

        if(daysOld > 7)    // If it happened outside of this week
            return weeksOld > 1 ? `${weeksOld} Weeks Ago` : `${weeksOld} Week Ago`;
        
        return daysOld > 1 ? `${daysOld} Days Ago` : `${daysOld} Day Ago`;  // Otherwise, it MUST have happened in the last 7 days
    }
    
    return (
        <>
        {props.moment && people.length > 0 &&
        <div className="card-container">
            <div className="card white-outline" onClick={() => {window.open(`${props.moment.url}`, '_blank');} }>
                <div className="person-container">
                    <div className="person-name">
                        {getAgeText()}
                    </div>
                </div>
                <img className="card-image" src={props.moment.image ?? people.find(x => x.name == props.moment.people[0])!.image ?? props.moment.getEpisode(episodes)?.getThumbnail()}/>
                <div className="footer" onClick={(e) => {e.stopPropagation()}}>
                    <div className="soundbite-card-title">{props.moment.title}</div>                 
                </div>
            </div>
            <>
            {!isMobile && props.jumpToTime &&
                <div className="time" onClick={props.jumpToTime}>{"< Jump to Mention"}</div> 
            }
            </>
        </div>
        }
        </>
    );
}

export default MomentCard;