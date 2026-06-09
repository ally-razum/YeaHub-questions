import { useSearchParams } from "react-router-dom";
import "./FilterByCategory.css";

const skillsOptions = [
  { id: 1, label: "React" },
  { id: 2, label: "CSS" },
  { id: 3, label: "Figma" },
  { id: 4, label: "HTML" },
];

export function FilterByCategory() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentSkills = searchParams.get("skills") || "";

  function handleSpecializationChange(id: number) {
    searchParams.set("page", "1");

    if (String(id) === currentSkills) {
      searchParams.delete("skills");
    } else {
      searchParams.set("skills", String(id));
    }
    setSearchParams(searchParams);
  }

  return (
    <div className="category-filters">
      {skillsOptions.map((element) => {
        const isActive = currentSkills === String(element.id);

        return (
          <button
            key={element.id}
            onClick={() => handleSpecializationChange(element.id)}
            className={`category-btn ${isActive ? "category-btn--active" : ""}`}
          >
            {element.label}
          </button>
        );
      })}
    </div>
  );
}
