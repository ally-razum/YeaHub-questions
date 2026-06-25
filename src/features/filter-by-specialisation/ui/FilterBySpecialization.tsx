import {useState} from "react"
import { useSearchParams } from "react-router-dom";
import { useGetSpecializationsQuery } from "../../../entities/specialization/api/specializationApi";
import "./FilterBySpecialization.css";

export function FilterBySpecialization() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentSpec = searchParams.get("specializationId") || "";
  const { data: specData, isLoading, isError } = useGetSpecializationsQuery();
   const [isExpanded, setIsExpanded] = useState(false);

  function handleSpecChange(id: number) {
    searchParams.set("page", "1"); 

    if (String(id) === currentSpec) {
      searchParams.delete("specializationId");
    } else {
      searchParams.set("specializationId", String(id));
    }
    setSearchParams(searchParams);
  }

  if (isLoading)
    return <div className="spec-filters__loading">Загрузка направлений...</div>;
  if (isError)
    return <div className="spec-filters__error">Ошибка загрузки</div>;

   const allSpecs = specData?.data || [];
   const visibleSpecs = isExpanded ? allSpecs : allSpecs.slice(0, 5);

  return (
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
  );
}
