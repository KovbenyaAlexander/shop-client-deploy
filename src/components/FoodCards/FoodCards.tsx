import React from "react";
import { useSelector } from "react-redux";
import "./style.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { IFoodCard, IStore } from "../../types";
import FoodCard from "../FoodCard/FoodCard";
import "swiper/css";

const FoodCards = (): JSX.Element => {
  const coldFood = useSelector((state: IStore) => state.foodCards.cold);
  const hotFood = useSelector((state: IStore) => state.foodCards.hot);
  const meetFod = useSelector((state: IStore) => state.foodCards.meet);

  const breakpoints = {
    319: {
      slidesPerView: 1,
      width: 300,
    },

    768: {
      slidesPerView: 3,
      width: 1050,
    },

    1440: {
      slidesPerView: 4.2,
      width: 1440,
    },
  };

  return (
    <section className="food">
      <div className="wrapper">
        <h3 className="unselectable">Холодные закуски</h3>
        <Swiper
          slidesOffsetBefore={20}
          spaceBetween={30}
          height={385}
          breakpoints={breakpoints}
          className="swiper-container"
        >
          {coldFood.map((item: IFoodCard) => (
            <SwiperSlide key={item.id}>
              <FoodCard cardInfo={item} />
            </SwiperSlide>
          ))}
        </Swiper>

        <hr />

        <h3 className="unselectable">Горячие закуски</h3>
        <Swiper
          slidesOffsetBefore={20}
          spaceBetween={30}
          height={385}
          breakpoints={breakpoints}
          className="swiper-container"
        >
          {hotFood.map((item: IFoodCard) => (
            <SwiperSlide key={item.id}>
              <FoodCard cardInfo={item} />
            </SwiperSlide>
          ))}
        </Swiper>

        <hr />

        <h3 className="unselectable">Мясные блюда</h3>
        <Swiper
          slidesOffsetBefore={20}
          spaceBetween={30}
          height={385}
          breakpoints={breakpoints}
          className="swiper-container"
        >
          {meetFod.map((item: IFoodCard) => (
            <SwiperSlide key={item.id}>
              <FoodCard cardInfo={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default FoodCards;
