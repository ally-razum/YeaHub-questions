import { useSearchParams } from "react-router-dom";
import { useGetSkillsQuery } from "../../../entities/skills/api/skillApi"; 


import "./FilterByCategory.css";


export function FilterByCategory() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentSkills = searchParams.get("skills") || "";
   const { data: skillsData, isLoading, isError } = useGetSkillsQuery();

  function handleSpecializationChange(id: number) {
    searchParams.set("page", "1");

    if (String(id) === currentSkills) {
      searchParams.delete("skills");
    } else {
      searchParams.set("skills", String(id));
    }
    setSearchParams(searchParams);
  }

 if (isLoading)
   return (
     <div className="category-filters__loading">Загрузка категорий...</div>
   );

 if (isError)
   return <div className="category-filters__error">Ошибка загрузки</div>;


  return (
    <div className="category-filters">
      {skillsData?.data.map((element) => {
        const isActive = currentSkills === String(element.id);

        return (
          <button
            key={element.id}
            onClick={() => handleSpecializationChange(element.id)}
            className={`category-btn ${isActive ? "category-btn--active" : ""}`}
          >
            {element.title}
          </button>
        );
      })}
    </div>
  );
}
