import axios from "axios";
import { setUser } from "../actions";

const getUserByEmail = (email, token) => {
  return async (dispatch, getState) => {
    const response = await axios.post(
      `${process.env.REACT_APP_SERVR_URL}/getUser`,
      {
        email,
        token,
      }
    );
    dispatch(setUser(response.data));
  };
};

export default getUserByEmail;
