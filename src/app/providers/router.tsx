import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const QuestionsPage = lazy(() => import("@/pages/QuestionsPage/QuestionsPage"));
const QuestionDetailsPage = lazy(
  () => import("@/pages/QuestionDetailsPage/QuestionDetailsPage"),
);
import { Layout } from "../layouts/Layout";
import { Error404 } from "@/shared/ui/ErrorStates/Error404";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: (
          <Suspense
            fallback={<div>Я ленивая загрузка СПИСКАААААААА 🔎...</div>}
          >
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
    element: (<Error404 onBackClick={() => window.location.href = "/"}/>),
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
