import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { faMinus, faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IFoodCard, IStore } from "../../types";
import {
  incGoodsLocal,
  decGoodsLocal,
  removeGoodsFromCartLocal,
} from "../../store/actions";
import incGoods from "../../store/thunk/incGoods";
import decGoods from "../../store/thunk/decGoods";
import removeGoodsFromCart from "../../store/thunk/removeGoodsFromCart";
import "./style.scss";

const CartList = (): JSX.Element => {
  const foodCards = useSelector((state: IStore) => state.foodCards);
  const allCards = Object.values(foodCards).flat();
  const cardsInCart = allCards.filter((card: IFoodCard) => card.inCart);
  const email = useSelector((state: IStore) => state.user.email);

  const dispatch = useDispatch();

  const incFoodHandler = (id: string) => {
    if (email) {
      dispatch(incGoods(id));
    } else {
      dispatch(incGoodsLocal(id));
    }
  };

  const decFoodHandler = (id: string) => {
    if (email) {
      dispatch(decGoods(id));
    } else {
      dispatch(decGoodsLocal(id));
    }
  };

  const deleteFoodHandler = (id: string) => {
    if (email) {
      dispatch(removeGoodsFromCart(id));
    } else {
      dispatch(removeGoodsFromCartLocal(id));
    }
  };

  return (
    <ul className="cart-list">
      {cardsInCart.length ? (
        <>
          {cardsInCart.map((item: IFoodCard) => (
            <li key={item.id} className="cart-list-item">
              <img className="cart-list-item__img" src={item.image} alt="img" />
              <div className="cart-list-item__description">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </div>
              <div className="cart-list-item__controls">
                <div>
                  <button
                    type="button"
                    disabled={item.numberOfPurchase < 1}
                    onClick={() => decFoodHandler(item.id)}
                  >
                    <FontAwesomeIcon icon={faMinus} />
                  </button>
                  <span className="cart-list-item__price">
                    {item.numberOfPurchase}
                  </span>
                  <button type="button" onClick={() => incFoodHandler(item.id)}>
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                </div>
                <span>{item.price * item.numberOfPurchase}</span>
                <button
                  type="button"
                  onClick={() => deleteFoodHandler(item.id)}
                >
                  <FontAwesomeIcon icon={faXmark} />
                </button>
              </div>
            </li>
          ))}
        </>
      ) : (
        <p className="cart-list__empty-msg">Корзина пуста</p>
      )}
    </ul>
  );
};

export default CartList;
