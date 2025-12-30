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
      <CrewMemberComponent
        crewName={crewName}
        onReturnClickCallback={HandleReturnClick}
      />
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
          <div className="crew-page">
            <>
              <h1>CREW</h1>
              <div className="crew-page-grid">
                <CustomCard1
                  title={"Dan"}
                  image={AllCrewAssets.Dan.UniformDan}
                  onClickCallback={() => HandleCrewClick("Dan")}
                  comingSoon={false}
                />
                {/* <CustomCard1
                  title={"Ian"}
                  image={AllCrewAssets.Ian.UniformIan}
                  onClickCallback={() => HandleCrewClick("Ian")}
                  comingSoon={false}
                /> */}
                <CustomCard1
                  title={"Zach"}
                  image={AllCrewAssets.Zach.UniformZach}
                  onClickCallback={() => HandleCrewClick("Zach")}
                  comingSoon={false}
                />
                <CustomCard1
                  title={"AB"}
                  image={AllCrewAssets.AB.UniformAB}
                  onClickCallback={() => {}}
                  comingSoon={true}
                />
                <CustomCard1
                  title={"Love"}
                  image={AllCrewAssets.Love.UniformLove}
                  onClickCallback={() => HandleCrewClick("Love")}
                  comingSoon={false}
                />
                {/* <CustomCard1
                  title={"Sam"}
                  image={AllCrewAssets.Sam.UniformSam}
                  onClickCallback={() => {}}
                  comingSoon={true}
                /> */}
                <CustomCard1
                  title={"Olivia"}
                  image={AllCrewAssets.Olivia.UniformOlivia}
                  onClickCallback={() => HandleCrewClick("Olivia")}
                  comingSoon={false}
                />
                {/* <CustomCard1
                  title={"Cam"}
                  image={AllCrewAssets.Cameron.UniformCam}
                  onClickCallback={() => {}}
                  comingSoon={true}
                /> */}
                <CustomCard1
                  title={"Lena"}
                  image={AllCrewAssets.Lena.UniformLena}
                  onClickCallback={() => HandleCrewClick("Lena")}
                  comingSoon={false}
                />
                <CustomCard1
                  title={"Nate"}
                  image="https://static.wikia.nocookie.net/h3podcast/images/6/65/Download.jpg"
                  onClickCallback={() => HandleCrewClick("Nate")}
                  comingSoon={false}
                />
                <CustomCard1
                    title={"Tamara"}
                    image="https://static.wikia.nocookie.net/h3h3/images/c/cc/Tamara_Joseph.jpg"
                    onClickCallback={() => {HandleCrewClick("Tamara")}}
                    comingSoon={false}
                />
                <CustomCard1
                    title={"Morgan"}
                    image="https://i.ytimg.com/vi/waklkPdiXPY/sddefault.jpg"
                    onClickCallback={() => {}}
                    comingSoon={"Coming Soon"}
                />
              </div>
            </>
            {/* <>
                <h1>HONORARY CREW</h1>
                <div className="crew-page-grid">
                    <CustomCard1
                      title={"Ian"}
                      image={AllCrewAssets.Ian.UniformIan}
                      onClickCallback={() => HandleCrewClick("Ian")}
                      comingSoon={false}
                    />
                    <CustomCard1
                      title={"Cam"}
                      image={AllCrewAssets.Cameron.UniformCam}
                      onClickCallback={() => {}}
                      comingSoon={true}
                    />
                    <CustomCard1
                      title={"Sam"}
                      image={AllCrewAssets.Sam.UniformSam}
                      onClickCallback={() => {}}
                      comingSoon={true}
                    />
                </div>
              </> */}
            {/* <>
                <h1>SOMETIMES I JUST MISS MY OLD FRIENDS</h1>
                <div className="crew-page-grid">
                  <CustomCard1
                    title={"Ian"}
                    image={AllCrewAssets.Ian.UniformIan}
                    onClickCallback={() => HandleCrewClick("Ian")}
                    comingSoon={false}
                  />
                  <CustomCard1
                    title={"Cam"}
                    image={AllCrewAssets.Cameron.UniformCam}
                    onClickCallback={() => {}}
                    comingSoon={true}
                  />
                  <CustomCard1
                    title={"Sam"}
                    image={AllCrewAssets.Sam.UniformSam}
                    onClickCallback={() => {}}
                    comingSoon={true}
                  />
                </div>
              </> */}
          </div>
        )}
        {!isSelecting && selectedContainer}
      </div>
    </>
  );
}

export default CrewPage;
