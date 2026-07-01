import { FilterButton } from "../../../shared/ui/FilterButton/FilterButton";
import { useCategoryFilter } from "../hooks/useCategoryFilters";
import "./FilterByCategory.css";

export function FilterByCategory() {
  const {
    skillsData,
    isLoading,
    isError,
    currentSkillsID,
    handleSkillsChange,
  } = useCategoryFilter();
 
 if (isLoading)
   return (
     <div className="category-filters__loading">Загрузка категорий...</div>
   );

   if (isError) return null;

  return (
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
  );
}
