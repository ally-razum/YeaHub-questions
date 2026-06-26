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

 if (isError)
   return <div className="category-filters__error">Ошибка загрузки</div>;


  return (
    <div className="category-filters">
      {skillsData?.data.map((element) => {
        const isActive = currentSkillsID === String(element.id);

        return (
          <button
            key={element.id}
            onClick={() => handleSkillsChange(element.id)}
            className={`category-btn ${isActive ? "category-btn--active" : ""}`}
          >
            {element.title}
          </button>
        );
      })}
    </div>
  );
}
