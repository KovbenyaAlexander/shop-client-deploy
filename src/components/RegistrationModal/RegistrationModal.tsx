import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import registration from "../../store/thunk/registration";
import login from "../../store/thunk/login";
import { useSelector, useDispatch } from "react-redux";
import { IStore } from "../../types";
import validateEmail from "../../services/validateEmail";

import "react-toastify/dist/ReactToastify.css";
import "./style.scss";

const ModalWindow = ({ setIsModalOpen, isModalOpen }: any): JSX.Element => {
  const dispatch = useDispatch();
  const handleClose = () => setIsModalOpen(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isRegistration, setIsRegistration] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const loginHandler = () => {
    dispatch(login(email, password, handleClose));
  };

  const registrationHandler = () => {
    dispatch(registration(email, password, handleClose));
  };

  // useEffect(() => {
  //   if (accesToken) {
  //     handleClose();
  //   }
  // });

  const onSubmithandler = () => {
    if (!validateEmail(email)) {
      setEmailError(true);
    }
    if (password.length < 6) {
      setPasswordError(true);
    }

    if (validateEmail(email) && password.length >= 6) {
      if (isRegistration) {
        registrationHandler();
      } else {
        loginHandler();
      }
    }
  };

  useEffect(() => {
    if (passwordError && password.length > 5) {
      setPasswordError(false);
    }
  }, [password, passwordError]);

  useEffect(() => {
    if (emailError && validateEmail(email)) {
      setEmailError(false);
    }
  }, [email, emailError]);

  return (
    <>
      <Modal
        open={isModalOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="modal">
          <div className="modal__title">
            <button onClick={() => setIsRegistration(false)}>Вход</button>
            <button onClick={() => setIsRegistration(true)}>Регистрация</button>
          </div>

          {isRegistration ? (
            <form
              onSubmit={onSubmithandler}
              className="modal__registration"
              noValidate
            >
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder="Email"
                type="email"
                className={emailError ? "modal__input-error" : ""}
              ></input>
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                placeholder="Password"
                type="password"
                className={passwordError ? "modal__input-error" : ""}
              ></input>
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                placeholder="Name"
                type="text"
              ></input>

              <button className="modal__submit-btn" type="submit">
                Регистрация
              </button>
            </form>
          ) : (
            <form
              onSubmit={onSubmithandler}
              className="modal__login"
              noValidate
            >
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder="Email"
                type="email"
                className={emailError ? "modal__input-error" : ""}
              ></input>
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                placeholder="Password"
                type="password"
                className={passwordError ? "modal__input-error" : ""}
              ></input>
              <button className="modal__submit-btn" type="submit">
                Вход
              </button>
            </form>
          )}
        </Box>
      </Modal>
    </>
  );
};

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  p: 4,
  background: "linear-gradient(90deg, #353333 0%, #383636 100%)",
};

export default ModalWindow;
