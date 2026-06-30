import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { Question } from "../../model/types";
import { marked } from "marked"; //чтение Markdown файлов
import "./QuestionCard.css";

interface QuestionCardProps {
  question: Question;
}

export function QuestionCard({ question }: QuestionCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  function getCleanHtml(text: string): string {
    if (!text) return "";

    if (text.includes("#") || text.includes("```")) {
      return marked.parse(text) as string; //если Markdown парсим в HTML
    }

    return text;
  }

  return (
    <div className="question-card">
      <div className="question-card__header" onClick={() => setIsOpen(!isOpen)}>
        <span className="question-card__title">{question.title}</span>
        <button className="question-card__arrow">{isOpen ? "▲" : "▼"}</button>
      </div>
      {isOpen && (
        <div className="question-card__content">
          <div className="question-card__meta">
             <div className="question-card__meta-info">
            <span className="question-card__meta-item">
              Рейтинг: {question.rate}
            </span>
            <span className="question-card__meta-item">
              Сложность: {question.complexity}
            </span>
            </div>
            <button
              className="question-card__more-btn"
              onClick={() => navigate(`/questions/${question.id}`)}
            >
              Подробнее
            </button>
          </div>
          <p className="question-card__description">{question.description} </p>

          <div
            className="question-card__answer"
            dangerouslySetInnerHTML={{
              __html: getCleanHtml(question.shortAnswer),
            }}
          ></div>
        </div>
      )}
    </div>
  );
}
