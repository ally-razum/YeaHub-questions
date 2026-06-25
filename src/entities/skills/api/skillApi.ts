import { baseApi } from "../../../shared/api/api.ts";
import type { SkillsResponse } from "../model/types";

export const skillApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getSkills: build.query<
      SkillsResponse,
      { specializationId?: number } | void
    >({
      query: (params) => ({
        url: "/skills",
        params: {
          specializationId: params?.specializationId || undefined,
        },
      }),
    }),
  }),
});

export const { useGetSkillsQuery } = skillApi;
