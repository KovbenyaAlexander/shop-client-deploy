import AuthService from "../../services/AuthService";
import { setUser, setLoading } from "../actions";
import { toast } from "react-toastify";

const registration = (email, password, handleClose) => {
  return async (dispatch, getState) => {
    try {
      dispatch(setLoading(true));
      const localCart = getState().cartLocal;
      const response = await AuthService.registration(
        email,
        password,
        localCart
      );

      localStorage.setItem("token", response.data.accessToken);
      localStorage.setItem("email", response.data.email);
      dispatch(setUser(response.data));

      toast("Registration successful");
    } catch (e) {
      if (e?.response?.data?.message) {
        toast(e?.response?.data?.message);
      } else {
        toast(`Server error`);
      }
    } finally {
      handleClose();
      dispatch(setLoading(false));
    }
  };
};

export default registration;
