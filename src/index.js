import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

const defaultState = {
  likes: 0,
};

//action = {
//            type: "строка",
//            payload: {данные},
//          }

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_LIKE":
      return { ...state, likes: state.likes + action.payload };
    case "REMOVE_LIKE":
      return { ...state, likes: state.likes - action.payload };
    default:
      return state;
  }
};

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
