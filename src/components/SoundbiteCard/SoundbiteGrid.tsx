import SoundbiteCard from "./SoundbiteCard";
import "./SoundbiteGrid.scss";
import { Soundbite } from "../../models/Soundbite";
import { useEffect, useState } from "react";
import { sortByType } from "../../Pages/SoundBitesPage/SoundBitesPage";

import { useDataContext } from "../../context/DataContext";

type Props = {
  searchTerm: string;
  sortBy: sortByType;
};

function SoundbiteGrid(props: Props) {
  const [filteredSoundbites, setFilteredSoundbites] = useState<Soundbite[]>([]);
  const [searchTermLength, setSearchTermLength] = useState<number>(0);
  const { soundbites, people } = useDataContext();

  function sortByName(soundbites: Soundbite[]): Soundbite[] {
    return soundbites.sort((a, b) => (a.title <= b.title ? -1 : 1));
  }

  // function sortByPeople(soundbites: Soundbite[]) : Soundbite[] {
  //   const sortedSoundbites = soundbites.sort((a, b) => {
  //     const personA = people.find(x => x.name == a.person)
  //     const personB = people.find(x => x.name == b.person)

  //     if(personA == undefined || personB == undefined)
  //       return 0;

  //     return personA.name <= personB.name ? -1 : 1;
  //   });

  //   return sortedSoundbites;
  // }

  // function sortByDate(soundbites: Soundbite[]): Soundbite[] {
  //   return soundbites.sort(
  //     (a, b) => Date.parse(a.episodeDate) - Date.parse(b.episodeDate)
  //   );
  // }

  useEffect(() => {
    if(soundbites != undefined){
      setFilteredSoundbites(soundbites);
    }
  }, [soundbites])

  useEffect(() => {
    if(props.searchTerm.length < searchTermLength){ //My weird way to check if the user pressed backspace, if they did then load everything back in
      setFilteredSoundbites(soundbites)
      setSearchTermLength(props.searchTerm.length);
      return;
    }

    setSearchTermLength(props.searchTerm.length);

    setFilteredSoundbites(soundbites.filter(
      (include) => 
        include.sound != "" && props.searchTerm.length < 2 || 
        include.title.toLowerCase().includes(props.searchTerm.toLowerCase()) || 
        `${include.personName?.toLowerCase()} ${include.personName?.toLowerCase()}`.includes(props.searchTerm.toLowerCase())
    ));
  }, [props.searchTerm])

  useEffect(() => {
    if (props.sortBy === sortByType.Name) {
      setFilteredSoundbites(sortByName(soundbites));
    }

    // if (props.sortBy === sortByType.Date) {
    //   setSoundbites(sortByDate(soundbites));
    // }

    // if (props.sortBy === sortByType.Person) {
    //   setSoundbites(sortByPeople(soundbites));
    // }
    // if (props.sortBy === sortByType.Default) {
    //   setSoundbites(sortByDate(soundbites));
    // }
  }, [props.sortBy])

  return (
    <div id="soundbite-grid-container">
      <div className="soundbite-grid">
        {filteredSoundbites.map((soundbite) => (
          <SoundbiteCard
            soundbite={soundbite}
            person={people.find(x => x.name == soundbite.personName)}
          />
        ))}
      </div>
    </div>
  );
}

export default SoundbiteGrid;
