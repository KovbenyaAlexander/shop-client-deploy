import ReactDOM from "react-dom";
import React from "react";
import { Provider } from "react-redux";
import { HashRouter as Router } from "react-router-dom";
import App from "./App";
import { store } from "./store/store";
import ScrollToTop from "./customHooks/ScrollToTop";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <ScrollToTop />
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
