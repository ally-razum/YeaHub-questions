import { useGetQuestionsQuery } from "../../entities/question/api/questionApi";
import { QuestionCard } from "../../entities/question/ui/QuestionCard/QuestionCard";
import { SearchQuestions } from "../../features/search-questions";
import {useSearchParams} from 'react-router-dom'

import "./QuestionsPage.css";
import { QuestionPagination } from "../../features/question-pagination";
import { FilterByComplexity } from "../../features/filter-by-complexity/ui/FilterByComplexity";
import { FilterByRating } from "../../features/filter-by-rating";

export default function QuestionsPage() {
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title") || "";
  const page = Number(searchParams.get("page")) || 1;
  const complexity = searchParams.get("complexity") || "";
  const rate = searchParams.get("rate") || "";


  const { data, isLoading, isError } = useGetQuestionsQuery({
    title,
    page,
    complexity,
    rate,
  });

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
        <SearchQuestions />

        <h3 className="questions-page__sidebar-title">Уровень сложности</h3>
        <FilterByComplexity />

        <h3 className="questions-page__sidebar-title">Рейтинг</h3>
        <FilterByRating />

        <h3 className="questions-page__sidebar-title">Статус</h3>
      </aside>
    </div>
  );
}
