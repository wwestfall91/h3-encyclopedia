import { useState } from "react";
import MomentCard from "../Generic Cards/MomentCard";
import { Helpers } from "../Helpers/Helpers";
import HomepagePersonCard from "./HomepagePersonCard";
import { Person } from "../../models/Person";
import { Moment } from "../../models/Moments/Moment";

interface Props {
    item: Moment | Person;
    headerText: string;
    description: string;
    url?: string;
    image?: string;
    outlineColor?: string;
    jumpToTime?: () => void;
}

function Card(props: Props) {
    return (
    <>
        <div className="card-container">
            <div className="card white-outline" onClick={() => {window.open(`${props.item.url}`, '_blank');} }>
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
    </>  
    );
}

export default Card;