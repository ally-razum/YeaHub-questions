import { useSearchParams } from "react-router-dom";
import "./FilterByCategory.css";

const specializationOptions = [
  { id: 1, label: "React" },
  { id: 2, label: "CSS" },
  { id: 3, label: "Figma" },
  { id: 4, label: "HTML" },
];

export function FilterByCategory() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentSpecialization = searchParams.get("specializationId") || "";

  function handleSpecializationChange(id: number) {
    searchParams.set("page", "1");

    if (String(id) === currentSpecialization) {
      searchParams.delete("specializationId");
    } else {
      searchParams.set("specializationId", String(id));
    }
    setSearchParams(searchParams);
  }

  return (
    <div className="category-filters">
      {specializationOptions.map((element) => {
        const isActive = currentSpecialization === String(element.id);

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
