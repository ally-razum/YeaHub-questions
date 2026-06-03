import { useSearchParams } from "react-router-dom";
import "./QuestionPagination.css"

export function QuestionPagination() {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;

  function handlePrev() {
    if (page > 1) {
      searchParams.set("page", String(page - 1));
      setSearchParams(searchParams);
    }
  }

  function handleNext() {
    searchParams.set("page", String(page + 1));
    setSearchParams(searchParams);
  }

  return (
    <div className="pagination">
      <button
        className="pagination__button"
        onClick={handlePrev}
        disabled={page === 1}
      >
        ←
      </button>
      <span className="pagination__current ">{page}</span>
      <button className="pagination__button" onClick={handleNext}>
        →
      </button>
    </div>
  );
}
