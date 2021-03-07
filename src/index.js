import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { createStore, applyMiddleware } from "redux";
import { counterReducer } from "./reducer";
import { Provider } from "react-redux";
import logger from "redux-logger";

const myLogger = (store) => (next) => (action) => {
  // console.log("Middleware ran!");
  return next(action);
};

const secondMiddleware = (store) => (next) => (action) => {
  // console.log("Second Middleware ran!");
  return next(action);
};

const capAtTen = (store) => (next) => (action) => {
  if (store.getState() >= 10) {
    return next({ type: "RESET" });
  }

  return next(action);
};

// const logger = (store) => {
//   return (next) => {
//     return (action) => {
//       console.log("Middleware ran!");
//       return next(action);
//     };
//   };
// };

const store = createStore(
  counterReducer,
  applyMiddleware(myLogger, secondMiddleware, capAtTen, logger)
);
// const store = createStore(counterReducer);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  rootElement
);
