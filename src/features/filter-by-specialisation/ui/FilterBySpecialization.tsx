import { useState } from "react";
import { useGetSpecializationsQuery } from "@/entities/specialization/api/specializationApi";
import { useFilterParam } from "@/shared/lib/hooks/useFilterParam";
import { QueryBoundary } from "@/shared/ui/QueryBoundary/QueryBoundary";
import "./FilterBySpecialization.css";

export function FilterBySpecialization() {
  const { data: specData, isLoading, isError } = useGetSpecializationsQuery();
  const [isExpanded, setIsExpanded] = useState(false);
  const { currentValue: currentSpec, toggleParam: handleSpecChange } =
    useFilterParam("specializationId");

  const allSpecs = specData?.data || [];
  const visibleSpecs = isExpanded ? allSpecs : allSpecs.slice(0, 5);

  return (
    <QueryBoundary
      isLoading={isLoading}
      isError={isError}
      loadingText="Загрузка направлений..."
    >
      <div className="specialization-filters">
        {visibleSpecs.map((element) => {
          const isActive = currentSpec === String(element.id);

          return (
            <button
              key={element.id}
              onClick={() => handleSpecChange(element.id)}
              className={`spec-btn ${isActive ? "spec-btn--active" : ""}`}
            >
              {element.title}
            </button>
          );
        })}
        {allSpecs.length > 5 && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="spec-toggle-btn"
          >
            {isExpanded ? "Скрыть" : "Посмотреть все"}
          </button>
        )}
      </div>
    </QueryBoundary>
  );
}
