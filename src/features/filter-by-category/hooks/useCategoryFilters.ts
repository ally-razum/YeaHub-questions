import { useSearchParams } from "react-router-dom";
import { useGetSkillsQuery } from "@/entities/skills/api/skillApi";
import { useFilterParam } from "@/shared/lib/hooks/useFilterParam";

export function useCategoryFilter() {
  const [searchParams] = useSearchParams();
  const currentSpecId = searchParams.get("specializationId") || "";
  const { currentValue: currentSkillsID, toggleParam: handleSkillsChange } =
    useFilterParam("skills");

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
