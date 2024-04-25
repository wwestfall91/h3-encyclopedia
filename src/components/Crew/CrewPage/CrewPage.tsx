import PageHeader from "../../../Pages/PageHeader/PageHeader";
import HeaderImage from "../../../assets/images/H3 Sound Station.png";
import DanComponent from "../DanComponent/DanComponent";
import "./CrewPage.scss";
import CustomCard1 from "../../Cards/CustomCard1/CustomCard1";
import { useState } from "react";
import AllCrewAssets from "../../../assets/AllCrewAssets";

export enum CrewMembers {
  Dan,
}

export function CrewPage() {
  function HandleCrewClick() {
    setIsSelecting(false);
    setSelectedContainer(
      <DanComponent onReturnClickCallback={HandleReturnClick} />
    );
  }

  function HandleReturnClick() {
    setIsSelecting(true);
    setSelectedContainer(<></>);
  }

  const [isSelecting, setIsSelecting] = useState(true);
  const [selectedContainer, setSelectedContainer] = useState(<></>);

  return (
    <>
      <PageHeader image={HeaderImage} class={"header-container purple"} />
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
                onClickCallback={HandleCrewClick}
                comingSoon={false}
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
                title={"Olivia"}
                image={AllCrewAssets.Olivia.UniformOlivia}
                onClickCallback={() => {}}
                comingSoon={true}
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
                  "--column": 4,
                  "--row": 2,
                } as React.CSSProperties
              }
            >
              <CustomCard1
                title={"Ian"}
                image={AllCrewAssets.Ian.UniformIan}
                onClickCallback={() => {}}
                comingSoon={true}
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
                  "--column": 6,
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
                title={"Love"}
                image={AllCrewAssets.Love.UniformLove}
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
                  "--column": 9,
                  "--row": 1,
                } as React.CSSProperties
              }
            >
              <CustomCard1
                title={"Zach"}
                image={AllCrewAssets.Zach.UniformZach}
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
                title={"Nate"}
                image={AllCrewAssets.Nate.WhoIsNate}
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
