import CrewMemberComponent from "../DanComponent/CrewMemberComponent";
import CustomCard1 from "../../Cards/CustomCard1/CustomCard1";
import { useState } from "react";
import AllCrewAssets from "../../../assets/AllCrewAssets";
import Coffee from "../../Coffee";
import "./CrewPage.scss";

export enum CrewMembers {
  Dan,
}

export function CrewPage() {
  const [isSelecting, setIsSelecting] = useState(true);
  const [selectedContainer, setSelectedContainer] = useState<JSX.Element>();

  function HandleCrewClick(crewName: string) {
    setIsSelecting(false);
    setSelectedContainer(
      <CrewMemberComponent crewName={crewName} onReturnClickCallback={HandleReturnClick} />
    );
  }

  function HandleReturnClick() {
    setIsSelecting(true);
    setSelectedContainer(<></>);
  }

  return (
    <>
      <Coffee></Coffee>
      <div id="CrewPage">
        {isSelecting && (
          <div className="crew-page-grid">
            <div
              className="crew-page-grid-item"
              style={
                {
                  "--column": 0,
                  "--row": 0,
                } as React.CSSProperties
              }
            >
              <CustomCard1
                title={"Dan"}
                image={AllCrewAssets.Dan.UniformDan}
                onClickCallback={() => HandleCrewClick("Dan")}
                comingSoon={false}
              ></CustomCard1>
            </div>
            <div
              className="crew-page-grid-item"
              style={
                {
                  "--column": 3,
                  "--row": 1,
                } as React.CSSProperties
              }
            >
              <CustomCard1
                title={"Love"}
                image={AllCrewAssets.Love.UniformLove}
                onClickCallback={() => HandleCrewClick("Love")}
                comingSoon={false}
              ></CustomCard1>
            </div>
            <div
              className="crew-page-grid-item"
              style={
                {
                  "--column": 5,
                  "--row": 1,
                } as React.CSSProperties
              }
            >
              <CustomCard1
                title={"Zach"}
                image={AllCrewAssets.Zach.UniformZach}
                onClickCallback={() => HandleCrewClick("Zach")}
                comingSoon={false}
              ></CustomCard1>
            </div>
            <div
              className="crew-page-grid-item"
              style={
                {
                  "--column": 7,
                  "--row": 1,
                } as React.CSSProperties
              }
            >
              <CustomCard1
                title={"Olivia"}
                image={AllCrewAssets.Olivia.UniformOlivia}
                onClickCallback={() => HandleCrewClick("Olivia")}
                comingSoon={false}
              ></CustomCard1>
            </div>
            <div
              className="crew-page-grid-item"
              style={
                {
                  "--column": 9,
                  "--row": 1,
                } as React.CSSProperties
              }
            >
              <CustomCard1
                title={"Ian"}
                image={AllCrewAssets.Ian.UniformIan}
                onClickCallback={() => HandleCrewClick("Ian")}
                comingSoon={false}
              ></CustomCard1>
            </div>
            <div
              className="crew-page-grid-item"
              style={
                {
                  "--column": 4,
                  "--row": 2,
                } as React.CSSProperties
              }
            >
              <CustomCard1
                title={"Lena"}
                image={AllCrewAssets.Lena.UniformLena}
                onClickCallback={() => {}}
                comingSoon={true}
              ></CustomCard1>
            </div>
            <div
              className="crew-page-grid-item"
              style={
                {
                  "--column": 8,
                  "--row": 2,
                } as React.CSSProperties
              }
            >
              <CustomCard1
                title={"Cam"}
                image={AllCrewAssets.Cameron.UniformCam}
                onClickCallback={() => {}}
                comingSoon={true}
              ></CustomCard1>
            </div>
            <div
              className="crew-page-grid-item"
              style={
                {
                  "--column": 2,
                  "--row": 2,
                } as React.CSSProperties
              }
            >
              <CustomCard1
                title={"AB"}
                image={AllCrewAssets.AB.UniformAB}
                onClickCallback={() => {}}
                comingSoon={true}
              ></CustomCard1>
            </div>
            <div
              className="crew-page-grid-item"
              style={
                {
                  "--column": 6,
                  "--row": 2,
                } as React.CSSProperties
              }
            >
              <CustomCard1
                title={"Nate"}
                image="https://static.wikia.nocookie.net/h3podcast/images/6/65/Download.jpg"
                onClickCallback={() => {}}
                comingSoon={true}
              ></CustomCard1>
            </div>
            <div
              className="crew-page-grid-item"
              style={
                {
                  "--column": 10,
                  "--row": 2,
                } as React.CSSProperties
              }
            >
              <CustomCard1
                title={"Sam"}
                image={AllCrewAssets.Sam.UniformSam}
                onClickCallback={() => {}}
                comingSoon={true}
              ></CustomCard1>
            </div>
          </div>
        )}
        {!isSelecting && selectedContainer}
      </div>
    </>
  );
}

export default CrewPage;
