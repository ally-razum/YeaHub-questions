import { useSearchParams } from "react-router-dom";
import "./FilterByRating.css";

export function FilterByRating() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentRating = searchParams.get("rate") || "";

  const ratingOptions = [
    { id: 1, label: "1", value: 1 },
    { id: 2, label: "2", value: 2 },
    { id: 3, label: "3", value: 3 },
    { id: 4, label: "4", value: 4 },
    { id: 5, label: "5", value: 5 },
  ];

  function handleRatingChange(value: number) {
    searchParams.set("page", "1");
    if (String(value) === currentRating) {
        searchParams.delete("rate");
    } else {
        searchParams.set("rate", String(value));
    }
    setSearchParams(searchParams);

  }

  return (
    <div className="rating-filters">
      {ratingOptions.map((element) => {
      const isActive = currentRating === String(element.value);

        return (
          <button
            key={element.id}
            onClick={() => handleRatingChange(element.value)}
            className={`rating-btn ${isActive ? "rating-btn--active" : ""}`}
          >
            {element.label}
          </button>
        );
      })}
    </div>
  );
}
