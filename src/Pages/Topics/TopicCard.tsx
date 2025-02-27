import { useEffect, useState } from "react";
import "../../components/SoundbiteCard/SoundbiteCard.css";
import "./TopicCard.scss"

interface Props {
    image: string;
    headerText: string;
    description: string;
    url: string;
    jumpToTime: () => void;
}

function TopicCard(props: Props) {
    const [isMobile, setIsMobile] = useState(false);

      useEffect(() => {
        setIsMobile(window.innerWidth < 1400);
      }, []);
    
    return (
        <div className="card-container">
            <div className="card" onClick={() => {window.open(`${props.url}`, '_blank');} }>
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
            {!isMobile && 
                <div className="time" onClick={props.jumpToTime}>{"< Jump to Mention"}</div> 
            }
            </>
        </div>
    );
}

export default TopicCard;