import { People } from "../../models/People";
import SoundbiteCard from "./SoundbiteCard";
import "./SoundbiteGrid.css";

type Props = { searchTerm: string };

function SoundbiteGrid(props: Props) {
  function getPeople(): any {
    return People.map((person) =>
      person.soundbites
        .filter(
          (include) =>
            (include.sound != "" && props.searchTerm.length < 2) ||
            include.title
              .toLowerCase()
              .includes(props.searchTerm.toLowerCase()) ||
            `${person.firstName.toLowerCase()} ${person.lastName.toLowerCase()}`.includes(
              props.searchTerm.toLowerCase()
            )
        )
        .map((soundbite) => (
          <SoundbiteCard
            soundbite={soundbite}
            image={soundbite.image == "" ? person.face : soundbite.image}
          />
        ))
    );
  }

  return <div className="soundbite-grid">{getPeople()}</div>;
}

export default SoundbiteGrid;
