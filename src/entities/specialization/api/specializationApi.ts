import { baseApi } from "@/shared/api/api";
import type { SpecializationsResponse } from "../model/types"; 


export const specializationApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getSpecializations: build.query<SpecializationsResponse, void>({
      query: () => "/specializations",
    }),
  }),
});

export const { useGetSpecializationsQuery } = specializationApi;
