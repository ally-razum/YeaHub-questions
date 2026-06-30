import { useFilterParam } from "@/shared/lib/hooks/useFilterParam";
import { ratingOptions } from "@/shared/config/filterConstants";
import { FilterButton } from "@/shared/ui/FilterButton/FilterButton";
import "./FilterByRating.css";

export function FilterByRating() {
const { currentValue: currentRating, toggleParam: handleRatingChange } =
  useFilterParam("rate");


  return (
    <div className="rating-filters">
      {ratingOptions.map((element) => {
      const isActive = currentRating === String(element.value);

        return (
          <FilterButton
            key={element.id}
            label={element.label}
            isActive={isActive}
            onClick={() => handleRatingChange(element.value)}
            baseClassName="rating-btn"
          />
        );
      })}
    </div>
  );
}
