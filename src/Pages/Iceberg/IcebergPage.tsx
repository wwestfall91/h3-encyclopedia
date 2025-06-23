import { useDataContext } from "../../context/DataContext";
import TopicComponent from "./TopicComponent";
import { Tag } from "../../models/enums/Tag";
import Coffee from "../../components/Coffee";
import "./IcebergPage.scss";

export function IcebergPage() {
  const {topics } = useDataContext();

  return (
    <>      
      <Coffee></Coffee>
      <div id="IcebergPage">
        <div className="section-header">Level 1</div>
        <div className="section">
          {topics.filter(x => x.tags?.includes(Tag.Iceberg) && x.tags?.includes(Tag.Layer1)).map((topic) => (
            <TopicComponent topic={topic}></TopicComponent>
          ))}
        </div>

        <div className="section-header">Level 2</div>
        <div className="section">
          {topics.filter(x => x.tags?.includes(Tag.Iceberg) && x.tags?.includes(Tag.Layer2)).map((topic) => (
              <TopicComponent topic={topic}></TopicComponent>
            ))}
        </div>

        <div className="section-header">Level 3</div>
        <div className="section">
          {topics.filter(x => x.tags?.includes(Tag.Iceberg) && x.tags?.includes(Tag.Layer3)).map((topic) => (
              <TopicComponent topic={topic}></TopicComponent>
            ))}
        </div>

        <div className="section-header">Level 4</div>
        <div className="section">
          {topics.filter(x => x.tags?.includes(Tag.Iceberg) && x.tags?.includes(Tag.Layer4)).map((topic) => (
              <TopicComponent topic={topic}></TopicComponent>
            ))}
        </div>

        <div className="section-header">Level 5</div>
        <div className="section">
          {topics.filter(x => x.tags?.includes(Tag.Iceberg) && x.tags?.includes(Tag.Layer5)).map((topic) => (
              <TopicComponent topic={topic}></TopicComponent>
            ))}
        </div>

        <div className="section-header">Level 6</div>
        <div className="section">
          {topics.filter(x => x.tags?.includes(Tag.Iceberg) && x.tags?.includes(Tag.Layer6)).map((topic) => (
              <TopicComponent topic={topic}></TopicComponent>
            ))}
        </div>

        <div className="section-header">Level 7</div>
        <div className="section">
          {topics.filter(x => x.tags?.includes(Tag.Iceberg) && x.tags?.includes(Tag.Layer7)).map((topic) => (
              <TopicComponent topic={topic}></TopicComponent>
            ))}
        </div>

        <div className="section-header">Level 8</div>
        <div className="section">
          {topics.filter(x => x.tags?.includes(Tag.Iceberg) && x.tags?.includes(Tag.Layer8)).map((topic) => (
              <TopicComponent topic={topic}></TopicComponent>
            ))}
        </div>

        <div className="section-header">Level 9</div>
        <div className="section">
          {topics.filter(x => x.tags?.includes(Tag.Iceberg) && x.tags?.includes(Tag.Layer9)).map((topic) => (
              <TopicComponent topic={topic}></TopicComponent>
            ))}
        </div>

        <div className="section-header">Level 10</div>
        <div className="section">
          {topics.filter(x => x.tags?.includes(Tag.Iceberg) && x.tags?.includes(Tag.Layer10)).map((topic) => (
              <TopicComponent topic={topic}></TopicComponent>
            ))}
        </div>

        <div className="section-header">Level 11</div>
        <div className="section">
          {topics.filter(x => x.tags?.includes(Tag.Iceberg) && x.tags?.includes(Tag.Layer11)).map((topic) => (
              <TopicComponent topic={topic}></TopicComponent>
            ))}
        </div>

        <div className="section-header">Level 12</div>
        <div className="section">
          {topics.filter(x => x.tags?.includes(Tag.Iceberg) && x.tags?.includes(Tag.Layer12)).map((topic) => (
              <TopicComponent topic={topic}></TopicComponent>
            ))}
        </div>
      </div>
      </>
  );
}

export default IcebergPage;
