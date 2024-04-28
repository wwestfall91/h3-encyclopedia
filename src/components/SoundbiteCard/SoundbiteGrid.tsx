import SoundbiteCard from "./SoundbiteCard";
import { Soundbites } from "./../../models/Soundbites";
import "./SoundbiteGrid.scss";
import { useState } from "react";

type Props = { searchTerm: string };

function SoundbiteGrid(props: Props) {
  //const [sort, setSort] = useState();
  function getPeople(): any {
    return Soundbites.filter(
      (include) =>
        (include.sound != "" && props.searchTerm.length < 2) ||
        include.title.toLowerCase().includes(props.searchTerm.toLowerCase()) ||
        `${include.people[0].firstName.toLowerCase()} ${include.people[0].lastName.toLowerCase()}`.includes(
          props.searchTerm.toLowerCase()
        )
    ).map((soundbite) => (
      <SoundbiteCard
        soundbite={soundbite}
        image={
          soundbite.image == "" ? soundbite.people[0].face : soundbite.image
        }
      />
    ));
  }

  return (
    <div id="soundbite-grid-container">
      <div className="soundbite-grid">{getPeople()}</div>
    </div>
  );
}

export default SoundbiteGrid;
