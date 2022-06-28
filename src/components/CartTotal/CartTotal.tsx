import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { IFoodCard, IStore } from "../../types";
import "./style.scss";

const CartTotal = (): JSX.Element => {
  const foodCards = useSelector((state: IStore) => state.foodCards);
  const allCards = Object.values(foodCards).flat();

  const finalCost = allCards.reduce(
    (acc: number, item: IFoodCard) => acc + item.price * item.numberOfPurchase,
    0
  );

  return (
    <div className="cart-total">
      <div>
        <span>Итого: </span>
        <span>{finalCost}</span>
        {finalCost < 1499 ? (
          <p className="cart-total__error-msg">
            Минимальная сума заказа 1500&#x20bd;
          </p>
        ) : null}
      </div>

      {finalCost < 1499 ? (
        <button disabled type="button" className="cart-total__btn">
          Оформить заказ
        </button>
      ) : (
        <NavLink to="./order">
          <button
            className="cart-total__btn cart-total__btn-active"
            type="button"
          >
            Оформить заказ
          </button>
        </NavLink>
      )}
    </div>
  );
};

export default CartTotal;
