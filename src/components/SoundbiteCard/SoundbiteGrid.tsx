import { People } from "../../models/People";
import SoundbiteList from "./SoundbiteList";
import "./SoundbiteGrid.css";
import "./SoundbiteList.css";

function SoundbiteGrid() {
  return (
    <>
      <ul>
        {People.map((person) =>
          person.soundbites.map((soundbite) => (
            <>
              <SoundbiteList
                soundbite={soundbite}
                image={soundbite.image == "" ? person.face : soundbite.image}
              ></SoundbiteList>
            </>
          ))
        )}
      </ul>
    </>
  );
}

export default SoundbiteGrid;
