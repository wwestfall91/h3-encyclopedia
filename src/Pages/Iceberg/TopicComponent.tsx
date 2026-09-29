import { useState } from "react";
import { MomentsModal } from "../../components/Modals/Modal";
import { Topic } from "../../models/Topic";
import { Moment } from "../../models/Moments/Moment";
import "./TopicComponent.scss";
import { useDataContext } from "../../context/DataContext";

type Props = {
  topic: Topic | undefined;
  image?: string;
  isBlank?: boolean;
  customText?:string;
  overlayText?:string;
};

function TopicComponent(props: Props) {
  const [modalOpen, setModalOpen] = useState(false);
  const [topicMoments, setTopicMoments] = useState<Moment[]>([]);
  const { loadMoments } = useDataContext();

  async function openModal() {
    if (!props.topic) return;

    const moments = await loadMoments();
    setTopicMoments(props.topic.getMoments(moments) ?? []);
    setModalOpen(true);
  }

  return (
    <>
      {modalOpen && props.topic &&
        <MomentsModal 
          title={props.topic.name} 
          description={props.topic.description} 
          timestamps={topicMoments}
          isOpen={false} 
          openModal={setModalOpen} />
      }
        <div id="TopicComponent" onClick={() => void openModal()}>
            <div className="topic-container">
              { props.overlayText &&
                <div className="overlay">{props.overlayText}</div>
              }
              <div className="topic-image-container">
                {props.isBlank &&
                    <div className="blank-image">{props.customText}</div>
                }
                {!props.isBlank && props.topic &&
                  <img className="topic-image" src={props.image ? props.image : props.topic.image}></img>
                }
                {!props.topic &&
                  <img className="topic-image-coming-soon" src={props.image ? props.image : undefined}></img>
                }
                
              </div>
              {props.topic &&
                <div className="topic-name">{props.topic.name}</div>
              }
              {!props.topic &&
                <div className="topic-name">{props.customText ? props.customText : "???"}</div>
              }
            </div>
        </div>
    </>
  );
}

export default TopicComponent;
