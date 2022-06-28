import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IFoodCard, IStore } from "../../types";
import { incGoodsLocal } from "../../store/actions";
import incGoods from "../../store/thunk/incGoods";
import "./style.scss";

const CartAddToOrder = (): JSX.Element => {
  const foodCards = useSelector((state: IStore) => state.foodCards);
  const allCards = Object.values(foodCards).flat();
  const email = useSelector((state: IStore) => state.user.email);
  const dispatch = useDispatch();

  const incFoodHandler = (id: string) => {
    if (email) {
      dispatch(incGoods(id));
    } else {
      dispatch(incGoodsLocal(id));
    }
  };

  return (
    <div className="cart__add-goods">
      <h2>добавить к заказу</h2>
      <div className="cart__add-goods-wrapper">
        {allCards
          .filter((item: IFoodCard) => item.numberOfPurchase === 0)
          .map((item: IFoodCard, id: number) => {
            if (item.numberOfPurchase === 0 && id < 4) {
              return (
                <div key={item.id} className="cart__add-goods-item">
                  <img
                    className="cart__add-goods-item-img"
                    src={item.image}
                    alt="img"
                  />
                  <p>{item.name}</p>
                  <div className="cart__add-goods-item-add">
                    <span className="cart__add-goods-item-text">Добавить </span>
                    <button
                      type="button"
                      onClick={() => incFoodHandler(item.id)}
                    >
                      <FontAwesomeIcon icon={faPlus} />
                    </button>
                  </div>

                  <p>
                    {item.price}
                    &#x20bd;
                  </p>
                </div>
              );
            }
            return null;
          })}
      </div>
    </div>
  );
};

export default CartAddToOrder;
