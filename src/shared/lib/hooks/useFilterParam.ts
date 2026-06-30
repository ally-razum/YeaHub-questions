import { useSearchParams } from "react-router-dom";

export function useFilterParam(paramName: string) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentValue = searchParams.get(paramName) || "";

  function toggleParam(id: number) {
    searchParams.set("page", "1"); 

    if (String(id) === currentValue) {
      searchParams.delete(paramName);
    } else {
      searchParams.set(paramName, String(id));
    }

    setSearchParams(searchParams);
  }
  return {
    currentValue,
    toggleParam,
  };
}
