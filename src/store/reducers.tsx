import { Actions, IStore, IFoodCard, IUser, IGoods } from "../types";
import { initialStore } from "./initialStore";

export type AllActions =
  | { type: typeof Actions.ADDGOODSINCART; payload: string }
  | { type: typeof Actions.DECREASE_GOODSINCART; payload: string }
  | { type: typeof Actions.DELETE_FOOD_FROM_CART; payload: string }
  | { type: typeof Actions.TOGGLE_BURGER }
  | { type: typeof Actions.CLOSE_BURGER }
  | { type: typeof Actions.LOGOUT }
  | { type: typeof Actions.SET_USER; payload: IUser }
  | { type: typeof Actions.SET_GOODS; payload: IGoods }
  | { type: typeof Actions.INC_GOODS_LOCAL; payload: string }
  | { type: typeof Actions.DEC_GOODS_LOCAL; payload: string }
  | { type: typeof Actions.DELETE_FOOD_FROM_CART_LOCAL; payload: string }
  | { type: typeof Actions.SET_LOADING; payload: boolean };

export default function reducer(
  state: IStore = initialStore,
  action: AllActions
): IStore {
  switch (action.type) {
    case Actions.TOGGLE_BURGER: {
      return {
        ...state,
        isBurgerOpen: !state.isBurgerOpen,
      };
    }

    case Actions.CLOSE_BURGER: {
      return {
        ...state,
        isBurgerOpen: false,
      };
    }

    case Actions.SET_USER: {
      return {
        ...state,
        user: action.payload,
        orderSize: Object.values(action.payload.goods).reduce(
          (sum, item) => sum + +item,
          0
        ),
        foodCards: {
          cold: state.foodCards.cold.map((item: IFoodCard) => {
            if (Object.keys(action.payload.goods).includes(item.id)) {
              return {
                ...item,
                inCart: true,
                numberOfPurchase: Number(action.payload.goods[item.id]),
              };
            }
            return item;
          }),
          hot: state.foodCards.hot.map((item: IFoodCard) => {
            if (Object.keys(action.payload.goods).includes(item.id)) {
              return {
                ...item,
                inCart: true,
                numberOfPurchase: Number(action.payload.goods[item.id]),
              };
            }
            return item;
          }),
          meet: state.foodCards.meet.map((item: IFoodCard) => {
            if (Object.keys(action.payload.goods).includes(item.id)) {
              return {
                ...item,
                inCart: true,
                numberOfPurchase: Number(action.payload.goods[item.id]),
              };
            }
            return item;
          }),
        },
      };
    }

    case Actions.LOGOUT: {
      return {
        ...initialStore,
      };
    }

    case Actions.SET_GOODS: {
      return {
        ...state,

        user: {
          ...state.user,
          goods: action.payload,
        },
        orderSize: Object.values(action.payload).reduce(
          (sum, item) => sum + +item,
          0
        ),
        foodCards: {
          cold: state.foodCards.cold.map((item: IFoodCard) => {
            if (Object.keys(action.payload).includes(item.id)) {
              return {
                ...item,
                inCart: true,
                numberOfPurchase: Number(action.payload[item.id]),
              };
            }
            return {
              ...item,
              inCart: false,
              numberOfPurchase: 0,
            };
          }),
          hot: state.foodCards.hot.map((item: IFoodCard) => {
            if (Object.keys(action.payload).includes(item.id)) {
              return {
                ...item,
                inCart: true,
                numberOfPurchase: Number(action.payload[item.id]),
              };
            }
            return {
              ...item,
              inCart: false,
              numberOfPurchase: 0,
            };
          }),
          meet: state.foodCards.meet.map((item: IFoodCard) => {
            if (Object.keys(action.payload).includes(item.id)) {
              return {
                ...item,
                inCart: true,
                numberOfPurchase: Number(action.payload[item.id]),
              };
            }
            return {
              ...item,
              inCart: false,
              numberOfPurchase: 0,
            };
          }),
        },
      };
    }

    case Actions.INC_GOODS_LOCAL: {
      const cartLocal = { ...state.cartLocal };
      if (cartLocal.hasOwnProperty(action.payload)) {
        cartLocal[action.payload]++;
      } else {
        cartLocal[action.payload] = 1;
      }

      return {
        ...state,
        cartLocal,
        orderSize: state.orderSize + 1,
        foodCards: {
          cold: state.foodCards.cold.map((item: IFoodCard) => {
            if (item.id === action.payload) {
              return {
                ...item,
                inCart: true,
                numberOfPurchase: item.numberOfPurchase + 1,
              };
            }
            return item;
          }),
          hot: state.foodCards.hot.map((item: IFoodCard) => {
            if (item.id === action.payload) {
              return {
                ...item,
                inCart: true,
                numberOfPurchase: item.numberOfPurchase + 1,
              };
            }
            return item;
          }),
          meet: state.foodCards.meet.map((item: IFoodCard) => {
            if (item.id === action.payload) {
              return {
                ...item,
                inCart: true,
                numberOfPurchase: item.numberOfPurchase + 1,
              };
            }
            return item;
          }),
        },
      };
    }

    case Actions.DEC_GOODS_LOCAL: {
      const cartLocal = { ...state.cartLocal };
      if (cartLocal[action.payload] > 0) {
        cartLocal[action.payload]--;
      }

      return {
        ...state,
        orderSize: state.orderSize - 1,
        cartLocal,
        foodCards: {
          cold: state.foodCards.cold.map((item: IFoodCard) => {
            if (item.id === action.payload) {
              return {
                ...item,
                numberOfPurchase: item.numberOfPurchase - 1,
              };
            }
            return item;
          }),
          hot: state.foodCards.hot.map((item: IFoodCard) => {
            if (item.id === action.payload) {
              return {
                ...item,
                numberOfPurchase: item.numberOfPurchase - 1,
              };
            }
            return item;
          }),
          meet: state.foodCards.meet.map((item: IFoodCard) => {
            if (item.id === action.payload) {
              return {
                ...item,
                numberOfPurchase: item.numberOfPurchase - 1,
              };
            }
            return item;
          }),
        },
      };
    }

    case Actions.DELETE_FOOD_FROM_CART_LOCAL: {
      let prevCountOfPurchase = 0;

      const cartLocal = { ...state.cartLocal };
      delete cartLocal[action.payload];

      const newState = {
        ...state,
        cartLocal,
        foodCards: {
          cold: state.foodCards.cold.map((item: IFoodCard) => {
            if (item.id === action.payload) {
              prevCountOfPurchase = item.numberOfPurchase;
              return {
                ...item,
                inCart: false,
                numberOfPurchase: 0,
              };
            }
            return item;
          }),
          hot: state.foodCards.hot.map((item: IFoodCard) => {
            if (item.id === action.payload) {
              prevCountOfPurchase = item.numberOfPurchase;
              return {
                ...item,
                inCart: false,
                numberOfPurchase: 0,
              };
            }
            return item;
          }),
          meet: state.foodCards.meet.map((item: IFoodCard) => {
            if (item.id === action.payload) {
              prevCountOfPurchase = item.numberOfPurchase;
              return {
                ...item,
                inCart: false,
                numberOfPurchase: 0,
              };
            }
            return item;
          }),
        },
      };
      newState.orderSize -= prevCountOfPurchase;
      return newState;
    }

    case Actions.SET_LOADING: {
      return {
        ...state,
        isLoading: action.payload,
      };
    }

    default:
      return state;
  }
}
