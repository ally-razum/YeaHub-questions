import { useState } from "react";
import type { Question } from "../../model/types"; 
import "./QuestionCard.css";

interface QuestionCardProps {
  question: Question;
}

export function QuestionCard({ question }: QuestionCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="question-card">
      <div className="question-card__header" onClick={() => setIsOpen(!isOpen)}>
        <span className="question-card__title">{question.title}</span>
        <button className="question-card__arrow">{isOpen ? "▲" : "▼"}</button>
      </div>
      {isOpen && (
        <div className="question-card__content">
          <p className="question-card__description">{question.description}</p>
          <div className="question-card__answer">{question.longAnswer}</div>
        </div>
      )}
    </div>
  );
}
