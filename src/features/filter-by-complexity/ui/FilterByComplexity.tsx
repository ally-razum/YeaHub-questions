import { useSearchParams } from "react-router-dom";
import "./FilterByComplexity.css";

export function FilterByComplexity() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentComplexity = searchParams.get("complexity") || "";

  const complexityRanges = [
    { id: 1, label: "1 - 3", value: 2 },
    { id: 2, label: "4 - 6", value: 5 },
    { id: 3, label: "7 - 8", value: 8 },
    { id: 4, label: "9 - 10", value: 10 },
  ];


  function handleComplexityChange(value: number) {
    searchParams.set("page", "1");

    if (String(value) === currentComplexity) {
      searchParams.delete("complexity");
    } else {
      searchParams.set("complexity", String(value));
    }
    setSearchParams(searchParams);
  }

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
