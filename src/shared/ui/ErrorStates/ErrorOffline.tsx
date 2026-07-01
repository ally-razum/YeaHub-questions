import "./ErrorStates.css";

export function ErrorOffline() {
  return (
    <div className="error-state-container error-state-container--offline">
      <span className="error-state-container__emoji">🔌</span>
      <h2 className="error-state-container__title--offline">
        Пропал интернет! Связь с космосом потеряна
      </h2>
      <p className="error-state-container__text--offline">
        Запрос разбился о суровую реальность отключенного роутера. Проверь
        кабель, попинай провайдера или просто подожди, пока Wi-Fi вернётся из
        астрала.
      </p>
    </div>
  );
}
