import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./style.scss";

const Contacts = (): JSX.Element => (
  <section className="contacts">
    <div className="wrapper">
      <div className="container">
        <h2>Контакты</h2>

        <hr className="contacts__hr" />

        <div className="contacts__adress">
          <FontAwesomeIcon icon={faLocationDot} className="contacts__icon" />
          <div>
            <p>Наш адрес:</p>
            <p>г. Киев, ул. Космонавтов, д. 7, офис 5</p>
          </div>
        </div>

        <div className="contacts__email">
          <FontAwesomeIcon icon={faEnvelope} className="contacts__icon" />
          <div>
            <p>Наша почта</p>
            <p>aaaa@gmail.com</p>
          </div>
        </div>

        <hr className="contacts__hr" />

        <div className="contacts__phone-container">
          <button className="contacts__btn" type="button">
            забронировать стол
          </button>
          <div>
            <p className="contacts__phone">+7 (999) 999-99-99</p>
            <p>Звоните или оставляйте заявку</p>
          </div>
        </div>

        <hr className="contacts__hr" />

        <div className="contacts__social">
          <span>Мы в соц сетях:</span>
          {/* <FontAwesomeIcon data-isbtn="true" icon={faFacebook} className="contacts__icon" />
        <FontAwesomeIcon data-isbtn="true" icon={faInstagram} className="contacts__icon" />
        <FontAwesomeIcon data-isbtn="true" icon={faTelegram} className="contacts__icon" />
        <FontAwesomeIcon data-isbtn="true" icon={faTwitter} className="contacts__icon" /> */}
        </div>
      </div>
    </div>
  </section>
);

export default Contacts;
