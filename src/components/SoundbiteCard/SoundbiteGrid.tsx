import SoundbiteCard from "./SoundbiteCard";
import "./SoundbiteGrid.scss";
import { useMemo, memo } from "react";
import { sortByType } from "../../Pages/SoundBitesPage/SoundBitesPage";
import ProgressivePagination from "../Pagination/ProgressivePagination";

import { useDataContext } from "../../context/DataContext";
import { useProgressivePagination } from "../../Helpers/useProgressivePagination";

type Props = {
  searchTerm: string;
  sortBy: sortByType;
};

function SoundbiteGrid(props: Props) {
  const { soundbites, people } = useDataContext();
  const itemsPerPage = 30;

  const filteredSoundbites = useMemo(() => {
    if (!soundbites || soundbites.length === 0) return [];
    
    const searchLower = props.searchTerm.toLowerCase();
    
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

    if (props.sortBy === sortByType.Name) {
      return [...filtered].sort((a, b) => (a.title <= b.title ? -1 : 1));
    }

    return filtered;
  }, [soundbites, props.searchTerm, props.sortBy]);

  const pagination = useProgressivePagination(
    filteredSoundbites,
    itemsPerPage,
    `${props.searchTerm}:${props.sortBy}`
  );

  return (
    <>
      <div id="soundbite-grid-container">
        <div className="soundbite-grid">
          {pagination.visibleItems.map((soundbite) => (
            <div key={soundbite.sound}>
              <SoundbiteCard soundbite={soundbite} person={people.find(x => x.name == soundbite.personName)} />
            </div>
          ))}
        </div>
      </div>
      <ProgressivePagination
        visibleCount={pagination.visibleCount}
        totalCount={pagination.totalCount}
        remainingCount={pagination.remainingCount}
        pageSize={itemsPerPage}
        onLoadMore={pagination.loadMore}
      />
    </>
  );
}

export default memo(SoundbiteGrid);
