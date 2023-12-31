import { People } from "../../models/People";
import SoundbiteList from "./SoundbiteList";
import "./SoundbiteList.css";

function SoundbiteGrid() {
  return (
    <>
      <div className="grid">
        {People.map((person) =>
          person.soundbites
            .filter((include) => include.sound != "")
            .map((soundbite) => (
              <>
                <SoundbiteList
                  soundbite={soundbite}
                  image={soundbite.image == "" ? person.face : soundbite.image}
                ></SoundbiteList>
              </>
            ))
        )}
      </div>
    </>
  );
}

export default SoundbiteGrid;
