import axios from "axios";
import { setGoods } from "../actions";

const removeGoodsFromCart = (goodsId) => {
  return async (dispatch, getState) => {
    const email = getState().user.email;
    const response = await axios.post(
      `${process.env.REACT_APP_SERVR_URL}/goods/remove`,
      {
        goodsId,
        email,
      }
    );
    dispatch(setGoods(response.data));
  };
};

export default removeGoodsFromCart;
