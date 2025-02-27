import { useState } from "react";
import { Moment } from "../../models/Moments/Moment";
import { useDataContext } from "../../context/DataContext";
import TopicComponent from "./TopicComponent";
import { Tag } from "../../models/enums/Tag";
import { Modal } from "../../components/Modals/Modal";
import { Topic } from "../../models/Topic";
import Coffee from "../../components/Coffee";
import "./IcebergPage.scss";

export function IcebergPage() {
  const {topics, moments} = useDataContext();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalDescription, setModalDescription] = useState("");
  const [modalTimestamps, setModalTimestamps] = useState(new Array());

  function ShowModal(title: string, description: string, timestamps: Moment[]) {
    setModalTitle(title);
    setModalDescription(description);
    setModalTimestamps(timestamps);
    setModalOpen(true);
  }

  function getMomentsFromTopic(topic: Topic){
    let topicMoments : Moment[] = [];

    if(topic.tags == undefined || topic.tags.length <= 0)
      return;

    moments.map((moment) => {
      topic.tags?.map((topicTag) => {
        if(moment.tags.includes(topicTag)){
          topicMoments.push(moment);
        }
      })
    })

    return topicMoments;
  }

  return (
    <>      
      <Coffee></Coffee>
      {/* <PageHeader image={HeaderImage} class={"header-container blue"} /> */}

      {modalOpen && 
        <Modal title={modalTitle} description={modalDescription} timeStamps={modalTimestamps} isOpen={false} openModal={setModalOpen} ></Modal>
      }
      
      <body id="IcebergPage">
        <div className="section-header">Level 1</div>
        <div className="section">
          {topics.filter(x => x.tags?.includes(Tag.Iceberg) && x.tags?.includes(Tag.Layer1)).map((topic) => (
            <div onClick={() => ShowModal(topic.name, topic.description, getMomentsFromTopic(topic)!)}>
              <TopicComponent topic={topic}></TopicComponent>
            </div>
            ))}
        </div>

        <div className="section-header">Level 2</div>
        <div className="section">
          {topics.filter(x => x.tags?.includes(Tag.Iceberg) && x.tags?.includes(Tag.Layer2)).map((topic) => (
            <div onClick={() => ShowModal(topic.name, topic.description, getMomentsFromTopic(topic)!)}>
              <TopicComponent topic={topic}></TopicComponent>
            </div>
            ))}
        </div>

        <div className="section-header">Level 3</div>
        <div className="section">
          {topics.filter(x => x.tags?.includes(Tag.Iceberg) && x.tags?.includes(Tag.Layer3)).map((topic) => (
            <div onClick={() => ShowModal(topic.name, topic.description, getMomentsFromTopic(topic)!)}>
              <TopicComponent topic={topic}></TopicComponent>
            </div>
            ))}
        </div>

        <div className="section-header">Level 4</div>
        <div className="section">
          {topics.filter(x => x.tags?.includes(Tag.Iceberg) && x.tags?.includes(Tag.Layer4)).map((topic) => (
            <div onClick={() => ShowModal(topic.name, topic.description, getMomentsFromTopic(topic)!)}>
              <TopicComponent topic={topic}></TopicComponent>
            </div>
            ))}
        </div>

        <div className="section-header">Level 5</div>
        <div className="section">
          {topics.filter(x => x.tags?.includes(Tag.Iceberg) && x.tags?.includes(Tag.Layer5)).map((topic) => (
            <div onClick={() => ShowModal(topic.name, topic.description, getMomentsFromTopic(topic)!)}>
              <TopicComponent topic={topic}></TopicComponent>
            </div>
            ))}
        </div>

        <div className="section-header">Level 6</div>
        <div className="section">
          {topics.filter(x => x.tags?.includes(Tag.Iceberg) && x.tags?.includes(Tag.Layer6)).map((topic) => (
            <div onClick={() => ShowModal(topic.name, topic.description, getMomentsFromTopic(topic)!)}>
              <TopicComponent topic={topic}></TopicComponent>
            </div>
            ))}
        </div>

        <div className="section-header">Level 7</div>
        <div className="section">
          {topics.filter(x => x.tags?.includes(Tag.Iceberg) && x.tags?.includes(Tag.Layer7)).map((topic) => (
            <div onClick={() => ShowModal(topic.name, topic.description, getMomentsFromTopic(topic)!)}>
              <TopicComponent topic={topic}></TopicComponent>
            </div>
            ))}
        </div>

        <div className="section-header">Level 8</div>
        <div className="section">
          {topics.filter(x => x.tags?.includes(Tag.Iceberg) && x.tags?.includes(Tag.Layer8)).map((topic) => (
            <div onClick={() => ShowModal(topic.name, topic.description, getMomentsFromTopic(topic)!)}>
              <TopicComponent topic={topic}></TopicComponent>
            </div>
            ))}
        </div>

        <div className="section-header">Level 9</div>
        <div className="section">
          {topics.filter(x => x.tags?.includes(Tag.Iceberg) && x.tags?.includes(Tag.Layer9)).map((topic) => (
            <div onClick={() => ShowModal(topic.name, topic.description, getMomentsFromTopic(topic)!)}>
              <TopicComponent topic={topic}></TopicComponent>
            </div>
            ))}
        </div>

        <div className="section-header">Level 10</div>
        <div className="section">
          {topics.filter(x => x.tags?.includes(Tag.Iceberg) && x.tags?.includes(Tag.Layer10)).map((topic) => (
            <div onClick={() => ShowModal(topic.name, topic.description, getMomentsFromTopic(topic)!)}>
              <TopicComponent topic={topic}></TopicComponent>
            </div>
            ))}
        </div>

        <div className="section-header">Level 11</div>
        <div className="section">
          {topics.filter(x => x.tags?.includes(Tag.Iceberg) && x.tags?.includes(Tag.Layer11)).map((topic) => (
            <div onClick={() => ShowModal(topic.name, topic.description, getMomentsFromTopic(topic)!)}>
              <TopicComponent topic={topic}></TopicComponent>
            </div>
            ))}
        </div>

        <div className="section-header">Level 12</div>
        <div className="section">
          {topics.filter(x => x.tags?.includes(Tag.Iceberg) && x.tags?.includes(Tag.Layer12)).map((topic) => (
            <div onClick={() => ShowModal(topic.name, topic.description, getMomentsFromTopic(topic)!)}>
              <TopicComponent topic={topic}></TopicComponent>
            </div>
            ))}
        </div>
      </body>
      </>
  );
}

export default IcebergPage;
