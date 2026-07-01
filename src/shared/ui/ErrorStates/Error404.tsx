import "./ErrorStates.css";

export function Error404({ onBackClick }: { onBackClick: () => void }) {
  return (
    <div className="error-state-container error-state-container--404">
      <span className="error-state-container__emoji">🕵️‍♂️</span>
      <h2 className="error-state-container__title--404">
        Ошибка 404: Вопрос ушёл на фронтенд-конференцию!
      </h2>
      <p className="error-state-container__text--404">
        Мы обыскали всю базу данных Никитоса, но такого ID там нет. Возможно,
        этот вопрос ещё не написали или вы случайно промахнулись по клавиатуре.
      </p>
      <button className="error-state-container__btn" onClick={onBackClick}>
        Вернуться на главную, пока никто не заметил
      </button>
    </div>
  );
}
