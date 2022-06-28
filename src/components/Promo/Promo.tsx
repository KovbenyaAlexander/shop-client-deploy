import React from "react";
import "./style.scss";

const Promo = (): JSX.Element => (
  <section className="promo">
    <div className="wrapper">
      <div className="promo-text">
        <p className="unselectable">
          Доставка вкуснейших
          <br />
          блюд за 60 минут
        </p>
      </div>
    </div>
  </section>
);

export default Promo;
