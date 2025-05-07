import { useEffect, useState } from "react";
import "../../components/SoundbiteCard/SoundbiteCard.css";
import "./TopicCard.scss"

interface Props {
    image: string;
    headerText: string;
    description: string;
    url: string;
    outlineColor?: string;
    grade?: string;
    grade2?: string;
    jumpToTime?: () => void;

}

function TopicCard(props: Props) {
    const [isMobile, setIsMobile] = useState(false);

      useEffect(() => {
        setIsMobile(window.innerWidth < 1400);
      }, []);
    
    return (
        <div className={`card-container ${props.grade} ${props.outlineColor}`}>
            <div className={`grade ${props.grade}`}>{props.grade}{props.grade2}</div>
            <div className={`card ${props.outlineColor}`} onClick={() => {window.open(`${props.url}`, '_blank');} }>
                <div className="person-container">
                    <div className="person-name">
                        {props.headerText}
                    </div>
                </div>
                <img
                className="card-image"
                src={props.image }
                />
                <div className="footer" onClick={(e) => {e.stopPropagation()}}>
                    <div className="soundbite-card-title">{props.description}</div>                 
                </div>
            </div>
            <>
            {!isMobile && props.jumpToTime &&
                <div className="time" onClick={props.jumpToTime}>{"< Jump to Mention"}</div> 
            }
            </>
        </div>
    );
}

export default TopicCard;