import { createBrowserRouter } from "react-router-dom";
import QuestionsPage from "../../pages/QuestionsPage/QuestionsPage";
import QuestionDetailsPage from "../../pages/QuestionDetailsPage/QuestionDetailsPage";
import NotFound from "../../pages/NotFound/NotFound";
import { Layout } from "../layouts/Layout";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <QuestionsPage />,
      },
      {
        path: "questions/:id",
        element: <QuestionDetailsPage />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);


export default router