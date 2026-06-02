import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom"; 
import { useDebounce } from "../../../shared/lib/useDebounce";
import "./SearchQuestions.css";

export function SearchQuestions() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [inputValue, setInputValue] = useState(searchParams.get("title") || "");

  const debouncedSearch = useDebounce(inputValue, 500);

  useEffect(() => {
    if (debouncedSearch) {
      searchParams.set("title", debouncedSearch);
    } else {
      searchParams.delete("title");
    }

    searchParams.set("page", "1");
    setSearchParams(searchParams);
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