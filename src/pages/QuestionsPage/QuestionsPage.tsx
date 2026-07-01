import { useGetQuestionsQuery } from "@/entities/question/api/questionApi";
import { QuestionCard } from "@/entities/question/ui/QuestionCard/QuestionCard";
import { SearchQuestions } from "@/features/search-questions";
import { useSearchParams } from "react-router-dom";

import "./QuestionsPage.css";
import { QuestionPagination } from "@/features/question-pagination";
import { FilterByComplexity } from "@/features/filter-by-complexity/ui/FilterByComplexity";
import { FilterByRating } from "@/features/filter-by-rating";
import { FilterByCategory } from "@/features/filter-by-category";
import { FilterBySpecialization } from "@/features/filter-by-specialisation/ui/FilterBySpecialization";

export default function QuestionsPage() {
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title") || "";
  const page = Number(searchParams.get("page")) || 1;
  const complexity = searchParams.get("complexity") || "";
  const rate = searchParams.get("rate") || "";
  const skills = searchParams.get("skills") || "";
  const specializationId = searchParams.get("specializationId") || "";


  const { data, isLoading, isError } = useGetQuestionsQuery({
    title,
    page,
    complexity,
    rate,
    skills,
    specializationId,
  });

  const totalCount = data?.total || 0;
  const backendLimit = data?.limit || 10;
  const totalPages = Math.ceil(totalCount / backendLimit);

  return (
    <div className="questions-page">
      <section className="questions-page__main-container">
        <h1 className="questions-page__title">Вопросы </h1>
        <div className="questions-page__main">
          {isLoading && <div>Загрузка вопросов с сервера...</div>}
          {isError && (
            <div className="questions-page__error-state">
              ⚠️ Ошибка загрузки данных. Проверьте соединение с сервером!
            </div>
          )}
          {!isError && data?.data.length === 0 && (
            <div className="questions-page__empty-state">
              🔍 По вашему запросу ничего не найдено. Попробуйте изменить
              параметры фильтров или поиска!
            </div>
          )}
          {!isError &&
            data?.data.map((item) => (
              <QuestionCard key={item.id} question={item} />
            ))}
        </div>
        <QuestionPagination totalPages={totalPages} />
      </section>
      {!isError && (
        <aside className="questions-page__sidebar">
          <SearchQuestions />
          <h3 className="questions-page__sidebar-title">Специализация</h3>
          <FilterBySpecialization />
          <h3 className="questions-page__sidebar-title">Навыки</h3>
          <FilterByCategory />
          <h3 className="questions-page__sidebar-title">Уровень сложности</h3>
          <FilterByComplexity />
          <h3 className="questions-page__sidebar-title">Рейтинг</h3>
          <FilterByRating />
        </aside>
      )}
    </div>
  );
}
