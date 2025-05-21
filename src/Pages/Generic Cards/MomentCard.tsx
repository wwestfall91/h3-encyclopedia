import { useEffect, useState } from "react";
import "../../components/SoundbiteCard/SoundbiteCard.css";
import { Moment } from "../../models/Moments/Moment";
import { useDataContext } from "../../context/DataContext";
import "./MomentCard.scss"
import { Helpers } from "../Helpers/Helpers";

interface Props {
    moment: Moment;
    description?: String;
    jumpToTime?: () => void;
}

function MomentCard(props: Props) {
    const [isMobile, setIsMobile] = useState(false);
    const { episodes, people } = useDataContext();

    useEffect(() => {
        setIsMobile(window.innerWidth < 1400);
    }, []);
    
    return (
        <>
        {props.moment && people.length > 0 &&
            <div className="card-container">
                <div className="card white-outline" onClick={() => {window.open(`${props.moment.url}`, '_blank');} }>
                    <div className="person-container">
                        <div className="person-name">
                            {Helpers.getAgeOfMoment(props.moment)}
                        </div>
                    </div>
                    <img className="card-image" src={props.moment.image ?? people.find(x => x.name == props.moment.people[0])!.image ?? props.moment.getEpisode(episodes)?.getThumbnail()}/>
                    <div className="footer" onClick={(e) => {e.stopPropagation()}}>
                        <div className="soundbite-card-title">{props.description ? props.description : props.moment.title}</div>                 
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