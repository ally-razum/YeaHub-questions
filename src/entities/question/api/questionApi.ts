import { baseApi } from "../../../shared/api/api.ts";
import type { QuestionsResponse } from "../model/types"; 

export const questionApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getQuestions: build.query<QuestionsResponse, Record<string, unknown>>({
      query: ({ page, title, complexity, rate, specializationId, skills }) => ({
        url: `/questions/public-questions/`,
        params: {
          page,
          title,
          specializationId: specializationId || undefined,
          complexity: complexity || undefined,
          rate: rate || undefined,
          skills: skills || undefined,
          
        },
      }),
    }),
    getQuestionById: build.query({
      query: (id: number) => `/questions/public-questions/${id}`,
    }),
  }),
});

export const { useGetQuestionsQuery, useGetQuestionByIdQuery } = questionApi;
