import { Link } from "react-router-dom";
import "./Header.css";

export function Header() {
  return (
    <header className="yeahub-header">
      <div className="yeahub-header__left">
        <div className="yeahub-header__logo">Yeahub</div>
        <nav className="yeahub-header__nav">
          <Link to="/">База вопросов</Link>
        </nav>
      </div>
      <div className="yeahub-header__right">
        <button className="header__btn">Вход</button>
      </div>
    </header>
  );
}
