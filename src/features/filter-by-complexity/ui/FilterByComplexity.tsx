import { useFilterParam } from "../../../shared/lib/hooks/useFilterParam";
import { complexityRanges } from "../../../shared/config/filterConstants";
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
          <button
            key={element.id}
            onClick={() => handleComplexityChange(element.value)}
            className={`complexity-btn ${isActive ? "complexity-btn--active" : ""}`}
          >
            {element.label}
          </button>
        );
      })}
    </div>
  );
}
