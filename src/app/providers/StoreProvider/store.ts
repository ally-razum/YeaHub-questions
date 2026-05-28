import { configureStore } from "@reduxjs/toolkit";
import { questionApi } from "../../../entities/question/api/questionApi";


export const store = configureStore({
  reducer: {
    [questionApi.reducerPath]: questionApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(questionApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
