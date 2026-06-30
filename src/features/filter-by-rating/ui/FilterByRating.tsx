import { useFilterParam } from "../../../shared/lib/hooks/useFilterParam";
import { ratingOptions } from "../../../shared/config/filterConstants";
import "./FilterByRating.css";

export function FilterByRating() {
const { currentValue: currentRating, toggleParam: handleRatingChange } =
  useFilterParam("rate");


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
