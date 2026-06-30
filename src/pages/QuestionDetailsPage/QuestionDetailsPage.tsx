import { useGetQuestionByIdQuery } from "@/entities/question/api/questionApi";
import { useParams, useNavigate } from "react-router-dom";
import { getCleanHtml } from "@/shared/lib/helpers/getCleanHtml";
import "./QuestionDetailsPage.css";

export default function QuestionDetailsPage() {
  const { id } = useParams();
  const { data } = useGetQuestionByIdQuery(Number(id));
  const navigate = useNavigate();


  return (
    <div className="question-details-container">
      <h2>{data?.title}</h2>

      <button onClick={() => navigate("/")}>Назад</button>
      <h3>Короткий ответ:</h3>
      <div
        className="question-card__answer"
        dangerouslySetInnerHTML={{
          __html: getCleanHtml(data?.shortAnswer),
        }}
      ></div>
      <h3>Развернутый ответ:</h3>
      <div
        className="question-card__answer"
        dangerouslySetInnerHTML={{
          __html: getCleanHtml(data?.longAnswer),
        }}
      ></div>
    </div>
  );
}
