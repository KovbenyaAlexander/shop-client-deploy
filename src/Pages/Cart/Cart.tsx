import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import CartList from "../../components/CartList/CartList";
import Footer from "../../components/Footer/Footer";
import CartAddToOrder from "../../components/CartAddToOrder/CartAddToOrder";
import CartTotal from "../../components/CartTotal/CartTotal";

import "./style.scss";

const Cart = (): JSX.Element => (
  <>
    <div className="cart">
      <div className="wrapper">
        <div className="cart__header">
          <Link className="cart__link-to-main" to="./">
            <FontAwesomeIcon icon={faArrowLeft} /> к выбору блюда
          </Link>
          <h2>Корзина</h2>
        </div>

        <CartList />
        <CartAddToOrder />
        <CartTotal />
      </div>
    </div>
    <Footer />
  </>
);

export default Cart;
