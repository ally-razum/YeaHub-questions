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
    <div >
      <button onClick={handlePrev} disabled={page === 1}>
        ←
      </button>
      <span>{page}</span>
      <button onClick={handleNext}>→</button>
    </div>
  );
}
