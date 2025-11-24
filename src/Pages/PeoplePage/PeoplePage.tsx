import { useEffect, useState, useRef, useCallback, useMemo } from "react";
import Coffee from "../../components/Coffee";
import SubmitModal from "../../components/Modals/SubmitModal/SubmitModal";
import PersonCard from "./PersonCard";
import { useDataContext } from "../../context/DataContext";
import SubHeader from "../SubHeader/SubHeader";
import { sortByType } from "../SoundBitesPage/SoundBitesPage";
import "./PeoplePage.scss";
import { useSearchParams } from "react-router-dom";

function PeoplePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [showEmailModal, setShowEmailModal] = useState<boolean>(false);
  const [_, setSortBy] = useState<sortByType>(sortByType.Default);
  const { people } = useDataContext();
  const [page, setPage] = useState(() => {
    const pageParam = searchParams.get("page");
    return pageParam ? parseInt(pageParam, 10) : 1;
  });
  const [loading, setLoading] = useState(false);
  const itemsPerPage = 30;
  const observer = useRef<IntersectionObserver>();

  // Memoize filtered people to avoid recalculating on every render
  const filteredPeople = useMemo(() => {
    if (!people || people.length === 0) return [];
    const searchLower = searchTerm.toLowerCase();
    return people.filter((p) => p.name.toLowerCase().includes(searchLower));
  }, [people, searchTerm]);

  // Memoize visible people based on pagination
  const visiblePeople = useMemo(() => {
    const itemsToLoad = page * itemsPerPage;
    return filteredPeople.slice(0, itemsToLoad);
  }, [filteredPeople, page, itemsPerPage]);

  // Reset pagination when search changes
  useEffect(() => {
    setPage(1);
  }, [searchTerm]);

  // Update URL when page changes
  useEffect(() => {
    setSearchParams({ page: page.toString() }, { replace: true });
  }, [page, setSearchParams]);

  // Preload next batch of images
  useEffect(() => {
    const nextBatchStart = page * itemsPerPage;
    const nextBatchEnd = nextBatchStart + itemsPerPage;
    const nextBatch = filteredPeople.slice(nextBatchStart, nextBatchEnd);
    
    // Preload images for the next batch
    nextBatch.forEach((person) => {
      const img = new Image();
      img.src = person.image;
    });
  }, [page, filteredPeople, itemsPerPage]);

  // Setup intersection observer for infinite scroll
  const lastPersonRef = useCallback(
    (node: HTMLDivElement) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();

      const canLoadMore = filteredPeople.length > page * itemsPerPage;
      if (!canLoadMore) return;

      observer.current = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setLoading(true);
            setPage((prev) => prev + 1);
            setLoading(false);
          }
        },
        {
          rootMargin: '500px', // Trigger 500px before reaching the end
        }
      );

      if (node) observer.current.observe(node);
    },
    [loading, page, filteredPeople.length, itemsPerPage]
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
