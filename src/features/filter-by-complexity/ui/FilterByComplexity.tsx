import { useFilterParam } from "../../../shared/lib/hooks/useFilterParam";
import { complexityRanges } from "../../../shared/config/filterConstants";
import { FilterButton } from "../../../shared/ui/FilterButton/FilterButton";
import "./FilterByComplexity.css";

export function FilterByComplexity() {
  const {
    currentValue: currentComplexity,
    toggleParam: handleComplexityChange,
  } = useFilterParam("complexity");

  return (
    <div className="complexity-filters">
      {complexityRanges.map((element) => {
        const isActive = currentComplexity === String(element.value);

        return (
          <FilterButton
            key={element.id}
            label={element.label}
            isActive={isActive}
            onClick={() => handleComplexityChange(element.value)}
            baseClassName="complexity-btn"
          />
        );
      })}
    </div>
  );
}
