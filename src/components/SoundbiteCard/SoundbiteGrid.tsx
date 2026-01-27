import SoundbiteCard from "./SoundbiteCard";
import "./SoundbiteGrid.scss";
import { useMemo, memo } from "react";
import { sortByType } from "../../Pages/SoundBitesPage/SoundBitesPage";

import { useDataContext } from "../../context/DataContext";

type Props = {
  searchTerm: string;
  sortBy: sortByType;
};

function SoundbiteGrid(props: Props) {
  const { soundbites, people } = useDataContext();

  // Memoize filtered and sorted soundbites to avoid recalculating on every render
  const filteredSoundbites = useMemo(() => {
    if (!soundbites || soundbites.length === 0) return [];
    
    const searchLower = props.searchTerm.toLowerCase();
    
    // Filter based on search term
    let filtered = soundbites;
    if (props.searchTerm.length >= 2) {
      filtered = soundbites.filter((sb) => {
        if (sb.sound === "") return false;
        return (
          sb.title.toLowerCase().includes(searchLower) ||
          sb.personName?.toLowerCase().includes(searchLower)
        );
      });
    } else {
      filtered = soundbites.filter(sb => sb.sound !== "");
    }

    // Sort if needed
    if (props.sortBy === sortByType.Name) {
      return [...filtered].sort((a, b) => (a.title <= b.title ? -1 : 1));
    }

    return filtered;
  }, [soundbites, props.searchTerm, props.sortBy]);

  return (
    <div id="soundbite-grid-container">
      <div className="soundbite-grid">
        {filteredSoundbites.map((soundbite) => (
          <div key={soundbite.sound}>
            <SoundbiteCard soundbite={soundbite} person={people.find(x => x.name == soundbite.personName)} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default memo(SoundbiteGrid);
