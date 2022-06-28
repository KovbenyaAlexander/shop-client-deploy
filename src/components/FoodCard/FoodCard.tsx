import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";
import { IFoodCard } from "../../types";
import incGoods from "../../store/thunk/incGoods";
import decGoods from "../../store/thunk/decGoods";
import { incGoodsLocal, decGoodsLocal } from "../../store/actions";
import { IStore } from "../../types";
import "swiper/css";

const FoodCard = ({ cardInfo }: { cardInfo: IFoodCard }): JSX.Element => {
  const dispatch = useDispatch();
  const history = useHistory();
  const email = useSelector((state: IStore) => state.user.email);

  const addGoodsHandler = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    if (email) {
      dispatch(incGoods(cardInfo.id));
    } else {
      dispatch(incGoodsLocal(cardInfo.id));
    }
  };

  const decreaseGoodsHandler = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    if (email) {
      dispatch(decGoods(cardInfo.id));
    } else {
      dispatch(decGoodsLocal(cardInfo.id));
    }
  };

  const onCardClickHandler = (e: any) => {
    if (e.target.dataset.isbtn !== "true") {
      history.push(`/food/${cardInfo.id}`);
      window.scrollTo({
        top: 0,
      });
    }
  };

  return (
    <div className="card unselectable" onClick={onCardClickHandler}>
      {cardInfo.numberOfPurchase > 0 && (
        <div className="card__counterOfPurchase">
          {cardInfo.numberOfPurchase}
        </div>
      )}
      <img className="card__img" src={cardInfo.image} alt="food" />
      <div className="card__header">
        <span className="card__name">{cardInfo.name}</span>
        <p className="card__weight">Масса: {cardInfo.weight}</p>
      </div>

      <p className="card__description">{cardInfo.description}</p>

      {cardInfo.numberOfPurchase > 0 ? (
        <div className="card__addGoodsinCart">
          <button
            type="button"
            data-isbtn="true"
            className="btn-minus"
            onClick={decreaseGoodsHandler}
          >
            <FontAwesomeIcon data-isbtn="true" icon={faMinus} />
          </button>
          <p className="card__price">
            {cardInfo.numberOfPurchase * cardInfo.price}
            &#x20bd;
          </p>
          <button
            type="button"
            data-isbtn="true"
            className="btn-plus"
            onClick={addGoodsHandler}
          >
            <FontAwesomeIcon data-isbtn="true" icon={faPlus} />
          </button>
        </div>
      ) : (
        <div className="card__addGoodsinCart">
          <p className="card__price">
            {cardInfo.price}
            &#x20bd;
          </p>
          <button data-isbtn="true" type="button" onClick={addGoodsHandler}>
            В корзину{" "}
            <FontAwesomeIcon
              data-isbtn="true"
              icon={faCartPlus}
              className="button__icon"
            />
          </button>
        </div>
      )}
    </div>
  );
};

export default React.memo(FoodCard);
