import "./ErrorStates.css";

export function Error500() {
  return (
    <div className="error-state-container error-state-container--500">
      <span className="error-state-container__emoji">💥</span>
      <h2 className="error-state-container__title--500">
        Ошибка 500: Никитос, у нас сервер упал!
      </h2>
      <p className="error-state-container__text--500">
        На бэкенде произошло что-то очень страшное. База данных ушла в глубокий
        нокаут. Мы уже выдали бэкендеру крепкий кофе, и он усердно чинит
        провода.
      </p>
      <p className="error-state-container__instruction">
        👉 Направление действий: выдохнуть, заварить чаёк и обновить страницу
        через пару минут.
      </p>
    </div>
  );
}
