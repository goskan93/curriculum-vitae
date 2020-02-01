import React from "react";
import { Provider } from "react-redux";
import "./CSS/reset-css.css";
import "./CSS/styles.css";
import Home from "./views/Home";

import { store } from "./store/index";

export default function App() {
  return (
    <Provider store={store}>
      <Home></Home>
    </Provider>
  );
}
