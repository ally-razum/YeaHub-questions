import { useSearchParams } from "react-router-dom";
import { useGetSkillsQuery } from "../../../entities/skills/api/skillApi";

export function useCategoryFilter() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentSkillsID = searchParams.get("skills") || "";
  const currentSpecId = searchParams.get("specializationId") || "";

  const {
    data: skillsData,
    isLoading,
    isError,
  } = useGetSkillsQuery({
    specializationId: currentSpecId ? Number(currentSpecId) : undefined,
  });

  const allSkills = skillsData?.data || []; //полный список вообще всех скиллов
  const filteredSkills = currentSpecId
    ? allSkills.filter((skill) =>
        skill.specializations.some((spec) => String(spec.id) === currentSpecId),
      )
    : allSkills;

  function handleSkillsChange(id: number) {
    searchParams.set("page", "1");

    if (String(id) === currentSkillsID) {
      searchParams.delete("skills");
    } else {
      searchParams.set("skills", String(id));
    }
    setSearchParams(searchParams);
  }

  return {
    skillsData: skillsData
      ? { ...skillsData, data: filteredSkills }
      : undefined,
    isLoading,
    isError,
    currentSkillsID,
    handleSkillsChange,
  };
}
