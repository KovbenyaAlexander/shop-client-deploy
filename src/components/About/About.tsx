import React from "react";
import Chef from "../SVG/ChefSVG";
import Flash from "../SVG/FlashSVG";
import Onion from "../SVG/OnionSVG";
import "./style.scss";

const About = (): JSX.Element => (
  <section className="about">
    <div className="wrapper">
      <div className="about__container">
        <div className="about-text">
          <h2>наше кафе</h2>
          <p>
            Мы расположены в одном из самых живописных мест города — на берегу
            реки, это ваш оазис в черте города, куда можно сбежать от шумного и
            пыльного мегаполиса. Мы, действительно уникальные, ведь все
            продумано до мелочей: проект построен из дикого закарпатского сруба,
            камин в основном зале ресторана и панорамные окна с видом на реку,
            уютные беседки на берегу реки и лучшая видовая террасса, шатер с
            посадкой на 200 человек, сказочный детский домик и бассейн.
          </p>

          <button className="about__btn" type="button">
            {" "}
            посмотреть меню
          </button>
        </div>

        <div className="about-cards">
          <div className="about-cards__card">
            <Onion />
            <p>Свежайшие продукты</p>
          </div>
          <div className="about-cards__card">
            <Flash />
            <p>Быстрая доставка</p>
          </div>
          <div className="about-cards__card">
            <Chef />
            <p>Лучшие повара</p>
          </div>
          <div className="about-cards__card">
            <Onion />
            <p>Свежайшие продукты</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
