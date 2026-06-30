import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const QuestionsPage = lazy(() => import("@/pages/QuestionsPage/QuestionsPage"));
const QuestionDetailsPage = lazy(
  () => import("@/pages/QuestionDetailsPage/QuestionDetailsPage"),
);
const NotFound = lazy(() => import("@/pages/NotFound/NotFound"));
import { Layout } from "../layouts/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<div>Я ленивая загрузка СПИСКАААААААА 🔎...</div>}>
            <QuestionsPage />
          </Suspense>
        ),
      },
      {
        path: "questions/:id",
        element: (
          <Suspense fallback={<div>Загрузка вопроса 🤔...</div>}>
            <QuestionDetailsPage />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "*",
    element: (
      <Suspense fallback={<div>Страница не найдена🤷‍♀️...</div>}>
        <NotFound />
      </Suspense>
    ),
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
