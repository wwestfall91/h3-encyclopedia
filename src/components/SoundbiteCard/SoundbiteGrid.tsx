import SoundbiteCard from "./SoundbiteCard";
import { Soundbites as AllSoundbites } from "./../../models/Soundbites";
import "./SoundbiteGrid.scss";
import { Soundbite } from "../../models/Soundbite";
import { useEffect, useState } from "react";
import { sortByType } from "../../Pages/SoundBitesPage/SoundBitesPage";

type Props = {
  searchTerm: string;
  sortBy: sortByType;
};

function SoundbiteGrid(props: Props) {
  const [soundbites, setSoundbites] = useState<Soundbite[]>([]);

  function sortByName(soundbites: Soundbite[]): Soundbite[] {
    return soundbites.sort((a, b) => (a.title <= b.title ? -1 : 1));
  }

  function sortByPeople(soundbites: Soundbite[]): Soundbite[] {
    return soundbites.sort((a, b) =>
      a.people[0].firstName <= b.people[0].firstName ? -1 : 1
    );
  }

  function sortByDate(soundbites: Soundbite[]): Soundbite[] {
    return soundbites.sort(
      (a, b) => Date.parse(a.episode.date) - Date.parse(b.episode.date)
    );
  }

  useEffect(() => {
    const soundbites = AllSoundbites.filter(
      (include) =>
        (include.sound != "" && props.searchTerm.length < 2) ||
        include.title.toLowerCase().includes(props.searchTerm.toLowerCase()) ||
        `${include.people[0].firstName.toLowerCase()} ${include.people[0].lastName.toLowerCase()}`.includes(
          props.searchTerm.toLowerCase()
        )
    );

    if (props.sortBy === sortByType.Name) {
      setSoundbites(sortByName(soundbites));
    }

    if (props.sortBy === sortByType.Date) {
      setSoundbites(sortByDate(soundbites));
    }

    if (props.sortBy === sortByType.Person) {
      setSoundbites(sortByPeople(soundbites));
    }
    if (props.sortBy === sortByType.Default) {
      setSoundbites(sortByPeople(soundbites));
    }
  }, [props.sortBy, props.searchTerm]);

  return (
    <div id="soundbite-grid-container">
      <div className="soundbite-grid">
        {soundbites.map((soundbite) => (
          <SoundbiteCard
            soundbite={soundbite}
            image={
              soundbite.image == "" ? soundbite.people[0].face : soundbite.image
            }
          />
        ))}
      </div>
    </div>
  );
}

export default SoundbiteGrid;
