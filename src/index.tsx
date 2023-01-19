import React from "react";
import ReactDOM from "react-dom";
//import { Provider } from "react-redux";
//import store from "./redux/store";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

/* ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
); */

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
