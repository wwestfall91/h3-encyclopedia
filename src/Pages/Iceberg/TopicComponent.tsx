import { Topic } from "../../models/Topic";
import "./TopicComponent.scss";

type Props = {
  topic:Topic;
  image?: string;
};

function TopicComponent(props: Props) {
  return (
    <>
      <div id="TopicComponent">
          <div className="topic-container">
            <div className="topic-image-container">
              <img className="topic-image" src={props.image ? props.image : props.topic.image}></img>
            </div>
            <div className="topic-name">{props.topic.name}</div>
          </div>
      </div>
    </>
  );
}

export default TopicComponent;
