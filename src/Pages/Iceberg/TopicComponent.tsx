import { useState } from "react";
import { MomentsModal } from "../../components/Modals/Modal";
import { Topic } from "../../models/Topic";
import "./TopicComponent.scss";
import { useDataContext } from "../../context/DataContext";

type Props = {
  topic:Topic;
  image?: string;
};

function TopicComponent(props: Props) {
  const [modalOpen, setModalOpen] = useState(false);
  const { moments } = useDataContext();
  function OpenModal() {
    setModalOpen(true);
  }

  return (
    <>
      {modalOpen && 
        <MomentsModal title={props.topic.name} description={props.topic.description} timestamps={props.topic.getMoments(moments)!} isOpen={false} openModal={setModalOpen} ></MomentsModal>
      }
      <div id="TopicComponent" onClick={() => OpenModal()}>
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
