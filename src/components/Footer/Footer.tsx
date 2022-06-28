import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { IStore } from "../../types";
import "./style.scss";

const Footer = (): JSX.Element => {
  const isBurgerOpen = useSelector((state: IStore) => state.isBurgerOpen);

  const scrollToTopHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="wrapper">
        <div className="btn-container">
          <button
            type="button"
            onClick={scrollToTopHandler}
            className="btn-container__item"
          >
            <FontAwesomeIcon icon={faAngleUp} className="btn-container__icon" />
          </button>
        </div>

        <div className="footer__container">
          <h1>LOGOS</h1>
          <p>ООО СК «АПШЕРОН»</p>
          <p>Все права защищены. 2010-2020</p>

          <p className="footer__link">
            <Link to="/" className="footer__link">
              Пользовательское соглашение
            </Link>
          </p>
          <p className="footer__link">
            <Link to="/" className="footer__link">
              Карта сайта
            </Link>
          </p>
          <p className="footer__link">
            <Link to="/" className="footer__link">
              Политика конфиденциальности
            </Link>
          </p>
        </div>

        <nav
          className={
            isBurgerOpen ? "navigation navigation-burger" : "navigation"
          }
        >
          <ul className="navigation__list">
            <li className="navigation__item">
              <Link to="/" className="navigation__link">
                О ресторане
              </Link>
            </li>
            <li className="navigation__item">
              <Link to="/" className="navigation__link">
                Условия доставки
              </Link>
            </li>
            <li className="navigation__item">
              <Link to="/" className="navigation__link">
                Возврат товара
              </Link>
            </li>
            <li className="navigation__item">
              <Link to="/" className="navigation__link">
                Акции
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
