import { useSearchParams } from "react-router-dom";
import { range } from "lodash-es";
import "./QuestionPagination.css";

interface QuestionPaginationProps {
  totalPages: number;
}

export function QuestionPagination({ totalPages }: QuestionPaginationProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;

  function handlePrev() {
    //предыдущая стр
    const newParams = new URLSearchParams(searchParams); // создание копии параметров
    newParams.set("page", String(page - 1));
    setSearchParams(newParams);
  }

  function handleNext() {
    //сследующая стр
    console.log("ТЫК ТЫК")
    if (page < totalPages) {
      const newParams = new URLSearchParams(searchParams);
      newParams.set("page", String(page + 1));
      setSearchParams(newParams);
    }
  }

  function handlePageClick(p: number | string) {
    if (typeof p === "number") {
      const newParams = new URLSearchParams(searchParams);
      newParams.set("page", String(p));
      setSearchParams(newParams);
    }
  }

  // ранжирование пагинации -  расстановка "..." в зависимости от того , где юзер
  function getPaginationRange() {
    const totalNumbers = 6;

    // если стр меньше 7 то ...не нужно
    if (totalPages <= 7) {
      return range(1, totalPages + 1);
    }

    // ситуация [1 2 3 4 5 6...100500]
    if (page <= 4) {
      const leftRange = range(1, totalNumbers + 1);
      return [...leftRange, "...", totalPages];
    }

    // ситуация [1... 100497 100498 100499 100500]
    if (page >= totalPages - 3) {
      const rightRange = range(totalPages - 4, totalPages + 1);
      return [1, "...", ...rightRange];
    }

    // в середине
    const middleRange = range(page - 1, page + 5); //это с прода кол-во чисел
    return [1, "...", ...middleRange, "...", totalPages];
  }

  const pagesRange = getPaginationRange();

  return (
    <div className="pagination">
      <button
        className="pagination__button"
        onClick={() => handlePrev()}
        disabled={page === 1}
      >
        ←
      </button>

      {pagesRange.map((p, index) => {
        if (p === "...") {
          return (
            <span key={`dots-${index}`} className="pagination__dots">
              ...
            </span>
          );
        }

        const isActive = p === page;
        return (
          <button
            key={`page-${p}`}
            onClick={() => handlePageClick(p)}
            className={`pagination__button ${isActive ? "pagination__current" : ""}`}
          >
            {p}
          </button>
        );
      })}

      <button
        className="pagination__button"
        onClick={() => handleNext()}
        disabled={page === totalPages}
      >
        →
      </button>
    </div>
  );
}
