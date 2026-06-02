import { useGetQuestionsQuery } from "../../entities/question/api/questionApi";
import { QuestionCard } from "../../entities/question/ui/QuestionCard/QuestionCard";
import { SearchQuestions } from "../../features/search-questions";
import {useSearchParams} from 'react-router-dom'

import "./QuestionsPage.css";
import { QuestionPagination } from "../../features/question-pagination";

export default function QuestionsPage() {
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title") || "";
  const page = Number(searchParams.get("page")) || 1;

  const { data, isLoading, isError } = useGetQuestionsQuery({ title, page });

  if (isLoading) return <div>Загрузка вопросов с сервера...</div>;
  if (isError) return <div>Ошибка загрузки данных. Проверь сеть!</div>;

  return (
    <div className="questions-page">
      <section className="questions-page__main-container">
        <h1 className="questions-page__title">Вопросы React, JavaScript</h1>
        <div className="questions-page__main">
          {data?.data.map((item) => (
            <QuestionCard key={item.id} question={item} />
          ))}
        </div>
        <QuestionPagination />
      </section>
      <aside className="questions-page__sidebar">
        <div className="questions-page__filters-placeholder">
          <SearchQuestions />
        </div>
      </aside>
    </div>
  );
}
