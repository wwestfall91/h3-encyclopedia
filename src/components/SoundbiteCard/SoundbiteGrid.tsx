import { People } from "../../models/People";
import SoundbiteCard from "./SoundbiteCard";
import "./SoundbiteGrid.css";

function getPeople(): any {
  return People.map((person) =>
    person.soundbites
      .filter((include) => include.sound != "")
      .map((soundbite) => (
        <SoundbiteCard
          soundbite={soundbite}
          image={soundbite.image == "" ? person.face : soundbite.image}
        />
      ))
  );
}

function SoundbiteGrid() {
  return <div className="grid">{getPeople()}</div>;
}

export default SoundbiteGrid;
