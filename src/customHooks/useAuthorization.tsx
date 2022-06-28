import { useEffect } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import getUserByEmail from "../store/thunk/getUserByEmail";
import { useDispatch, useSelector } from "react-redux";

function useAuthorization() {
  const token = localStorage.getItem("token");
  const email = localStorage.getItem("email");
  const dispatch = useDispatch();

  useEffect(() => {
    if (!token || !email) {
      localStorage.clear();
    } else {
      dispatch(getUserByEmail(email, token));
    }
  }, []);

  return null;
}

export default useAuthorization;
