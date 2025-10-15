import { useEffect, useState, useRef, useCallback } from "react";
import Coffee from "../../components/Coffee";
import SubmitModal from "../../components/Modals/SubmitModal/SubmitModal";
import PersonCard from "./PersonCard";
import { useDataContext } from "../../context/DataContext";
import SubHeader from "../SubHeader/SubHeader";
import { sortByType } from "../SoundBitesPage/SoundBitesPage";
import { Person } from "../../models/Person";
import "./PeoplePage.scss";
import { useSearchParams } from "react-router-dom";

function PeoplePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [showEmailModal, setShowEmailModal] = useState<boolean>(false);
  const [_, setSortBy] = useState<sortByType>(sortByType.Default);
  const { people } = useDataContext();
  const [filteredPeople, setFilteredPeople] = useState<Person[]>([]);
  const [visiblePeople, setVisiblePeople] = useState<Person[]>([]);
  const [page, setPage] = useState(() => {
    const pageParam = searchParams.get("page");
    return pageParam ? parseInt(pageParam, 10) : 1;
  });
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const itemsPerPage = 20;
  const observer = useRef<IntersectionObserver>();

  // Debug logging
  useEffect(() => {
    console.log("People data loaded:", people?.length);
    console.log("Current page:", page);
    console.log("Visible people count:", visiblePeople?.length);
  }, [people, page, visiblePeople]);

  // Reset pagination when search changes
  useEffect(() => {
    setPage(1);
    setHasMore(true);
  }, [searchTerm]);

  // Update URL when page changes
  // Initialize filtered and visible people when data is available
  useEffect(() => {
    if (!people || people.length === 0) {
      return;
    }

    console.log("Initializing with people:", people.length);
    const filtered = people.filter((p) =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPeople(filtered);

    // Load items up to current page
    const itemsToLoad = page * itemsPerPage;
    const currentItems = filtered.slice(0, itemsToLoad);
    console.log(`Loading ${currentItems.length} items for page ${page}`);
    setVisiblePeople(currentItems);
    setHasMore(filtered.length > itemsToLoad);
  }, [people, searchTerm, page, itemsPerPage]);

  // Update URL when page changes
  useEffect(() => {
    setSearchParams({ page: page.toString() }, { replace: true });
  }, [page, setSearchParams]);

  // Setup intersection observer for infinite scroll
  const lastPersonRef = useCallback(
    (node: HTMLDivElement) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setLoading(true);
          const nextPage = page + 1;
          const start = (nextPage - 1) * itemsPerPage;
          const end = start + itemsPerPage;
          const nextBatch = filteredPeople.slice(start, end);

          if (nextBatch.length > 0) {
            setVisiblePeople((prev) => [...prev, ...nextBatch]);
            setPage(nextPage);
            setHasMore(end < filteredPeople.length);
          } else {
            setHasMore(false);
          }
          setLoading(false);
        }
      });

      if (node) observer.current.observe(node);
    },
    [loading, hasMore, page, filteredPeople]
  );

  return (
    <div id="PeoplePage">
      <div className="soundbite-page-container">
        <Coffee></Coffee>
        {showEmailModal && (
          <SubmitModal
            toggleShown={setShowEmailModal}
            soundbite={false}
          ></SubmitModal>
        )}
        <SubHeader
          setSearchTerm={setSearchTerm}
          setShowSubmitModel={setShowEmailModal}
          setSortBy={setSortBy}
          requestString={"Request an Update!"}
        ></SubHeader>
        <div id="soundbite-grid-container">
          <div className="soundbite-grid">
            {visiblePeople.map((person, index) => (
              <div
                key={person.name}
                ref={
                  index === visiblePeople.length - 1 ? lastPersonRef : undefined
                }
              >
                <PersonCard person={person} />
              </div>
            ))}
            {loading && <div className="loading-spinner">Loading more...</div>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PeoplePage;
