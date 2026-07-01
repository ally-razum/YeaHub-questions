import { FilterButton } from "../../../shared/ui/FilterButton/FilterButton";
import { useCategoryFilter } from "../hooks/useCategoryFilters";
import { QueryBoundary } from "@/shared/ui/QueryBoundary/QueryBoundary";
import "./FilterByCategory.css";

export function FilterByCategory() {
  const {
    skillsData,
    isLoading,
    isError,
    currentSkillsID,
    handleSkillsChange,
  } = useCategoryFilter();

  return (
    <QueryBoundary
      isLoading={isLoading}
      isError={isError}
      loadingText="Загрузка категорий..."
    >
      <div className="category-filters">
        {skillsData?.data.map((element) => {
          const isActive = currentSkillsID === String(element.id);

          return (
            <FilterButton
              key={element.id}
              label={element.title}
              isActive={isActive}
              onClick={() => handleSkillsChange(element.id)}
              baseClassName="category-btn"
            />
          );
        })}
      </div>
    </QueryBoundary>
  );
}
