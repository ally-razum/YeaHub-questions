import { useGetQuestionByIdQuery } from "../../entities/question/api/questionApi";
import { useParams } from "react-router-dom";

export default function QuestionDetailsPage() {
  const {id} = useParams()
  const {data} = useGetQuestionByIdQuery(Number(id));
  console.log(data)

  return (
    <div>
      <h2>{data?.title}</h2>
      Короткий ответ:
      <p>{data?.shortAnswer}</p>
      Развернутый ответ:
      <p>{data?.longAnswer}</p>
    </div>
  );
}
