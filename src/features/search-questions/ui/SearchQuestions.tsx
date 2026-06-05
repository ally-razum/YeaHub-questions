import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useDebounce } from "../../../shared/lib/useDebounce";
import "./SearchQuestions.css";

export function SearchQuestions() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [inputValue, setInputValue] = useState(searchParams.get("title") || "");

  const debouncedSearch = useDebounce(inputValue, 500);

  useEffect(() => {
    const currentTitleInUrl = searchParams.get("title") || "";
    //если в юрл текст УЖЕ равен введенному в поиске - выходим
    if (currentTitleInUrl === debouncedSearch) {
      return;
    }

    // если не равен - значит мы в дебаунсе
    const newParams = new URLSearchParams(searchParams);

    if (debouncedSearch) {
      newParams.set("title", debouncedSearch);
    } else {
      newParams.delete("title");
    }

    // сброс на 1 ТОЛЬКО при реальном изменении  запроса !!!!!!!
    newParams.set("page", "1");
    setSearchParams(newParams);

  }, [debouncedSearch, searchParams, setSearchParams]);
  return (
    <input
      type="text"
      placeholder="Введите запрос..."
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      className="search-input"
    />
  );
}
