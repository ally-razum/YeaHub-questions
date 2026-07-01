import { Skeleton } from "../Skeleton/Skeleton";
import "./QuestionsSkeleton.css";

export function QuestionsSkeleton() {
  return (
    <div className="questions-page">
      <section className="questions-page__main-container">
        <h1 className="questions-page__title">Вопросы</h1>
        <div className="questions-page__main">
          {Array.from({ length: 10 }).map((_, index) => (
            <Skeleton key={index} height="50px" />
          ))}
        </div>
      </section>
      <aside className="questions-page__sidebar">
        <Skeleton height="600px" />
      </aside>
    </div>
  );
}
